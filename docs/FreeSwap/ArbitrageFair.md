---
id: arbitrage-fair
title: Arbitrage Fairness Analysis 
hide_title: true
sidebar_label: Fairness analysis
---

## <span className="title"> 3 FreeSwap Arbitrage Fairness Analysis </span>
_________________________________________

### <span className="title"> 3.1 Arbitrage fairness principles </span>

From the perspective of the liquidity provider, for the internal exchange of the two sub-pools, ie. arbitrage operations, following considerations should be taken:

  1. Pool A and Pool B must both obtain positive returns in arbitrage operations. If one party gains and the other loses, the arbitrage mechanism does not hold;

  2. The arbitrage return of two sub-pools should be balanced reasonably. If one side gains more and the other side gains less, the arbitrage mechanism is also not perfect.

  3. Pool A and Pool B both expect to maximize their profits in the arbitrage operations. The ideal goal of the arbitrage mechanism is to maximize the profits of both sub-pools simultaneously.

### <span className="title"> 3.2 FreeSwap arbitrage fairness analysis </span>

FreeSwap arbitrage protocol can meet the above three requirements, that is, it can achieve the maximum positive profit for both sides of the trading pools, and the profits of both sides are equal.

The arbitrage profit can be counted by the changes of "constant-product invariant" of the sub-pools before and after the arbitrage operation. After the arbitrage completed, the changes in the $K$ value of the two sub-pools are analyzed below.

For the A-Pool, the change in K value after arbitrage is:

$$\begin{aligned}
\Delta K_A &= ( N_{AA} - L_A ) * ( N_B + L_B ) - N_{AA} * N_B \\[1mm]
&= N_{AA} * L_B - L_A * N_B - L_A * L_B \\[1mm]
&= {-P}_{A \rightarrow B}^e * L_A^2 + ( N_{AA} * P_{A \rightarrow B}^e - N_B ) * L_A \\[1mm]
&= {-P}_{A \rightarrow B}^e * \left( L_A - \frac{N_{AA} - N_B * P_{B \rightarrow A}^e}{2} \right)^2 + \frac{( N_{AA} - N_B * P_{B \rightarrow A}^e )^2}{4*P_{B \rightarrow A}^e}
\end{aligned} \tag{3.1.1} $$

It can be seen that for A-Pool, while $L_A = L_A^M$, $K$ value increases the most, that is, A-Pool gets the maximum arbitrage profit as:

$$\begin{aligned}
L_A^M &= \frac{N_{AA} - N_B * P_{B \rightarrow A}^e}{2} \\[3mm]
&= \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})} \\
\end{aligned} \tag{3.1.2} $$

It is obvious that $L_A^e$ in $(2.4.19)$ equals to $L_A^M$, it means that FreeSwap arbitrage mechanism can increase $K$ value of the A-Pool to its maximum, which is:

$$\begin{aligned}
\Delta K_A^M &= \frac{( N_{AA} - N_B * P_{B \rightarrow A}^e )^2}{4*P_{B \rightarrow A}^e} \\[3mm]
&= \frac{(N_{AA}*N_{BB} - N_A *N_B)^2}{4*(N_A+N_{AA})*(N_B+N_{BB})}
\end{aligned} \tag{3.1.3} $$

Similarly, for the B-Pool, the K value changes after arbitrage is as follows:

$$\begin{aligned}
\Delta K_B &= (N_{BB} - L_B) * (N_A + L_A) - N_{BB} * N_A \\[1mm]
&= N_{BB} * L_A - L_B * N_A - L_A * L_B \\[1mm]
&= {-P}_{B \rightarrow A}^e * L_B^2 + ( N_{BB} * P_{B \rightarrow A}^e - N_A ) * L_B \\[1mm]
&= {-P}_{B \rightarrow A}^e * \left( L_B - \frac{N_{BB} - N_A * P_{A \rightarrow B}^e}{2} \right)^2 + \frac{( N_{BB} - N_A * P_{A \rightarrow B}^e )^2}{4*P_{A \rightarrow B}^e} \end{aligned} \tag{3.1.4}$$

Similarly for the B-Pool, when $L_B = L_B^M$, the $K$ value has the largest increase, that is, the B-Pool gets the maximum arbitrage profit:

$$\begin{aligned}
L_B^M &= \frac{N_{BB} - N_A * P_{A \rightarrow B}^e}{2} \\[3mm]
&= \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})} \\
\end{aligned} \tag{3.1.5} $$

Samely, $L_B^e$ in $(2.4.19)$ is equal to $L_B^M$, that is, FreeSwap arbitrage mechanism can increase $K$ value of B-Pool to the maximum:

$$
\begin{aligned}
\Delta K_B^M &= \frac{( N_{BB} - N_A * P_{A \rightarrow B}^e)^2}{4*P_{A \rightarrow B}^e} \\[3mm]
&= \frac{(N_{AA}*N_{BB} - N_A *N_B)^2}{4*(N_A+N_{AA})*(N_B+N_{BB})}
\end{aligned} \tag{3.1.6} 
$$

Comparing $(3.1.3)$, $(3.1.6)$ and $(2.4.19)$, we can see that:

$$
\Delta K_B^M \equiv \Delta K_A^M \equiv L_A^e*L_B^e \tag{3.1.7}
$$

This means that FreeSwap arbitrage protocol can simultaneously maximize the increment of $K$ Value both for A-Pool and B-Pool by arbitrage, and the $K$ value increment in the two sub-pools are exactly the same, which equals to the product of the amount of tokens internaly exchanged within arbitrage between the sub-pools.

