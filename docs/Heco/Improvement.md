---
id: improvement
title: FeSwap Improvements on Heco
hide_title: true
sidebar_label: 'Improvement on Heco'
---

<div  className="title">
  <h1> FeSwap Improvements on Heco </h1>
</div>

_______________________

Some improvements have been made to the FeSwap protocol implementation deployed on Heco Network, which mainly include following 4 features： 

+ A `Patch` mechanism is designed, and applied to a few FeSwap core smart contracts.
  + Compared to the `Proxy` mechanism widely adopted in Defi ecosystem to upgrade deployed smart contracts, which always exert some additional gas fees to all transactions, `Patch` mechanism imposes no additional gas fee to the host smart contract execution.
  + `Patch` mechanism upgrades original smart contract by adding new codes and new features, versus `Proxy` mechanism upgrades smart contract by totally replacing the original smart contract.  
  + `Patch` mechanism is applied in 4 smart contract: `Factory`, `Router`, `NFT` and `FESW@H`. <br/><br/>
+ `Price Oracle` feature of the liquidity pool can be switched on/off by its NFT owner.
  + `Price Oracle` only has reference value while its corresponding liquidity pool includes big enough liquidity. This is not the case for most liquidity pools containing low marketcap assets, especially while these liquidity pools are newly created and have not been used widely.
  + `Price Oracle` feature is switched off by default to save gas fees, as it imposes some gas fee cost to all swapers if it is switched on, this is not valuable while there is no need to query for the asset price.
  + The NFT owner of each liquidity pool is privileged to switch on/off the `Price Oracle` feature if needed. <br/><br/>
+ Some optimization has been done for the core smart contract to be more gas fee effective.
  + A few smart contract variables changed to be immutable. 
  + A few lines of code adjusted to be more gas fee saving. <br/><br/>
+ Some NFT bid settings are changed according to Heco network characteristics, mainly include:
  + The bid starting price of all the crypto asset liquidity pool NFTs is ZERO.
  + NFT bidding duration is shorten to be 3 days.
  + Liquidity pool is created at the same time while its corresponding NFT is claimed. 
  + NFT needs to be claimed within 4 days starting from the time when its bidding is finished, otherwise it will be open for new bidding.
  + FESW@H giveaway rates are changed accordingly.<br/>
    *[** Learn more about NFT bidding on Heco](./nft)*<br/>
