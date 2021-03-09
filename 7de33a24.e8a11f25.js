(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(205)),c={title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec","l2tp"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-clients-l2tp",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-ipsec-clients-l2tp.md",source:"@site/blog/2021-03-06-ipsec-clients-l2tp.md",description:"\u539f\u6587 - \u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"},{label:"l2tp",permalink:"/blog/tags/l-2-tp"}],title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",readingTime:10.735,truncated:!0,prevItem:{title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",permalink:"/blog/2021/03/06/sublime-right-click-open"},nextItem:{title:"VSC\u4ee3\u7801\u5757\u6298\u53e0",permalink:"/blog/2021/03/06/vsc-code-folding"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients-zh.md"},"\u539f\u6587 - \u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u4f60\u4e5f\u53ef\u4ee5 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-ikev2"},"\u914d\u7f6e IKEv2"),"\uff08\u63a8\u8350\uff09\uff0c\u6216\u8005\u4f7f\u7528\u66f4\u9ad8\u6548\u7684 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-xauth"},"IPsec/XAuth \u6a21\u5f0f")," \u8fde\u63a5\u3002"),Object(o.b)("p",null,"\u5728\u6210\u529f ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-server"},"\u642d\u5efa\u81ea\u5df1\u7684 VPN \u670d\u52a1\u5668")," \u4e4b\u540e\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u4f60\u7684\u8bbe\u5907\u3002IPsec/L2TP \u5728 Android, iOS, OS X \u548c Windows \u4e0a\u5747\u53d7\u652f\u6301\uff0c\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002\u8bbe\u7f6e\u8fc7\u7a0b\u901a\u5e38\u53ea\u9700\u8981\u51e0\u5206\u949f\u3002\u5982\u679c\u65e0\u6cd5\u8fde\u63a5,\u8bf7\u9996\u5148\u68c0\u67e5\u662f\u5426\u8f93\u5165\u4e86\u6b63\u786e\u7684\u767b\u5f55\u51ed\u8bc1\u3002"))}u.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);