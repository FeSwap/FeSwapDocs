---
id: introduction
title: FeSwap Free Decentralized Exchange
hide_title: true
sidebar_label: 'FeSwap Decentralized Exchange'
---

<div  className="title">
  <h1> FeSwap Free Decentralized Exchange </h1>
</div>

_______________________

<div  className="title">
  <h2> FeSwap Introduction </h2>
</div>

Cryptocurrency exchanges can be basically divided into two categories, namely, centralized order book exchanges (CEX) represented by Binance[<sup>[1]</sup>](Reference.md) and Huobi, and decentralized automated market maker exchanges (DEX) represented by Uniswap[<sup>[2]</sup>](Reference.md) and Curve.

The pricing mechanism of centralized exchanges and decentralized exchanges is different. The price of a centralized exchange is the marginal price, and the cryptocurrency is priced in real-time by the ups and downs of transactions that users conduct all the time. The advantage of the marginal price is that it is quick to respond and can keep up with the rapid changes in market information, while the disadvantage is that sometimes the CEX could be lack of liquidity and the price fluctuates greatly. 

The price given by decentralized exchange is the average price. Every user is trading with the cryptocurrencies in the whole liquidity pool, so the trading price is the average price given by all the cryptocurrencies in the pool participating in the calculation of constant asset product formula X * Y = K [<sup>[3]</sup>](Reference.md). The advantage of the average price is that the price is stable and the liquidity is good, but the disadvantage is that the price can only change passively, and the large price change can only be driven by a large scale of transactions. 

Due to the different pricing mechanisms of the two types of exchanges, prices among exchanges are often out of sync, thus providing arbitrageurs with many arbitrage opportunities. There are a large number of arbitrage transactions in decentralized exchanges, through which the prices of cryptocurrencies in two different kinds of exchanges are basically consistent

Both centralized and decentralized exchanges rely on charging various proportions of transaction fees to achieve profitability. As a kind of transaction friction, transaction fees could affect users' willingness to trade cryptocurrencies to some extent. 

The FreeSwap decentralized exchange protocol [<sup>[4]</sup>](Reference.md) designed an automated market maker exchange protocol that does not charge transaction fees at all.  The protocol sets up two one-way exchange sub-pools for each pair of trading assets, which results in that the asset prices inside the two sub-pools will deviate a little bit as the tradings happen. While some preset conditions are met, an internal asset swap will be triggered to smooth this price deviation. The automatic repair process of asset price deviation is also an arbitrage process, which can make profits for the liquidity providers of the trading pool. 

The fluctuation of digital asset exchange prices is inevitable and existing naturally. The FreeSwap protocol can lock in some part of the profit from these price fluctuations, which otherwise all be captured by arbitrageurs, and thereby providing completely free exchange services for trading users. By reducing trade friction, it is promising to attract more users to conduct exchanges in DEX, and in turn, make more profits for the liquidity providers. 

FeSwap decentralized exchange specifically refines and implements the FreeSwap exchange protocol, and aims to provide users with a completely free decentralized digital asset exchange service. 
