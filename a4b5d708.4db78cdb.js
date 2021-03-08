(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),l=(t(0),t(205)),i={title:"VSC\u4ee3\u7801\u5757\u6298\u53e0",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["editor","vsc"],draft:!1,hide_table_of_contents:!1},o={permalink:"/blog/2021/03/06/vsc-code-folding",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-vsc-code-folding.md",source:"@site/blog/2021-03-06-vsc-code-folding.md",description:"\u539f\u6587 - Folding",date:"2021-03-06T00:00:00.000Z",tags:[{label:"editor",permalink:"/blog/tags/editor"},{label:"vsc",permalink:"/blog/tags/vsc"}],title:"VSC\u4ee3\u7801\u5757\u6298\u53e0",readingTime:2.1,truncated:!0,prevItem:{title:"\u642d\u5efa IPSec \u670d\u52a1",permalink:"/blog/2021/03/06/ipsec-server"},nextItem:{title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",permalink:"/blog/2021/03/06/sublime-right-click-open"}},c=[],b={toc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/codebasics#_folding"},"\u539f\u6587 - Folding")),Object(l.b)("p",null,"You can fold regions of source code using the folding icons on the gutter between line numbers and line start. Move the mouse over the gutter and click to fold and unfold regions. Use ",Object(l.b)("inlineCode",{parentName:"p"},"Shift + Click")," on the folding icon to fold or unfold the region and all regions inside."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://code.visualstudio.com/assets/docs/editor/codebasics/folding.png",alt:"folding"})),Object(l.b)("p",null,"You can also use the following actions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fold (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+Shift+["),") folds the innermost uncollapsed region at the cursor."),Object(l.b)("li",{parentName:"ul"},"Unfold (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+Shift+]"),") unfolds the collapsed region at the cursor."),Object(l.b)("li",{parentName:"ul"},"Fold Recursively (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+["),") folds the innermost uncollapsed region at the cursor and all regions inside that region."),Object(l.b)("li",{parentName:"ul"},"Unfold Recursively (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+]"),") unfolds the region at the cursor and all regions inside that region."),Object(l.b)("li",{parentName:"ul"},"Fold All (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+0"),") folds all regions in the editor."),Object(l.b)("li",{parentName:"ul"},"Unfold All (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+J"),") unfolds all regions in the editor."),Object(l.b)("li",{parentName:"ul"},"Fold Level X (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+2")," for level 2) folds all regions of level X, except the region at the current cursor position."),Object(l.b)("li",{parentName:"ul"},"Fold All Block Comments (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+/"),") folds all regions that start with a block comment token."),Object(l.b)("li",{parentName:"ul"},"Folding ranges are by default evaluated based on the indentation of lines. A folding range starts when a line has a smaller indent than one or more following lines, and ends when there is a line with the same or smaller indent.")),Object(l.b)("p",null,"Since the 1.22 release, folding ranges can also be computed based on syntax tokens of the editor's configured language. The following languages already provide syntax aware folding: Markdown, HTML, CSS, LESS, SCSS, and JSON."),Object(l.b)("p",null,"If you prefer to switch back to indentation-based folding for one (or all) of the languages above, use:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"[html]": {\n    "editor.foldingStrategy": "indentation"\n},\n')),Object(l.b)("p",null,"Regions can also be defined by markers defined by each language. The following languages currently have markers defined:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"C#: ",Object(l.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#endregion")),Object(l.b)("li",{parentName:"ul"},"C/C++: ",Object(l.b)("inlineCode",{parentName:"li"},"#pragma")," region and ",Object(l.b)("inlineCode",{parentName:"li"},"#pragma")," endregion"),Object(l.b)("li",{parentName:"ul"},"CSS/Less/SCSS: ",Object(l.b)("inlineCode",{parentName:"li"},"/*#region*/")," and ",Object(l.b)("inlineCode",{parentName:"li"},"/*#endregion*/")),Object(l.b)("li",{parentName:"ul"},"Coffeescript: ",Object(l.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#endregion")),Object(l.b)("li",{parentName:"ul"},"F#: ",Object(l.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"//#endregion")," and ",Object(l.b)("inlineCode",{parentName:"li"},"(#_region)")," and ",Object(l.b)("inlineCode",{parentName:"li"},"(#_endregion)")),Object(l.b)("li",{parentName:"ul"},"Java: ",Object(l.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"// #endregion")," and ",Object(l.b)("inlineCode",{parentName:"li"},"//<editor-fold>")," and ",Object(l.b)("inlineCode",{parentName:"li"},"//</editor-fold>")),Object(l.b)("li",{parentName:"ul"},"HTML:"),Object(l.b)("li",{parentName:"ul"},"PHP: ",Object(l.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#endregion")),Object(l.b)("li",{parentName:"ul"},"Powershell: ",Object(l.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#endregion")),Object(l.b)("li",{parentName:"ul"},"Python: ",Object(l.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#endregion")),Object(l.b)("li",{parentName:"ul"},"TypeScript/JavaScript: ",Object(l.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"/#endregion")," and ",Object(l.b)("inlineCode",{parentName:"li"},"//region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"//endregion")),Object(l.b)("li",{parentName:"ul"},"VB: ",Object(l.b)("inlineCode",{parentName:"li"},"#Region")," and ",Object(l.b)("inlineCode",{parentName:"li"},"#End Region")),Object(l.b)("li",{parentName:"ul"},"Bat: ::#region and ::#endregion"),Object(l.b)("li",{parentName:"ul"},"Markdown: ",Object(l.b)("inlineCode",{parentName:"li"},"\x3c!-- #region --\x3e")," and ",Object(l.b)("inlineCode",{parentName:"li"},"\x3c!-- #endregion --\x3e"))),Object(l.b)("p",null,"To fold and unfold only the regions defined by markers use:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fold Marker Regions (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+8"),") folds all marker regions."),Object(l.b)("li",{parentName:"ul"},"Unfold Marker Regions (",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+9"),") unfolds all marker regions.")))}d.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),d=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||l;return t?a.a.createElement(m,o(o({ref:n},b),{},{components:t})):a.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);