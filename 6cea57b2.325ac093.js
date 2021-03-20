(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(253)),i={title:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],description:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2020/03/20/visual-studio-code-keyboard",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2020-03-20-visual-studio-code-keyboard.md",source:"@site/src/blog/2020-03-20-visual-studio-code-keyboard.md",description:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",date:"2020-03-20T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"},{label:"editor",permalink:"/blog/tags/editor"}],title:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",readingTime:.465,truncated:!0,prevItem:{title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",permalink:"/blog/2020/03/20/visual-studio-code-config"},nextItem:{title:"ASP.Net \u8eab\u4efd\u6a21\u5757\u4ecb\u7ecd",permalink:"/blog/2019/05/14/asp-net-identity-module"}},l=[{value:"macOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e00\u4e0b\u6211\u7684VSC\u5feb\u6377\u952e\u914d\u7f6e: "),Object(a.b)("h2",{id:"macos"},"macOS"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/keybindings.json"',title:'".vscode/keybindings.json"'},'[\n    // \u683c\u5f0f\u5316\u6587\u6863\n    {\n        "key": "shift+cmd+i",\n        "command": "editor.action.formatDocument",\n    },\n    // \u5173\u95ed\u5176\u4ed6\u6587\u6863\n    {\n        "key": "shift+cmd+w",\n        "command": "workbench.action.closeOtherEditors"\n    },\n    {\n        "key": "shift+cmd+w",\n        "command": "-workbench.action.closeWindow"\n    },\n    // \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5f53\u524d\u6587\u4ef6\n    {\n        "key": "shift+cmd+r",\n        "command":"revealInExplorer"\n    }\n]\n')),Object(a.b)("h2",{id:"windows"},"Windows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/keybindings.json"',title:'".vscode/keybindings.json"'},'[\n  {\n    "key": "alt+shift+w",\n    "command": "workbench.action.closeOtherEditors"\n  },\n  {\n    "key": "alt+left",\n    "command": "workbench.action.navigateBack"\n  },\n  {\n    "key": "alt+right",\n    "command": "workbench.action.navigateForward"\n  },\n  {\n    "key": "alt+shift+m",\n    "command": "workbench.action.terminal.sendSequence",\n    "args": {\n      "text": "git status\\u000D"\n    }\n  },\n  {\n    "key": "shift+alt+r",\n    "command": "workbench.action.editorLayoutTwoRows"\n  },\n  {\n    "key": "shift+alt+t",\n    "command": "todohighlight.listAnnotations"\n  },\n  {\n    "key": "shift+alt+f",\n    "command": "editor.action.formatDocument"\n  }\n]\n')))}u.isMDXComponent=!0},253:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,p=d["".concat(i,".").concat(b)]||d[b]||m[b]||a;return t?r.a.createElement(p,c(c({ref:n},s),{},{components:t})):r.a.createElement(p,c({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);