(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(215)),c={title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec","l2tp"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-clients-l2tp",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-ipsec-clients-l2tp.md",source:"@site/blog/2021-03-06-ipsec-clients-l2tp.md",description:"\u5728\u6210\u529f \u642d\u5efa\u81ea\u5df1\u7684 VPN \u670d\u52a1\u5668 \u4e4b\u540e\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u4f60\u7684\u8bbe\u5907\u3002IPsec/L2TP \u5728 Android, iOS, OS X \u548c Windows \u4e0a\u5747\u53d7\u652f\u6301\uff0c\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002\u8bbe\u7f6e\u8fc7\u7a0b\u901a\u5e38\u53ea\u9700\u8981\u51e0\u5206\u949f\u3002\u5982\u679c\u65e0\u6cd5\u8fde\u63a5,\u8bf7\u9996\u5148\u68c0\u67e5\u662f\u5426\u8f93\u5165\u4e86\u6b63\u786e\u7684\u767b\u5f55\u51ed\u8bc1\u3002",date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"},{label:"l2tp",permalink:"/blog/tags/l-2-tp"}],title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",readingTime:10.745,truncated:!0,prevItem:{title:"\u4f7f\u7528Maven\u521b\u5efa\u4e00\u4e2aJava\u9879\u76ee",permalink:"/blog/2021/03/06/create-java-project-use-maven"},nextItem:{title:"\u642d\u5efa IPSec \u670d\u52a1",permalink:"/blog/2021/03/06/ipsec-server"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u6210\u529f ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-server"},"\u642d\u5efa\u81ea\u5df1\u7684 VPN \u670d\u52a1\u5668")," \u4e4b\u540e\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u4f60\u7684\u8bbe\u5907\u3002IPsec/L2TP \u5728 Android, iOS, OS X \u548c Windows \u4e0a\u5747\u53d7\u652f\u6301\uff0c\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002\u8bbe\u7f6e\u8fc7\u7a0b\u901a\u5e38\u53ea\u9700\u8981\u51e0\u5206\u949f\u3002\u5982\u679c\u65e0\u6cd5\u8fde\u63a5,\u8bf7\u9996\u5148\u68c0\u67e5\u662f\u5426\u8f93\u5165\u4e86\u6b63\u786e\u7684\u767b\u5f55\u51ed\u8bc1\u3002"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-ikev2"},"\u914d\u7f6e IKEv2"),"\uff08\u63a8\u8350\uff09\uff0c\u6216\u8005\u4f7f\u7528\u66f4\u9ad8\u6548\u7684 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-xauth"},"IPsec/XAuth \u6a21\u5f0f")," \u8fde\u63a5\u3002"))))}s.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);