(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(312)),i={title:"Visual Studio Code \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],description:"Visual Studio Code \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6",draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/03/20/visual-studio-code-reveal",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-20-visual-studio-code-reveal.md",source:"@site/src/blog/2021-03-20-visual-studio-code-reveal.md",description:"Visual Studio Code \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6",date:"2021-03-20T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"},{label:"editor",permalink:"/blog/tags/editor"}],title:"Visual Studio Code \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6",readingTime:.375,truncated:!0,prevItem:{title:"NPM\u7684\u6dd8\u5b9d\u955c\u50cf",permalink:"/blog/2021/03/21/npm-taobao"},nextItem:{title:"Chrome flags",permalink:"/blog/2021/03/15/chrome-flags"}},c=[],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u9879\u76ee\u6587\u4ef6\u6bd4\u8f83\u591a\u65f6, \u5982\u4f55\u5728\u4fa7\u8fb9\u680f\u5feb\u901f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6\u662f\u4e00\u4e2a\u5e38\u7528\u7684\u529f\u80fd\uff0c\u4e0b\u9762\u4ecb\u7ecd\u6211\u7684\u914d\u7f6e\u3002"),Object(a.b)("p",null,"\u9ed8\u8ba4VSC\u5b9a\u4f4d\u5f53\u524d\u6587\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a\u4fee\u6539: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n    /**\n     * \u6b64\u914d\u7f6e\u7528\u4e8e\u8bbe\u7f6e\u5207\u6362\u5230\u5f53\u524d\u6587\u4ef6\u65f6, \u4fa7\u8fb9\u680f\u662f\u5426\u5c55\u793a\u5f53\u524d\u6587\u4ef6\u7684\u6240\u5728\u4f4d\u7f6e, \u53ef\u9009\u503c\u5982\u4e0b:\n     * true: \u4fa7\u8fb9\u680f\u81ea\u52a8\u6eda\u52a8\u5230\u5f53\u524d\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\n     * false: \u7981\u7528\u81ea\u52a8\u663e\u793a\u5f53\u524d\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\n     * focusNoScroll: \u4fa7\u8fb9\u680f\u81ea\u52a8\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e(\u4fa7\u8fb9\u680f\u7684\u6587\u4ef6\u540d\u5904\u4e8e\u9009\u4e2d\u72b6\u6001), \u4f46\u662f\u4fa7\u8fb9\u680f\u6eda\u52a8\u6761\u4e0d\u4f1a\u6eda\u52a8\u5230\u6587\u4ef6\u4f4d\u7f6e\u663e\u793a.\n    */\n    "explorer.autoReveal": "focusNoScroll"\n}\n')),Object(a.b)("p",null,"\u5982\u679c\u9700\u8981\u5728\u4fa7\u8fb9\u680f\u6eda\u52a8\u5230\u5f53\u524d\u6587\u4ef6\u5e76\u663e\u793a, \u53ef\u4ee5\u6309\u4e0b\u5feb\u6377\u952e ",Object(a.b)("inlineCode",{parentName:"p"},"Command + Shift + P"),"(Windows \u73af\u5883\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"Ctrl + Shift + P"),"), \u7136\u540e\u8f93\u5165 ",Object(a.b)("inlineCode",{parentName:"p"},"Files: Reveal Active File in Side Bar")," \u5373\u53ef."),Object(a.b)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u5feb\u6377\u952e:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="keybindings.json"',title:'"keybindings.json"'},'[\n    {\n        "key": "shift+cmd+r",\n        "command":"revealInExplorer"\n    }\n]\n')),Object(a.b)("p",null,"\u66f4\u591a\u5feb\u6377\u952e\u53c2\u8003: ",Object(a.b)("a",{parentName:"p",href:"/blog/2020/03/20/visual-studio-code-keyboard"},"\u6211\u7684 VSC \u5feb\u6377\u952e")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u76f8\u5173\u4ecb\u7ecd ",Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/44844005/reveal-current-file-in-explorer-in-visual-studio-code"},"Reveal current file in Explorer in Visual Studio Code"))))}s.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);