---
id: basics
title: 自动做市商协议基础 
hide_title: true
sidebar_label: 自动做市商协议基础
---

## <span className="title"> 自动做市商协议基础 </span>

______________________

### <span className="title"> 交易对定义 </span>

交易对包括两种不同的可以相互交换的数字资产，这里分别用 $Token A$ 和 $Token B$ 表示。在创建交易对时，用户需要按照实际市场价格存入一定数量的价值相等的 $Token A$ 和 $Token B$ 。如果创建交易对的价格偏离市场价格，交易对创建者会被套利，从而蒙受损失。

假设 $P_{A}$ 、$P_{B}$ 分别为 $Token A$ 、$Token B$ 以任一法币计价的价格，定义 $P_{A\rightarrow B}$ 为 $Token A$ 兑换为 $Token B$ 的价格，即与 $1\ Token A$ 等值的 $Token B$ 的数量：

$$
P_{A \rightarrow B} = \frac{P_A}{P_B} \tag{1.1.1}
$$

同样，定义 $P_{B \rightarrow A}$ ，即 $Token B$ 兑换为 $Token A$ 的价格：

$$
P_{B \rightarrow A} = \frac{P_B}{P_A} \tag{1.1.2}
$$

理论上，不考虑市场交易成本，则存在下列关系：

$$
P_{A \rightarrow B} * P_{B \rightarrow A} = 1 \tag{1.1.3}
$$

假设 $N_A$ 、$N_B$ 分别为交易对内部任一时刻两种数字资产 $Token A$、 $Token B$ 的数量，该交易对可表示为：

$$
(N_A \ | \ N_B) \tag{1.1.4}
$$

交易对总是认为两种内部资产一直保持相等的市场价值，即存在下列相互等价的关系：

$$
N_A * P_{A} = N_B * P_{B} \tag{1.1.5}
$$

$$
N_A = N_B * P_{B \rightarrow A} \tag{1.1.6}
$$ 

$$
N_B = N_A * P_{A \rightarrow B} \tag{1.1.7}
$$

$$
P_{A \rightarrow B} = \frac{N_B}{N_A} \tag{1.1.8}
$$

$$
P_{B \rightarrow A} = \frac{N_A}{N_B} \tag{1.1.9}
$$

### <span className="title"> 恒定资产乘积 </span>

在交易对中进行资产兑换时，由于无法取得外部 $Token A$ 和 $Token B$ 的市场价格，需要设计一个兑换机制，确定 $Token A$ 和 $Token B$ 兑换比例关系。自动做市商 (Automated Market Maker，AMM) 类型的去中心化交易所 (DEX)，采用 “资产恒定乘积” 公式[<sup>[1]</sup>](Reference.md) 确定兑换交易发生前后交易对中资产数量的变化，也即用户兑入、兑出资产的数量；

对于交易对 $(N_A\ | \ N_B )$ ，"恒定资产乘积" 公式可表示为：

$$
N_A * N_B=K \tag{1.2.1}
$$

其中，$K$ 值只在用户向交易对中存入流动性资产，或者从交易对中取回流动性资产时才会发生变化，在用户兑换资产的交易过程中保持恒定不变。

假设有一笔兑换交易，用户用 $Token A$ 兑换 $Token B$ ，兑入的 $Token A$ 的数量为 $\mathrm{\Delta}_{A}$ ，兑出的 $Token B$ 的数量为 $\mathrm{\Delta}_{B}$ 。（为表述方便，这里的 “兑入”、“兑出” 是相对交易对而言的，如果相对用户而言，“兑入”、“兑出” 关系则完全相反）。依据 "恒定资产乘积" 公式，有：

$$
( N_A + \mathrm{\Delta}_A ) * (N_B - \mathrm{\Delta}_B ) = ( N_A * N_B )  \tag{1.2.2}
$$

$$
\mathrm{\Delta}_B = \frac{\mathrm{\Delta}_A}{N_A + \mathrm{\Delta}_A} * N_B \tag{1.2.3}
$$

可以看到，兑换交易发生前、兑换交易发生后、以及兑换交易实际发生的价格是3个不同的价格。

兑换交易发生前，交易对内的资产价格（表示为 $P_{A \rightarrow B}^{0}$）为：

$$
P_{A \rightarrow B}^{0} = \frac{N_B}{N_A} \tag{1.2.4}
$$

兑换交易实际发生的资产价格（表示为 $P_{A \rightarrow B}^{1}$）为：

$$
P_{A \rightarrow B}^{1} = \frac{\mathrm{\Delta}_B}{\mathrm{\Delta}_A} = \frac{N_B}{N_A + \mathrm{\Delta}_A} \tag{1.2.5}
$$

兑换交易发生后，交易对内的资产价格（表示为 $P_{A \rightarrow B}^{2}$）为：

$$
P_{A \rightarrow B}^{2} = \frac{N_B - \mathrm{\Delta}_B}{N_A +  \mathrm{\Delta}_A} \tag{1.2.6}
$$

显而易见：

$$
P_{A \rightarrow B}^{0} > P_{A \rightarrow B}^{1} > P_{A \rightarrow B}^{2} \tag{1.2.7}
$$

