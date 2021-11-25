---
id: contracts
title: Harmony Contracts
hide_title: true
sidebar_label: Contracts on Harmony
---

<div  className="title">
  <h1> FeSwap Contracts on Harmony (ONE) </h1>
</div>

_______________________

### <span className="title"> Governance Token Contract </span>

FESW@O is the FeSwap DAO governance token on Harmony. Its total supply is 1,000,000,000 FESW@O, and is distributed to FeSwap 
community members based on their contribution to FeSwap DAO. Please refer to [Governance on Harmony](./governance) for 
the distribution rules.

| Harmony Network | FESW@O On-Chain Information |
|:-----------:|:---------------------------:|
| Harmony Mainnet |       Available soon             |
| Harmony Testnet | [0x31C6ba28f9692564a6ebd516676f2D49ac8C0dba](https://explorer.pops.one/address/0x31c6ba28f9692564a6ebd516676f2d49ac8c0dba) |

*** Github Code: *  [`Governance Token Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/Feswap.sol) 

_______________________

### <span className="title"> Liquidity Pool Factory Contract </span>

The FeSwap `Factory` contract is the manager of all FeSwap liquidity pools on Harmony. `Factory` is responsible to 
create all the asset pair liquidity pools, and to store the listing information of these pools. 

Only NFT owners of the asset pairs have the right to create the corresponding liquidity pool. Two correlated sub-pools 
are created for each token pair. `Factory` contract, together with `NFT` contract, provides the interface for the NFT owners 
to config the liquidity pool, mainly including the arbitrage trigger rate, swapping profit receiver address, and price 
oracle on-off swicth.

| Harmony Network | On-Chain Liquidity Pool Factory Contract |
|:----------: | :-------------------------------------: |
| Harmony Mainnet |          Available soon                 |
| Harmony Testnet | [0x69752367a0720963Aec78760EeAa208aFcF09122](https://explorer.pops.one/address/0x69752367a0720963aec78760eeaa208afcf09122) |

*** Github Code: *  [`Liquidity Pool Factory Contract`](https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapFactory.sol) 

_______________________

### <span className="title"> Exchange Router Contract </span>

`Exchange Router` is the contract that users mostly interact with, which provides to users the interface of 
liquidity-adding, liquidity-removing and token-swapping. 

| Harmony Network | Contract Address |
|:------: | :--------------: |
| Harmony Mainnet |   Available soon   |
| Harmony Testnet | [0x364cD4f1202a48e9e6C6De502B2dde572Ef57281](https://explorer.pops.one/address/0x364cD4f1202a48e9e6C6De502B2dde572Ef57281) |

*** Github Code: *  [`Exchange Router Contract`](https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapRouter.sol) 

_______________________


### <span className="title"> Asset Pair NFT Contract </span>

`Asset Pair NFT` is the contract that handles user's NFT bidding process, and provides interface for NFT owners to create the liquidity pool, buy/sell the liquidity pool NFTs. Please refer to [NFT bidding on Harmony](./nft) for the detailed bidding rules.

The NFT owner may earn 60% of the protocol profit of the underlying crypto asset liquidity pool.

| Harmony Network | On-Chain Asset Pair NFT Contract  |
|:----------: | :-------------------------------: |
| Harmony Mainnet |      Available soon             |
| Harmony Testnet | [0x928d6F271F4CdEa1A544F40898350d1Ba55018D4](https://explorer.pops.one/address/0x928d6F271F4CdEa1A544F40898350d1Ba55018D4) |

*** Github Code: *  [`Asset Pair NFT Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/FeswaNFT.sol)

_______________________


### <span className="title"> Timelock contract </span>

`TimeLock` is the contract used to finally execute the proposals that pass the FeSwap governance voting successfully. 
Only the [`FeSwap Governor`](./contracts#feswap-governor-contract) contract can call `TimeLock` to queue/excute the proposals. 

| Harmony Network | On-Chain Timelock contract |
| :---------: | :----------------: |
| Harmony Mainnet |  Available soon       |
| Harmony Testnet | [0xC2078563d1cE2B8fF241A087B37344A7Ea0a07Dd](https://explorer.pops.one/address/0xC2078563d1cE2B8fF241A087B37344A7Ea0a07Dd) 

*** Github Code: *  [`Timelock contract`](https://github.com/FeSwap/Governance/blob/main/contracts/Timelock.sol)

_______________________


### <span className="title"> FeSwap Governor Contract </span>

`FeswGovernor` is the contract that users can call to submit governance proposals and vote on these proposals. 
Anyone owning more than 10,000,000 FESW@O voting-weight can submit proposals, and one proposal that gets more 
than 40,000,000 FESW@O votes and no more against votes will pass the vote. Anyone can call `FeswGovernor` to 
execute the succeeded proposals.

| Harmony Network | On-Chain Governor Contract |
| :---------: | :----------------: |
| Harmony Mainnet |  Available soon    |
| Harmony Testnet | [0x7725f9A802E1612eC5e5Bf65A73D4318cdA0C4a9](https://explorer.pops.one/address/0x7725f9A802E1612eC5e5Bf65A73D4318cdA0C4a9) |

*** Github Code: *  [`FeSwap Governor Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/FeswSponsor.sol)

____________________


### <span className="title"> Staking Reward Factory Contract </span>

`Staking Reward Factory` is used to feul FESW@O tokens to the staking reward contracts for liquidity mining.

| Harmony Network | On-Chain Staking Reward Factory Contract  |
|:----------: | :-----------------------------: |
| Harmony Mainnet |  Available soon  |
| Harmony Testnet | [0x9B592DbCf45F8260657BC9Ac8BB3bCFE2C83d99C](https://explorer.pops.one/address/0x9B592DbCf45F8260657BC9Ac8BB3bCFE2C83d99C) |

*** Github Code: *  [`Staking Reward Factory Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/StakingTwinRewardsFactory.sol)


### <span className="title"> Patch Factory Contract </span>

`Patch Factory` contract is used to manage the patch of the core FeSwap protocol contract. Patch can be used to add new features 
to the current contract, or to replace part of the feature of current cantract. Patch activating and deactivating is strictly 
controlled by the manager of `Patch Factory`

| Harmony Network | On-Chain Patch Factory Contract  |
|:----------: | :-----------------------------: |
| Harmony Mainnet |  Available soon  |
| Harmony Testnet | [0x6A8FE4753AB456e85E1379432d92ABF1fB49B5Df](https://explorer.pops.one/address/0x6A8FE4753AB456e85E1379432d92ABF1fB49B5Df) |

*** Github Code: *  [`Patch Factory Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/MetamorphicContractFactory.sol)

_______________________











