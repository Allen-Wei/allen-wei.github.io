(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(208)),c={title:"\u5982\u4f55\u4f7f\u7528Maven\u521b\u5efa\u53ef\u6267\u884c\u7684JAR\u6587\u4ef6",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","maven"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/how-can-i-create-an-executable-jar-with-dependencies-using-maven",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-how-can-i-create-an-executable-jar-with-dependencies-using-maven.md",source:"@site/blog/2021-03-06-how-can-i-create-an-executable-jar-with-dependencies-using-maven.md",description:"\u539f\u6587 - \u4f7f\u7528Maven\u6253\u5305\u53ef\u6267\u884cJAR\u7a0b\u5e8f",date:"2021-03-06T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"maven",permalink:"/blog/tags/maven"}],title:"\u5982\u4f55\u4f7f\u7528Maven\u521b\u5efa\u53ef\u6267\u884c\u7684JAR\u6587\u4ef6",readingTime:1.225,truncated:!0,prevItem:{title:"\u4f7f\u7528Maven\u521b\u5efa\u4e00\u4e2aJava\u9879\u76ee",permalink:"/blog/2021/03/06/create-java-project-use-maven"},nextItem:{title:"IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",permalink:"/blog/2021/03/06/ipsec-clients-ikev2"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/574594/how-can-i-create-an-executable-jar-with-dependencies-using-maven"},"\u539f\u6587 - \u4f7f\u7528Maven\u6253\u5305\u53ef\u6267\u884cJAR\u7a0b\u5e8f")))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);