(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),l=(t(0),t(228)),i=t(233),c=t(232),o={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e09\uff09\uff1a\u751f\u6210\u5668 Generators",sidebar_label:"\u751f\u6210\u5668 Generators",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},b={unversionedId:"articles/es6-in-depth/2-generators",id:"articles/es6-in-depth/2-generators",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e09\uff09\uff1a\u751f\u6210\u5668 Generators",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/2-generators.md",slug:"/articles/es6-in-depth/2-generators",permalink:"/docs/articles/es6-in-depth/2-generators",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/2-generators.md",version:"current",sidebar_label:"\u751f\u6210\u5668 Generators",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e8c\uff09\uff1a\u8fed\u4ee3\u5668\u548c for-of \u5faa\u73af",permalink:"/docs/articles/es6-in-depth/1-iterators-and-the-for-of-loop"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u56db\uff09\uff1a\u6a21\u677f\u5b57\u7b26\u4e32",permalink:"/docs/articles/es6-in-depth/3-template-string"}},p=[{value:"ES6 \u751f\u6210\u5668\uff08Generators\uff09\u7b80\u4ecb",id:"es6-\u751f\u6210\u5668\uff08generators\uff09\u7b80\u4ecb",children:[]},{value:"\u751f\u6210\u5668\u505a\u4e86\u4ec0\u4e48\uff1f",id:"\u751f\u6210\u5668\u505a\u4e86\u4ec0\u4e48\uff1f",children:[]},{value:"\u751f\u6210\u5668\u548c\u5f02\u6b65\u4ee3\u7801",id:"\u751f\u6210\u5668\u548c\u5f02\u6b65\u4ee3\u7801",children:[]},{value:"\u5982\u4f55\u5e94\u7528\u8fd9\u4e9b\u75af\u72c2\u7684\u65b0\u7279\u6027\uff1f",id:"\u5982\u4f55\u5e94\u7528\u8fd9\u4e9b\u75af\u72c2\u7684\u65b0\u7279\u6027\uff1f",children:[]},{value:"yield;",id:"yield",children:[]}],s={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(i.a,{sourceName:"InfoQ.cn",sourceLink:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-generators"},"\u539f\u6587")),Object(l.b)("p",null,"\u4eca\u5929\u7684\u8fd9\u7bc7\u6587\u7ae0\u4ee4\u6211\u611f\u5230\u975e\u5e38\u5174\u594b\uff0c\u6211\u4eec\u5c06\u4e00\u8d77\u9886\u7565 ES6 \u4e2d\u6700\u5177\u9b54\u529b\u7684\u7279\u6027\u3002"),Object(l.b)("p",null,"\u4e3a\u4ec0\u4e48\u8bf4\u662f\u201c\u6700\u5177\u9b54\u529b\u7684\u201d\uff1f\u5bf9\u4e8e\u521d\u5b66\u8005\u6765\u8bf4\uff0c\u6b64\u7279\u6027\u4e0e JS \u4e4b\u524d\u5df2\u6709\u7684\u7279\u6027\u622a\u7136\u4e0d\u540c\uff0c\u53ef\u80fd\u4f1a\u89c9\u5f97\u6709\u70b9\u6666\u6da9\u96be\u61c2\u3002\u4f46\u662f\uff0c\u4ece\u67d0\u79cd\u610f\u4e49\u4e0a\u6765\u8bf4\uff0c\u5b83\u4f7f\u8bed\u8a00\u5185\u90e8\u7684\u5e38\u6001\u884c\u4e3a\u53d8\u5f97\u66f4\u52a0\u5f3a\u5927\uff0c\u5982\u679c\u8fd9\u90fd\u4e0d\u7b97\u6709\u9b54\u529b\uff0c\u6211\u4e0d\u77e5\u9053\u8fd8\u6709\u4ec0\u4e48\u80fd\u7b97\u3002"),Object(l.b)("p",null,"\u4e0d\u4ec5\u5982\u6b64\uff0c\u6b64\u7279\u6027\u53ef\u4ee5\u6781\u5927\u5730\u7b80\u5316\u4ee3\u7801\uff0c\u5b83\u751a\u81f3\u53ef\u4ee5\u5e2e\u52a9\u4f60\u9003\u79bb\u201c\u56de\u8c03\u5730\u72f1\u201d\u3002"),Object(l.b)("p",null,"\u65e2\u7136\u65b0\u7279\u6027\u5982\u6b64\u795e\u5947\uff0c\u90a3\u4e48\u5c31\u4e00\u8d77\u6df1\u5165\u4e86\u89e3\u5b83\u7684\u9b54\u529b\u5427\uff01"),Object(l.b)("h2",{id:"es6-\u751f\u6210\u5668\uff08generators\uff09\u7b80\u4ecb"},"ES6 \u751f\u6210\u5668\uff08Generators\uff09\u7b80\u4ecb"),Object(l.b)("p",null,"\u4ec0\u4e48\u662f\u751f\u6210\u5668\uff1f"),Object(l.b)("p",null,"\u6211\u4eec\u4ece\u4e00\u4e2a\u793a\u4f8b\u5f00\u59cb\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function* quips(name) {\n  yield " \u4f60\u597d " + name + "!";\n  yield " \u5e0c\u671b\u4f60\u80fd\u559c\u6b22\u8fd9\u7bc7\u4ecb\u7ecd ES6 \u7684\u8bd1\u6587 ";\n  if (name.startsWith("X")) {\n    yield " \u4f60\u7684\u540d\u5b57 " + name + "  \u9996\u5b57\u6bcd\u662f X\uff0c\u8fd9\u5f88\u9177\uff01";\n  }\n  yield " \u6211\u4eec\u4e0b\u6b21\u518d\u89c1\uff01";\n}\n')),Object(l.b)("p",null,"\u8fd9\u662f\u4e00\u53ea\u4f1a\u8bf4\u8bdd\u7684\u732b\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5f88\u53ef\u80fd\u4ee3\u8868\u7740\u5f53\u4eca\u4e92\u8054\u7f51\u4e0a\u6700\u91cd\u8981\u7684\u4e00\u7c7b\u5e94\u7528\u3002\uff08\u8bd5\u7740\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\uff0c\u4e0e\u8fd9\u53ea\u732b\u4e92\u52a8\u4e00\u4e0b\uff0c\u5982\u679c\u4f60\u611f\u5230\u6709\u4e9b\u56f0\u60d1\uff0c\u56de\u5230\u8fd9\u91cc\u7ee7\u7eed\u9605\u8bfb\uff09\u3002"),Object(l.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u5f88\u50cf\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u751f\u6210\u5668\u51fd\u6570\uff0c\u5b83\u4e0e\u666e\u901a\u51fd\u6570\u6709\u5f88\u591a\u5171\u540c\u70b9\uff0c\u4f46\u662f\u4e8c\u8005\u6709\u5982\u4e0b\u533a\u522b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u666e\u901a\u51fd\u6570\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"function")," \u58f0\u660e\uff0c\u800c\u751f\u6210\u5668\u51fd\u6570\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"function*")," \u58f0\u660e\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5728\u751f\u6210\u5668\u51fd\u6570\u5185\u90e8\uff0c\u6709\u4e00\u79cd\u7c7b\u4f3c ",Object(l.b)("inlineCode",{parentName:"li"},"return")," \u7684\u8bed\u6cd5\uff1a\u5173\u952e\u5b57 ",Object(l.b)("inlineCode",{parentName:"li"},"yield")," \u3002\u4e8c\u8005\u7684\u533a\u522b\u662f\uff0c\u666e\u901a\u51fd\u6570\u53ea\u53ef\u4ee5 ",Object(l.b)("inlineCode",{parentName:"li"},"return")," \u4e00\u6b21\uff0c\u800c\u751f\u6210\u5668\u51fd\u6570\u53ef\u4ee5 ",Object(l.b)("inlineCode",{parentName:"li"},"yield")," \u591a\u6b21\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u53ea ",Object(l.b)("inlineCode",{parentName:"li"},"yield")," \u4e00\u6b21\uff09\u3002\u5728\u751f\u6210\u5668\u7684\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u9047\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"yield")," \u8868\u8fbe\u5f0f\u7acb\u5373\u6682\u505c\uff0c\u540e\u7eed\u53ef\u6062\u590d\u6267\u884c\u72b6\u6001\u3002")),Object(l.b)("p",null,"\u8fd9\u5c31\u662f\u666e\u901a\u51fd\u6570\u548c\u751f\u6210\u5668\u51fd\u6570\u4e4b\u95f4\u6700\u5927\u7684\u533a\u522b\uff0c\u666e\u901a\u51fd\u6570\u4e0d\u80fd\u81ea\u6682\u505c\uff0c\u751f\u6210\u5668\u51fd\u6570\u53ef\u4ee5\u3002"),Object(l.b)("h2",{id:"\u751f\u6210\u5668\u505a\u4e86\u4ec0\u4e48\uff1f"},"\u751f\u6210\u5668\u505a\u4e86\u4ec0\u4e48\uff1f"),Object(l.b)("p",null,"\u5f53\u4f60\u8c03\u7528 quips() \u751f\u6210\u5668\u51fd\u6570\u65f6\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'> var iter = quips("jorendorff");\n  [object Generator]\n    \n> iter.next()\n  { value: " \u4f60\u597d jorendorff!", done: false }\n    \n> iter.next()\n  { value: " \u5e0c\u671b\u4f60\u80fd\u559c\u6b22\u8fd9\u7bc7\u4ecb\u7ecd ES6 \u7684\u8bd1\u6587 ", done: false }\n    \n> iter.next()\n  { value: " \u6211\u4eec\u4e0b\u6b21\u518d\u89c1\uff01", done: false }\n    \n> iter.next()\n  { value: undefined, done: true }\n')),Object(l.b)("p",null,"\u4f60\u5927\u6982\u5df2\u7ecf\u4e60\u60ef\u4e86\u666e\u901a\u51fd\u6570\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u5f53\u4f60\u8c03\u7528\u5b83\u4eec\u65f6\uff0c\u5b83\u4eec\u7acb\u5373\u5f00\u59cb\u8fd0\u884c\uff0c\u76f4\u5230\u9047\u5230 ",Object(l.b)("inlineCode",{parentName:"p"},"return")," \u6216\u629b\u51fa\u5f02\u5e38\u65f6\u624d\u9000\u51fa\u6267\u884c\uff0c\u4f5c\u4e3a JS \u7a0b\u5e8f\u5458\u4f60\u4e00\u5b9a\u6df1\u8c19\u6b64\u9053\u3002"),Object(l.b)("p",null,"\u751f\u6210\u5668\u8c03\u7528\u770b\u8d77\u6765\u975e\u5e38\u7c7b\u4f3c\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"quips(\u201cjorendorff\u201d)"),"\u3002\u4f46\u662f\uff0c\u5f53\u4f60\u8c03\u7528\u4e00\u4e2a\u751f\u6210\u5668\u65f6\uff0c\u5b83\u5e76\u975e\u7acb\u5373\u6267\u884c\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u5df2\u6682\u505c\u7684\u751f\u6210\u5668\u5bf9\u8c61\uff08\u4e0a\u8ff0\u5b9e\u4f8b\u4ee3\u7801\u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"iter"),"\uff09\u3002\u4f60\u53ef\u5c06\u8fd9\u4e2a\u751f\u6210\u5668\u5bf9\u8c61\u89c6\u4e3a\u4e00\u6b21\u51fd\u6570\u8c03\u7528\uff0c\u53ea\u4e0d\u8fc7\u7acb\u5373\u51bb\u7ed3\u4e86\uff0c\u5b83\u6070\u597d\u5728\u751f\u6210\u5668\u51fd\u6570\u7684\u6700\u9876\u7aef\u7684\u7b2c\u4e00\u884c\u4ee3\u7801\u4e4b\u524d\u51bb\u7ed3\u4e86\u3002"),Object(l.b)("p",null,"\u6bcf\u5f53\u4f60\u8c03\u7528\u751f\u6210\u5668\u5bf9\u8c61\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},".next()")," \u65b9\u6cd5\u65f6\uff0c\u51fd\u6570\u8c03\u7528\u5c06\u5176\u81ea\u8eab\u89e3\u51bb\u5e76\u4e00\u76f4\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"yield")," \u8868\u8fbe\u5f0f\uff0c\u518d\u6b21\u6682\u505c\u3002"),Object(l.b)("p",null,"\u8fd9\u4e5f\u662f\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u6bcf\u6b21\u90fd\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"iter.next()")," \u7684\u539f\u56e0\uff0c\u6211\u4eec\u83b7\u5f97\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"quips()")," \u51fd\u6570\u4f53\u4e2d ",Object(l.b)("inlineCode",{parentName:"p"},"yield")," \u8868\u8fbe\u5f0f\u751f\u6210\u7684\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\u503c\u3002"),Object(l.b)("p",null,"\u8c03\u7528\u6700\u540e\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"iter.next()")," \u65f6\uff0c\u6211\u4eec\u6700\u7ec8\u62b5\u8fbe\u751f\u6210\u5668\u51fd\u6570\u7684\u672b\u5c3e\uff0c\u6240\u4ee5\u8fd4\u56de\u7ed3\u679c\u4e2d ",Object(l.b)("inlineCode",{parentName:"p"},"done")," \u7684\u503c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"true")," \u3002\u62b5\u8fbe\u51fd\u6570\u7684\u672b\u5c3e\u610f\u5473\u7740\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u8fd4\u56de\u7ed3\u679c\u4e2d ",Object(l.b)("inlineCode",{parentName:"p"},"value")," \u7684\u503c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),Object(l.b)("p",null,"\u73b0\u5728\u56de\u5230\u4f1a\u8bf4\u8bdd\u7684\u732b\u7684demo \u9875\u9762\uff0c\u5c1d\u8bd5\u5728\u5faa\u73af\u4e2d\u52a0\u5165\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"yield")," \uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"),Object(l.b)("p",null,"\u5982\u679c\u7528\u4e13\u4e1a\u672f\u8bed\u63cf\u8ff0\uff0c\u6bcf\u5f53\u751f\u6210\u5668\u6267\u884cyields \u8bed\u53e5\uff0c\u751f\u6210\u5668\u7684\u5806\u6808\u7ed3\u6784\uff08\u672c\u5730\u53d8\u91cf\u3001\u53c2\u6570\u3001\u4e34\u65f6\u503c\u3001\u751f\u6210\u5668\u5185\u90e8\u5f53\u524d\u7684\u6267\u884c\u4f4d\u7f6e\uff09\u88ab\u79fb\u51fa\u5806\u6808\u3002\u7136\u800c\uff0c\u751f\u6210\u5668\u5bf9\u8c61\u4fdd\u7559\u4e86\u5bf9\u8fd9\u4e2a\u5806\u6808\u7ed3\u6784\u7684\u5f15\u7528\uff08\u5907\u4efd\uff09\uff0c\u6240\u4ee5\u7a0d\u540e\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},".next()")," \u53ef\u4ee5\u91cd\u65b0\u6fc0\u6d3b\u5806\u6808\u7ed3\u6784\u5e76\u4e14\u7ee7\u7eed\u6267\u884c\u3002"),Object(l.b)("p",null,"\u503c\u5f97\u7279\u522b\u4e00\u63d0\u7684\u662f\uff0c\u751f\u6210\u5668\u4e0d\u662f\u7ebf\u7a0b\uff0c\u5728\u652f\u6301\u7ebf\u7a0b\u7684\u8bed\u8a00\u4e2d\uff0c\u591a\u6bb5\u4ee3\u7801\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\uff0c\u901a\u901a\u5e38\u5bfc\u81f4\u7ade\u6001\u6761\u4ef6\u548c\u975e\u786e\u5b9a\u6027\uff0c\u4e0d\u8fc7\u540c\u65f6\u4e5f\u5e26\u6765\u4e0d\u9519\u7684\u6027\u80fd\u3002\u751f\u6210\u5668\u5219\u5b8c\u5168\u4e0d\u540c\u3002\u5f53\u751f\u6210\u5668\u8fd0\u884c\u65f6\uff0c\u5b83\u548c\u8c03\u7528\u8005\u5904\u4e8e\u540c\u4e00\u7ebf\u7a0b\u4e2d\uff0c\u62e5\u6709\u786e\u5b9a\u7684\u8fde\u7eed\u6267\u884c\u987a\u5e8f\uff0c\u6c38\u4e0d\u5e76\u53d1\u3002\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u4e0d\u540c\u7684\u662f\uff0c\u751f\u6210\u5668\u53ea\u6709\u5728\u5176\u51fd\u6570\u4f53\u5185\u6807\u8bb0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"yield")," \u7684\u70b9\u624d\u4f1a\u6682\u505c\u3002"),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u4e86\u89e3\u4e86\u751f\u6210\u5668\u7684\u539f\u7406\uff0c\u9886\u7565\u8fc7\u751f\u6210\u5668\u7684\u8fd0\u884c\u3001\u6682\u505c\u6062\u590d\u8fd0\u884c\u7684\u4e0d\u540c\u72b6\u6001\u3002\u90a3\u4e48\uff0c\u8fd9\u4e9b\u5947\u602a\u7684\u529f\u80fd\u7a76\u7adf\u6709\u4f55\u7528\u5904\uff1f\n\u751f\u6210\u5668\u662f\u8fed\u4ee3\u5668\uff01"),Object(l.b)("p",null,"\u4e0a\u5468\uff0c\u6211\u4eec\u5b66\u4e60\u4e86ES6 \u7684\u8fed\u4ee3\u5668\uff0c\u5b83\u662fES6 \u4e2d\u72ec\u7acb\u7684\u5185\u5efa\u7c7b\uff0c\u540c\u65f6\u4e5f\u662f\u8bed\u8a00\u7684\u4e00\u4e2a\u6269\u5c55\u70b9\uff0c\u901a\u8fc7\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"p"},"Symbol.iterator")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},".next()")," \u4e24\u4e2a\u65b9\u6cd5\u4f60\u5c31\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u8fed\u4ee3\u5668\u3002"),Object(l.b)("p",null,"\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3\u4e0d\u662f\u4e00\u6869\u5c0f\u4e8b\uff0c\u6211\u4eec\u4e00\u8d77\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 range \u8fed\u4ee3\u5668\uff0c\u5b83\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\u7684\u6240\u6709\u6570\u76f8\u52a0\u3002\u9996\u5148\u662f\u4f20\u7edf C \u7684 for(;;) \u5faa\u73af\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'// \u5e94\u8be5\u5f39\u51fa\u4e09\u6b21 "ding"\nfor (var value of range(0, 3)) {\n  alert("Ding! at floor #" + value);\n}\n')),Object(l.b)("p",null,"\u4f7f\u7528 ES6 \u7684\u7c7b\u7684\u89e3\u51b3\u65b9\u6848\uff08\u5982\u679c\u4e0d\u6e05\u695a\u8bed\u6cd5\u7ec6\u8282\uff0c\u65e0\u987b\u62c5\u5fc3\uff0c\u6211\u4eec\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u6587\u7ae0\u4e2d\u4e3a\u4f60\u8bb2\u89e3\uff09\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"class RangeIterator {\n  constructor(start, stop) {\n    this.value = start;\n    this.stop = stop;\n  }\n\n  [Symbol.iterator]() { return this; }\n  next() {\n    var value = this.value;\n    if (value < this.stop) {\n      this.value++;\n      return {done: false, value: value};\n    } else {\n      return {done: true, value: undefined};\n    }\n  }\n}\n \n    \n// \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\uff0c\u53ef\u4ee5\u4ece start \u5230 stop \u8ba1\u6570\u3002\nfunction range(start, stop) {\n  return new RangeIterator(start, stop);\n}\n")),Object(l.b)("p",null,"\u8fd9\u91cc\u7684\u5b9e\u73b0\u7c7b\u4f3c Java \u6216 Swift \u4e2d\u7684\u8fed\u4ee3\u5668\uff0c\u4e0d\u662f\u5f88\u7cdf\u7cd5\uff0c\u4f46\u4e5f\u4e0d\u662f\u5b8c\u5168\u6ca1\u6709\u95ee\u9898\u3002\u6211\u4eec\u5f88\u96be\u8bf4\u6e05\u8fd9\u6bb5\u4ee3\u7801\u4e2d\u662f\u5426\u6709 bug\uff0c\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u5b8c\u5168\u4e0d\u50cf\u6211\u4eec\u8bd5\u56fe\u6a21\u4eff\u7684\u4f20\u7edf for (;;) \u5faa\u73af\uff0c\u8fed\u4ee3\u5668\u534f\u8bae\u8feb\u4f7f\u6211\u4eec\u62c6\u89e3\u6389\u5faa\u73af\u90e8\u5206\u3002"),Object(l.b)("p",null,"\u6b64\u65f6\u6b64\u523b\u4f60\u5bf9\u8fed\u4ee3\u5668\u53ef\u80fd\u5c1a\u65e0\u611f\u89c9\uff0c\u4ed6\u4eec\u7528\u8d77\u6765\u5f88\u9177\uff0c\u4f46\u770b\u8d77\u6765\u6709\u4e9b\u96be\u4ee5\u5b9e\u73b0\u3002"),Object(l.b)("p",null,"\u4f60\u5927\u6982\u4e0d\u4f1a\u4e3a\u4e86\u4f7f\u8fed\u4ee3\u5668\u66f4\u6613\u4e8e\u6784\u5efa\u4ece\u800c\u5efa\u8bae\u6211\u4eec\u4e3a JS \u8bed\u8a00\u5f15\u5165\u4e00\u4e2a\u79bb\u5947\u53e4\u602a\u53c8\u91ce\u86ee\u7684\u65b0\u578b\u63a7\u5236\u6d41\u7ed3\u6784\uff0c\u4f46\u662f\u65e2\u7136\u6211\u4eec\u6709\u751f\u6210\u5668\uff0c\u662f\u5426\u53ef\u4ee5\u5728\u8fd9\u91cc\u5e94\u7528\u5b83\u4eec\u5462\uff1f\u4e00\u8d77\u5c1d\u8bd5\u4e00\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function* range(start, stop) {\n  for (var i = start; i < stop; i++)\n    yield i;\n}\n")),Object(l.b)("p",null,"\u4ee5\u4e0a4 \u884c\u4ee3\u7801\u5b9e\u73b0\u7684\u751f\u6210\u5668\u5b8c\u5168\u53ef\u4ee5\u66ff\u4ee3\u4e4b\u524d\u5f15\u5165\u4e86\u4e00\u6574\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"RangeIterator")," \u7c7b\u7684 23 \u884c\u4ee3\u7801\u7684\u5b9e\u73b0\u3002\u53ef\u884c\u7684\u539f\u56e0\u662f\uff1a\u751f\u6210\u5668\u662f\u8fed\u4ee3\u5668\u3002\u6240\u6709\u7684\u751f\u6210\u5668\u90fd\u6709\u5185\u5efa ",Object(l.b)("inlineCode",{parentName:"p"},".next()")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"Symbol.iterator")," \u65b9\u6cd5\u7684\u5b9e\u73b0\u3002\u4f60\u53ea\u987b\u7f16\u5199\u5faa\u73af\u90e8\u5206\u7684\u884c\u4e3a\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u90fd\u975e\u5e38\u8ba8\u538c\u88ab\u8feb\u7528\u88ab\u52a8\u8bed\u6001\u5199\u4e00\u5c01\u5f88\u957f\u7684\u90ae\u4ef6\uff0c\u4e0d\u501f\u52a9\u751f\u6210\u5668\u5b9e\u73b0\u8fed\u4ee3\u5668\u7684\u8fc7\u7a0b\u4e0e\u4e4b\u7c7b\u4f3c\uff0c\u4ee4\u4eba\u75db\u82e6\u4e0d\u582a\u3002\u5f53\u4f60\u7684\u8bed\u8a00\u4e0d\u518d\u7b80\u7ec3\uff0c\u8bf4\u51fa\u7684\u8bdd\u5c31\u4f1a\u53d8\u5f97\u96be\u4ee5\u7406\u89e3\u3002RangeIterator \u7684\u5b9e\u73b0\u4ee3\u7801\u5f88\u957f\u5e76\u4e14\u975e\u5e38\u5947\u602a\uff0c\u56e0\u4e3a\u4f60\u9700\u8981\u5728\u4e0d\u501f\u52a9\u5faa\u73af\u8bed\u6cd5\u7684\u524d\u63d0\u4e0b\u4e3a\u5b83\u6dfb\u52a0\u5faa\u73af\u529f\u80fd\u7684\u63cf\u8ff0\u3002\u6240\u4ee5\u751f\u6210\u5668\u662f\u6700\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff01"),Object(l.b)("p",null,"\u6211\u4eec\u5982\u4f55\u53d1\u6325\u4f5c\u4e3a\u8fed\u4ee3\u5668\u7684\u751f\u6210\u5668\u6240\u4ea7\u751f\u7684\u6700\u5927\u6548\u529b\uff1f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f7f\u4efb\u610f\u5bf9\u8c61\u53ef\u8fed\u4ee3\u3002\u7f16\u5199\u751f\u6210\u5668\u51fd\u6570\u904d\u5386\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u8fd0\u884c\u65f6 ",Object(l.b)("inlineCode",{parentName:"li"},"yield")," \u6bcf\u4e00\u4e2a\u503c\u3002\u7136\u540e\u5c06\u8fd9\u4e2a\u751f\u6210\u5668\u51fd\u6570\u4f5c\u4e3a\u8fd9\u4e2a\u5bf9\u8c61\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"[Symbol.iterator]")," \u65b9\u6cd5\u3002"),Object(l.b)("li",{parentName:"ul"},"\u7b80\u5316\u6570\u7ec4\u6784\u5efa\u51fd\u6570\u3002\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u51fd\u6570\uff0c\u6bcf\u6b21\u8c03\u7528\u7684\u65f6\u5019\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u7ed3\u679c\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// \u62c6\u5206\u4e00\u7ef4\u6570\u7ec4 icons\n// \u6839\u636e\u957f\u5ea6 rowLength\nfunction splitIntoRows(icons, rowLength) {\n  var rows = [];\n  for (var i = 0; i < icons.length; i += rowLength) {\n    rows.push(icons.slice(i, i + rowLength));\n  }\n  return rows;\n}\n")),Object(l.b)("p",null,"\u4f7f\u7528\u751f\u6210\u5668\u521b\u5efa\u7684\u4ee3\u7801\u76f8\u5bf9\u8f83\u77ed\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function* splitIntoRows(icons, rowLength) {\n  for (var i = 0; i < icons.length; i += rowLength) {\n    yield icons.slice(i, i + rowLength);\n  }\n}\n")),Object(l.b)("p",null,"\u884c\u4e3a\u4e0a\u552f\u4e00\u7684\u4e0d\u540c\u662f\uff0c\u4f20\u7edf\u5199\u6cd5\u7acb\u5373\u8ba1\u7b97\u6240\u6709\u7ed3\u679c\u5e76\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u7c7b\u578b\u7684\u7ed3\u679c\uff0c\u4f7f\u7528\u751f\u6210\u5668\u5219\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\uff0c\u6bcf\u6b21\u6839\u636e\u9700\u8981\u9010\u4e00\u5730\u8ba1\u7b97\u7ed3\u679c\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u83b7\u53d6\u5f02\u5e38\u5c3a\u5bf8\u7684\u7ed3\u679c\u3002\u4f60\u65e0\u6cd5\u6784\u5efa\u4e00\u4e2a\u65e0\u9650\u5927\u7684\u6570\u7ec4\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u6c38\u65e0\u6b62\u5883\u7684\u5e8f\u5217\u7684\u751f\u6210\u5668\uff0c\u6bcf\u6b21\u8c03\u7528\u53ef\u4ee5\u4ece\u4e2d\u53d6\u4efb\u610f\u6570\u91cf\u7684\u503c\u3002"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u6784\u590d\u6742\u5faa\u73af\u3002\u4f60\u662f\u5426\u5199\u8fc7\u53c8\u4e11\u53c8\u5927\u7684\u51fd\u6570\uff1f\u4f60\u662f\u5426\u613f\u610f\u5c06\u5176\u62c6\u5206\u4e3a\u4e24\u4e2a\u66f4\u7b80\u5355\u7684\u90e8\u5206\uff1f\u73b0\u5728\uff0c\u4f60\u7684\u91cd\u6784\u5de5\u5177\u7bb1\u91cc\u6709\u4e86\u65b0\u7684\u5229\u5203\u2014\u2014\u751f\u6210\u5668\u3002\u5f53\u4f60\u9762\u5bf9\u4e00\u4e2a\u590d\u6742\u7684\u5faa\u73af\u65f6\uff0c\u4f60\u53ef\u4ee5\u62c6\u5206\u51fa\u751f\u6210\u6570\u636e\u7684\u4ee3\u7801\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u72ec\u7acb\u7684\u751f\u6210\u5668\u51fd\u6570\uff0c\u7136\u540e\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"for (var data of myNewGenerator(args))")," \u904d\u5386\u6211\u4eec\u6240\u9700\u7684\u6570\u636e\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u4e0e\u8fed\u4ee3\u76f8\u5173\u7684\u5de5\u5177\u3002ES6 \u4e0d\u63d0\u4f9b\u7528\u6765\u8fc7\u6ee4\u3001\u6620\u5c04\u4ee5\u53ca\u9488\u5bf9\u4efb\u610f\u53ef\u8fed\u4ee3\u6570\u636e\u96c6\u8fdb\u884c\u7279\u6b8a\u64cd\u4f5c\u7684\u6269\u5c55\u5e93\u3002\u501f\u52a9\u751f\u6210\u5668\uff0c\u6211\u4eec\u53ea\u987b\u5199\u51e0\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u7684\u5de5\u5177\u3002")),Object(l.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u4f60\u9700\u8981\u4e00\u4e2a\u7b49\u6548\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"Array.prototype.filter")," \u5e76\u4e14\u652f\u6301 DOM NodeLists \u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function* filter(test, iterable) {  \n  for (var item of iterable) {  \n    if (test(item)) \n      yield item;   \n  } \n}\n")),Object(l.b)("p",null,"\u4f60\u770b\uff0c\u751f\u6210\u5668\u9b54\u529b\u56db\u5c04\uff01\u501f\u52a9\u5b83\u4eec\u7684\u529b\u91cf\u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8fed\u4ee3\u5668\uff0c\u8bb0\u4f4f\uff0c\u8fed\u4ee3\u5668\u8d2f\u7a7f ES6 \u7684\u59cb\u7ec8\uff0c\u5b83\u662f\u6570\u636e\u548c\u5faa\u73af\u7684\u65b0\u6807\u51c6\u3002"),Object(l.b)("p",null,"\u4ee5\u4e0a\u53ea\u662f\u751f\u6210\u5668\u7684\u51b0\u5c71\u4e00\u89d2\uff0c\u6700\u91cd\u8981\u7684\u529f\u80fd\u8bf7\u7ee7\u7eed\u89c2\u770b\uff01"),Object(l.b)("h2",{id:"\u751f\u6210\u5668\u548c\u5f02\u6b65\u4ee3\u7801"},"\u751f\u6210\u5668\u548c\u5f02\u6b65\u4ee3\u7801"),Object(l.b)("p",null,"\u8fd9\u662f\u6211\u5728\u4e00\u6bb5\u65f6\u95f4\u4ee5\u524d\u5199\u7684\u4e00\u4e9b JS \u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"         };\n        })\n      });\n    });\n  });\n});\n")),Object(l.b)("p",null,"\u53ef\u80fd\u4f60\u5df2\u7ecf\u5728\u81ea\u5df1\u7684\u4ee3\u7801\u4e2d\u89c1\u8fc7\u7c7b\u4f3c\u7684\u7247\u6bb5\uff0c\u5f02\u6b65 API \u901a\u5e38\u9700\u8981\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u4e3a\u6bcf\u4e00\u6b21\u4efb\u52a1\u6267\u884c\u7f16\u5199\u989d\u5916\u7684\u5f02\u6b65\u51fd\u6570\u3002\u6240\u4ee5\u5982\u679c\u4f60\u6709\u4e00\u6bb5\u4ee3\u7801\u9700\u8981\u5b8c\u6210\u4e09\u4e2a\u4efb\u52a1\uff0c\u4f60\u5c06\u770b\u5230\u7c7b\u4f3c\u7684\u4e09\u5c42\u7ea7\u7f29\u8fdb\u7684\u4ee3\u7801\uff0c\u800c\u975e\u7b80\u5355\u7684\u4e09\u884c\u4ee3\u7801\u3002"),Object(l.b)("p",null,"\u540e\u6765\u6211\u5c31\u8fd9\u6837\u5199\u4e86\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"}).on('close', function () {\n  done(undefined, undefined);\n}).on('error', function (error) {\n  done(error);\n});\n")),Object(l.b)("p",null,"\u5f02\u6b65 API \u62e5\u6709\u9519\u8bef\u5904\u7406\u89c4\u5219\uff0c\u4e0d\u652f\u6301\u5f02\u5e38\u5904\u7406\u3002\u4e0d\u540c\u7684 API \u6709\u4e0d\u540c\u7684\u89c4\u5219\uff0c\u5927\u591a\u6570\u7684\u9519\u8bef\u89c4\u5219\u662f\u9ed8\u8ba4\u7684\uff1b\u5728\u6709\u4e9b API \u91cc\uff0c\u751a\u81f3\u8fde\u6210\u529f\u63d0\u793a\u90fd\u662f\u9ed8\u8ba4\u7684\u3002"),Object(l.b)("p",null,"\u8fd9\u4e9b\u662f\u5230\u76ee\u524d\u4e3a\u6b62\u6211\u4eec\u4e3a\u5f02\u6b65\u7f16\u7a0b\u6240\u4ed8\u51fa\u7684\u4ee3\u4ef7\uff0c\u6211\u4eec\u6b63\u6162\u6162\u5f00\u59cb\u63a5\u53d7\u5f02\u6b65\u4ee3\u7801\u4e0d\u5982\u7b49\u6548\u540c\u6b65\u4ee3\u7801\u7f8e\u89c2\u53c8\u7b80\u6d01\u7684\u8fd9\u4e2a\u4e8b\u5b9e\u3002"),Object(l.b)("p",null,"\u751f\u6210\u5668\u4e3a\u4f60\u63d0\u4f9b\u4e86\u907f\u514d\u4ee5\u4e0a\u95ee\u9898\u7684\u65b0\u601d\u8def\u3002"),Object(l.b)("p",null,"\u5b9e\u9a8c\u6027\u7684 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/kriskowal/q/tree/v1/examples/async-generators"},"Q.async()")," \u5c1d\u8bd5\u7ed3\u5408 promises \u4f7f\u7528\u751f\u6210\u5668\u4ea7\u751f\u5f02\u6b65\u4ee3\u7801\u7684\u7b49\u6548\u540c\u6b65\u4ee3\u7801\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"// \u5236\u9020\u4e00\u4e9b\u566a\u97f3\u7684\u540c\u6b65\u4ee3\u7801\u3002\nfunction makeNoise() {\n  shake();\n  rattle();\n  roll();\n}\n    \n// \u5236\u9020\u4e00\u4e9b\u566a\u97f3\u7684\u5f02\u6b65\u4ee3\u7801\u3002\n// \u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\n// \u5f53\u6211\u4eec\u5236\u9020\u5b8c\u566a\u97f3\u7684\u65f6\u5019\u4f1a\u53d8\u4e3a resolved\nfunction makeNoise_async() {\n  return Q.async(function* () {\n    yield shake_async();\n    yield rattle_async();\n    yield roll_async();\n  });\n}\n")),Object(l.b)("p",null,"\u4e8c\u8005\u4e3b\u8981\u7684\u533a\u522b\u662f\uff0c\u5f02\u6b65\u7248\u672c\u5fc5\u987b\u5728\u6bcf\u6b21\u8c03\u7528\u5f02\u6b65\u51fd\u6570\u7684\u5730\u65b9\u6dfb\u52a0 yield \u5173\u952e\u5b57\u3002"),Object(l.b)("p",null,"\u5728 Q.async \u7248\u672c\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7c7b\u4f3c ",Object(l.b)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u7684\u5224\u65ad\u6216 ",Object(l.b)("inlineCode",{parentName:"p"},"try/catch")," \u5757\uff0c\u5982\u540c\u5411\u540c\u6b65\u7248\u672c\u4e2d\u6dfb\u52a0\u7c7b\u4f3c\u529f\u80fd\u4e00\u6837\u7b80\u5355\u3002\u4e0e\u5176\u5b83\u5f02\u6b65\u4ee3\u7801\u7f16\u5199\u65b9\u6cd5\u76f8\u6bd4\uff0c\u8fd9\u79cd\u65b9\u6cd5\u66f4\u81ea\u7136\uff0c\u4e0d\u50cf\u662f\u5b66\u4e00\u95e8\u65b0\u8bed\u8a00\u4e00\u6837\u8f9b\u82e6\u3002"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u770b\u5230\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u8bd5\u7740\u9605\u8bfb\u6765\u81ea James Long \u7684",Object(l.b)("a",{parentName:"p",href:"http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators"},"\u66f4\u6df1\u5165\u5730\u8bb2\u89e3\u751f\u6210\u5668\u7684\u6587\u7ae0"),"\u3002"),Object(l.b)("p",null,"\u751f\u6210\u5668\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u578b\u601d\u8def\uff0c\u8fd9\u79cd\u65b9\u6cd5\u66f4\u9002\u5408\u4eba\u7c7b\u7684\u5927\u8111\u3002\u76f8\u5173\u5de5\u4f5c\u6b63\u5728\u4e0d\u65ad\u5c55\u5f00\u3002\u6b64\u5916\uff0c\u66f4\u597d\u7684\u8bed\u6cd5\u6216\u8bb8\u4f1a\u6709\u5e2e\u52a9\uff0c ES7 \u4e2d\u6709\u4e00\u4e2a",Object(l.b)("a",{parentName:"p",href:"https://github.com/lukehoban/ecmascript-asyncawait"},"\u6709\u5173\u5f02\u6b65\u51fd\u6570\u7684\u63d0\u6848"),"\uff0c\u5b83\u57fa\u4e8epromises \u548c\u751f\u6210\u5668\u6784\u5efa\uff0c\u5e76\u4eceC#\u76f8\u4f3c\u7684\u7279\u6027\u4e2d\u6c72\u53d6\u4e86\u5927\u91cf\u7075\u611f\u3002"),Object(l.b)("h2",{id:"\u5982\u4f55\u5e94\u7528\u8fd9\u4e9b\u75af\u72c2\u7684\u65b0\u7279\u6027\uff1f"},"\u5982\u4f55\u5e94\u7528\u8fd9\u4e9b\u75af\u72c2\u7684\u65b0\u7279\u6027\uff1f"),Object(l.b)("p",null,"\u5728\u670d\u52a1\u5668\u7aef\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u5728io.js \u4e2d\u4f7f\u7528ES6\uff08\u5728Node \u4e2d\u4f60\u9700\u8981\u4f7f\u7528\u2013harmony \u8fd9\u4e2a\u547d\u4ee4\u884c\u9009\u9879\uff09\u3002"),Object(l.b)("p",null,"\u5728\u6d4f\u89c8\u5668\u7aef\uff0c\u5230\u76ee\u524d\u4e3a\u6b62\u53ea\u6709Firefox 27+ \u548cChrome 39+ \u652f\u6301\u4e86ES6 \u751f\u6210\u5668\u3002\u5982\u679c\u8981\u5728web \u7aef\u4f7f\u7528\u751f\u6210\u5668\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Babel \u6216 Traceur \u6765\u5c06\u4f60\u7684 ES6 \u4ee3\u7801\u8f6c\u8bd1\u4e3a Web \u53cb\u597d\u7684 ES5\u3002"),Object(l.b)("p",null,"\u8d77\u521d\uff0cJS \u4e2d\u7684\u751f\u6210\u5668\u7531 Brendan Eich \u5b9e\u73b0\uff0c\u4ed6\u7684\u8bbe\u8ba1\u53c2\u8003\u4e86 Python \u751f\u6210\u5668\uff0c\u800c\u6b64 Python \u751f\u6210\u5668\u5219\u53d7\u5230 Icon \u7684\u542f\u53d1\u3002\u4ed6\u4eec\u65e9\u57282006 \u5e74\u5c31\u5728Firefox 2.0 \u4e2d\u79fb\u690d\u4e86\u76f8\u5173\u4ee3\u7801\u3002\u4f46\u662f\uff0c\u6807\u51c6\u5316\u7684\u9053\u8def\u5d0e\u5c96\u4e0d\u5e73\uff0c\u76f8\u5173\u8bed\u6cd5\u548c\u884c\u4e3a\u90fd\u5728\u539f\u5148\u7684\u57fa\u7840\u4e0a\u6709\u6240\u6539\u52a8\u3002Firefox \u548cChrome \u4e2d\u7684ES6 \u751f\u6210\u5668\u90fd\u662f\u7531\u7f16\u8bd1\u5668hacker Andy Wingo \u5b9e\u73b0\u7684\u3002\u8fd9\u9879\u5de5\u4f5c\u7531\u5f6d\u535a\u8d5e\u52a9\u652f\u6301\uff08\u6ca1\u542c\u9519\uff0c\u5c31\u662f\u5927\u540d\u9f0e\u9f0e\u7684\u90a3\u4e2a\u5f6d\u535a\uff01\uff09\u3002"),Object(l.b)("h2",{id:"yield"},"yield;"),Object(l.b)("p",null,"\u751f\u6210\u5668\u8fd8\u6709\u66f4\u591a\u672a\u63d0\u53ca\u7684\u7279\u6027\uff0c\u4f8b\u5982\uff1a",Object(l.b)("inlineCode",{parentName:"p"},".throw()")," \u548c",Object(l.b)("inlineCode",{parentName:"p"},".return()")," \u65b9\u6cd5\u3001\u53ef\u9009\u53c2\u6570",Object(l.b)("inlineCode",{parentName:"p"},".next()"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"yield*")," \u8868\u8fbe\u5f0f\u8bed\u6cd5\u3002\u7531\u4e8e\u884c\u6587\u8fc7\u957f\uff0c\u4f30\u8ba1\u89c2\u4f17\u8001\u7237\u4eec\u5df2\u7136\u75b2\u4e4f\uff0c\u6211\u4eec\u5e94\u8be5\u5b66\u4e60\u4e00\u4e0b\u751f\u6210\u5668\uff0c\u6682\u65f6 ",Object(l.b)("inlineCode",{parentName:"p"},"yield")," \u5728\u8fd9\u91cc\uff0c\u5269\u4e0b\u7684\u5e72\u8d27\u62e9\u673a\u4e3a\u5927\u5bb6\u732e\u4e0a\u3002"),Object(l.b)("p",null,"\u4e0b\u4e00\u6b21\uff0c\u6211\u4eec\u53d8\u6362\u4e00\u4e0b\u98ce\u683c\uff0c\u7531\u4e8e\u6211\u4eec\u63a5\u8fde\u642c\u4e86\u4e24\u5ea7\u5927\u5c71\uff1a\u8fed\u4ee3\u5668\u548c\u751f\u6210\u5668\uff0c\u4e0b\u6b21\u5c31\u4e00\u8d77\u7814\u7a76\u4e0b\u4e0d\u4f1a\u6539\u53d8\u4f60\u7f16\u7a0b\u98ce\u683c\u7684 ES6 \u7279\u6027\u597d\u4e0d\uff1f\u5c31\u662f\u4e00\u4e9b\u7b80\u5355\u53c8\u5b9e\u7528\u7684\u4e1c\u897f\uff0c\u4f60\u4e00\u5b9a\u4f1a\u559c\u7b11\u989c\u5f00\u54d2\uff01\u4f60\u8fd8\u522b\u8bf4\uff0c\u5728\u4ec0\u4e48\u90fd\u8981\u201c\u5fae\u201d\u4e00\u4e0b\u7684\u4eca\u5929\uff0cES6 \u5f53\u7136\u8981\u6709\u5fae\u6539\u8fdb\u4e86\uff01"),Object(l.b)("p",null,"\u4e0b\u56de\u9884\u544a\uff1aES6 \u6a21\u677f\u5b57\u7b26\u4e32\u6df1\u5ea6\u89e3\u6790\uff0c\u6bcf\u5929\u90fd\u4f1a\u5199\u7684\u4ee3\u7801\uff01\u89c2\u4f17\u8001\u7237\u4eec\u8bb0\u5f97\u56de\u6765\u54e6\uff01\u6211\u4f1a\u60f3\u4f60\u4eec\u7684\uff01"),Object(l.b)(c.a,{mdxType:"BottomCopyRight"}))}u.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,j=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return t?a.a.createElement(j,c(c({ref:n},b),{},{components:t})):a.a.createElement(j,c({ref:n},b))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<l;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},232:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r);class l extends a.a.Component{render(){return a.a.createElement("div",null,"\u611f\u8c22",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),a=t(0),l=t.n(a),i=function(e){function n(n){return e.call(this,n)||this}return Object(r.a)(n,e),n.prototype.render=function(){return l.a.createElement("b",null,"\u672c\u6587\u6458\u6284\u4e8e ",l.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName),", \u4ec5\u7528\u4e8e\u4e2a\u4eba\u5b66\u4e60\u5907\u4efd\u6240\u7528, \u6240\u6709\u6743\u5f52 ",l.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName)," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u8054\u7cfb alan.wei#live.com(",l.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587.")},n}(l.a.Component);t(231);l.a.Component}}]);