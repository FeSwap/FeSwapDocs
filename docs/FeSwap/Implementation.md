---
id: implementation
title: FreeSwap DEX Features 
hide_title: true
sidebar_label: FeSwap Features
---

## <span className="title"> FeSwap DEX Features </span>
__________________

FeSwap decentralized exchange reuses part of Uniswap's technical architecture and technical implementation. The exchange function is mainly completed through three smart contracts: `Exchange Router`, `Pair Factory`, `Swap Pair`. 

`Exchange Router` is the access point for users to add liquidity, remove liquidity, and exchange tokens. 

`Pair Factory` mainly realizes the functions of exchange pair creation and exchange pair information management.

`Swap Pair` performs specific exchange functions, including add liquidity, move liquidity, mint/burn liquidity token, tokens exchange, price oracles, etc.

FeSwap also has many technical implementations different from UniSwap, which will be described in detail below. 

### <span className="title"> Two sub-pools setup </span>

FeSwap decentralized exchange adopts FreeSwap[<sup>[4]</sup>](Reference.md) AMM exchange protocol to determine the cryptocurrency exchange price and quantity according to the constant product formula [<sup>[3]</sup>](Reference.md). 

Unlike Uniswap [<sup>[2]</sup>](Reference.md) and other exchanges, users do not need to pay transaction fees when trading in FeSwap. According to the constant product formula, for two types of assets with quantities `A` and `B` in the trading pool, the asset of type `A` with quantity `a` can be exchanged for the asset of type `B` with quantity `b`, which is:

$$
    b = \frac{a}{A+a} B \tag{2.1.1} 
$$

FeSwap sets up two one-way exchange sub-pools for each pair of tokens. When the token prices of the two sub-pools deviate up to 1% on transaction processing, a certain amount of tokens are automatically swapped between the sub-pools to smooth the token price deviation. 

