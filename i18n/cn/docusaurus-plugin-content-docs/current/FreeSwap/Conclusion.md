---
id: conclusion
title: FreeSwap 交易协议总结 
hide_title: true
sidebar_label: FreeSwap 交易协议总结
---

<div  className="title">
  <h1> FreeSwap 交易协议总结 </h1>
</div>

_______________________

FreeSwap 交易协议以 “恒定资产乘积” 公式为基础，为每对数字资产创建两个单向交易的子资金池。方向相反的单向交易会造成两个子资金池的资金价格发生反向滑动，当价格滑动幅度达到设定数值时，两个子资金池自动进行相互套利操作，通过套利操作，为资金池流动性提供者提供收益，同时恢复两个资金池资产价格的一致性。

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

FreeSwap 交易协议的套利机制能够同时实现两个子资金池的收益最大化，既保证了公平，又实现了双赢。计算表明，如果在资金池价差达到 <Highlight color="#faeae5"> **1 %** </Highlight> 时进行套利操作，FreeSwap 的套利交易机制可以在完全不收取交易手续费的情况下下，实现相当于收取 <Highlight color="#faeae5"> **2.488 ‰** </Highlight> 交易手续费的收益。

此外，FreeSwap 交易协议还可以解决单交易池自动做市商交易中存在的矿工抢跑问题[<sup>[4]</sup>](Reference.md)，并提供相对于单交易池更为敏感的价格反应速度。

FreeSwap 交易协议通过实现完全免费的去中心化交易机制，可以吸引更多的用户离开中心化交易所，以去中心化的方式参与加密资产投资。