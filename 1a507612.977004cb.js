(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{212:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),m=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=m(r),s=n,f=p["".concat(o,".").concat(s)]||p[s]||b[s]||i;return r?a.a.createElement(f,l(l({ref:t},c),{},{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),i=(r(0),r(212)),o={title:"Sublime\u5f00\u542fVim\u6a21\u5f0f",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",description:"Sublime\u5f00\u542fVim\u6a21\u5f0f",tags:["sublime","editor"]},l={permalink:"/blog/2021/03/04/sublime-vim-mode",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-04-sublime-vim-mode.md",source:"@site/blog/2021-03-04-sublime-vim-mode.md",description:"Sublime\u5f00\u542fVim\u6a21\u5f0f",date:"2021-03-04T00:00:00.000Z",tags:[{label:"sublime",permalink:"/blog/tags/sublime"},{label:"editor",permalink:"/blog/tags/editor"}],title:"Sublime\u5f00\u542fVim\u6a21\u5f0f",readingTime:.745,truncated:!0,prevItem:{title:"Mac\u5b89\u88c5Wireguard",permalink:"/blog/2021/03/04/mac-install-wireguard"},nextItem:{title:"Linux - Structure needs cleaning",permalink:"/blog/2021/03/03/Structure-needs-cleaning"}},u=[],c={toc:u};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Vintage is a vi mode editing package for Sublime Text. It allows you to combine vi's command mode with Sublime Text's features, including multiple selections."),Object(i.b)("p",null,"Vintage mode is developed in the open, and patches are more than welcome. If you'd like to contribute, details are in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/sublimehq/Vintage"},"GitHub repo"),". "))}m.isMDXComponent=!0}}]);