(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),l=t(7),a=(t(0),t(228)),c=t(233),b=t(232),o={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e5d\uff09\uff1a\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",sidebar_label:"\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth","babel"],description:"\u6df1\u5165\u6d45\u51fa ES6"},i={unversionedId:"articles/es6-in-depth/8-babel-and-broccoli",id:"articles/es6-in-depth/8-babel-and-broccoli",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e5d\uff09\uff1a\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/8-babel-and-broccoli.md",slug:"/articles/es6-in-depth/8-babel-and-broccoli",permalink:"/docs/articles/es6-in-depth/8-babel-and-broccoli",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/8-babel-and-broccoli.md",version:"current",sidebar_label:"\u5b66\u4e60 Babel \u548c Broccoli\uff0c\u9a6c\u4e0a\u5c31\u7528 ES6",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u516b\uff09\uff1aSymbols",permalink:"/docs/articles/es6-in-depth/7-symbols"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\uff09\uff1a\u96c6\u5408",permalink:"/docs/articles/es6-in-depth/9-collections"}},p=[{value:"\u8f6c\u8bd1\u6280\u672f\u62ef\u6551\u4e86\u6211\u4eec",id:"\u8f6c\u8bd1\u6280\u672f\u62ef\u6551\u4e86\u6211\u4eec",children:[]},{value:"\u5b9e\u9645\u4f53\u9a8c Babel",id:"\u5b9e\u9645\u4f53\u9a8c-babel",children:[]},{value:"\u6211\u4eec\u7684\u9996\u4e2a Broccoli \u4e0e Babel \u9879\u76ee",id:"\u6211\u4eec\u7684\u9996\u4e2a-broccoli-\u4e0e-babel-\u9879\u76ee",children:[{value:"\u914d\u7f6e\u9879\u76ee",id:"\u914d\u7f6e\u9879\u76ee",children:[]},{value:"\u7f16\u5199\u4e00\u4e9b ES6 \u4ee3\u7801",id:"\u7f16\u5199\u4e00\u4e9b-es6-\u4ee3\u7801",children:[]},{value:"\u8f6c\u8bd1\u65f6\u523b",id:"\u8f6c\u8bd1\u65f6\u523b",children:[]},{value:"\u4e3a\u7f51\u7ad9\u7f16\u5199 ES6 \u4ee3\u7801",id:"\u4e3a\u7f51\u7ad9\u7f16\u5199-es6-\u4ee3\u7801",children:[]}]},{value:"Babel \u548c Broccoli \u7ec4\u5408\u8fd8\u6709\u66f4\u591a\u4e50\u8da3",id:"babel-\u548c-broccoli-\u7ec4\u5408\u8fd8\u6709\u66f4\u591a\u4e50\u8da3",children:[]}],s={toc:p};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(c.a,{sourceName:"InfoQ.cn",sourceLink:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-babel-and-broccoli"},"\u539f\u6587")),Object(a.b)("p",null,"\u81ea ES6 \u6b63\u5f0f\u53d1\u5e03\uff0c\u4eba\u4eec\u5df2\u7ecf\u5f00\u59cb\u8ba8\u8bba ES7\uff1a\u672a\u6765\u7248\u672c\u4f1a\u4fdd\u7559\u54ea\u4e9b\u7279\u6027\uff0c\u65b0\u6807\u51c6\u53ef\u80fd\u63d0\u4f9b\u4ec0\u4e48\u6837\u7684\u65b0\u7279\u6027\u3002\u4f5c\u4e3a Web \u5f00\u53d1\u8005\uff0c\u6211\u4eec\u60f3\u77e5\u9053\u5982\u4f55\u53d1\u6325\u8fd9\u4e00\u5207\u7684\u5de8\u5927\u80fd\u91cf\u3002\u5728",Object(a.b)("a",{parentName:"p",href:"http://www.infoq.com/cn/es6-in-depth/"},"\u6df1\u5165\u6d45\u51fa ES6 \u7cfb\u5217"),"\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4e0d\u65ad\u9f13\u52b1\u4f60\u5f00\u59cb\u5728\u7f16\u7801\u4e2d\u52a0\u5165 ES6 \u65b0\u7279\u6027\uff0c\u8f85\u4ee5\u4e00\u4e9b\u6709\u8da3\u7684\u5de5\u5177\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u4ece\u73b0\u5728\u5f00\u59cb\u4f7f\u7528 ES6\uff1a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u60f3\u5728 Web \u7aef\u4f7f\u7528\u8fd9\u79cd\u65b0\u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," \u6216 Google \u7684 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/google/traceur-compiler"},"Traceur")," \u5c06\u4f60\u7684 ES6 \u4ee3\u7801\u8f6c\u8bd1\u4e3a Web \u53cb\u597d\u7684 ES5 \u4ee3\u7801\u3002")),Object(a.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u5411\u4f60\u5206\u6b65\u5c55\u793a\u5982\u4f55\u505a\u5230\u7684\u8fd9\u4e00\u5207\u3002\u4e0a\u9762\u63d0\u53ca\u7684\u5de5\u5177\u88ab\u79f0\u4e3a ",Object(a.b)("em",{parentName:"p"}," \u8f6c\u8bd1\u5668 "),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7406\u89e3\u4e3a\u6e90\u4ee3\u7801\u5230\u6e90\u4ee3\u7801\u7684\u7f16\u8bd1\u5668\u2014\u2014\u4e00\u4e2a\u5728\u53ef\u6bd4\u8f83\u7684\u62bd\u8c61\u5c42\u4e0a\u64cd\u4f5c\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u76f8\u4e92\u8f6c\u6362\u7684\u7f16\u8bd1\u5668\u3002\u8f6c\u8bd1\u5668\u5141\u8bb8\u6211\u4eec\u7528 ES6 \u7f16\u5199\u4ee3\u7801\uff0c\u540c\u65f6\u4fdd\u8bc1\u8fd9\u4e9b\u4ee3\u7801\u80fd\u5728\u6bcf\u4e00\u4e2a\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\u3002"),Object(a.b)("h2",{id:"\u8f6c\u8bd1\u6280\u672f\u62ef\u6551\u4e86\u6211\u4eec"},"\u8f6c\u8bd1\u6280\u672f\u62ef\u6551\u4e86\u6211\u4eec"),Object(a.b)("p",null,"\u8f6c\u8bd1\u5668\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u4e24\u6b65\u5373\u53ef\u63cf\u8ff0\u5b83\u6240\u505a\u7684\u4e8b\u60c5\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7528 ES6 \u7684\u8bed\u6cd5\u7f16\u5199\u4ee3\u7801\u3002")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"let q = 99;\nlet myVariable = `${q} bottles of beer on the wall, ${q} bottles of beer.`;\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"\u7528\u4e0a\u9762\u90a3\u6bb5\u4ee3\u7801\u4f5c\u4e3a\u8f6c\u8bd1\u5668\u7684\u8f93\u5165\uff0c\u7ecf\u8fc7\u5904\u7406\u540e\u5f97\u5230\u4ee5\u4e0b\u8fd9\u6bb5\u8f93\u51fa\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'"use strict";\n    \n var q = 99;\n var myVariable = "" + q + " bottles of beer on the wall, " + q + " bottles of beer."\n')),Object(a.b)("p",null,"\u8fd9\u6b63\u662f\u6211\u4eec\u719f\u77e5\u7684\u8001\u5f0f JavaScript\uff0c\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u5728\u4efb\u610f\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002"),Object(a.b)("p",null,"\u8f6c\u8bd1\u5668\u5185\u90e8\u4ece\u8f93\u5165\u5230\u8f93\u51fa\u7684\u903b\u8f91\u9ad8\u5ea6\u590d\u6742\uff0c\u5b8c\u5168\u8d85\u51fa\u672c\u7bc7\u6587\u7ae0\u7684\u8bb2\u89e3\u8303\u56f4\u3002\u6b63\u5982\u6211\u4eec\u65e0\u987b\u77e5\u9053\u6240\u6709\u7684\u5185\u90e8\u5f15\u64ce\u7ed3\u6784\u5c31\u53ef\u4ee5\u9a7e\u9a76\u4e00\u8f86\u6c7d\u8f66\uff0c\u73b0\u5728\uff0c\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u5c06\u8f6c\u8bd1\u5668\u89c6\u4e3a\u4e00\u4e2a\u80fd\u591f\u5904\u7406\u6211\u4eec\u4ee3\u7801\u7684\u9ed1\u76d2\u3002"),Object(a.b)("h2",{id:"\u5b9e\u9645\u4f53\u9a8c-babel"},"\u5b9e\u9645\u4f53\u9a8c Babel"),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u51e0\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 Babel\uff0c\u6709\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5728\u8fd9\u4e2a\u5de5\u5177\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u5f62\u5f0f\u7684\u6307\u4ee4\uff1a"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"babel script.js --out-file script-compiled.jsBabel")," \u4e5f\u63d0\u4f9b\u652f\u6301\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528\u7684\u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5c06 Babel \u4f5c\u4e3a\u4e00\u4e2a\u666e\u901a\u7684\u5e93\u5f15\u5165\uff0c\u7136\u540e\u5c06\u4f60\u7684 ES6 \u4ee3\u7801\u653e\u7f6e\u5728\u7c7b\u578b\u4e3a",Object(a.b)("em",{parentName:"p"},"text/babel"),"\u7684 ",Object(a.b)("em",{parentName:"p"},"script")," \u6807\u7b7e\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<script src="node_modules/babel-core/browser.js"><\/script>\n<script type="text/babel">\n// \u4f60\u7684 ES6 \u4ee3\u7801\n<\/script>\n')),Object(a.b)("p",null,"\u968f\u7740\u4ee3\u7801\u5e93\u7206\u70b8\u5f0f\u589e\u957f\uff0c\u4f60\u5f00\u59cb\u5c06\u6240\u6709\u4ee3\u7801\u5212\u5206\u4e3a\u591a\u4e2a\u6587\u4ef6\u548c\u6587\u4ef6\u5939\uff0c\u4f46\u662f\u8fd9\u4e9b\u65b9\u6cd5\u5e76\u4e0d\u80fd\u968f\u4e4b\u6269\u5c55\u3002\u5230\u90a3\u65f6\uff0c\u4f60\u5c06\u9700\u8981\u4e00\u4e2a\u6784\u5efa\u5de5\u5177\u4ee5\u53ca\u4e00\u79cd\u5c06 Babel \u4e0e\u6784\u5efa\u7ba1\u9053\u6574\u5408\u5728\u4e00\u8d77\u7684\u65b9\u6cd5\u3002"),Object(a.b)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8981\u628a Babel \u6574\u5408\u5230\u6784\u5efa\u5de5\u5177 ",Object(a.b)("a",{parentName:"p",href:"http://broccolijs.com/"},"Broccoli.js")," \u4e2d\uff0c\u6211\u4eec\u5c06\u5728\u4e24\u4e2a\u793a\u4f8b\u4e2d\u7f16\u5199\u5e76\u6267\u884c\u7b2c\u4e00\u884c ES6 \u4ee3\u7801\u3002\u5982\u679c\u4f60\u7684\u4ee3\u7801\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\uff08 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/givanse/broccoli-babel-examples"},"broccoli-babel-examples")," \uff09\u67e5\u770b\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u3002\u5728\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u4f60\u53ef\u4ee5\u627e\u5230\u4e09\u4e2a\u793a\u4f8b\u9879\u76ee\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"es6-fruits"),Object(a.b)("li",{parentName:"ol"},"es6-website"),Object(a.b)("li",{parentName:"ol"},"es6-modules")),Object(a.b)("p",null,"\u6bcf\u4e00\u4e2a\u9879\u76ee\u90fd\u6784\u5efa\u4e8e\u524d\u4e00\u4e2a\u793a\u4f8b\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u6211\u4eec\u4f1a\u4ece\u6700\u5c0f\u7684\u9879\u76ee\u5f00\u59cb\uff0c\u9010\u6b65\u5f97\u51fa\u4e00\u4e2a\u4e00\u822c\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e3a\u65e5\u540e\u6bcf\u4e00\u4e2a\u96c4\u5fc3\u58ee\u5fd7\u7684\u9879\u76ee\u6253\u4e0b\u826f\u597d\u7684\u5f00\u7aef\u3002\u8fd9\u7bc7\u6587\u7ae0\u53ea\u5305\u542b\u524d\u4e24\u4e2a\u793a\u4f8b\uff0c\u9605\u8bfb\u6587\u7ae0\u540e\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u81ea\u884c\u9605\u8bfb\u7b2c\u4e09\u4e2a\u793a\u4f8b\u4e2d\u7684\u4ee3\u7801\u5e76\u52a0\u4ee5\u7406\u89e3\u3002"),Object(a.b)("p",null,"\u5982\u679c\u4f60\u5728\u60f3\u2014\u2014\u6211\u5750\u7b49\u6d4f\u89c8\u5668\u652f\u6301\u8fd9\u4e9b\u65b0\u7279\u6027\u5c31\u597d\u4e86\u5566\u2014\u2014\u90a3\u4e48\u4f60\u4e00\u5b9a\u4f1a\u843d\u540e\u7684\uff01\u5b9e\u73b0\u6240\u6709\u529f\u80fd\u8981\u82b1\u8d39\u5f88\u957f\u65f6\u95f4\uff0c\u51b5\u4e14\u73b0\u5728\u6709\u6210\u719f\u7684\u8f6c\u8bd1\u5668\uff0c\u800c\u4e14 ECMAScript \u52a0\u5feb\u4e86\u53d1\u5e03\u65b0\u7248\u672c\u7684\u5468\u671f\uff08\u6bcf\u5e74\u4e00\u7248\uff09\uff0c\u6211\u4eec\u5c06\u4f1a\u770b\u5230\u65b0\u6807\u51c6\u6bd4\u7edf\u4e00\u7684\u6d4f\u89c8\u5668\u5e73\u53f0\u66f4\u65b0\u5f97\u66f4\u9891\u7e41\u3002\u6240\u4ee5\u8d76\u5feb\u52a0\u5165\u6211\u4eec\uff0c\u4e00\u8d77\u53d1\u6325\u65b0\u7279\u6027\u7684\u5de8\u5927\u5a01\u529b\u5427\uff01"),Object(a.b)("h2",{id:"\u6211\u4eec\u7684\u9996\u4e2a-broccoli-\u4e0e-babel-\u9879\u76ee"},"\u6211\u4eec\u7684\u9996\u4e2a Broccoli \u4e0e Babel \u9879\u76ee"),Object(a.b)("p",null,"Broccoli \u662f\u4e00\u4e2a\u7528\u6765\u5feb\u901f\u6784\u5efa\u9879\u76ee\u7684\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u5bf9\u6587\u4ef6\u8fdb\u884c\u6df7\u6dc6\u4e0e\u538b\u7f29\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f17\u591a\u7684 ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/browse/keyword/broccoli-plugin"},"Broccoli \u63d2\u4ef6"),"\u5b9e\u73b0\u8bb8\u591a\u5176\u5b83\u529f\u80fd\u3002\u5b83\u5e2e\u52a9\u6211\u4eec\u5904\u7406\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u6bcf\u5f53\u9879\u76ee\u53d8\u66f4\u65f6\u81ea\u52a8\u6267\u884c\u6307\u4ee4\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u51cf\u8f7b\u4e86\u6211\u4eec\u7684\u8d1f\u62c5\u3002\u4f60\u4e0d\u59a8\u5c06\u5b83\u89c6\u4e3a\uff1a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7c7b\u4f3c Rails \u7684 asset \u7ba1\u9053\uff0c\u4f46\u662f Broccoli \u8fd0\u884c\u5728 Node \u4e0a\u4e14\u53ef\u4ee5\u5bf9\u63a5\u4efb\u610f\u540e\u7aef\u3002")),Object(a.b)("h3",{id:"\u914d\u7f6e\u9879\u76ee"},"\u914d\u7f6e\u9879\u76ee"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NODE")),Object(a.b)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\u4e86\uff0c\u4f60\u9700\u8981\u5b89\u88c5 Node 0.11 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),Object(a.b)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528unix \u7cfb\u7edf\uff0c\u4e0d\u8981\u4ece\u5305\u7ba1\u7406\u5668\uff08apt\u3001yum \u7b49\uff09\u4e2d\u5b89\u88c5\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f7f\u7528root \u6743\u9650\uff0c\u6700\u597d\u4f7f\u7528\u5f53\u524d\u7684\u7528\u6237\u6743\u9650\uff0c\u901a\u8fc7\u4e0a\u9762\u7684\u94fe\u63a5\u624b\u52a8\u5b89\u88c5\u3002\u5728\u6587\u7ae0",Object(a.b)("a",{parentName:"p",href:"http://givan.se/do-not-sudo-npm/"},"\u300a\u4e0d\u8981sudo npm \u300b"),"\u4e2d\u53ef\u4ee5\u4e86\u89e3\u4e3a\u4ec0\u4e48\u4e0d\u63a8\u8350\u4f7f\u7528root \u6743\u9650\uff0c\u6587\u7ae0\u4e2d\u4e5f\u7ed9\u51fa\u4e86\u5176\u5b83\u5b89\u88c5\u65b9\u6848\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"BROCCOLI")),Object(a.b)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u8981\u914d\u7f6e\u597d Broccoli \u9879\u76ee\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mkdir es6-fruits\ncd es6-fruits\nnpm init # \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a Brocfile.js \u7684\u7a7a\u6587\u4ef6\ntouch Brocfile.js\n")),Object(a.b)("p",null,"\u73b0\u5728\u6211\u4eec\u5b89\u88c5broccoli\u548cbroccoli-cli"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 broccoli \u5e93\nnpm install --save-dev broccoli\n\n# \u547d\u4ee4\u884c\u5de5\u5177\nnpm install -g broccoli-cli\n")),Object(a.b)("h3",{id:"\u7f16\u5199\u4e00\u4e9b-es6-\u4ee3\u7801"},"\u7f16\u5199\u4e00\u4e9b ES6 \u4ee3\u7801"),Object(a.b)("p",null,"\u521b\u5efa ",Object(a.b)("em",{parentName:"p"},"src")," \u6587\u4ef6\u5939\uff0c\u5728\u91cc\u9762\u7f6e\u5165",Object(a.b)("em",{parentName:"p"},"fruits.js"),"\u6587\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mkdir src\nvim src/fruits.js\n")),Object(a.b)("p",null,"\u7528 ES6 \u8bed\u6cd5\u5728\u65b0\u6587\u4ef6\u4e2d\u5199\u4e00\u5c0f\u6bb5\u811a\u672c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"let fruits = [\n  {id: 100, name: '\u8349\u8393'},\n  {id: 101, name: '\u67da\u5b50'},\n  {id: 102, name: '\u674e\u5b50'}\n];\nfor (let fruit of fruits) {\n  let message = `ID: ${fruit.id} Name: ${fruit.name}`;\n  console.log(message);\n}\nconsole.log(`List total: ${fruits.length}`);\n")),Object(a.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u4f7f\u7528\u4e86\u4e09\u4e2a ES6 \u7279\u6027\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7528",Object(a.b)("inlineCode",{parentName:"li"},"let"),"\u8fdb\u884c\u5c40\u90e8\u4f5c\u7528\u57df\u58f0\u660e\uff08\u5728\u7a0d\u540e\u7684\u6587\u7ae0\u4e2d\u8ba8\u8bba\uff09"),Object(a.b)("li",{parentName:"ol"},"for-of \u5faa\u73af"),Object(a.b)("li",{parentName:"ol"},"\u6a21\u677f\u5b57\u7b26\u4e32")),Object(a.b)("p",null,"\u4fdd\u5b58\u6587\u4ef6\uff0c\u5c1d\u8bd5\u6267\u884c\u811a\u672c\u3002"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"node src/fruits.js")," \u76ee\u524d\u8fd9\u6bb5\u4ee3\u7801\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u662f\u6211\u4eec\u5c06\u4f1a\u8ba9\u5b83\u8fd0\u884c\u5728 Node \u4e0e\u4efb\u4f55\u6d4f\u89c8\u5668\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"let fruits = [\n    ^^^^^^\nSyntaxError: Unexpected identifier\n")),Object(a.b)("h3",{id:"\u8f6c\u8bd1\u65f6\u523b"},"\u8f6c\u8bd1\u65f6\u523b"),Object(a.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u7528 Broccoli \u52a0\u8f7d\u4ee3\u7801\uff0c\u7136\u540e\u7528 Babel \u5904\u7406\u5b83\u3002\u7f16\u8f91Brocfile.js\u6587\u4ef6\u5e76\u52a0\u5165\u4ee5\u4e0b\u8fd9\u6bb5\u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// \u5f15\u5165 babel \u63d2\u4ef6\nvar babel = require('broccoli-babel-transpiler');\n    \n// \u83b7\u53d6\u6e90\u4ee3\u7801\uff0c\u6267\u884c\u8f6c\u8bd1\u6307\u4ee4\uff08\u4ec5\u9700 1 \u6b65\uff09\nfruits = babel('src'); // src/*.js\nmodule.exports = fruits;\n")),Object(a.b)("p",null,"\u6ce8\u610f\u6211\u4eec\u5f15\u5165\u4e86\u5305\u88f9\u5728 Babel \u5e93\u4e2d\u7684 Broccoli \u63d2\u4ef6",Object(a.b)("em",{parentName:"p"},"broccoli-babel-transpiler"),"\uff0c\u6240\u4ee5\u6211\u4eec\u4e00\u5b9a\u8981\u5b89\u88c5\u5b83\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev broccoli-babel-transpiler\n")),Object(a.b)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u9879\u76ee\u5e76\u6267\u884c\u811a\u672c\u4e86\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"broccoli build dist # \u7f16\u8bd1\nnode dist/fruits.js # \u6267\u884c ES5\n")),Object(a.b)("p",null,"\u8f93\u51fa\u7ed3\u679c\u770b\u8d77\u6765\u5e94\u5f53\u662f\u8fd9\u6837\u7684\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-log"},"ID: 100 Name: \u8349\u8393\nID: 101 Name: \u67da\u5b50\nID: 102 Name: \u674e\u5b50\nList total: 3\n")),Object(a.b)("p",null,"\u90a3\u5f88\u7b80\u5355\uff01\u4f60\u53ef\u4ee5\u6253\u5f00",Object(a.b)("em",{parentName:"p"},"dist/fruits.js"),"\u67e5\u770b\u8f6c\u8bd1\u540e\u4ee3\u7801\u3002Babel \u8f6c\u8bd1\u5668\u7684\u4e00\u4e2a\u4f18\u79c0\u7279\u6027\u662f\u5b83\u80fd\u591f\u751f\u4ea7\u53ef\u8bfb\u7684\u4ee3\u7801\u3002"),Object(a.b)("h3",{id:"\u4e3a\u7f51\u7ad9\u7f16\u5199-es6-\u4ee3\u7801"},"\u4e3a\u7f51\u7ad9\u7f16\u5199 ES6 \u4ee3\u7801"),Object(a.b)("p",null,"\u5728\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u505a\u8fdb\u4e00\u6b65\u63d0\u5347\u3002\u9996\u5148\uff0c\u9000\u51fa",Object(a.b)("em",{parentName:"p"},"es6-fruits"),"\u6587\u4ef6\u5939\uff0c\u7136\u540e\u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\u9879\u76ee\u4e00\u7ae0\u4e2d\u5217\u51fa\u7684\u6b65\u9aa4\u521b\u5efa\u65b0\u76ee\u5f55",Object(a.b)("em",{parentName:"p"},"es6-website"),"\u3002"),Object(a.b)("p",null,"\u5728 src \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html",metastring:"src/index.html","src/index.html":!0},'<html>\n  <head>\n    <title> \u9a6c\u4e0a\u4f7f\u7528 ES6</title>\n  </head>\n  <style>\n    body {\n      border: 2px solid #9a9a9a;\n      border-radius: 10px;\n      padding: 6px;\n      font-family: monospace;\n      text-align: center;\n    }\n    .color {\n      padding: 1rem;\n      color: #fff;\n    }\n  </style>\n  <body>\n    <h1> \u9a6c\u4e0a\u4f7f\u7528 ES6</h1>\n    <div id="info"></div>\n    <hr>\n    <div id="content"></div>\n    <script src="//code.jquery.com/jquery-2.1.4.min.js"><\/script>\n    <script src="js/my-app.js"><\/script>\n  </body>\n</html>\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:"src/print-info.js","src/print-info.js":!0},"function printInfo() {\n  $('#info')\n  .append('<p> \u7528 Broccoli \u548c Babel \u6784\u5efa\u7684' +\n          '\u6700\u5c0f\u7f51\u7ad9\u793a\u4f8b </p>');\n}\n$(printInfo);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:"src/print-colors.js","src/print-colors.js":!0},"// ES6 \u751f\u6210\u5668\nfunction* hexRange(start, stop, step) {\n  for (var i = start; i < stop; i += step) {\n    yield i;\n  }\n}\n    \n    \nfunction printColors() {\n  var content$ = $('#content');\n \n  // \u4eba\u4e3a\u7684\u793a\u4f8b\n  for ( var hex of hexRange(900, 999, 10) ) {\n    var newDiv = $('<div>')\n      .attr('class', 'color')\n      .css({ 'background-color': `#${hex}` })\n      .append(`hex code: #${hex}`);\n    content$.append(newDiv);\n  }\n}\n    \n$(printColors);\n")),Object(a.b)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230",Object(a.b)("inlineCode",{parentName:"p"},"function* hexRange"),"\uff0c\u662f\u7684\uff0c\u90a3\u662f ES6 \u7684\u751f\u6210\u5668\u3002\u8fd9\u4e2a\u7279\u6027\u76ee\u524d\u5c1a\u672a\u88ab\u6240\u6709\u6d4f\u89c8\u5668\u652f\u6301\u3002\u4e3a\u4e86\u80fd\u591f\u4f7f\u7528\u8fd9\u4e2a\u7279\u6027\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a polyfill\uff0cBabel \u4e2d\u5df2\u7ecf\u652f\u6301\uff0c\u6211\u4eec\u5f88\u5feb\u5c06\u6295\u5165\u4f7f\u7528\u3002"),Object(a.b)("p",null,"\u4e0b\u4e00\u6b65\u662f\u5408\u5e76\u6240\u6709 JS \u6587\u4ef6\u7136\u540e\u5728\u7f51\u7ad9\u4e2d\u4f7f\u7528\u3002\u6700\u96be\u7684\u90e8\u5206\u662f\u7f16\u5199 Brocfile \u6587\u4ef6\uff0c\u8fd9\u4e00\u6b21\u6211\u4eec\u8981\u5b89\u88c5 4 \u4e2a\u63d2\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev broccoli-babel-transpiler\nnpm install --save-dev broccoli-funnel\nnpm install --save-dev broccoli-concat\nnpm install --save-dev broccoli-merge-trees\n")),Object(a.b)("p",null,"\u628a\u5b83\u4eec\u6295\u5165\u4f7f\u7528\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// Babel \u8f6c\u8bd1\u5668\nvar babel = require('broccoli-babel-transpiler');\n// \u8fc7\u6ee4\u6811\uff08\u6587\u4ef6\u7684\u5b50\u96c6\uff09\nvar funnel = require('broccoli-funnel');\n// \u8fde\u7ed3\u6811\nvar concat = require('broccoli-concat');\n// \u5408\u5e76\u6811\nvar mergeTrees = require('broccoli-merge-trees');\n\n\n// \u8f6c\u8bd1\u6e90\u6587\u4ef6\nvar appJs = babel('src');\n\n\n// \u83b7\u53d6 Babel \u5e93\u63d0\u4f9b\u7684 polyfill \u6587\u4ef6\nvar babelPath = require.resolve('broccoli-babel-transpiler');\nbabelPath = babelPath.replace(/\\/index.js$/, '');\nbabelPath += '/node_modules/babel-core';\nvar browserPolyfill = funnel(babelPath, {\n\nfiles: ['browser-polyfill.js']\n});\n\n\n// \u7ed9\u8f6c\u8bd1\u540e\u7684\u6587\u4ef6\u6811\u6dfb\u52a0 Babel polyfill\nappJs = mergeTrees([browserPolyfill, appJs]);\n\n\n// \u5c06\u6240\u6709 JS \u6587\u4ef6\u8fde\u7ed3\u4e3a\u4e00\u4e2a\u5355\u72ec\u6587\u4ef6\nappJs = concat(appJs, {\n\n// \u6211\u4eec\u6307\u5b9a\u4e00\u4e2a\u8fde\u7ed3\u987a\u5e8f\n\ninputFiles: ['browser-polyfill.js', '**/*.js'],\n\noutputFile: '/js/my-app.js'\n});\n\n\n// \u83b7\u53d6\u5165\u53e3\u6587\u4ef6\nvar index = funnel('src', {files: ['index.html']});\n\n\n// \u83b7\u53d6\u6240\u6709\u7684\u6811\n// \u5e76\u5bfc\u51fa\u6700\u7ec8\u5355\u4e00\u7684\u6811\n\nmodule.exports = mergeTrees([index, appJs]);\n")),Object(a.b)("p",null,"\u73b0\u5728\u5f00\u59cb\u6784\u5efa\u5e76\u6267\u884c\u6211\u4eec\u7684\u4ee3\u7801\u3002"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"broccoli build dist"),"\u8fd9\u6b21\u4f60\u5728 ",Object(a.b)("em",{parentName:"p"},"dist")," \u6587\u4ef6\u5939\u4e2d\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u7ed3\u6784\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$> tree dist/\ndist/\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 js\n    \u2514\u2500\u2500 my-app.js\n")),Object(a.b)("p",null,"\u90a3\u662f\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\uff0c\u4f60\u53ef\u4ee5\u7528\u4efb\u610f\u670d\u52a1\u5668\u4f3a\u670d\u6765\u9a8c\u8bc1\u90a3\u6bb5\u4ee3\u7801\u6b63\u5e38\u8fd0\u884c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"cd dist/\npython -m SimpleHTTPServer\n# \u8bbf\u95ee http://localhost:8000/\n")),Object(a.b)("h2",{id:"babel-\u548c-broccoli-\u7ec4\u5408\u8fd8\u6709\u66f4\u591a\u4e50\u8da3"},"Babel \u548c Broccoli \u7ec4\u5408\u8fd8\u6709\u66f4\u591a\u4e50\u8da3"),Object(a.b)("p",null,"\u4e0a\u8ff0\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u7ed9\u51fa\u4e86\u4e00\u4e2a\u901a\u8fc7 Babel \u5b9e\u73b0\u529f\u80fd\u7684\u601d\u8def\uff0c\u5b83\u53ef\u80fd\u8db3\u591f\u4f60\u7528\u4e0a\u4e00\u9635\u5b50\u4e86\u3002\u5982\u679c\u4f60\u60f3\u8981\u66f4\u591a\u6709\u5173 ES6\u3001Babel \u548c Broccoli \u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u67e5\u770b broccoli-babel-boilerplate \uff0c\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\u53ef\u4ee5\u63d0\u4f9b Broccoli+Babel \u9879\u76ee\u7684\u914d\u7f6e\uff0c\u800c\u4e14\u9ad8\u51fa\u81f3\u5c11\u4e24\u4e2a\u5c42\u6b21\u3002\u8fd9\u4e2a\u6837\u677f\u53ef\u4ee5\u6587\u4ef6\u5904\u7406\u6a21\u5757\u3001\u6a21\u5757\u5bfc\u5165\u4ee5\u53ca\u5355\u5143\u6d4b\u8bd5\u3002"),Object(a.b)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5728\u793a\u4f8b es6-modules \u4e2d\u4eb2\u81ea\u5b9e\u8df5\u3002Brocfile \u9b54\u529b\u65e0\u7a77\uff0c\u4e0e\u6211\u4eec\u4e4b\u524d\u5b9e\u73b0\u7684\u975e\u5e38\u7c7b\u4f3c\u3002"),Object(a.b)("p",null,"\u6b63\u5982\u4f60\u770b\u5230\u7684\uff0cBabel \u548c Broccoli \u5bf9\u4e8e\u5728 Web \u7f51\u7ad9\u4e2d\u5e94\u7528 ES6 \u65b0\u7279\u6027\u975e\u5e38\u5b9e\u7528\u3002\u611f\u8c22 Gast\xf3n I. Silva \u8d21\u732e\u8fd9\u7bc7\u6587\u7ae0\uff01"),Object(a.b)("p",null,"\u4e0b\u4e00\u7bc7\uff0c\u6df1\u5165\u6d45\u51fa ES6 \u5c06\u4e3a\u4f60\u5e26\u6765\u4e00\u4e9b ES6 \u4e2d\u5a01\u529b\u66f4\u5927\u7684\u7279\u6027\uff0c\u5c4a\u65f6\u8bf7\u52a0\u5165\u6211\u4eec\u4e00\u8d77\u63a2\u7d22\u65b0\u4e16\u754c\u3002"),Object(a.b)(b.a,{mdxType:"BottomCopyRight"}))}u.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),p=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return t?l.a.createElement(d,b(b({ref:n},i),{},{components:t})):l.a.createElement(d,b({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<a;i++)c[i]=t[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},232:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),l=t.n(r);class a extends l.a.Component{render(){return l.a.createElement("div",null,"\u611f\u8c22",l.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",l.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}},233:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(4),l=t(0),a=t.n(l),c=function(e){function n(n){return e.call(this,n)||this}return Object(r.a)(n,e),n.prototype.render=function(){return a.a.createElement("b",null,"\u672c\u6587\u6458\u6284\u4e8e ",a.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName),", \u4ec5\u7528\u4e8e\u4e2a\u4eba\u5b66\u4e60\u5907\u4efd\u6240\u7528, \u6240\u6709\u6743\u5f52 ",a.a.createElement("a",{href:this.props.sourceLink||"javascript:void(0)",target:"_blank"},this.props.sourceName)," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u8054\u7cfb alan.wei#live.com(",a.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587.")},n}(a.a.Component);t(231);a.a.Component}}]);