---
id: basics
title: FreeSwap Basics
hide_title: true
sidebar_label: Basics
---

## <span className="title"> 1. Basics of Liquidity Pool </span>
_______________________

### <span className="title"> 1.1 Swap pair definition </span>

The swap pair consists of two different tokens that can be exchanged, represented by $Token A$ and $Token B$, respectively. When creating a swap pair, the user needs to deposit corresponding number of $Token A$ and $Token B$ with equal value according to the actual market price. If the price differs from the market price, the pair will be arbitraged and the creator will suffer a loss.

Assuming $P_{A}$ and $P_{B}$ are respectively the price of $Token A$ and $Token B$ in any legal currency, $P_{A\rightarrow B}$ is defined as the price exchanging $Token A$ for $Token B$, which is the amount of $Token B$ equivalent to one $Token A$ in value:

$$
P_{A \rightarrow B} = \frac{P_A}{P_B} \tag{1.1.1}
$$

Similarly, define $P_{B \rightarrow A}$, which is the price at which $Token B$ is traded to $Token A$:

$$
P_{B \rightarrow A} = \frac{P_B}{P_A} \tag{1.1.2}
$$

In theory, without considering trading costs, the following relationship exists:

$$
P_{A \rightarrow B} * P_{B \rightarrow A} = 1 \tag{1.1.3}
$$

Assuming $N_A$ and $N_B$ are the quantities of two digital assets $Token A$ and $Token B$ at any time within the trade pair, we express the trade pair as:

$$
(N_A \ | \ N_B) \tag{1.1.4}
$$

The trade pair always assume two internal tokens have equal market values all the time, so following formula are equivalent:

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

### <span className="title"> 1.2 Constant-product invariant </span>

While performing token exchange, since the external prices of $Token A$ and $Token B$ cannot be easily obtained, it is needed to design a mechanism to determine the exchange ratio between $Token A$ and $Token B$. The DEXs of automated market maker (AMM) type use the "constant-product invariant" formula [<sup>[1]</sup>](Reference.md) to determine the change of the number of tokens in the trading pool before and after the exchange, also the amount of tokens traded in and out accordingly.

For the pair of $(N_A \ | \ N_B)$, "constant-product invariant" formula is represented as:

$$
N_A * N_B=K \tag{1.2.1}
$$

In this formula, the value of $K$ changes only when the users deposit tokens into, or remove tokens from the trading pair, and alway remains constant during the trading process.

Suppose in an exchange oparetion, the user trades $Token A$ for $Token B$, and the input amount of $Token A$ is $\mathrm{\Delta}_{A}$, the output amount of $Token B$ is $\mathrm{\Delta}_{B}$. ( "Trade in" and "trade out" here after are from the point of view of liquidity pool, if from the point of users, the relationship "trade in" and "trade out" is completely opposite). According to the "constant-product invariant" formula, there are:

$$
( N_A + \mathrm{\Delta}_A ) * (N_B - \mathrm{\Delta}_B ) = ( N_A * N_B )  \tag{1.2.2}
$$

$$
\mathrm{\Delta}_B = \frac{\mathrm{\Delta}_A}{N_A + \mathrm{\Delta}_A} * N_B \tag{1.2.3}
$$

It can be seen that there are three different prices here, before the trade, after the trade, and happend during the trade.

The token price of the pool before the trade (expressed as $P_{A \rightarrow B}^{0}$):

$$
P_{A \rightarrow B}^{0} = \frac{N_B}{N_A} \tag{1.2.4}
$$

The actual token price taken in the trade (represented as $P_{A \rightarrow B}^{1}$) is:

$$
P_{A \rightarrow B}^{1} = \frac{\mathrm{\Delta}_B}{\mathrm{\Delta}_A} = \frac{N_B}{N_A + \mathrm{\Delta}_A} \tag{1.2.5}
$$

The token price after the trade finished (represented as $P_{A \rightarrow B}^{2}$) is:

$$
P_{A \rightarrow B}^{2} = \frac{N_B - \mathrm{\Delta}_B}{N_A +  \mathrm{\Delta}_A} \tag{1.2.6}
$$

Obviously:

$$
P_{A \rightarrow B}^{0} > P_{A \rightarrow B}^{1} > P_{A \rightarrow B}^{2} \tag{1.2.7}
$$

It means, the price of trade-in token $Token A$ relative to the trade-out token $Token B$ has slipped after the trade has finished. The price of $Token A$ in the pair before the trade starts is higher than the actual price the trade adopts, and the actual price the trade adopts is higher than the price of $Token A$ in the pair after the trade is completed. That is, after the token trade is completed, the price of $Token A$ relative to $Token B$ in the pair has fallen, and accordingly, the relative price of $Token B$ has risen.

