---
id: protocol
title: FreeSwap Exchange Protocol 
hide_title: true
sidebar_label: Procotol
---

## <span className="title"> 2 FreeSwap Exchange protocol </span>
_________________________________________

### <span className="title"> 2.1 FreetSwap protocol goal </span>


The goal of FreeSwap protocol is to implement a decentralized exchange protocol with no trade fees at all. 

The "constant-product invariant" mechanism inevitably leads to token price slippage, from which FreeSwap could make profits for liquidity provider by arbitraging automatically.

### <span className="title"> 2.2 FreeSwap trade pair setup </span>

FreeSwap trade protocol sets up two independent one-way sub-pools for the token pair $(Token A|Token B)$, expressed as:

$$
( N_{AA} | N_B)\ || \ (N_A | N_{BB} ) \tag{2.2.1} 
$$

Where, the sub-pool $(N_{AA}|N_B)$ (called as A-Pool hereinafter) can trade in $Token A$, trade out $Token B$, $N_{AA}$ is the number of $Token A$, and $N_B$ is the number of $Token B$ in A-Pool.

The sub-pool $(N_A|N_{BB})$ (called as B-Pool hereinafter) can trade in $Token B$, trade out $Token A$, $N_{BB}$ is the number of $Token B$, and $N_A$ is the number of $Token A$ in B-Pool.

When the liquidity provider adds tokens into the trading pool, he can specify which sub-pool to add, or he can add into both the sub-pools at the same time with specified ratio.

### <span className="title"> 2.3 FreetSwap token exchange </span>

When the user trades $Token A$ and $Token B$ with the trading pool, there are two opposite trading operations, one is to trade in $Token A$, and trade out $Token B$; the other is to trade in $Token B$, and trade out $Token A$. Here, "trade in" and "trade out" are relative to the trading pool.

If the user trades $Token A$ for $Token B$, FreeSwap will pass this trade to A-Pool, the $(N_{AA}|N_B )$ sub-pool to process. The A-Pool always trades in $Token A$ and trades out $Token B$, so the number of $N_{AA}$ always goes up, and the number of $N_B$ always goes down, which will lead to the monotonous decrease of $Token A$ price denominated by $Token B$, and finally resulting $Token A$ price deviating from actual market price. 

Similarly, if the user trade in $Token B$ for $Token A$, B-Pool will handle this trade. B-Pool always trades in $Token B$, and trades out $Token A$, so the amount of $N_{BB}$ will keep rising, and the amount of $N_A$ keep falling, which will also cause that $B$ price denominated in $Token A$ decreases monotonically and eventually deviates from the actual market price.

The sub-pool $(N_{AA}|N_B)$ and $(N_A | N_{BB} )$ are two one-way trading pairs in opposite directions, they are always fixed at one token in and the other token out. As the trades happening, the prices of the pair tokens always slide in opposite directions. After some trade volume accumulation, the price difference of the same token in the two sub-pools will exceed a certain level, which is too large to prevent users from participating the exchange. At this time, it is necessary to internally exchange the tokens between the sub-pools to smooth the token price difference. The process of internal token exchange within the sub-pools is actually a arbitrage process. As trading users trade with the two one-way trading pools, token prices will slide in opposite ways, and consequently users will suffer trade losses becasue of this price slippage. By executing the internal exchange between two sub-pools, price slippage can be fixed, and the arbitrage to user trade slippage losses can be achieved, which may make profits for the liquidity providers of the pool.

### <span className="title"> 2.4 FreeSwap exchange arbitrage </span>

As said above, FreeSwap sets up two independent sub-trading pools:

$$
( N_{AA} | N_B )\ || \ ( N_A | N_{BB} ) \tag{2.4.1}
$$

The prices of $Token A$ and $Token B$ in the two sub-pools will deviate as exchange occurs. When the price deviates to some extent, the two sub-pools need to internally exchange tokens to restore the token price. The token exchange between two sub-pools can restore the token prices of both side, and coulde also commit some kind of arbitrage between the pools. The analysis following:

Before arbitrage, $Token A$ prices in two pools are:

$$
P_{AA \rightarrow B} = \frac{N_B}{N_{AA}} \tag{2.4.2}
$$

$$
P_{A \leftarrow {BB}} = \frac{N_{BB}}{N_A} \tag{2.4.3}
$$

The deviation ratio is:

$$
R_{PA} = \frac{P_{A \leftarrow BB}}{P_{AA \rightarrow B}} = \frac{N_{AA} * N_{BB}}{N_B \ * \ N_A} \tag{2.4.4}
$$

Similarly, $Token B$ prices in the two pools are:

$$
P_{BB \rightarrow A} = \frac{N_A}{N_{BB}} \tag{2.4.5}
$$

$$
P_{B \leftarrow {AA}} = \frac{N_{AA}}{N_B} \tag{2.4.6}
$$

