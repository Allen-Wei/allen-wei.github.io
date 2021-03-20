(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var l=n(3),a=n(7),i=(n(0),n(266)),r=n(267),b=n(269),c={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\uff09\uff1a\u96c6\u5408",sidebar_label:"\u96c6\u5408",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},p={unversionedId:"articles/es6-in-depth/9-collections",id:"articles/es6-in-depth/9-collections",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\uff09\uff1a\u96c6\u5408",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/9-collections.md",slug:"/articles/es6-in-depth/9-collections",permalink:"/docs/articles/es6-in-depth/9-collections",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/9-collections.md",version:"current",sidebar_label:"\u96c6\u5408",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e5d\uff09\uff1a\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",permalink:"/docs/articles/es6-in-depth/8-babel-and-broccoli"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e00\uff09\uff1a\u751f\u6210\u5668 Generators\uff0c\u7eed\u7bc7",permalink:"/docs/articles/es6-in-depth/10-generators-continued"}},o=[],u={toc:o};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-collections"},"\u539f\u6587")),Object(i.b)("p",null,"\u524d\u6bb5\u65f6\u95f4\uff0c\u5b98\u65b9\u540d\u4e3a\u201cECMA-262\uff0c\u7b2c\u516d\u7248\uff0cECMAScript 2015 \u8bed\u8a00\u89c4\u8303\u201d\u7684 ES6 \u89c4\u8303\u7ec8\u4e8e\u7ed3\u675f\u4e86\u6700\u540e\u7684\u5f81\u9014\uff0c\u6b63\u5f0f\u88ab\u8ba4\u53ef\u4e3a\u65b0\u7684 ECMA \u6807\u51c6\u3002\u8ba9\u6211\u4eec\u795d\u8d3a TC39 \u7b49\u6240\u6709\u4f5c\u51fa\u8d21\u732e\u4eba\u4eec\uff0cES6 \u7ec8\u4e8e\u5b9a\u7a3f\u4e86\uff01"),Object(i.b)("p",null,"\u66f4\u597d\u7684\u6d88\u606f\u662f\uff0c\u4e0b\u6b21\u66f4\u65b0\u4e0d\u9700\u8981\u518d\u7b49\u516d\u5e74\u4e86\u3002\u59d4\u5458\u4f1a\u73b0\u5728\u52aa\u529b\u8981\u6c42\uff0c\u5927\u7ea6\u6bcf 12 \u4e2a\u6708\u5b8c\u6210\u4e00\u4e2a\u65b0\u7684\u7248\u672c\u3002\u7b2c\u4e03\u7248\u63d0\u8bae\u5df2\u7ecf\u5f00\u59cb\u3002"),Object(i.b)("p",null,"\u73b0\u5728\u662f\u65f6\u5019\u5e86\u795d\u5e86\u795d\u4e86\uff0c\u8ba9\u6211\u4eec\u6765\u8ba8\u8bba\u4e00\u4e9b\u5f88\u4e45\u4ee5\u6765\u6211\u4e00\u76f4\u5e0c\u671b\u5728JS \u91cc\u770b\u5230\u7684\u4e1c\u897f\u2014\u2014\u5f53\u7136\uff0c\u5b83\u4eec\u4ee5\u540e\u4ecd\u7136\u6709\u6539\u8fdb\u7684\u4f59\u5730\u3002"),Object(i.b)("p",null,"JS \u548c\u5176\u5b83\u7f16\u7a0b\u8bed\u8a00\u6709\u4e9b\u7279\u6b8a\u7684\u5dee\u522b\uff0c\u6709\u65f6\uff0c\u5b83\u4eec\u4f1a\u4ee5\u4ee4\u4eba\u60ca\u5947\u7684\u65b9\u5f0f\u5f71\u54cd\u5230\u8fd9\u95e8\u8bed\u8a00\u7684\u53d1\u5c55\u3002"),Object(i.b)("p",null,"ES6 \u6a21\u5757\u5c31\u662f\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u3002\u5176\u5b83\u8bed\u8a00\u7684\u6a21\u5757\u5316\u7cfb\u7edf\u4e2d\uff0cRacket \u505a\u5f97\u7279\u522b\u68d2\uff0cPython \u4e5f\u5f88\u597d\u3002\u90a3\u4e48\uff0c\u5f53\u6807\u51c6\u59d4\u5458\u4f1a\u51b3\u5b9a\u5728 ES6 \u4e2d\u589e\u52a0\u6a21\u5757\u65f6\uff0c\u4e3a\u4ec0\u4e48\u4ed6\u4eec\u4e0d\u76f4\u63a5\u4eff\u7167\u4e00\u5957\u5df2\u7ecf\u5b58\u5728\u7684\u7cfb\u7edf\u5462\uff1f"),Object(i.b)("p",null,"\u56e0\u4e3a JS \u662f\u4e0d\u540c\u7684\uff0c\u56e0\u4e3a\u5b83\u8981\u5728\u6d4f\u89c8\u5668\u91cc\u8fd0\u884c\u3002\u8bfb\u53d6\u548c\u5199\u5165\u90fd\u53ef\u80fd\u82b1\u8d39\u8f83\u957f\u65f6\u95f4\uff0c\u6240\u4ee5\uff0cJS \u9700\u8981\u4e00\u5957\u652f\u6301\u5f02\u6b65\u52a0\u8f7d\u4ee3\u7801\u7684\u6a21\u5757\u5316\u7cfb\u7edf\uff0c\u540c\u65f6\uff0c\u4e5f\u4e0d\u80fd\u5141\u8bb8\u5728\u6587\u4ef6\u5939\u4e2d\u6328\u4e2a\u641c\u7d22\uff0c\u7167\u642c\u5df2\u6709\u7684\u7cfb\u7edf\u5e76\u4e0d\u80fd\u89e3\u51b3\u95ee\u9898\u3002ES6 \u7684\u6a21\u5757\u5316\u7cfb\u7edf\u9700\u8981\u4e00\u4e9b\u65b0\u6280\u672f\u3002"),Object(i.b)("p",null,"\u8ba8\u8bba\u8fd9\u4e9b\u95ee\u9898\u5bf9\u6700\u7ec8\u8bbe\u8ba1\u7684\u5f71\u54cd\uff0c\u4f1a\u662f\u4e2a\u6709\u8da3\u7684\u6545\u4e8b\uff0c\u4e0d\u8fc7\u6211\u4eec\u4eca\u5929\u8981\u8ba8\u8bba\u7684\u5e76\u4e0d\u662f\u6a21\u5757\u3002"),Object(i.b)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f\u5173\u4e8e ES6 \u6807\u51c6\u4e2d\u6240\u8c13\u201c\u952e\u503c\u96c6\u5408\u201d\u7684\uff1aSet\uff0cMap\uff0cWeakSet\u548cWeakMap\u3002\u5b83\u4eec\u5728\u5927\u591a\u6570\u65b9\u9762\u548c\u5176\u5b83\u8bed\u8a00\u4e2d\u7684\u54c8\u5e0c\u8868\u4e00\u6837\uff0c\u4e0d\u8fc7\uff0c\u6b63\u56e0\u4e3aJS \u662f\u4e0d\u540c\u7684\uff0c\u6807\u51c6\u59d4\u5458\u4f1a\u5728\u5176\u4e2d\u505a\u4e86\u4e9b\u6709\u8da3\u7684\u6743\u8861\u4e0e\u8c03\u6574\u3002"),Object(i.b)("p",null,"\u719f\u6089JS\u4e00\u5b9a\u4f1a\u77e5\u9053\uff0c\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u79cd\u7c7b\u4f3c\u54c8\u5e0c\u8868\u7684\u4e1c\u897f\uff1a\u5bf9\u8c61\uff08 Object\uff09\u3002"),Object(i.b)("p",null,"\u4e00\u4e2a\u666e\u901a\u7684\u5bf9\u8c61\u6bd5\u7adf\u5c31\u53ea\u662f\u4e00\u4e2a\u5f00\u653e\u7684\u952e\u503c\u5bf9\u96c6\u5408\u3002\u4f60\u53ef\u4ee5\u8fdb\u884c\u83b7\u53d6\u3001\u8bbe\u7f6e\u3001\u5220\u9664\u3001\u904d\u5386\u2014\u2014\u4efb\u4f55\u4e00\u4e2a\u54c8\u5e0c\u8868\u652f\u6301\u7684\u64cd\u4f5c\u3002\u6240\u4ee5\u6211\u4eec\u5230\u5e95\u4e3a\u4ec0\u4e48\u8981\u589e\u52a0\u65b0\u7684\u7279\u6027\uff1f"),Object(i.b)("p",null,"\u597d\u5427\uff0c\u5927\u591a\u6570\u7a0b\u5e8f\u7b80\u5355\u5730\u7528\u5bf9\u8c61\u6765\u5b58\u50a8\u952e\u503c\u5bf9\u5c31\u591f\u4e86\uff0c\u5bf9\u5b83\u4eec\u800c\u8a00\uff0c\u6ca1\u4ec0\u4e48\u5fc5\u8981\u6362\u7528",Object(i.b)("inlineCode",{parentName:"p"},"Map"),"\u6216",Object(i.b)("inlineCode",{parentName:"p"},"Set"),"\u3002\u4f46\u662f\uff0c\u76f4\u63a5\u8fd9\u6837\u4f7f\u7528\u5bf9\u8c61\u6709\u4e00\u4e9b\u5e7f\u4e3a\u4eba\u77e5\u7684\u95ee\u9898\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f5c\u4e3a\u67e5\u8be2\u8868\u4f7f\u7528\u7684\u5bf9\u8c61\uff0c\u4e0d\u80fd\u65e2\u652f\u6301\u65b9\u6cd5\u53c8\u4fdd\u8bc1\u907f\u514d\u51b2\u7a81\u3002"),Object(i.b)("li",{parentName:"ul"},"\u56e0\u800c\uff0c\u8981\u4e48\u5f97\u7528",Object(i.b)("inlineCode",{parentName:"li"},"Object.create(null)"),"\u800c\u975e\u76f4\u63a5\u5199",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"\uff0c\u8981\u4e48\u5f97\u5c0f\u5fc3\u5730\u907f\u514d\u628a",Object(i.b)("inlineCode",{parentName:"li"},"Object.prototype.toString"),"\u4e4b\u7c7b\u7684\u5185\u7f6e\u65b9\u6cd5\u540d\u4f5c\u4e3a\u952e\u540d\u6765\u5b58\u50a8\u6570\u636e\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u952e\u540d\u603b\u662f\u5b57\u7b26\u4e32\uff08\u5f53\u7136\uff0cES6 \u4e2d\u4e5f\u53ef\u4ee5\u662f",Object(i.b)("inlineCode",{parentName:"li"},"Symbol"),"\uff09\u800c\u4e0d\u80fd\u662f\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002"),Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709\u6709\u6548\u7684\u83b7\u77e5\u5c5e\u6027\u4e2a\u6570\u7684\u65b9\u6cd5\u3002")),Object(i.b)("p",null,"ES6 \u4e2d\u53c8\u51fa\u73b0\u4e86\u65b0\u95ee\u9898\uff1a\u7eaf\u7cb9\u7684\u5bf9\u8c61\u4e0d\u53ef\u904d\u5386\uff0c\u4e5f\u5c31\u662f\uff0c\u5b83\u4eec\u4e0d\u80fd\u914d\u5408 for-of\u5faa\u73af\u6216",Object(i.b)("inlineCode",{parentName:"p"},"..."),"\u64cd\u4f5c\u7b26\u7b49\u8bed\u6cd5\u3002"),Object(i.b)("p",null,"\u55ef\uff0c\u786e\u5b9e\u5f88\u591a\u7a0b\u5e8f\u91cc\u8fd9\u4e9b\u95ee\u9898\u90fd\u4e0d\u91cd\u8981\uff0c\u76f4\u63a5\u7528\u7eaf\u5bf9\u8c61\u4ecd\u7136\u662f\u6b63\u786e\u7684\u9009\u62e9\u3002Map\u548cSet\u662f\u4e3a\u5176\u5b83\u573a\u5408\u51c6\u5907\u7684\u3002"),Object(i.b)("p",null,"\u8fd9\u4e9b ES6 \u4e2d\u7684\u96c6\u5408\u672c\u6765\u5c31\u662f\u4e3a\u907f\u514d\u7528\u6237\u6570\u636e\u4e0e\u5185\u7f6e\u65b9\u6cd5\u51b2\u7a81\u800c\u8bbe\u8ba1\u7684\uff0c\u6240\u4ee5\u5b83\u4eec\u4e0d\u4f1a\u628a\u6570\u636e\u4f5c\u4e3a\u5c5e\u6027\u66b4\u9732\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"obj.key"),"\u6216",Object(i.b)("inlineCode",{parentName:"p"},"obj[key]"),"\u4e0d\u80fd\u518d\u7528\u6765\u8bbf\u95ee\u6570\u636e\u4e86\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f",Object(i.b)("inlineCode",{parentName:"p"},"map.get(key)"),"\u3002\u540c\u65f6\uff0c\u4e0d\u50cf\u5c5e\u6027\uff0c\u54c8\u5e0c\u8868\u7684\u952e\u503c\u4e0d\u80fd\u901a\u8fc7\u539f\u578b\u94fe\u6765\u7ee7\u627f\u4e86\u3002"),Object(i.b)("p",null,"\u597d\u6d88\u606f\u662f\uff0c\u4e0d\u50cf\u7eaf\u7cb9\u7684Object\uff0cMap\u548cSet\u6709\u81ea\u5df1\u7684\u65b9\u6cd5\u4e86\uff0c\u5e76\u4e14\uff0c\u66f4\u591a\u6807\u51c6\u6216\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u53ef\u4ee5\u65e0\u9700\u62c5\u5fc3\u51b2\u7a81\u5730\u52a0\u5165\u3002"),Object(i.b)("p",null,"\u4e00\u4e2aSet\u662f\u4e00\u7fa4\u503c\u7684\u96c6\u5408\u3002\u5b83\u662f\u53ef\u53d8\u7684\uff0c\u80fd\u591f\u589e\u5220\u5143\u7d20\u3002\u73b0\u5728\uff0c\u8fd8\u6ca1\u8bf4\u5230\u5b83\u548c\u6570\u7ec4\u7684\u533a\u522b\uff0c\u4e0d\u8fc7\u5b83\u4eec\u7684\u533a\u522b\u5c31\u548c\u76f8\u4f3c\u70b9\u4e00\u6837\u591a\u3002"),Object(i.b)("p",null,"\u9996\u5148\uff0c\u548c\u6570\u7ec4\u4e0d\u540c\uff0c\u4e00\u4e2aSet\u4e0d\u4f1a\u5305\u542b\u76f8\u540c\u5143\u7d20\u3002\u8bd5\u56fe\u518d\u6b21\u52a0\u5165\u4e00\u4e2a\u5df2\u6709\u5143\u7d20\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6548\u679c\u3002"),Object(i.b)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u91cc\u5143\u7d20\u90fd\u662f\u5b57\u7b26\u4e32\uff0c\u4e0d\u8fc7Set\u662f\u53ef\u4ee5\u5305\u542b JS \u4e2d\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u7684\u3002\u540c\u6837\uff0c\u91cd\u590d\u52a0\u5165\u5df2\u6709\u5143\u7d20\u4e0d\u4f1a\u4ea7\u751f\u6548\u679c\u3002"),Object(i.b)("p",null,"\u5176\u6b21\uff0cSet\u7684\u6570\u636e\u5b58\u50a8\u7ed3\u6784\u4e13\u95e8\u4e3a\u4e00\u79cd\u64cd\u4f5c\u4f5c\u4e86\u901f\u5ea6\u4f18\u5316\uff1a\u5305\u542b\u6027\u68c0\u6d4b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'> // \u68c0\u67e5 "zythum" \u662f\u4e0d\u662f\u4e00\u4e2a\u5355\u8bcd\n> arrayOfWords.indexOf("zythum") !== -1  // \u6162\n    true\n> setOfWords.has("zythum")               // \u5feb\n    true\n')),Object(i.b)("p",null,"Set\u4e0d\u80fd\u63d0\u4f9b\u7684\u5219\u662f\u7d22\u5f15\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'> arrayOfWords[15000]\n    "anapanapa"\n> setOfWords[15000]   // Set \u4e0d\u652f\u6301\u7d22\u5f15\n    undefined\n')),Object(i.b)("p",null,"\u4ee5\u4e0b\u662fSet\u652f\u6301\u7684\u6240\u6709\u64cd\u4f5c\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new Set"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u3001\u7a7a\u7684Set\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new Set(iterable)"),"\uff1a\u4ece\u4efb\u4f55\u53ef\u904d\u5386\u6570\u636e\u4e2d\u63d0\u53d6\u5143\u7d20\uff0c\u6784\u9020\u51fa\u4e00\u4e2a\u65b0\u7684\u96c6\u5408\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.size"),"\uff1a\u83b7\u53d6\u96c6\u5408\u7684\u5927\u5c0f\uff0c\u5373\u5176\u4e2d\u5143\u7d20\u7684\u4e2a\u6570\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.has(value)"),"\uff1a\u5224\u5b9a\u96c6\u5408\u4e2d\u662f\u5426\u542b\u6709\u6307\u5b9a\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.add(value)"),"\uff1a\u6dfb\u52a0\u5143\u7d20\u3002\u5982\u679c\u4e0e\u5df2\u6709\u91cd\u590d\uff0c\u5219\u4e0d\u4ea7\u751f\u6548\u679c\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.delete(value)"),"\uff1a\u5220\u9664\u5143\u7d20\u3002\u5982\u679c\u5e76\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u4ea7\u751f\u6548\u679c\u3002",Object(i.b)("inlineCode",{parentName:"li"},".add()"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},".delete()"),"\u90fd\u4f1a\u8fd4\u56de\u96c6\u5408\u81ea\u8eab\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u7528\u94fe\u5f0f\u8bed\u6cd5\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set[Symbol.iterator]()"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u904d\u5386\u6574\u4e2a\u96c6\u5408\u7684\u8fed\u4ee3\u5668\u3002\u4e00\u822c\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u76f4\u63a5\u8c03\u7528\uff0c\u56e0\u4e3a\u5b9e\u9645\u4e0a\u5c31\u662f\u5b83\u4f7f\u96c6\u5408\u80fd\u591f\u88ab\u904d\u5386\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5199",Object(i.b)("inlineCode",{parentName:"li"},"for (v of set) {...}"),"\u7b49\u7b49\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.forEach(f)"),"\uff1a\u76f4\u63a5\u7528\u4ee3\u7801\u6765\u89e3\u91ca\u597d\u4e86\uff0c\u5b83\u5c31\u50cf\u662f",Object(i.b)("inlineCode",{parentName:"li"},"for (let value of set) { f(value, value, set); }"),"\u7684\u7b80\u5199\uff0c\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7684",Object(i.b)("inlineCode",{parentName:"li"},".forEach()"),"\u65b9\u6cd5\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.clear()"),"\uff1a\u6e05\u7a7a\u96c6\u5408\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set.keys()"),"\u3001s",Object(i.b)("inlineCode",{parentName:"li"},"et.values()"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"set.entries()"),"\u8fd4\u56de\u5404\u79cd\u8fed\u4ee3\u5668\uff0c\u5b83\u4eec\u662f\u4e3a\u4e86\u517c\u5bb9Map\u800c\u63d0\u4f9b\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5f85\u4f1a\u513f\u518d\u6765\u770b\u3002")),Object(i.b)("p",null,"\u5728\u8fd9\u4e9b\u7279\u6027\u4e2d\uff0c\u8d1f\u8d23\u6784\u9020\u96c6\u5408\u7684",Object(i.b)("inlineCode",{parentName:"p"},"new Set(iterable)"),"\u662f\u552f\u4e00\u4e00\u4e2a\u5728\u6574\u4e2a\u6570\u636e\u7ed3\u6784\u5c42\u9762\u4e0a\u64cd\u4f5c\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u628a\u6570\u7ec4\u8f6c\u5316\u4e3a\u96c6\u5408\uff0c\u5728\u4e00\u884c\u4ee3\u7801\u5185\u53bb\u91cd\uff1b\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u751f\u6210\u5668\uff0c\u51fd\u6570\u4f1a\u9010\u4e2a\u904d\u5386\u5b83\uff0c\u5e76\u628a\u751f\u6210\u7684\u503c\u6536\u5f55\u4e3a\u4e00\u4e2a\u96c6\u5408\uff1b\u4e5f\u53ef\u4ee5\u7528\u6765\u590d\u5236\u4e00\u4e2a\u5df2\u6709\u7684\u96c6\u5408\u3002"),Object(i.b)("p",null,"\u4e0a\u5468\u6211\u7b54\u5e94\u8fc7\u8981\u7ed9 ES6 \u4e2d\u7684\u65b0\u96c6\u5408\u4eec\u6311\u6311\u523a\uff0c\u5c31\u4ece\u8fd9\u91cc\u5f00\u59cb\u5427\u3002\u5c3d\u7ba1Set\u5df2\u7ecf\u5f88\u4e0d\u9519\u4e86\uff0c\u8fd8\u662f\u6709\u4e9b\u88ab\u9057\u6f0f\u7684\u65b9\u6cd5\uff0c\u8bf4\u4e0d\u5b9a\u8865\u5145\u5230\u5c06\u6765\u67d0\u4e2a\u6807\u51c6\u91cc\u4f1a\u633a\u4e0d\u9519\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76ee\u524d\u6570\u7ec4\u5df2\u7ecf\u6709\u7684\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\uff0c\u6bd4\u5982",Object(i.b)("inlineCode",{parentName:"li"},".map()"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},".filter()"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},".some()"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},".every()"),"\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u6539\u53d8\u539f\u503c\u7684\u4ea4\u5e76\u64cd\u4f5c\uff0c\u6bd4\u5982",Object(i.b)("inlineCode",{parentName:"li"},"set1.union(set2)"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"set1.intersection(set2)"),"\u3002"),Object(i.b)("li",{parentName:"ul"},"\u6279\u91cf\u64cd\u4f5c\uff0c\u5982",Object(i.b)("inlineCode",{parentName:"li"},"set.addAll(iterable)"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"set.removeAll(iterable)"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"set.hasAll(iterable)"),"\u3002")),Object(i.b)("p",null,"\u597d\u6d88\u606f\u662f\uff0c\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u7528 ES6 \u5df2\u7ecf\u63d0\u4f9b\u4e86\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u3002"),Object(i.b)("p",null,"\u4e00\u4e2aMap\u5bf9\u8c61\u7531\u82e5\u5e72\u952e\u503c\u5bf9\u7ec4\u6210\uff0c\u652f\u6301\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new Map"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u3001\u7a7a\u7684Map\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new Map(pairs)"),"\uff1a\u6839\u636e\u6240\u542b\u5143\u7d20\u5f62\u5982",Object(i.b)("inlineCode",{parentName:"li"},"[key, value]"),"\u7684\u6570\u7ec4",Object(i.b)("inlineCode",{parentName:"li"},"pairs"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Map\u3002\u8fd9\u91cc\u63d0\u4f9b\u7684",Object(i.b)("inlineCode",{parentName:"li"},"pairs"),"\u53ef\u4ee5\u662f\u4e00\u4e2a\u5df2\u6709\u7684Map \u5bf9\u8c61\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u7531\u4e8c\u5143\u6570\u7ec4\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u9010\u4e2a\u751f\u6210\u4e8c\u5143\u6570\u7ec4\u7684\u4e00\u4e2a\u751f\u6210\u5668\uff0c\u7b49\u7b49\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.size"),"\uff1a\u8fd4\u56deMap\u4e2d\u9879\u76ee\u7684\u4e2a\u6570\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.has(key)"),"\uff1a\u6d4b\u8bd5\u4e00\u4e2a\u952e\u540d\u662f\u5426\u5b58\u5728\uff0c\u7c7b\u4f3c",Object(i.b)("inlineCode",{parentName:"li"},"key in obj"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.get(key)"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u952e\u540d\u5bf9\u5e94\u7684\u503c\uff0c\u82e5\u952e\u540d\u4e0d\u5b58\u5728\u5219\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u7c7b\u4f3c",Object(i.b)("inlineCode",{parentName:"li"},"obj[key]"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.set(key, value)"),"\uff1a\u6dfb\u52a0\u4e00\u5bf9\u65b0\u7684\u952e\u503c\u5bf9\uff0c\u5982\u679c\u952e\u540d\u5df2\u5b58\u5728\u5c31\u8986\u76d6\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.delete(key)"),"\uff1a\u6309\u952e\u540d\u5220\u9664\u4e00\u9879\uff0c\u7c7b\u4f3c",Object(i.b)("inlineCode",{parentName:"li"},"delete obj[key]"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.clear()"),"\uff1a\u6e05\u7a7aMap\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map[Symbol.iterator]()"),"\uff1a\u8fd4\u56de\u904d\u5386\u6240\u6709\u9879\u7684\u8fed\u4ee3\u5668\uff0c\u6bcf\u9879\u7528\u4e00\u4e2a\u952e\u548c\u503c\u7ec4\u6210\u7684\u4e8c\u5143\u6570\u7ec4\u8868\u793a\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.forEach(f)")," \u7c7b\u4f3c",Object(i.b)("inlineCode",{parentName:"li"},"for (let [key, value] of map) { f(value, key, map); }"),"\u3002\u8fd9\u91cc\u8be1\u5f02\u7684\u53c2\u6570\u987a\u5e8f\uff0c\u548cSet\u4e2d\u4e00\u6837\uff0c\u662f\u5bf9\u5e94\u7740",Object(i.b)("inlineCode",{parentName:"li"},"Array.prototype.forEach()"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.keys()"),"\uff1a\u8fd4\u56de\u904d\u5386\u6240\u6709\u952e\u7684\u8fed\u4ee3\u5668\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.values()"),"\uff1a\u8fd4\u56de\u904d\u5386\u6240\u6709\u503c\u7684\u8fed\u4ee3\u5668\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map.entries()"),"\uff1a\u8fd4\u56de\u904d\u5386\u6240\u6709\u9879\u7684\u8fed\u4ee3\u5668\uff0c\u5c31\u50cf",Object(i.b)("inlineCode",{parentName:"li"},"map[Symbol.iterator]()"),"\u3002\u5b9e\u9645\u4e0a\uff0c\u5b83\u4eec\u5c31\u662f\u540c\u4e00\u4e2a\u65b9\u6cd5\uff0c\u4e0d\u540c\u540d\u5b57\u3002")),Object(i.b)("p",null,"\u8fd8\u6709\u4ec0\u4e48\u8981\u62b1\u6028\u7684\uff1f\u4ee5\u4e0b\u662f\u6211\u89c9\u5f97\u4f1a\u6709\u7528\u800c ES6 \u8fd8\u6ca1\u63d0\u4f9b\u7684\u7279\u6027\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u952e\u4e0d\u5b58\u5728\u65f6\u8fd4\u56de\u7684\u9ed8\u8ba4\u503c\uff0c\u7c7b\u4f3c Python \u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"li"},"collections.defaultdict"),"\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u4ee5\u53eb",Object(i.b)("inlineCode",{parentName:"li"},"Map.fromObject(obj)"),"\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u4ee5\u4fbf\u66f4\u65b9\u4fbf\u5730\u7528\u6784\u9020\u5bf9\u8c61\u7684\u8bed\u6cd5\u6765\u5199\u51fa\u4e00\u4e2aMap\u3002")),Object(i.b)("p",null,"\u540c\u6837\uff0c\u8fd9\u4e9b\u7279\u6027\u4e5f\u662f\u5f88\u5bb9\u6613\u52a0\u4e0a\u7684\u3002"),Object(i.b)("p",null,"\u5230\u8fd9\u91cc\uff0c\u8fd8\u8bb0\u4e0d\u8bb0\u5f97\uff0c\u5f00\u7bc7\u65f6\u6211\u63d0\u5230\u8fc7\u8fd0\u884c\u4e8e\u6d4f\u89c8\u5668\u5bf9\u8bed\u8a00\u7279\u6027\u8bbe\u8ba1\u7684\u7279\u6b8a\u5f71\u54cd\uff1f\u73b0\u5728\u8981\u597d\u597d\u8c08\u4e00\u8c08\u8fd9\u4e2a\u95ee\u9898\u4e86\u3002\u6211\u5df2\u7ecf\u6709\u4e86\u4e09\u4e2a\u4f8b\u5b50\uff0c\u4ee5\u4e0b\u662f\u524d\u4e24\u4e2a\u3002"),Object(i.b)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u636e\u6211\u6240\u77e5\uff0cES6 \u7684\u96c6\u5408\u7c7b\u5b8c\u5168\u4e0d\u652f\u6301\u4e0b\u8ff0\u8fd9\u79cd\u6709\u7528\u7684\u7279\u6027\u3002"),Object(i.b)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u6709\u82e5\u5e72 URL \u5bf9\u8c61\u7ec4\u6210\u7684 Set\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"var urls = new Set;\nurls.add(new URL(location.href));  // \u4e24\u4e2a URL \u5bf9\u8c61\u3002\nurls.add(new URL(location.href));  // \u5b83\u4eec\u4e00\u6837\u4e48\uff1f\nalert(urls.size);  // 2\n")),Object(i.b)("p",null,"\u8fd9\u4e24\u4e2a URL \u5e94\u8be5\u6309\u76f8\u540c\u5904\u7406\uff0c\u6bd5\u7adf\u5b83\u4eec\u6709\u5b8c\u5168\u4e00\u6837\u7684\u5c5e\u6027\u3002\u4f46\u5728 JavaScript \u4e2d\uff0c\u5b83\u4eec\u662f\u5404\u81ea\u72ec\u7acb\u3001\u4e92\u4e0d\u76f8\u540c\u7684\uff0c\u5e76\u4e14\uff0c\u7edd\u5bf9\u6ca1\u6709\u529e\u6cd5\u6765\u91cd\u8f7d\u76f8\u7b49\u8fd0\u7b97\u7b26\u3002"),Object(i.b)("p",null,"\u5176\u5b83\u4e00\u4e9b\u8bed\u8a00\u5c31\u652f\u6301\u8fd9\u4e00\u7279\u6027\u3002\u5728 Java, Python, Ruby \u4e2d\uff0c\u6bcf\u4e2a\u7c7b\u90fd\u53ef\u4ee5\u91cd\u8f7d\u5b83\u7684\u76f8\u7b49\u8fd0\u7b97\u7b26\uff1bScheme \u7684\u8bb8\u591a\u5b9e\u73b0\u4e2d\uff0c\u6bcf\u4e2a\u54c8\u5e0c\u8868\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u76f8\u7b49\u5173\u7cfb\u3002C++ \u5219\u4e24\u8005\u90fd\u652f\u6301\u3002"),Object(i.b)("p",null,"\u4f46\u662f\uff0c\u6240\u6709\u8fd9\u4e9b\u673a\u5236\u90fd\u9700\u8981\u7f16\u5199\u8005\u81ea\u884c\u5b9e\u73b0\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u5e76\u66b4\u9732\u51fa\u7cfb\u7edf\u9ed8\u8ba4\u7684\u54c8\u5e0c\u51fd\u6570\u3002\u5728 JS \u4e2d\uff0c\u56e0\u4e3a\u4e0d\u5f97\u4e0d\u8003\u8651\u5176\u5b83\u8bed\u8a00\u4e0d\u5fc5\u62c5\u5fc3\u7684\u4e92\u7528\u6027\u548c\u5b89\u5168\u6027\uff0c\u59d4\u5458\u4f1a\u9009\u62e9\u4e86\u4e0d\u66b4\u9732\u2014\u2014\u81f3\u5c11\u76ee\u524d\u4ecd\u5982\u6b64\u3002"),Object(i.b)("p",null,"\u4f60\u591a\u534a\u89c9\u5f97\u4e00\u53f0\u8ba1\u7b97\u673a\u5177\u6709\u786e\u5b9a\u6027\u884c\u4e3a\u662f\u7406\u6240\u5e94\u5f53\u7684\uff0c\u4f46\u5f53\u6211\u544a\u8bc9\u522b\u4eba\u904d\u5386 Map \u6216 Set \u7684\u987a\u5e8f\u5c31\u662f\u5176\u4e2d\u5143\u7d20\u7684\u63d2\u5165\u987a\u5e8f\u65f6\uff0c\u4ed6\u4eec\u603b\u662f\u5f88\u60ca\u5947\u3002\u6ca1\u9519\uff0c\u5b83\u5c31\u662f\u786e\u5b9a\u7684\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u5df2\u7ecf\u4e60\u60ef\u4e86\u54c8\u5e0c\u8868\u67d0\u4e9b\u65b9\u9762\u4efb\u6027\u7684\u884c\u4e3a\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u63a5\u53d7\u5b83\u3002\u4e0d\u8fc7\uff0c\u603b\u6709\u4e00\u4e9b\u8db3\u591f\u597d\u7684\u7406\u7531\u8ba9\u6211\u4eec\u5e0c\u671b\u5c1d\u8bd5\u907f\u514d\u8fd9\u79cd\u4e0d\u786e\u5b9a\u6027\u30022012 \u5e74\u6211\u5199\u8fc7\uff1a"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6709\u8bc1\u636e\u8868\u660e\uff0c\u90e8\u5206\u7a0b\u5e8f\u5458\u4e00\u5f00\u59cb\u4f1a\u89c9\u5f97\u904d\u5386\u987a\u5e8f\u7684\u4e0d\u786e\u5b9a\u6027\u662f\u4ee4\u4eba\u60ca\u5947\u53c8\u56f0\u60d1\u7684\u3002 1 2 3 4 5 6"),Object(i.b)("li",{parentName:"ul"},"ECMAScript \u4e2d\u6ca1\u6709\u660e\u786e\u89c4\u5b9a\u904d\u5386\u5c5e\u6027\u7684\u987a\u5e8f\uff0c\u4f46\u4e3a\u4e86\u517c\u5bb9\u4e92\u8054\u7f51\u73b0\u72b6\uff0c\u51e0\u4e4e\u6240\u6709\u4e3b\u6d41\u5b9e\u73b0\u90fd\u4e0d\u5f97\u4e0d\u5c06\u5176\u5b9a\u4e49\u4e3a\u63d2\u5165\u987a\u5e8f\u3002\u56e0\u6b64\uff0c\u6709\u4eba\u62c5\u5fc3\uff0c\u5047\u5982 TC39 \u4e0d\u786e\u7acb\u4e00\u4e2a\u786e\u5b9a\u7684\u904d\u5386\u987a\u5e8f\uff0c\u201c\u4e92\u8054\u7f51\u793e\u533a\u4e5f\u4f1a\u5728\u81ea\u884c\u53d1\u5c55\u4e2d\u66ff\u6211\u4eec\u51b3\u5b9a\u3002\u201d 7"),Object(i.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u54c8\u5e0c\u8868\u7684\u904d\u5386\u987a\u5e8f\u4f1a\u66b4\u9732\u4e00\u4e9b\u54c8\u5e0c\u5bf9\u8c61\u7684\u4ee3\u7801\uff0c\u7ee7\u800c\u5f15\u53d1\u5173\u4e8e\u54c8\u5e0c\u51fd\u6570\u5b9e\u73b0\u7684\u4e00\u4e9b\u607c\u4eba\u7684\u5b89\u5168\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u66b4\u9732\u51fa\u7684\u4ee3\u7801\u7edd\u4e0d\u80fd\u83b7\u77e5\u4e00\u4e2a\u5bf9\u8c61\u7684\u5730\u5740\u3002\uff08\u5411\u4e0d\u53d7\u4fe1\u4efb\u7684 ES \u4ee3\u7801\u900f\u9732\u5bf9\u8c61\u5730\u5740\u800c\u5bf9\u5176\u81ea\u8eab\u9690\u85cf\uff0c\u5c06\u662f\u4e92\u8054\u7f51\u7684\u4e00\u5927\u5b89\u5168\u6f0f\u6d1e\u3002\uff09"))),Object(i.b)("p",null,"\u5728 2012 \u5e74 2 \u6708\u4ee5\u4e0a\u79cd\u79cd\u610f\u89c1\u88ab\u63d0\u51fa\u65f6\uff0c\u6211\u662f\u652f\u6301\u4e0d\u786e\u5b9a\u904d\u5386\u5e8f\u7684\u3002\u7136\u540e\uff0c\u6211\u51b3\u5b9a\u7528\u5b9e\u9a8c\u8bc1\u660e\uff0c\u4fdd\u5b58\u63d2\u5165\u5e8f\u5c06\u8fc7\u5ea6\u964d\u4f4e\u54c8\u5e0c\u8868\u7684\u6548\u7387\u3002\u6211\u5199\u4e86\u4e00\u4e2a C++ \u7684\u5c0f\u578b\u57fa\u51c6\u6d4b\u8bd5\uff0c\u7ed3\u679c\u5374\u4ee4\u6211\u60ca\u5947\u5730\u6070\u6070\u76f8\u53cd\u3002"),Object(i.b)("p",null,"\u8fd9\u5c31\u662f\u6211\u4eec\u6700\u7ec8\u4e3a JS \u8bbe\u8ba1\u4e86\u6309\u63d2\u5165\u5e8f\u904d\u5386\u7684\u54c8\u5e0c\u8868\u7684\u8fc7\u7a0b\u3002"),Object(i.b)("p",null,"\u4e0a\u7bc7\u6587\u7ae0\u6211\u4eec\u8ba8\u8bba\u4e86\u4e00\u4e2a JS \u52a8\u753b\u5e93\u76f8\u5173\u7684\u4f8b\u5b50\u3002\u6211\u4eec\u8bd5\u7740\u8981\u4e3a\u6bcf\u4e2a DOM \u5bf9\u8c61\u8bbe\u7f6e\u4e00\u4e2a\u5e03\u5c14\u503c\u7c7b\u578b\u7684\u6807\u8bc6\u5c5e\u6027\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"if (element.isMoving) {\n    smoothAnimations(element);\n}\nelement.isMoving = true;\n")),Object(i.b)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u8fd9\u6837\u7ed9\u4e00\u4e2a DOM \u5bf9\u8c61\u589e\u52a0\u5c5e\u6027\u4e0d\u662f\u4e2a\u597d\u4e3b\u610f\u3002\u539f\u56e0\u6211\u4eec\u4e0a\u6b21\u5df2\u7ecf\u89e3\u91ca\u8fc7\u4e86\u3002"),Object(i.b)("p",null,"\u4e0a\u6b21\u7684\u6587\u7ae0\u91cc\uff0c\u6211\u4eec\u63a5\u7740\u5c55\u793a\u4e86\u7528 Symbol \u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u7528\u96c6\u5408\u6765\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\u4e48\uff1f\u4e5f\u8bb8\u770b\u4e0a\u53bb\u4f1a\u50cf\u8fd9\u6837\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"if (movingSet.has(element)) {\n    smoothAnimations(element);\n}\nmovingSet.add(element);\n")),Object(i.b)("p",null,"\u8fd9\u53ea\u6709\u4e00\u4e2a\u574f\u5904\u3002Map \u548c Set \u90fd\u4e3a\u5185\u90e8\u7684\u6bcf\u4e2a\u952e\u6216\u503c\u4fdd\u6301\u4e86\u5f3a\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4e00\u4e2a DOM \u5143\u7d20\u88ab\u79fb\u9664\u4e86\uff0c\u56de\u6536\u673a\u5236\u65e0\u6cd5\u53d6\u56de\u5b83\u5360\u7528\u7684\u5185\u5b58\uff0c\u9664\u975e",Object(i.b)("inlineCode",{parentName:"p"},"movingSet"),"\u4e2d\u4e5f\u5220\u9664\u4e86\u5b83\u3002\u5728\u6700\u7406\u60f3\u7684\u60c5\u51b5\u4e0b\uff0c\u5e93\u5728\u5584\u540e\u5de5\u4f5c\u4e0a\u5bf9\u4f7f\u7528\u8005\u90fd\u6709\u590d\u6742\u7684\u8981\u6c42\uff0c\u6240\u4ee5\uff0c\u8fd9\u5f88\u53ef\u80fd\u5f15\u53d1\u5185\u5b58\u6cc4\u9732\u3002"),Object(i.b)("p",null,"ES6 \u7ed9\u4e86\u6211\u4eec\u4e00\u4e2a\u60ca\u559c\u7684\u89e3\u51b3\u65b9\u6848\uff1a\u7528WeakSet\u800c\u975eSet\u3002\u548c\u5185\u5b58\u6cc4\u9732\u8bf4\u518d\u89c1\u5427\uff01"),Object(i.b)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u8fd9\u4e2a\u7279\u5b9a\u60c5\u666f\u4e0b\u7684\u95ee\u9898\u53ef\u4ee5\u7528\u5f31\u96c6\u5408 (weak collection) \u6216 Symbol \u4e24\u79cd\u65b9\u6cd5\u89e3\u51b3\u3002\u54ea\u4e2a\u66f4\u597d\u5462\uff1f\u4e0d\u5e78\u7684\u662f\uff0c\u5b8c\u6574\u5730\u8ba8\u8bba\u5229\u5f0a\u53d6\u820d\u4f1a\u628a\u8fd9\u7bc7\u6587\u7ae0\u62d6\u5f97\u6709\u4e9b\u957f\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5982\u679c\u80fd\u5728\u6574\u4e2a\u7f51\u9875\u7684\u751f\u547d\u5468\u671f\u5185\u4f7f\u7528\u540c\u4e00\u4e2a Symbol\uff0c\u90a3\u5c31\u6ca1\u4ec0\u4e48\u95ee\u9898\uff1b\u5982\u679c\u4e0d\u5f97\u4e0d\u4f7f\u7528\u4e00\u5806\u4e34\u65f6\u7684 Symbol\uff0c\u90a3\u5c31\u5371\u9669\u4e86\uff0c\u662f\u65f6\u5019\u8003\u8651 WeakMap \u6765\u907f\u514d\u5185\u5b58\u6cc4\u9732\u4e86\u3002"),Object(i.b)("p",null,"WeakMap \u548c WeakSet \u88ab\u8bbe\u8ba1\u6765\u5b8c\u6210\u4e0e Map\u3001Set \u51e0\u4e4e\u4e00\u6837\u7684\u884c\u4e3a\uff0c\u9664\u4e86\u4ee5\u4e0b\u4e00\u4e9b\u9650\u5236\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WeakMap \u53ea\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"li"},"new"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"has"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"get"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"set")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"delete")," \u3002"),Object(i.b)("li",{parentName:"ul"},"WeakSet \u53ea\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"li"},"new"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"has"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"add")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"delete")," \u3002"),Object(i.b)("li",{parentName:"ul"},"WeakSet \u7684\u503c\u548c WeakMap \u7684\u952e\u5fc5\u987b\u662f\u5bf9\u8c61\u3002")),Object(i.b)("p",null,"\u8fd8\u8981\u6ce8\u610f\uff0c\u8fd9\u4e24\u79cd\u5f31\u96c6\u5408\u90fd\u4e0d\u53ef\u8fed\u4ee3\uff0c\u9664\u975e\u4e13\u95e8\u67e5\u8be2\u6216\u7ed9\u51fa\u4f60\u611f\u5174\u8da3\u7684\u952e\uff0c\u5426\u5219\u4e0d\u80fd\u83b7\u5f97\u4e00\u4e2a\u5f31\u96c6\u5408\u4e2d\u7684\u9879\u3002"),Object(i.b)("p",null,"\u8fd9\u4e9b\u5c0f\u5fc3\u8bbe\u8ba1\u7684\u9650\u5236\u8ba9\u5783\u573e\u56de\u6536\u673a\u5236\u80fd\u56de\u6536\u4ecd\u5728\u4f7f\u7528\u4e2d\u7684\u5f31\u96c6\u5408\u91cc\u7684\u65e0\u6548\u5bf9\u8c61\u3002\u8fd9\u6548\u679c\u7c7b\u4f3c\u4e8e\u5f31\u5f15\u7528\u6216\u5f31\u952e\u5b57\u5178\uff0c\u4f46 ES6 \u7684\u5f31\u96c6\u5408\u53ef\u4ee5\u5728\u4e0d\u66b4\u9732\u811a\u672c\u4e2d\u6b63\u5728\u5783\u573e\u56de\u6536\u7684\u524d\u63d0\u4e0b\u5f97\u5230\u5783\u573e\u56de\u6536\u7684\u6548\u76ca\u3002"),Object(i.b)("p",null,"\u5f31\u96c6\u5408\u5b9e\u9645\u4e0a\u662f\u7528 ",Object(i.b)("a",{parentName:"p",href:"http://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf"},"ephemeron \u8868"),"\u5b9e\u73b0\u7684\u3002"),Object(i.b)("p",null,"\u7b80\u5355\u8bf4\uff0c\u4e00\u4e2a WeakSet \u5e76\u4e0d\u5bf9\u5176\u4e2d\u5bf9\u8c61\u4fdd\u6301\u5f3a\u5f15\u7528\u3002\u5f53 WeakSet \u4e2d\u7684\u4e00\u4e2a\u5bf9\u8c61\u88ab\u56de\u6536\u65f6\uff0c\u5b83\u4f1a\u7b80\u5355\u5730\u88ab\u4ece WeakSet \u4e2d\u79fb\u9664\u3002WeakMap \u4e5f\u7c7b\u4f3c\u5730\u4e0d\u4e3a\u5b83\u7684\u952e\u4fdd\u6301\u5f3a\u5f15\u7528\u3002\u5982\u679c\u4e00\u4e2a\u952e\u4ecd\u88ab\u4f7f\u7528\uff0c\u76f8\u5e94\u7684\u503c\u4e5f\u5c31\u4ecd\u88ab\u4f7f\u7528\u3002"),Object(i.b)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u63a5\u53d7\u8fd9\u4e9b\u9650\u5236\u5462\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u5728 JS \u4e2d\u5f15\u5165\u5f31\u5f15\u7528\u5462\uff1f"),Object(i.b)("p",null,"\u518d\u6b21\u5730\uff0c\u8fd9\u662f\u56e0\u4e3a\u6807\u51c6\u59d4\u5458\u4f1a\u5f88\u4e0d\u613f\u610f\u5411\u811a\u672c\u66b4\u9732\u672a\u5b9a\u4e49\u884c\u4e3a\u3002\u5b71\u5f31\u7684\u8de8\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u662f\u4e92\u8054\u7f51\u53d1\u5c55\u7684\u75db\u82e6\u4e4b\u6e90\u3002\u5f31\u5f15\u7528\u66b4\u9732\u4e86\u5e95\u5c42\u5783\u573e\u56de\u6536\u7684\u5b9e\u73b0\u7ec6\u8282\u2014\u2014\u8fd9\u6b63\u662f\u4e0e \u5e73\u53f0\u76f8\u5173\u7684\u4e00\u4e2a\u672a\u5b9a\u4e49\u884c\u4e3a\u3002\u5e94\u7528\u5f53\u7136\u4e0d\u5e94\u8be5\u4f9d\u8d56\u5e73\u53f0\u76f8\u5173\u7684\u7ec6\u8282\uff0c\u4f46\u5f31\u5f15\u7528\u4f7f\u6211\u4eec\u96be\u4e8e\u7cbe\u786e\u4e86\u89e3\u81ea\u5df1\u5bf9\u6d4b\u8bd5\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u7684\u4f9d\u8d56\u7a0b\u5ea6\u3002\u8fd9\u662f\u4ef6\u5f88\u4e0d\u8bb2\u9053\u7406\u7684\u4e8b\u60c5\u3002"),Object(i.b)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0cES6 \u7684\u5f31\u96c6\u5408\u53ea\u5305\u542b\u4e86\u4e00\u5957\u6709\u9650\u7684\u7279\u6027\uff0c\u4f46\u5b83\u4eec\u76f8\u5f53\u7262\u9760\u3002\u4e00\u4e2a\u952e\u6216\u503c\u88ab\u56de\u6536\u4ece\u4e0d\u4f1a\u88ab\u89c2\u6d4b\u5230\uff0c\u6240\u4ee5\u5e94\u7528\u5c06\u4e0d\u4f1a\u4f9d\u8d56\u4e8e\u5176\u884c\u4e3a\uff0c\u5373\u4f7f\u53ea\u662f\u7f18\u4e8e\u610f\u5916\u3002"),Object(i.b)("p",null,"\u8fd9\u662f\u9488\u5bf9\u4e92\u8054\u7f51\u7684\u7279\u6b8a\u8003\u91cf\u5f15\u53d1\u4e86\u4e00\u4e2a\u60ca\u4eba\u7684\u8bbe\u8ba1\u3001\u8fdb\u800c\u4f7f JS \u6210\u4e3a\u4e00\u95e8\u66f4\u597d\u8bed\u8a00\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002"),Object(i.b)("p",null,"\u603b\u8ba1\u56db\u79cd\u96c6\u5408\u7c7b\u5728 Firefox\u3001Chrome\u3001Microsoft Edge\u3001Safari \u4e2d\u90fd\u5df2\u5b9e\u73b0\uff0c\u8981\u652f\u6301\u65e7\u6d4f\u89c8\u5668\u5219\u9700\u8981 ES6 - Collections \u4e4b\u7c7b\u6765\u8865\u5168\u3002"),Object(i.b)("p",null,"Firefox \u4e2d\u7684 WeakMap \u6700\u521d\u7531 Andreas Gal \u5b9e\u73b0\uff0c\u4ed6\u540e\u6765\u5f53\u4e86\u4e00\u6bb5\u65f6\u95f4 Mozilla \u7684 CTO\u3002Tom Schuster \u5b9e\u73b0\u4e86 WeakSet\uff0c\u6211\u5b9e\u73b0\u4e86 Map \u548c Set\u3002\u611f\u8c22 Tooru Fujisawa \u8d21\u732e\u7684\u51e0\u4e2a\u76f8\u5173\u8865\u4e01\u3002"),Object(i.b)("p",null,"\u4e0b\u5468\u5f00\u59cb\u662f\u6df1\u5165\u6d45\u51fa ES6 \u7cfb\u5217\u7684\u4e24\u5468\u6691\u5047\u3002\u8fd9\u4e2a\u7cfb\u5217\u5df2\u7ecf\u8986\u76d6\u4e86\u5f88\u591a\u5185\u5bb9\uff0c\u4e0d\u8fc7\u51e0\u4e2a ES6 \u7684\u6700\u5f3a\u7279\u6027\u8fd8\u6ca1\u6d89\u53ca\uff0c\u656c\u8bf7\u671f\u5f85\u4e0b\u6b21\u7684\u65b0\u4e3b\u9898\u3002"),Object(i.b)(b.a,{mdxType:"BottomCopyRight"}))}m.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),O=l,j=u["".concat(r,".").concat(O)]||u[O]||m[O]||i;return n?a.a.createElement(j,b(b({ref:t},p),{},{components:n})):a.a.createElement(j,b({ref:t},p))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,r[1]=b;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return b}));var l=n(4),a=n(0),i=n.n(a),r=function(e){function t(t){return e.call(this,t)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props.link?i.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):i.a.createElement("i",null,this.props.author);return i.a.createElement("section",null,i.a.createElement("b",null,"\u672c\u6587\u4f5c\u8005\u4e3a ",e,", \u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",i.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),i.a.createElement("hr",null))},t}(i.a.Component);n(268);i.a.Component;function b(e){if("string"!=typeof e.href)return i.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");const t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return i.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return i.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);const[,n,l,a,r]=t,b=`/blog/${n}/${l}/${a}/${r}`;return i.a.createElement("a",{href:b,target:e.target,"data-component":"BlogLink"},e.children)}},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var l=n(0),a=n.n(l);class i extends a.a.Component{render(){return a.a.createElement("div",null,"\u611f\u8c22",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}}}]);