---
id: nft
title: NFT bidding on Harmony
hide_title: true
sidebar_label: 'NFT Bid Setting'
---

<div  className="title">
  <h1> NFT bidding on Harmony </h1>
</div>

_______________________

FeSwap DAO does not own and control any crypto asset liquidity pools, the NFT owner of the liquidity pool does. NFT owner earns 60% of the
protocol profit of the belonged liquidity pools, FeSwap DAO just collect the left 40%. NFT owner also has the privilege to set the price gap
trigerring internal asset exchange, to config the fraction of protocol profit in the total exchange profit, and to swith on/off the price
oracle utility. 

To be an NFT owner of an asset-pair liquidity pool is extremly easy, just create it with **ZERO** bidding price. You need to pay nothing
else than some miminal transaction gas fees on Harmony. If the NFT is created or occupied by someone else, you could bid it with a litte bit
higher price, which is 2% more than current price, or just 10 ONE adding price if current price is less than 500 ONE. Once there is no one else
bidding this NFT within the bidding duration which is 3 days starting from it is first bidded, you will be the winner of this NFT.

Each time you bid for an NFT, you will get some giveaway in FESW@O. As the fisrt bidder of an NFT, you will get 5000 FESW@O. While bidding
with a higher price, you will get the giveaway at the rate of 20 FESW@O/ONE based on your bidding price increment, no matter whether
you are the first bidder or following bidder.

As the winner of an NFT bidding, you will get the giveaway at the rate of 100 FESW@O/ONE based on your final bidding price, which is
distributed alongside with the creation of the liquidity pool while you claim your won NFT.  

Detailded NFT bidding rules are as following:

| Rule No.    |  Bidding Rules  |   More Info  |
|:-----------:|:--------|:----------|
|  1 | The first NFT bidder of any crypto asset liquidity pool receives 5000 FESW@O as the giveaway. Only the heading 4000 first NFT bidders are qualified for this giveaway.<br/>* If the bidding price is not ZERO, additional giveaway is distributed based on rule 2.  |  Giveaway = 5000  |
|  2 | Giveaway amount to any following NFT bidder is the product of the bidding price increment and the rate of 20 FESW@O/ONE. This rule is also applicable to the first NFT bidder if the bidding price is not ZERO.      |   Giveaway = 20 * Price increment   |
|  3 | The bidding price increment should be more than 2% over current NFT price, or more than 10 ONE if current price is less than 500 ONE. <br/> * The first NFT bidder could offer any bidding price, including ZERO. | δP >= max (10 ONE, 2% * price) |
|  4 | Normal bidding duration is 3 days staring from the firts bidding time (t<sub>0</sub>).     |   t<sub>e</sub> = t<sub>0</sub> + 3 days   |
|  5 |  Bidding is extended if anyone bids the NFT within 2 hours before the normal ending time. Extension duration is 2 hours starting from the last bidding time.      |  t'<sub>e</sub> = t + 2 hours, if t >= t<sub>e</sub> - 2 hours    |
|  6 |  The bidding is ended if the normal bidding time passed, and no new bidding comes in during last 2 hours. The last NFT bidder is the final bidding winner.  |      |
|  7 |  The NFT winner need to claim the NFT within 4 days starting from the time the bidding has ended, otherwise the NFT will be open for re-bidding, but the current winner will only be refunded half of the final bidding price.      |      |
|  8 |  The giveaway amount to the NFT bidding winner is the product of the last bidding price and the rate of 100 FESW@O/ONE.            |  Winner giveaway = 100 * Price  |

