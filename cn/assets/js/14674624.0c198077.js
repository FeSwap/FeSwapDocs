(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[499],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,d=m["".concat(i,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7287:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return m},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=r(5064),c=r(8215),i=r(9084),u={title:"FeSwap Borrowing",hdie_table_of_contents:!0},s=void 0,f={type:"mdx",permalink:"/cn/borrow",source:"@site/src/pages/borrow.md"},m=[],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{color:"#00A4B8"}},(0,o.kt)("h1",null," FeSwap collateralized Borrow ")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Borrow with FeSwap liquidity token as the collateral is still under construction, please waiting!"),(0,o.kt)(i.Z,{url:"https://www.feswap.io/borrow",mdxType:"BrowserWindow"},(0,o.kt)(l.Z,{defaultValue:"borrow",values:[{label:"Borrow",value:"borrow"},{label:"Return",value:"return"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"borrow",mdxType:"TabItem"},"You can borrow stable coins such as USDT, USDC here with your liquidty token as the collateral. ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null),"Your personal borrow profiles are shown here for monitoring. ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"),(0,o.kt)(c.Z,{value:"return",mdxType:"TabItem"},"You can repay the loan here by connecting your wallet. ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"))))}d.isMDXComponent=!0},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),a=r(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),c="tabItem_1uMI",i="tabItemActive_2DSg";var u=37,s=39;var f=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,f=e.values,m=e.groupId,p=e.className,d=o(),b=d.tabGroupChoices,v=d.setTabGroupChoices,w=(0,n.useState)(a),y=w[0],h=w[1],g=n.Children.toArray(e.children),k=[];if(null!=m){var E=b[m];null!=E&&E!==y&&f.some((function(e){return e.value===E}))&&h(E)}var O=function(e){var t=e.currentTarget,r=k.indexOf(t),n=f[r].value;h(n),null!=m&&(v(m,n),setTimeout((function(){var e,r,n,a,o,l,c,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,l=window,c=l.innerHeight,u=l.innerWidth,r>=0&&o<=u&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case s:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case u:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},9084:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a="browserWindow_25XZ",o="browserWindowHeader_KqAw",l="buttons_1hjc",c="browserWindowAddressBar_3kU8",i="dot_3vUt",u="browserWindowMenuIcon_62Vr",s="bar_1GUQ",f="browserWindowBody_2pXR";var m=function(e){var t=e.children,r=e.minHeight,m=e.url;return n.createElement("div",{className:a,style:{minHeight:r}},n.createElement("div",{className:o},n.createElement("div",{className:l},n.createElement("span",{className:i,style:{background:"#f25f58"}}),n.createElement("span",{className:i,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i,style:{background:"#58cb42"}})),n.createElement("div",{className:c},m),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:s}),n.createElement("span",{className:s}),n.createElement("span",{className:s})))),n.createElement("div",{className:f},t))}},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);