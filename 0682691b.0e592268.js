(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{212:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(212)),i={title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","markdown","editor","code snippets"],draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/05/vsc-markdown-snippets",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-05-vsc-markdown-snippets.md",source:"@site/blog/2021-03-05-vsc-markdown-snippets.md",description:"\u89e3\u51b3 Visual Studio Code Markdown \u6587\u4ef6\u4e0d\u80fd\u63d2\u5165\u4ee3\u7801\u7247\u6bb5\u95ee\u9898",date:"2021-03-05T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"markdown",permalink:"/blog/tags/markdown"},{label:"editor",permalink:"/blog/tags/editor"},{label:"code snippets",permalink:"/blog/tags/code-snippets"}],title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",readingTime:.105,truncated:!1,prevItem:{title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",permalink:"/blog/2021/03/05/vsc-code-snippets"},nextItem:{title:"Mac\u5b89\u88c5Wireguard",permalink:"/blog/2021/03/04/mac-install-wireguard"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u89e3\u51b3 Visual Studio Code Markdown \u6587\u4ef6\u4e0d\u80fd\u63d2\u5165\u4ee3\u7801\u7247\u6bb5\u95ee\u9898"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code"},"\u539f\u6587 - ")),Object(o.b)("p",null,"\u5411\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "[markdown]": {\n        "editor.wordWrap": "on",\n        "editor.quickSuggestions": true \n    },\n}\n')))}u.isMDXComponent=!0}}]);