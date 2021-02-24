(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(p,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(y,c(c({ref:t},i),{},{components:r})):a.a.createElement(y,c({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return i}));var n=r(3),a=(r(0),r(121));const o={title:"Java \u7f51\u7edc\u4ee3\u7406",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","proxy","http","network"]},p={permalink:"/blog/2021/02/17/java-network-proxy",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-02-17-java-network-proxy.md",source:"@site/blog/2021-02-17-java-network-proxy.md",description:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",date:"2021-02-17T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"proxy",permalink:"/blog/tags/proxy"},{label:"http",permalink:"/blog/tags/http"},{label:"network",permalink:"/blog/tags/network"}],title:"Java \u7f51\u7edc\u4ee3\u7406",readingTime:.29,truncated:!1,prevItem:{title:"Spring Boot Hot Swapping",permalink:"/blog/2021/02/24/hot-swapping-in-spring-boot"},nextItem:{title:"vimrc",permalink:"/blog/2021/02/17/vim-config"}},c=[],l={toc:c};function i({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u8bbe\u7f6ejava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406"},"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/ConfigureJavaApp"},"\u914d\u7f6e\u6765\u6e90")),Object(a.b)("p",null,"To configure a Java application to send web traffic to Fiddler, set the proxy using jre:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jre -DproxySet=true -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8888\n")),Object(a.b)("p",null,"Or:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"jre -DproxySet=true -DproxyHost=127.0.0.1 -DproxyPort=8888 MyApp\n")),Object(a.b)("p",null,"Or, change the Java Virtual Machine's proxy settings programmatically:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'System.setProperty("http.proxyHost", "127.0.0.1");\nSystem.setProperty("https.proxyHost", "127.0.0.1");\nSystem.setProperty("http.proxyPort", "8888");\nSystem.setProperty("https.proxyPort", "8888");\n')),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://java.sun.com/j2se/1.5.0/docs/guide/net/proxies.html"},"Learn more about Java proxy settings"),"."))}i.isMDXComponent=!0}}]);