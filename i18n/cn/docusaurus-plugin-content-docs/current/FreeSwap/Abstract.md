---
id: abstract
title: FreeSwap 交易协议摘要
hide_title: true
sidebar_label: FreeSwap 协议摘要
---

<div  className="title">
  <h1> FreeSwap 去中心化交易协议摘要 </h1>
</div>

_______________________

FreeSwap 交易协议是一种不收取交易手续费的去中心化交易协议。

FreeSwap 交易协议以 “恒定资产乘积” 公式为基础，为每对数字资产创建两个单向交易的子资金池。随着交易发生，当两个子资金池内的资产价格偏差达到一定幅度时，子资金池之间相互进行套利操作。套利操作可以恢复子资金池资产价格的一致性，同时为资金池流动性资金提供者获取收益。

本文档主要描述 FreeSwap 交易协议的套利机制及其基本规则，阐述套利机制的双赢特性，并通过理论模型对套利机制的收益幅度进行量化评估。


export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

计算表明，在子资金池价差为 <Highlight color="#faeae5"> **1 %** </Highlight> 的情况下进行套利，FreeSwap 交易协议可以实现相当于 <Highlight color="#faeae5"> **2.488 ‰** </Highlight> 交易手续费的套利收益。