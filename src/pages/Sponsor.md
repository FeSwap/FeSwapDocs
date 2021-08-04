---
title: FeSwap Sponsor
hide_table_of_contents: false
---

<div  style={{ color: "#00A4B8",}}>
  <h1> FeSwap Sponsor </h1>
</div>

_____________

import { LinkButton } from '@site/src/components/BrowserWindow';

Sponsoring FeSwap is one of the ways to join in FeSwap community governance. <br/> 

By sponsoring FeSwap some amount of ETH, you could receive some propotional of FESW tokens. <br/> 

With these FESW tokens, you are able to submit FeSwap governance proposals and vote on all proposals submitted by community members.

<LinkButton url="https://app.feswap.io/#/sponsor" link="Start to Sponsor FeSwap ↗" />

<div style={{height:'60px'}}/>


## <span className="title"> Basics of Sponsoring </span>

The initial reward rate is 100,000 FESW/ETH, and the reward rate decreases linearly on the rate of 20 FESW per totally received ETH.

The total sponsor cap is 1000 ETH, maximum cap is 1001 ETH. Totally 100,000,000 FESW are filled into `FeswSponsor` contract. If the sponsor cap is reached, all the left FESW will be burned, otherwise left FESW will be claimed back.

The total duration receiving sponsor is 30 days, starting from the time specified by the `FeswSponsor` contract while it is deployed.  

<LinkButton url="docs/Contracts/sponsor" link="Learn more about FeSwap Sponsor 👈" />

<div style={{height:'60px'}}/>

_________________

## <span className="title"> Guidance to Sponsor FeSwap </span>
*** In following guidance, assuming you are using MetaMask wallet. *

import GuidanceWindow from '@site/src/components/GuidanceWindow';
import { RefreshCcw, PlusCircle, Activity, Lock, User, Coffee, Flag, MinusCircle, Clock, Volume2, Eye } from 'react-feather'

<GuidanceWindow imageUrl="img/Guidance/Sponsor/Sponsor01.png">
  <span>
    <strong>Step 1:</strong> Connect Metamask wallet. <br/><br/>
    <strong>Step 2:</strong> Click <strong>"Sponsor <span style={{color:'red'}}>❤</span>"</strong> Menu.<br/>
    Now <strong>"Sponsor Reminding"</strong> window is displayed.  <br/><br/>

:::info Info

- Please read the remindings in detail.
- If you do not understand the remindings very well, and not very sure that you want to sponsor FeSwap, 
please select <strong style={{color:'Brown'}}>"NOT Sponsor"</strong>, which is the default selection.
- This windows is displayed each time you enter <strong>"Sponsor"</strong> page. 
::: 

  </span>  
</GuidanceWindow>

______________

<GuidanceWindow imageUrl="img/Guidance/Sponsor/Sponsor02A.png">
  <span>
    <strong>Step 3A:</strong> If <strong>"NOT Sponsor"</strong> is selected, the left window is shown, in which the button <strong>"NOT Sponsor"</strong> is not clickable, but the user can still input sponsor amount to have a look at the giveaway FESW amount and rate. <br/><br/>
  </span>  
</GuidanceWindow>

_____________________

<GuidanceWindow imageUrl="img/Guidance/Sponsor/Sponsor02B.png">
  <span>
    <strong>Step 3:</strong> Select the button <strong>"I will Sponsor"</strong>, the <strong>"Sponsor"</strong> window is displayed. <br/><br/>
    <strong>Step 4:</strong> Input the amount you desire to sponsor.<br/><br/>
    <strong>Step 5:</strong> Click the button <strong>"Sponsor"</strong>.<br/><br/>
  </span>  

:::tip Tips
+ If input the amount of FESW you desire to get, the corresponding ETH amount could be given.
+ Click <RefreshCcw size="18" style={{width: '2em', color: 'Tomato', backgroundColor: 'LightGray', borderRadius:'2px'}}/> 
  to toggle the sponsor giveaway rate.
:::
</GuidanceWindow>

_____________________

<GuidanceWindow imageUrl="img/Guidance/Sponsor/Sponsor03.png">

:::caution Sponsor
+ If your sponsor amount is more than 5ETH, special reminding window will be displayed as the left.
:::

</GuidanceWindow>

______________________________

<GuidanceWindow imageUrl="img/Guidance/Sponsor/Sponsor04.png">
  <span>
    <strong>Step 6:</strong> In the confirm window, the sponsored ETH amount and the FESW giveway amount are prompted. Check these information, and then click <strong>"Confirm Sponsor"</strong> to connect wallet and sign the transaction.<br/><br/>
    <strong>Step 7:</strong> In Metamask wallet, check the transaction content, sign and broadcast the tranaction.<br/><br/>
    <strong>Step 8:</strong> Waiting the transaction to be confirmed in the ETH network.<br/><br/>
    <strong>Step 9:</strong> Check your sponsor transaction and the received FESW amount within ETH network explorer.<br/>
  </span>  
</GuidanceWindow>

______________________________

