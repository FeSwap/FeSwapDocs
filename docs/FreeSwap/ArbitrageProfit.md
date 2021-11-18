---
id: arbitrage-profit
title: Arbitrage Profit Analysis
hide_title: true
sidebar_label: Profit analysis
---

## <span className="title"> 4 FreeSwap Arbitrage Profit Analysis </span>
_______________________

### <span className="title"> 4.1 FreeSwap arbitrage profit </span>

To simplify the calculation, it is assumed that the FreeSwap trading and arbitraging process is as follows:

  1. The A-Pool and the B-Pool initially have the same amount of two tokens, which are represented by $X$ and $Y$ respectively;

  2. In A-Pool, the user exchange $Token A$ with a quantity of $x$ for $Token B$ with a quantity of $y$, causing the token price of the A-Pool to slide. And the sliding value is $\gamma$, triggering arbitrage operation between A-Pool and B-Pool;

  3. After arbitrage, the number of tokens in the A-Pool and the B-Pool becomes $(X+x'_1\ ,\ Y-y'_1)$ and $(X+x'_2\ ,\ Y -y'_2)$；

The changes in the amount of $Tokens$ during the trade and arbitrage process are shown in the following table:

<div className="table">

| Sub Pools       | A-Pool                        | B-Pool                        |
|:---------------:|:-----------------------------:|:-----------------------------:|
|Token State      | $(N_{AA}\ ,\ N_B)$            | $(N_A\ ,\ N_{BB})$            |
|Initial State    | $(X\ ,\ Y)$                   | $(X\ ,\ Y)$                   |
|Post Trade       | $(X\ +\ x\ ,\ Y\ -\ y)$       | $(X\ ,\ Y)$                   |
|Post Arbitrage   | $(X\ +\ x'_1\ ,\ Y\ -\ y'_1)$ | $(X\ +\ x'_2\ ,\ Y\ -\ y'_2)$ |

</div>

According to the "constant-product invariant" formula, there are:

$$
 (X+x)*(Y-y) = X*Y 
$$

$$
 y = \frac{x}{X+x} * Y \tag{3.2.1} 
 $$

According to the arbitrage triggering conditions in $(2.4.19)$, there are:

$$
 (X+x)*Y = \gamma * X* (Y-y) 
 $$

$$
 x = (\sqrt{\gamma} -1 )* X \tag{3.2.2} 
 $$

According to $(3.1.3)$ and $(3.1.6)$, after arbitrage the maximum $K$ value increasement of two sub-pools are:

$$\begin{aligned}
\Delta K_A^M = \Delta K_B^M &= \frac{((X+x)*Y-X*(Y-y))^2}{4*(X+(X+x))*((Y-y)+Y)} \\[3mm]
&= \frac{(x*Y+y*X)^2}{4*(2X+x)*(2Y-y)} \\[3mm]
&= \frac{(\sqrt{\gamma}-1)^2}{4\sqrt{\gamma}}*X*Y 
\end{aligned} \tag{3.2.3} $$

After arbitrage, the increase ratio of $K$ value both in A-Pool and B-Pool will be:

$$
\delta K_A = \delta K_B = \frac{(\sqrt{\gamma}-1)^2}{4\sqrt{\gamma}} \tag{3.2.4} 
$$

According to $(2.4.19)$, the amount of tokens exchanged between the two sub-pools during arbitrage operation can be calculated as follows:

$$
 L_A^e \ = \ \frac{\ x \ }{2} \tag{3.2.5}
$$

$$
L_B^e \ = \ \frac{x}{2(X+x)} * Y = \ \frac{\ y \ }{2} \tag{3.2.6} 
$$

It can be seen that after arbitrage, the number of tokens in the two sub-pools becomes:

$$
 (X + \frac{\ x\ }{2}\ ,\ Y - \frac{\ y \ }{2} ) \  \ || \ \ (X + \frac{\ x\ }{2}\ ,\ Y - \frac{\ y \ }{2} ) \tag{3.2.7} 
$$

That is, the number of tokens in the two sub-pools is equal, achieving a complete balance.

The above analysis is based on the assumption that the amount of tokens in A-Pool and the B-Pool are exactly the same. Let’s analyze below, if the amounts of tokens in A-Pool and the B-Pool are different, how much is the $K$ value increase of the two sub-pools after arbitrage according to FreeSwap protocol. 

In this case, the changes in the amount of tokens during the trade and arbitrage process are shown in the following table:

<div className="table">

| Sub-Pools       | A-Pool                            | B-Pool                              |
|:---------------:|:---------------------------------:|:-----------------------------------:|
| Token Pair      | $(N_{AA}\ ,\ N_B)$                | $(N_A\ ,\ N_{BB})$                  |
| Initial State   | $(X_1\ ,\ Y_1)$                   | $(X_2\ ,\ Y_2)$                     |
| Post Trade      | $(X_1\ +\ x_1\ ,\ Y_1\ -\ y_1)$   | $(X_2\ ,\ Y_2)$                     |
| Post Arbitrage  | $(X_1\ +\ x_1'\ ,\ Y_1\ -\ y_1')$ | $(X_2\ + \ x_2'\ ,\ Y_2\ - \ y_2')$ |

</div>

Assuming that the $K$ Value ratio of A-Pool and B-Pool is represented by $\beta$, the following relationship exists:

