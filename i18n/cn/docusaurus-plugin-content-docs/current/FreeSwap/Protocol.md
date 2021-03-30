---
id: protocol
title: FreeSwap 交易协议 
hide_title: true
sidebar_label: FreeSwap 交易协议
---

## <span className="title"> FreeSwap 交易协议 </span>
_______________________

### <span className="title"> 交易协议目标 </span>

FreeSwap 交易协议目标实现一个完全没有交易手续费的去中心化交易所。"恒定资产乘积" 交易机制不可避免地产生交易价格滑动，FreeSwap 协议通过锁定一定幅度的价格滑动，并从价格滑动中自动套利，为流动性提供者提供收益来源。

### <span className="title"> 交易对设置 </span>

FreeSwap 交易协议为每对数字资产 $(Token_A|Token_B)$ 设置两个独立的单向子交易池，表示为：

$$
( N_{AA}\ |\ N_B)\ || \ (N_A\ |\ N_{BB} ) \tag{2.2.1} 
$$

其中, 子交易对 $(N_{AA}\ |\ N_B )$ ( 简称 $A$ 子交易对 、$A$ 池 ) 可以单向兑入 $Token A$ 、兑出 $Token B$，$N_{AA}$ 为 $A$ 池内 $Token A$ 的数量，$N_B$ 为 $A$ 池内 $Token B$ 的数量。

子交易对 $(N_A\ |\ N_{BB} )$ ( 简称 $B$ 子交易对 、$B$ 池 ) 可以单向兑入 $Token B$ 、兑出 $Token A$，$N_{BB}$ 为 $B$ 池内 $Token B$ 的数量，$N_A$ 为 $B$ 池内 $Token A$ 的数量。

流动性提供者向交易池注入资金时，可以指定所要注入的子交易池，也可以设定一定的比例，将资金同时注入两个子交易池。

### <span className="title"> 兑换交易 </span>

用户跟交易池进行 $Token A$ 与 $Token B$ 的兑换交易时，会有2种相反的交易操作，一是兑入 $Token A$ ，兑出 $Token B$ ；一是兑入 $Token B$ ，兑出 $Token A$ 。这里 “兑入” 和 “兑出” 是相对交易池而言的。

如果用户兑入 $Token A$ 、兑出 $Token B$ ，FreeSwap 会将该交易交给 $A$ 池, 即 $(N_{AA}|N_B )$ 子交易对完成。$A$ 池总是兑入 $Token A$ ，兑出 $Token B$ ，所以 $N_{AA}$ 的数量一直会上升，$N_B$ 的数量一直会下降，这会导致 $A$ 池内以 $Token B$ 计价的 $Token A$ 的价格会单调下降，从而导致 $Token A$ 的价格偏离实际市场价格，这种价格偏离可以为 FreeSwap 交易对提供套利空间。

同样，如果用户兑入 $Token B$ ，兑出 $Token A$ ，会由 $B$ 池来完成交易。$B$ 池总是兑入 $Token B$ ，兑出 $Token A$ ，所以 $N_{BB}$ 的数量会一直上升，$N_A$ 的数量会一直下降，这同样会导致 $B$ 池内以 $Token A$ 计价的 $Token B$ 的价格单调下降，最终偏离实际市场价格。

子交易对 $(N_{AA} | N_B )$，$(N_A | N_{BB} )$ 是两个单向的方向相反的交易对，它们总是固定兑入一种代币，兑出另一种代币。随着交易的发生，两种代币的价格在两个子交易对内总是以相反的方向滑动，积累一定交易量后，同一代币在两个子交易对内的价格偏差就会超过一定的幅度。价差过大会阻止用户继续参与兑换交易，这时需要在两个子交易对内进行两种资产的资金调配，让代币的兑换价差得到恢复。

在两个子交易对内进行资金调配的过程实际上是一个交易套利过程。交易用户在两个单向交易池内进行代币交易，造成代币价格单向滑动，用户会因此蒙受价格滑动造成的交易损失。通过两个子交易池相互进行资产调配，既可以对价格滑动进行修复，又可以实现对用户交易价格滑动损失的套利，为交易池流动性提供者带来套利收益。

### <span className="title"> 交易对套利 </span>

<div id="formula_2_4_1">如上所述，FreeSwap 设置两个独立的子交易对：</div>

$$
( N_{AA}\ |\ N_B )\ || \ (\ N_A |\ N_{BB} ) \tag{2.4.1}
$$

$Token A$ 、$Token B$ 在两个子交易对内的价格随着交易发生会产生偏离，当价格偏离较大时，需要对两个子交易对进行资产调配，恢复资产价格的一致性。两个子交易对之间的资产调配既可以恢复双方的资产价格，也可以实现相互之间的套利。下面对 FreeSwap 协议的套利方法进行详细描述。

套利前，$Token A$ 在两个交易对内以 $Token B$ 计价的价格为：

$$
P_{AA \rightarrow B} = \frac{N_B}{N_{AA}} \tag{2.4.2}
$$

$$
P_{A \leftarrow {BB}} = \frac{N_{BB}}{N_A} \tag{2.4.3}
$$

其偏离比例为：

