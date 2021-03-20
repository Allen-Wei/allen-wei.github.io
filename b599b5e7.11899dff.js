(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(266)),c=n(267),b=n(269),i={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u56db\uff09\uff1alet \u548c const",sidebar_label:"let \u548c const",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},p={unversionedId:"articles/es6-in-depth/13-let-and-const",id:"articles/es6-in-depth/13-let-and-const",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u56db\uff09\uff1alet \u548c const",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/13-let-and-const.md",slug:"/articles/es6-in-depth/13-let-and-const",permalink:"/docs/articles/es6-in-depth/13-let-and-const",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/13-let-and-const.md",version:"current",sidebar_label:"let \u548c const",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e09\uff09\uff1a\u7c7b Class",permalink:"/docs/articles/es6-in-depth/12-classes"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e94\uff09\uff1a\u5b50\u7c7b Subclassing",permalink:"/docs/articles/es6-in-depth/14-subclassing"}},o=[{value:"\u95ee\u9898 #1\uff1aJS \u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df",id:"\u95ee\u9898-1\uff1ajs-\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df",children:[]},{value:"\u95ee\u9898 #2\uff1a\u5faa\u73af\u5185\u53d8\u91cf\u8fc7\u5ea6\u5171\u4eab",id:"\u95ee\u9898-2\uff1a\u5faa\u73af\u5185\u53d8\u91cf\u8fc7\u5ea6\u5171\u4eab",children:[]},{value:"let \u662f\u66f4\u5b8c\u7f8e\u7684 var",id:"let-\u662f\u66f4\u5b8c\u7f8e\u7684-var",children:[]},{value:"const",id:"const",children:[]}],s={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-let-and-const"},"\u539f\u6587")),Object(l.b)("p",null,"\u4eca\u5929\u6211\u60f3\u8981\u8c08\u8bba\u7684\u662f\u4e00\u4e2a\u96c6\u8c26\u900a\u4e0e\u60ca\u4eba\u7684\u91ce\u5fc3\u4e8e\u4e00\u8eab\u7684\u65b0\u7279\u6027\u3002"),Object(l.b)("p",null,"\u56de\u6eaf\u5230 1995 \u5e74\uff0c\u5f53 Brendan Eich \u5728\u8bbe\u8ba1\u7b2c\u4e00\u7248 JavaScript \u65f6\uff0c\u4ed6\u641e\u9519\u4e86\u8bb8\u591a\u4e1c\u897f\uff0c\u5f53\u7136\u8fd9\u4e5f\u5305\u62ec\u66fe\u5c5e\u4e8e\u8bed\u8a00\u672c\u8eab\u7684\u4e00\u90e8\u5206\uff0c\u4f8b\u5982Date\u5bf9\u8c61\uff0c\u5bf9\u8c61\u76f8\u4e58\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a NaN \u7b49\u3002\u7136\u800c\u73b0\u5728\u56de\u8fc7\u5934\u770b\uff0c\u8bed\u8a00\u6700\u91cd\u8981\u7684\u90e8\u5206\u90fd\u662f\u8bbe\u8ba1\u5408\u7406\u7684\uff1a\u5bf9\u8c61\u3001\u539f\u578b\u3001\u5177\u6709\u8bcd\u6cd5\u4f5c\u7528\u57df\u7684\u4e00\u7b49\u51fd\u6570\u3001\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7684\u53ef\u53d8\u6027\u7b49\u3002\u8bed\u8a00\u7684\u9aa8\u67b6\u975e\u5e38\u4f18\u79c0\uff0c\u751a\u81f3\u8d85\u8d8a\u4e86\u4eba\u4eec\u5bf9\u5b83\u7684\u521d\u6b65\u5370\u8c61\u3002"),Object(l.b)("p",null,"\u8bdd\u8bf4\u56de\u6765\uff0c\u6b63\u662f Brendan \u5f53\u521d\u7684\u8bbe\u8ba1\u9519\u8bef\u624d\u8bde\u751f\u4e86\u4eca\u5929\u8fd9\u7bc7\u6587\u7ae0\u3002\u6211\u4eec\u8fd9\u6b21\u5173\u6ce8\u7684\u76ee\u6807\u975e\u5e38\u5c0f\uff0c\u5728\u4f60\u4f7f\u7528\u8fd9\u95e8\u8bed\u8a00\u591a\u5e74\u540e\u53ef\u80fd\u6839\u672c\u4e0d\u4f1a\u6ce8\u610f\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u5b83 \u53c8\u5982\u6b64\u91cd\u8981\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u80fd\u4f1a\u8bef\u8ba4\u4e3a\u8fd9\u4e2a\u9519\u8bef\u5c31\u662f\u8bed\u8a00\u8bbe\u8ba1\u4e2d\u7684\u201cthe good parts\u201d\uff08\u8bd1\u8005\u6ce8\uff1a\u8bf7\u53c2\u8003\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b\u4e00\u4e66\u4e2d\u9644\u5f55 A\uff1a\u6bd2\u7624\u4e2d\u6709\u5173\u4f5c\u7528\u57df\u7684\u63cf\u8ff0\uff09\u3002"),Object(l.b)("p",null,"\u4eca\u5929\u6211\u4eec\u4e00\u5b9a\u8981\u628a\u8fd9\u4e9b\u4e0e\u53d8\u91cf\u6709\u5173\u7684\u95ee\u9898\u62ff\u4e0b\u3002"),Object(l.b)("h2",{id:"\u95ee\u9898-1\uff1ajs-\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df"},"\u95ee\u9898 #1\uff1aJS \u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df"),Object(l.b)("p",null,"\u8bf7\u770b\u8fd9\u6837\u4e00\u6761\u89c4\u5219\uff1a\u5728 JS \u51fd\u6570\u4e2d\u7684 var \u58f0\u660e\uff0c\u5176\u4f5c\u7528\u57df\u662f\u51fd\u6570\u4f53\u7684\u5168\u90e8\u3002\u4e4d\u4e00\u542c\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u78b0\u5230\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\u5c31\u4e0d\u4f1a\u5f97\u5230\u4ee4\u4eba\u6ee1\u610f\u7684\u7ed3\u679c\u3002"),Object(l.b)("p",null,"\u5176\u4e00\uff0c\u5728\u4ee3\u7801\u5757\u5185\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u5176\u4f5c\u7528\u57df\u662f\u6574\u4e2a\u51fd\u6570\u4f5c\u7528\u57df\u800c\u4e0d\u662f\u5757\u7ea7\u4f5c\u7528\u57df\u3002"),Object(l.b)("p",null,"\u4f60\u4e4b\u524d\u53ef\u80fd\u6ca1\u6709\u5173\u6ce8\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u6211\u62c5\u5fc3\u8fd9\u4e2a\u95ee\u9898\u786e\u5b9e\u662f\u4f60\u4e0d\u80fd\u591f\u8f7b\u6613\u5ffd\u89c6\u7684\u3002\u6211\u4eec\u4e00\u8d77\u91cd\u73b0\u4e00\u4e0b\u7531\u8fd9\u4e2a\u95ee\u9898\u5f15\u53d1\u7684bug\u3002"),Object(l.b)("p",null,"\u5047\u5982\u4f60\u73b0\u5728\u7684\u4ee3\u7801\u4f7f\u7528\u4e86\u4e00\u4e2a\u53d8\u91cf ",Object(l.b)("inlineCode",{parentName:"p"},"t"),"\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function runTowerExperiment(tower, startTime) {\n    var t = startTime;\n    tower.on("tick", function () {\n        ... \u4f7f\u7528\u4e86\u53d8\u91cf t \u7684\u4ee3\u7801 ...\n    });\n    ... \u66f4\u591a\u4ee3\u7801 ...\n}\n')),Object(l.b)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4e00\u5207\u90fd\u5f88\u987a\u5229\u3002\u73b0\u5728\u4f60\u60f3\u6dfb\u52a0\u6d4b\u91cf\u4fdd\u9f84\u7403\u901f\u5ea6\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u4f60\u5728\u56de\u8c03\u51fd\u6570\u5185\u90e8\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",Object(l.b)("inlineCode",{parentName:"p"},"if"),"\u8bed\u53e5\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function runTowerExperiment(tower, startTime) {\n    var t = startTime;\n    tower.on("tick", function () {\n        ... \u4f7f\u7528\u4e86\u53d8\u91cf t \u7684\u4ee3\u7801 ...\n        if (bowlingBall.altitude() <= 0) {\n            var t = readTachymeter();\n            ...\n        }\n    });\n    ... \u66f4\u591a\u4ee3\u7801 ...\n}\n')),Object(l.b)("p",null,"\u54e6\uff0c\u4eb2\u7231\u7684\uff0c\u4e4b\u524d\u90a3\u6bb5\u201c\u4f7f\u7528\u4e86\u53d8\u91cf ",Object(l.b)("em",{parentName:"p"},"t")," \u7684\u4ee3\u7801\u201d\u8fd0\u884c\u826f\u597d\uff0c\u73b0\u5728\u4f60\u65e0\u610f\u4e2d\u6dfb\u52a0\u4e86\u7b2c\u4e8c\u4e2a\u53d8\u91cf",Object(l.b)("em",{parentName:"p"},"t"),"\uff0c\u8fd9\u91cc\u7684",Object(l.b)("em",{parentName:"p"},"t"),"\u6307\u5411\u7684\u662f\u4e00\u4e2a\u65b0\u7684\u5185\u90e8\u53d8\u91cft\u800c\u4e0d\u662f\u539f\u6765\u7684\u5916\u90e8\u53d8\u91cf\u3002"),Object(l.b)("p",null,"JavaScript \u4e2d",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u7684\u4f5c\u7528\u57df\u50cf\u662f Photoshop \u4e2d\u7684\u6cb9\u6f06\u6876\u5de5\u5177\uff0c\u4ece\u58f0\u660e\u5904\u5f00\u59cb\u5411\u524d\u540e\u4e24\u4e2a\u65b9\u5411\u6269\u6563\uff0c\u76f4\u5230\u89e6\u53ca\u51fd\u6570\u8fb9\u754c\u624d\u505c\u6b62\u6269\u6563\u3002\u4f60\u60f3\u554a\uff0c\u8fd9\u79cd\u53d8\u91cft\u7684\u4f5c\u7528\u57df\u751a\u5e7f\uff0c\u6240\u4ee5\u4e00\u8fdb\u5165\u51fd\u6570\u5c31\u8981\u9a6c\u4e0a\u5c06\u5b83\u521b\u5efa\u51fa\u6765\u3002\u8fd9\u5c31\u662f\u6240\u8c13\u7684 ",Object(l.b)("em",{parentName:"p"},"\u63d0\u5347\uff08hoisting\uff09"),"\u3002\u53d8\u91cf\u63d0\u5347\u5c31\u597d\u6bd4\u662f\uff0cJS \u5f15\u64ce\u7528\u4e00\u4e2a\u5f88\u5c0f\u7684\u4ee3\u7801\u8d77\u91cd\u673a\u5c06\u6240\u6709",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u548c",Object(l.b)("inlineCode",{parentName:"p"},"function"),"\u51fd\u6570\u58f0\u660e\u90fd\u4e3e\u8d77\u5230\u51fd\u6570\u5185\u7684\u6700\u9ad8\u5904\u3002"),Object(l.b)("p",null,"\u73b0\u5728\u770b\u6765\uff0c\u63d0\u5347\u7279\u6027\u81ea\u6709\u5b83\u7684\u4f18\u70b9\u3002\u5982\u679c\u6ca1\u6709\u63d0\u5347\u7684\u52a8\u4f5c\uff0c\u8bb8\u591a\u5728\u5168\u5c40\u4f5c\u7528\u57df\u8303\u56f4\u5185\u770b\u4f3c\u5408\u7406\u7684\u5b8c\u7f8e\u6280\u672f\u5728\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0f\uff08 IIFE \uff09\u4e2d\u901a\u901a\u5931\u6548\u3002\u4f46\u5728\u4e0a\u9762\u6f14\u793a\u7684\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u63d0\u5347\u4f1a\u5f15\u53d1\u4ee4\u4eba\u4e0d\u6109\u5feb\u7684 bug\uff1a\u6240\u6709\u4f7f\u7528\u53d8\u91cft\u8fdb\u884c\u7684\u8ba1\u7b97\u6700\u7ec8\u7684\u7ed3\u679c\u90fd\u662fNaN\u3002\u8fd9\u79cd\u95ee\u9898\u6781\u96be\u5b9a\u4f4d\uff0c\u5c24\u5176\u662f\u5f53\u4f60\u7684\u4ee3\u7801\u91cf\u8fdc\u8d85\u4e0a\u9762\u8fd9\u4e2a\u73a9\u5177\u4e00\u822c\u7684\u793a\u4f8b\uff0c\u4f60\u4f1a\u53d1\u72c2\u5230\u5d29\u6e83\u3002"),Object(l.b)("p",null,"\u5728\u539f\u6709\u4ee3\u7801\u5757 ",Object(l.b)("em",{parentName:"p"},"\u4e4b\u524d")," \u6dfb\u52a0\u65b0\u7684\u4ee3\u7801\u5757\u4f1a\u5bfc\u81f4\u8be1\u5f02\u7684\u9519\u8bef\uff0c\u8fd9\u65f6\u5019\u6211\u5c31\u4f1a\u60f3\uff0c\u5230\u5e95\u662f\u8c01\u7684\u95ee\u9898\uff0c\u6211\u7684\u8fd8\u662f\u7cfb\u7edf\u7684\uff1f\u6211\u4eec\u53ef\u4e0d\u5e0c\u671b\u81ea\u5df1\u641e\u7838\u4e86\u7cfb\u7edf\u3002"),Object(l.b)("p",null,"\u800c\u8fd9\u4e2a\u95ee\u9898\u4e0e\u63a5\u4e0b\u6765\u8fd9\u4e2a\u95ee\u9898\u76f8\u6bd4\u5c31\u76f8\u5f62\u89c1\u7ecc\u4e86\u3002"),Object(l.b)("h2",{id:"\u95ee\u9898-2\uff1a\u5faa\u73af\u5185\u53d8\u91cf\u8fc7\u5ea6\u5171\u4eab"},"\u95ee\u9898 #2\uff1a\u5faa\u73af\u5185\u53d8\u91cf\u8fc7\u5ea6\u5171\u4eab"),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u731c\u4e00\u4e0b\u5f53\u6267\u884c\u4ee5\u4e0b\u8fd9\u6bb5\u4ee3\u7801\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\uff0c\u975e\u5e38\u7b80\u5355\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'var messages = [" \u55e8\uff01", " \u6211\u662f\u4e00\u4e2a web \u9875\u9762\uff01", "alert() \u65b9\u6cd5\u975e\u5e38\u6709\u8da3\uff01"];\nfor (var i = 0; i < messages.length; i++) {\n    alert(messages[i]);\n}\n')),Object(l.b)("p",null,"\u5982\u679c\u4f60\u4e00\u76f4\u8ddf\u968f\u8fd9\u4e2a\u7cfb\u5217\u7684\u6587\u7ae0\uff0c\u4f60\u77e5\u9053\u6211\u559c\u6b22\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"alert()"),"\u65b9\u6cd5\u3002\u53ef\u80fd\u4f60\u4e5f\u77e5\u9053",Object(l.b)("inlineCode",{parentName:"p"},"alert()"),"\u4e0d\u662f\u4e00\u4e2a\u597d\u7684 API\uff0c\u5b83\u662f\u4e00\u4e2a\u540c\u6b65\u65b9\u6cd5\uff0c\u6240\u4ee5\u5f53\u5f39\u51fa\u4e00\u4e2a\u8b66\u544a\u5bf9\u8bdd\u6846\u65f6\uff0c\u8f93\u5165\u4e8b\u4ef6\u4e0d\u4f1a\u89e6\u53d1\uff0c\u4f60\u7684 JS \u4ee3\u7801\uff0c\u5305\u62ec\u4f60\u7684\u6574\u4e2a UI\uff0c\u76f4\u5230\u7528\u6237\u70b9\u51fb OK \u786e\u8ba4\u4e4b\u524d\u5b8c\u5168\u5904\u4e8e\u6682\u505c\u72b6\u6001\u3002"),Object(l.b)("p",null,"\u8bf7\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"alert()"),"\u6765\u5b9e\u73b0 web \u9875\u9762\u4e2d\u7684\u529f\u80fd\uff0c\u6211\u4e4b\u6240\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u662f\u56e0\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"alert()"),"\u7279\u6027\u4f7f\u5b83\u53d8\u6210\u4e00\u4e2a\u975e\u5e38\u6709\u6559\u5b66\u610f\u4e49\u7684\u5de5\u5177\u3002"),Object(l.b)("p",null,"\u800c\u4e14\uff0c\u5982\u679c\u653e\u5f03\u6240\u6709\u7b28\u91cd\u7684\u65b9\u6cd5\u548c\u7cdf\u7cd5\u7684\u884c\u4e3a\u5c31\u53ef\u4ee5\u505a\u51fa\u4e00\u53ea\u4f1a\u8bf4\u8bdd\u7684\u732b\uff0c\u4f55\u4e50\u800c\u4e0d\u4e3a\u5462\uff1f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'var messages = [" \u55b5\uff01", " \u6211\u662f\u4e00\u53ea\u4f1a\u8bf4\u8bdd\u7684\u732b\uff01", " \u56de\u8c03\uff08callback\uff09\u975e\u5e38\u6709\u8da3!"];\nfor (var i = 0; i < messages.length; i++) {\n    setTimeout(function () {\n        cat.say(messages[i]);\n    }, i * 1500);\n}\n')),Object(l.b)("p",null,"\u7136\u800c\u4e00\u5b9a\u662f\u54ea\u91cc\u4e0d\u5bf9\uff0c\u8fd9\u53ea\u4f1a\u8bf4\u8bdd\u7684\u732b\u5e76\u6ca1\u6709\u6309\u7167\u9884\u671f\u8fde\u8bf4\u4e09\u6761\u6d88\u606f\uff0c\u5b83\u8bf4\u4e86\u4e09\u6b21\u201c",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\u201d\u3002"),Object(l.b)("p",null,"\u4f60\u77e5\u9053\u95ee\u9898\u51fa\u5728\u54ea\u91cc\u4e48\uff1f"),Object(l.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u662f\uff0c\u5faa\u73af\u672c\u8eab\u53ca\u4e09\u6b21 ",Object(l.b)("inlineCode",{parentName:"p"},"timeout")," \u56de\u8c03\u5747\u5171\u4eab\u552f\u4e00\u7684\u53d8\u91cf ",Object(l.b)("em",{parentName:"p"},"i"),"\u3002\u5f53\u5faa\u73af\u7ed3\u675f\u6267\u884c\u65f6\uff0c",Object(l.b)("em",{parentName:"p"},"i")," \u7684\u503c\u4e3a 3\uff08\u56e0\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"messages.length"),"\u7684\u503c\u4e3a 3\uff09\uff0c\u6b64\u65f6\u56de\u8c03\u5c1a\u672a\u88ab\u89e6\u53d1\u3002"),Object(l.b)("p",null,"\u6240\u4ee5\u5f53\u7b2c\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"timeout")," \u6267\u884c\u65f6\uff0c\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"cat.say(messages[i])"),"\uff0c\u6b64\u65f6 ",Object(l.b)("inlineCode",{parentName:"p"},"i")," \u7684\u503c\u4e3a 3\uff0c\u6240\u4ee5\u732b\u54aa\u6700\u7ec8\u6253\u5370\u51fa\u6765\u7684\u662f",Object(l.b)("inlineCode",{parentName:"p"},"messages[3]"),"\u7684\u503c\u4ea6\u5373",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),Object(l.b)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6709\u5f88\u591a\u79cd\u65b9\u6cd5\uff08",Object(l.b)("a",{parentName:"p",href:"http://jsfiddle.net/sybn4h33/3/"},"\u8fd9\u91cc\u6709\u4e00\u79cd"),"\uff09\uff0c\u4f46\u662f\u4f60\u60f3\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u4f5c\u7528\u57df\u89c4\u5219\u63a5\u8fde\u7ed9\u4f60\u6dfb\u9ebb\u70e6\uff0c\u5982\u679c\u80fd\u5728\u7b2c\u4e00\u65f6\u95f4\u5f7b\u5e95\u89e3\u51b3\u6389\u8fd9\u4e2a\u95ee\u9898\u591a\u597d\u554a\uff01"),Object(l.b)("h2",{id:"let-\u662f\u66f4\u5b8c\u7f8e\u7684-var"},"let \u662f\u66f4\u5b8c\u7f8e\u7684 var"),Object(l.b)("p",null,"JavaScript \u7684\u8bbe\u8ba1\u9519\u8bef\uff08\u5176\u5b83\u8bed\u8a00\u4e5f\u6709\uff0c\u5948\u4f55 JavaScript \u592a ",Object(l.b)("em",{parentName:"p"},"\u7a81\u51fa"),"\uff09\u591a\u534a\u4e0d\u80fd\u88ab\u4fee\u590d\u3002\u4fdd\u6301\u5411\u540e\u517c\u5bb9\u6027\u610f\u5473\u7740\u6c38\u4e0d\u6539\u53d8 JS \u4ee3\u7801\u5728 Web \u5e73\u53f0\u4e0a\u7684\u884c\u4e3a\uff0c\u5373\u4f7f\u8fde\u6807\u51c6\u59d4\u5458\u4f1a\u90fd\u65e0\u6743\u8981\u6c42\u4fee\u590d JavaScript \u4e2d\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u8fd9\u79cd\u602a\u5f02\u7684\u7279\u6027\uff1b\u6d4f\u89c8\u5668\u5382\u5546\u4e5f\u4ece\u6765\u4e0d\u4f1a\u505a\u51fa\u7a81\u7834\u6027\u7684\u6539\u53d8\uff0c\u56e0\u4e3a\u5982\u6b64\u4e00\u6765\u4f24\u5bb3\u7684\u662f\u4ed6\u4eec\u7684\u5fe0\u5b9e\u7528\u6237\u3002"),Object(l.b)("p",null,"\u6240\u4ee5\u5927\u7ea6\u5341\u5e74\u4ee5\u524d\uff0cBrendan Eich \u51b3\u5b9a\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u53ea\u6709\u552f\u4e00\u7684\u89e3\u51b3\u65b9\u6848\u3002"),Object(l.b)("p",null,"\u4ed6\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u5173\u952e\u8bcd\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u3002",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u4e0e",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u4e00\u6837\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u58f0\u660e\u53d8\u91cf\uff0c\u4f46\u5b83\u6709\u7740\u66f4\u597d\u7684\u4f5c\u7528\u57df\u89c4\u5219\u3002"),Object(l.b)("p",null,"\u5b83\u770b\u8d77\u6765\u662f\u8fd9\u6837\u7684\uff1a ",Object(l.b)("inlineCode",{parentName:"p"},"let t = readTachymeter();")," \u6216\u8005\u8fd9\u6837\u7684\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 0; i < messages.length; i++) {\n    ...\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u4e0e",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u8fd8\u662f\u6709\u4e0d\u540c\u4e4b\u5904\u7684\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u53ea\u662f\u5728\u4ee3\u7801\u4e2d\u5c06",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u5168\u5c40\u641c\u7d22\u66ff\u6362\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\uff0c\u4e00\u4e9b\u4f9d\u8d56",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u7684\u72ec\u7279\u7279\u6027\uff08\u53ef\u80fd\u4f60\u4e0d\u662f\u6545\u610f\u8fd9\u6837\u5199\uff09\u7684\u4ee3\u7801\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\u3002\u4f46\u5bf9\u4e8e\u7edd\u5927\u591a\u6570\u4ee3\u7801\u6765\u8bf4\uff0c\u5728 ES6 \u7684\u65b0\u4ee3\u7801\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5e94\u8be5\u505c\u6b62\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u53d8\u91cf\uff0c\u80fd\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u5c31\u7528\u5427\uff01\u4ece\u73b0\u5728\u8d77\uff0c\u8bf7\u8bb0\u4f4f\u8fd9\u53e5\u53e3\u53f7\uff1a\u201c",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u662f\u66f4\u5b8c\u7f8e\u7684",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u201d\u3002"),Object(l.b)("p",null,"\u90a3\u5230\u5e95",Object(l.b)("inlineCode",{parentName:"p"},"let"),"\u548c",Object(l.b)("inlineCode",{parentName:"p"},"var"),"\u6709\u4ec0\u4e48\u4e0d\u540c\u5462\uff1f\u975e\u5e38\u9ad8\u5174\u4f60\u63d0\u51fa\u8fd9\u4e2a\u95ee\u9898\uff01"),Object(l.b)("p",null,"\u8fd9\u4e00\u89c4\u5219\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6355\u6349 bug\uff0c\u9664\u4e86",Object(l.b)("inlineCode",{parentName:"p"},"NaN"),"\u9519\u8bef\u4ee5\u5916\uff0c\u6bcf\u4e00\u4e2a\u5f02\u5e38\u90fd\u4f1a\u5728\u5f53\u524d\u884c\u629b\u51fa\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"let\u58f0\u660e\u7684\u53d8\u91cf\u62e5\u6709\u5757\u7ea7\u4f5c\u7528\u57df\u3002")," \u4e5f\u5c31\u662f\u8bf4\u7528let\u58f0\u660e\u7684\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u53ea\u662f\u5916\u5c42\u5757\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u5916\u5c42\u51fd\u6570\u3002")),Object(l.b)("p",null,"let\u58f0\u660e\u4ecd\u7136\u4fdd\u7559\u4e86\u63d0\u5347\u7684\u7279\u6027\uff0c\u4f46\u4e0d\u4f1a\u76f2\u76ee\u63d0\u5347\u3002\u5728",Object(l.b)("inlineCode",{parentName:"p"},"runTowerExperiment"),"\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7\u5c06var\u66ff\u6362\u4e3alet\u53ef\u4ee5\u5feb\u901f\u4fee\u590d\u95ee\u9898\uff0c\u5982\u679c\u4f60\u5904\u5904\u4f7f\u7528let\u8fdb\u884c\u58f0\u660e\uff0c\u5c31\u4e0d\u4f1a\u9047\u5230\u7c7b\u4f3c\u7684 bug\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"let\u58f0\u660e\u7684\u5168\u5c40\u53d8\u91cf\u4e0d\u662f\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027\u3002")," \u8fd9\u5c31\u610f\u5473\u7740\uff0c\u4f60\u4e0d\u53ef \u4ee5\u901a\u8fc7window. \u53d8\u91cf\u540d\u7684\u65b9\u5f0f\u8bbf\u95ee\u8fd9\u4e9b\u53d8\u91cf\u3002\u5b83\u4eec\u53ea\u5b58\u5728\u4e8e\u4e00\u4e2a\u4e0d\u53ef\u89c1\u7684\u5757\u7684\u4f5c\u7528\u57df\u4e2d\uff0c\u8fd9\u4e2a\u5757\u7406\u8bba\u4e0a\u662f Web \u9875\u9762\u4e2d\u8fd0\u884c\u7684\u6240\u6709 JS \u4ee3\u7801\u7684\u5916\u5c42\u5757\u3002")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"\u5f62\u5982for (let x...)\u7684\u5faa\u73af\u5728\u6bcf\u6b21\u8fed\u4ee3\u65f6\u90fd\u4e3a x \u521b\u5efa\u65b0\u7684\u7ed1\u5b9a\u3002")))),Object(l.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u5fae\u5999\u7684\u533a\u522b\uff0c\u62ff\u6211\u4eec\u7684\u4f1a\u8bf4\u8bdd\u7684\u732b\u7684\u4f8b\u5b50\u6765\u8bf4\uff0c\u5982\u679c\u4e00\u4e2afor (let...)\u5faa\u73af\u6267\u884c\u591a\u6b21\u5e76\u4e14\u5faa\u73af\u4fdd\u6301\u4e86\u4e00\u4e2a\u95ed\u5305\uff0c\u90a3\u4e48\u6bcf\u4e2a\u95ed\u5305\u5c06\u6355\u6349\u4e00\u4e2a\u5faa\u73af\u53d8\u91cf\u7684\u4e0d\u540c\u503c\u4f5c\u4e3a\u526f\u672c\uff0c\u800c\u4e0d\u662f\u6240\u6709\u95ed\u5305\u90fd\u6355\u6349\u5faa\u73af\u53d8\u91cf\u7684\u540c\u4e00\u4e2a\u503c\u3002"),Object(l.b)("p",null,"\u6240\u4ee5\u5728\u4f1a\u8bf4\u8bdd\u7684\u732b\u793a\u4f8b\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06var\u66ff\u6362\u4e3alet\u4fee\u590d bug\u3002"),Object(l.b)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u9002\u7528\u4e8e\u73b0\u6709\u7684\u4e09\u79cd\u5faa\u73af\u65b9\u5f0f\uff1afor-of\u3001for-in\u3001\u4ee5\u53ca\u4f20\u7edf\u7684\u7528\u5206\u53f7\u5206\u9694\u7684\u7c7b C \u5faa\u73af\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"let\u58f0\u660e\u7684\u53d8\u91cf\u76f4\u5230\u63a7\u5236\u6d41\u5230\u8fbe\u8be5\u53d8\u91cf\u88ab\u5b9a\u4e49\u7684\u4ee3\u7801\u884c\u65f6\u624d\u4f1a\u88ab\u88c5\u8f7d\uff0c\u6240\u4ee5\u5728\u5230\u8fbe\u4e4b\u524d\u4f7f\u7528\u8be5\u53d8\u91cf\u4f1a\u89e6\u53d1\u9519\u8bef\u3002")," \u4e3e\u4e2a\u4f8b\u5b50\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function update() {\n    console.log(" \u5f53\u524d\u65f6\u95f4:", t);  // \u5f15\u7528\u9519\u8bef\uff08ReferenceError\uff09\n    ...\n    let t = readTachymeter();\n}\n')),Object(l.b)("p",null,"\u4e0d\u53ef\u8bbf\u95ee\u7684\u8fd9\u6bb5\u65f6\u95f4\u53d8\u91cf\u4e00\u76f4\u5904\u4e8e\u4f5c\u7528\u57df\u4e2d\uff0c\u4f46\u662f\u5c1a\u672a\u88c5\u8f7d\uff0c\u5b83\u4eec\u4f4d\u4e8e ",Object(l.b)("em",{parentName:"p"},"\u4e34\u65f6\u6b7b\u533a\uff08Temporal Dead Zone\uff0c\u7b80\u79f0 TDZ\uff09")," \u4e2d\u3002\u6211\u4e00\u76f4\u60f3\u7528\u79d1\u5e7b\u5c0f\u8bf4\u6765\u7c7b\u6bd4\u8fd9\u4e2a\u8111\u6d1e\u5927\u5f00\u7684\u884c\u8bdd\uff0c\u4f46\u662f\u8fd8\u6ca1\u60f3\u597d\u600e\u4e48\u641e\u3002"),Object(l.b)("p",null,"\uff08\u8106\u5f31\u7684\u6027\u80fd\u7ec6\u8282\uff1a\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u67e5\u770b\u4ee3\u7801\u5c31\u53ef\u4ee5\u533a\u5206\u58f0\u660e\u662f\u5426\u5df2\u7ecf\u6267\u884c\uff0c\u6240\u4ee5\u4e8b\u5b9e\u4e0a\uff0cJavaScript \u5f15\u64ce\u4e0d\u9700\u8981\u5728\u6bcf\u6b21\u4ee3\u7801\u8fd0\u884c\u65f6\u90fd\u989d\u5916\u6267\u884c \u4e00\u6b21\u53d8\u91cf\u53ef\u8bbf\u95ee\u68c0\u67e5\u6765\u786e\u4fdd\u53d8\u91cf\u5df2\u7ecf\u88ab\u521d\u59cb\u5316\u3002\u7136\u800c\u5728\u95ed\u5305\u5185\u90e8\u6709\u65f6\u4e0d\u662f\u900f\u660e\u7684\uff0c\u8fd9\u65f6 JavaScript \u5f15\u64ce\u5c06\u4f1a\u505a\u4e00\u4e2a\u8fd0\u884c\u65f6\u68c0\u67e5\uff0c\u4e5f\u5c31\u610f\u5473\u7740let\u76f8\u5bf9var\u800c\u8a00\u6bd4\u8f83\u6162\u3002\uff09"),Object(l.b)("p",null,"\uff08\u8106\u5f31\u7684\u5e73\u884c\u5b87\u5b99\u4f5c\u7528\u57df\u7ec6\u8282\uff1a\u5728\u4e00\u4e9b\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u4e00\u4e2a\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u59cb\u4e8e\u58f0\u660e\u4e4b\u5904\uff0c\u800c\u975e\u524d\u540e\u8986\u76d6\u6574\u4e2a\u5c01\u95ed\u4ee3\u7801\u5757\u3002\u6807\u51c6\u59d4\u5458\u4f1a\u66fe\u8003\u8651\u8fc7\u5c06\u8fd9\u79cd\u4f5c\u7528\u57df\u51c6\u5219\u8d4b\u4e88let\u5173\u952e\u8bcd\uff0c\u4f46\u662f\u4e00\u65e6\u4f7f\u7528\u8fd9\u79cd\u51c6\u5219\uff0c\u539f\u672c\u63d0\u524d\u4f7f\u7528\u53d8\u91cf\u7684\u8bed\u53e5\u4f1a\u5bfc\u81f4\u5f15\u7528\u9519\u8bef\uff08ReferenceError\uff09\uff0c\u73b0\u5728\u8be5\u8bed\u53e5\u4e0d\u4f4d\u4e8elet t\u7684\u58f0\u660e\u4f5c\u7528\u57df\u4e2d\uff0c\u6839\u672c\u4e0d\u4f1a\u5f15\u7528\u6b64\u5904\u7684\u53d8\u91cft\uff0c\u800c\u662f\u5f15\u7528\u5916\u5c42\u4f5c\u7528\u57df\u7684\u76f8\u5e94\u53d8\u91cf\u3002\u4f46\u662f\u8fd9\u4e2a\u65b9\u6cd5\u65e0\u6cd5\u4e0e\u95ed\u5305\u548c\u51fd\u6570\u63d0\u5347\u5f88\u597d\u5f97\u7ed3\u5408\uff0c\u6240\u4ee5\u8be5\u63d0\u6848\u6700\u7ec8\u88ab\u5426\u51b3\u4e86\u3002\uff09"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u7528let\u91cd\u5b9a\u4e49\u53d8\u91cf\u4f1a\u629b\u51fa\u4e00\u4e2a\u8bed\u6cd5\u9519\u8bef\uff08SyntaxError\uff09\u3002"))),Object(l.b)("p",null,"\u8fd9\u4e00\u6761\u89c4\u5219\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u4f60\u68c0\u6d4b\u7410\u788e\u7684\u5c0f\u95ee\u9898\u3002\u8bda\u7136\uff0c\u8fd9\u4ea6\u662fvar\u4e0elet\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5f53\u4f60\u5168\u5c40\u641c\u7d22var\u66ff\u6362\u4e3alet\u65f6\u4e5f\u4f1a\u5bfc\u81f4let\u91cd\u5b9a\u4e49\u8bed\u6cd5\u9519\u8bef\uff0c\u56e0\u4e3a\u8fd9\u4e00\u89c4\u5219\u5bf9\u5168\u5c40let\u53d8\u91cf\u4e5f\u6709\u6548\u3002"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u7684\u591a\u4e2a\u811a\u672c\u4e2d\u90fd\u58f0\u660e\u4e86\u76f8\u540c\u7684\u5168\u5c40\u53d8\u91cf\uff0c\u4f60\u6700\u597d\u7ee7\u7eed\u7528var\u58f0\u660e\u8fd9\u4e9b\u53d8\u91cf\u3002\u5982\u679c\u4f60\u6362\u7528\u4e86let\uff0c\u540e\u52a0\u8f7d\u7684\u811a\u672c\u90fd\u4f1a\u6267\u884c\u5931\u8d25\u5e76\u629b\u51fa\u9519\u8bef\u3002"),Object(l.b)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ES6 \u5185\u5efa\u7684\u6a21\u5757\u673a\u5236\uff0c\u540e\u9762\u7684\u6587\u7ae0\u4e2d\u4f1a\u8be6\u7ec6\u8bb2\u89e3\u3002"),Object(l.b)("p",null,"\uff08\u8106\u5f31\u7684\u8bed\u6cd5\u7ec6\u8282\uff1alet\u662f\u4e00\u4e2a\u4e25\u683c\u6a21\u5f0f\u4e0b\u7684\u4fdd\u7559\u8bcd\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u51fa\u4e8e\u5411\u540e\u517c\u5bb9\u7684\u76ee\u7684\uff0c\u4f60\u4ecd\u53ef\u4ee5\u7528let\u547d\u540d\u6765\u58f0\u660e\u53d8\u91cf\u3001\u51fd\u6570\u548c\u53c2\u6570\uff0c\u867d\u7136\u4f60\u4e0d\u4f1a\u72af\u50bb\uff0c\u4f46\u662f\u4f60\u786e\u5b9e\u53ef\u4ee5\u7f16\u5199",Object(l.b)("inlineCode",{parentName:"p"},"var let = 'q'"),";\u8fd9\u6837\u7684\u4ee3\u7801\uff01\u4e0d\u8fc7l",Object(l.b)("inlineCode",{parentName:"p"},"et let;"),"\u65e0\u8bba\u5982\u4f55\u90fd\u662f\u975e\u6cd5\u7684\u3002\uff09"),Object(l.b)("p",null,"\u5728\u90a3\u4e9b\u4e0d\u540c\u4e4b\u5916\uff0clet\u548cvar\u51e0\u4e4e\u5f88\u76f8\u4f3c\u4e86\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5b83\u4eec\u90fd\u652f\u6301\u4f7f\u7528\u9017\u53f7\u5206\u9694\u58f0\u660e\u591a\u91cd\u53d8\u91cf\uff0c\u5b83\u4eec\u4e5f\u90fd\u652f\u6301\u89e3\u6784\u7279\u6027\u3002"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"\u6ce8\u610f\uff0c class\u7c7b\u58f0\u660e\u7684\u884c\u4e3a\u4e0evar\u4e0d\u540c\u800c\u4e0elet\u4e00\u81f4\u3002\u5982\u679c\u4f60\u52a0\u8f7d\u4e00\u6bb5\u5305\u542b\u540c\u540d\u7c7b\u7684\u811a\u672c\uff0c\u540e\u5b9a\u4e49\u7684\u7c7b\u4f1a\u629b\u51fa\u91cd\u5b9a\u4e49\u9519\u8bef\u3002"))),Object(l.b)("h2",{id:"const"},"const"),Object(l.b)("p",null,"\u662f\u7684\uff0c\u8fd8\u6709\u4e00\u4e2a\u65b0\u7684\u5173\u952e\u8bcd\uff01"),Object(l.b)("p",null,"ES6 \u5f15\u5165\u7684\u7b2c\u4e09\u4e2a\u58f0\u660e\u7c7b\u5173\u952e\u8bcd\u4e0elet\u7c7b\u4f3c\uff1aconst\u3002"),Object(l.b)("p",null,"const\u58f0\u660e\u7684\u53d8\u91cf\u4e0elet\u58f0\u660e\u7684\u53d8\u91cf\u7c7b\u4f3c\uff0c\u5b83\u4eec\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0cconst\u58f0\u660e\u7684\u53d8\u91cf\u53ea\u53ef\u4ee5\u5728\u58f0\u660e\u65f6\u8d4b\u503c\uff0c\u4e0d\u53ef\u968f\u610f\u4fee\u6539\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4",Object(l.b)("inlineCode",{parentName:"p"},"SyntaxError"),"\uff08\u8bed\u6cd5\u9519\u8bef\uff09\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"const MAX_CAT_SIZE_KG = 3000; // \u6b63\u786e\n\nMAX_CAT_SIZE_KG = 5000; // \u8bed\u6cd5\u9519\u8bef\uff08SyntaxError\uff09\nMAX_CAT_SIZE_KG++; // \u867d\u7136\u6362\u4e86\u4e00\u79cd\u65b9\u5f0f\uff0c\u4f46\u4ecd\u7136\u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\n")),Object(l.b)("p",null,"\u5f53\u7136\uff0c\u89c4\u8303\u8bbe\u8ba1\u7684\u8db3\u591f\u660e\u667a\uff0c\u7528const\u58f0\u660e\u53d8\u91cf\u540e\u5fc5\u987b\u8981\u8d4b\u503c\uff0c\u5426\u5219\u4e5f\u629b\u51fa\u8bed\u6cd5\u9519\u8bef\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"const theFairest; // \u4f9d\u7136\u662f\u8bed\u6cd5\u9519\u8bef\uff0c\u4f60\u8fd9\u4e2a\u5012\u9709\u86cb## \u795e\u79d8\u7684\u4ee3\u7406\u547d\u540d\u7a7a\u95f4\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u201c\u547d\u540d\u7a7a\u95f4\u662f\u4e00\u79cd\u7edd\u5999\u7684\u7406\u5ff5\uff0c\u6211\u4eec\u5e94\u5f53\u591a\u52a0\u5229\u7528\uff01\u201d\u2014\u2014Tim Peters\uff0c\u201c\u8fd9\u662f Python \u4e4b\u7985\u201d")),Object(l.b)("p",null,"\u5d4c\u5957\u4f5c\u7528\u57df\u662f\u7f16\u7a0b\u8bed\u8a00\u80cc\u540e\u7684\u6838\u5fc3\u7406\u5ff5\u4e4b\u4e00\uff0c\u8fd9\u4e2a\u7406\u5ff5\u59cb\u4e8e\u5927\u7ea6 57 \u5e74\u524d\u7684 ALGOL \uff0c\u73b0\u5728\u56de\u8fc7\u5934\u770b\u5f53\u65f6\u7684\u51b3\u5b9a\u65e0\u6bd4\u6b63\u786e\u3002"),Object(l.b)("p",null,"\u5728 ES3 \u4e4b\u524d\uff0cJavaScript \u4e2d\u53ea\u6709\u5168\u5c40\u4f5c\u7528\u57df\u548c\u51fd\u6570\u4f5c\u7528\u57df\u3002\uff08\u8ba9\u6211\u4eec\u5ffd\u7565with\u8bed\u53e5\u5427\u3002\uff09ES3 \u4e2d\u5f15\u5165\u4e86",Object(l.b)("inlineCode",{parentName:"p"},"try-catch"),"\u8bed\u53e5\uff0c\u610f\u5473\u7740\u8bed\u8a00\u4e2d\u8bde\u751f\u4e00\u79cd\u65b0\u7684\u4f5c\u7528\u57df\uff0c\u53ea\u7528\u4e8e catch \u5757\u4e2d\u7684\u5f02\u5e38\u53d8\u91cf\u3002ES5 \u6dfb\u52a0\u4e86\u7528\u4e8e\u4e25\u683c\u7684",Object(l.b)("inlineCode",{parentName:"p"},"eval()"),"\u65b9\u6cd5\u7684\u4f5c\u7528\u57df\u3002ES6 \u6dfb\u52a0\u4e86\u5757\u4f5c\u7528\u57df\uff0cfor \u5faa\u73af\u4f5c\u7528\u57df\uff0c\u65b0\u7684\u5168\u5c40let\u4f5c\u7528\u57df\uff0c\u6a21\u5757\u4f5c\u7528\u57df\uff0c\u4ee5\u53ca\u6c42\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u65f6\u4f7f\u7528\u7684\u9644\u52a0\u4f5c\u7528\u57df\u3002"),Object(l.b)("p",null,"\u6240\u6709\u81ea ES3 \u5f00\u59cb\u6dfb\u52a0\u7684\u5176\u5b83\u4f5c\u7528\u57df\u975e\u5e38\u91cd\u8981\uff0c\u5b83\u4eec\u7684\u52a0\u5165\u4f7f\u5f97 JavaScript \u9762\u5411\u8fc7\u7a0b\u4e0e\u9762\u5411\u5bf9\u8c61\u7684\u7279\u6027\u8fd0\u884c\u5f97\u72b9\u5982\u95ed\u5305\u4e00\u6837\u5e73\u7a33\u3001\u7cbe\u51c6\uff0c\u5f53\u7136\u95ed\u5305\u4e5f\u53ef\u4ee5\u65e0 \u7f1d\u8854\u63a5\u8fd9\u4e9b\u4f5c\u7528\u57df\u5b9e\u73b0\u5404\u79cd\u529f\u80fd\u3002\u6216\u8bb8\u4f60\u5728\u9605\u8bfb\u8fd9\u7bc7\u6587\u7ae0\u4e4b\u524d\u4ece\u672a\u6ce8\u610f\u5230\u8fd9\u4e9b\u4f5c\u7528\u57df\u89c4\u5219\u7684\u5b58\u5728\uff0c\u5982\u679c\u771f\u7684\u8fd9\u6837\uff0c\u90a3\u8fd9\u95e8\u8bed\u8a00\u5c31\u6070\u5982\u5176\u5206\u5730\u5b8c\u6210\u4e86\u5b83\u7684\u672c\u804c\u5de5\u4f5c\u3002\n\u6211\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 let \u548c const \u4e86\u4e48\uff1f"),Object(l.b)("p",null,"\u662f\u7684\u3002\u5982\u679c\u8981\u5728 web \u4e0a\u4f7f\u7528let\u548cconst\u7279\u6027\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u8bf8\u5982 Babel \u3001 Traceur \u6216 TypeScript \u7684 ES6 \u8f6c\u8bd1\u5668\u3002\uff08Babel \u548c Traceur \u6682\u4e0d\u652f\u6301\u4e34\u65f6\u6b7b\u533a\u7279\u6027\u3002\uff09"),Object(l.b)("p",null,"io.js \u652f\u6301let\u548cconst\uff0c\u4f46\u662f\u53ea\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u7f16\u7801\u53ef\u4ee5\u4f7f\u7528\u3002Node.js \u540c\u6837\u652f\u6301\uff0c\u4f46\u662f\u9700\u8981\u542f\u7528--harmony\u9009\u9879\u3002"),Object(l.b)("p",null,"\u4e5d\u5e74\u524d\uff0cBrendan Eich \u5728Firefox \u4e2d\u5b9e\u73b0\u4e86\u521d\u7248\u7684 let\u5173\u952e\u8bcd\u3002\u8fd9\u4e2a\u7279\u6027\u5728\u968f\u540e\u7684\u6807\u51c6\u5316\u8fdb\u7a0b\u4e2d\u5f7b\u5e95\u5730\u88ab\u91cd\u65b0\u8bbe\u8ba1\u4e86\u3002Shu-yu Guo \u6b63\u5728\u6309\u7167\u65b0\u6807\u51c6\u5bf9\u539f\u6709\u5b9e\u73b0\u8fdb\u884c\u5347\u7ea7\uff0c\u8be5\u9879\u76ee\u7531 Jeff Walden \u548c\u5176\u4ed6\u4eba\u505a\u4ee3\u7801\u5ba1\u67e5\u3002"),Object(l.b)("p",null,"\u597d\u7684\uff0c\u6211\u4eec\u6b63\u5904\u4e8e\u51b2\u523a\u9636\u6bb5\uff0c\u6f2b\u957f\u800c\u8270\u96be\u7684 ES6 \u7279\u6027\u4e4b\u65c5\u7684\u7ec8\u70b9\u79bb\u6211\u4eec\u4e0d\u8fdc\u4e86\uff0c\u6210\u529f\u5c31\u5728\u773c\u524d\u3002\u4e24\u5468\u540e\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0\u5927\u5bb6\u6700\u671f\u5f85\u7684 ES6 \u7279\u6027\uff08\u8bd1\u8005\u6ce8\uff1a\u4f5c\u8005 7 \u6708 31 \u65e5\u53d1\u6587\uff0c\u6839\u636e\u63a8\u7b97\u76ee\u524d\u5e94\u8be5\u5df2\u7ecf\u5b8c\u6210\uff09\u3002\u4e0b\u4e00\u6b21\uff0c\u6211\u4eec\u7ee7\u7eed\u62d3\u5c55 ES6 \u4e2d\u7c7b\u7684\u7279\u6027super\uff0c\u8bb0\u5f97\u56de\u6765\u52a0\u5165\u6211\u4eec\u8ddf\u968f Eric Faust \u4e00\u8d77\u300a\u6df1\u5165\u6d45\u51fa ES6\uff1a\u5b50\u7c7b\u300b\u3002"),Object(l.b)(b.a,{mdxType:"BottomCopyRight"}))}u.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(n),m=a,j=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?r.a.createElement(j,b(b({ref:t},p),{},{components:n})):r.a.createElement(j,b({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return b}));var a=n(4),r=n(0),l=n.n(r),c=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.link?l.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):l.a.createElement("i",null,this.props.author);return l.a.createElement("section",null,l.a.createElement("b",null,"\u672c\u6587\u4f5c\u8005\u4e3a ",e,", \u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",l.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),l.a.createElement("hr",null))},t}(l.a.Component);n(268);l.a.Component;function b(e){if("string"!=typeof e.href)return l.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");const t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return l.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return l.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);const[,n,a,r,c]=t,b=`/blog/${n}/${a}/${r}/${c}`;return l.a.createElement("a",{href:b,target:e.target,"data-component":"BlogLink"},e.children)}},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a);class l extends r.a.Component{render(){return r.a.createElement("div",null,"\u611f\u8c22",r.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",r.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}}}]);