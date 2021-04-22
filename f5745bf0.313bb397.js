(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(387)),c={title:"\u4e3b\u9898"},i={unversionedId:"guides/theme",id:"guides/theme",isDocsHomePage:!1,title:"\u4e3b\u9898",description:"\u539f\u6587 - Docs Introduction",source:"@site/src/docs/guides/theme.md",slug:"/guides/theme",permalink:"/docs/guides/theme",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/guides/theme.md",version:"current",sidebar:"docs",previous:{title:"Client API",permalink:"/docs/guides/api/client"},next:{title:"\u6211\u7684\u535a\u6587\u5f52\u7eb3\u6574\u7406",permalink:"/docs/archives"}},l=[{value:"\u4f7f\u7528\u4e3b\u9898",id:"\u4f7f\u7528\u4e3b\u9898",children:[]},{value:"\u4e3b\u9898\u7ec4\u4ef6",id:"\u4e3b\u9898\u7ec4\u4ef6",children:[]},{value:"\u4f7f\u7528<code>&lt;Root&gt;</code>\u5305\u88f9\u7ad9\u70b9",id:"\u4f7f\u7528root\u5305\u88f9\u7ad9\u70b9",children:[]},{value:"Swizzling \u4e3b\u9898\u7ec4\u4ef6",id:"swizzling-\u4e3b\u9898\u7ec4\u4ef6",children:[]},{value:"\u5305\u88f9\u4e3b\u9898\u7ec4\u4ef6",id:"\u5305\u88f9\u4e3b\u9898\u7ec4\u4ef6",children:[{value:"\u4f5c\u4e3a\u7ad9\u70b9\u6240\u6709\u8005",id:"\u4f5c\u4e3a\u7ad9\u70b9\u6240\u6709\u8005",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docusaurus.io/docs/using-themes"},"\u539f\u6587 - Docs Introduction")),Object(o.b)("h2",{id:"\u4f7f\u7528\u4e3b\u9898"},"\u4f7f\u7528\u4e3b\u9898"),Object(o.b)("p",null,"\u5728",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u6307\u5b9a\u4f7f\u7528\u7684\u4e3b\u9898\uff0c\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u4e3b\u9898:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n")),Object(o.b)("h2",{id:"\u4e3b\u9898\u7ec4\u4ef6"},"\u4e3b\u9898\u7ec4\u4ef6"),Object(o.b)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e3b\u9898\u4f1a\u63d0\u4f9b\u4e00\u7cfb\u5217React\u7ec4\u4ef6\uff0c\u6bd4\u5982",Object(o.b)("inlineCode",{parentName:"p"},"Navbar"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Layout"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Footer"),"\u3002"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7webpack\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"@theme"),"\u522b\u540d\uff0c\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u5bfc\u5165\u8fd9\u4e9b\u7ec4\u4ef6:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import Navbar from '@theme/Navbar';\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@theme"),"\u522b\u540d\u7684\u5f15\u7528\u4f18\u5148\u7ea7\u5982\u4e0b:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u9879\u76ee\u76ee\u5f55",Object(o.b)("inlineCode",{parentName:"li"},"website/src/theme")),Object(o.b)("li",{parentName:"ol"},"Docusaurus\u4e3b\u9898NPM\u5305\u7684",Object(o.b)("inlineCode",{parentName:"li"},"theme"),"\u76ee\u5f55"),Object(o.b)("li",{parentName:"ol"},"\u56de\u9000\u4f7f\u7528Docusaurus core\u91cc\u63d0\u4f9b\u7684\u7ec4\u4ef6(\u901a\u5e38\u4e0d\u4f1a)")),Object(o.b)("p",null,"\u4e00\u4e0b\u662f\u76ee\u5f55\u7ed3\u6784:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 docusaurus-theme\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),Object(o.b)("h2",{id:"\u4f7f\u7528root\u5305\u88f9\u7ad9\u70b9"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"h2"},"<Root>"),"\u5305\u88f9\u7ad9\u70b9"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<Root>"),"\u4e3b\u9898\u7ec4\u4ef6\u662fDocusaurus\u7ad9\u70b9\u6e32\u67d3\u7684\u6700\u9876\u5c42\u7ec4\u4ef6."),Object(o.b)("p",null,"\u901a\u8fc7\u521b\u5efa",Object(o.b)("inlineCode",{parentName:"p"},"src/theme/Root.js"),"\u6587\u4ef6\u53ef\u4ee5\u5305\u88f9\u4f60\u7684\u7ad9\u70b9\uff0c\u589e\u52a0\u5176\u4ed6\u903b\u8f91:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/theme/Root.js"',title:'"src/theme/Root.js"'},"import React from 'react';\n\n// Default implementation, that you can customize\nfunction Root({children}) {\n  return <>{children}</>;\n}\n\nexport default Root;\n")),Object(o.b)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u4f1a\u88ab\u5e94\u7528\u5230\u8def\u7531\u548c",Object(o.b)("inlineCode",{parentName:"p"},"<Layout>"),"\uff0c \u5e76\u4e14\u6c38\u8fdc\u4e0d\u4f1a",Object(o.b)("inlineCode",{parentName:"p"},"unmount"),"."),Object(o.b)("h2",{id:"swizzling-\u4e3b\u9898\u7ec4\u4ef6"},"Swizzling \u4e3b\u9898\u7ec4\u4ef6"),Object(o.b)("p",null,"Docusaurus\u7684\u4e3b\u9898\u7ec4\u4ef6\u88ab\u8bbe\u8ba1\u6210\u53ef\u66ff\u6362\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66ff\u6362\u7ec4\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle <theme name> [component name] [-- --danger]\n")),Object(o.b)("p",null,"\u6bd4\u5982\u66ff\u6362",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"\u4e3b\u9898\u7684",Object(o.b)("inlineCode",{parentName:"p"},"<Footer />")," \u7ec4\u4ef6:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic Footer\n")),Object(o.b)("p",null,"\u6216\u8005\u66ff\u6362",Object(o.b)("inlineCode",{parentName:"p"},"<NavBar />"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic NavBar -- --danger\n")),Object(o.b)("h2",{id:"\u5305\u88f9\u4e3b\u9898\u7ec4\u4ef6"},"\u5305\u88f9\u4e3b\u9898\u7ec4\u4ef6"),Object(o.b)("p",null,"\u6709\u65f6\u5019\u4f60\u4ec5\u4ec5\u5728\u539f\u6709\u7684\u4e3b\u9898\u7ec4\u4ef6\u7684\u57fa\u7840\u4e0a\u52a0\u4e00\u4e9b\u81ea\u5df1\u7684\u903b\u8f91\uff0c\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u5bfc\u5165\u539f\u59cb\u7684\u4e3b\u9898\u7ec4\u4ef6\uff0c\u7136\u540e\u5728\u6dfb\u52a0\u81ea\u5df1\u7684\u4ee3\u7801."),Object(o.b)("h3",{id:"\u4f5c\u4e3a\u7ad9\u70b9\u6240\u6709\u8005"},"\u4f5c\u4e3a\u7ad9\u70b9\u6240\u6709\u8005"),Object(o.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"@theme-original"),"\u522b\u540d\u5bfc\u5165\u539f\u59cb\u7684\u4e3b\u9898\u7ec4\u4ef6\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u5728footer\u4e0a\u9762\u663e\u793a\u4e00\u4e9b\u6587\u672c\u7684\u4f8b\u5b50(\u6587\u4ef6",Object(o.b)("inlineCode",{parentName:"p"},"src/theme/Footer.js"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/theme/Footer.js"',title:'"src/theme/Footer.js"'},"/**\n* \u6ce8\u610f\u76f4\u63a5\u5bfc\u5165 \"@theme/Footer\" \u4f1a\u5931\u8d25, \u56e0\u4e3a\u4e0a\u8ff0\u63d0\u5230\u4e86@theme\u7684\u4f18\u5148\u7ea7\uff0c\n* \u6240\u6709\u5728\u672c\u6587\u4ef6\u4f7f\u7528 @theme/Footer \u60f3\u5bfc\u5165\u81ea\u5df1\u5bfc\u5165\u81ea\u5df1\uff0c\u6240\u4ee5\u4f1a\u5931\u8d25\n*/\n\nimport OriginalFooter from '@theme-original/Footer';\nimport React from 'react';\n\nexport default function Footer(props) {\n  return (\n    <>\n      <div>Before footer</div>\n      <OriginalFooter {...props} />\n    </>\n  );\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic/src/theme"},"@docusaurus/theme-classic")," \u53ef\u88ab\u66ff\u6362\u7684\u7ec4\u4ef6\u5217\u8868."))))}b.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);