$$
R_{PA} = \frac{P_{A \leftarrow BB}}{P_{AA \rightarrow B}} = \frac{N_{AA} * N_{BB}}{N_B \ * \ N_A} \tag{2.4.4}
$$

同理，$Token B$ 在两个交易对内以 $Token A$ 计价的价格为：

$$
P_{BB \rightarrow A} = \frac{N_A}{N_{BB}} \tag{2.4.5}
$$

$$
P_{B \leftarrow {AA}} = \frac{N_{AA}}{N_B} \tag{2.4.6}
$$

其价格偏离比例为：

$$
R_{PB} = \frac{P_{B \leftarrow AA}}{P_{BB \rightarrow A}} = \frac{N_{AA} * N_{BB}}{N_B * N_A} \tag{2.4.7}
$$

容易理解，两个子交易对内 $Token A$，$Token B$ 的价格偏离比例相同，即：

$$
R_{PA} = R_{PB} = R_P = \frac{N_{AA} * N_{BB}}{N_B * N_A} \tag{2.4.8}
$$

FreeSwap 协议设定当两个子交易对的资产价格偏离，即 $R_{P}$ 的值大于一定门限值 $\gamma$，如101% 时 ，自动启动内部套利机制，恢复价格。

套利操作就是利用一个子交易对内数量较多的资产，等价值兑换另一个子交易对内数量较多的另一个资产，即 $( N_{AA} | N_B )$ 子交易对利用 $Token A$ 换取 $( N_A | N_{BB} )$ 子交易对等价值的 $Token B$ 。换个角度看，等价于 $( N_A | N_{BB} )$ 子交易对利用 $Token B$ 换取 $( N_{AA} | N_B )$ 子交易对等价值的$Token A$ 。

为保证兑换公平，FreeSwap 协议规定，兑换价格为两个子交易对所有资产的平均价格。交换价格可表示为：

$$
P_{A \rightarrow B}^e = \frac{N_B + N_{BB}}{N_A + N_{AA}} \tag{2.4.9}
$$

$$
P_{B \rightarrow A}^e = \ \frac{N_A + N_{AA}}{N_B + N_{BB}} \tag{2.4.10}
$$

$$
P_{A \rightarrow B}^e * P_{B \rightarrow A}^e = \ 1 \tag{2.4.11}
$$

套利操作完成后，两个子交易对可以表示为：

$$
(N_{AA} - L_A \ | \ N_B + L_B  )\ ||\ ( N_A + L_A \ | \ N_{BB} - L_B ) \tag{2.4.12}
$$

即在交易对套利操作中，$A$ 池利用数量为 $L_A$ 的 $Token A$ 换取数量为 $L_B$ 的 $Token B$ ，考虑交换价值相等，则存在下列关系：

$$
L_{B} = L_{A}*P_{A \rightarrow B}^e \tag{2.4.13}
$$

套利操作完成后，$A$ 池的 $Token A$ 价格（以 $Token B$ 计价）将会上涨，但基于合理性考虑，不应该超过整体交易对的平均价格 $P_{A \rightarrow B}^e$ ，同样 $B$ 池的 $Token B$ 价格（以 $Token A$ 计价）也会上涨，但也不应该超过整体交易对的平均价 $P_{B \rightarrow A}^e$ ，即存在下列关系：

$$
\frac{N_B + L_B}{N_{AA} - L_A} \leq P_{A \rightarrow B}^e \tag{2.4.14} 
$$

$$
\frac{N_A \ + \ L_A}{N_{BB} \ - \ L_B} \normalsize \leq P_{B \rightarrow A}^e \tag{2.4.15}
$$

结合关系式 $(2.4.13)-(2.4.15)$, 可得出下列关系: 

$$
L_A \leq \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})}  \tag{2.4.17} 
$$

$$
L_B \leq \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})}  \tag{2.4.18} 
$$

为减少套利操作频次，子资金池之间的套利操作应当尽可能多地交换两种资产以最大幅度地恢复资产价格偏离。

不难发现，当 $L_A$, $L_B$ 取值上述关系式中的最大值时，两个子交易对的资产价格恰好同时恢复到这个交易池的资产平均价格 $P_{A \rightarrow B}^e$，同时也是双方交换资产的价格。

 <div id="formula_2_4_19">总体而言，FreeSwap 套利操作可以表示如下：</div>

$$
\left\{ \begin{aligned} 
\ \ &\frac{N_{AA} * N_{BB}}{N_A * N_B} \ \geq \ \gamma \\[3mm]
P_{A \rightarrow B}^e \ = \ \ &\frac{N_B + N_{BB}}{N_A + N_{AA}} \\[3mm]
L_A^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})}  \\[3mm]
L_B^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})}  \\[3mm]
\end{aligned} \right. \tag{2.4.19} 
$$ 


其中, $\gamma$ 是触发套利操作的条件，$\gamma$ 表示当两个子交易池的资产价格偏离大于等于 $\gamma-1$ 时触发套利操作。$L_A^e$、$L_B^e$ 是套利操作时两个子资金池相互交换资产的数量，套利操作按照 $P_{A \rightarrow B}^e$ 的价格相互交换 $L_A^e$、$L_B^e$数量的 $TokenA$、$Token B$。套利操作完成后，两个子资金池的资产价格完全相同，均为 $P_{A \rightarrow B}^e$。

