(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(266)),o={title:"\u642d\u5efa IPSec \u670d\u52a1",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-server",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-06-ipsec-server.md",source:"@site/src/blog/2021-03-06-ipsec-server.md",description:"\u4f7f\u7528\u6280\u672f:",date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"}],title:"\u642d\u5efa IPSec \u670d\u52a1",readingTime:1.155,truncated:!0,prevItem:{title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-l2tp"},nextItem:{title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-xauth"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u6280\u672f: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hwdsl2/setup-ipsec-vpn"},"setup-ipsec")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hwdsl2/docker-ipsec-vpn-server"},"docker-ipsec-server"))),Object(c.b)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528Docker\u65b9\u5f0f\u90e8\u7f72 IPSec \u670d\u52a1\u3002"))}u.isMDXComponent=!0},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);