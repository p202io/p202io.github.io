(this["webpackJsonp@p202io/react-app"]=this["webpackJsonp@p202io/react-app"]||[]).push([[6],{323:function(e,t,n){"use strict";n.r(t),function(e){var a=n(1),i=n.n(a),r=n(24),s=n(61),u=n(32),c=n(0),p=n(36),o=n(312),l=n(238),d=n(482),y=n(481),b=n(477),m=n(475),f=n(455),j=n(359),h=n(478),O=n(456),v=n.n(O),x=n(58),w=n(369),T=n(143),g=n(34),M=n(187),k=n(459),S=n(460),B=n(461),C=n(3);v.a.config({DECIMAL_PLACES:18}),t.default=Object(p.hot)(e)((function(e){Object(T.b)();var t=Object(T.a)(),n=t.library,a=t.chainId,p=t.account,O=(t.active,t.error,function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=n.getSigner();return new j.a(g.d,S,t)}return new j.a(g.d,S,n)}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=n.getSigner();return new j.a(g.c,B,t)}return new j.a(g.c,B,n)},P=Object(c.useState)("0.00011"),E=Object(u.a)(P,2),N=E[0],I=E[1],D=Object(c.useState)("25000000"),_=Object(u.a)(D,2),q=_[0],F=_[1],W=Object(c.useState)("0"),J=Object(u.a)(W,2),L=J[0],R=J[1],U=Object(c.useState)("0"),z=Object(u.a)(U,2),V=z[0],X=z[1],H=Object(c.useState)("0"),Y=Object(u.a)(H,2),G=Y[0],K=Y[1],Q=Object(c.useState)("0"),Z=Object(u.a)(Q,2),$=Z[0],ee=Z[1],te=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(parseFloat(G)<=0)){e.next=2;break}return e.abrupt("return",x.b.warn("Wrong amount."));case 2:if(3===a||56===a){e.next=4;break}return e.abrupt("return",x.b.warn("Wrong network."));case 4:return t=A(!0),e.next=7,t.buy({value:h.a.parseEther($)});case 7:return n=e.sent,x.b.info(Object(C.jsxs)("a",Object(r.a)(Object(r.a)({href:"https://bscscan.com/tx/"+n.hash},Object(M.a)()),{},{children:["Pending. tx: ",n.hash.substring(0,6),"..."]}))),e.next=11,n.wait(1);case 11:x.b.success(Object(C.jsxs)("a",Object(r.a)(Object(r.a)({href:"https://bscscan.com/tx/"+n.hash},Object(M.a)()),{},{children:["Done. tx: ",n.hash.substring(0,6),"..."]})));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){K(Math.floor(v()($).dividedBy(N).toString()))}),[N]);var ne=Object(c.useState)(!1),ae=Object(u.a)(ne,2),ie=ae[0],re=ae[1],se=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ie){e.next=2;break}return e.abrupt("return");case 2:return re(!0),e.prev=3,t=A(),e.t0=I,e.t1=h.a,e.next=9,t.price();case 9:return e.t2=e.sent,e.t3=e.t1.formatEther.call(e.t1,e.t2).toString(),(0,e.t0)(e.t3),a=O(),e.t4=F,e.t5=h.a,e.next=17,a.balanceOf(g.c);case 17:return e.t6=e.sent,e.t7=e.t5.formatEther.call(e.t5,e.t6).toString(),(0,e.t4)(e.t7),e.t8=X,e.t9=h.a,e.next=24,a.balanceOf(p);case 24:return e.t10=e.sent,e.t11=e.t9.formatEther.call(e.t9,e.t10).toString(),(0,e.t8)(e.t11),e.t12=R,e.t13=h.a,e.next=31,n.getBalance(p);case 31:e.t14=e.sent,e.t15=e.t13.formatEther.call(e.t13,e.t14).toString(),(0,e.t12)(e.t15),e.next=39;break;case 36:e.prev=36,e.t16=e.catch(3),console.error(e.t16);case 39:re(!1);case 40:case"end":return e.stop()}}),e,null,[[3,36]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&n.on("block",(function(e){console.log("block",e),se()}))}),[]),Object(c.useEffect)((function(){n&&n.on("block",(function(e){console.log("block",e),se()}))}),[n]),Object(C.jsxs)(w.a,{children:[Object(C.jsx)("br",{}),Object(C.jsxs)(o.a,{children:[Object(C.jsx)(l.a,{as:"h1",children:Object(C.jsxs)(l.a.Content,{children:[g.f," Presale",Object(C.jsxs)(l.a.Subheader,{children:["Token Smart Contract: ",Object(C.jsx)("a",Object(r.a)(Object(r.a)({href:"https://bscscan.com/token/"+g.d},Object(M.a)()),{},{children:g.d})),Object(C.jsx)("br",{}),"Presale Smart Contract: ",Object(C.jsx)("a",Object(r.a)(Object(r.a)({href:"https://bscscan.com/address/"+g.c},Object(M.a)()),{},{children:g.c}))]})]})}),Object(C.jsxs)(d.a,{children:[Object(C.jsx)(y.a,{fluid:!0,primary:!0,onClick:function(){return Object(k.a)(n)},children:"Add BSC Network to Metamask"}),Object(C.jsx)("br",{}),Object(C.jsx)(y.a,{fluid:!0,primary:!0,onClick:function(){return Object(k.b)(n)},children:"Add P202 Token to Metamask"})]}),Object(C.jsxs)(d.a,{children:[Object(C.jsxs)("div",{children:["P202 Available for Presale: ",Object(C.jsx)(f.a,{value:q,displayType:"text",thousandSeparator:!0,fixedDecimalScale:!0,decimalScale:4})]}),Object(C.jsx)("br",{}),Object(C.jsxs)(b.a,{children:[Object(C.jsx)(m.a,{fluid:!0,name:"price",type:"number",step:N,label:"Price, BNB:",value:N}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{fluid:!0,name:"tokenAmount",required:!0,type:"number",min:"0",label:"P202 amount:",value:G,onChange:function(e,t){t.name;var n=t.value;K(n),ee(v()(n).multipliedBy(N).toString())},action:Object(C.jsx)(y.a,{onClick:function(){K(q),ee(v()(q).multipliedBy(N).toString())},primary:!0,children:"MAX"})}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{fluid:!0,name:"bnbAmount",required:!0,type:"number",min:"0",step:N,label:"BNB amount:",value:$,onChange:function(e,t){t.name;var n=t.value;ee(n),K(v()(n).dividedBy(N).toString())},action:Object(C.jsx)(y.a,{onClick:function(){var e=Math.floor(v()(L).dividedBy(N).toString());ee(v()(e).multipliedBy(N).toString()),K(e)},primary:!0,children:"MAX"})}),Object(C.jsx)("br",{}),Object(C.jsx)(y.a,{fluid:!0,primary:!0,type:"submit",onClick:te,children:"Buy"}),Object(C.jsxs)("div",{children:["Balance P202: ",Object(C.jsx)(f.a,{value:V,displayType:"text",thousandSeparator:!0,fixedDecimalScale:!0,decimalScale:4})]}),Object(C.jsxs)("div",{children:["Balance BNB: ",Object(C.jsx)(f.a,{value:L,displayType:"text",thousandSeparator:!0,fixedDecimalScale:!0,decimalScale:4})]}),Object(C.jsxs)("div",{children:["Address: ",Object(C.jsx)("a",Object(r.a)(Object(r.a)({href:"https://bscscan.com/address/"+p},Object(M.a)()),{},{children:p}))]})]})]})]})]})}))}.call(this,n(60)(e))},369:function(e,t,n){"use strict";(function(e){n(0);var a=n(36),i=n(370),r=n(371),s=n(373),u=n(3);t.a=Object(a.hot)(e)((function(e){var t=e.title,n=e.description,a=e.meta,c=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{title:t,description:n,meta:a||[]}),Object(u.jsx)(r.a,{}),Object(u.jsx)("main",{style:{minHeight:"100vh"},children:c}),Object(u.jsx)(s.a,{})]})}))}).call(this,n(60)(e))},370:function(e,t,n){"use strict";(function(e){n(0);var a=n(36),i=n(406),r=n(34),s=n(3);t.a=Object(a.hot)(e)((function(e){var t=e.title,n=e.description,a=e.meta,u=n,c=r.f;return Object(s.jsx)(i.a,{htmlAttributes:{lang:"en"},title:t,defaultTitle:c,titleTemplate:c?"%s | ".concat(c):void 0,meta:[{name:"description",content:u},{property:"og:title",content:t},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:""},{name:"twitter:title",content:t},{name:"twitter:description",content:u}].concat(a)})}))}).call(this,n(60)(e))},371:function(e,t,n){"use strict";(function(e){n(0);var a=n(36),i=n(482),r=n(479),s=n(312),u=n(98),c=n(66),p=n(167),o=n(34),l=n(143),d=n(3);t.a=Object(a.hot)(e)((function(){var e=Object(l.b)(),t=Object(l.a)(),n=t.chainId,a=t.account,y=t.active,b=Object(c.c)("WalletConnectModal").open,m=Object(c.c)("WalletAccountModal").open,f=a?"".concat(a.substring(0,6),"...").concat(a.substring(a.length-4)):"Connect wallet";return Object(d.jsx)(i.a,{as:"header",children:Object(d.jsx)(r.a,{fixed:"top",size:"large",inverted:!0,children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(r.a.Item,{header:!0,as:u.b,to:p.a.main,children:o.f}),Object(d.jsx)(r.a.Item,{position:"right",style:{color:56===n?"green":"red"},children:56===n?"BSC":"Wrong Network"}),Object(d.jsx)(r.a.Item,{onClick:e&&y&&a?m:b,children:f})]})})})}))}).call(this,n(60)(e))},373:function(e,t,n){"use strict";(function(e){n(0);var a=n(36),i=n(482),r=n(312),s=n(480),u=n(34),c=n(3);t.a=Object(a.hot)(e)((function(){return Object(c.jsx)(i.a,{as:"footer",inverted:!0,vertical:!0,children:Object(c.jsx)(r.a,{textAlign:"center",children:Object(c.jsx)(s.a,{inverted:!0,link:!0,horizontal:!0,children:Object(c.jsxs)(s.a.Item,{children:[u.f," \xa9 ",(new Date).getFullYear(),"."]})})})})}))}).call(this,n(60)(e))},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l}));var a=n(1),i=n.n(a),r=n(61),s=n(58),u=n(34),c={chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"],iconUrls:["https://bscscan.com/images/svg/brands/bnb.svg?v=1.3"]};function p(e){return o.apply(this,arguments)}function o(){return(o=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_addEthereumChain",params:[c]});case 3:case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(0),4902!==e.t0.code){e.next=22;break}return e.prev=12,e.next=15,window.ethereum.request({method:"wallet_addEthereumChain",params:[c]});case 15:return e.abrupt("return",e.sent);case 18:e.prev=18,e.t1=e.catch(12);case 20:e.next=23;break;case 22:s.b.error("Please switch to the Chain network");case 23:case"end":return e.stop()}}),e,null,[[0,9],[12,18]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:u.d,symbol:"P202",decimals:18,image:"".concat(u.e)}}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},460:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliffPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"locked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"lockedOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},461:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')}}]);
//# sourceMappingURL=6.935b615f.chunk.js.map