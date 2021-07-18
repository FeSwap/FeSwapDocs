---
id: arbitrage-fair
title: FreeSwap 套利机制公平性分析 
hide_title: true
sidebar_label: 套利机制公平性分析
---

## <span className="title"> 套利机制公平性分析 </span>
_______________________

### <span className="title"> 套利机制公平性要求 </span>

从 $A$ 池、$B$ 池的流动性资金提供者的角度看，子交易对的资金调配，也即套利操作需要做如下公平性考虑：

  1. A池、B池必须都在套利操作中取得正向收益。一方收益、一方受损则有失公平，套利机制无法成立；

  2. A池、B池的套利收益需要合理平衡。一方收益大，另一方收益小，则套利机制也存在缺陷；

  3. A池、B池从各自的角度考虑，都希望自己在套利操作中收益最大化。套利机制的理想目标是同时实现两个交易池双方的收益最大化。

FreeSwap 交易协议的套利机制能够满足上述3点要求，即可以同时实现交易池双方的最大正向收益，并且双方受益相等。

### <span className="title"> 套利机制公平性分析 </span>

套利操作的收益大小，可以通过套利操作前后，子交易对的 “恒定资产乘积” 的变化来衡量。下面对套利操作完成后，两个子交易对的 $K$ 值变化进行分析。

对于 $A$ 子交易对，套利后的K值变化为：

$$
\begin{aligned}
\Delta K_A &= ( N_{AA} - L_A ) * ( N_B + L_B ) - N_{AA} * N_B \\[1mm]
&= N_{AA} * L_B - L_A * N_B - L_A * L_B \\[1mm]
&= {-P}_{A \rightarrow B}^e * L_A^2 + ( N_{AA} * P_{A \rightarrow B}^e - N_B ) * L_A \\[1mm]
&= {-P}_{A \rightarrow B}^e * \left( L_A - \frac{N_{AA} - N_B * P_{B \rightarrow A}^e}{2} \right)^2 + \frac{( N_{AA} - N_B * P_{B \rightarrow A}^e )^2}{4*P_{B \rightarrow A}^e}
\end{aligned} \tag{3.1.1} 
$$

可见对于 $A$ 池，当 $L_A = L_A^M$ 时，$K$ 值增加最大，即 $A$ 池获得最大套利收益：

$$
\begin{aligned}
L_A^M &= \frac{N_{AA} - N_B * P_{B \rightarrow A}^e}{2} \\[3mm]
&= \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})} \\
\end{aligned} \tag{3.1.2} 
$$

不难发现，关系式 $(2.4.19)$ 中的 $L_A^e$ 与 $L_A^M$ 相等，即 FreeSwap 的套利机制可以实现 $A$ 池的最大 $K$ 值增加: 

$$
\begin{aligned}
\Delta K_A^M &= \frac{( N_{AA} - N_B * P_{B \rightarrow A}^e )^2}{4*P_{B \rightarrow A}^e} \\[3mm]
&= \frac{(N_{AA}*N_{BB} - N_A *N_B)^2}{4*(N_A+N_{AA})*(N_B+N_{BB})}
\end{aligned} \tag{3.1.3} 
$$

类似地，对于 $B$ 子交易对，套利后的K值变化为：

$$
\begin{aligned}
\Delta K_B &= (N_{BB} - L_B) * (N_A + L_A) - N_{BB} * N_A \\[1mm]
&= N_{BB} * L_A - L_B * N_A - L_A * L_B \\[1mm]
&= {-P}_{B \rightarrow A}^e * L_B^2 + ( N_{BB} * P_{B \rightarrow A}^e - N_A ) * L_B \\[1mm]
&= {-P}_{B \rightarrow A}^e * \left( L_B - \frac{N_{BB} - N_A * P_{A \rightarrow B}^e}{2} \right)^2 + \frac{( N_{BB} - N_A * P_{A \rightarrow B}^e )^2}{4*P_{A \rightarrow B}^e} \end{aligned} \tag{3.1.4}
$$

同样对于 $B$ 池，当 $L_B = L_B^M$ 时，$K$ 值有最大增加值，即 $B$ 池获得最大套利收益：

$$
\begin{aligned}
L_B^M &= \frac{N_{BB} - N_A * P_{A \rightarrow B}^e}{2} \\[3mm]
&= \frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})} \\
\end{aligned} \tag{3.1.5} 
$$

同样，关系式 $(2.4.19)$ 中的 $L_B^e$ 与 $L_B^M$ 相等，即 FreeSwap 的套利机制可以实现 $B$ 池的最大 $K$ 值增加: 

$$
\begin{aligned}
\Delta K_B^M &= \frac{( N_{BB} - N_A * P_{A \rightarrow B}^e)^2}{4*P_{A \rightarrow B}^e} \\[3mm]
&= \frac{(N_{AA}*N_{BB} - N_A *N_B)^2}{4*(N_A+N_{AA})*(N_B+N_{BB})}
\end{aligned} \tag{3.1.6} 
$$

比较 $(3.1.3)$ 、$(3.1.6)$ 以及 $(2.4.19)$，可以发现：

$$
  \Delta K_B^M \equiv \Delta K_A^M \equiv L_A^e*L_B^e \tag{3.1.7}
$$

这意味着，FreeSwap 套利协议能够同时实现 $A$ 池、$B$ 池套利前后 $K$ 值增量最大化, 而且 $A$ 池、$B$ 池的 $K$ 值增量是完全相同的, 其值等于子资金池之间相互套利资产数量的乘积。

可见 FreeSwap 套利协议满足上面所述公平性原则。

