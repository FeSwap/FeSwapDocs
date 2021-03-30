---
id: conclusion
title: FreeSwap Conclusion 
hide_title: true
sidebar_label: Conclusion
---

<div  className="title">
  <h1> FreeSwap protocol conclusion </h1>
</div>

_______________________

Based on the "constant-product invariant" formula, FreeSwap creates two one-way exchange sub-pools for each pair of tokens. One-way exchange will cause the token prices of two sub-pools to slide in opposite direction. When the the price slippage reaches the preset threshold, the two-pools will exchange with each other internally and automatically for arbitrage. This arbitrage could provide revenue for the liquidity providers, and also smooth the price deviation of two sub-pools.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

The arbitrage mechanism of the FreeSwap protocol can maximize the profit for the two sub-pools at the same time, which ensures fairness and achieves a win-win situation. Calculations show that if arbitrage is performed when the price deviation of the sub-pools reaches <Highlight color="#faeae5"> **1 %** </Highlight>, FreeSwap's arbitrage mechanism can achieve the profit equivalent to charge <Highlight color="#faeae5"> **2.488 ‰** </Highlight> of exchange fees while charging no fees at all.

By implementing a completely free decentralized exchange protocol，it is expectable that FreeSwap can help attract more and more users to join in decentralized exchange and take part in more and more Defi activities. 
