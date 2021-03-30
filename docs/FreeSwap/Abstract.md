---
id: abstract
title: FreeSwap Protocol Abstract
hide_title: true
sidebar_label: Abstract
---

<div  className="title">
  <h1> Abstract </h1>
</div>

_______________________

FreeSwap protocol is a decentralized exchange protocol that does not charge any exchange fees. 

Based on the formula "constant-product invariant", FreeSwap creates two one-way-swap sub-pools for each pair of tokens. 

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

As the swap going, when the token price deviation in the two sub-pools reaches a certain extent, the sub-pools carry out arbitrage operation with each other. This arbitrage operation can rebalance the token prices in the sub-pools and make profits for liquidity providers. 

This paper mainly describes the FreeSwap arbitrage mechanism and its basic rules, expounds its win-win characteristics, and evaluates the arbitrage profit level quantitatively through a theoretical model. 

It is shown that FreeSwap can achieve the arbitrage profit equivalent to <Highlight color="#faeae5"> **2.488 ‰** </Highlight> swap fee while arbitraging at sub-pool price deviation of <Highlight color="#faeae5"> **1 %** </Highlight> .


