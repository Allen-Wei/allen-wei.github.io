(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(208)),o={title:"Sublime\u5f00\u542fVim\u6a21\u5f0f",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["sublime","editor"]},l={permalink:"/blog/2021/03/04/sublime-vim-mode",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-04-sublime-vim-mode.md",source:"@site/blog/2021-03-04-sublime-vim-mode.md",description:"\u539f\u6587 Vintage Mode",date:"2021-03-04T00:00:00.000Z",tags:[{label:"sublime",permalink:"/blog/tags/sublime"},{label:"editor",permalink:"/blog/tags/editor"}],title:"Sublime\u5f00\u542fVim\u6a21\u5f0f",readingTime:.74,truncated:!0,prevItem:{title:"Mac\u5b89\u88c5Wireguard",permalink:"/blog/2021/03/04/mac-install-wireguard"},nextItem:{title:"Linux - Structure needs cleaning",permalink:"/blog/2021/03/03/Structure-needs-cleaning"}},c=[{value:"Enabling Vintage",id:"enabling-vintage",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.sublimetext.com/docs/3/vintage.html"},"\u539f\u6587 Vintage Mode")),Object(i.b)("p",null,"Vintage is a vi mode editing package for Sublime Text. It allows you to combine vi's command mode with Sublime Text's features, including multiple selections."),Object(i.b)("p",null,"Vintage mode is developed in the open, and patches are more than welcome. If you'd like to contribute, details are in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/sublimehq/Vintage"},"GitHub repo"),". "),Object(i.b)("h2",{id:"enabling-vintage"},"Enabling Vintage"),Object(i.b)("p",null," Vintage is disabled by default, via the ",Object(i.b)("inlineCode",{parentName:"p"},"ignored_packages")," setting. If you remove ",Object(i.b)("inlineCode",{parentName:"p"},'"Vintage"')," from the list of ignored packages, you'll be able to edit with vi keys: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"Preferences \u25b6 Settings")," menu item"),Object(i.b)("li",{parentName:"ol"},"Edit the ",Object(i.b)("inlineCode",{parentName:"li"},"ignored_packages")," setting, changing it from: ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"ignored_packages": ["Vintage"]\n')),Object(i.b)("p",null,"to"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"ignored_packages": []\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},'Vintage mode is now enabled \u2013 you\'ll see "INSERT MODE" listed in the status bar ')),Object(i.b)("p",null,"Vintage starts in insert mode by default. This can be changed by adding the following setting to your user settings: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"vintage_start_in_command_mode": true\n')))}u.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,d=p["".concat(o,".").concat(s)]||p[s]||m[s]||i;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);