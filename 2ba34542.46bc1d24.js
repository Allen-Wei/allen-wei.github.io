(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{168:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,g=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(g,l(l({ref:t},u),{},{components:r})):a.a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(168)),c={title:"Mac\u5b89\u88c5Wireguard",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["mac","wireguard","vpn"]},l={permalink:"/blog/2021/03/04/mac-wireguard",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-04-mac-wireguard.md",source:"@site/blog/2021-03-04-mac-wireguard.md",description:"\u539f\u6587",date:"2021-03-04T00:00:00.000Z",tags:[{label:"mac",permalink:"/blog/tags/mac"},{label:"wireguard",permalink:"/blog/tags/wireguard"},{label:"vpn",permalink:"/blog/tags/vpn"}],title:"Mac\u5b89\u88c5Wireguard",readingTime:.31,truncated:!0,nextItem:{title:"Mac\u5b89\u88c5Wireguard",permalink:"/blog/2021/03/04/sublime-vim-mode"}},i=[],u={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://blog.kelu.org/tech/2020/03/13/mac-install-wireguard.html"},"\u539f\u6587")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5b89\u88c5 WireGuard \u5ba2\u6237\u7aef")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"brew install wireguard-tools\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u914d\u7f6e WireGurad \u5ba2\u6237\u7aef")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /usr/local/etc/wiregurad \nsudo touch /usr/local/etc/wiregurad/wg0.conf\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"wg0.conf")," \u6587\u4ef6\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Interface]\nAddress = 10.200.200.2/32\nPrivateKey = <client_private_key>\nMTU = 1420\n\n[Peer]\nPublicKey = <server_public_key>\nEndpoint = <SERVER_IP:SERVER_PORT>\nAllowedIPs = 10.200.0.0/16\nPersistentKeepalive = 25\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\u542f\u52a8 WireGuard")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo wg-quick up wg0-client\nsudo wg show\n")))}p.isMDXComponent=!0}}]);