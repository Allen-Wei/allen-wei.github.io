(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),c=(t(0),t(292)),l=t(293),i=t(299),o={title:"Why Java Sucks and C# Rocks\uff085\uff09\uff1a\u533f\u540d\u65b9\u6cd5",sidebar_label:"\u533f\u540d\u65b9\u6cd5",keywords:["java","c#","csharp"],description:"Why Java Sucks and C# Rocks"},u={unversionedId:"articles/why-java-sucks-and-csharp-rocks/5-anonymous-method",id:"articles/why-java-sucks-and-csharp-rocks/5-anonymous-method",isDocsHomePage:!1,title:"Why Java Sucks and C# Rocks\uff085\uff09\uff1a\u533f\u540d\u65b9\u6cd5",description:"Why Java Sucks and C# Rocks",source:"@site/src/docs/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method.md",slug:"/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method.md",version:"current",sidebar_label:"\u533f\u540d\u65b9\u6cd5",sidebar:"docs",previous:{title:"Why Java Sucks and C# Rocks\uff08\u88652\uff09\uff1a\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model"},next:{title:"Why Java Sucks and C# Rocks\uff086\uff09\uff1ayield\u53ca\u5176\u4f5c\u7528",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/6-yield"}},s=[{value:"\u59d4\u6258",id:"\u59d4\u6258",children:[]},{value:"\u533f\u540d\u65b9\u6cd5\u53ca\u5176\u5178\u578b\u4f7f\u7528\u573a\u666f",id:"\u533f\u540d\u65b9\u6cd5\u53ca\u5176\u5178\u578b\u4f7f\u7528\u573a\u666f",children:[]},{value:"C#\u7684\u533f\u540d\u65b9\u6cd5\u4e0eJava\u7684\u533f\u540d\u7c7b\u578b",id:"c\u7684\u533f\u540d\u65b9\u6cd5\u4e0ejava\u7684\u533f\u540d\u7c7b\u578b",children:[]}],p={toc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(l.b,{author:"\u8001\u8d75\u70b9\u6ef4",link:"http://blog.zhaojie.me/",mdxType:"NetworkCopyRight"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2010/07/why-java-sucks-and-csharp-rocks-5-anonymous-method.html"},"\u539f\u6587 - Why Java Sucks and C# Rocks\uff085\uff09\uff1a\u533f\u540d\u65b9\u6cd5")),Object(c.b)("p",null,"\u786e\u5207\u5730\u8bf4\uff0c\u8fd9\u91cc\u7684\u6807\u9898\u5e94\u8be5\u662f\u201cC#\u4e2d\u7684\u533f\u540d\u65b9\u6cd5\u201d\uff0c\u56e0\u4e3a\u8fd9\u662fC#\u4e2d\u7279\u6709\u7684\u529f\u80fd\u3002\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u91cc\uff0c\u867d\u7136\u6211\u90fd\u7528\u957f\u7bc7\u6587\u5b57\u52a0\u4ee3\u7801\u793a\u4f8b\u6765\u8bf4\u660e\u95ee\u9898\uff0c\u4f46\u603b\u6709\u670b\u53cb\u8ba4\u4e3a\u6211\u8c08\u7684\u53ea\u662fC#\u548cJava\u7684\u201c\u533a\u522b\u201d\uff0c\u7b97\u4e0d\u4e0a\u4f18\u52bf\u3002\u4e0d\u8fc7\u4ece\u8fd9\u7bc7\u6587\u7ae0\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u6b63\u5f0f\u8fdb\u5165C# 2.0\u7684\u65f6\u4ee3\uff0c\u8fd9\u4e5f\u662fC#\u5927\u6b65\u7529\u5f00Java\u8bed\u8a00\u7684\u5f00\u7aef\u2014\u2014\u53ef\u4ee5\u770b\u51fa\uff0cAnders Hejlsberg\u4ece\u6b64\u5f00\u59cb\u5b9e\u73b0\u4ed6\u5bf9\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u5404\u79cd\u7406\u60f3\uff0c\u800c\u5e76\u975e\u7ea0\u7f20\u4e8e\u4e0eJava\u6240\u8c13\u7684\u201c\u7ade\u4e89\u201d\u4e2d\u3002\u4f8b\u5982\u8fd9\u7bc7\u6587\u7ae0\u8981\u8ba8\u8bba\u7684\u201c\u533f\u540d\u65b9\u6cd5\u201d\u7279\u6027\uff0c\u4ee5\u53ca\u968f\u4e4b\u800c\u6765\u7684\u201c\u51fd\u6570\u5f0f\u7f16\u7a0b\u201d\u75d5\u8ff9\uff0c\u4fbf\u5f00\u59cb\u5f15\u9886C#\u5728\u5f00\u53d1\u7406\u5ff5\u4e0a\u7684\u8fdb\u6b65\u3002"),Object(c.b)("h2",{id:"\u59d4\u6258"},"\u59d4\u6258"),Object(c.b)("p",null,"\u59d4\u6258\uff08Delegate\uff09\uff0c\u4e8b\u5b9e\u4e0a\u8fd9\u662f\u5728.NET 1.0\uff08\u8bf7\u6ce8\u610f\u4e0d\u662fC#\uff0c\u800c\u662f.NET\u5e73\u53f0\u7684\u6982\u5ff5\uff09\u65f6\u4ee3\u4fbf\u6709\u7684\u4e1c\u897f\u3002\u4e0d\u8fc7\uff0c\u56e0\u4e3a\u5728C# 1.0\u4e2d\u5e76\u6ca1\u6709\u63d0\u4f9b\u4e00\u4e2a\u201c\u6539\u53d8\u7f16\u7a0b\u601d\u7ef4\u201d\u7684\u7279\u6027\u6765\u4f53\u73b0\u8fd9\u4e00\u6982\u5ff5\uff0c\u4fbf\u6ca1\u6709\u591a\u63d0\u3002\u4e0d\u8fc7\u5230\u4e86C# 2.0\uff0c\u65e2\u7136\u6211\u4eec\u8981\u5f00\u59cb\u8c08\u533f\u540d\u65b9\u6cd5\u4e86\uff0c\u4fbf\u4e0d\u5f97\u4e0d\u63d0\u201c\u59d4\u6258\u201d\u8fd9\u4e2a\u975e\u5e38\u5173\u952e\u7684\u6982\u5ff5\u3002\u5982\u679c\u60a8\u6ca1\u6709\u63a5\u89e6\u8fc7\u8fd9\u4e2a\u6982\u5ff5\uff0c\u4e0d\u59a8\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u201c\u59d4\u6258\u201d\u7406\u89e3\u4e3a\u4e00\u79cd\u201c\u7c7b\u578b\u5b89\u5168\u201d\u7684\u51fd\u6570\u6307\u9488\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"public delegate void Action<T>(T arg);\n\npublic delegate T Func<T>();\n\npublic delegate TResult Func<T, TResult>(T arg);\n\npublic delegate void MouseEventHandler(object sender, MouseEventArgs e);\n")),Object(c.b)("p",null,"\u5728C#\u4e2d\u5b9a\u4e49\u59d4\u6258\u5bf9\u8c61\u65f6\u9700\u8981\u7528\u5230delegate\u5173\u952e\u5b57\uff0c\u7136\u540e\u4fbf\u50cf\u58f0\u660e\u4e00\u4e2a\u65b9\u6cd5\u90a3\u6837\u6307\u5b9a\u59d4\u6258\u540d\u79f0\uff0c\u53c2\u6570\u540d\u548c\u8fd4\u56de\u503c\u5f97\u540d\u79f0\u7b49\u7b49\u3002\u59d4\u6258\u53ef\u4ee5\u5e26\u6709\u6cdb\u578b\u53c2\u6570\uff0c\u8fd9\u6837\u4fbf\u53ef\u4ee5\u5b9a\u4e49\u5341\u5206\u901a\u7528\u7684\u59d4\u6258\u7c7b\u578b\uff0c\u5982\u4e0a\u9762\u7684Action\u59d4\u6258\u53ca\u4e24\u4e2aFunc\u59d4\u6258\u3002\u63d0\u4f9b\u8fd9\u79cd\u901a\u7528\u7684\u59d4\u6258\u7c7b\u578b\u5bf9\u4e8e\u67d0\u4e9b\u7f16\u7a0b\u5b9e\u8df5\u6709\u7740\u5341\u5206\u91cd\u8981\u7684\u610f\u4e49\uff0c\u8fd9\u70b9\u5728\u4ee5\u540e\u7684\u6587\u7ae0\u4e2d\u4e5f\u4f1a\u63d0\u5230\u3002\u4e0d\u8fc7\uff0c\u5728\u8fd8\u6ca1\u6709\u63d0\u4f9b\u6cdb\u578b\u652f\u6301\u7684.NET 1.0\uff0c\u6216\u8005\u8bf4\u662f\u5728C# 1.0\u65f6\u4ee3\uff0c\u6240\u6709\u7684\u59d4\u6258\u90fd\u662f\u5982\u4e0a\u9762MouseEventHandler\u90a3\u6837\u62e5\u6709\u7684\u5177\u4f53\u7c7b\u578b\u59d4\u6258\u3002"),Object(c.b)("p",null,"\u5728.NET\u4e2d\uff0c\u59d4\u6258\u4f5c\u7528\u662f\u5f15\u7528\u4e00\u4e2a\u201c\u65b9\u6cd5\u201d\uff0c\u4ee5\u53ca\u5176\u8c03\u7528\u65f6\u6240\u9700\u8981\u7684\u5b8c\u6574\u4e0a\u4e0b\u6587\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6709\u4e86\u4e00\u4e2a\u59d4\u6258\u5bf9\u8c61\u4e4b\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u76f4\u63a5\u201c\u8c03\u7528\u201d\u8fd9\u4e2a\u65b9\u6cd5\u4e86\u3002\u81ea\u7136\uff0c\u59d4\u6258\u6240\u5f15\u7528\u7684\u65b9\u6cd5\u5fc5\u987b\u4e0e\u59d4\u6258\u7684\u7b7e\u540d\u5b8c\u5168\u76f8\u540c\uff0c\u8fd9\u4e5f\u662f\u4e0a\u6587\u4e2d\u201c\u7c7b\u578b\u5b89\u5168\u51fd\u6570\u6307\u9488\u201d\u6240\u8868\u793a\u7684\u542b\u4e49\u3002\u59d4\u6258\u5728\u8c03\u7528\u65f6\u7684\u5f00\u9500\u548c\u4e00\u4e2a\u865a\u65b9\u6cd5\u5dee\u4e0d\u591a\uff0c\u53ef\u4ee5\u8bf4\u5b83\u7684\u6027\u80fd\u975e\u5e38\u9ad8\uff0c\u56e0\u6b64\u5b83\u4e5f\u662f\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u4f18\u5316\u201c\u53cd\u5c04\u8c03\u7528\u201d\u6027\u80fd\u7684\u5e38\u7528\u624b\u6bb5\u3002"),Object(c.b)("p",null,"\u5728.NET\u4e2d\uff0c\u201c\u4e8b\u4ef6\u201d\u662f\u59d4\u6258\u7684\u4e00\u4e2a\u91cd\u8981\u4f7f\u7528\u573a\u666f\uff0c\u6700\u8fd1\u6709\u4eba\u8d28\u7591.NET\u7684\u4e8b\u4ef6\u662f\u4e2a\u8bbe\u8ba1\u4e0a\u7684\u9519\u8bef\uff0c\u5b83\u5b8c\u5168\u5e94\u8be5\u50cfJava\u90a3\u6837\u57fa\u4e8e\u666e\u901a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u201c\u4e8b\u4ef6\u201d\u6982\u5ff5\u3002\u5bf9\u6b64\u6211\u6709\u4e0d\u540c\u7684\u770b\u6cd5\uff0c\u4e0d\u8fc7\u8fd9\u662f\u4e00\u4e2a\u8f83\u5927\u7684\u8bdd\u9898\uff0c\u56e0\u6b64\u6211\u5c06\u5176\u4ece\u73b0\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u5265\u79bb\u5f00\u6765\uff0c\u72ec\u7acb\u6210\u7bc7\u3002\u800c\u73b0\u5728\u6211\u5148\u8ba8\u8bba\u5176\u4ed6\u4e00\u4e9b\u59d4\u6258\u7684\u5178\u578b\u4f7f\u7528\u573a\u666f\u3002"),Object(c.b)("h2",{id:"\u533f\u540d\u65b9\u6cd5\u53ca\u5176\u5178\u578b\u4f7f\u7528\u573a\u666f"},"\u533f\u540d\u65b9\u6cd5\u53ca\u5176\u5178\u578b\u4f7f\u7528\u573a\u666f"),Object(c.b)("p",null,"\u5728.NET\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u59d4\u6258\u5bf9\u8c61\u4f5c\u4e3a\u65b9\u6cd5\u7684\u53c2\u6570\u6216\u662f\u8fd4\u56de\u503c\u6765\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"static Func<T1, Func<T2, TResult>> Curry<T1, T2, TResult>(this Func<T1, T2, TResult> f) { ... }\n")),Object(c.b)("p",null,"\u60a8\u53ef\u4ee5\u5df2\u7ecf\u610f\u8bc6\u5230\u4e86\uff0c\u8fd9\u4fbf\u662f\u6240\u8c13\u7684\u201c\u9ad8\u9636\u51fd\u6570\u201d\u3002",Object(c.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2009/04/csharp-higher-order-function.html"},"\u9ad8\u9636\u51fd\u6570\u7684\u4f18\u52bf"),"\u6709\u8bb8\u591a\uff0c\u7b80\u5355\u6982\u62ec\u4e00\u4e0b\u4fbf\u662f\u201c\u66f4\u597d\u7684\u62bd\u8c61\u548c\u7ec4\u5408\u80fd\u529b\u201d\u3002\u53ea\u662f\u5728C# 1.0\u4e2d\uff0c\u6211\u4eec\u5fc5\u987b\u72ec\u7acb\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u4e4b\u540e\uff0c\u624d\u80fd\u5c06\u5176\u6784\u9020\u4e3a\u4e00\u4e2a\u59d4\u6258\u5bf9\u8c61\uff0c\u4e0d\u8fc7\u4eceC# 2.0\u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u201c\u533f\u540d\u65b9\u6cd5\u201d\u6765\u6784\u9020\u4e00\u4e2a\u59d4\u6258\u5bf9\u8c61\uff0c\u4f8b\u5982\u4e0a\u9762\u7684Curry\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u4e3a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"static Func<T1, Func<T2, TResult>> Curry<T1, T2, TResult>(this Func<T1, T2, TResult> f)\n{\n    // in C# 3.0: x => y => f(x, y)\n    return delegate(T1 x)\n    {\n        return delegate(T2 y) { return f(x, y); };\n    };\n}\n")),Object(c.b)("p",null,"\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528delegate\u5173\u952e\u5b57\u53ef\u5728\u4ee3\u7801\u4e2d\u5185\u8054\u5730\u521b\u5efa\u4e00\u4e2a\u59d4\u6258\u5bf9\u8c61\uff0c\u5e76\u4f1a\u5728\u9700\u8981\u65f6\u5f62\u6210\u4e00\u4e2a\u95ed\u5305\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u8c03\u7528\u8fd9\u4e2a\u533f\u540d\u65b9\u6cd5\u6240\u9700\u8981\u7684\u5b8c\u6574\u4e0a\u4e0b\u6587\u3002\u4f8b\u5982\u5728\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5185\u5c42\u7684\u533f\u540d\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u5230\u5916\u5c42\u533f\u540d\u51fd\u6570\u7684\u53c2\u6570x\uff0c\u4ee5\u53caCurry\u65b9\u6cd5\u7684\u53c2\u6570f\u3002\u5728C#\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570\u65f6\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5b57\u9762\u8303\u56f4\u5185\uff08lexical scope\uff09\u7684\u6240\u6709\u6210\u5458\uff0c\u8fd9\u4e5f\u9010\u6e10\u8ba9C#\u6709\u4e86\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u610f\u5473\uff0c\u5f53\u7136\u8fd9\u4e00\u5207\u90fd\u8fd8\u5f97\u7b49\u5230C# 3.0\u9636\u6bb5\u624d\u4f1a\u771f\u6b63\u53d1\u626c\u5149\u5927\uff0c\u76ee\u524d\u8fd8\u53ea\u662fC# 2.0\u3002"),Object(c.b)("p",null,"\u533f\u540d\u65b9\u6cd5\u662f\u8bed\u8a00\u7684\u7279\u6027\uff0c\u548c\u8fd0\u884c\u65f6\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\uff0c\u5b8c\u5168\u662f\u7f16\u8bd1\u5668\u65bd\u5c55\u7684\u9b54\u6cd5\uff0c\u4e8e\u662f\u6709\u4e9b\u4eba\u4fbf\u8ba4\u4e3a\u8fd9\u5c31\u662f\u4e2a\u65e0\u8db3\u8f7b\u91cd\u7684\u8bed\u6cd5\u7cd6\u3002\u8bed\u6cd5\u7cd6\u6ca1\u9519\uff0c\u4f46\u662f\u201c\u65e0\u8db3\u8f7b\u91cd\u201d\u7684\u8bc4\u4ef7\u6211\u65e0\u6cd5\u8d5e\u540c\u3002\u533f\u540d\u51fd\u6570\u5e26\u6765\u4e86\u8bb8\u591a\u7f16\u7a0b\u6a21\u5f0f\u4e0a\u7684\u6539\u53d8\u3002\u7531\u4e8e\u8bed\u6cd5\u7279\u6027\u7684\u7f3a\u5931\uff0c\u8fd9\u4e9b\u7f16\u7a0b\u6a21\u5f0f\u5728C# 1.0\u6216\u662fJava\u8bed\u8a00\u4e2d\u662f\u9ebb\u70e6\u5230\u51e0\u4e4e\u65e0\u6cd5\u4f7f\u7528\u7684\uff0c\u66f4\u522b\u63d0\u201c\u63a8\u5e7f\u201d\u5f00\u6765\u3002\u5173\u4e8e\u8fd9\u65b9\u9762\u7684\u6587\u7ae0\u6211\u5199\u8fc7\u4e0d\u5c11\uff0c\u5b83\u4eec\u90fd\u662f\u771f\u6b63\u7528\u4e8e\u4ea7\u54c1\u5f00\u53d1\u7684\u6848\u4f8b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b80\u5316\u56de\u8c03\uff1a\u5728\u5f02\u6b65\u7f16\u7a0b\u4e2d\u56de\u8c03\u51fd\u6570\u662f\u5341\u5206\u5e38\u89c1\u7684\u3002\u6709\u4e86\u533f\u540d\u65b9\u6cd5\u4e4b\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u5341\u5206\u5bb9\u6613\uff0c\u5e76\u4e14\u53ef\u4ee5\u5229\u7528\u95ed\u5305\u76f4\u63a5\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u4e2d\u6240\u9700\u8981\u7684\u6210\u5458\uff0c\u5728\u7b80\u5316\u5f00\u53d1\u7684\u540c\u65f6\uff0c\u4f9d\u65e7\u4fdd\u8bc1\u4e86\u5f3a\u7c7b\u578b\u7684\u9759\u6001\u68c0\u67e5\u80fd\u529b\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5ef6\u8fdf\u521d\u59cb\u5316\u5668\uff1a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u533f\u540d\u51fd\u6570\u63d0\u4f9b\u4e00\u4e2a\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u903b\u8f91\uff0c\u5e76\u4ea4\u7531\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684\u521d\u59cb\u5316\u5668\u4f7f\u7528\u3002\u8fd9\u91cc\u5229\u7528\u4e86\u9ad8\u9636\u51fd\u6570\u6765\u5c01\u88c5\u903b\u8f91\uff0c\u5728\u4f20\u7edf\u7684\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u4e2d\u5b9e\u73b0\u8fd9\u70b9\uff0c\u5219\u5f80\u5f80\u9700\u8981\u5229\u7528\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\uff0c\u8fd9\u9700\u8981\u521b\u5efa\u5404\u79cd\u62bd\u8c61\u7c7b\u53ca\u5177\u4f53\u7c7b\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5229\u7528\u533f\u540d\u65b9\u6cd5\u53ca\u9ad8\u9636\u51fd\u6570\u4e4b\u540e\uff0cGoF23\u4e2d\u7684\u8bb8\u591a\u6a21\u5f0f\uff0c\u5982\u201c\u5de5\u5382\u65b9\u6cd5\u201d\u3001\u201c\u7b56\u7565\u201d\u53ca\u201c\u6a21\u677f\u65b9\u6cd5\u201d\u7b49\u7b49\uff0c\u90fd\u6709\u4e86\u66f4\u52a0\u7b80\u5355\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u751a\u81f3\u5b8c\u5168\u6210\u4e3a\u81ea\u7136\u800c\u7136\u7684\u7f16\u7a0b\u65b9\u6cd5\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7f13\u5b58\u5bb9\u5668\u8f85\u52a9\u65b9\u6cd5\uff1a\u4f7f\u7528\u7f13\u5b58\u5bb9\u5668\u65f6\u5f80\u5f80\u6709\u7740\u56fa\u5b9a\u7684\u6a21\u5f0f\uff0c\u5982\u201c\u68c0\u67e5\u7f13\u5b58\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8bbf\u95ee\u6570\u636e\u5e93\uff0c\u5c06\u7ed3\u679c\u653e\u5165\u7f13\u5b58\u540e\u5e76\u8fd4\u56de\u201d\u3002\u6709\u4e86\u533f\u540d\u65b9\u6cd5\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u201c\u8bbf\u95ee\u6570\u636e\u5e93\u201d\u8fd9\u4e2a\u64cd\u4f5c\u901a\u8fc7\u53c2\u6570\u4ea4\u7531\u7f13\u5b58\u5bb9\u5668\u7684\u8f85\u52a9\u65b9\u6cd5\uff0c\u8f85\u52a9\u65b9\u6cd5\u4ec5\u4ec5\u5728\u7f13\u5b58\u5931\u6548\u7684\u60c5\u51b5\u4e0b\u91c7\u53d6\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\uff0c\u8fd9\u6837\u65e2\u5c01\u88c5\u4e86\u91cd\u590d\u7684\u903b\u8f91\uff0c\u53c8\u4fdd\u8bc1\u4e86\u4ee3\u7801\u7684\u6d41\u7545\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"AsyncTaskDispatcher\uff1a\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e\u7b80\u5316\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u4e4b\u95f4\u534f\u4f5c\u5173\u7cfb\u7684\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ea\u8981\u5c06\u5f02\u6b65\u64cd\u4f5c\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u63d0\u4f9b\u7ed9Dispatcher\uff0c\u5219Dispatcher\u4fbf\u4f1a\u81ea\u52a8\u8c03\u914d\u5f02\u6b65\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u3002\u8fd9\u91cc\u4f7f\u7528\u5229\u7528\u5230\u533f\u540d\u51fd\u6570\u6765\u8868\u793a\u5404\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5e76\u5229\u7528\u95ed\u5305\u5728\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u4e4b\u95f4\u5171\u4eab\u72b6\u6001\u3002")),Object(c.b)("p",null,"\u81ea\u7136\uff0c\u5229\u7528\u9ad8\u9636\u51fd\u6570\u6216\u662f\u533f\u540d\u65b9\u6cd5\u4e5f\u4f1a\u5e26\u6765\u4e00\u4e9b\u989d\u5916\u7684\u95ee\u9898\uff0c\u4f8b\u5982\u5ef6\u8fdf\u5e26\u6765\u7684\u9677\u9631\uff0c\u4f46\u7455\u4e0d\u63a9\u745c\uff0c\u533f\u540d\u65b9\u6cd5\u4f9d\u65e7\u662fC#\u4e2d\u6700\u91cd\u8981\u7684\u8bed\u8a00\u7279\u6027\u4e4b\u4e00\uff0c\u4e5f\u662f\u5982Scala\uff0cPython\uff0cRuby\u7b49\u9ad8\u7ea7\u8bed\u8a00\u4e2d\u7684\u6807\u51c6\u914d\u7f6e\u3002"),Object(c.b)("h2",{id:"c\u7684\u533f\u540d\u65b9\u6cd5\u4e0ejava\u7684\u533f\u540d\u7c7b\u578b"},"C#\u7684\u533f\u540d\u65b9\u6cd5\u4e0eJava\u7684\u533f\u540d\u7c7b\u578b"),Object(c.b)("p",null,"\u8bf4\u8d77\u6765\uff0cJava\u8bed\u8a00\u4ece1.4\u7248\u672c\u5f00\u59cb\u4e5f\u52a0\u5165\u4e86\u533f\u540d\u7c7b\u578b\u7684\u7279\u6027\u3002\u7b80\u5355\u5730\u8bf4\uff0c\u533f\u540d\u7c7b\u578b\u662f\u6307\u4ee5\u201c\u5185\u8054\u201d\u7684\u65b9\u5f0f\u5728\u4ee3\u7801\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u62bd\u8c61\u7c7b\u578b\uff08\u5373\u63a5\u53e3\u3001\u62bd\u8c61\u7c7b\u751a\u81f3\u4efb\u4f55\u975efinal\u7c7b\uff09\u7684\u5177\u4f53\u5b9e\u4f8b\u3002\u4f8b\u5982\u4e4b\u524d\u67d0\u7bc7\u6587\u7ae0\u4e2d\u7528Java\u5b9e\u73b0\u4e86\u751f\u6210\u4e00\u4e2aminInclusive\u5230maxExclusive\u4e4b\u95f4\u6570\u5217\u7684\u8fed\u4ee3\u5668\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class Range implements Iterable<Integer> {\n\n    private int m_maxExclusive;\n    private int m_current;\n    \n    public Range(int minInclusive, int maxExclusive) {\n        this.m_maxExclusive = maxExclusive;\n        this.m_current = minInclusive;\n    }\n\n    @Override\n    public Iterator<Integer> iterator() {\n        return new Iterator<Integer>() {\n            public boolean hasNext() {\n                return m_current < m_maxExclusive;\n            }\n            \n            public Integer next() {\n                int current = m_current;\n                m_current = m_current + 1;\n                return current;\n            }\n\n            public void remove() {\n                throw new UnsupportedOperationException();\n            }\n        };\n    }\n}\n")),Object(c.b)("p",null,"\u5728Range\u7c7b\u7684iterator\u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u76f4\u63a5\u8fd4\u56de\u4e86\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"Iterator<Integer>"),"\u63a5\u53e3\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u76f4\u63a5\u5185\u8054\u5730\u63d0\u4f9b\u4e86\u63a5\u53e3\u4e2dhasNext\u3001next\u548cremove\u4e09\u4e2a\u65b9\u6cd5\u7684\u5b9e\u73b0\uff0c\u5e76\u4e14\u4f7f\u7528\u4e86\u5916\u90e8\u7684m_maxInclusive\u53cam_current\u5b57\u6bb5\u3002\u90a3\u4e48\u8fd9\u4e0d\u4e5f\u662f\u4e2a\u95ed\u5305\u5417\uff1f\u6ca1\u9519\uff0cJava\u4e2d\u7684\u533f\u540d\u7c7b\u578b\u7684\u786e\u4e5f\u6709\u4e00\u5b9a\u8fd9\u65b9\u9762\u7684\u7279\u6027\uff0c\u867d\u7136\u4f7f\u7528\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\uff0c\u4e5f\u4e0d\u5229\u4e8e\u5355\u5143\u6d4b\u8bd5\u7b49\u7b49\uff0c\u56e0\u6b64\u4e00\u4e9b\u5f00\u53d1\u5b9e\u8df5\u4e2d\u90fd\u4e0d\u592a\u63d0\u5021\u4f7f\u7528\u533f\u540d\u7c7b\u578b\uff08\u67d0\u4e9b\u6807\u51c6\u573a\u666f\u9664\u5916\uff09\u3002\u5e73\u5fc3\u800c\u8bba\uff0c\u6211\u5e76\u4e0d\u89c9\u5f97\u8fd9\u662f\u4e2a\u6ca1\u6709\u610f\u4e49\u7684\u7279\u6027\uff0c\u6bd5\u7adf\u5b83\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u9009\u62e9\uff0c\u800c\u4e14\u5728C# 2.0\u4e4b\u524d\u6211\u6709\u65f6\u4e5f\u4f1a\u6000\u5ff5Java\u8bed\u8a00\u7684\u8fd9\u4e2a\u7279\u6027\u3002"),Object(c.b)("p",null,"\u65e2\u7136C#\u4e2d\u7684\u533f\u540d\u65b9\u6cd5\u548cJava\u7684\u533f\u540d\u7c7b\u578b\u6709\u4e00\u5b9a\u7684\u5171\u6027\uff0c\u90a3\u4e48\u6211\u4eec\u4fbf\u53ef\u4ee5\u5bfb\u627e\u4e24\u8005\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u9664\u4e86\u8bed\u6cd5\u4e4b\u5916\uff0c\u6211\u8ba4\u4e3a\u4e24\u8005\u6700\u5927\u7684\u533a\u522b\u5728\u4e8e\u5bf9\u533f\u540d\u65b9\u6cd5\uff08\u7c7b\u578b\uff09\u5916\u7684\u201c\u5c40\u90e8\u53d8\u91cf\u201d\u7684\u64cd\u4f5c\u80fd\u529b\u4e0a\u3002\u95ed\u5305\u7684\u5178\u578b\u4f7f\u7528\u573a\u666f\u4e4b\u4e00\u662f\u652f\u6301\u7b80\u5355\u7684\u5e76\u884c\u8ba1\u7b97\u3002\u4f8b\u5982.NET 4.0\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5e76\u884c\u5e93\uff0c\u5176\u4e2d\u5305\u542b\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u63a5\u53e3\u7684Parallel.For\u65b9\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"static void ParallelFor(int minInclusive, int maxExclusive, Action<int> body) { ... }\n")),Object(c.b)("p",null,"\u663e\u7136\u5728.NET 2.0\u4e2d\u6211\u4eec\u4fbf\u53ef\u4ee5\u81ea\u884c\u7f16\u5199\u8fd9\u6837\u7684\u65b9\u6cd5\uff0c\u5e76\u914d\u5408\u533f\u540d\u65b9\u6cd5\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5f00\u5c55\u7b80\u5355\u7684\u5e76\u884c\u8ba1\u7b97\u3002\u4f8b\u5982\u4e00\u4e2a\u5e76\u884c\u7684n * n\u7684\u77e9\u9635\u52a0\u6cd5\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5199\u4f5c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"static int ParallelSum(int[,] array, int n)\n{\n    var processorCount = Environment.ProcessorCount;\n    var sum = 0;\n\n    ParallelFor(0, processorCount, delegate(int part)\n    {\n        var minInclusive = part * n / processorCount;\n        var maxExclusive = minInclusive + n / processorCount;\n        var partSum = 0;\n\n        for (int x = minInclusive; x < maxExclusive; x++)\n        {\n            for (int y = 0; y < n; y++)\n            {\n                partSum += array[x, y];\n            }\n        }\n\n        Interlocked.Add(ref sum, partSum);\n    });\n\n    return sum;\n}\n")),Object(c.b)("p",null,"\u4ece\u4ee3\u7801\u4e0a\u770b\uff0csum\u662fParallelSum\u65b9\u6cd5\u7684\u201c\u5c40\u90e8\u53d8\u91cf\u201d\uff0c\u4e0d\u8fc7\u5728\u533f\u540d\u65b9\u6cd5\u5185\u90e8\u4e5f\u53ef\u4ee5\u5bf9\u5b83\u8fdb\u884c\u4fee\u6539\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u5c31\u5bf9\u5176\u8fdb\u884c\u4e86CAS\u52a0\u6cd5\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u5728C#\u4e2d\u7684\u95ed\u5305\u5728\u4f7f\u7528\u4e0a\u662f\u5b8c\u5168\u900f\u660e\u7684\u3002\u5728Java\u4e2d\uff0c\u5982\u679c\u8981\u5728\u533f\u540d\u7c7b\u578b\u91cc\u8bbf\u95ee\u5916\u90e8\u7684\u5c40\u90e8\u53d8\u91cf\uff0c\u5219\u5fc5\u987b\u5728\u5c40\u90e8\u53d8\u91cf\u58f0\u660e\u65f6\u589e\u52a0final\u5173\u952e\u5b57\uff0c\u8fd9\u610f\u5473\u7740\u8fd9\u4e2a\u5c40\u90e8\u53d8\u91cf\u662f\u65e0\u6cd5\u4fee\u6539\u7684\u3002\u8fd9\u4e48\u505a\u53ef\u4ee5\u907f\u514d\u9519\u8bef\u5171\u4eab\u4e4b\u7c7b\u7684\u95ee\u9898\uff0c\u4f46\u4e5f\u9650\u5236\u6211\u4eec\u5728\u9700\u8981\u7684\u65f6\u5019\u5fc5\u987b\u7528\u4e00\u70b9\u7279\u6b8a\u7684\u65b9\u5f0f\u56de\u907f\u8fd9\u79cd\u9650\u5236\u3002\u4f8b\u5982\u5728\u7f16\u5199\u4e4b\u524d\u7684\u5e76\u884c\u77e9\u9635\u76f8\u52a0\u4ee5\u53caAsyncTaskDispatcher\u4ee3\u7801\u65f6\uff0c\u5219\u53ef\u80fd\u9700\u8981\u501f\u52a9\u4e8e\u8fd9\u6837\u4e00\u4e2a\u5305\u88c5\u7c7b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class Wrapper<T> {\n    public T value;\n}\n")),Object(c.b)("p",null,"\u8fd9\u6837\u5373\u4fbf\u662f\u5f15\u7528Wrapper\u5bf9\u8c61\u7684\u5c40\u90e8\u53d8\u91cf\u4e0d\u80fd\u4fee\u6539\uff0c\u6211\u4eec\u4e5f\u80fd\u4fee\u6539Wrapper\u5bf9\u8c61\u7684value\u5b57\u6bb5\u7684\u503c\u3002\u6211\u4e0d\u559c\u6b22\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u6211\u8ba4\u4e3a\u8fd9\u90e8\u5206\u7075\u6d3b\u6027\u4ea4\u7531\u7a0b\u5e8f\u5458\u6765\u63a7\u5236\u3002C#\u867d\u7136\u7406\u8bba\u4e0a\u6709\u7740\u8bef\u7528\u7684\u53ef\u80fd\uff0c\u4f46\u8fd9\u4e5f\u53ea\u662f\u5341\u5206\u5c11\u89c1\u7684\u60c5\u51b5\uff0c\u800c\u4e14\u6709\u4e86\u68c0\u67e5\u5de5\u5177\u4e4b\u540e\uff0c\u8bef\u7528\u51e0\u4e4e\u53ef\u4ee5\u5b8c\u5168\u907f\u514d\u4e86\u3002"),Object(c.b)(i.a,{mdxType:"BottomCopyRight"}))}b.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||c;return t?a.a.createElement(d,i(i({ref:n},u),{},{components:t})):a.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},293:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return o}));var r=t(4),a=t(0),c=t.n(a),l=function(e){function n(n){return e.call(this,n)||this}return Object(r.a)(n,e),n.prototype.render=function(){var e=this.props.link?c.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):c.a.createElement("i",null,this.props.author);return c.a.createElement("section",null,c.a.createElement("b",null,"\u672c\u6587\u4f5c\u8005\u4e3a ",e,", \u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",c.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),c.a.createElement("hr",null))},n}(c.a.Component),i=t(294);c.a.Component;function o(e){if("string"!=typeof e.href)return c.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var n=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!n)return c.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return c.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var t="/blog/"+n[1]+"/"+n[2]+"/"+n[3]+"/"+n[4];return c.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}},299:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(4),a=t(0),c=t.n(a),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(r.a)(n,e),n.prototype.render=function(){return c.a.createElement("div",null,"\u672c\u6587\u4e3a ",c.a.createElement("a",{href:"https://www.zhihu.com/people/jeffz",target:"_blank"},"\u8d75\u52bc")," \u53d1\u8868\u5728 ",c.a.createElement("a",{href:"http://blog.zhaojie.me",target:"_blank"},"\u4e2a\u4eba\u535a\u5ba2")," \u7684\u7cfb\u5217\u6587\u7ae0\u4e4b\u4e00\u3002")},n}(c.a.Component)}}]);