(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(318)),i={title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","editor","code snippets"],draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/05/vsc-code-snippets",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-05-vsc-code-snippets.md",source:"@site/src/blog/2021-03-05-vsc-code-snippets.md",description:"\u7b80\u4ecb",date:"2021-03-05T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"editor",permalink:"/blog/tags/editor"},{label:"code snippets",permalink:"/blog/tags/code-snippets"}],title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",readingTime:1.98,truncated:!0,prevItem:{title:"\u642d\u5efa Wireguard \u670d\u52a1",permalink:"/blog/2021/03/06/wireguard-server"},nextItem:{title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",permalink:"/blog/2021/03/05/vsc-markdown-snippets"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(o.b)("p",null,"\u5728VSC\u91cc, \u4ee3\u7801\u7247\u6bb5\u548c\u5176\u4ed6\u63d0\u793a\u6df7\u5408\u51fa\u73b0\u5728\u667a\u80fd\u611f\u77e5\u4e2d(Windows: ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl + Space"),", Mac: ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd + Space"),"), \u4e5f\u53ef\u4ee5\u4f7f\u7528\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd/Ctrl + Shift + P")," > Insert Snippet \u624b\u52a8\u9009\u62e9\u6307\u5b9a\u7684\u4ee3\u7801\u7247\u6bb5, \u540c\u65f6\u652f\u6301\u4f7f\u7528tab\u5b8c\u6210\u4ee3\u7801\u7247\u6bb5\u63d2\u5165: \u4f7f\u7528\u914d\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},'"editor.tabCompletion": "on"'),"\u5f00\u542f, \u8f93\u5165\u4ee3\u7801\u7247\u6bb5\u7684\u524d\u7f00(prefix), \u7136\u540e\u6309\u4e0b ",Object(o.b)("strong",{parentName:"p"},"Tab")," \u6309\u952e\u5373\u53ef."))}u.isMDXComponent=!0},318:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);