### <span className="title"> 1.3 Trade arbitrage </span>

The exchange operation happens at the moment the transaction block is confirmed on the blockchain. The external prices of $Token A$ and $Token B$ actually do not change at that moment. Due to the constraint of "constant-product invariant", the token price will slide within the exchange, which will cause the exchange user to suffer a certain marginal exchange loss. The exchange loss in the amount of $Token B$ is calculated as follows:

$$\begin{aligned} Lost_{A \rightarrow B} &= \mathrm{\Delta}_A * \frac{N_B}{N_A} - \mathrm{\Delta}_A * \frac{N_B}{N_A + \mathrm{\Delta}_A} \\[3mm]
&= \mathrm{\Delta}_A * \frac{N_B}{N_A} \Large{/} \normalsize ( 1 + \frac{N_A} {\mathrm{\Delta}_{A}} ) \end{aligned} \tag{1.3.1}$$

It can be seen that the greater the ratio $(\mathrm{\Delta}_{A} / N_A)$ the user trade $Token A$ into the pool, the greater the exchange loss he/she will suffer.

After the exchange is completed, if another user performs reverse exchange, according to the "constant-product invariant" formula, he/she only needs to pay $Token B$ in the amount of $\mathrm{\Delta}_B$, and can get $Token A$ of $\mathrm{\Delta}_A$. After this reverse exchange, the asset price in the pool will return to the initial price $P_{A \rightarrow B} = N_B/N_A$. That is, this user completes the exchange at the higher $Token B$ to $Token A$ price, and commits the arbitrage of the previous user's exchange loss, the arbitrage profit is equal to the previous user's exchange loss.

### <span className="title"> 1.4 Impermanent loss </span>

When providing liquidity, the provider needs to deposit into the trading pool two kinds of tokens with the corresponding amounts of same total value. With the trade on going, the number of tokens corresponding to the user's liquidity will change. Assuming that the user’s initial investment of $Token A$ is $X_{A}$, when the user withdraws the liquidity, if the market price of $Token A$ rises relative to $Token B$, then ${X'}_{A}$，the amount of $Token A$ that the user can get from the pool may be less than $X_{A}$. If the liquidity service income obtained by providing liquidity are not enough to compensate for the loss caused by the decrease in the amount of $Token A$, in this case, the liquidity provider will suffer losses relative to simply holding $Token A$ and $Token B$ instead of providing liquidity services. In fact, no matter whether the price of $Token A$ and $Token B$ goes up or down, as long as their price fluctuates from the time providing liquidity, the user will always suffer losses. The amount of the loss is completely determined by the market price variation, beyond any user's control, which is also called "Impermanent Loss" [<sup>[5]</sup>](Reference.md).

Taking $Token B$ as the price benchmark, following quantitative analysis of impermanent loss is conducted without considering the exchange fee income. Assuming that the initial number of tokens that the user puts into the trade pair are $(X_A|Y_B)$, the price of $Token A$ relative to $Token B$ is $P_1$, and at the end, the number of tokens that the user withdraws from the trade pair are $(X'_A|Y'_B)$, and the price of $Token A$ relative to $Token B$ is $P_2$, if the user does not provide liquidity for the trading pool, but simply holds $(X_A|Y_B)$ tokens, the final value is:

$$
V_1=X_A*P_2+Y_B \tag{1.4.1}
$$

Since the user provides liquidity for the trading pool, the actual value of $(X'_{A}|Y'_{B})$ tokens is:

$$
V_2=X'_A*P_2+Y'_B \tag{1.4.2}
$$

Considering:

$$\left\{ \begin{matrix} \begin{aligned}
X_A * Y_B &= X'_A * Y'_B \\
P_1 &= Y_B / X_A \\
P_2 &= Y'_B / X'_A \\
\end{aligned} \end{matrix} \right. \tag{1.4.3}$$

Then we have [<sup>[6]</sup>](Reference.md):

$$\begin{aligned} \frac{V_2}{V_1} &= \frac{\ 2\sqrt{P_1*P_2}\ }{P_1+P_2} \\[3mm]
&= \sqrt{\frac{4P_{1}P_{2}}{( P_{1} - P_{2} )^{2} + 4P_{1}P_{2}}} \leq 1 \end{aligned} \tag{1.4.4}$$

So, as long as $P_1 \neq P_2$, $V_2$ is always less than $V_1$, that is to say, the users's total token value denominated in $Token B$ is definitely reduced compared to simply holding two tokens. Similarly the total token value denominated in $Token A$ is also definitely reduced compared to simply holding two tokens. Therefore, the so-called "Impermanent Loss" is actually a permanent loss that is bound to occur, only the amount of loss may change with the price ratio.