即兑入资产 $Token A$ 相对于兑出资产 $Token B$ 的价格，在兑换交易发生后，发生了滑动。兑换交易发生前交易对内 $Token A$ 的价格，高于用户兑换交易实际发生的价格，而用户兑换交易实际发生的价格，又高于兑换完成后交易对内 $Token A$ 的价格。即兑换交易完成后，交易对内 $Token A$ 相对于 $Token B$ 的价格发生了下跌，相应地，$Token B$ 的相对价格产生了上涨。

### <span className="title">交易套利 </span>

兑换交易是在交易区块确认的瞬间发生的，兑换交易发生前后，$Token A$ 和 $Token B$ 的外部市场价格不会发生变化。由于 "恒定资产乘积" 约束，导致交易价格产生滑动，会使用户蒙受一定的兑换交易损失，以 $Token B$ 计价的兑换损失计算如下：

$$
\begin{aligned} Lost_{A \rightarrow B} &= \mathrm{\Delta}_A * \frac{N_B}{N_A} - \mathrm{\Delta}_A * \frac{N_B}{N_A + \mathrm{\Delta}_A} \\[3mm]
&= \mathrm{\Delta}_A * \frac{N_B}{N_A} \Large{/} \normalsize ( 1 + \frac{N_A} {\mathrm{\Delta}_{A}} ) \end{aligned} \tag{1.3.1}
$$

可见用户兑入Token A的比列 $(\mathrm{\Delta}_{A} / N_A)$  越大，蒙受的兑换损失也会越大。

该交易完成后，如果另一用户进行逆向兑换，不考虑交易费用，根据 "恒定资产乘积" 公式，他只要兑入数量为 $\Delta_B$ 的 $Token B$ ，即可获得数量为 $\Delta_A$ 的 $Token A$ ，交易完成后，交易对内资产价格恢复为初始价格 $P_{A \rightarrow B} = N_B/N_A$ 。即该用户以相对于 $Token A$ 较高的 $Token B$ 的价格完成交易，实现了对前一用户兑换损失的套利，套利金额等于前一用户的兑换损失。

### <span className="title"> 无常损失 </span>

流动性资金提供者在提供流动性时，需要向交易对中注入两种总价值相等的相应数量的代币，随着交易的发生，用户提供流动性获得的权益所对应的代币数量会发生变动。假设用户初始投入 $Token A$ 的数量为 $X_{A}$ ，当用户退出流动性时，如果 $Token A$ 的市场价格相对于 $Token B$ 发生了上涨，则用户得到的 $Token A$ 的数量 ${X'}_{A}$ 可能会小于 $X_{A}$，如果提供流动性获得的交易手续费等收入不足以弥补 $Token A$ 数量减少造成的损失，则流动性提供者相对于一直持有 $Token A$ 、$Token B$，而不是为交易对提供流动性资金服务，会蒙受一定的损失。实际上，无论 $Token A$、$Token B$的价格是上涨还是下跌，只要他们的价格比相对于用户提供流动性时发生了偏离，用户都会蒙受损失。该损失大小完全由市场价格变化决定，用户无法控制，也被称为 "无常损失"[<sup>[5]</sup>](Reference.md)。

下面以 $Token B$ 作为价格基准，在不考虑交易手续费收入的情况下，对无常损失进行定量分析。

假设用户初期投入交易对的代币数量为 $(X_{A}|Y_{B})$ ，$Token A$ 相对于 $Token B$ 的价格为 $P_1$，期末用户撤出交易对的代币数量为 $(X'_A | Y'_B)$，$Token A$ 相对于 $Token B$ 的价格为 $P_2$，如果用户没有为交易池提供流动性，而是简单持有 $(X_{A}|Y_{B})$ 代币，期末价值为：

$$
V_1=X_A*P_2+Y_B \tag{1.4.1}
$$

由于用户为交易池提供流动性，实际拥有 $(X'_{A}|Y'_{B})$ 代币的价值为：

$$
V_2=X'_A*P_2+Y'_B \tag{1.4.2}
$$

考虑到：

$$
\left\{ \begin{matrix} \begin{aligned}
X_A * Y_B &= X'_A * Y'_B \\
P_1 &= Y_B / X_A \\
P_2 &= Y'_B / X'_A \\
\end{aligned} \end{matrix} \right. \tag{1.4.3}
$$

则有[<sup>[6]</sup>](Reference.md)：

$$
\begin{aligned} \frac{V_2}{V_1} &= \frac{\ 2\sqrt{P_1*P_2}\ }{P_1+P_2} \\[3mm]
&= \sqrt{\frac{4P_{1}P_{2}}{( P_{1} - P_{2} )^{2} + 4P_{1}P_{2}}} \leq 1 \end{aligned} \tag{1.4.4}
$$

可见只要 $P_1 \neq P_2$，$V_2$ 就总是小于 $V_1$，即用户以 $Token B$ 计价的总资产价值相对于简单持有两种代币，一定是减少的。同理用户以 $Token A$ 计价的总资产价值相对于简单持有两种代币也一定是减少的。

所以所谓的无常损失（Impermanent Loss）实际上是一定会发生的永久损失（Permanent Loss），只是该损失金额会随着价格的变动而变动。

