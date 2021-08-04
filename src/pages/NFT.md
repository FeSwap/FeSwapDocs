---
title: FeSwap Token Pair NFT
hide_table_of_contents: false
---

<div  style={{ color: "#00A4B8",}}>
  <h1> FeSwap Token Pair NFT </h1>
</div>

_____________

import { LinkButton } from '@site/src/components/BrowserWindow';

FeSwap NFT represents the owner of specific swap pair. Holding FeSwap NFT makes profits for its owner. 

FeSwap NFT are distributed by bidding. Everybody can participate in the bidding of all the NFTs, each one of which is bound to one ERC20 token pairs.

The owner of each FeSwap NFT is eligible to create the corresponding token pair, and benefit from the profit making from the swapping between the token pair.

<LinkButton url="docs/FeSwap/nft" link="Learn more about FeSwap NFT 👈" />

<div style={{height:'60px'}}/>

## <span className="title"> Bid FeSwap NFT </span>

FeSwap NFT bidding is ready now ! 

You may have chance to create any token pair NFT with the price of 0.2 ETH, and to be the owner of this token pair.

As the first bidder and also the creator of any token pair NFT, you will receive 1000 FESW tokens. Any other time you bid for an NFT, you will receive 500 FESW tokens.

Within two weeks if no one else bids the NFT with higher price, you will be the winner of this NFT bidding.

Each time you are surpassed by someone else, your original bidding ETH will be returned back, with some additional value which equals to 10% of the price difference between you and your very next bidder.   

<LinkButton url="https://app.feswap.io/#/NFT" link="Start to Bid FeSwap NFT  ↗" />

<div style={{height:'60px'}}/>

## <span className="title"> Buy/Sell FeSwap NFT </span>

All FeSwap token pair NFT owners could put up their NFT for sale with any desired price. Anyone can buy the NFT with the selling price at that time. Selling/buying FeSwap NFT is completely free of cost within FeSwap application. Anyhow FeSwap urge all NFT owners holding their FeSwap NFT forever.

<LinkButton url="https://app.feswap.io/#/NFT" link="Jump to Buy FeSwap NFT  ↗" />

<div style={{height:'60px'}}/>

## <span className="title"> Manage FeSwap NFT </span>

As the NFT owner you can config the arbitrage rate of your token pair. Normally the higher the arbitrage rate, the more the profit making by the token pair. But higher arbitrage rate means higher token price deviation, which could prevent users from using the token pair. 1.0-1.5% is the preferred arbitrage rate. If you are not sure how to set and/or how much to set the arbitrage rate, just keep it as the default, which is 1.0%. <br/>

As the NFT owner you can set the swapping profit receiver, normally it is yourself by deafult, but it could be any address you want to specify.   

<LinkButton url="https://app.feswap.io/#/create" link="Link to Manage FeSwap NFT  ↗" />

<div style={{height:'60px'}}/>

_________________

## <span className="title"> Guidance to bid for FeSwap NFT </span>
*** In following guidance, assuming you are using MetaMask wallet. *

import GuidanceWindow from '@site/src/components/GuidanceWindow';
import { RefreshCcw, PlusCircle, Activity, Lock, User, Coffee, Flag, MinusCircle, Clock, Volume2, Eye } from 'react-feather'

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT01.png">
  <span>
    <strong>Step 1:</strong> Connect Metamask wallet. <br/><br/>
    <strong>Step 2:</strong> Click <strong>"NFT"</strong> Menu.<br/>
    Now <strong>"Nft Bid/Trade"</strong> window displayed. 
  </span>  
</GuidanceWindow>

______________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT02.png">
  <span>
    <strong>Step 3:</strong> Select <strong>"Token A"</strong> and <strong>"Token B"</strong>, which are the two tokens of the <strong>"Swap Pair"</strong> you want to bid for. <br/><br/>
    <strong>Step 4:</strong> In the <strong>"Bid Price"</strong> area, input your bidding price in ETH. If you are the first bidder of the swap pair, the minimum price is <strong>0.2ETH</strong>, otherwise your price should be <strong>0.1ETH</strong> more than current price if it is less than <strong>1ETH</strong>, or your price should be <strong>10%</strong> more than current price if it is more than <strong>1ETH</strong>.<br/><br/>
    <strong>Step 5:</strong> Click the button <strong>"Initiate a Bid"</strong> to bid for the swap pair. 
  </span>  
</GuidanceWindow>

______________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT02B.png">

:::info
- If the token pair you want to bid has already been bidded by someone else, the NFT bidding window could be a little bit different 
  and similar as the left one, where some more token pair bidding information are shown.
- Your new bidding price should be more than <strong>"Minimum Bid Price"</strong>, otherwise,
  <strong>"Low Bid Price" </strong> will be prompted. 
- Your bidding should be submitted before <strong>"Bid Ending Time"</strong>.
::: 

  <span>
    <strong>Step 5B:</strong> Click the button <strong>"Bid the NFT"</strong> to bid for the swap pair in this case.
  </span>  

</GuidanceWindow>

_____________________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT03.png">

:::tip
- Click <PlusCircle size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}/> 
  to add the swap pair to your watch list if not yet.
- Double-click the swap pair in the watch list, this swap pair will be quickly selected as `Token A` and `Token B`.
- Clicking <MinusCircle size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}} /> will remove the swap pair from the watch list.
- Bidding Status Meaning:
  - <Lock size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> Bid closed
  - <User size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> You are owner, or leading the bid.
  - <Coffee size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> No one bid this pair.
  - <Flag size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> Bid completed.
  - <Activity size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> Bid on going.
  - <Clock size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> Bid in delay phase
  - <Eye size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> You are currently bidding. 
  - <Volume2 size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> Token pair on sale.
:::

</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT04.png">
  <span>
    <strong>Step 6:</strong> In the confirm window, the bidding price and FESW giveway amount are prompted. Check these information , and then click <strong>"Confirm bid"</strong> to connect wallet and sign the transaction.<br/><br/>
    <strong>Step 7:</strong> In Metamask, check the transaction content, sign and broadcast the tranaction.<br/><br/>
    <strong>Step 8:</strong> Waiting the transaction to be confirmed in the ETH network.
  </span>  
</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT05.png">

:::info
After your bidding transaction is confirmed by ETH network, swap pair bidding status will be updated:
- <User size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> You are leading the swap pair bidding currently.
- <Activity size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}
      /> The bidding is activating.
- Current price of the swap pair is <strong> 0.2 ETH </strong>. This price will be changing as the bidding is going on. 

Additional bidding information is also displayed to help follow the bidding process:
- Current Price: The last bidding price for the given swap pair.
- Last Bid Time: The block time of the last succeeded bidding transaction of the swap pair.
- Bid Ending Time: The ending time of the bidding, normally which is two weeks later starting from the time 
  the swap pair is for the very first time bidded by someone. 
  - Bid ending time will always be delaying until no one bids for the swap pair for the last 2 hours.  
- Mininum Bid Price：The minimum bid price should be <strong>0.1ETH</strong> more than current price 
  if it is less than <strong>1ETH</strong>, or it should be <strong>10%</strong> more than current price 
  if it is more than <strong>1ETH</strong>. 
::: 
</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/NFT/NFT06.png">

:::info

- This picture shows the bidding satus after a few bidding tranaction. This is just for demo.

::: 

</GuidanceWindow>
______________________________




