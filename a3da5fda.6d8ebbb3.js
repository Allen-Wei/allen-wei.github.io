(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(131));const a={title:"vimrc",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vim","editor","config"]},i={permalink:"/blog/2021/02/17/vim-config",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-02-17-vim-config.md",source:"@site/blog/2021-02-17-vim-config.md",description:"_vimrc \u914d\u7f6e:",date:"2021-02-17T00:00:00.000Z",tags:[{label:"vim",permalink:"/blog/tags/vim"},{label:"editor",permalink:"/blog/tags/editor"},{label:"config",permalink:"/blog/tags/config"}],title:"vimrc",readingTime:.165,truncated:!1,prevItem:{title:"Java \u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c=[],l={toc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"_vimrc")," \u914d\u7f6e: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"filetype plugin on\nset rnu\nset nu\nset nocompatible\nset noswapfile\nset noswf\ncolo koehler\nset encoding=utf-8\nset fileencoding=utf-8\nset autoindent\nset showcmd\n\nset shiftwidth=4\nset tabstop=4\nset softtabstop=4\n")))}u.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);