---
id: nft
title: FeSwap Improvements on BSC
hide_title: true
sidebar_label: 'NFT bid Setting'
---

<div  className="title">
  <h1> NFT bidding on BSC </h1>
</div>

_______________________

FeSwap DAO does not own and control various crypto asset liquidity pools, the NFT owner corresponding to the liquidity pool does. NFT owner earns 60% of the protocol profit of the perspective liquidity pools, FeSwap Dao just gets the left 40%. NFT owner also has the previlige to set the price gap trigerring internal asset exchange, to config the ratio of protocol profit in the total exchange profit, and to swith on/off the price oracle feature. 

To be an NFT owner of an asset-pair liquidity pool is extremly easy, just create it with ZERO bidding price. You need to pay nothing else than some miminal transaction gas fees on BSC. If the NFT is created or occupied by someone else, you could bid it with a litte bit higher price, which is 2% more than current price, or just 0.02BNB more if current price is less than 1 BNB. Once there is no one else bidding this NFT within the bidding duration which is 3 days starting from it is first bidded, you will be the winner of this NFT.

Each time you bid for an NFT, you will get some giveaway in FESW@B. As the fisrt bidder of an NFT, you will get 1000 FESW@B. While bidding with a higher price, you will get the giveaway at the rate of 10000 FESW@B/BNB based on your bidding price increasement, no matter you are the first bidder or following bidder.

As the winner of an NFT bidding, you will get the giveaway at the rate of 50000 FESW@B/BNB based on your final bidding price, which is distributed alongside with the creation of the liquidity pool while you claim your won NFT.  

Detailded NFT bidding rules are as following:

| Rule No.    |  Bidding Rules  |   More Info  |
|:-----------:|:--------|:----------|
|  1 | The first bidder of any crypto asset liquidity pool NFT receives 1000 FESW@B if the bidding prics is 0.  Additional giveaway amount is the product of the bidding price and the rate of 10000 FESW@B/BNB.   |  Giveaway = 1000 + 10000 * Price  |
|  2 | Giveaway amount to any following NFT bidder is the product of the bidding price increasement and the rate of 10000 FESW@B/BNB    |   Giveaway = 10000 * Price Increasement   |
|  3 | The bidding price increasement should be more than 2% over current NFT price, or 0.02BNB if current price is less than 1 BNB | ↑ Price >= max of<br/>(0.02BNB, 2% * price)   |
|  4 | Normal bidding duration is 3 days staring from the firts bidding time (t<sub>0</sub>) is        |   t<sub>e</sub> = t<sub>0</sub> + 3 days   |
|  5 |  Bidding is extended if anyone bids the NFT within 2 hours before the normal ending time. Extension duration is 2 hours starting from the last bidding time.      |  t'<sub>e</sub> = t + 2 hours, if <br/> t >= t<sub>e</sub> - 2 hours    |
|  6 |  The bidding is ended if the normal bidding time passed, and no new bidding coming in during last 2 hours. The last NFT bidder is the final bidding winner  |      |
|  7 |  The NFT winner need to claim the NFT within 4 days starting from the time the bidding has ended, otherwise the NFT will be open for re-bidding, and the current winner will only be refunded half of the final bidding price.      |      |
|  8 |  The giveaway amount to the NFT bidding winner is the product of the last bidding price and the rate of 50000 FESW@B/BNB            |  Winner giveaway = 50000 * Price  |

