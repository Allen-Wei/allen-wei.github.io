(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{387:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var l=n(0),b=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var c=b.a.createContext({}),m=function(e){var t=b.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return b.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=l,j=s["".concat(o,".").concat(u)]||s[u]||p[u]||r;return n?b.a.createElement(j,a(a({ref:t},c),{},{components:n})):b.a.createElement(j,a({ref:t},c))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<r;c++)o[c]=n[c];return b.a.createElement.apply(null,o)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},388:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c}));var l=n(4),b=n(0),r=n.n(b),o=function(e){function t(t){return e.call(this,t)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props.link?r.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):r.a.createElement("i",null,this.props.author);return r.a.createElement("section",null,r.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",e,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",r.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),r.a.createElement("hr",null))},t}(r.a.Component),a=n(389);r.a.Component;function i(e){if("string"!=typeof e.href)return r.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return r.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return r.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var n="/blog/"+t[1]+"/"+t[2]+"/"+t[3]+"/"+t[4];return r.a.createElement("a",{href:n,target:e.target,"data-component":"BlogLink"},e.children)}function c(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?r.a.createElement("img",{alt:e.src,src:t}):r.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var l=n(4),b=n(0),r=n.n(b),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",null,"\u611f\u8c22",r.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",r.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")},t}(r.a.Component)},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var l=n(3),b=n(7),r=(n(0),n(387)),o=n(388),a=n(390),i={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u516b\uff09\uff1aSymbols",sidebar_label:"Symbols",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},c={unversionedId:"articles/es6-in-depth/7-symbols",id:"articles/es6-in-depth/7-symbols",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u516b\uff09\uff1aSymbols",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/7-symbols.md",slug:"/articles/es6-in-depth/7-symbols",permalink:"/docs/articles/es6-in-depth/7-symbols",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/7-symbols.md",version:"current",sidebar_label:"Symbols",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e03\uff09\uff1a\u7bad\u5934\u51fd\u6570 Arrow Functions",permalink:"/docs/articles/es6-in-depth/6-arrow-functions"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e5d\uff09\uff1a\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",permalink:"/docs/articles/es6-in-depth/8-babel-and-broccoli"}},m=[{value:"\u5b83\u662f JavaScript \u7684\u7b2c\u4e03\u79cd\u539f\u59cb\u7c7b\u578b",id:"\u5b83\u662f-javascript-\u7684\u7b2c\u4e03\u79cd\u539f\u59cb\u7c7b\u578b",children:[]},{value:"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u5e03\u5c14\u7c7b\u578b\u51fa\u53d1",id:"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u5e03\u5c14\u7c7b\u578b\u51fa\u53d1",children:[]},{value:"symbol \u662f\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6848",id:"symbol-\u662f\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6848",children:[]},{value:"\u4f46\u662f\uff0c\u5230\u5e95\u4ec0\u4e48\u662f symbol \u5462\uff1f",id:"\u4f46\u662f\uff0c\u5230\u5e95\u4ec0\u4e48\u662f-symbol-\u5462\uff1f",children:[]},{value:"\u83b7\u53d6 symbol \u7684\u4e09\u79cd\u65b9\u6cd5",id:"\u83b7\u53d6-symbol-\u7684\u4e09\u79cd\u65b9\u6cd5",children:[]},{value:"symbol \u5728 ES6 \u89c4\u8303\u4e2d\u7684\u5e94\u7528",id:"symbol-\u5728-es6-\u89c4\u8303\u4e2d\u7684\u5e94\u7528",children:[]}],s={toc:m};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-symbols"},"\u539f\u6587")),Object(r.b)("p",null,"\u4f60\u662f\u5426\u77e5\u9053 ES6 \u4e2d\u7684 Symbols \u662f\u4ec0\u4e48\uff0c\u5b83\u6709\u4ec0\u4e48\u4f5c\u7528\u5462\uff1f\u6211\u76f8\u4fe1\u4f60\u5f88\u53ef\u80fd\u4e0d\u77e5\u9053\uff0c\u90a3\u5c31\u8ba9\u6211\u4eec\u4e00\u63a2\u7a76\u7adf\uff01"),Object(r.b)("p",null,"Symbols \u5e76\u975e\u7528\u6765\u6307\u4ee3\u67d0\u79cd Logo\u3002"),Object(r.b)("p",null,"\u5b83\u4eec\u4e5f\u4e0d\u662f\u53ef\u4ee5\u7528\u4f5c\u4ee3\u7801\u7684\u5c0f\u56fe\u6807\u3002"),Object(r.b)("p",null,"\u5b83\u4eec\u4e0d\u662f\u4ee3\u66ff\u5176\u5b83\u4e1c\u897f\u7684\u6587\u5b66\u624b\u6cd5\u3002"),Object(r.b)("p",null,"\u5b83\u4eec\u66f4\u4e0d\u53ef\u80fd\u88ab\u7528\u6765\u6307\u4ee3\u8c10\u97f3\u8bcd Cymbals\uff08\u94d9\u94b9\uff09\u3002"),Object(r.b)("p",null,"\uff08\u7f16\u7a0b\u7684\u65f6\u5019\u6700\u597d\u4e0d\u8981\u6f14\u594f\u94d9\u94b9\uff0c\u5b83\u4eec\u592a\u8fc7\u5435\u95f9\uff0c\u5f88\u53ef\u80fd\u5bfc\u81f4\u4f60\u7684\u7a0b\u5e8f\u5d29\u6e83\u3002\uff09"),Object(r.b)("p",null,"\u90a3\u4e48\uff0cSymbols \u5230\u5e95\u662f\u4ec0\u4e48\u5462\uff1f"),Object(r.b)("h2",{id:"\u5b83\u662f-javascript-\u7684\u7b2c\u4e03\u79cd\u539f\u59cb\u7c7b\u578b"},"\u5b83\u662f JavaScript \u7684\u7b2c\u4e03\u79cd\u539f\u59cb\u7c7b\u578b"),Object(r.b)("p",null,"1997 \u5e74 JavaScript \u9996\u6b21\u88ab\u6807\u51c6\u5316\uff0c\u90a3\u65f6\u53ea\u6709\u516d\u79cd\u539f\u59cb\u7c7b\u578b\uff0c\u5728 ES6 \u4ee5\u524d\uff0cJS \u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u6bcf\u4e00\u4e2a\u503c\u90fd\u662f\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\u4e4b\u4e00\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Undefined")," \u672a\u5b9a\u4e49"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Null")," \u7a7a\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Boolean")," \u5e03\u5c14\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Number")," \u6570\u5b57\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"String")," \u5b57\u7b26\u4e32\u7c7b\u578b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Object")," \u5bf9\u8c61\u7c7b\u578b")),Object(r.b)("p",null,"\u6bcf\u79cd\u7c7b\u578b\u90fd\u662f\u591a\u4e2a\u503c\u7684\u96c6\u5408\uff0c\u524d\u4e94\u4e2a\u96c6\u5408\u662f\u6709\u9650\u7684\u3002\u5e03\u5c14\u7c7b\u578b\u53ea\u6709\u4e24\u4e2a\u503c\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4e0d\u4f1a\u518d\u521b\u9020\u7b2c\u4e09\u79cd\u5e03\u5c14\u503c\uff1b\u6570\u5b57\u7c7b\u578b\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u503c\u66f4\u591a\uff0c\u6807\u51c6\u6307\u660e\u4e00\u5171\u6709 18,437,736,874,454,810,627 \u79cd\u4e0d\u540c\u7684\u6570\u5b57\uff08\u5305\u62ec",Object(r.b)("inlineCode",{parentName:"p"},"NaN"),"\uff0c \u4ea6\u5373\u201cNot a Number\u201d\u7684\u7f29\u5199\uff0c\u4ee3\u8868\u975e\u6570\u5b57\uff09\uff0c\u53ef\u80fd\u5b58\u5728\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u503c\u62e5\u6709\u65e0\u4ee5\u5339\u654c\u7684\u6570\u91cf\uff0c\u6211\u4f30\u7b97\u4e86\u4e00\u4e0b\u5927\u7ea6\u662f (2144,115,188,075,855,872 \u2212 1) \xf7 65,535 \u79cd\u2026\u2026\u5f53\u7136\uff0c\u6211\u5f88\u53ef\u80fd\u5f97\u51fa\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u7b54\u6848\uff0c\u4f46\u5b57\u7b26\u4e32\u7c7b\u578b\u503c\u7684\u96c6\u5408\u4e00\u5b9a\u662f\u6709\u9650\u7684\u3002"),Object(r.b)("p",null,"\u7136\u800c\uff0c\u5bf9\u8c61\u7c7b\u578b\u503c\u7684\u96c6\u5408\u662f\u65e0\u9650\u7684\u3002\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u50cf\u73cd\u8d35\u7684\u96ea\u82b1\u4e00\u6837\u72ec\u4e00\u65e0\u4e8c\uff0c\u6bcf\u4e00\u6b21\u4f60\u6253\u5f00\u4e00\u4e2a Web \u9875\u9762\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u5806\u5bf9\u8c61\u3002"),Object(r.b)("p",null,"ES6 \u65b0\u7279\u6027\u4e2d\u7684 symbol \u4e5f\u662f\u503c\uff0c\u4f46\u5b83\u4e0d\u662f\u5b57\u7b26\u4e32\uff0c\u4e5f\u4e0d\u662f\u5bf9\u8c61\uff0c\u800c\u662f\u662f\u5168\u65b0\u7684\u2014\u2014\u7b2c\u4e03\u79cd\u7c7b\u578b\u7684\u539f\u59cb\u503c\u3002"),Object(r.b)("p",null,"\u8ba9\u6211\u4eec\u4e00\u8d77\u63a2\u8ba8\u4e00\u4e0b symbol \u7684\u5b9e\u9645\u5e94\u7528\u573a\u666f\u3002"),Object(r.b)("h2",{id:"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u5e03\u5c14\u7c7b\u578b\u51fa\u53d1"},"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u5e03\u5c14\u7c7b\u578b\u51fa\u53d1"),Object(r.b)("p",null,"\u6709\u65f6\u5019\u4f60\u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u5c06\u522b\u4eba\u7684\u5916\u90e8\u6570\u636e\u5b58\u50a8\u5230\u4e00\u4e2a JavaScript \u5bf9\u8c61\u4e2d\u3002"),Object(r.b)("p",null,"\u4e3e \u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u4f60\u6b63\u5728\u5199\u4e00\u4e2a JS \u5e93\uff0c\u53ef\u4ee5\u901a\u8fc7 CSS transitions \u4f7f DOM \u5143\u7d20\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u3002\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\uff0c\u5f53\u4f60\u5c1d\u8bd5\u5728\u4e00\u4e2a div \u5143\u7d20\u4e0a\u540c\u65f6\u5e94\u7528\u591a\u91cd CSS transitions \u65f6\u5e76\u4e0d\u4f1a\u751f\u6548\u3002\u5b9e\u9645\u6548\u679c\u662f\u4e11\u964b\u800c\u53c8\u4e0d\u8fde\u7eed\u7684\u201c\u8df3\u95ea\u201d\u3002\u4f60\u8ba4\u4e3a\u53ef\u4ee5\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u524d\u63d0\u662f\u4f60\u9700\u8981\u4e00\u79cd\u53d1\u73b0\u7ed9\u5b9a\u5143\u7d20\u662f\u5426\u5df2\u7ecf\u79fb\u52a8\u8fc7\u7684\u65b9 \u6cd5\u3002"),Object(r.b)("p",null,"\u5e94\u5f53\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5462\uff1f"),Object(r.b)("p",null,"\u4e00\u79cd\u65b9\u6cd5\u662f\uff0c\u7528 CSS API \u6765\u544a\u8bc9\u6d4f\u89c8\u5668\u5143\u7d20\u662f\u5426\u6b63\u5728\u79fb\u52a8\uff0c\u4f46\u8fd9\u6837\u7b80\u76f4\u5c0f\u9898\u5927\u505a\u3002\u5728\u5143\u7d20\u79fb\u52a8\u7684\u7b2c\u4e00\u65f6\u95f4\u5185\u4f60\u7684\u5e93\u5c31\u5e94\u8be5\u8bb0\u5f55\u4e0b\u79fb\u52a8\u7684\u72b6\u6001\uff0c\u6240\u4ee5\u5b83\u81ea\u7136\u77e5\u9053\u5143\u7d20\u6b63\u5728\u79fb\u52a8\u3002"),Object(r.b)("p",null,"\u4f60\u771f\u6b63\u60f3\u8981\u7684\u662f\u4e00\u79cd\u6301\u7eed\u8ddf\u8e2a\u67d0\u4e2a\u5143\u7d20\u6b63\u5728\u79fb\u52a8\u7684\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u7ef4\u62a4\u4e00\u4e2a\u6570\u7ec4\uff0c\u8bb0\u5f55\u6240\u6709\u6b63\u5728\u79fb\u52a8\u7684\u5143\u7d20\uff0c\u6bcf\u5f53\u4f60\u7684\u5e93\u88ab\u8c03\u7528\u6765\u79fb\u52a8\u67d0\u4e2a\u5143\u7d20\u65f6\uff0c\u4f60\u53ef\u4ee5\u68c0\u7d22\u6570\u7ec4\u6765\u67e5\u770b\u5143\u7d20\u662f\u5426\u5df2\u7ecf\u5b58\u5728\uff0c\u4ea6\u5373\u5b83\u662f\u5426\u6b63\u5728\u79fb\u52a8\u4e2d\u3002"),Object(r.b)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u6570\u7ec4\u975e\u5e38\u5927\u7684\u8bdd\uff0c\u7ebf\u6027\u641c\u7d22\u5c06\u4f1a\u975e\u5e38\u7f13\u6162\u3002"),Object(r.b)("p",null,"\u5b9e\u9645\u4e0a\u4f60\u53ea\u60f3\u4e3a\u5143\u7d20\u8bbe\u7f6e\u4e00\u4e2a\u6807\u8bb0\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"if (element.isMoving) {\n  smoothAnimations(element);\n}\nelement.isMoving = true;\n")),Object(r.b)("p",null,"\u8fd9\u6837\u4e5f\u4f1a\u6709\u4e00\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u4f60\u7684\u4ee3\u7801\u5f88\u53ef\u80fd\u4e0d\u662f\u552f\u4e00\u4e00\u6bb5\u64cd\u4f5c DOM \u7684\u4ee3\u7801\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u4f60\u521b\u5efa\u7684\u5c5e\u6027\u5f88\u53ef\u80fd\u5f71\u54cd\u5230\u5176\u5b83\u4f7f\u7528\u4e86for-in\u6216",Object(r.b)("inlineCode",{parentName:"li"},"Object.keys()"),"\u7684\u4ee3\u7801\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4e00\u4e9b\u806a\u660e\u7684\u5e93\u4f5c\u8005\u53ef\u80fd\u5df2\u7ecf\u8003\u8651\u5e76\u4f7f\u7528\u4e86\u8fd9\u9879\u6280\u672f\uff0c\u8fd9\u6837\u4e00\u6765\u4f60\u7684\u5e93\u5c31\u4f1a\u4e0e\u5df2\u6709\u7684\u5e93\u4ea7\u751f\u67d0\u4e9b\u51b2\u7a81"),Object(r.b)("li",{parentName:"ol"},"\u5f53\u7136\uff0c\u5f88\u53ef\u80fd\u4f60\u6bd4\u4ed6\u4eec\u66f4\u806a\u660e\uff0c\u4f60\u5148\u91c7\u7528\u4e86\u8fd9\u9879\u6280\u672f\uff0c\u4f46\u662f\u4ed6\u4eec\u7684\u5e93\u4ecd\u7136\u65e0\u6cd5\u4e0e\u4f60\u7684\u5e93\u9ed8\u5951\u914d\u5408\u3002"),Object(r.b)("li",{parentName:"ol"},"\u6807\u51c6\u59d4\u5458\u4f1a\u53ef\u80fd\u51b3\u5b9a\u4e3a\u6240\u6709\u7684\u5143\u7d20\u589e\u52a0\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},".isMoving()")," \u65b9\u6cd5\uff0c\u5230\u90a3\u65f6\u4f60\u9700\u8981\u91cd\u5199\u76f8\u5173\u903b\u8f91\uff0c\u5fc5\u5b9a\u4f1a\u6709\u6df1\u6df1\u7684\u632b\u8d25\u611f\u3002")),Object(r.b)("p",null,"\u5f53\u7136\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u4e4f\u5473\u800c\u611a\u8822\u7684\u547d\u540d\uff08\u5176\u4ed6\u4eba\u6839\u672c\u4e0d\u4f1a\u60f3\u7528\u7684\u90a3\u4e9b\u540d\u79f0\uff09\u6765\u89e3\u51b3\u6700\u540e\u7684\u4e09\u4e2a\u95ee\u9898\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"if (element.__$jorendorff_animation_library$PLEASE_DO_NOT_USE_THIS_PROPERTY$isMoving__) {\n  smoothAnimations(element);\n}\nelement.__$jorendorff_animation_library$PLEASE_DO_NOT_USE_THIS_PROPERTY$isMoving__ = true; \n")),Object(r.b)("p",null,"\u8fd9\u53ea\u4f1a\u9020\u6210\u65e0\u754f\u7684\u773c\u75b2\u52b3\u3002"),Object(r.b)("p",null,"\u501f\u52a9\u4e8e\u5bc6\u7801\u5b66\uff0c\u4f60\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u5c5e\u6027\u540d\u79f0\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// \u83b7\u53d6 1024 \u4e2a Unicode \u5b57\u7b26\u7684\u65e0\u610f\u4e49\u547d\u540d\nvar isMoving = SecureRandom.generateName();\n...\nif (element[isMoving]) {\n  smoothAnimations(element);\n}\nelement[isMoving] = true;\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"object[name]"),"\u8bed\u6cd5\u5141\u8bb8\u4f60\u4f7f\u7528\u51e0\u4e4e\u4efb\u4f55\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5c5e\u6027\u540d\u79f0\u3002\u6240\u4ee5\u8fd9\u4e2a\u65b9\u6cd5\u884c\u4e4b\u6709\u6548\uff1a\u51b2\u7a81\u51e0\u4e4e\u662f\u4e0d\u53ef\u80fd\u7684\uff0c\u5e76\u4e14\u4f60\u7684\u4ee3\u7801\u770b\u8d77\u6765\u4e5f\u5f88\u7b80\u6d01\u3002"),Object(r.b)("p",null,"\u4f46\u662f\u8fd9\u4e5f\u5c06\u5e26\u6765\u4e0d\u826f\u7684\u8c03\u8bd5\u4f53\u9a8c\u3002\u6bcf\u5f53\u4f60\u5728\u63a7\u5236\u53f0\u8f93\u51fa\uff08",Object(r.b)("inlineCode",{parentName:"p"},"console.log()"),"\uff09\u5305\u542b\u90a3\u4e2a\u5c5e\u6027\u7684\u5143\u7d20\u65f6\uff0c\u4f60\u5c06\u4f1a\u770b\u5230\u4e00\u5806\u5de8\u5927\u7684\u5b57\u7b26\u4e32\u5783\u573e\u3002\u5047\u4f7f\u4f60\u9700\u8981\u6bd4\u8fd9\u591a\u5f97\u591a\u7684\u7c7b\u4f3c\u5c5e\u6027\u5462\uff1f\u4f60\u5982\u4f55\u4fdd\u6301\u5b83\u4eec\u6574\u9f50\u5212\u4e00\uff1f\u6bcf\u5f53\u4f60\u91cd\u8f7d\u7684\u65f6\u5019\u5b83\u4eec\u7684\u547d\u540d\u751a\u81f3\u90fd\u4e0d\u4e00\u6837\uff01"),Object(r.b)("p",null,"\u4e3a\u4ec0\u4e48\u8fd9\u4e2a\u95ee\u9898\u5982\u6b64\u56f0\u96be\uff1f\u6211\u4eec\u53ea\u60f3\u8981\u4e00\u4e2a\u5c0f\u5c0f\u7684\u5e03\u5c14\u503c\u554a\uff01"),Object(r.b)("h2",{id:"symbol-\u662f\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6848"},"symbol \u662f\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6848"),Object(r.b)("p",null,"symbol \u662f\u7a0b\u5e8f\u521b\u5efa\u5e76\u4e14\u53ef\u4ee5\u7528\u4f5c\u5c5e\u6027\u952e\u7684\u503c\uff0c\u5e76\u4e14\u5b83\u80fd\u907f\u514d\u547d\u540d\u51b2\u7a81\u7684\u98ce\u9669\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"var mySymbol = Symbol();"),"\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"Symbol()"),"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 symbol\uff0c\u5b83\u7684\u503c\u4e0e\u5176\u5b83\u4efb\u4f55\u503c\u7686\u4e0d\u76f8\u7b49\u3002"),Object(r.b)("p",null,"\u5b57\u7b26\u4e32\u6216\u6570\u5b57\u53ef\u4ee5\u4f5c\u4e3a\u5c5e\u6027\u7684\u952e\uff0csymbol \u4e5f\u53ef\u4ee5\uff0c\u5b83\u4e0d\u7b49\u540c\u4e8e\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u56e0\u800c\u8fd9\u4e2a\u4ee5 symbol \u4e3a\u952e\u7684\u5c5e\u6027\u53ef\u4ee5\u4fdd\u8bc1\u4e0d\u4e0e\u4efb\u4f55\u5176\u5b83\u5c5e\u6027\u4ea7\u751f\u51b2\u7a81\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'obj[mySymbol] = "ok!";  // \u4fdd\u8bc1\u4e0d\u4f1a\u51b2\u7a81\nconsole.log(obj[mySymbol]);  // ok!\n')),Object(r.b)("p",null,"\u60f3\u8981\u5728\u4e0a\u8ff0\u8ba8\u8bba\u7684\u573a\u666f\u4e2d\u4f7f\u7528 symbol\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'// \u521b\u5efa\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684 symbol\nvar isMoving = Symbol("isMoving");\n...\nif (element[isMoving]) {\n  smoothAnimations(element);\n}\nelement[isMoving] = true;\n')),Object(r.b)("p",null,"\u6709\u5173\u8fd9\u6bb5\u4ee3\u7801\u7684\u4e00\u4e9b\u89e3\u91ca\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'Symbol("isMoving")'),"\u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"li"},"isMoving"),"\u88ab\u79f0\u4f5c\u63cf\u8ff0\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"li"},"console.log()"),"\u5c06\u5b83\u6253\u5370\u51fa\u6765\uff0c\u5bf9\u8c03\u8bd5\u975e\u5e38\u6709\u5e2e\u52a9\uff1b\u4f60\u4e5f\u53ef\u4ee5\u7528",Object(r.b)("inlineCode",{parentName:"li"},".toString()"),"\u65b9\u6cd5\u5c06\u5b83\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u5448\u73b0\uff1b\u5b83\u4e5f\u53ef\u4ee5\u88ab\u7528\u5728\u9519\u8bef\u4fe1\u606f\u4e2d\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"element[isMoving]"),"\u88ab\u79f0\u4f5c\u4e00\u4e2a ",Object(r.b)("em",{parentName:"li"},"\u4ee5 symbol \u4e3a\u952e\uff08symbol-keyed\uff09\u7684\u5c5e\u6027")," \u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5b83\u7684\u540d\u5b57\u662fsymbol\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5b83\u4e0e\u4e00\u4e2a\u666e\u901a\u7684\u5c5e\u6027\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\u3002"),Object(r.b)("li",{parentName:"ul"},"\u4ee5 symbol \u4e3a\u952e\u7684\u5c5e\u6027\u5c5e\u6027\u4e0e\u6570\u7ec4\u5143\u7d20\u7c7b\u4f3c\uff0c\u4e0d\u80fd\u88ab\u7c7b\u4f3c",Object(r.b)("inlineCode",{parentName:"li"},"obj.name"),"\u7684\u70b9\u53f7\u6cd5\u8bbf\u95ee\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528\u65b9\u62ec\u53f7\u8bbf\u95ee\u8fd9\u4e9b\u5c5e\u6027\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5df2\u7ecf\u5f97\u5230\u4e86 symbol\uff0c\u90a3\u4e48\u8bbf\u95ee\u4e00\u4e2a\u4ee5 symbol \u4e3a\u952e\u7684\u5c5e\u6027\u540c\u6837\u7b80\u5355\uff0c\u4ee5\u4e0a\u7684\u793a\u4f8b\u5f88\u597d\u5730\u5c55\u793a\u4e86\u5982\u4f55\u83b7\u53d6",Object(r.b)("inlineCode",{parentName:"li"},"element[isMoving]"),"\u7684\u503c\u4ee5\u53ca\u5982\u4f55\u4e3a\u5b83\u8d4b\u503c\u3002\u5982\u679c\u6211\u4eec\u9700\u8981\uff0c\u53ef\u4ee5\u67e5\u770b\u5c5e\u6027\u662f\u5426\u5b58\u5728\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"if (isMoving in element)"),"\uff0c\u4e5f\u53ef\u4ee5\u5220\u9664\u5c5e\u6027\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"delete element[isMoving]"),"\u3002"),Object(r.b)("li",{parentName:"ul"},"\u53e6\u4e00\u65b9\u9762\uff0c\u53ea\u6709\u5f53",Object(r.b)("inlineCode",{parentName:"li"},"isMoving"),"\u5728\u5f53\u524d\u4f5c\u7528\u57df\u4e2d\u65f6\u624d\u4f1a\u751f\u6548\u3002\u8fd9\u662f symbol \u7684\u5f31\u5c01\u88c5\u673a\u5236\uff1a\u6a21\u5757\u521b\u5efa\u4e86\u51e0\u4e2a symbol\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u5bf9\u8c61\u4e0a\u4f7f\u7528\uff0c\u65e0\u987b\u62c5\u5fc3\u4e0e\u5176\u5b83\u4ee3\u7801\u521b\u5efa\u7684\u5c5e\u6027\u4ea7\u751f\u51b2\u7a81\u3002")),Object(r.b)("p",null,"symbol \u952e\u7684\u8bbe\u8ba1\u521d\u8877\u662f\u907f\u514d\u521d\u8877\uff0c\u56e0\u6b64 JavaScript \u4e2d\u6700\u5e38\u89c1\u7684\u5bf9\u8c61\u68c0\u67e5\u7684\u7279\u6027\u4f1a\u5ffd\u7565 symbol \u952e\u3002\u4f8b\u5982\uff0cfor-in\u5faa\u73af\u53ea\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u952e\uff0csymbol \u952e\u76f4\u63a5\u8df3\u8fc7\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Object.keys(obj)"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames(obj)"),"\u4e5f\u662f\u4e00\u6837\u3002\u4f46\u662f symbols \u4e5f\u4e0d\u5b8c\u5168\u662f\u79c1\u6709\u7684\uff1a\u7528\u65b0\u7684 API ",Object(r.b)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols(obj)"),"\u5c31\u53ef\u4ee5\u5217\u51fa\u5bf9\u8c61\u7684 symbol \u952e\u3002\u53e6\u4e00\u4e2a\u65b0\u7684 API\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Reflect.ownKeys(obj)"),"\uff0c\u4f1a\u540c\u65f6\u8fd4\u56de\u5b57\u7b26\u4e32\u952e\u548c symbol \u952e\u3002\uff08\u6211\u4eec\u5c06\u5728\u968f\u540e\u7684\u6587\u7ae0\u4e2d\u8bb2\u89e3 Reflect(\u53cd\u5c04) API\uff09\u3002"),Object(r.b)("p",null,"\u6162\u6162\u5730\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5e93\u548c\u6846\u67b6\u5c06\u5927\u91cf\u4f7f\u7528 symbol\uff0c\u8bed\u8a00\u672c\u8eab\u4e5f\u4f1a\u5c06 symbol \u5e94\u7528\u4e8e\u5e7f\u6cdb\u7684\u7528\u9014\u3002"),Object(r.b)("h2",{id:"\u4f46\u662f\uff0c\u5230\u5e95\u4ec0\u4e48\u662f-symbol-\u5462\uff1f"},"\u4f46\u662f\uff0c\u5230\u5e95\u4ec0\u4e48\u662f symbol \u5462\uff1f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'typeof Symbol() // => "symbol"\n')),Object(r.b)("p",null,"\u786e\u5207\u5730\u8bf4\uff0csymbol \u4e0e\u5176\u5b83\u7c7b\u578b\u5e76\u4e0d\u5b8c\u5168\u76f8\u50cf\u3002"),Object(r.b)("p",null,"symbol \u88ab\u521b\u5efa\u540e\u5c31\u4e0d\u53ef\u53d8\u66f4\uff0c\u4f60\u4e0d\u80fd\u4e3a\u5b83\u8bbe\u7f6e\u5c5e\u6027\uff08\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u5c1d\u8bd5\u8bbe\u7f6e\u5c5e\u6027\u4f1a\u5f97\u5230 TypeError \u7684\u9519\u8bef\uff09\u3002\u4ed6\u4eec\u53ef\u4ee5\u7528\u4f5c\u5c5e\u6027\u540d\u79f0\uff0c\u8fd9\u4e9b\u6027\u8d28\u4e0e\u5b57\u7b26\u4e32\u7c7b\u4f3c\u3002"),Object(r.b)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u6bcf\u4e00\u4e2a symbol \u90fd\u72ec\u4e00\u65e0\u4e8c\uff0c\u4e0d\u4e0e\u5176\u5b83 symbol \u7b49\u540c\uff0c\u5373\u4f7f\u4e8c\u8005\u6709\u76f8\u540c\u7684\u63cf\u8ff0\u4e5f\u4e0d\u76f8\u7b49\uff1b\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 symbol\u3002\u8fd9\u4e9b\u6027\u8d28\u4e0e\u5bf9\u8c61\u7c7b\u4f3c\u3002"),Object(r.b)("p",null,"ES6 \u4e2d\u7684 symbol \u4e0e Lisp \u548c Ruby \u8fd9\u4e9b\u8bed\u8a00\u4e2d",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symbol_%28programming%29"},"\u66f4\u4f20\u7edf\u7684 symbol")," \u7c7b\u4f3c\uff0c\u4f46\u4e0d\u50cf\u5b83\u4eec\u96c6\u6210\u5f97\u90a3\u4e48\u7d27\u5bc6\u3002\u5728 Lisp \u4e2d\uff0c\u6240\u6709\u7684\u6807\u8bc6\u7b26\u90fd\u662f symbol\uff1b\u5728 JS \u4e2d\uff0c\u6807\u8bc6\u7b26\u548c\u5927\u591a\u6570\u7684\u5c5e\u6027\u952e\u4ecd\u7136\u662f\u5b57\u7b26\u4e32\uff0csymbol \u53ea\u662f\u4e00\u4e2a\u989d\u5916\u7684\u9009\u9879\u3002"),Object(r.b)("p",null,"\u5173\u4e8e symbol \u7684\u5fe0\u544a\uff1asymbol \u4e0d\u80fd\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u8fd9\u548c\u8bed\u8a00\u4e2d\u7684\u5176\u5b83\u7c7b\u578b\u4e0d\u540c\u3002\u5c1d\u8bd5\u62fc\u63a5 symbol \u4e0e\u5b57\u7b26\u4e32\u5c06\u5f97\u5230 TypeError \u9519\u8bef\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'> var sym = Symbol("<3");\n> "your symbol is " + sym\n// TypeError: can\'t convert symbol to string\n> `your symbol is ${sym}`\n// TypeError: can\'t convert symbol to string\n')),Object(r.b)("p",null,"\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"String(sym)"),"\u6216",Object(r.b)("inlineCode",{parentName:"p"},"sym.toString()"),"\u53ef\u4ee5\u663e\u793a\u5730\u5c06 symbol \u8f6c\u6362\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4ece\u800c\u56de\u907f\u8fd9\u4e2a\u95ee\u9898\u3002"),Object(r.b)("h2",{id:"\u83b7\u53d6-symbol-\u7684\u4e09\u79cd\u65b9\u6cd5"},"\u83b7\u53d6 symbol \u7684\u4e09\u79cd\u65b9\u6cd5"),Object(r.b)("p",null,"\u6709\u4e09\u79cd\u83b7\u53d6 symbol \u7684\u65b9\u6cd5\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8c03\u7528 Symbol()"),"\u3002\u6b63\u5982\u6211\u4eec\u4e0a\u6587\u4e2d\u6240\u8ba8\u8bba\u7684\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6bcf\u6b21\u8c03\u7528\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u552f\u4e00 symbol\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8c03\u7528 Symbol.for(string)"),"\u3002\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u8bbf\u95ee symbol \u6ce8\u518c\u8868\uff0c\u5176\u4e2d\u5b58\u50a8\u4e86\u5df2\u7ecf\u5b58\u5728\u7684\u4e00\u7cfb\u5217 symbol\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0e\u901a\u8fc7Symbol()\u5b9a\u4e49\u7684\u72ec\u7acb symbol \u4e0d\u540c\uff0csymbol \u6ce8\u518c\u8868\u4e2d\u7684 symbol \u662f\u5171\u4eab\u7684\u3002\u5982\u679c\u4f60\u8fde\u7eed\u4e09\u5341\u6b21\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"li"},'Symbol.for("cat")'),"\uff0c\u6bcf\u6b21\u90fd\u4f1a\u8fd4\u56de\u76f8\u540c\u7684 symbol\u3002\u6ce8\u518c\u8868\u975e\u5e38\u6709\u7528\uff0c\u5728\u591a\u4e2a web \u9875\u9762\u6216\u540c\u4e00\u4e2a web \u9875\u9762\u7684\u591a\u4e2a\u6a21\u5757\u4e2d\u7ecf\u5e38\u9700\u8981\u5171\u4eab\u4e00\u4e2a symbol\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u4f7f\u7528\u6807\u51c6\u5b9a\u4e49\u7684 symbol"),"\uff0c\u4f8b\u5982\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Symbol.iterator"),"\u3002\u6807\u51c6\u6839\u636e\u4e00\u4e9b\u7279\u6b8a\u7528\u9014\u5b9a\u4e49\u4e86\u5c11\u8bb8\u7684\u51e0\u4e2a symbol\u3002")),Object(r.b)("p",null,"\u5982\u679c\u4f60\u5c1a\u4e0d\u786e\u5b9a symbol \u662f\u5426\u5b9e\u7528\uff0c\u6700\u540e\u8fd9\u4e00\u7ae0\u5c06\u5411\u4f60\u5c55\u793a symbol \u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u53d1\u6325\u7684\u5de8\u5927\u4f5c\u7528\uff0c\u975e\u5e38\u6709\u8da3\uff01"),Object(r.b)("h2",{id:"symbol-\u5728-es6-\u89c4\u8303\u4e2d\u7684\u5e94\u7528"},"symbol \u5728 ES6 \u89c4\u8303\u4e2d\u7684\u5e94\u7528"),Object(r.b)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0",Object(r.b)("a",{parentName:"p",href:"/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop"},"\u300a\u6df1\u5165\u6d45\u51faES6\uff08\u4e8c\uff09\uff1a\u8fed\u4ee3\u5668\u548cfor-of \u5faa\u73af\u300b"),"\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u9886\u7565\u4e86\u501f\u52a9ES6 symbol \u7684\u529b\u91cf\u907f\u514d\u4ee3\u7801\u51b2\u7a81\u7684\u65b9\u6cd5\uff0c\u5faa\u73af ",Object(r.b)("inlineCode",{parentName:"p"},"for (var item of myArray)"),"\u9996\u5148\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"myArray[Symbol.iterator]()"),"\uff0c\u5f53\u65f6\u6211\u63d0\u5230\u8fd9\u79cd\u5199\u6cd5\u662f\u4e3a\u4e86\u66ff\u4ee3",Object(r.b)("inlineCode",{parentName:"p"},"myArray.iterator()"),"\uff0c\u62e5\u6709\u66f4\u597d\u7684\u5411\u540e\u517c\u5bb9\u6027\u3002"),Object(r.b)("p",null,"\u73b0\u5728\u6211\u4eec\u77e5\u9053 symbol \u5230\u5e95\u662f\u4ec0\u4e48\u4e86\uff0c\u81ea\u7136\u5f88\u5bb9\u6613\u7406\u89e3\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u521b\u9020\u4e00\u4e2a symbol \u4ee5\u53ca\u5b83\u4e3a\u6211\u4eec\u5e26\u6765\u4ec0\u4e48\u65b0\u7279\u6027\u3002"),Object(r.b)("p",null,"ES6 \u4e2d\u8fd8\u6709\u5176\u5b83\u51e0\u5904\u4f7f\u7528\u4e86 symbol \u7684\u5730\u65b9\u3002\uff08\u8fd9\u4e9b\u7279\u6027\u5728 Firefox \u91cc\u5c1a\u672a\u5b9e\u73b0\u3002\uff09"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u4f7f instanceof \u53ef\u6269\u5c55"),"\u3002\u5728 ES6 \u4e2d\uff0c\u8868\u8fbe\u5f0f",Object(r.b)("inlineCode",{parentName:"li"},"object instanceof constructor"),"\u88ab\u6307\u5b9a\u4e3a\u6784\u9020\u51fd\u6570\u7684\u4e00\u4e2a\u65b9\u6cd5\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"constructor[Symbol.hasInstance](object)"),"\u3002\u8fd9\u610f\u5473\u7740\u5b83\u662f\u53ef\u6269\u5c55\u7684\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u6d88\u9664\u65b0\u7279\u6027\u548c\u65e7\u4ee3\u7801\u4e4b\u95f4\u7684\u51b2\u7a81"),"\u3002\u8fd9\u4e00\u70b9\u975e\u5e38\u590d\u6742\uff0c\u4f46\u662f\u6211\u4eec\u53d1\u73b0\uff0c\u6dfb\u52a0\u67d0\u4e9b ES6 \u6570\u7ec4\u65b9\u6cd5\u4f1a\u7834\u574f\u73b0\u6709\u7684 Web \u7f51\u7ad9\u3002\u5176\u5b83 Web \u6807\u51c6\u6709\u76f8\u540c\u7684\u95ee\u9898\uff1a\u5411\u6d4f\u89c8\u5668\u4e2d\u6dfb\u52a0\u65b0\u65b9\u6cd5\u4f1a\u7834\u574f\u539f\u6709\u7684\u7f51\u7ad9\u3002\u7136\u800c\uff0c\u7834\u574f\u95ee\u9898\u4e3b\u8981\u7531\u52a8\u6001\u4f5c\u7528\u57df\u5f15\u8d77\uff0c\u6240\u4ee5 ES6 \u5f15\u5165\u4e00\u4e2a\u7279\u6b8a\u7684 symbol\u2014\u2014",Object(r.b)("inlineCode",{parentName:"li"},"Symbol.unscopables"),"\uff0cWeb \u6807\u51c6\u53ef\u4ee5\u7528\u8fd9\u4e2a symbol \u6765\u963b\u6b62\u67d0\u4e9b\u65b9\u6cd5\u522b\u52a0\u5165\u5230\u52a8\u6001\u4f5c\u7528\u57df\u4e2d\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u65b0\u7684\u5b57\u7b26\u4e32\u5339\u914d\u7c7b\u578b"),"\u3002\u5728 ES5 \u4e2d\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"str.match(myObject)"),"\u4f1a\u5c1d\u8bd5\u5c06",Object(r.b)("inlineCode",{parentName:"li"},"myObject"),"\u8f6c\u6362\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\uff08RegExp\uff09\u3002\u5728 ES6 \u4e2d\uff0c\u5b83\u4f1a\u9996\u5148\u68c0\u67e5",Object(r.b)("inlineCode",{parentName:"li"},"myObject"),"\u662f\u5426\u6709\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},"myObject[Symbol.match](str)"),"\u65b9\u6cd5\u3002\u73b0\u5728\u7684\u5e93\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u7c7b\uff0c\u6240\u6709\u652f\u6301RegExp\u5bf9\u8c61\u7684\u73af\u5883\u90fd\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002")),Object(r.b)("p",null,"\u8fd9\u4e9b\u7528\u4f8b\u7684\u5e94\u7528\u8303\u56f4\u90fd\u975e\u5e38\u5c0f\uff0c\u5f88\u96be\u770b\u5230\u8fd9\u4e9b\u7279\u6027\u901a\u8fc7\u5b83\u4eec\u81ea\u8eab\u5f71\u54cd\u6211\u4eec\u6bcf\u65e5\u7684\u4ee3\u7801\uff0c\u957f\u671f\u6765\u770b\u624d\u80fd\u4f53\u73b0\u5b83\u4eec\u7684\u4ef7\u503c\u3002\u5b9e\u9645\u4e0a\uff0csymbol \u662f PHP \u548c Python \u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"p"},"__doubleUnderscores"),"\u5728 JavaScript \u8bed\u8a00\u73af\u5883\u4e2d\u7684\u6539\u8fdb\u7248\u3002\u6807\u51c6\u5c06\u501f\u52a9 symbol \u7684\u529b\u91cf\u5728\u672a\u6765\u5411\u8bed\u8a00\u4e2d\u6dfb\u52a0\u65b0\u7684\u94a9\u5b50\uff0c\u540c\u65f6\u65e0\u98ce\u9669\u5730\u5c06\u65b0\u7279\u6027\u6dfb\u52a0\u5230\u4f60\u5df2\u6709\u7684\u4ee3\u7801\u4e2d\u3002\n\u6211\u4f55\u65f6\u53ef\u4ee5\u4f7f\u7528 ES6 symbol\uff1f"),Object(r.b)("p",null,"symbol \u5728 Firefox 36 \u548c Chrome 38 \u4e2d\u5747\u5df2\u88ab\u5b9e\u73b0\u3002Firefox \u4e2d\u7684\u5b9e\u73b0\u7531\u6211\u4eb2\u81ea\u5b8c\u6210\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u7684 symbol \u50cf\u94d9\u94b9\uff08cymbals\uff09\u4e00\u6837\u884c\u4e3a\u5f02\u5e38\uff0c\u8bf7\u76f4\u63a5\u8054\u7cfb\u6211\uff01"),Object(r.b)("p",null,"\u4e3a\u4e86\u652f\u6301\u90a3\u4e9b\u5c1a\u672a\u652f\u6301\u539f\u751f ES6 symbol \u7684\u6d4f\u89c8\u5668\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a polyfill\uff0c\u4f8b\u5982 ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#ecmascript-6-symbols"},"core.js")," \u3002\u56e0\u4e3a symbol \u4e0e\u5176\u5b83\u7c7b\u578b\u4e0d\u5c3d\u76f8\u540c\uff0c\u6240\u4ee5 polyfill \u76ee\u524d\u4e0d\u662f\u5f88\u5b8c\u7f8e\u3002\u8bf7\u9605\u8bfb\u6ce8\u610f\u4e8b\u9879\u3002"),Object(r.b)("p",null,"\u4e0b\u4e00\u7bc7\u6587\u7ae0\uff0c\u6211\u4eec\u5c06\u5949\u4e0a\u4e00\u7bc7 Gast\xf3n Silva \u7684\u6587\u7ae0\uff0c\u8bb2\u89e3\u5982\u4f55\u4f7f\u7528 Babel \u548c Broccoli \u6765\u63a5\u89e6\u66f4\u591a\u7684 ES6 \u65b0\u7279\u6027\uff0c\u501f\u9274\u8fd9\u7bc7\u6587\u7ae0\u7684\u7ecf\u9a8c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5f00\u59cb ES6 \u4e4b\u65c5\u3002"),Object(r.b)("p",null,"\u63a5 \u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u6df1\u5165\u6d45\u51fa Collections\uff0c\u8fd9\u4e2a\u7279\u6027\u88ab\u671f\u5f85\u5df2\u4e45\uff0c\u6700\u7ec8\u5728 ES6 \u7248\u672c\u52a0\u5165\u5230 JavaScript \u4e2d\u3002\u6211\u4eec\u5c06\u56de\u6eaf\u5230\u7f16\u7a0b\u7684\u8d77\u6e90\uff0c\u63a2\u7d22\u4e24\u4e2a\u53e4 \u8001\u7684\u7279\u6027\uff0c\u7d27\u63a5\u7740\u8ba8\u8bba\u4e24\u4e2a\u975e\u5e38\u76f8\u4f3c\u7684\u7279\u6027\uff0c\u5b83\u4eec\u7684\u751f\u547d\u5468\u671f\u77ed\uff0c\u4f46\u662f\u5a01\u529b\u5de8\u5927\u3002\u6240\u4ee5\u8bf7\u8bb0\u5f97\u56de\u6765\uff0c\u4e00\u8d77\u63a2\u7d22\u63a5\u4e0b\u6765\u7684\u65c5\u7a0b\uff01\u5230\u65f6\u89c1\uff01"),Object(r.b)(a.a,{mdxType:"BottomCopyRight"}))}p.isMDXComponent=!0}}]);