$$
\left\{ \begin{array}{ccl}
  &\Large \frac{Y_1}{X_1} \normalsize = \Large \frac{Y_2}{X_2}  & \small (Same\ price)    \\[3mm]
  &\Large \frac{X_2*Y_2}{X_1*Y_1} \normalsize = \beta    &\small  (K\ value\ ratio)  \\[3mm]
  &(X_1 + x_1) * (Y_1 - y_1) = X_1 * Y_1            &\small  (Constant\ invariant)  \\[3mm]
  &(X_1 + x_1) * Y_2 = \gamma * X_2 * (Y_1 -y_1)    &\small  (Trigger\ arbitrage)  \tag{3.2.8} \end{array} \right. 
$$

Jumping the dedcution process, it can be concluded that:

$$
\Delta K_A^M = \Delta K_B^M = \frac{(\gamma-1)^2}{4\gamma \Large (\normalsize\sqrt{\gamma} + \Large \frac{1}{\sqrt{\beta}})(\frac{1}{\sqrt{\gamma}} \normalsize + \Large \frac{1}{\sqrt{\beta}})} * X_1 * Y_1 
\tag{3.2.9} 
$$

So after arbitrage, the K value increase ratio of A-Pool and B pool are:

$$
\delta K_A = \frac{(\gamma-1)^2}{4\gamma \Large (\normalsize\sqrt{\gamma} + \Large \frac{1}{\sqrt{\beta}})(\frac{1}{\sqrt{\gamma}} \normalsize + \Large \frac{1}{\sqrt{\beta}})} \tag{3.2.10} 
$$

$$
\delta K_B = \frac{(\sqrt{\gamma}-1)^2}{\ \ 4\sqrt{\gamma}(\sqrt{\beta\gamma}+1)(\sqrt{\beta}+\sqrt{\gamma}) \ \ \ } \tag{3.2.11} 
$$

It can be seen from $(3.2.10)$ and $(3.2.11)$ that $\delta K_A$ increases monotonically with $\beta$, while $\delta K_B$ decreases monotonically with $\beta$, which means that when the amount of funds in the two sub-pools is unbalanced, the more the amount of tokens in the sub-pool relative to the other one, the less the increase in $K$ value during arbitrage. On the contrary, the less the amount of tokens in the sub-pool, the more the increase in $K$ value during arbitrage. Therefore, when users add liquidity, it is more advantageous to choose to join the sub-pool with smaller amount of tokens, and on the round it helps improve the liquidity of this smaller pool. This internal regulation mechanism of FreeSwap protocol can make the amount of tokens in the two sub-pools to keep in a dynamic balance.

### <span className="title"> 4.2 Equivalent transaction fee rate </span>

Assuming not by arbitraging, but by charging exchange fees, how much exchange fee rate should be charged to obtain the same $K$ value increase as $(3.2.4)$?

Let's represent this trade fee rate as $\alpha$. Since the FreeSwap protocol has two independent one-way sub-pools, considering the equivalence, when calculating $\alpha$, the single two-way trade pool should have the same token amount, which can be expressed as: $(2X,2Y)$. The user exchanges $Token A$ with the same amount of $x$ as $(3.2.2)$ for some amount of $Token B$, denoted by $y'$. According to the "constant-product invariant" formula, there are:

$$
(2X+(1-\alpha)x) * (2Y-y') = 2X*2Y \tag{3.3.1} 
$$

After the completion of the exchange, because the exchange fees do not participate in "constant-product invariant" calculation, just directly enter the liquidity pool, resulting in an increase in the $K$ value of the overall token pool:

$$\begin{aligned}
\Delta K &= \alpha x *(2Y-y') \\
&= \alpha x * \frac{2X*2Y}{2X+(1-\alpha)x}
\end{aligned} \tag{3.3.2} $$

Compared with the $K$ value before the exchange, the $K$ Value increase of the whole pool is as follows:

$$
\delta K = \frac{\alpha x}{2X+(1-\alpha)x} \tag{3.3.3}
$$

Combining with $(3.2.2)$, $(3.2.4)$,  let $\delta K = \delta K_A$, we have:

$$
\alpha = \frac{\sqrt{\gamma}-1}{\sqrt{\gamma}+1} \tag{3.3.4}
$$

As the calculation example, when $\gamma$ = 1.01, $\alpha ≈$ 2.488‰, that is, if the arbitrage is automatically conducted while the price deviation of the two sub-pools reaches 1%, the profit of the liquidity pool provider is equivalent to charge exchange fee of 2.488‰ from trading users. Currently, UniSwap [<sup>[2][3]</sup>](Reference.md) charges an exchange fee of 3‰ from trading users, so FreeSwap can achieve approximately 83% of UniSwap's profit rate through only exchange arbitrage. Taking into account that the FreeSwap protocol can provide users with totally free exchange, it can attract more exchange users and increase exchange volume. By the increase in exchange volume, it is possible for FreeSwap to achieve the same profit level as UniSwap, or even exceed UniSwap while completely waiving any exchange fees. 

It can also be deduced from $(3.3.4)$:

$$
\sqrt{\gamma} = \frac{\ 1+\alpha \ }{1-\alpha} \tag{3.3.5}
$$

According to the calculation, $\gamma ≈$ 1.0121‰ while $\alpha$ = 3‰,  that is, if FreeSwap performs arbitrage when the price deviation of the two sub-pools reaches 1.21%, it can obtain equivalent 3‰ of exchange fee income same as UniSwap.

### <span className="title"> 4.3 Not applicable exchanges </span>

Since FreeSwap protocol relies on exchange arbitrage when the price of sub-pools deviate to a certain level, FreeSwap is not suitable for liquidity pools with both stable tokens exchanged. The exchange of stable tokens needs to minimize the price deviation as much as possible, it will not help attract exchange users by accumulating price deviation and then arbitraging.

FreeSwap is also not applicable to exchange deflationary tokens. As intenal exchange will be conducted between two sub-pools for arbitrage, and the transfer of deflationary token will cause token deflation, which is not beneficial to the sub-pool swapping in deflationary token. Moreover, arbitrage will increase the transfer times of deflationary token, finally accelerate token deflation rate, this effect violates the original intention of deflationary token.