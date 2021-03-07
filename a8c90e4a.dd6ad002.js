(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(204)),o={title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["sublime","editor","windows"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/03/06/sublime-right-click-open",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-sublime-right-click-open.md",source:"@site/blog/2021-03-06-sublime-right-click-open.md",description:"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u4fdd\u5b58\u5230bat\u6587\u4ef6\u4e2d, \u7136\u540e\u6267\u884c:",date:"2021-03-06T00:00:00.000Z",tags:[{label:"sublime",permalink:"/blog/tags/sublime"},{label:"editor",permalink:"/blog/tags/editor"},{label:"windows",permalink:"/blog/tags/windows"}],title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",readingTime:.665,truncated:!0,prevItem:{title:"\u642d\u5efa IPSec \u670d\u52a1",permalink:"/blog/2021/03/06/ipsec-server"},nextItem:{title:"\u642d\u5efa Wireguard \u670d\u52a1",permalink:"/blog/2021/03/06/wireguard-server"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u4fdd\u5b58\u5230bat\u6587\u4ef6\u4e2d, \u7136\u540e\u6267\u884c: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bat"},'@echo off\nSET st3Path=C:\\Program Files\\Sublime Text 3\\sublime_text.exe\n    \nrem add it for all file types\n@reg add "HKEY_CLASSES_ROOT\\*\\shell\\Open with Sublime Text 3"         /t REG_SZ /v "" /d "Open with Sublime Text 3"   /f\n@reg add "HKEY_CLASSES_ROOT\\*\\shell\\Open with Sublime Text 3"         /t REG_EXPAND_SZ /v "Icon" /d "%st3Path%,0" /f\n@reg add "HKEY_CLASSES_ROOT\\*\\shell\\Open with Sublime Text 3\\command" /t REG_SZ /v "" /d "%st3Path% \\"%%1\\"" /f\n    \nrem add it for folders\n@reg add "HKEY_CLASSES_ROOT\\Folder\\shell\\Open with Sublime Text 3"         /t REG_SZ /v "" /d "Open with Sublime Text 3"   /f\n@reg add "HKEY_CLASSES_ROOT\\Folder\\shell\\Open with Sublime Text 3"         /t REG_EXPAND_SZ /v "Icon" /d "%st3Path%,0" /f\n@reg add "HKEY_CLASSES_ROOT\\Folder\\shell\\Open with Sublime Text 3\\command" /t REG_SZ /v "" /d "%st3Path% \\"%%1\\"" /f\npause\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},'\u5982\u679c\u5b89\u88c5ST3\u7684\u65f6\u5019\u5df2\u7ecf\u52fe\u9009\u4e86"Open with Sublime Text 3", \u4e0a\u9762\u7684',Object(i.b)("inlineCode",{parentName:"p"},"rem add it for all file types"),"\u4e0b\u7684\u4e09\u884c\u4ee3\u7801\u53bb\u6389."))))}u.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);