FreeSwap exchange protocol has theoretically proven that this internal token swap is a win-win situation for the two one-way sub-pools, and further, both the sub-pools gain the maximum benefits from the internal swap. According to the formula of the FreeSwap protocol [(2.4.1)](/docs/FreeSwap/protocol#formula_2_4_1), two one-way sub-pools can be expressed as: 

$$
    ( N_{AA} | N_B)\ || \ (N_A | N_{BB} ) \tag{2.1.2}
$$

The internal automatic swap rules, also the price smooth rules and arbitrage rules between the two sub-pools, are defined by the Freeswap protocol formula [(2.4.19)](/docs/FreeSwap/protocol#formula_2_4_19) :

$$
    \left\{ \begin{aligned} 
    \ \ &\frac{N_{AA} * N_{BB}}{N_A * N_B} \ \geq \ \gamma \\[3mm]
    P_{A \rightarrow B}^e \ = \ \ &\frac{N_B + N_{BB}}{N_A + N_{AA}} \\[3mm]
    L_A^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_B + N_{BB})}  \\[3mm]
    L_B^e \ = \ \ &\frac{N_{AA}*N_{BB} - N_A*N_B}{2*(N_A + N_{AA})}  \\[3mm]
    \end{aligned} \right. \tag{2.1.3} 
$$ 

Among the above formula, $\gamma$ is the trigger condition of arbitrage operation, and FeSwap predefines $\gamma=1\%$. $P_{A \rightarrow B}^e$ is the token price used for arbitrage exchange, and $L_A^e$ and $L_B^e$ is the number of tokens exchanged. 

### <span className="title"> Swap pair creation </span>

FeSwap imposes restrictions on the creation of token swap pairs in order to improve the quality of these swap pairs.

The creation authority of each token swap pair is controlled by a corresponding NFT token, and only the NFT owner has the right to create the swap pair, set or modify the receiver address of the profit coming from the liquidity provider service. 

60% of the platform income making by the swap pair is controlled by the owner of the swap pair NFT, who can designate any recipient for the income, or choose to give up the income within a certain period of time. 

Please refer to ["Trading Pair NFT"](NFT.md) for a detailed description of how to create a swap pair NFT, and how to bid and transfer the NFT.

### <span className="title"> Provide liquidity </span>

When adding liquidity for the swap pool, users can adjust the proportion of liquidity provided to the two sub-pools, to decide whether to provide only one sub-pool or to provide both sub-pools at the same time, and also the different proportion of liquidity allocated to the two sub-pools. 

Theoretically speaking, the income is a little bit higher to provide liquidity to the sub-pool with less liquidity, compared to provide liquidity to the sub-pool with more liquidity.

If the liquidity scale is large, you can provide to two sub-pools at the same time, if the liquidity is small, you can choose to just provide liquidity to the sub-pool with less liquidity. When the swap pair has just been created and the liquidity is first added, it is recommended that the liquidity allocation ratio of the two sub-pools be set to 50:50. 

> 1. Do not create a swap pair with two stable coins. FeSwap conducts internal token swap and also arbitrage to smooth the price deviation of the two sub-pools periodically, this mechanism is not applicable to swap pairs with two stable coins. 
> 2. Because some deflationary tokens burn a certain proportion of the amount transferred within the transaction, it is recommended not to create swap pairs containing such deflationary tokens. The internal swap of deflationary tokens can not ensure the token price consistency of the two sub-pools, and multiple times of token swaps could also accelerate the token deflation.

### <span className="title"> Distribution of exchange income </span>

The automated market maker based on FreeSwap protocol can make profits equivalent to charge 2.488‰ of exchange fee while without charging any exchange fee at all. 

11/12 or about 91.7% of the swap pair's earnings are shared by all liquidity providers in proportion to their respective shares of the liquidity they provide to the swap pair. FeSwap exchange platform and the swap pair owner share the other 1/12, approximately 8.3% of the earnings, with a distribution ratio of 40:60, namely FeSwap platform obtains 40% of 1/12, and the other 60% is paid to the receiving address set by the owner of the swap pair NFT. 

The NFT owner can modify the swap income receiving address at any time, or set the address to zero to temporarily waive the income. 

The trading income collected by FeSwap is mainly used to support the development and maintenance of the FeSwap exchange application, but FeSwap will waive this income within the first 3 months of FeSwap's online operation, in the hope of attracting more liquidity providers.

Exchange income is paid while a user provides or removes liquidity.

> After multiple swap transactions, a very small amount of dust income may be generated in the swap pair, due to  the reason of calculation accuracy during swap transactions. This dust income is not distributed but simply kept in the swap pair.

### <span className="title"> Remove liquidity </span>

If having provided liquidity to two sub-pools, the user can either remove liquidity from any one of the sub-pools, or remove liquidity from both sub-pools at the same time. 

### <span className="title"> Token exchange </span>

When users conduct token exchange through the FeSwap exchange router, the router first calculates the token price deviation within the two sub-pools. If the price deviation reaches 1%, the router triggers the internal token swap, which is also an internal arbitrage, between the two sub-pools to smooth the price deviation. 

For the user who triggers the internal arbitrage operation, he pays more gas fees than the normal transaction, but he also gets the best token swap price.

If some other contracts bypass the swap router and directly call the swap pair smart contract to conduct a token exchange, the internal arbitrage process will never be triggered. At this time, even if the price deviates above the threshold, the swap will still be processed at the deviated price. 

> Do not call the swap pair contract directly, unless you are very sure about your swap intention. If the operation is improper, you may suffer from some token loss. 

### <span className="title"> FeSwap flash swap </span>

Feswap supports flash swap, that is, users can first withdraw the required amount of trade-out tokens from the swap pair, and then return the corresponding number of the trade-in and/or trade-out tokens in the exact same swap transaction.

> Flash swap can only be initiated by invoking swap pair contract directly, and it is not possible to initiate flash swap via the swap router contract. 

Since the FeSwap swap pair is one-way swap pair, the flash swap can only withdraw the trade-out token, and cannot withdraw the trade-in token. Users need to carefully choose the swap pair to borrow the token needed. 

Flash swap transaction can return the trade-in token and/or trade-out token. If the trade-out token is returned, the FeSwap swap pair will charge a flash swap fee of 0.3% to obtain some service income for the swap pair liquidity providers. 

If the flash swap transaction returns trade-in tokens, FeSwap does not charge any swap fees. Flash swap usually involves a large swap amount of tokens, so while the trade-in token is returned, it will cause a big price slippage in the swap pair. This price slippage will be locked by the swap pair, and could trigger internal arbitrage in the subsequent swap transaction and generate benefits for the swap pair. 

During the flash swap, the user needs to carefully choose the type and quantity of the tokens to be returned from their own interests. FeSwap supports the simultaneous return of trade-in and trade-out tokens. The difference is that there is no charge for returning trade-in tokens while a 0.3% swap fee is charged for returning trade-out tokens. 

### <span className="title"> Token price oracle </span>

FeSwap inherits Uniswap's time-weighted average price oracle mechanism. 

However, since FeSwap adopts two one-way swap sub-pools, FeSwap token price oracle will output two token prices, and there will be a systematic deviation of less than 1% between these two prices. 

If a third-party uses the price given by the FeSwap price oracle, it must use the average of the prices given by the two sub-pools of the swap pair. The single oracle price given by the one-way sub-pool will change in one direction, and is adjusted periodically by internal token exchange. 

### <span className="title"> Blockchain network </span>

The FeSwap free decentralized exchange will initially run on the Ethereum network, and while its running is stable, we will consider deploying it to some Ethereum layer-2 networks, and maybe some other specific blockchain networks such as Binance Smart Chain.

When deployed to other blockchain networks, a few operating parameters of the swap pair may be adjusted, but the core idea of providing users with free token exchange service will remain the same. 