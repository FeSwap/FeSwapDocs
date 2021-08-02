---
id: StakingTwinRewards
title: Contract Staking Reward
hide_title: true
sidebar_label: Staking Reward
hide_table_of_contents: true
---

<div  className="title">
  <h1> Staking Reward Contact </h1>
</div>

____________________

FeSwap staking reward contact receives liquidity token deposited by users, and distributes FESW tokens based on the amount and duration of deposited liquidity tokens. 

One staking reward contact is created for one token pair. Normally just a very few of token pairs are rewarded for staking. 

ETH/WBTC, ETH/USDT, ETH/FESW are the first 3 token pairs scheduled to be rewarded for staking during the firts 4 months at the first year. 

On ETH test chain, only ETH/FESW token pair is rewarded for staking at this test phase. Totally 10,000,000 FESW are filled as the reward for the duration of 4 month.

As each token pair has two liquidity sub-pools, the two liquidity tokens of the two liquidity sub-pools are rewarded completely same.   

### <span className="title"> Staking Reward Contract Address </span>

| ETH NetWork | Token Pair | Staking Reward Contract Address |
|:----------: | :-------:  | :-----------------------------: |
| ETH Mainnet |  ETH/WBTC   |  Waiting |
| ETH Mainnet |  ETH/USDT   |  Waiting |
| ETH Mainnet |  ETH/FESW   |  Waiting |
| ETH Testnet Ropsten |  ETH/FESW   | [0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf](https://ropsten.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf) |
| ETH Testnet Rinkeby |  ETH/FESW   | [0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf](https://rinkeby.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf)|
| ETH Testnet Goerli |  ETH/FESW   | [0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf](https://goerli.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf)|
| ETH Testnet Kovan |  ETH/FESW   | [0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf](https://kovan.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf) |

### <span className="title"> Sponsor Contract Code </span>

The open-source FeSwap `StakingTwinRewards` contact is stored at [Github Governance Project](https://github.com/FeSwap/Governance/blob/main/contracts/StakingTwinRewards.sol) 

Following is the code deployed:

```sol title="StakingTwinRewards.sol"
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// Inheritance
import "./interfaces/IStakingTwinRewards.sol";
import "./RewardsTwinDistributionRecipient.sol";

contract StakingTwinRewards is IStakingTwinRewards, RewardsTwinDistributionRecipient, ReentrancyGuard {
    using SafeMath  for uint256;
    using SafeERC20 for IERC20;
    struct AmountWithSignature {
        uint256     amount;
        uint        deadline;
        uint8       v;
        bytes32     r;
        bytes32     s;
    }

    /* ========== STATE VARIABLES ========== */

    IERC20  public rewardsToken;
    IERC20  public stakingTokenA;
    IERC20  public stakingTokenB;
    uint256 public periodFinish = 0;
    uint256 public rewardRate = 0;
    uint256 public rewardsDuration = 0 days;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    uint256 private _totalSupplyA;
    uint256 private _totalSupplyB;

    mapping(address => uint256) private _balancesA;
    mapping(address => uint256) private _balancesB;

    /* ========== CONSTRUCTOR ========== */

    constructor(
        address _rewardsDistribution,
        address _rewardsToken,
        address _stakingTokenA,
        address _stakingTokenB
    ) {
        require(_stakingTokenA < _stakingTokenB, "Wrong token order");
        rewardsToken = IERC20(_rewardsToken);
        stakingTokenA = IERC20(_stakingTokenA);
        stakingTokenB = IERC20(_stakingTokenB);
        rewardsDistribution = _rewardsDistribution;
    }

    /* ========== VIEWS ========== */

    function totalSupply() external override view returns (uint256, uint256) {
        return (_totalSupplyA, _totalSupplyB);
    }

    function balanceOf(address account) external override view returns (uint256, uint256) {
        return (_balancesA[account], _balancesB[account]);
    }

    function lastTimeRewardApplicable() public override view returns (uint256) {
        return Math.min(block.timestamp, periodFinish);
    }

    function rewardPerToken() public override view returns (uint256) {
        uint256 _totalSupply = _totalSupplyA.add(_totalSupplyB);
        if(_totalSupply == 0) {
            return rewardPerTokenStored;
        }
        return
            rewardPerTokenStored.add(
                lastTimeRewardApplicable().sub(lastUpdateTime).mul(rewardRate).mul(1e18).div(_totalSupply)
            );
    }

    function earned(address account) public override view returns (uint256) {
        return (_balancesA[account].add(_balancesB[account])).mul(rewardPerToken().sub(userRewardPerTokenPaid[account])).div(1e18).add(rewards[account]);
    }

    function getRewardForDuration() external override view returns (uint256) {
        return rewardRate.mul(rewardsDuration);
    }

    /* ========== MUTATIVE FUNCTIONS ========== */

    function stakeWithPermit(AmountWithSignature calldata amountA, AmountWithSignature calldata amountB) external nonReentrant updateReward(msg.sender) {
        require( (amountA.amount > 0) || (amountB.amount > 0), "Cannot stake 0");
        if(amountA.amount > 0) {
            _totalSupplyA = _totalSupplyA.add(amountA.amount);
            _balancesA[msg.sender] = _balancesA[msg.sender].add(amountA.amount);

            // permit
            IFeSwapERC20(address(stakingTokenA)).permit(msg.sender, address(this), amountA.amount, amountA.deadline, amountA.v, amountA.r, amountA.s);
            stakingTokenA.safeTransferFrom(msg.sender, address(this), amountA.amount);
        }
        if(amountB.amount > 0) {
            _totalSupplyB = _totalSupplyB.add(amountB.amount);
            _balancesB[msg.sender] = _balancesB[msg.sender].add(amountB.amount);

            // permit
            IFeSwapERC20(address(stakingTokenB)).permit(msg.sender, address(this), amountB.amount, amountB.deadline, amountB.v, amountB.r, amountB.s);
            stakingTokenB.safeTransferFrom(msg.sender, address(this), amountB.amount);
        }

        emit Staked(msg.sender, amountA.amount, amountB.amount);
    }

    function stake(uint256 amountA, uint256 amountB) external override nonReentrant updateReward(msg.sender) {
        require( (amountA > 0) || (amountB > 0), "Cannot stake 0");
        if( amountA > 0 ){
            _totalSupplyA = _totalSupplyA.add(amountA);
            _balancesA[msg.sender] = _balancesA[msg.sender].add(amountA);
            stakingTokenA.safeTransferFrom(msg.sender, address(this), amountA);
        }
        if( amountB > 0 ){
            _totalSupplyB = _totalSupplyB.add(amountB);
            _balancesB[msg.sender] = _balancesB[msg.sender].add(amountB);
            stakingTokenB.safeTransferFrom(msg.sender, address(this), amountB);
        }

        emit Staked(msg.sender, amountA, amountB);
    }

    function withdraw(uint256 amountA, uint256 amountB) public override nonReentrant updateReward(msg.sender) {
        require( (amountA > 0) || (amountB > 0), "Cannot withdraw 0");
        if( amountA > 0 ){
            _totalSupplyA = _totalSupplyA.sub(amountA);
            _balancesA[msg.sender] = _balancesA[msg.sender].sub(amountA);
            stakingTokenA.safeTransfer(msg.sender, amountA);
        }
        if( amountB > 0 ){
            _totalSupplyB = _totalSupplyB.sub(amountB);
            _balancesB[msg.sender] = _balancesB[msg.sender].sub(amountB);
            stakingTokenB.safeTransfer(msg.sender, amountB);
        }
        emit Withdrawn(msg.sender, amountA, amountB);
    }

    function getReward() public override nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            rewardsToken.safeTransfer(msg.sender, reward);
            emit RewardPaid(msg.sender, reward);
        }
    }

    function exit() external override {
        withdraw(_balancesA[msg.sender], _balancesB[msg.sender]);
        getReward();
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    function notifyRewardAmount(uint256 reward, uint256 _rewardsDuration) external override onlyRewardsDistribution updateReward(address(0)) {
        require(_rewardsDuration > 0 , "Wrong duration");

        if (block.timestamp >= periodFinish) {
            rewardRate = reward.div(_rewardsDuration);
        } else {
            uint256 remaining = periodFinish.sub(block.timestamp);
            uint256 leftover = remaining.mul(rewardRate);
            rewardRate = reward.add(leftover).div(_rewardsDuration);
        }

        // Ensure the provided reward amount is not more than the balance in the contract.
        // This keeps the reward rate in the right range, preventing overflows due to
        // very high values of rewardRate in the earned and rewardsPerToken functions;
        // Reward + leftover must be less than 2^256 / 10^18 to avoid overflow.
        uint balance = rewardsToken.balanceOf(address(this));
        require(rewardRate <= balance.div(_rewardsDuration), "Provided reward too high");

        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp.add(_rewardsDuration);
        rewardsDuration = _rewardsDuration;
        emit RewardAdded(reward, _rewardsDuration);
    }

    /* ========== MODIFIERS ========== */

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = lastTimeRewardApplicable();
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    /* ========== EVENTS ========== */

    event RewardAdded(uint256 reward, uint256 _rewardsDuration);
    event Staked(address indexed user, uint256 amountA, uint256 amountB);
    event Withdrawn(address indexed user, uint256 amountA, uint256 amountB);
    event RewardPaid(address indexed user, uint256 reward);
}

interface IFeSwapERC20 {
    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
```

