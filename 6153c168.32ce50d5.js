(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(266)),o=r(267),i=r(269),l={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e00\uff09\uff1aES6 \u662f\u4ec0\u4e48",sidebar_label:"ES6\u662f\u4ec0\u4e48",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},p={unversionedId:"articles/es6-in-depth/0-introduction",id:"articles/es6-in-depth/0-introduction",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e00\uff09\uff1aES6 \u662f\u4ec0\u4e48",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/0-introduction.md",slug:"/articles/es6-in-depth/0-introduction",permalink:"/docs/articles/es6-in-depth/0-introduction",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/0-introduction.md",version:"current",sidebar_label:"ES6\u662f\u4ec0\u4e48",sidebar:"docs",previous:{title:"\u7f51\u7edc\u6458\u6284\u7cfb\u5217\u6587\u7ae0",permalink:"/docs/articles/README"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e8c\uff09\uff1a\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",permalink:"/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop"}},b=[{value:"ECMAScript \u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\uff1f",id:"ecmascript-\u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\uff1f",children:[]},{value:"\u65b0\u6807\u51c6",id:"\u65b0\u6807\u51c6",children:[]},{value:"\u7248\u672c\u53f7 6",id:"\u7248\u672c\u53f7-6",children:[]},{value:"\u5151\u73b0\u627f\u8bfa",id:"\u5151\u73b0\u627f\u8bfa",children:[]}],s={toc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)(o.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-an-introduction/"},"\u539f\u6587")),Object(c.b)("p",null,"\u6b22\u8fce\u6765\u5230 ES6 \u6df1\u5165\u6d45\u51fa\uff01JavaScript \u7684\u65b0\u7248\u672c\u79bb\u6211\u4eec\u8d8a\u6765\u8d8a\u8fd1\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6bcf\u5468\u4e00\u8282\u7684\u7cfb\u5217\u8bfe\u7a0b\u4e00\u8d77\u63a2\u7d22 ECMAScript 6 \u65b0\u4e16\u754c\u3002ES6 \u4e2d\u5305\u542b\u4e86\u8bb8\u591a\u65b0\u7684\u8bed\u8a00\u7279\u6027\uff0c\u5b83\u4eec\u5c06\u4f7f JS \u53d8\u5f97\u66f4\u52a0\u5f3a\u5927\uff0c\u66f4\u5bcc\u8868\u73b0\u529b\u3002\u5728\u63a5\u4e0b\u6765\u7684\u51e0\u5468\u5185\uff0c\u6211\u4eec\u5c06\u4e00\u4e00\u6df1\u5165\u4e86\u89e3\u5b83\u4eec\u3002\u4f46\u5728\u6211\u4eec\u5f00\u59cb\u8be6\u7ec6\u5b66\u4e60\u4e4b\u524d\uff0c\u6211\u8ba4\u4e3a\u5341\u5206\u6709\u5fc5\u8981\u82b1\u51e0\u5206\u949f\u8bb2\u89e3\u4e00\u4e0b ES6 \u5230\u5e95\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u4f60\u53ef\u4ee5\u4ece\u4e2d\u5b66\u5230\u4ec0\u4e48\uff01"),Object(c.b)("h2",{id:"ecmascript-\u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\uff1f"},"ECMAScript \u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\uff1f"),Object(c.b)("p",null,"\u7f16\u7a0b\u8bed\u8a00 JavaScript \u662f ECMAScript \u7684\u5b9e\u73b0\u548c\u6269\u5c55\uff0c\u7531 ECMA\uff08\u4e00\u4e2a\u7c7b\u4f3c W3C \u7684\u6807\u51c6\u7ec4\u7ec7\uff09\u53c2\u4e0e\u8fdb\u884c\u6807\u51c6\u5316\u3002ECMAScript \u5b9a\u4e49\u4e86\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar"},"\u8bed\u8a00\u8bed\u6cd5")," \u2013 \u8bed\u6cd5\u89e3\u6790\u89c4\u5219\u3001\u5173\u952e\u5b57\u3001\u8bed\u53e5\u3001\u58f0\u660e\u3001\u8fd0\u7b97\u7b26\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"},"\u7c7b\u578b")," \u2013 \u5e03\u5c14\u578b\u3001\u6570\u5b57\u3001\u5b57\u7b26\u4e32\u3001\u5bf9\u8c61\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},"\u539f\u578b\u548c\u7ee7\u627f")),Object(c.b)("li",{parentName:"ul"},"\u5185\u5efa\u5bf9\u8c61\u548c\u51fd\u6570\u7684",Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"\u6807\u51c6\u5e93")," \u2013 ",Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON")," \u3001 ",Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"},"Math")," \u3001",Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"\u6570\u7ec4\u65b9\u6cd5"),"\u3001",Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"\u5bf9\u8c61\u81ea\u7701\u65b9\u6cd5"),"\u7b49\u3002")),Object(c.b)("p",null,"ECMAScript \u6807\u51c6\u4e0d\u5b9a\u4e49 HTML \u6216 CSS \u7684\u76f8\u5173\u529f\u80fd\uff0c\u4e5f\u4e0d\u5b9a\u4e49\u7c7b\u4f3c DOM\uff08\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff09\u7684 ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web API")," \uff0c\u8fd9\u4e9b\u90fd\u5728\u72ec\u7acb\u7684\u6807\u51c6\u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002ECMAScript \u6db5\u76d6\u4e86\u5404\u79cd\u73af\u5883\u4e2d JS \u7684\u4f7f\u7528\u573a\u666f\uff0c\u65e0\u8bba\u662f\u6d4f\u89c8\u5668\u73af\u5883\u8fd8\u662f\u7c7b\u4f3c node.js \u7684\u975e\u6d4f\u89c8\u5668\u73af\u5883\u3002"),Object(c.b)("h2",{id:"\u65b0\u6807\u51c6"},"\u65b0\u6807\u51c6"),Object(c.b)("p",null,"\u4e0a\u5468\uff0cECMAScript \u8bed\u8a00\u89c4\u8303\u7b2c 6 \u7248\u6700\u7ec8\u8349\u6848\u63d0\u8bf7 Ecma \u5927\u4f1a\u5ba1\u67e5\uff0c\u8fd9\u610f\u5473\u7740\u4ec0\u4e48\u5462\uff1f"),Object(c.b)("p",null,"\u8fd9\u610f\u5473\u7740\u5728\u4eca\u5e74\u590f\u5929\uff0c\u6211\u4eec\u5c06\u8fce\u6765\u6700\u65b0\u7684JavaScript\u6838\u5fc3\u8bed\u8a00\u6807\u51c6\u3002"),Object(c.b)("p",null,"\u8fd9\u65e0\u7591\u662f\u4e00\u5219\u91cd\u78c5\u65b0\u95fb\u3002\u65e9\u5728 2009 \u5e74\uff0c\u4e0a\u4e00\u7248 ES5 \u521a\u521a\u53d1\u5e03\uff0c\u81ea\u90a3\u65f6\u8d77\uff0cES \u6807\u51c6\u59d4\u5458\u4f1a\u4e00\u76f4\u5728\u7d27\u9523\u5bc6\u9f13\u5730\u7b79\u5907\u65b0\u7684 JS \u8bed\u8a00\u6807\u51c6\u2014\u2014ES6\u3002"),Object(c.b)("p",null,"ES6 \u662f\u4e00\u6b21\u91cd\u5927\u7684\u7248\u672c\u5347\u7ea7\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c\u7531\u4e8e ES6 \u79c9\u627f\u7740\u6700\u5927\u5316\u517c\u5bb9\u5df2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4f60\u8fc7\u53bb\u7f16\u5199\u7684 JS \u4ee3\u7801\u5c06\u7ee7\u7eed\u6b63\u5e38\u8fd0\u884c\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8bb8\u591a\u6d4f\u89c8\u5668\u5df2\u7ecf\u652f\u6301\u90e8\u5206 ES6 \u7279\u6027\uff0c\u5e76\u5c06\u7ee7\u7eed\u52aa\u529b\u5b9e\u73b0\u5176\u4f59\u7279\u6027\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5728\u4e00\u4e9b\u5df2\u7ecf\u5b9e\u73b0\u90e8\u5206\u7279\u6027\u7684\u6d4f\u89c8\u5668\u4e2d\uff0c\u4f60\u7684 JS \u4ee3\u7801\u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002\u5982\u679c\u5230\u76ee\u524d\u4e3a\u6b62\u4f60\u5c1a\u672a\u9047\u5230\u4efb\u4f55\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u90a3\u4e48\u4f60\u5f88\u6709\u53ef\u80fd\u5c06\u4e0d\u4f1a\u9047\u5230\u8fd9\u4e9b\u95ee\u9898\uff0c\u6d4f\u89c8\u5668\u6b63\u98de\u901f\u5b9e\u73b0\u5404\u79cd\u65b0\u7279\u6027\u3002"),Object(c.b)("h2",{id:"\u7248\u672c\u53f7-6"},"\u7248\u672c\u53f7 6"),Object(c.b)("p",null,"ECMAScript \u6807\u51c6\u7684\u5386\u53f2\u7248\u672c\u5206\u522b\u662f 1\u30012\u30013\u30015\u3002"),Object(c.b)("p",null,"\u90a3\u4e48\u4e3a\u4ec0\u4e48\u6ca1\u6709\u7b2c 4 \u7248\uff1f\u5176\u5b9e\uff0c\u5728\u8fc7\u53bb\u786e\u5b9e\u66fe\u8ba1\u5212\u53d1\u5e03\u63d0\u51fa\u5de8\u91cf\u65b0\u7279\u6027\u7684\u7b2c 4 \u7248\uff0c\u4f46\u6700\u7ec8\u5374\u56e0\u60f3\u6cd5\u592a\u8fc7\u6fc0\u8fdb\u800c\u60e8\u906d\u5e9f\u9664\uff08\u8fd9\u4e00\u7248\u6807\u51c6\u4e2d\u66fe\u7ecf\u6709\u4e00\u4e2a\u6781\u5176\u590d\u6742\u7684\u652f\u6301\u6cdb\u578b\u548c\u7c7b\u578b\u63a8\u65ad\u7684\u5185\u5efa\u9759\u6001\u7c7b\u578b\u7cfb\u7edf\uff09\u3002"),Object(c.b)("p",null,"ES4 \u9971\u53d7\u4e89\u8bae\uff0c\u5f53\u6807\u51c6\u59d4\u5458\u4f1a\u6700\u7ec8\u505c\u6b62\u5f00\u53d1 ES4 \u65f6\uff0c\u5176\u6210\u5458\u540c\u610f\u53d1\u5e03\u4e00\u4e2a\u76f8\u5bf9\u8c26\u548c\u7684 ES5 \u7248\u672c\uff0c\u968f\u540e\u7ee7\u7eed\u5236\u5b9a\u4e00\u4e9b\u66f4\u5177\u5b9e\u8d28\u6027\u7684\u65b0\u7279\u6027\u3002\u8fd9\u4e00\u660e\u786e\u7684\u534f\u5546\u534f\u8bae\u6700\u7ec8\u547d\u540d\u4e3a\u201cHarmony\u201d\uff0c\u56e0\u6b64\uff0cES5 \u89c4\u8303\u4e2d\u5305\u542b\u8fd9\u6837\u4e24\u53e5\u8bdd\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"ECMAScript \u662f\u4e00\u95e8\u5145\u6ee1\u6d3b\u529b\u7684\u8bed\u8a00\uff0c\u5e76\u5728\u4e0d\u65ad\u8fdb\u5316\u4e2d\u3002\n\u672a\u6765\u7248\u672c\u7684\u89c4\u8303\u4e2d\u5c06\u6301\u7eed\u8fdb\u884c\u91cd\u8981\u7684\u6280\u672f\u6539\u8fdb\u3002")),Object(c.b)("p",null,"\u8fd9\u4e00\u58f0\u660e\u8bb8\u4e0b\u4e86\u4e00\u4e2a\u672a\u6765\u7684\u627f\u8bfa\u3002"),Object(c.b)("h2",{id:"\u5151\u73b0\u627f\u8bfa"},"\u5151\u73b0\u627f\u8bfa"),Object(c.b)("p",null,"2009 \u5e74\u53d1\u5e03\u7684\u6539\u8fdb\u7248\u672c ES5\uff0c\u5f15\u5165\u4e86 ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"},"Object.create()")," \u3001 ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"Object.defineProperty()"),"\u3001 ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get"},"getters")," \u548c ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set"},"setters")," \u3001\u4e25\u683c\u6a21\u5f0f\u4ee5\u53ca JSON \u5bf9\u8c61\u3002\u6211\u5df2\u7ecf\u4f7f\u7528\u8fc7\u6240\u6709\u8fd9\u4e9b\u65b0\u7279\u6027\uff0c\u5e76\u4e14\u6211\u975e\u5e38\u559c\u6b22 ES5 \u505a\u51fa\u7684\u6539\u8fdb\u3002\u4f46\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u4e9b\u6539\u8fdb\u5e76\u6ca1\u6709\u6df1\u5165\u5f71\u54cd\u6211\u7f16\u5199 JS \u4ee3\u7801\u7684\u65b9\u5f0f\uff0c\u5bf9\u6211\u6765\u8bf4\u6700\u5927\u7684\u9769\u65b0\u5927\u6982\u5c31\u662f\u65b0\u7684\u6570\u7ec4\u65b9\u6cd5\uff1a",Object(c.b)("inlineCode",{parentName:"p"},".map()")," \u3001",Object(c.b)("inlineCode",{parentName:"p"},".filter()")," \u8fd9\u4e9b\u3002"),Object(c.b)("p",null,"\u4f46\u662f\uff0cES6 \u5e76\u975e\u5982\u6b64\uff01\u7ecf\u8fc7\u6301\u7eed\u51e0\u5e74\u7684\u78e8\u783a\uff0c\u5b83\u5df2\u6210\u4e3aJS \u6709\u53f2\u4ee5\u6765\u6700\u5b9e\u8d28\u7684\u5347\u7ea7\uff0c\u65b0\u7684\u8bed\u8a00\u548c\u5e93\u7279\u6027\u5c31\u50cf\u65e0\u4e3b\u4e4b\u5b9d\uff0c\u7b49\u5f85\u6709\u8bc6\u4e4b\u58eb\u7684\u53d1\u6398\u3002\u65b0\u7684\u8bed\u8a00\u7279\u6027\u6db5\u76d6\u8303\u56f4\u751a\u5e7f\uff0c\u5c0f\u5230\u53d7\u6b22\u8fce\u7684\u8bed\u6cd5\u7cd6\uff0c\u4f8b\u5982\u7bad\u5934\u51fd\u6570\uff08arrow functions\uff09\u548c\u7b80\u5355\u7684\u5b57\u7b26\u4e32\u63d2\u503c\uff08string interpolation\uff09\uff0c\u5927\u5230\u70e7\u8111\u7684\u65b0\u6982\u5ff5\uff0c\u4f8b\u5982\u4ee3\u7406\uff08proxies\uff09\u548c\u751f\u6210\u5668\uff08generators\uff09\u3002"),Object(c.b)("p",null,"ES6 \u5c06\u5f7b\u5e95\u6539\u53d8\u4f60\u7f16\u5199 JS \u4ee3\u7801\u7684\u65b9\u5f0f\uff01"),Object(c.b)("p",null,"\u8fd9\u4e00\u7cfb\u5217\u65e8\u5728\u5411\u4f60\u5c55\u793a\u5982\u4f55\u4ed4\u7ec6\u5ba1\u9605 ES6 \u63d0\u4f9b\u7ed9 JavaScript \u7a0b\u5e8f\u5458\u7684\u8fd9\u4e9b\u65b0\u7279\u6027\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u5c06\u4ece\u4e00\u4e2a\u7ecf\u5178\u7684\u201c\u9057\u6f0f\u7279\u6027\u201d\u8bf4\u8d77\uff0c\u5341\u5e74\u6765\u6211\u4e00\u76f4\u671f\u5f85\u5728 JavaScript \u4e2d\u770b\u5230\u7684\u5b83\u3002\u6240\u4ee5\u4ece\u73b0\u5728\u8d77\u5c31\u52a0\u5165\u6211\u4eec\u5427\uff0c\u4e00\u8d77\u9886\u7565\u4e00\u4e0b ES6 \u8fed\u4ee3\u5668\uff08iterators\uff09\u548c\u65b0\u7684 for-of \u5faa\u73af\uff01"),Object(c.b)(i.a,{mdxType:"BottomCopyRight"}))}u.isMDXComponent=!0},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},267:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(4),a=r(0),c=r.n(a),o=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link?c.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):c.a.createElement("i",null,this.props.author);return c.a.createElement("section",null,c.a.createElement("b",null,"\u672c\u6587\u4f5c\u8005\u4e3a ",e,", \u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",c.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),c.a.createElement("hr",null))},t}(c.a.Component);r(268);c.a.Component;function i(e){if("string"!=typeof e.href)return c.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");const t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return c.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return c.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);const[,r,n,a,o]=t,i=`/blog/${r}/${n}/${a}/${o}`;return c.a.createElement("a",{href:i,target:e.target,"data-component":"BlogLink"},e.children)}},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),a=r.n(n);class c extends a.a.Component{render(){return a.a.createElement("div",null,"\u611f\u8c22",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}}}]);