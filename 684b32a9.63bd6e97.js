(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(312)),i={title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","editor","code snippets"],draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/05/vsc-code-snippets",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-05-vsc-code-snippets.md",source:"@site/src/blog/2021-03-05-vsc-code-snippets.md",description:"\u7b80\u4ecb",date:"2021-03-05T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"editor",permalink:"/blog/tags/editor"},{label:"code snippets",permalink:"/blog/tags/code-snippets"}],title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",readingTime:1.98,truncated:!0,prevItem:{title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",permalink:"/blog/2021/03/05/vsc-markdown-snippets"},nextItem:{title:"Mac\u5b89\u88c5Wireguard",permalink:"/blog/2021/03/04/mac-install-wireguard"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(o.b)("p",null,"\u5728VSC\u91cc, \u4ee3\u7801\u7247\u6bb5\u548c\u5176\u4ed6\u63d0\u793a\u6df7\u5408\u51fa\u73b0\u5728\u667a\u80fd\u611f\u77e5\u4e2d(Windows: ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl + Space"),", Mac: ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd + Space"),"), \u4e5f\u53ef\u4ee5\u4f7f\u7528\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd/Ctrl + Shift + P")," > Insert Snippet \u624b\u52a8\u9009\u62e9\u6307\u5b9a\u7684\u4ee3\u7801\u7247\u6bb5, \u540c\u65f6\u652f\u6301\u4f7f\u7528tab\u5b8c\u6210\u4ee3\u7801\u7247\u6bb5\u63d2\u5165: \u4f7f\u7528\u914d\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},'"editor.tabCompletion": "on"'),"\u5f00\u542f, \u8f93\u5165\u4ee3\u7801\u7247\u6bb5\u7684\u524d\u7f00(prefix), \u7136\u540e\u6309\u4e0b ",Object(o.b)("strong",{parentName:"p"},"Tab")," \u6309\u952e\u5373\u53ef."))}u.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);