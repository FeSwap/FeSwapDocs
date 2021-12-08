---
id: contracts
title: Polygon Contracts
hide_title: true
sidebar_label: Contracts on Polygon
---

<div  className="title">
  <h1> FeSwap Contracts on Polygon </h1>
</div>

_______________________

### <span className="title"> Governance Token Contract </span>

FESW@M is the FeSwap DAO governance token on Polygon. Its total supply is 1,000,000,000 FESW@M, and is distributed to FeSwap 
community members based on their contribution to FeSwap DAO. Please refer to [Governance on Polygon](./governance) for 
the distribution rules.

| Polygon Network | FESW@M On-Chain Information |
|:-----------:|:---------------------------:|
| Polygon Mainnet | [0x0bE3afD0A28F0AA787D113c08d1d8A903cF6eeE9](https://polygonscan.com/token/0x0be3afd0a28f0aa787d113c08d1d8a903cf6eee9)        |
| Polygon Testnet | [0x31C6ba28f9692564a6ebd516676f2D49ac8C0dba](https://mumbai.polygonscan.com/token/0x31c6ba28f9692564a6ebd516676f2d49ac8c0dba) |

*** Github Code: *  [`Governance Token Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/Feswap.sol) 

_______________________

### <span className="title"> Liquidity Pool Factory Contract </span>

The FeSwap `Factory` contract is the manager of all FeSwap liquidity pools on Polygon. `Factory` is responsible to 
create all the asset pair liquidity pools, and to store the listing information of these pools. 

Only NFT owners of the asset pairs have the right to create the corresponding liquidity pool. Two correlated sub-pools 
are created for each token pair. `Factory` contract, together with `NFT` contract, provides the interface for the NFT owners 
to config the liquidity pool, mainly including the arbitrage trigger rate, swapping profit receiver address, and price 
oracle on-off swicth.

| Polygon Network | On-Chain Liquidity Pool Factory Contract |
|:----------: | :-------------------------------------: |
| Polygon Mainnet | [0x91289e8150E20Ff7CA8478dAd6DCC55D5c85Ac2D](https://polygonscan.com/address/0x91289e8150E20Ff7CA8478dAd6DCC55D5c85Ac2D) |
| Polygon Testnet | [0x69752367a0720963Aec78760EeAa208aFcF09122](https://mumbai.polygonscan.com/address/0x69752367a0720963Aec78760EeAa208aFcF09122) |

*** Github Code: *  [`Liquidity Pool Factory Contract`](https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapFactory.sol) 

_______________________

### <span className="title"> Exchange Router Contract </span>

`Exchange Router` is the contract that users mostly interact with, which provides to users the interface of 
liquidity-adding, liquidity-removing and token-swapping. 

| Polygon Network | Contract Address |
|:------: | :--------------: |
| Polygon Mainnet | [0x938B544Ce2AE40B6dE0Ab728a69c37A60159689A](https://polygonscan.com/address/0x938b544ce2ae40b6de0ab728a69c37a60159689a)   |
| Polygon Testnet | [0x364cD4f1202a48e9e6C6De502B2dde572Ef57281](https://mumbai.polygonscan.com/address/0x364cD4f1202a48e9e6C6De502B2dde572Ef57281) |

*** Github Code: *  [`Exchange Router Contract`](https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapRouter.sol) 

_______________________


### <span className="title"> Asset Pair NFT Contract </span>

`Asset Pair NFT` is the contract that handles user's NFT bidding process, and provides interface for NFT owners to create the liquidity pool, buy/sell the liquidity pool NFTs. Please refer to [NFT bidding on Polygon](./nft) for the detailed bidding rules.

The NFT owner may earn 60% of the protocol profit of the underlying crypto asset liquidity pool.

| Polygon Network | On-Chain Asset Pair NFT Contract  |
|:----------: | :-------------------------------: |
| Polygon Mainnet | [0xA2f089377f4Dddf971ba65a69Fb4DFDD5fAf16Bb](https://polygonscan.com/address/0xa2f089377f4dddf971ba65a69fb4dfdd5faf16bb) |
| Polygon Testnet | [0x928d6F271F4CdEa1A544F40898350d1Ba55018D4](https://mumbai.polygonscan.com/address/0x928d6F271F4CdEa1A544F40898350d1Ba55018D4) |

*** Github Code: *  [`Asset Pair NFT Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/FeswaNFT.sol)

_______________________


### <span className="title"> Timelock contract </span>

`TimeLock` is the contract used to finally execute the proposals that pass the FeSwap governance voting successfully. 
Only the [`FeSwap Governor`](./contracts#feswap-governor-contract) contract can call `TimeLock` to queue/excute the proposals. 

| Polygon Network | On-Chain Timelock contract |
| :---------: | :----------------: |
| Polygon Mainnet | [0x858ebb27eE7EeEA06426171e58CA14D4fA3b77A9](https://polygonscan.com/address/0x858ebb27ee7eeea06426171e58ca14d4fa3b77a9)  |
| Polygon Testnet | [0xC2078563d1cE2B8fF241A087B37344A7Ea0a07Dd](https://mumbai.polygonscan.com/address/0xC2078563d1cE2B8fF241A087B37344A7Ea0a07Dd)  | 

*** Github Code: *  [`Timelock contract`](https://github.com/FeSwap/Governance/blob/main/contracts/Timelock.sol)

_______________________


### <span className="title"> FeSwap Governor Contract </span>

`FeswGovernor` is the contract that users can call to submit governance proposals and vote on these proposals. 
Anyone owning more than 10,000,000 FESW@M voting-weight can submit proposals, and one proposal that gets more 
than 40,000,000 FESW@M votes and no more against votes will pass the vote. Anyone can call `FeswGovernor` to 
execute the succeeded proposals.

| Polygon Network | On-Chain Governor Contract |
| :---------: | :----------------: |
| Polygon Mainnet | [0x64BEeef954BDf345CeE176E37dd622Ce1d39c55D](https://polygonscan.com/address/0x64beeef954bdf345cee176e37dd622ce1d39c55d)   |
| Polygon Testnet | [0x7725f9A802E1612eC5e5Bf65A73D4318cdA0C4a9](https://mumbai.polygonscan.com/address/0x7725f9A802E1612eC5e5Bf65A73D4318cdA0C4a9) |

*** Github Code: *  [`FeSwap Governor Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/FeswSponsor.sol)

____________________


### <span className="title"> Staking Reward Factory Contract </span>

`Staking Reward Factory` is used to feul FESW@M tokens to the staking reward contracts for liquidity mining.

| Polygon Network | On-Chain Staking Reward Factory Contract  |
|:----------: | :-----------------------------: |
| Polygon Mainnet | [0xE499Ee63F5aD4B70F7931Ab81bc8D8a8F8F2F66e](https://polygonscan.com/address/0xe499ee63f5ad4b70f7931ab81bc8d8a8f8f2f66e) |
| Polygon Testnet | [0x9B592DbCf45F8260657BC9Ac8BB3bCFE2C83d99C](https://mumbai.polygonscan.com/address/0x9B592DbCf45F8260657BC9Ac8BB3bCFE2C83d99C) |

*** Github Code: *  [`Staking Reward Factory Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/StakingTwinRewardsFactory.sol)


### <span className="title"> Patch Factory Contract </span>

`Patch Factory` contract is used to manage the patch of the core FeSwap protocol contract, technically which is named as `MetamorphicContractFactory`. Patch can be used to add new features 
to the current contract, or to replace part of the feature of current cantract. Patch activating and deactivating is strictly 
controlled by the manager of `Patch Factory`

| Polygon Network | On-Chain Patch Factory Contract  |
|:----------: | :-----------------------------: |
| Polygon Mainnet | [0x0528D7de63aafdF748a5ef530949C80c4e8fbeC7](https://polygonscan.com/address/0x0528d7de63aafdf748a5ef530949c80c4e8fbec7)  |
| Polygon Testnet | [0x6A8FE4753AB456e85E1379432d92ABF1fB49B5Df](https://mumbai.polygonscan.com/address/0x6A8FE4753AB456e85E1379432d92ABF1fB49B5Df) |

*** Github Code: *  [`Patch Factory Contract`](https://github.com/FeSwap/Governance/blob/main/contracts/MetamorphicContractFactory.sol)

_______________________











