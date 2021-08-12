---
id: sponsor
title: Contract Sponsor
hide_title: true
sidebar_label: Sponsor
hide_table_of_contents: true
---

<div  className="title">
  <h1> FeSwap Sponsor </h1>
</div>

____________________

FeSwap `Sponsor` contract receives donation from users, and send back FESW tokens accordingly.

The initial reward rate is 100,000 FESW/ETH, and the reward rate decreases linearly on the rate of 20 FESW per totally received ETH.

The same reward rate applies to all tranactions within the same block, and it is recalculated for each block receiving sponsor. 

The total sponsor cap is 1000 ETH, maximum cap is 1001 ETH. Totally 100,000,000 FESW are filled into `Sponsor` contract. If the sponsor cap is reached, all the left FESW will be burned, otherwise left FESW will be claimed back.

The total duration receiving sponsor is 30 days, starting from the time specified by the FeSwap `Sponsor` contract while it is deployed.  

### <span className="title"> Reward Rate Example: </span>

Assuming 100 ETH already received, the up-to-date reward rate is 100,000 FESW/ETH - 100 * 20 FESW/ETH  = 98,000 FESW/ETH

### <span className="title"> Sponsor Contract Address </span>

| ETH NetWork |Sponsor Contract Address |
|:------: | :--------------: |
| ETH Mainnet |  [0x74B6F6884FE98259aF4127ca9A5D580Da934E52b](https://etherscan.io/address/0x74B6F6884FE98259aF4127ca9A5D580Da934E52b) |
| ETH Testnet Ropsten | [0xb7196a981de991cdcaee06eb7c39c84b5277d234](https://ropsten.etherscan.io/address/0xb7196a981de991cdcaee06eb7c39c84b5277d234) |
| ETH Testnet Rinkeby | [0xb7196a981de991cdcaee06eb7c39c84b5277d234](https://rinkeby.etherscan.io/address/0xb7196a981de991cdcaee06eb7c39c84b5277d234)|
| ETH Testnet Goerli | [0xb7196a981de991cdcaee06eb7c39c84b5277d234](https://goerli.etherscan.io/address/0xb7196a981de991cdcaee06eb7c39c84b5277d234)|
| ETH Testnet Kovan | [0xb7196a981de991cdcaee06eb7c39c84b5277d234](https://kovan.etherscan.io/address/0xb7196a981de991cdcaee06eb7c39c84b5277d234) |

### <span className="title"> FeSwap Sponsor Deployments Parameters </span>

- ** constructor(address feswapToken, address feswapFund, address feswapBurner, uint256 sponsorStartTime) **

| Parameters | Value  |  information |
| :--------- | :---------------- | :-------- |
| feswapToken |  [0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe](https://etherscan.io/address/0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe) | This is [FESW token](../Contracts/fesw) address. |
|feswapFund | [0x2d64435239C061C2fF0590AFCc8E49c46472CA7f](https://etherscan.io/address/0x2d64435239C061C2fF0590AFCc8E49c46472CA7f) | This is the address receiving the finally sponsored ETH, which is the FeSwap Foundation address. |
| feswapBurner | [0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1](https://etherscan.io/address/0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1) | This is the address of [TimeLock Governance](../Contracts/Timelock) contract, which burns all left FESW token if the sponsor target is reached. |
| sponsorStartTime | 0x61170968 | This is the timestamp when the sponsor contract is going to start. <br/>0x61170968 means 2021-08-14 08:08:08. |

*** Parameters on ETH Chain *

### <span className="title"> Sponsor Contract Code </span>

The open-source FeSwap `Sponsor` contact is stored at [Github Governance Project](https://github.com/FeSwap/Governance/blob/main/contracts/FeswSponsor.sol) 

Following is the code deployed:

```sol title="FeswSponsor.sol"
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "./interfaces/IERC20.sol";
import "./utils/SafeMath.sol";
import "./utils/TransferHelper.sol";

/**
 * @title FeswSponsor contract
 * @dev To raise sponsor and give away FESW
 */

contract FeswSponsor { 

    using SafeMath for uint256;

    // Public variables
    // FeSwap sponsor raising target: 1000 ETH
    uint256 public constant TARGET_RAISING_ETH = 1_000e18;    

    // FeSwap sponsor raising cap: 1001 ETH
    uint256 public constant MIN_GUARANTEE_ETH = 1e18;    

    // Initial FESW giveaway rate per ETH: 100K FESW/ETH
    uint256 public constant INITIAL_FESW_RATE_PER_ETH = 100_000;    

    // FESW giveaway change rate for total sponsored ETH, corresponding granulity is 0.05ETH
    uint256 public constant FESW_CHANGE_RATE_VERSUS_ETH = 20; 

    // FESW sponsor raising duration: 30 days 
    uint256 public constant SPONSOR_DURATION = 30 * 24 * 3600;     

    // contract of Feswap DAO Token
    address public FeswapToken;     

    // Feswap foundation address
    address public FeswapFund;     

    // Feswap Burner address
    address public FeswapBurner;     

    // Total received ETH
    uint256 public TotalETHReceived;   

    // Current giveaway rate
    uint256 public CurrentGiveRate;    

    // Sponsor start timestamp
    uint64 public SponsorStartTime;

    // Last block timestamp
    uint64 public LastBlockTime;

    // If sponsor raising finalized
    uint64 public SponsorFinalized;

    // Events for received sponsor
    event EvtSponsorReceived(address indexed from, address indexed to, uint256 ethValue);

    // Events for finalized sponsor
    event EvtSponsorFinalized(address indexed to, uint256 ethValue);
  
    /**
     * @dev Initializes the contract with fund and burner address
     */
    constructor (address feswapToken, address feswapFund, address feswapBurner, uint256 sponsorStartTime ) 
    {
        FeswapToken         = feswapToken;
        FeswapFund          = feswapFund; 
        FeswapBurner        = feswapBurner; 
        SponsorStartTime    = uint64(sponsorStartTime);
    }

    /**
     * @dev Receive the sponsorship
     * @param feswapReceiver The address receiving the giveaway FESW token
     */
    function Sponsor(address feswapReceiver) external payable returns (uint256 sponsorAccepted) {
        require(block.timestamp >= SponsorStartTime, 'FESW: SPONSOR NOT STARTED');
        require(block.timestamp < (SponsorStartTime + SPONSOR_DURATION), 'FESW: SPONSOR ENDED');
        require(TotalETHReceived < TARGET_RAISING_ETH, 'FESW: SPONSOR COMPLETED');

        // calculate the giveaway rate
        uint256 feswGiveRate;
        if(block.timestamp > LastBlockTime) {
            // granulity is 0.05 ETH
            feswGiveRate = INITIAL_FESW_RATE_PER_ETH - TotalETHReceived.mul(FESW_CHANGE_RATE_VERSUS_ETH).div(1e18);
            CurrentGiveRate = feswGiveRate;
            LastBlockTime = uint64(block.timestamp);
        } else {
            feswGiveRate = CurrentGiveRate;
        }

        // Maximum 1001 ETH accepted, extra ETH will be returned back
        sponsorAccepted = TARGET_RAISING_ETH - TotalETHReceived;
        if(sponsorAccepted < MIN_GUARANTEE_ETH){
            sponsorAccepted = MIN_GUARANTEE_ETH;
        }
        if (msg.value < sponsorAccepted){
            sponsorAccepted = msg.value;          
        }                                                        

        // Accumulate total ETH sponsored
        TotalETHReceived += sponsorAccepted;                                                              

        // FESW give away
        uint256 feswapGiveaway = sponsorAccepted.mul(feswGiveRate);
        TransferHelper.safeTransfer(FeswapToken, feswapReceiver, feswapGiveaway);
 
        // return back extra ETH
        if(msg.value > sponsorAccepted){
            TransferHelper.safeTransferETH(msg.sender, msg.value - sponsorAccepted);
        }    
        
        emit EvtSponsorReceived(msg.sender, feswapReceiver, sponsorAccepted);
    }

    /**
     * @dev Finalize Feswap sponsor raising
     */
    function finalizeSponsor() public {
        require(SponsorFinalized == 0, 'FESW: SPONSOR FINALIZED');
        require(msg.sender == FeswapFund, 'FESW: NOT ALLOWED');
        require( (block.timestamp >= (SponsorStartTime + SPONSOR_DURATION)) 
                    || (TotalETHReceived >= TARGET_RAISING_ETH), 'FESW: SPONSOR ONGOING');

        // If sponsor raising succeeded, burning left FESW
        address to = FeswapBurner;

        // If sponsor raising failed 
        if(TotalETHReceived < TARGET_RAISING_ETH) to = FeswapFund;

        // Claim or burn the left FESW
        uint256 feswLeft = IERC20(FeswapToken).balanceOf(address(this));
        TransferHelper.safeTransfer(FeswapToken, to, feswLeft);

        // Claim the raised sponsor
        TransferHelper.safeTransferETH(FeswapFund, address(this).balance );
        SponsorFinalized = 0xA5;

        emit EvtSponsorFinalized(FeswapFund, TotalETHReceived);
    }
}
```

