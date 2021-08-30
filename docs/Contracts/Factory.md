---
id: factory
title: Contract Factory
hide_title: true
sidebar_label: Factory
hide_table_of_contents: true
---

<div  className="title">
  <h1> FeSwap Factory Contract </h1>
</div>

_______________________

FeSwap `Factory` contract is the contract that manages all liquidity-pool contracts. `Factory` is responsible to create all the token-pair liquidity pools, and store the reference address to these pools. 

Only the NFT owner of the corresponding token-pair has the right to create the owned liquidity pool contract. Two linked sub-pools are created for each token pair. The owner can also use `Factory` contract to config a few transaction parameters of the liquidity pool, mainly the arbitrage trigger rate, and the swapping profit receiver. 

### <span className="title"> Factory Contract Address </span>

| ETH NetWork | Feswap Factory Contract Address |
|:------: | :--------------: |
| ETH Mainnet |  [0xEDc22C273ea25EeDA49F049e528150dBA367Da9A](https://etherscan.io/address/0xedc22c273ea25eeda49f049e528150dba367da9a) |
| ETH Testnet Ropsten | [0x75f7b730c51610aba6f3d89deb4864f156c8e747](https://ropsten.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747) |
| ETH Testnet Rinkeby | [0x75f7b730c51610aba6f3d89deb4864f156c8e747](https://rinkeby.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747)|
| ETH Testnet Goerli | [0x1BdB1555bDc425183ad56FcB31c06205726FEFB0](https://goerli.etherscan.io/address/0x1BdB1555bDc425183ad56FcB31c06205726FEFB0)|
| ETH Testnet Kovan | [0x75f7b730c51610aba6f3d89deb4864f156c8e747](https://kovan.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747) |

### <span className="title"> FeSwapFactory Code </span>

The open-source FeSwap `Factory` contact is stored at [Github FeSwapCore Project](https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapFactory.sol) 

Following is the code deployed:

```sol title="FeSwapFactory.sol"
// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

import './interfaces/IFeSwapFactory.sol';
import './FeSwapPair.sol';

contract FeSwapFactory is IFeSwapFactory {
    uint64 public constant RATE_TRIGGER_FACTORY         = 10;       //  price difference be 1%
    uint64 public constant RATE_CAP_TRIGGER_ARBITRAGE   = 50;       //  price difference < 5%
    uint64 public constant RATE_PROFIT_SHARE            = 11;       //  Feswap and Pair owner share 1/12 of the swap profit, 11 means 1/12

    address public override factoryAdmin;
    address public override feeTo;
    address public override routerFeSwap;
    uint64 public override rateTriggerFactory;
    uint64 public override rateCapArbitrage;
    uint64 public override rateProfitShare;                        // 1/X => rateProfitShare = (X-1)

    mapping(address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    event PairCreated(address indexed tokenA, address indexed tokenB, address pairAAB, address pairABB, uint allPairsLength);
    event PairOwnerChanged(address indexed pairAAB, address indexed pairABB, address oldOwner, address newOwner);

    constructor(address _factoryAdmin) public {                     //factoryAdmin will be set to TimeLock after Feswap works normally
        factoryAdmin        = _factoryAdmin;
        rateTriggerFactory  = RATE_TRIGGER_FACTORY;
        rateCapArbitrage    = RATE_CAP_TRIGGER_ARBITRAGE;
        rateProfitShare     = RATE_PROFIT_SHARE;
     }

    function allPairsLength() external view override returns (uint) {
        return allPairs.length;
    }

    
    function getFeeInfo() external view override returns (address _feeTo, uint256 _rateProfitShare) {
        return (feeTo, rateProfitShare);
    }

    function createUpdatePair(address tokenA, address tokenB, address pairOwner, uint256 rateTrigger) external override returns (address pairAAB, address pairABB ) {
        require(tokenA != tokenB, 'FeSwap: IDENTICAL_ADDRESSES');
        // pairOwner allowed to zero to discard the profit
        require(tokenA != address(0) && tokenB != address(0) && routerFeSwap != address(0) , 'FeSwap: ZERO_ADDRESS');
        require((msg.sender == factoryAdmin) || (msg.sender == routerFeSwap) , 'FeSwap: FORBIDDEN');
        require(rateTrigger <= rateCapArbitrage, 'FeSwap: GAP TOO MORE');

        pairAAB = getPair[tokenA][tokenB];
        if(pairAAB != address(0)) {
            pairABB = getPair[tokenB][tokenA];
            address oldOwner = IFeSwapPair(pairAAB).pairOwner();
            if(oldOwner!=pairOwner) {
                IFeSwapPair(pairAAB).setOwner(pairOwner);           // Owner Security must be checked by Router
                IFeSwapPair(pairABB).setOwner(pairOwner);
                emit PairOwnerChanged(pairAAB, pairABB, oldOwner, pairOwner);
            }
            if(rateTrigger!=0)
            {
                rateTrigger = rateTrigger*6 + rateTriggerFactory*4 + 10000;     // base is 10000
                IFeSwapPair(pairAAB).adjusArbitragetRate(rateTrigger); 
                IFeSwapPair(pairABB).adjusArbitragetRate(rateTrigger);                
            }
        } else {
            bytes memory bytecode = type(FeSwapPair).creationCode;
            bytes32 saltAAB = keccak256(abi.encodePacked(tokenA, tokenB));
            bytes32 saltABB = keccak256(abi.encodePacked(tokenB, tokenA));
            assembly {
                pairAAB := create2(0, add(bytecode, 32), mload(bytecode), saltAAB)
                pairABB := create2(0, add(bytecode, 32), mload(bytecode), saltABB)
            }

            if(rateTrigger == 0) rateTrigger = rateTriggerFactory;
            rateTrigger = rateTrigger*6 + rateTriggerFactory*4 + 10000;

            IFeSwapPair(pairAAB).initialize(tokenA, tokenB, pairOwner, routerFeSwap, rateTrigger);
            getPair[tokenA][tokenB] = pairAAB;
            allPairs.push(pairAAB);

            IFeSwapPair(pairABB).initialize(tokenB, tokenA, pairOwner, routerFeSwap, rateTrigger);
            getPair[tokenB][tokenA] = pairABB;
            allPairs.push(pairABB);

            emit PairCreated(tokenA, tokenB, pairAAB, pairABB, allPairs.length);
        }
    }

    function setFeeTo(address _feeTo) external override {
        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');
        feeTo = _feeTo;
    }

    function setFactoryAdmin(address _factoryAdmin) external override {
        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');
        factoryAdmin = _factoryAdmin;
    }

    function setRouterFeSwap(address _routerFeSwap) external override {
        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');
        routerFeSwap = _routerFeSwap;                                         // for Router Initiation
    }    

    function configFactory(uint64 newTriggerRate, uint64 newRateCap, uint64 newProfitShareRate) external override {
        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');
        rateTriggerFactory  = newTriggerRate;
        rateCapArbitrage    = newRateCap;
        rateProfitShare     = newProfitShareRate;                   // 1/X => rateProfitShare = (X-1)
    } 
    
    // Function to update Router in case of emergence, factoryAdmin will be set to TimeLock after Feswap works normally
    // routerFeSwap must be secured and absolutely cannot be replaced uncontrolly.
    function managePair(address _tokenA, address _tokenB, address _pairOwner, address _routerFeSwap) external override {
        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');
        address pairAAB = getPair[_tokenA][_tokenB];
        address pairABB = getPair[_tokenB][_tokenA];
        
        require(pairAAB != address(0), 'FeSwap: NO TOKEN PAIR');
        IFeSwapPair(pairAAB).initialize(_tokenA, _tokenB, _pairOwner, _routerFeSwap, 0);
        IFeSwapPair(pairABB).initialize(_tokenB, _tokenA, _pairOwner, _routerFeSwap, 0);
    } 
}
```