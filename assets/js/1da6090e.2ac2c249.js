(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[603],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9686:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"introduction",title:"FeSwap Free Decentralized Exchange",hide_title:!0,sidebar_label:"FeSwap Decentralized Exchange"},c=void 0,s={unversionedId:"FeSwap/introduction",id:"FeSwap/introduction",isDocsHomePage:!1,title:"FeSwap Free Decentralized Exchange",description:"FeSwap Free Decentralized Exchange",source:"@site/docs/FeSwap/Introduction.md",sourceDirName:"FeSwap",slug:"/FeSwap/introduction",permalink:"/docs/FeSwap/introduction",editUrl:"https://github.com/feswap/docs/FeSwap/Introduction.md",version:"current",frontMatter:{id:"introduction",title:"FeSwap Free Decentralized Exchange",hide_title:!0,sidebar_label:"FeSwap Decentralized Exchange"},sidebar:"someSidebar",previous:{title:"FeSwap Overview",permalink:"/docs/"},next:{title:"FeSwap Features",permalink:"/docs/FeSwap/implementation"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"title"},(0,i.kt)("h1",null," FeSwap Free Decentralized Exchange ")),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"title"},(0,i.kt)("h2",null," FeSwap Introduction ")),(0,i.kt)("p",null,"Cryptocurrency exchanges can be basically divided into two categories, namely, centralized order book exchanges (CEX) represented by Binance",(0,i.kt)("a",{parentName:"p",href:"/docs/FeSwap/reference"},(0,i.kt)("sup",null,"[1]"))," and Huobi, and decentralized automated market maker exchanges (DEX) represented by Uniswap",(0,i.kt)("a",{parentName:"p",href:"/docs/FeSwap/reference"},(0,i.kt)("sup",null,"[2]"))," and Curve."),(0,i.kt)("p",null,"The pricing mechanism of centralized exchanges and decentralized exchanges is different. The price of a centralized exchange is the marginal price, and the cryptocurrency is priced in real-time by the ups and downs of transactions that users conduct all the time. The advantage of the marginal price is that it is quick to respond and can keep up with the rapid changes in market information, while the disadvantage is that sometimes the CEX could be lack of liquidity and the price fluctuates greatly. "),(0,i.kt)("p",null,"The price given by decentralized exchange is the average price. Every user is trading with the cryptocurrencies in the whole liquidity pool, so the trading price is the average price given by all the cryptocurrencies in the pool participating in the calculation of constant asset product formula X * Y = K ",(0,i.kt)("a",{parentName:"p",href:"/docs/FeSwap/reference"},(0,i.kt)("sup",null,"[3]")),". The advantage of the average price is that the price is stable and the liquidity is good, but the disadvantage is that the price can only change passively, and the large price change can only be driven by a large scale of transactions. "),(0,i.kt)("p",null,"Due to the different pricing mechanisms of the two types of exchanges, prices among exchanges are often out of sync, thus providing arbitrageurs with many arbitrage opportunities. There are a large number of arbitrage transactions in decentralized exchanges, through which the prices of cryptocurrencies in two different kinds of exchanges are basically consistent"),(0,i.kt)("p",null,"Both centralized and decentralized exchanges rely on charging various proportions of transaction fees to achieve profitability. As a kind of transaction friction, transaction fees could affect users' willingness to trade cryptocurrencies to some extent. "),(0,i.kt)("p",null,"The FreeSwap decentralized exchange protocol ",(0,i.kt)("a",{parentName:"p",href:"/docs/FeSwap/reference"},(0,i.kt)("sup",null,"[4]"))," designed an automated market maker exchange protocol that does not charge transaction fees at all.  The protocol sets up two one-way exchange sub-pools for each pair of trading assets, which results in that the asset prices inside the two sub-pools will deviate a little bit as the tradings happen. While some preset conditions are met, an internal asset swap will be triggered to smooth this price deviation. The automatic repair process of asset price deviation is also an arbitrage process, which can make profits for the liquidity providers of the trading pool. "),(0,i.kt)("p",null,"The fluctuation of digital asset exchange prices is inevitable and existing naturally. The FreeSwap protocol can lock in some part of the profit from these price fluctuations, which otherwise all be captured by arbitrageurs, and thereby providing completely free exchange services for trading users. By reducing trade friction, it is promising to attract more users to conduct exchanges in DEX, and in turn, make more profits for the liquidity providers. "),(0,i.kt)("p",null,"FeSwap decentralized exchange specifically refines and implements the FreeSwap exchange protocol, and aims to provide users with a completely free decentralized digital asset exchange service."))}d.isMDXComponent=!0}}]);