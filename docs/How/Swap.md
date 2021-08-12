---
id: swap
title: FeSwap Exchange
hide_title: true
hide_table_of_contents: false
sidebar_label: How to swap token
---

<div  style={{ color: "#00A4B8",}}>
  <h1> FeSwap Exchange </h1>
</div>

_____________

import { LinkButton } from '@site/src/components/BrowserWindow';

FeSwap, as a decentralized exchange, supports ERC20 token exchange completely with no exchange fee.

But FeSwap can still make competitive profits for its liquidity providers thanks to a creative internal arbitrage mechanism, which both reduces some security attack risk, and aslo works well as a new economic modal to drive the decentralized exchange.  

<LinkButton url="docs/FreeSwap/abstract" link="Learn more about FeSwap Protocol 👈" />

<div style={{height:'60px'}}/>

## <span className="title"> FeSwap Baics </span>

Within FeSwap application, each swap pair has its owner, who is the bidding winner of this token pair NFT. Only the owner of the NFT is able to creat the respective token swap pair, so token pair creation is some constrained. In this way, the token pair quality could be guaranted in some level.

Swapping token within FeSwap is simple and easy. Enjoy surfing of Defi ! <br/>

<LinkButton url="https://app.feswap.io/#/Swap" link="Start to Swap token ↗" />

<div style={{height:'60px'}}/>

_________________

## <span className="title"> Guidance to Swap ERC20 Token </span>
*** In following guidance, assuming you are using MetaMask wallet. *

import GuidanceWindow from '@site/src/components/GuidanceWindow';
import { RefreshCcw, Settings, Activity, Check, Circle, Hash, Flag, Feather, Clock, Volume2, Eye } from 'react-feather'

<GuidanceWindow imageUrl="img/Guidance/Swap/Swap01.png">
  <span>
    <strong>Step 1:</strong> Connect Metamask wallet. <br/><br/>
    <strong>Step 2:</strong> Click <strong>"FeSwap"</strong> Menu.<br/>
      Now <strong>"Swap"</strong> window is displayed.  <br/><br/>
    <strong>Step 3:</strong> Select the two tokens you want to sell / buy.  <br/><br/>
  </span>

> - Token balances are automatically displayed above the token area while it is selected. <br/>
> - Click `↓` toggles the position of two tokens.<br/>
> - Click `MAX` button fills the maximum balance to the input area. 
    Click the balance value of the <strong>"SELL"</strong> token does the same thing. 

</GuidanceWindow>

______________

<GuidanceWindow imageUrl="img/Guidance//Swap/Swap02.png">
  <span>
    <strong>Step 4:</strong> Input the amount of the <strong>"SELL"</strong> token, or the amount 
    of the <strong>"BUY"</strong> token <br/><br/>
    <strong>Step 5:</strong> Click the button <strong>"Swap"</strong>.<br/><br/>
  </span>  

> - You just need to input one amount, the other amount is auto-fille by the app.
> - Click <RefreshCcw size="18" style={{width: '2em', color: 'black', backgroundColor: 'LightGray', borderRadius:'2px'}}
    />  to toggle the token price base. 

> - <strong>Minimum Received:</strong> Minimum amount of output token you might receive 
    based on the setting <strong>"slippage tolerance"</strong>.
> - <strong>Price Impact:</strong> Swap tranaction will impact the price in the token swap pair. This is estimated based on the current transaction and token pair status. 
> - Click <Settings size="18" style={{width: '2em', color: 'black', backgroundColor: 'LightGray', borderRadius:'2px'}}
    /> to review you transaction settings. 

</GuidanceWindow>

_____________________

<GuidanceWindow imageUrl="img/Guidance//Swap/Swap03.png">
  <span>
    <strong>Step 6:</strong> In the confirm window, check the input/ouput token and its amount, and then click 
      <strong>"Confirm Swap"</strong> to start the swap.<br/><br/>
    <strong>Step 7:</strong> In Metamask, check the transaction content, sign and broadcast the tranaction.<br/><br/>
    <strong>Step 8:</strong> Waiting the transaction to be confirmed in the ETH network.<br/><br/>
  </span>  

> - In the lower part of the confirm window, some additional information are given. Please also check these information.

</GuidanceWindow>

<div style={{height:'60px'}}/>

_________________

## <span className="title"> Setting of Token Swap </span>

<GuidanceWindow imageUrl="img/Guidance//Swap/Swap04.png">

> - Click <Settings size="20" style={{width: '2em', color: 'black', backgroundColor: 'LightGray',
              borderRadius:'2px'}} /> at the top right corner of <strong>"Swap"</strong> Window. 
              The <strong>"Transaction Settings"</strong> window as left will be shown. Four settings could be configured: <br/>
>   - <strong>Slippage tolereance:</strong> The price enforced for your tranaction is mathmatically relative to your transaction amount. This price change is also called slippage. You may set the maximum price slippage ratio you could accept. Normally slippage should not be more than 5%.
>   - <strong>Transaction deadline:</strong> The latest time you are willing to wait for your transactoin to be processed by the swap contract. 
>   - <strong>Toggle Expert Mode:</strong> In expert mode, you could specify anyone as the receiver of swap output token, and some confirmation process could be skipped. Unless you are very familiar with FeSwap applicatoin, please do not activate expert mode. 
>   - <strong>Disable MultiHops:</strong> In single hop mode, your swap will be processed by the swap pool exactly with your specified input and output token. In multiple hops mode, your tranaction could be processed by a few swap pools together, inputing your specified input token to the firts pool, and ouputing the ouput token from the last pool.  

</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance//Swap/Swap05.png">

> - You are asked to confirm the action toggling on expert mode. 
> - Click <strong>"Turn On Expert Mode"</strong> in the window left, and input exactly <strong>confirm</strong> to confirm that you are realy sure to swap in expert mode.   
> - Again, plese do not activate expert mode, unless you are very experienced with FeSwap applicatoin. 

</GuidanceWindow>

______________________________


<GuidanceWindow imageUrl="img/Guidance//Swap/Swap06.png">

> - If expert mode is activated, the prompt <br/> 
    <span style={{color:'#ff007a'}}>"+ Add a receiver (Optional)"</span> will be shown as in the left window.
    Click this prompt, you could specify a receiver address different from your current wallet address, or an ESN name adddress 
    as the output token receiver. 

</GuidanceWindow>

______________________________


<GuidanceWindow imageUrl="img/Guidance//Swap/Swap07.png">

> - After you click <span style={{color:'#ff007a'}}>"+ Add a receiver (Optional)"</span>, an input area will be shown for you
    to set the receiver address or ENS name.
> - You could click <span style={{color:'#ff007a'}}>"- Remove receiver"</span> to remove the input area, in this case,
    the output token is sent to your current wallet address as default.

</GuidanceWindow>

______________________________



