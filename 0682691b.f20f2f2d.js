(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(183)),i={title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","markdown","editor","code snippets"],draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/05/vsc-markdown-snippets",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-05-vsc-markdown-snippets.md",source:"@site/blog/2021-03-05-vsc-markdown-snippets.md",description:"\u89e3\u51b3 Visual Studio Code Markdown \u6587\u4ef6\u4e0d\u80fd\u63d2\u5165\u4ee3\u7801\u7247\u6bb5\u95ee\u9898",date:"2021-03-05T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"markdown",permalink:"/blog/tags/markdown"},{label:"editor",permalink:"/blog/tags/editor"},{label:"code snippets",permalink:"/blog/tags/code-snippets"}],title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",readingTime:.105,truncated:!1,prevItem:{title:"\u642d\u5efa Wireguard \u670d\u52a1",permalink:"/blog/2021/03/06/wireguard-server"},nextItem:{title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",permalink:"/blog/2021/03/05/vsc-code-snippets"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u89e3\u51b3 Visual Studio Code Markdown \u6587\u4ef6\u4e0d\u80fd\u63d2\u5165\u4ee3\u7801\u7247\u6bb5\u95ee\u9898"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code"},"\u539f\u6587 - ")),Object(a.b)("p",null,"\u5411\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "[markdown]": {\n        "editor.wordWrap": "on",\n        "editor.quickSuggestions": true \n    },\n}\n')))}u.isMDXComponent=!0}}]);