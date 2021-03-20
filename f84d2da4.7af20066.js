(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{218:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(228)),l=t(233),b=t(232),i={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e8c\uff09\uff1a\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",sidebar_label:"\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},c={unversionedId:"articles/es6-in-depth/1-iterators-and-the-for-of-loop",id:"articles/es6-in-depth/1-iterators-and-the-for-of-loop",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e8c\uff09\uff1a\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop.md",slug:"/articles/es6-in-depth/1-iterators-and-the-for-of-loop",permalink:"/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop.md",version:"current",sidebar_label:"\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e00\uff09\uff1aES6 \u662f\u4ec0\u4e48",permalink:"/docs/articles/es6-in-depth/0-introduction"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e09\uff09\uff1a\u751f\u6210\u5668 Generators",permalink:"/docs/articles/es6-in-depth/2-generators"}},p=[{value:"\u5f3a\u5927\u7684 <code>for-of</code> \u5faa\u73af",id:"\u5f3a\u5927\u7684-for-of-\u5faa\u73af",children:[]},{value:"<code>for-of</code> \u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408",id:"for-of-\u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408",children:[]},{value:"\u6df1\u5165\u7406\u89e3",id:"\u6df1\u5165\u7406\u89e3",children:[]},{value:"\u6211\u4f55\u65f6\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e00\u65b0\u7279\u6027\uff1f",id:"\u6211\u4f55\u65f6\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e00\u65b0\u7279\u6027\uff1f",children:[]}],u={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(l.a,{sourceName:"InfoQ.cn",sourceLink:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-iterators-and-the-for-of-loop"},"\u539f\u6587")),Object(o.b)("p",null,"\u6211\u4eec\u5982\u4f55\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff1f20 \u5e74\u524d JavaScript \u521a\u840c\u751f\u65f6\uff0c\u4f60\u53ef\u80fd\u8fd9\u6837\u5b9e\u73b0\u6570\u7ec4\u904d\u5386\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"for (var index = 0; index < myArray.length; index++) {\n    console.log(myArray[index]);\n}\n")),Object(o.b)("p",null,"\u81ea ES5 \u6b63\u5f0f\u53d1\u5e03\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u5efa\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"forEach")," \u65b9\u6cd5\u6765\u904d\u5386\u6570\u7ec4\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"myArray.forEach(function (value) {\n    console.log(value);\n});\n")),Object(o.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u66f4\u52a0\u7b80\u6d01\uff0c\u4f46\u8fd9\u79cd\u65b9\u6cd5\u4e5f\u6709\u4e00\u4e2a\u5c0f\u7f3a\u9677\uff1a\u4f60\u4e0d\u80fd\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"break")," \u8bed\u53e5\u4e2d\u65ad\u5faa\u73af\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u8fd4\u56de\u5230\u5916\u5c42\u51fd\u6570\u3002"),Object(o.b)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u53ea\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7684\u8bed\u6cd5\u6765\u904d\u5386\u6570\u7ec4\u5143\u7d20\u4e5f\u5f88\u4e0d\u9519\u3002"),Object(o.b)("p",null,"\u90a3\u4e48\uff0c\u4f60\u4e00\u5b9a\u60f3\u5c1d\u8bd5\u4e00\u4e0b ",Object(o.b)("inlineCode",{parentName:"p"},"for-in")," \u5faa\u73af\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"for (var index in myArray) { // \u5343\u4e07\u522b\u8fd9\u6837\u505a\n  console.log(myArray[index]);\n}\n")),Object(o.b)("p",null,"\u8fd9\u7edd\u5bf9\u662f\u4e00\u4e2a\u7cdf\u7cd5\u7684\u9009\u62e9\uff0c\u4e3a\u4ec0\u4e48\u5462\uff1f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u8d4b\u7ed9 index \u7684\u503c\u4e0d\u662f\u5b9e\u9645\u7684\u6570\u5b57\uff0c\u800c\u662f\u5b57\u7b26\u4e32\u201c0\u201d\u3001\u201c1\u201d\u3001\u201c2\u201d\uff0c\u6b64\u65f6\u5f88\u53ef\u80fd\u5728\u65e0\u610f\u4e4b\u95f4\u8fdb\u884c\u5b57\u7b26\u4e32\u7b97\u6570\u8ba1\u7b97\uff0c\u4f8b\u5982\uff1a\u201c2\u201d + 1 == \u201c21\u201d\uff0c\u8fd9\u7ed9\u7f16\u7801\u8fc7\u7a0b\u5e26\u6765\u6781\u5927\u7684\u4e0d\u4fbf\u3002"),Object(o.b)("li",{parentName:"ul"},"\u4f5c\u7528\u4e8e\u6570\u7ec4\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"for-in")," \u5faa\u73af\u4f53\u9664\u4e86\u904d\u5386\u6570\u7ec4\u5143\u7d20\u5916\uff0c\u8fd8\u4f1a\u904d\u5386\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u7684\u6570\u7ec4\u4e2d\u6709\u4e00\u4e2a\u53ef\u679a\u4e3e\u5c5e\u6027 ",Object(o.b)("inlineCode",{parentName:"li"},"myArray.name"),"\uff0c\u5faa\u73af\u5c06\u989d\u5916\u6267\u884c\u4e00\u6b21\uff0c\u904d\u5386\u5230\u540d\u4e3a",Object(o.b)("inlineCode",{parentName:"li"},"name"),"\u7684\u7d22\u5f15\u3002\u5c31\u8fde\u6570\u7ec4\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\u90fd\u80fd\u88ab\u8bbf\u95ee\u5230\u3002"),Object(o.b)("li",{parentName:"ul"},"\u6700\u8ba9\u4eba\u9707\u60ca\u7684\u662f\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u6bb5\u4ee3\u7801\u53ef\u80fd\u6309\u7167\u968f\u673a\u987a\u5e8f\u904d\u5386\u6570\u7ec4\u5143\u7d20\u3002"),Object(o.b)("li",{parentName:"ul"},"\u7b80\u800c\u8a00\u4e4b\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"for-in")," \u662f\u4e3a\u666e\u901a\u5bf9\u8c61\u8bbe\u8ba1\u7684\uff0c\u4f60\u53ef\u4ee5\u904d\u5386\u5f97\u5230\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u952e\uff0c\u56e0\u6b64\u4e0d\u9002\u7528\u4e8e\u6570\u7ec4\u904d\u5386\u3002")),Object(o.b)("h2",{id:"\u5f3a\u5927\u7684-for-of-\u5faa\u73af"},"\u5f3a\u5927\u7684 ",Object(o.b)("inlineCode",{parentName:"h2"},"for-of")," \u5faa\u73af"),Object(o.b)("p",null,"\u8fd8\u8bb0\u5f97\u5728",Object(o.b)("a",{parentName:"p",href:"/docs/articles/es6-in-depth/0-introduction"},"\u300a\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e00\uff09\uff1aES6 \u662f\u4ec0\u4e48\u300b"),"\u4e2d\u6211\u5411\u4f60\u4eec\u627f\u8bfa\u8fc7\u7684\u8bdd\u4e48\uff1fES6 \u4e0d\u4f1a\u7834\u574f\u4f60\u5df2\u7ecf\u5199\u597d\u7684 JS \u4ee3\u7801\u3002\u76ee\u524d\u770b\u6765\uff0c\u6210\u5343\u4e0a\u4e07\u7684 Web \u7f51\u7ad9\u4f9d\u8d56 for-in \u5faa\u73af\uff0c\u5176\u4e2d\u4e00\u4e9b\u7f51\u7ad9\u751a\u81f3\u5c06\u5176\u7528\u4e8e\u6570\u7ec4\u904d\u5386\u3002\u5982\u679c\u60f3\u901a\u8fc7\u4fee\u6b63 for-in \u5faa\u73af\u589e\u52a0\u6570\u7ec4\u904d\u5386\u652f\u6301\u4f1a\u8ba9\u8fd9\u4e00\u5207\u53d8\u5f97\u66f4\u52a0\u6df7\u4e71\uff0c\u56e0\u6b64\uff0c\u6807\u51c6\u59d4\u5458\u4f1a\u5728 ES6 \u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898\u3002"),Object(o.b)("p",null,"\u5c31\u50cf\u8fd9\u6837\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"for (var value of myArray) {\n  console.log(value);\n}\n")),Object(o.b)("p",null,"\u662f\u7684\uff0c\u4e0e\u4e4b\u524d\u7684\u5185\u5efa\u65b9\u6cd5\u76f8\u6bd4\uff0c\u8fd9\u79cd\u5faa\u73af\u65b9\u5f0f\u770b\u8d77\u6765\u662f\u5426\u6709\u4e9b\u773c\u719f\uff1f\u90a3\u597d\uff0c\u6211\u4eec\u5c06\u8981\u63a2\u7a76\u4e00\u4e0b ",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u7684\u5916\u8868\u4e0b\u9690\u85cf\u7740\u54ea\u4e9b\u5f3a\u5927\u7684\u529f\u80fd\u3002\u73b0\u5728\uff0c\u53ea\u9700\u8bb0\u4f4f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd9\u662f\u6700\u7b80\u6d01\u3001\u6700\u76f4\u63a5\u7684\u904d\u5386\u6570\u7ec4\u5143\u7d20\u7684\u8bed\u6cd5"),Object(o.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u65b9\u6cd5\u907f\u5f00\u4e86 ",Object(o.b)("inlineCode",{parentName:"li"},"for-in")," \u5faa\u73af\u7684\u6240\u6709\u7f3a\u9677"),Object(o.b)("li",{parentName:"ul"},"\u4e0e ",Object(o.b)("inlineCode",{parentName:"li"},"forEach()")," \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94 ",Object(o.b)("inlineCode",{parentName:"li"},"break"),"\u3001",Object(o.b)("inlineCode",{parentName:"li"},"continue")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"return")," \u8bed\u53e5")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"for-in")," \u5faa\u73af\u7528\u6765\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u3002")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"for-of")," \u5faa\u73af\u7528\u6765\u904d\u5386\u6570\u636e\u2014\u4f8b\u5982\u6570\u7ec4\u4e2d\u7684\u503c\u3002")),Object(o.b)("p",null,"\u4f46\u662f\uff0c\u4e0d\u4ec5\u5982\u6b64\uff01"),Object(o.b)("h2",{id:"for-of-\u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408"},Object(o.b)("inlineCode",{parentName:"h2"},"for-of")," \u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u4e0d\u4ec5\u652f\u6301\u6570\u7ec4\uff0c\u8fd8\u652f\u6301\u5927\u591a\u6570\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u4f8b\u5982 DOM NodeList \u5bf9\u8c61\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u4e5f\u652f\u6301\u5b57\u7b26\u4e32\u904d\u5386\uff0c\u5b83\u5c06\u5b57\u7b26\u4e32\u89c6\u4e3a\u4e00\u7cfb\u5217\u7684 Unicode \u5b57\u7b26\u6765\u8fdb\u884c\u904d\u5386\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'for (var chr of "") {\n  alert(chr);\n}\n')),Object(o.b)("p",null,"\u5b83\u540c\u6837\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," \u5bf9\u8c61\u904d\u5386\u3002"),Object(o.b)("p",null,"\u5bf9\u4e0d\u8d77\uff0c\u4f60\u4e00\u5b9a\u6ca1\u542c\u8bf4\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," \u5bf9\u8c61\u3002\u4ed6\u4eec\u662f ES6 \u4e2d\u65b0\u589e\u7684\u7c7b\u578b\u3002\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7684\u6587\u7ae0\u8bb2\u89e3\u8fd9\u4e24\u4e2a\u65b0\u7684\u7c7b\u578b\u3002\u5982\u679c\u4f60\u66fe\u5728\u5176\u5b83\u8bed\u8a00\u4e2d\u4f7f\u7528\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," \uff0c\u4f60\u4f1a\u53d1\u73b0 ES6 \u4e2d\u7684\u5e76\u65e0\u592a\u5927\u51fa\u5165\u3002"),Object(o.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," \u5bf9\u8c61\u53ef\u4ee5\u81ea\u52a8\u6392\u9664\u91cd\u590d\u9879\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// \u57fa\u4e8e\u5355\u8bcd\u6570\u7ec4\u521b\u5efa\u4e00\u4e2a set \u5bf9\u8c61\nvar uniqueWords = new Set(words);\n")),Object(o.b)("p",null,"\u751f\u6210 Set \u5bf9\u8c61\u540e\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u904d\u5386\u5b83\u6240\u5305\u542b\u7684\u5185\u5bb9\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"for (var word of uniqueWords) {\n   console.log(word);\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u5bf9\u8c61\u7a0d\u6709\u4e0d\u540c\uff1a\u5185\u542b\u7684\u6570\u636e\u7531\u952e\u503c\u5bf9\u7ec4\u6210\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u4f7f\u7528\u89e3\u6784\uff08destructuring\uff09\u6765\u5c06\u952e\u503c\u5bf9\u62c6\u89e3\u4e3a\u4e24\u4e2a\u72ec\u7acb\u7684\u53d8\u91cf\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'for (var [key, value] of phoneBookMap) {\n   console.log(key + "\'s phone number is: " + value);\n}\n')),Object(o.b)("p",null,"\u89e3\u6784\u4e5f\u662f ES6 \u7684\u65b0\u7279\u6027\uff0c\u6211\u4eec\u5c06\u5728\u53e6\u4e00\u7bc7\u6587\u7ae0\u4e2d\u8bb2\u89e3\u3002\u770b\u6765\u6211\u5e94\u8be5\u8bb0\u5f55\u8fd9\u4e9b\u4f18\u79c0\u7684\u4e3b\u9898\uff0c\u672a\u6765\u6709\u592a\u591a\u7684\u65b0\u5185\u5bb9\u9700\u8981\u4e00\u4e00\u5256\u6790\u3002"),Object(o.b)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ea\u9700\u8bb0\u4f4f\uff1a\u672a\u6765\u7684 JS \u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u65b0\u578b\u7684\u96c6\u5408\u7c7b\uff0c\u751a\u81f3\u4f1a\u6709\u66f4\u591a\u7684\u7c7b\u578b\u9646\u7eed\u8bde\u751f\uff0c\u800c ",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5c31\u662f\u4e3a\u904d\u5386\u6240\u6709\u8fd9\u4e9b\u96c6\u5408\u7279\u522b\u8bbe\u8ba1\u7684\u5faa\u73af\u8bed\u53e5\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u4e0d\u652f\u6301\u666e\u901a\u5bf9\u8c61\uff0c\u4f46\u5982\u679c\u4f60\u60f3\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u4f60\u53ef\u4ee5\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"for-in")," \u5faa\u73af\uff08\u8fd9\u4e5f\u662f\u5b83\u7684\u672c\u804c\u5de5\u4f5c\uff09\u6216\u5185\u5efa\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys()")," \u65b9\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'// \u5411\u63a7\u5236\u53f0\u8f93\u51fa\u5bf9\u8c61\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\nfor (var key of Object.keys(someObject)) {\n  console.log(key + ": " + someObject[key]);\n}\n')),Object(o.b)("h2",{id:"\u6df1\u5165\u7406\u89e3"},"\u6df1\u5165\u7406\u89e3"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u201c\u80fd\u5de5\u6479\u5f62\uff0c\u5de7\u5320\u7a83\u610f\u3002\u201d\u2014\u2014\u5df4\u52c3\u7f57\xb7\u6bd5\u5361\u7d22")),Object(o.b)("p",null,"ES6 \u59cb\u7ec8\u575a\u6301\u8fd9\u6837\u7684\u5b97\u65e8\uff1a\u51e1\u662f\u65b0\u52a0\u5165\u7684\u7279\u6027\uff0c\u52bf\u5fc5\u5df2\u5728\u5176\u5b83\u8bed\u8a00\u4e2d\u5f97\u5230\u5f3a\u6709\u529b\u7684\u5b9e\u7528\u6027\u8bc1\u660e\u3002"),Object(o.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u65b0\u52a0\u5165\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u50cf\u6781\u4e86 C++\u3001Java\u3001C#\u4ee5\u53ca Python \u4e2d\u7684\u5faa\u73af\u8bed\u53e5\u3002\u4e0e\u5b83\u4eec\u4e00\u6837\uff0c\u8fd9\u91cc\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u652f\u6301\u8bed\u8a00\u548c\u6807\u51c6\u5e93\u4e2d\u63d0\u4f9b\u7684\u51e0\u79cd\u4e0d\u540c\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b83\u540c\u6837\u4e5f\u662f\u8fd9\u95e8\u8bed\u8a00\u4e2d\u7684\u4e00\u4e2a\u6269\u5c55\u70b9"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8bd1\u6ce8\uff1a\u5173\u4e8e\u6269\u5c55\u70b9\uff0c\u5efa\u8bae\u53c2\u8003 ")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"http://www.blogjava.net/yangbutao/archive/2007/09/27/148500.html"},"\u6d45\u6790\u6269\u5c55\u70b9")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://wiki.eclipse.org/FAQ_What_are_extensions_and_extension_points%3F"},"What are extensions and extension points?")," \u3002")))),Object(o.b)("p",null,"\u6b63\u5982\u5176\u5b83\u8bed\u8a00\u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"for"),"/",Object(o.b)("inlineCode",{parentName:"p"},"foreach")," \u8bed\u53e5\u4e00\u6837\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\u8bed\u53e5\u901a\u8fc7\u65b9\u6cd5\u8c03\u7528\u6765\u904d\u5386\u5404\u79cd\u96c6\u5408\u3002\u6570\u7ec4\u3001Maps \u5bf9\u8c61\u3001Sets \u5bf9\u8c61\u4ee5\u53ca\u5176\u5b83\u5728\u6211\u4eec\u8ba8\u8bba\u7684\u5bf9\u8c61\u6709\u4e00\u4e2a\u5171\u540c\u70b9\uff0c\u5b83\u4eec\u90fd\u6709\u4e00\u4e2a\u8fed\u4ee3\u5668\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u7ed9\u4efb\u610f\u7c7b\u578b\u7684\u5bf9\u8c61\u6dfb\u52a0\u8fed\u4ee3\u5668\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u5f53\u4f60\u4e3a\u5bf9\u8c61\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},"myObject.toString()")," \u65b9\u6cd5\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06\u5bf9\u8c61\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\u540c\u6837\u5730\uff0c\u5f53\u4f60\u5411\u4efb\u610f\u5bf9\u8c61\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},"myObject Symbol.iterator")," \u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u904d\u5386\u8fd9\u4e2a\u5bf9\u8c61\u4e86\u3002"),Object(o.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u4f60\u6b63\u5728\u4f7f\u7528 jQuery\uff0c\u5c3d\u7ba1\u4f60\u975e\u5e38\u949f\u60c5\u4e8e\u91cc\u9762\u7684",Object(o.b)("inlineCode",{parentName:"p"},".each()")," \u65b9\u6cd5\uff0c\u4f46\u4f60\u8fd8\u662f\u60f3\u8ba9 jQuery \u5bf9\u8c61\u4e5f\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"for-of")," \u5faa\u73af\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// \u56e0\u4e3a jQuery \u5bf9\u8c61\u4e0e\u6570\u7ec4\u76f8\u4f3c\n// \u53ef\u4ee5\u4e3a\u5176\u6dfb\u52a0\u4e0e\u6570\u7ec4\u4e00\u81f4\u7684\u8fed\u4ee3\u5668\u65b9\u6cd5\njQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];\n")),Object(o.b)("p",null,"\u597d\u7684\uff0c\u6211\u77e5\u9053\u4f60\u5728\u60f3\u4ec0\u4e48\uff0c\u90a3\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"[Symbol.iterator]")," \u8bed\u6cd5\u770b\u8d77\u6765\u5f88\u5947\u602a\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u5462\uff1f\u8fd9\u91cc\u901a\u8fc7 Symbol \u5904\u7406\u4e86\u4e00\u4e0b\u65b9\u6cd5\u7684\u540d\u79f0\u3002\u6807\u51c6\u59d4\u5458\u4f1a\u53ef\u4ee5\u628a\u8fd9\u4e2a\u65b9\u6cd5\u547d\u540d\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},".iterator()")," \u65b9\u6cd5\uff0c\u4f46\u662f\u5982\u679c\u4f60\u7684\u4ee3\u7801\u4e2d\u7684\u5bf9\u8c61\u53ef\u80fd\u4e5f\u6709\u4e00\u4e9b ",Object(o.b)("inlineCode",{parentName:"p"},".iterator()")," \u65b9\u6cd5\uff0c\u8fd9\u4e00\u5b9a\u4f1a\u8ba9\u4f60\u611f\u5230\u975e\u5e38\u56f0\u60d1\u3002\u4e8e\u662f\u5728 ES6 \u6807\u51c6\u4e2d\u4f7f\u7528 symbol \u6765\u4f5c\u4e3a\u65b9\u6cd5\u540d\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5b57\u7b26\u4e32\u3002"),Object(o.b)("p",null,"\u4f60\u5927\u6982\u4e5f\u731c\u5230\u4e86\uff0cSymbols \u662f ES6 \u4e2d\u7684\u65b0\u7c7b\u578b\uff0c\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\u8bb2\u89e3\u3002\u73b0\u5728\uff0c\u4f60\u9700\u8981\u8bb0\u4f4f\uff0c\u57fa\u4e8e\u65b0\u6807\u51c6\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5168\u65b0\u7684 symbol\uff0c\u5c31\u50cf ",Object(o.b)("inlineCode",{parentName:"p"},"Symbol.iterator"),"\uff0c\u5982\u6b64\u4e00\u6765\u53ef\u4ee5\u4fdd\u8bc1\u4e0d\u4e0e\u4efb\u4f55\u5df2\u6709\u4ee3\u7801\u4ea7\u751f\u51b2\u7a81\u3002\u8fd9\u6837\u505a\u7684\u4ee3\u4ef7\u662f\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u8bed\u6cd5\u770b\u8d77\u6765\u4f1a\u7565\u663e\u751f\u786c\uff0c\u4f46\u662f\u8fd9\u5fae\u4e4e\u5176\u5fae\u4ee3\u4ef7\u5374\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u5982\u6b64\u591a\u7684\u65b0\u7279\u6027\u548c\u65b0\u529f\u80fd\uff0c\u5e76\u4e14\u4f60\u6240\u505a\u7684\u8fd9\u4e00\u5207\u53ef\u4ee5\u5b8c\u7f8e\u5730\u5411\u540e\u517c\u5bb9\u3002"),Object(o.b)("p",null,"\u6240\u6709\u62e5\u6709 ",Object(o.b)("inlineCode",{parentName:"p"},"Symbol.iterator")," \u7684\u5bf9\u8c61\u88ab\u79f0\u4e3a\u53ef\u8fed\u4ee3\u7684\u3002\u5728\u63a5\u4e0b\u6765\u7684\u6587\u7ae0\u4e2d\u4f60\u4f1a\u53d1\u73b0\uff0c\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u6982\u5ff5\u51e0\u4e4e\u8d2f\u7a7f\u4e8e\u6574\u95e8\u8bed\u8a00\u4e4b\u4e2d\uff0c\u4e0d\u4ec5\u662f for-of \u5faa\u73af\uff0c\u8fd8\u6709 Map \u548c Set \u6784\u9020\u51fd\u6570\u3001\u89e3\u6784\u8d4b\u503c\uff0c\u4ee5\u53ca\u65b0\u7684\u5c55\u5f00\u64cd\u4f5c\u7b26\u3002\n\u8fed\u4ee3\u5668\u5bf9\u8c61"),Object(o.b)("p",null,"\u73b0\u5728\uff0c\u4f60\u5c06\u65e0\u987b\u4eb2\u81ea\u4ece\u96f6\u5f00\u59cb\u5b9e\u73b0\u4e00\u4e2a\u5bf9\u8c61\u8fed\u4ee3\u5668\uff0c\u6211\u4eec\u4f1a\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u3002\u4e3a\u4e86\u5e2e\u52a9\u4f60\u7406\u89e3\u672c\u6587\uff0c\u6211\u4eec\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b\u8fed\u4ee3\u5668\uff08\u5982\u679c\u4f60\u8df3\u8fc7\u8fd9\u4e00\u7ae0\uff0c\u4f60\u5c06\u9519\u8fc7\u975e\u5e38\u7cbe\u5f69\u7684\u6280\u672f\u7ec6\u8282\uff09\u3002"),Object(o.b)("p",null,"for-of \u5faa\u73af\u9996\u5148\u8c03\u7528\u96c6\u5408\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Symbol.iterator")," \u65b9\u6cd5\uff0c\u7d27\u63a5\u7740\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\u3002\u8fed\u4ee3\u5668\u5bf9\u8c61\u53ef\u4ee5\u662f\u4efb\u610f\u5177\u6709",Object(o.b)("inlineCode",{parentName:"p"},".next()")," \u65b9\u6cd5\u7684\u5bf9\u8c61\uff1bfor-of \u5faa\u73af\u5c06\u91cd\u590d\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u6bcf\u6b21\u5faa\u73af\u8c03\u7528\u4e00\u6b21\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u6bb5\u4ee3\u7801\u662f\u6211\u80fd\u60f3\u51fa\u6765\u7684\u6700\u7b80\u5355\u7684\u8fed\u4ee3\u5668\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var zeroesForeverIterator = {\n    [Symbol.iterator]: function () {\n        return this;\n    },\n    next: function () {\n        return {done: false, value: 0};\n    }\n};\n")),Object(o.b)("p",null,"\u6bcf\u4e00\u6b21\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},".next()")," \u65b9\u6cd5\uff0c\u5b83\u90fd\u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u8fd4\u56de\u7ed9 for-of \u5faa\u73af\u7684\u7ed3\u679c\u6709\u4e24\u79cd\u53ef\u80fd\uff1a(a) \u6211\u4eec\u5c1a\u672a\u5b8c\u6210\u8fed\u4ee3\uff1b(b) \u4e0b\u4e00\u4e2a\u503c\u4e3a 0\u3002\u8fd9\u610f\u5473\u7740 ",Object(o.b)("inlineCode",{parentName:"p"},"(value of zeroesForeverIterator) {}"),"\u5c06\u4f1a\u662f\u4e00\u4e2a\u65e0\u9650\u5faa\u73af\u3002\u5f53\u7136\uff0c\u4e00\u822c\u6765\u8bf4\u8fed\u4ee3\u5668\u4e0d\u4f1a\u5982\u6b64\u7b80\u5355\u3002"),Object(o.b)("p",null,"\u8fd9\u4e2a\u8fed\u4ee3\u5668\u7684\u8bbe\u8ba1\uff0c\u4ee5\u53ca\u5b83\u7684",Object(o.b)("inlineCode",{parentName:"p"},".done")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},".value")," \u5c5e\u6027\uff0c\u4ece\u8868\u9762\u4e0a\u770b\u4e0e\u5176\u5b83\u8bed\u8a00\u4e2d\u7684\u8fed\u4ee3\u5668\u4e0d\u592a\u4e00\u6837\u3002\u5728 Java \u4e2d\uff0c\u8fed\u4ee3\u5668\u6709\u5206\u79bb\u7684",Object(o.b)("inlineCode",{parentName:"p"},".hasNext()")," \u548c",Object(o.b)("inlineCode",{parentName:"p"},".next()")," \u65b9\u6cd5\u3002\u5728 Python \u4e2d\uff0c\u4ed6\u4eec\u53ea\u6709\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},".next()")," \u65b9\u6cd5\uff0c\u5f53\u6ca1\u6709\u66f4\u591a\u503c\u65f6\u629b\u51fa StopIteration \u5f02\u5e38\u3002\u4f46\u662f\u6240\u6709\u8fd9\u4e09\u79cd\u8bbe\u8ba1\u4ece\u6839\u672c\u4e0a\u8bb2\u90fd\u8fd4\u56de\u4e86\u76f8\u540c\u7684\u4fe1\u606f\u3002"),Object(o.b)("p",null,"\u8fed\u4ee3\u5668\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u53ef\u9009\u7684",Object(o.b)("inlineCode",{parentName:"p"},".return()")," \u548c",Object(o.b)("inlineCode",{parentName:"p"},".throw(exc)")," \u65b9\u6cd5\u3002\u5982\u679c for-of \u5faa\u73af\u8fc7\u65e9\u9000\u51fa\u4f1a\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},".return()")," \u65b9\u6cd5\uff0c\u5f02\u5e38\u3001break \u8bed\u53e5\u6216 return \u8bed\u53e5\u5747\u53ef\u89e6\u53d1\u8fc7\u65e9\u9000\u51fa\u3002\u5982\u679c\u8fed\u4ee3\u5668\u9700\u8981\u6267\u884c\u4e00\u4e9b\u6e05\u6d01\u6216\u91ca\u653e\u8d44\u6e90\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5728",Object(o.b)("inlineCode",{parentName:"p"},".return()")," \u65b9\u6cd5\u4e2d\u5b9e\u73b0\u3002\u5927\u591a\u6570\u8fed\u4ee3\u5668\u65b9\u6cd5\u65e0\u987b\u5b9e\u73b0\u8fd9\u4e00\u65b9\u6cd5\u3002",Object(o.b)("inlineCode",{parentName:"p"},".throw(exc)")," \u65b9\u6cd5\u7684\u4f7f\u7528\u573a\u666f\u5c31\u66f4\u7279\u6b8a\u4e86\uff1afor-of \u5faa\u73af\u6c38\u8fdc\u4e0d\u4f1a\u8c03\u7528\u5b83\u3002\u4f46\u662f\u6211\u4eec\u8fd8\u662f\u4f1a\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u66f4\u8be6\u7ec6\u5730\u8bb2\u89e3\u5b83\u7684\u4f5c\u7528\u3002"),Object(o.b)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u4e86\u89e3\u6240\u6709\u7ec6\u8282\uff0c\u53ef\u4ee5\u5199\u4e00\u4e2a\u7b80\u5355\u7684 for-of \u5faa\u73af\u7136\u540e\u6309\u7167\u4e0b\u9762\u7684\u65b9\u6cd5\u8c03\u7528\u91cd\u5199\u88ab\u8fed\u4ee3\u7684\u5bf9\u8c61\u3002"),Object(o.b)("p",null,"\u9996\u5148\u662f for-of \u5faa\u73af\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"for (VAR of ITERABLE) {\n  // \u4e00\u4e9b\u8bed\u53e5\n}\n")),Object(o.b)("p",null,"\u7136\u540e\u662f\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u548c\u5c11\u8bb8\u4e34\u65f6\u53d8\u91cf\u5b9e\u73b0\u7684\u4e0e\u4e4b\u524d\u5927\u81f4\u76f8\u5f53\u7684\u793a\u4f8b\uff0c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var $iterator = ITERABLE[Symbol.iterator]();\nvar $result = $iterator.next();\nwhile (!$result.done) {\n   VAR = $result.value;\n   // \u4e00\u4e9b\u8bed\u53e5\n   $result = $iterator.next();\n}\n")),Object(o.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u6ca1\u6709\u5c55\u793a",Object(o.b)("inlineCode",{parentName:"p"},".return()")," \u65b9\u6cd5\u662f\u5982\u4f55\u5904\u7406\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u8fd9\u90e8\u5206\u4ee3\u7801\uff0c\u4f46\u6211\u8ba4\u4e3a\u8fd9\u5bf9\u4e8e\u6211\u4eec\u6b63\u5728\u8bb2\u89e3\u7684\u5185\u5bb9\u6765\u8bf4\u8fc7\u4e8e\u590d\u6742\u4e86\u3002for-of \u5faa\u73af\u7528\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u5176\u80cc\u540e\u6709\u7740\u975e\u5e38\u590d\u6742\u7684\u673a\u5236\u3002"),Object(o.b)("h2",{id:"\u6211\u4f55\u65f6\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e00\u65b0\u7279\u6027\uff1f"},"\u6211\u4f55\u65f6\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e00\u65b0\u7279\u6027\uff1f"),Object(o.b)("p",null,"\u76ee\u524d\uff0c\u5bf9\u4e8e for-of \u5faa\u73af\u65b0\u7279\u6027\uff0c\u6240\u6709\u6700\u65b0\u7248\u672c Firefox \u90fd\uff08\u90e8\u5206\uff09\u652f\u6301\uff08\u8bd1\u6ce8\uff1a\u4ece FF 13 \u5f00\u59cb\u9646\u7eed\u652f\u6301\u76f8\u5173\u529f\u80fd\uff0cFF 36 - FF 40 \u57fa\u672c\u652f\u6301\u5927\u90e8\u5206\u7279\u6027\uff09\uff0c\u5728 Chrome \u4e2d\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee chrome://flags \u5e76\u542f\u7528\u201c\u5b9e\u9a8c\u6027 JavaScript\u201d\u6765\u652f\u6301\u3002\u5fae\u8f6f\u7684 Spartan \u6d4f\u89c8\u5668\u652f\u6301\uff0c\u4f46\u662f IE \u4e0d\u652f\u6301\u3002\u5982\u679c\u4f60\u60f3\u5728 web \u73af\u5883\u4e2d\u4f7f\u7528\u8fd9\u79cd\u65b0\u8bed\u6cd5\uff0c\u540c\u65f6\u9700\u8981\u652f\u6301 IE \u548c Safari\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Babel \u6216 Google \u7684 Traceur \u8fd9\u4e9b\u7f16\u8bd1\u5668\u6765\u5c06\u4f60\u7684 ES6 \u4ee3\u7801\u7ffb\u8bd1\u4e3a Web \u53cb\u597d\u7684 ES5 \u4ee3\u7801\u3002"),Object(o.b)("p",null,"\u800c\u5728\u670d\u52a1\u7aef\uff0c\u4f60\u4e0d\u9700\u8981\u7c7b\u4f3c\u7684\u7f16\u8bd1\u5668\uff0cio.js \u4e2d\u9ed8\u8ba4\u652f\u6301 ES6 \u65b0\u8bed\u6cd5\uff08\u90e8\u5206\uff09\uff0c\u5728 Node \u4e2d\u9700\u8981\u6dfb\u52a0\u2013harmony \u9009\u9879\u6765\u542f\u7528\u76f8\u5173\u7279\u6027\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{done: true}\n")),Object(o.b)("p",null,"\u55b2\uff01"),Object(o.b)("p",null,"\u597d\u7684\uff0c\u6211\u4eec\u4eca\u5929\u7684\u8bb2\u89e3\u5c31\u5230\u8fd9\u91cc\uff0c\u4f46\u662f\u5bf9\u4e8e for-of \u5faa\u73af\u7684\u4f7f\u7528\u8fdc\u6ca1\u6709\u7ed3\u675f\u3002"),Object(o.b)("p",null,"\u5728 ES6 \u4e2d\u6709\u4e00\u79cd\u65b0\u7684\u5bf9\u8c61\u4e0e for-of \u5faa\u73af\u914d\u5408\u4f7f\u7528\u975e\u5e38\u5951\u5408\uff0c\u6211\u6ca1\u6709\u63d0\u53ca\u5b83\u56e0\u4e3a\u5b83\u662f\u6211\u4eec\u4e0b\u5468\u6587\u7ae0\u7684\u4e3b\u9898\uff0c\u6211\u8ba4\u4e3a\u8fd9\u79cd\u65b0\u7279\u6027\u662f ES6 \u79cd\u6700\u68a6\u5e7b\u7684\u5730\u65b9\uff0c\u5982\u679c\u4f60\u5c1a\u672a\u5728\u7c7b\u4f3c Python \u548c C#\u7684\u8bed\u8a00\u4e2d\u9047\u5230\u5b83\uff0c\u4f60\u4e00\u5f00\u59cb\u5f88\u53ef\u80fd\u4f1a\u53d1\u73b0\u5b83\u4ee4\u4eba\u96be\u4ee5\u7f6e\u4fe1\uff0c\u4f46\u662f\u8fd9\u662f\u7f16\u5199\u8fed\u4ee3\u5668\u6700\u7b80\u5355\u7684\u65b9\u5f0f\uff0c\u5728\u91cd\u6784\u4e2d\u975e\u5e38\u6709\u7528\uff0c\u5e76\u4e14\u5b83\u5f88\u53ef\u80fd\u6539\u53d8\u6211\u4eec\u4e66\u5199\u5f02\u6b65\u4ee3\u7801\u7684\u65b9\u5f0f\uff0c\u65e0\u8bba\u662f\u5728\u6d4f\u89c8\u5668\u73af\u5883\u8fd8\u662f\u670d\u52a1\u5668\u73af\u5883\uff0c\u6240\u4ee5\uff0c\u4e0b\u5468\u7684\u6df1\u5165\u6d45\u51fa ES6 \u4e2d\uff0c\u8bf7\u52a1\u5fc5\u4e00\u8d77\u6765\u4ed4\u7ec6\u770b\u770b ES6 \u7684\u751f\u6210\u5668\uff1agenerators\u3002"),Object(o.b)(b.a,{mdxType:"BottomCopyRight"}))}s.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),j=r,m=u["".concat(l,".").concat(j)]||u[j]||s[j]||o;return t?a.a.createElement(m,b(b({ref:n},c),{},{components:t})):a.a.createElement(m,b({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=j;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},232:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0),a=t.n(r);class o extends a.a.Component{render(){return a.a.createElement("div",null,"\u611f\u8c22",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(4),a=t(0),o=t.n(a),l=function(e){function n(n){return e.call(this,n)||this}return Object(r.a)(n,e),n.prototype.render=function(){return o.a.createElement("b",null,"\u672c\u6587\u6458\u6284\u4e8e ",o.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName),", \u4ec5\u7528\u4e8e\u4e2a\u4eba\u5b66\u4e60\u5907\u4efd\u6240\u7528, \u6240\u6709\u6743\u5f52 ",o.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName)," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u8054\u7cfb alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587.")},n}(o.a.Component);t(231);o.a.Component}}]);