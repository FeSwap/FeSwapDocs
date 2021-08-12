---
id: liquidity
title: FeSwap Liquidity
hide_title: true
hide_table_of_contents: false
sidebar_label: How to add liquidity
---

<div  style={{ color: "#00A4B8",}}>
  <h1> FeSwap Liquidity </h1>
</div>

_____________

import { LinkButton } from '@site/src/components/BrowserWindow';

By adding liquidity to the token pair liquidity pool, you could make profits from the token swap transactions.

FeSwap swap protocol charge no exchange fee to the swap tranactions, but FeSwap is still able to make competitive profits for its liquidity providers thanks to a creative internal arbitrage mechanism.

FeSwap token pairs are controlled somewhat by their corresponding owners, they can configure the setting of the token pair swapping, and could further influence the profit level of the token pair.   

<LinkButton url="docs/FreeSwap/abstract" link="Learn more about FeSwap Protocol 👈" />
<div style={{height:'60px'}}/>

## <span className="title"> Add/Remove Liquidity </span>

Adding and removing liquidity are a little bit complex. FeSwap application provides friendly interface to interact with the token pair liquidity pools running on various EVM compliant blockchains, and further help users to manage their liquidity.

<LinkButton url="https://app.feswap.io/#/liquidity" link="Start to Add/Remove Liquidity ↗" />
<div style={{height:'60px'}}/>



## <span className="title"> Liquidity Mining </span>

You could deposit your liquidity tokens to specific contract to mine FESW tokens, which represent the governance right of FeSwap community.  

Only a very few of token pair liquidity tokens support FESW mining. Periodically FeSwap community could vote on proposals to add new liquidty tokens to the list supporting FESW mining. 

Right now, 3 liquidty tokens can be deposited to mine FESW token, which are:
- ETH 🔗 WBTC
- ETH 🔗 USDT
- ETH 🔗 FESW

<LinkButton url="https://app.feswap.io/#/fesw" link="Start to ming FESW ↗" />
<div style={{height:'60px'}}/>

_________________


## <span className="title"> Guidance to Add Liquidity </span>

import GuidanceWindow from '@site/src/components/GuidanceWindow';
import { Settings, Activity, Check, Circle, Hash, Flag, Feather, Clock, ChevronUp, ChevronDown } from 'react-feather'

<GuidanceWindow imageUrl="img/Guidance/Liquidity/Liquidity01.png">
  <span>
    <strong>Step 1:</strong> Connect Metamask wallet. <br/><br/>
    <strong>Step 2:</strong> Click <strong>"Liquidity"</strong> Menu.<br/>
      Now come to your liquidity status window similar as displayed.  <br/><br/>
    <strong>Step 3:</strong> Click <strong>"Add Liquidity"</strong> button.<br/>  <br/><br/>
  </span>
</GuidanceWindow>

______________

<GuidanceWindow imageUrl="img/Guidance/Liquidity/Liquidity02.png">
  <span>
    <strong>Step 4:</strong> Select the two tokens of the token pair you want to add liquidity, 
        which are named <strong>"Token A"</strong> and <strong>"Token B"</strong>. <br/><br/>
  </span>  

> - If the token pair of the two selected tokens have not been created, the button `Pair Not Created` will be shown.<br/>
>   - FeSwap token swap pair cannot be created at the first time it is added liquidity, instead it can only be explicitly createdly by its owner. To be the owner of any token swap pair, you need to bid [token pair NFT 👈](./NFT). <br/><br/>
> - If the token pair is created, the current token prices and your pool share within the token pair
       will be shown in the area `Prices and pool share`.<br/><br/>
> - Read the information at the bottom.

</GuidanceWindow>

_____________________

<GuidanceWindow imageUrl="img/Guidance/Liquidity/Liquidity03.png">
  <span>
    <strong>Step 4:</strong> Input the amount of the token you want to add.
  </span>

> - If this token pair has already been fuelled liquidities, you only need to input one amount, 
  the other one is auto-filled. In this case, you need to carefully check the prices 
  of the two tokens. If you are not happy with the prices, please quit to add liquidity.
> - If the token pair has no liquidity, and you are the first person to add liquidity to this token pair,
  yout need to input two amounts. In this case, please check the amounts very carefully
  as these two amounts will determine the token prices within the token pair. If they are not appropriate
  in proportion, your asset could be lost as someone else could change the token proportion by 
  conducting token swapping.

  <span>
    <strong>Step 5:</strong> Set the liquidity ratio between the two sub-pools.
  </span>  

> - Click `🔨` to use the ratio proposed by the application if you are not sure how to set the ratio.     
> - Normally it is more favorable to add more liquidity to the sub-pool with less liquidity. 
> - Adding all your liquidity to just one sub-pool is some gas-saving. If your liquidiy is less than 
    0.2% of the token pair total liquidity, you could consider just adding all your liquidity to one sub-pool.

  <span>
    <strong>Step 6:</strong> Click the button <strong>"Supply"</strong>.<br/><br/> 
  </span>  

</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/Liquidity/Liquidity04.png">
  <span>  
    <strong>Step 7:</strong> Click <strong>"Confirm Supply"</strong> to add your liquidity.<br/><br/>
  </span>  

> - In the upper part of confirm window, the two liquidity token amounts corresponding to the liquidity you are adding are displayed.
> - In the down  part of confirm window, some additional information are given, including token amounts you are adding, curent token price, 
    and your liquidity share after your liquidity is added. 
> - Check all above information before you click the button `Confirm Supply`.

</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/Liquidity/Liquidity05.png">
  <span>  
    <strong>Step 8:</strong> In Metamask, check the transaction content, sign and broadcast the tranaction.<br/><br/>
    <strong>Step 9:</strong> Waiting the transaction to be confirmed in the ETH network.<br/><br/>
  </span>  

</GuidanceWindow>

______________________________

<div style={{height:'60px'}}/>

## <span className="title" > Guidance to Remove Liquidity </span>

<GuidanceWindow imageUrl="img/Guidance/Remove/Remove01.png">

> After you have added some liquidity, your liquidity status might look like the left window.

  <span>
    <br/>
    <strong>Step 1:</strong> Click <span style={{color:'#ff007a'}}>"Manage <ChevronDown size="16" style={{ color: '#ff007a'}} />"</span> <br/>
  </span>

> Detailed liquidity status will be displayed, including liquidity token amounts, shares, and so on.

  <span>
    <br/>
    <strong>Step 2:</strong> <span style={{color:'#ff007a'}}><strong>"Remove"</strong></span> to remove liquidity.
  </span>

> Click the button <span style={{color:'#ff007a'}}><strong>"Add"</strong></span> if you want to add liquidity to this token pair.

</GuidanceWindow>

_____________________________

<GuidanceWindow imageUrl="img/Guidance/Remove/Remove02.png">

  <span>
    <strong>Step 3:</strong> Specify the liquidity ratio of the two sub-pools you want to remove, which could be 0-100%, inclusively.<br/><br/>
  </span>

  <span>
    <strong>Step 4:</strong> Appove the FeSwap application to transfer your two liquidity tokens. 
  </span>

> If any one of the liquidty ratio to remove is specified as 0, you just need to approve the other one of the two liquidity tokens.

  <span>
    <br/>
    <strong>Step 5:</strong> Click <span style={{color:'#ff007a'}}><strong>"Remove"</strong></span> to remove liquidity.
  </span>

</GuidanceWindow>

______________________________



