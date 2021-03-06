(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(205)),i={title:"Visual Studio Code \u914d\u7f6e"},l={unversionedId:"personal/vsc-config",id:"personal/vsc-config",isDocsHomePage:!1,title:"Visual Studio Code \u914d\u7f6e",description:"\u914d\u7f6e",source:"@site/docs/personal/vsc-config.md",slug:"/personal/vsc-config",permalink:"/docs/personal/vsc-config",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/personal/vsc-config.md",version:"current",sidebar:"docs",previous:{title:"Vim \u76f8\u5173\u914d\u7f6e\u53ca\u6280\u5de7",permalink:"/docs/personal/vim"},next:{title:"Spring in Action",permalink:"/docs/reading/spring-in-action"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u7f16\u8f91\u5668\u914d\u7f6e",id:"\u7f16\u8f91\u5668\u914d\u7f6e",children:[]},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",children:[]}]}],s={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("h3",{id:"\u7f16\u8f91\u5668\u914d\u7f6e"},"\u7f16\u8f91\u5668\u914d\u7f6e"),Object(a.b)("p",null,"\u6587\u4ef6 ",Object(a.b)("em",{parentName:"p"},"settings.json")," :"),Object(a.b)("p",null,"\u6700\u65b0\u914d\u7f6e:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "extensions.autoUpdate": false, // \u7981\u7528\u6269\u5c55\u81ea\u52a8\u66f4\u65b0\n    "extensions.autoCheckUpdates": false,\n    "update.mode": "manual", // VSC\u66f4\u65b0\u6a21\u5f0f\u6539\u4e3a\u624b\u52a8\u68c0\u6d4b\n    "editor.lineNumbers": "relative", // \u884c\u53f7\n    "[markdown]": {\n        "editor.wordWrap": "on",\n        "editor.quickSuggestions": true // markdown\u6587\u4ef6\u667a\u80fd\u63d0\u793a\u9ed8\u8ba4\u5f00\u542f(\u7528\u4e8e\u652f\u6301Snippets)\n    },\n    "window.closeWhenEmpty": true,\n    "files.eol": "\\n",\n    "files.encoding": "utf8",\n    "editor.minimap.enabled": false,\n    "explorer.confirmDelete": false,\n    "[html]": {\n        "editor.defaultFormatter": "vscode.html-language-features"\n    },\n    "[json]": {\n        "editor.defaultFormatter": "vscode.json-language-features"\n    },\n    "[javascript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "emmet.triggerExpansionOnTab": true,\n    "todohighlight.isEnable": true,\n    "todohighlight.keywords": [\n        {\n          "text": "NOTE:",\n          "isWholeLine": true,\n          "color": "#0094ff",\n          "backgroundColor": "rgba(100, 100, 100, 0.8)",\n        },\n        {\n          "text": "TODO",\n          "color": "red",\n          "backgroundColor": "rgba(0,0,0,.2)",\n          "isWholeLine": true\n        }\n    ],\n    "todohighlight.maxFilesForSearch": 5120\n}\n')),Object(a.b)("p",null,"\u8fc7\u65f6\u914d\u7f6e: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "vim.useCtrlKeys": false,\n    "editor.largeFileOptimizations": true,\n    "breadcrumbs.enabled": true,\n    "editor.renderControlCharacters": true,\n    "editor.lineNumbers": "relative",\n    "window.closeWhenEmpty": true,\n    "window.restoreWindows": "all",\n    "editor.renderWhitespace": "all",\n    "editor.renderIndentGuides": true,\n    "files.eol": "\\n",\n    "files.encoding": "utf8",\n    "vim.normalModeKeyBindings": [\n        {\n            "before": [ "z", "a" ],\n            "after": [ "<Esc>", "0", "f", "(", "l", "y", "t", ";", "0", "f", "(", "a", "`", "`", "<Esc>", "h", "p", "x", "a", ",", "<Esc>" ]\n        }\n    ],\n    "editor.minimap.enabled": false,\n    "explorer.confirmDelete": false,\n    "explorer.openEditors.visible": 0,\n    "editor.cursorBlinking": "phase",\n    "editor.smoothScrolling": true,\n    "editor.tokenColorCustomizations": {\n        "textMateRules": [\n            {\n                "scope": [\n                    "entity.name.function",\n                    "support.function"\n                ],\n                "settings": {\n                    "fontStyle": "italic bold"\n                }\n            }\n        ]\n    },\n    "[html]": {\n        "editor.defaultFormatter": "vscode.html-language-features"\n    },\n    "[json]": {\n        "editor.defaultFormatter": "vscode.json-language-features"\n    },\n    "[javascript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "terminal.integrated.rendererType": "dom",\n    "terminal.integrated.shell.windows": "C:\\\\Program Files\\\\PowerShell\\\\6\\\\pwsh.exe",\n    "window.zoomLevel": 0,\n    "html.format.wrapLineLength": 0,\n    "editor.fontLigatures": true,\n    "editor.fontFamily": "\'Cascadia Code\', Consolas, \'Courier New\', monospace",\n    "files.watcherExclude": {\n        "**/.git/objects/**": true,\n        "**/.git/subtree-cache/**": true,\n        "**/node_modules/**": true,\n        ".vscode": true,\n        ".gitlab": true\n    },\n    "extensions.autoUpdate": false,\n    "emmet.triggerExpansionOnTab": true,\n    "editor.minimap.showSlider": "mouseover",\n    "editor.minimap.enabled": false,\n    "editor.acceptSuggestionOnCommitCharacter": false,\n    "emmet.triggerExpansionOnTab": true,\n    "todohighlight.isEnable": true,\n    "todohighlight.keywords": [\n        {\n          "text": "NOTE:",\n          "isWholeLine": true,\n          "color": "#0094ff",\n          "backgroundColor": "rgba(100, 100, 100, 0.8)",\n        },\n        {\n          "text": "TODO",\n          "color": "red",\n          "backgroundColor": "rgba(0,0,0,.2)",\n          "isWholeLine": true\n        }\n    ],\n    "todohighlight.maxFilesForSearch": 5120\n}\n')),Object(a.b)("h3",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),Object(a.b)("p",null,"\u6587\u4ef6 ",Object(a.b)("em",{parentName:"p"},"keybindings.json")," : "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "alt+shift+w",\n    "command": "workbench.action.closeOtherEditors"\n  },\n  {\n    "key": "alt+left",\n    "command": "workbench.action.navigateBack"\n  },\n  {\n    "key": "alt+right",\n    "command": "workbench.action.navigateForward"\n  },\n  {\n    "key": "alt+shift+m",\n    "command": "workbench.action.terminal.sendSequence",\n    "args": {\n      "text": "git status\\u000D"\n    }\n  },\n  {\n    "key": "shift+alt+r",\n    "command": "workbench.action.editorLayoutTwoRows"\n  },\n  {\n    "key": "shift+alt+t",\n    "command": "todohighlight.listAnnotations"\n  },\n  {\n    "key": "shift+alt+f",\n    "command": "editor.action.formatDocument"\n  }\n]\n')))}d.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.a.createElement(f,l(l({ref:n},s),{},{components:t})):o.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);