(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{126:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),u=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var s=u.a.createContext({}),l=function(e){var t=u.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=l(e.components);return u.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return u.a.createElement(u.a.Fragment,{},t)}},d=u.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return r?u.a.createElement(f,a(a({ref:t},s),{},{components:r})):u.a.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return u.a.createElement.apply(null,c)}return u.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(3),u=(r(0),r(126));const o={id:"guides-intro",title:"\u7b80\u4ecb",slug:"/"},c={unversionedId:"guides/guides-intro",id:"guides/guides-intro",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"Docusaurus \u7b80\u4ecb",source:"@site/docs/guides/intro.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/guides/intro.md",version:"current",sidebar:"docs",next:{title:"\u535a\u6587",permalink:"/docs/guides/guides-blog"}},a=[{value:"\u548c\u5176\u4ed6\u5de5\u5177\u5bf9\u6bd4",id:"\u548c\u5176\u4ed6\u5de5\u5177\u5bf9\u6bd4",children:[{value:"Gatsby",id:"gatsby",children:[]}]},{value:"GitBook",id:"gitbook",children:[]},{value:"Jekyll",id:"jekyll",children:[]},{value:"VuePress",id:"vuepress",children:[]}],i={toc:a};function s({components:e,...t}){return Object(u.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"docusaurus-\u7b80\u4ecb"},"Docusaurus \u7b80\u4ecb"),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/"},"Docusaurus - Introduction")),Object(u.b)("h2",{id:"\u548c\u5176\u4ed6\u5de5\u5177\u5bf9\u6bd4"},"\u548c\u5176\u4ed6\u5de5\u5177\u5bf9\u6bd4"),Object(u.b)("p",null,"\u7eb5\u89c2\u6240\u6709\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668, Docusaurus \u7684\u4e3b\u8981\u5173\u6ce8\u70b9\u662f\u6587\u6863\u7ad9\u70b9, \u4ee5\u53ca\u4f60\u6240\u9700\u8981\u7684\u5f00\u7bb1\u5373\u7528\u7ed3\u6784."),Object(u.b)("p",null,"\u6211\u4eec\u9875\u5b66\u5199\u4e86\u5176\u4ed6\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668, \u60f3\u5728\u5bf9\u6bd4\u4e2d\u60f3\u4f60\u5206\u4eab\u4e00\u4e0b\u6211\u4eec\u7684\u89c2\u70b9, \u5e0c\u671b\u80fd\u5e2e\u4f60\u5728\u8fd9\u513f\u627e\u5230\u6700\u9002\u5408\u4f60\u7684\u9009\u62e9."),Object(u.b)("h3",{id:"gatsby"},"Gatsby"),Object(u.b)("p",null,"Gatsby \u96c6\u6210\u4e86\u5927\u91cf\u529f\u80fd, \u6709\u4e00\u4e2a\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001, \u80fd\u505a\u5230 Docusaurus \u6240\u80fd\u505a\u7684\u4efb\u4f55\u4e8b\u60c5. \u81ea\u7136\u5730, \u8fd9\u4e5f\u5e26\u6765\u4e86\u5f88\u9ad8\u7684\u5b66\u4e60\u66f2\u7ebf, Gatsby \u5f88\u591a\u65b9\u9762\u90fd\u505a\u7684\u5f88\u597d, \u4e5f\u9002\u5408\u52fe\u9009\u591a\u79cd\u7c7b\u578b\u7684\u7f51\u7ad9. \u800c Docusaurus \u5728\u5c1d\u8bd5\u628a\u4e00\u4ef6\u4e8b\u505a\u7684\u66f4\u597d: \u6210\u4e3a\u6700\u597d\u7684\u5185\u5bb9\u5199\u4f5c\u53d1\u5e03\u5de5\u5177."),Object(u.b)("p",null,"GraphQL \u662f Gatsby \u7684\u4e00\u4e2a\u6838\u5fc3\u4eae\u70b9, \u867d\u7136\u4f60\u5728\u4f7f\u7528 Gatsby \u6784\u5efa\u7ad9\u70b9\u65f6, \u4e0d\u662f\u5fc5\u987b\u9700\u8981 GraphQL . \u5728\u5927\u90e8\u5206\u6784\u5efa\u9759\u6001\u7ad9\u70b9\u65f6, \u662f\u4e0d\u9700\u8981 GraphQL \u6240\u63d0\u4f9b\u7684\u5f39\u6027\u529f\u80fd."),Object(u.b)("p",null,"Docusaurus 2 \u5f88\u591a\u65b9\u9762\u7684\u7075\u611f\u6765\u6e90\u4e8e Gatsby, \u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u66ff\u4ee3\u54c1."),Object(u.b)("h2",{id:"gitbook"},"GitBook"),Object(u.b)("p",null,"GitBook \u62e5\u6709\u975e\u5e38\u5e72\u51c0\u7684\u8bbe\u8ba1, \u5df2\u7ecf\u88ab\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u4f7f\u7528. \u5176\u4e13\u6ce8\u4e8e\u5546\u4e1a\u4ea7\u54c1\u65b9\u5411, \u800c\u4e0d\u662f\u63d0\u4f9b\u4e00\u4e2a\u5f00\u6e90\u5de5\u5177, \u5b83\u7684\u9700\u8981\u8981\u6c42\u4e0d\u518d\u9002\u7528\u4e8e\u4f5c\u4e3a\u5f00\u6e90\u9879\u76ee\u6587\u6863\u7ad9\u70b9. \u56e0\u6b64\u8bb8\u591a\u9879\u76ee\u8f6c\u5411\u4e86\u5176\u4ed6\u4ea7\u54c1, \u4f60\u53ef\u4ee5\u5728",Object(u.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues/3161"},"\u8fd9\u513f\u9605\u8bfbRedux\u8f6c\u5230\u4e86Docusaurus"),"."),Object(u.b)("p",null,"\u76ee\u524d GitBook \u4ec5\u5bf9\u5f00\u6e90\u800c\u4e14\u6ca1\u6709\u76c8\u5229\u7684\u9879\u76ee\u514d\u8d39. \u800c Docusaurus \u5bf9\u6240\u6709\u4eba\u514d\u8d39."),Object(u.b)("h2",{id:"jekyll"},"Jekyll"),Object(u.b)("p",null,"\u5728 Docusaurus \u4e4b\u524d, Jekyll \u662f\u6700\u6210\u719f\u7684\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u4e4b\u4e00, \u6709\u5f88\u68d2\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528. Facebook\u7684\u5927\u90e8\u5206\u5f00\u6e90\u7ad9\u70b9\u66fe\u4f7f\u7528Jekll\u6784\u5efa. Jekyll\u5165\u95e8\u53ca\u5176\u7b80\u5355. \u5728\u6784\u5efa\u9759\u6001\u7ad9\u70b9\u65b9\u9762, \u6211\u4eec\u60f3\u5e26\u6765\u548cJekyll\u7c7b\u4f3c\u7684\u5f00\u53d1\u4f53\u9a8c."),Object(u.b)("h2",{id:"vuepress"},"VuePress"),Object(u.b)("p",null,"VuePress \u548c Docusaurus \u6709\u5f88\u591a\u76f8\u4f3c\u6307\u51fa - \u4e24\u8005\u90fd\u5927\u91cf\u4e13\u6ce8\u4e8e\u57fa\u4e8e\u5185\u5bb9\u7684\u7ad9\u70b9, \u800c\u4e14\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4e13\u6709\u6587\u6863\u7279\u6027. \u4e0d\u8fc7 VuePress \u662f\u57fa\u4e8e Vue, \u800c Docusaurus \u662f\u57fa\u4e8e React. \u5982\u679c\u4f60\u60f3\u8981\u57fa\u4e8e Vue \u7684\u65b9\u6848, VuePress \u5c06\u4f1a\u662f\u4e00\u4e2a\u76f8\u5f53\u4e0d\u9519\u7684\u9009\u62e9."))}s.isMDXComponent=!0}}]);