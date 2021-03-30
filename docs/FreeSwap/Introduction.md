---
id: introduction
title: FreeSwap Introduction
hide_title: true
sidebar_label: Introduction
---

<div  className="title">
  <h1> Introduction </h1>
</div>

_______________________

In 2020, "constant-product invariant" formula [<sup>[1]</sup>](Reference.md) made a great success in decentralized exchanges (DEXs). This formula is extremely concise, but it can automatically and perfectly determine the token price in the liquidity pools. DEXs based on the this formula, such as Uniswap [<sup>[2][3]</sup>](Reference.md) and SushiSwap, can provide competitive swapping liquidity and trading depth compared to centralized exchanges, and hav been attracting a large number of cryptocurrency investors.

However, in addition to paying the gas fee of blockchain network, DEX transactions also need to pay a certain percentage of exchange fees, which is some higher than centralized exchanges. The purpose of FreeSwap protocol is to design a completely free exchange protocol that does not require to pay any exchange fees. It is expected that by removing exchange fees, more and more users can be attracted to join DEXs and leave centralized exchanges.

To solve the problem of "front running attack", Vitalik Buterin once proposed to set up two one-way trading sides for a token pair  [<sup>[4]</sup>](Reference.md). FreeSwap protocol refines his proposal and defines the implementation details. Since the two one-way trading pools can only exchange tokens in one direction, this will inevitably lead to the reverse deviation of token prices between two trading pools. This deviation can not only stop "front-running attack" of miners, but also provide a way to make profits for liquidity providers. FreeSwap protocol makes full use of the arbitrage opportunities coming from the price deviations between the two sub-pools to provide returns to liquidity providers, and further, to serve the exchange users completely with no trade fee.