The deviation ratio is:

$$
R_{PB} = \frac{P_{B \leftarrow AA}}{P_{BB \rightarrow A}} = \frac{N_{AA} * N_{BB}}{N_B * N_A} \tag{2.4.7}
$$

It can be seen that the price ratios of $Token A$ and $Token B$ in the two sub-pool are the same, namely:

$$
R_{PA} = R_{PB} = R_P = \frac{N_{AA} * N_{BB}}{N_B * N_A} \tag{2.4.8}
$$

The FreeSwap protocol specifies that when the token prices of two sub-pool deviate to a certeain threshold $\gamma$, such as the value of $R_{P}$ is greater than 101%, the internal arbitrage exchange is automatically executed to restore the token price.

Arbitrage operation is to exchange one token with more amount in one sub-pool for the other token with more amount in the other sub-pool with the equivalent value, that is, $(N_{AA}|N_B)$ sub-pool swap $Token A$ for $Token B$ with same value in $(N_A|N_{BB})$. From another perspective, it is for $(N_A|N_{BB})$ sub-pool to exchange $Token B$ for $Token A$ in $(N_{AA}|N_B )$ sub-pool with equal value.

To ensure the exchange is fair, the exchange price is set as the average price of all tokens in the two sub-pools, namely:

$$
P_{A \rightarrow B}^e = \frac{N_B + N_{BB}}{N_A + N_{AA}} \tag{2.4.9}
$$

$$
P_{B \rightarrow A}^e = \ \frac{N_A + N_{AA}}{N_B + N_{BB}} \tag{2.4.10}
$$

$$
P_{A \rightarrow B}^e * P_{B \rightarrow A}^e = \ 1 \tag{2.4.11}
$$

After the arbitrage completed, the two sub-pools can be expressed as:

$$
(N_{AA} - L_A \ | \ N_B + L_B  )\ ||\ ( N_A + L_A \ | \ N_{BB} - L_B ) \tag{2.4.12}
$$

That is, in this trade arbitrage, A-Pool exchanges $Token A$ with a quantity of $L_A$ for $Token B$ with a quantity of $L_B$. Considering the exchange value is equal, the following equation exists:
 
$$
L_{B} = L_{A}*P_{A \rightarrow B}^e \tag{2.4.13}
$$

After the arbitrage operation, $Token A$ price of the A-Pool (priced in $Token B$) will increase, but it should not exceed the average price of the overall trading pool $P_{A \rightarrow B}^e$ for the reason of fairness. Similarly, $Token B$ price (priced in $Token A$) in B-Pool will also rise, but also should not exceed the average price $P_{B \rightarrow A}^e$ , That is, the following relationship exists:

$$
\frac{N_B + L_B}{N_{AA} - L_A} \leq P_{A \rightarrow B}^e \tag{2.4.14} 
$$

$$
\frac{N_A \ + \ L_A}{N_{BB} \ - \ L_B} \normalsize \leq P_{B \rightarrow A}^e \tag{2.4.15}
$$

Combining $(2.4.13)-(2.4.15)$, following relationships can be derived: 

$$
L_A \leq \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})}  \tag{2.4.17} 
$$

$$
L_B \leq \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})}  \tag{2.4.18} 
$$

In order to reduce the times of arbitrage operation, arbitrage between two sub-pools should exchange as many tokens as possible to smooth token price deviations to the greatest extent. So $L_A$, $L_B$ should take the maximum vaue given by $(2.4.17)$ and $(2.4.18)$. It is easy to find, in this case, the token prices of the two sub-pools both happen to be restored to the average token price of the whole trade pool $P_{A \rightarrow B}^e$, which is also the price at which the two sub-pools exchange tokens.

In general, FreeSwap arbitrage can be expressed as follows:

$$\left\{ \begin{aligned} 
\ \ &\frac{N_{AA} * N_{BB}}{N_A * N_B} \ \geq \ \gamma \\[3mm]
P_{A \rightarrow B}^e \ = \ \ &\frac{N_B + N_{BB}}{N_A + N_{AA}} \\[3mm]
L_A^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})}  \\[3mm]
L_B^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})}  \\[3mm]
\end{aligned} \right. \tag{2.4.19} $$ 

Among the above equation, $\gamma$ is the condition for triggering the arbitrage operation, which means that arbitrage is executed when the price deviation of the two sub-pools is greater than or equal to $\gamma-1$.  $L_A^e$, $L_B^e$ are the amount of tokens exchanged between the two sub-pools within the arbitrage operation. Arbitrage is taken by exchanging $L_A^e$, $L_B^e$ amount of `TokenA`, $Token B$ at the price of $P_{A \rightarrow B}^e$, on arbitrage completion, the token prices of the two sub-pools are exactly the same, both are $P_{A \rightarrow B}^e$.

