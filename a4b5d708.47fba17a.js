(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),l=t(7),r=(t(0),t(212)),i={title:"VSC\u4ee3\u7801\u5757\u6298\u53e0",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["editor","vsc"],draft:!1,hide_table_of_contents:!1},o={permalink:"/blog/2021/03/06/vsc-code-folding",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-vsc-code-folding.md",source:"@site/blog/2021-03-06-vsc-code-folding.md",description:"\u4ee5\u4e0b\u662fVisual Studio Code\u652f\u6301\u7684\u4ee3\u7801\u5757\u6298\u53e0\u6807\u8bb0\u53ca\u5feb\u6377\u952e:",date:"2021-03-06T00:00:00.000Z",tags:[{label:"editor",permalink:"/blog/tags/editor"},{label:"vsc",permalink:"/blog/tags/vsc"}],title:"VSC\u4ee3\u7801\u5757\u6298\u53e0",readingTime:2.12,truncated:!0,prevItem:{title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-xauth"},nextItem:{title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-l2tp"}},c=[],b={toc:c};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u4ee5\u4e0b\u662fVisual Studio Code\u652f\u6301\u7684\u4ee3\u7801\u5757\u6298\u53e0\u6807\u8bb0\u53ca\u5feb\u6377\u952e: "),Object(r.b)("p",null,"You can fold regions of source code using the folding icons on the gutter between line numbers and line start. Move the mouse over the gutter and click to fold and unfold regions. Use ",Object(r.b)("inlineCode",{parentName:"p"},"Shift + Click")," on the folding icon to fold or unfold the region and all regions inside."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://code.visualstudio.com/assets/docs/editor/codebasics/folding.png",alt:"folding"})),Object(r.b)("p",null,"You can also use the following actions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fold (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+Shift+["),") folds the innermost uncollapsed region at the cursor."),Object(r.b)("li",{parentName:"ul"},"Unfold (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+Shift+]"),") unfolds the collapsed region at the cursor."),Object(r.b)("li",{parentName:"ul"},"Fold Recursively (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+["),") folds the innermost uncollapsed region at the cursor and all regions inside that region."),Object(r.b)("li",{parentName:"ul"},"Unfold Recursively (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+]"),") unfolds the region at the cursor and all regions inside that region."),Object(r.b)("li",{parentName:"ul"},"Fold All (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+0"),") folds all regions in the editor."),Object(r.b)("li",{parentName:"ul"},"Unfold All (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+J"),") unfolds all regions in the editor."),Object(r.b)("li",{parentName:"ul"},"Fold Level X (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+2")," for level 2) folds all regions of level X, except the region at the current cursor position."),Object(r.b)("li",{parentName:"ul"},"Fold All Block Comments (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+/"),") folds all regions that start with a block comment token."),Object(r.b)("li",{parentName:"ul"},"Folding ranges are by default evaluated based on the indentation of lines. A folding range starts when a line has a smaller indent than one or more following lines, and ends when there is a line with the same or smaller indent.")),Object(r.b)("p",null,"Since the 1.22 release, folding ranges can also be computed based on syntax tokens of the editor's configured language. The following languages already provide syntax aware folding: Markdown, HTML, CSS, LESS, SCSS, and JSON."),Object(r.b)("p",null,"If you prefer to switch back to indentation-based folding for one (or all) of the languages above, use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"[html]": {\n    "editor.foldingStrategy": "indentation"\n},\n')),Object(r.b)("p",null,"Regions can also be defined by markers defined by each language. The following languages currently have markers defined:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C#: ",Object(r.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#endregion")),Object(r.b)("li",{parentName:"ul"},"C/C++: ",Object(r.b)("inlineCode",{parentName:"li"},"#pragma")," region and ",Object(r.b)("inlineCode",{parentName:"li"},"#pragma")," endregion"),Object(r.b)("li",{parentName:"ul"},"CSS/Less/SCSS: ",Object(r.b)("inlineCode",{parentName:"li"},"/*#region*/")," and ",Object(r.b)("inlineCode",{parentName:"li"},"/*#endregion*/")),Object(r.b)("li",{parentName:"ul"},"Coffeescript: ",Object(r.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#endregion")),Object(r.b)("li",{parentName:"ul"},"F#: ",Object(r.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"//#endregion")," and ",Object(r.b)("inlineCode",{parentName:"li"},"(#_region)")," and ",Object(r.b)("inlineCode",{parentName:"li"},"(#_endregion)")),Object(r.b)("li",{parentName:"ul"},"Java: ",Object(r.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"// #endregion")," and ",Object(r.b)("inlineCode",{parentName:"li"},"//<editor-fold>")," and ",Object(r.b)("inlineCode",{parentName:"li"},"//</editor-fold>")),Object(r.b)("li",{parentName:"ul"},"HTML:"),Object(r.b)("li",{parentName:"ul"},"PHP: ",Object(r.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#endregion")),Object(r.b)("li",{parentName:"ul"},"Powershell: ",Object(r.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#endregion")),Object(r.b)("li",{parentName:"ul"},"Python: ",Object(r.b)("inlineCode",{parentName:"li"},"#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#endregion")),Object(r.b)("li",{parentName:"ul"},"TypeScript/JavaScript: ",Object(r.b)("inlineCode",{parentName:"li"},"//#region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"/#endregion")," and ",Object(r.b)("inlineCode",{parentName:"li"},"//region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"//endregion")),Object(r.b)("li",{parentName:"ul"},"VB: ",Object(r.b)("inlineCode",{parentName:"li"},"#Region")," and ",Object(r.b)("inlineCode",{parentName:"li"},"#End Region")),Object(r.b)("li",{parentName:"ul"},"Bat: ::#region and ::#endregion"),Object(r.b)("li",{parentName:"ul"},"Markdown: ",Object(r.b)("inlineCode",{parentName:"li"},"\x3c!-- #region --\x3e")," and ",Object(r.b)("inlineCode",{parentName:"li"},"\x3c!-- #endregion --\x3e"))),Object(r.b)("p",null,"To fold and unfold only the regions defined by markers use:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fold Marker Regions (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+8"),") folds all marker regions."),Object(r.b)("li",{parentName:"ul"},"Unfold Marker Regions (",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+K Ctrl+9"),") unfolds all marker regions.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/codebasics#_folding"},"\u539f\u6587 - Folding"))))}d.isMDXComponent=!0},212:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),d=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||r;return t?l.a.createElement(m,o(o({ref:n},b),{},{components:t})):l.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<r;b++)i[b]=t[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);