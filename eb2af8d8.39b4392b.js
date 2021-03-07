(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(204)),l={title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","editor","code snippets"],draft:!1,hide_table_of_contents:!1},b={permalink:"/blog/2021/03/05/vsc-code-snippets",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-05-vsc-code-snippets.md",source:"@site/blog/2021-03-05-vsc-code-snippets.md",description:"\u539f\u6587 - Snippets in Visual Studio Code",date:"2021-03-05T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"editor",permalink:"/blog/tags/editor"},{label:"code snippets",permalink:"/blog/tags/code-snippets"}],title:"VSC \u4ee3\u7801\u7247\u6bb5\u4ecb\u7ecd",readingTime:1.975,truncated:!0,prevItem:{title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-xauth"},nextItem:{title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",permalink:"/blog/2021/03/05/vsc-markdown-snippets"}},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u521b\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5",id:"\u521b\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5",children:[{value:"\u666e\u901a\u5360\u4f4d\u7b26",id:"\u666e\u901a\u5360\u4f4d\u7b26",children:[]},{value:"\u591a\u9009\u503c",id:"\u591a\u9009\u503c",children:[]},{value:"\u53d8\u91cf\u5360\u4f4d\u7b26",id:"\u53d8\u91cf\u5360\u4f4d\u7b26",children:[]}]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets"},"\u539f\u6587 - Snippets in Visual Studio Code")),Object(i.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(i.b)("p",null,"\u5728VSC\u91cc, \u4ee3\u7801\u7247\u6bb5\u548c\u5176\u4ed6\u63d0\u793a\u6df7\u5408\u51fa\u73b0\u5728\u667a\u80fd\u611f\u77e5\u4e2d(Windows: ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl + Space"),", Mac: ",Object(i.b)("inlineCode",{parentName:"p"},"Cmd + Space"),"), \u4e5f\u53ef\u4ee5\u4f7f\u7528\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"Cmd/Ctrl + Shift + P")," > Insert Snippet \u624b\u52a8\u9009\u62e9\u6307\u5b9a\u7684\u4ee3\u7801\u7247\u6bb5, \u540c\u65f6\u652f\u6301\u4f7f\u7528tab\u5b8c\u6210\u4ee3\u7801\u7247\u6bb5\u63d2\u5165: \u4f7f\u7528\u914d\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},'"editor.tabCompletion": "on"'),"\u5f00\u542f, \u8f93\u5165\u4ee3\u7801\u7247\u6bb5\u7684\u524d\u7f00(prefix), \u7136\u540e\u6309\u4e0b ",Object(i.b)("strong",{parentName:"p"},"Tab")," \u6309\u952e\u5373\u53ef."),Object(i.b)("h2",{id:"\u521b\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5"},"\u521b\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5"),Object(i.b)("p",null,"\u9009\u62e9 ",Object(i.b)("strong",{parentName:"p"},"File/Code > Preferences > User Snippets"),", \u53ef\u4ee5\u9009\u62e9\u521b\u5efa\u4ee5\u4e0b\u7c7b\u578b\u7684\u4ee3\u7801\u7247\u6bb5:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9488\u5bf9\u7279\u5b9a\u8bed\u8a00\u7684\u4ee3\u7801\u7247\u6bb5 (\u521b\u5efa\u65f6\u9009\u62e9\u4ee3\u7801\u7247\u6bb5\u652f\u6301\u7684\u8bed\u8a00)"),Object(i.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6240\u6709\u8bed\u8a00\u7684\u901a\u7528\u4ee3\u7801\u7247\u6bb5(\u9009\u62e9 ",Object(i.b)("strong",{parentName:"li"},"New Global Snippets file"),")"),Object(i.b)("li",{parentName:"ul"},"\u9488\u5bf9\u5f53\u524d\u9879\u76ee\u7684\u901a\u7528\u4ee3\u7801\u7247\u6bb5, \u5728\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(i.b)("strong",{parentName:"li"},".vscode")," \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u6269\u5c55\u540d\u4e3a ",Object(i.b)("strong",{parentName:"li"},".json.code-snippets")," \u7684\u6587\u4ef6\u5373\u53ef.")),Object(i.b)("p",null,"\u793a\u4f8b\u7247\u6bb5:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "For Loop": {\n    "prefix": ["for", "for-const"],\n    "body": ["for (const ${2:element} of ${1:array}) {", "\\t$0", "}"],\n    "description": "A for loop."\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"For Loop"'),"\u662f\u4ee3\u7801\u7247\u6bb5\u7684\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prefix")," \u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a\u89e6\u53d1\u8bcd, \u5982\u679c\u8f93\u5165\u7684\u5b57\u7b26\u5305\u542b",Object(i.b)("inlineCode",{parentName:"li"},"prefix"),"\u91cc\u5b9a\u4e49\u7684\u524d\u7f00, \u667a\u80fd\u611f\u77e5\u5217\u8868\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u4ee3\u7801\u7247\u6bb5\u4ee5\u4f9b\u9009\u62e9, \u9664\u4e86\u524d\u7f00\u5339\u914d, \u8fd8\u652f\u6301\u9996\u5b57\u6bcd\u5339\u914d, \u5982\u679c\u8f93\u5165",Object(i.b)("inlineCode",{parentName:"li"},"fc"),", \u5c31\u4f1a\u5339\u914d\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"li"},"for-const"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body")," \u4ee3\u7801\u7247\u6bb5\u5b9e\u9645\u5185\u5bb9, \u6570\u7ec4\u7684\u8d27\u4f1a\u8fdb\u884c\u591a\u884c\u62fc\u63a5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description")," \u7528\u4e8e\u5728\u667a\u80fd\u611f\u77e5\u4e2d\u63d0\u4f9b\u63cf\u8ff0\u4fe1\u606f, \u53ef\u9009.")),Object(i.b)("h3",{id:"\u666e\u901a\u5360\u4f4d\u7b26"},"\u666e\u901a\u5360\u4f4d\u7b26"),Object(i.b)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"p"},"body"),"\u6709\u4e09\u4e2a\u5360\u4f4d\u7b26, ",Object(i.b)("inlineCode",{parentName:"p"},"${1:array}"),", ",Object(i.b)("inlineCode",{parentName:"p"},"${2:element}")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"$0"),", \u4f60\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("strong",{parentName:"p"},"Tab")," \u6309\u94ae\u5728\u5360\u4f4d\u7b26\u4e4b\u95f4\u6765\u56de\u5207\u6362, \u5192\u53f7\u540e\u9762\u7684\u6587\u6848\u4e3a\u5360\u4f4d\u7b26\u7684\u9ed8\u8ba4\u6587\u672c, \u5360\u4f4d\u7b26\u7684\u987a\u5e8f\u6309\u7167\u6570\u5b57\u987a\u5e8f, \u4ece0\u5f00\u59cb."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$2")," \u666e\u901a\u5360\u4f4d\u7b26, ",Object(i.b)("inlineCode",{parentName:"li"},"2")," \u7528\u6765\u6307\u5b9a ",Object(i.b)("strong",{parentName:"li"},"Tab")," \u5207\u6362\u65f6\u7684\u987a\u5e8f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"${1:default-text}")," \u5192\u53f7\u540e\u9762\u63d0\u4f9b\u9ed8\u8ba4\u6587\u672c\u7684\u5360\u4f4d\u7b26")),Object(i.b)("h3",{id:"\u591a\u9009\u503c"},"\u591a\u9009\u503c"),Object(i.b)("p",null,"\u5360\u4f4d\u7b26\u53ef\u4ee5\u6709\u591a\u4e2a\u53ef\u9009\u503c: ",Object(i.b)("inlineCode",{parentName:"p"},"${1|one,tow,three}")),Object(i.b)("h3",{id:"\u53d8\u91cf\u5360\u4f4d\u7b26"},"\u53d8\u91cf\u5360\u4f4d\u7b26"),Object(i.b)("p",null,"\u5360\u4f4d\u7b26\u652f\u6301\u652f\u6301\u63d2\u5165\u4e00\u4e9b\u7cfb\u7edf\u53d8\u91cf, \u683c\u5f0f\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"$name")," \u6216 ",Object(i.b)("inlineCode",{parentName:"p"},"${name:default}")," (",Object(i.b)("inlineCode",{parentName:"p"},"default"),"\u7528\u6765\u7ed9\u5360\u4f4d\u7b26\u63d0\u4f9b\u9ed8\u8ba4\u6587\u672c), \u4e0b\u9762\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\u53d8\u91cf:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_SELECTED_TEXT")," The currently selected text or the empty string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_CURRENT_LINE")," The contents of the current line"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_CURRENT_WORD")," The contents of the word under cursor or the empty string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_LINE_INDEX")," The zero-index based line number"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_LINE_NUMBER")," The one-index based line number"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_FILENAME")," The filename of the current document"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_FILENAME_BASE")," The filename of the current document without its extensions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_DIRECTORY")," The directory of the current document"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TM_FILEPATH")," The full file path of the current document"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CLIPBOARD")," The contents of your clipboard"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WORKSPACE_NAME")," The name of the opened workspace or folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WORKSPACE_FOLDER")," The path of the opened workspace or folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_YEAR")," The current year"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_YEAR_SHORT")," The current year's last two digits"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_MONTH")," The month as two digits (example '02')"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_MONTH_NAME")," The full name of the month (example 'July')"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_MONTH_NAME_SHORT")," The short name of the month (example 'Jul')"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_DATE")," The day of the month"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_DAY_NAME")," The name of day (example 'Monday')"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_DAY_NAME_SHORT")," The short name of the day (example 'Mon')"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_HOUR")," The current hour in 24-hour clock format"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_MINUTE")," The current minute"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_SECOND")," The current second"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CURRENT_SECONDS_UNIX")," The number of seconds since the Unix epoch"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BLOCK_COMMENT_START")," Example output: in PHP ",Object(i.b)("inlineCode",{parentName:"li"},"/*")," or in HTML ",Object(i.b)("inlineCode",{parentName:"li"},"\x3c!--")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BLOCK_COMMENT_END")," Example output: in PHP ",Object(i.b)("inlineCode",{parentName:"li"},"*/")," or in HTML ",Object(i.b)("inlineCode",{parentName:"li"},"--\x3e")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LINE_COMMENT")," Example output: in PHP ",Object(i.b)("inlineCode",{parentName:"li"},"//"))),Object(i.b)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),Object(i.b)("p",null,"\u5982\u679c\u9047\u5230 Markdown \u6587\u4ef6\u6ca1\u6709\u667a\u80fd\u611f\u77e5\u65b9\u5f0f\u63d2\u5165\u4ee3\u7801\u7247\u6bb5, \u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d(",Object(i.b)("inlineCode",{parentName:"p"},"settings.json"),")\u6dfb\u52a0\u4e00\u4e0b\u914d\u7f6e\u9879, \u5f3a\u5236\u5f00\u542f:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "[markdown]": {\n        "editor.wordWrap": "on",\n        "editor.quickSuggestions": true \n    }\n}\n')))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,O=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);