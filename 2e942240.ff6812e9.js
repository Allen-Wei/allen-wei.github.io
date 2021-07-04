(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(434)),c={title:"\u89e3\u51b3 Node HTTP \u8bf7\u6c42\u51fa\u73b0\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u6821\u9a8c\u5931\u8d25\u95ee\u9898",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["node"],description:"\u63cf\u8ff0\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u6587\u7ae0\u7b2c\u4e00\u6bb5",draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/21/node-tls",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-21-node-tls.md",source:"@site/src/blog/2021-03-21-node-tls.md",description:"\u63cf\u8ff0\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u6587\u7ae0\u7b2c\u4e00\u6bb5",date:"2021-03-21T00:00:00.000Z",tags:[{label:"node",permalink:"/blog/tags/node"}],title:"\u89e3\u51b3 Node HTTP \u8bf7\u6c42\u51fa\u73b0\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u6821\u9a8c\u5931\u8d25\u95ee\u9898",readingTime:.035,truncated:!1,prevItem:{title:"\u963f\u91cc\u4e91Maven\u955c\u50cf",permalink:"/blog/2021/03/21/maven-aliyun"},nextItem:{title:"NPM\u7684\u6dd8\u5b9d\u955c\u50cf",permalink:"/blog/2021/03/21/npm-taobao"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7a0b\u5e8f\u6267\u884c\u4e4b\u524d\u5148\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801, \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";\n')))}p.isMDXComponent=!0},434:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);