(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{388:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(395)),l=t(397),i=t(402),s={title:"Why Java Sucks and C# Rocks\uff084\uff09\uff1a\u6cdb\u578b",sidebar_label:"\u6cdb\u578b",keywords:["java","c#","csharp"],description:"Why Java Sucks and C# Rocks"},p={unversionedId:"articles/why-java-sucks-and-csharp-rocks/4-generics",id:"articles/why-java-sucks-and-csharp-rocks/4-generics",isDocsHomePage:!1,title:"Why Java Sucks and C# Rocks\uff084\uff09\uff1a\u6cdb\u578b",description:"Why Java Sucks and C# Rocks",source:"@site/src/docs/articles/why-java-sucks-and-csharp-rocks/4-generics.md",slug:"/articles/why-java-sucks-and-csharp-rocks/4-generics",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/4-generics",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/why-java-sucks-and-csharp-rocks/4-generics.md",version:"current",sidebar_label:"\u6cdb\u578b",sidebar:"docs",previous:{title:"Why Java Sucks and C# Rocks\uff08\u88651\uff09\uff1aReddit\uff0c\u517c\u8c08C#\u5c5e\u6027",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/4-1-reddit-and-property"},next:{title:"Why Java Sucks and C# Rocks\uff08\u88652\uff09\uff1a\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model"}},o=[{value:"Java\u7684\u6cdb\u578b\uff1aType Erasure",id:"java\u7684\u6cdb\u578b\uff1atype-erasure",children:[]},{value:"Type Erasure\u7684\u7f3a\u70b9",id:"type-erasure\u7684\u7f3a\u70b9",children:[]},{value:"C#\u4e0eJava\u7684\u5e38\u89c1\u7f16\u7a0b\u65b9\u5f0f",id:"c\u4e0ejava\u7684\u5e38\u89c1\u7f16\u7a0b\u65b9\u5f0f",children:[]}],u={toc:o};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)(l.b,{author:"\u8001\u8d75\u70b9\u6ef4",link:"http://blog.zhaojie.me/",mdxType:"NetworkCopyRight"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2010/05/why-java-sucks-and-csharp-rocks-4-generics.html"},"\u539f\u6587 - Why Java Sucks and C# Rocks\uff084\uff09\uff1a\u6cdb\u578b")),Object(c.b)("p",null,"Java 5.0\u548cC# 2.0\u53d1\u5e03\u4e8e\u540c\u4e00\u5e74\uff0c\u5404\u81ea\u6dfb\u52a0\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff1a\u6cdb\u578b\u3002\u6cdb\u578b\u53ef\u4ee5\u8ba9\u7a0b\u5e8f\u5458\u9488\u5bf9\u6cdb\u5316\u7684\u6570\u636e\u7c7b\u578b\u7f16\u5199\u76f8\u540c\u7684\u7b97\u6cd5\uff0c\u8fd9\u5927\u5927\u589e\u5f3a\u4e86\u4e24\u79cd\u8bed\u8a00\u7684\u7c7b\u578b\u7cfb\u7edf\u53ca\u62bd\u8c61\u80fd\u529b\u3002\u4e0d\u8fc7\u5373\u4fbf\u662f\u8fd9\u770b\u4f3c\u76f8\u8fd1\u7684\u529f\u80fd\uff0cJava\u548cC#\u4e24\u8005\u5728\u8bed\u8a00\u5b9e\u73b0\u548c\u529f\u80fd\u4e0a\u4e5f\u6709\u5f88\u660e\u663e\u7684\u533a\u522b\uff0c\u8fd9\u751a\u81f3\u4f1a\u5f62\u6210\u7f16\u7a0b\u65b9\u5f0f\u4e0a\u7684\u4e0d\u540c\u3002\u5728\u8fd9\u91cc\u53ef\u80fd\u9700\u8981\u4e8b\u5148\u6253\u58f0\u62db\u547c\uff0c\u56e0\u4e3a\u5728\u8fd9\u4e2a\u7279\u5b9a\u7684\u8bdd\u9898\u4e0a\uff0c\u8bed\u8a00\u548c\u8fd0\u884c\u65f6\u7684\u786e\u662f\u5bc6\u4e0d\u53ef\u5206\u7684\uff0c\u56e0\u6b64\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6211\u4f1a\u6d89\u53ca\u5230\u76f8\u5bf9\u8f83\u591a\u7684\u201c\u8fd0\u884c\u5e73\u53f0\u201d\u4e0a\u7684\u6bd4\u8f83\uff0c\u800c\u8fd9\u70b9\u5728\u6574\u4e2a\u7cfb\u5217\u4e2d\u662f\u6211\u5c3d\u91cf\u907f\u514d\u7684\u3002\u4e0d\u8fc7\u60a8\u8bf7\u653e\u5fc3\uff0c\u53ea\u6b64\u4e00\u6b21\uff0c\u6b22\u8fce\u76d1\u7763\u3002"),Object(c.b)("h2",{id:"java\u7684\u6cdb\u578b\uff1atype-erasure"},"Java\u7684\u6cdb\u578b\uff1aType Erasure"),Object(c.b)("p",null,"Java\u8bed\u8a00\u91cc\u7684\u6cdb\u578b\u5b8c\u5168\u662f\u7531\u7f16\u8bd1\u5668\u5b9e\u73b0\u7684\uff0cJVM\u5728\u8fd9\u91cc\u4e0d\u63d0\u4f9b\u4efb\u4f55\u652f\u6301\u3002\u56e0\u6b64Java\u6cdb\u578b\u662f\u6240\u8c13\u7684\u201c\u7c7b\u578b\u64e6\u9664\uff08Type Erasure\uff09\u5f0f\u6cdb\u578b\u201d\uff0c\u56e0\u4e3a\u4ee3\u7801\u4e2d\u7684\u7c7b\u578b\u4fe1\u606f\u5728\u7f16\u8bd1\u6210bytecode\u4e4b\u540e\u4fbf\u5b8c\u5168\u6d88\u5931\u4e86\uff0c\u88ab\u201c\u64e6\u9664\u201d\u4e86\u3002\u5982\u679c\u8981\u8bf4\u7684\u5177\u4f53\u4e00\u4e9b\uff0c\u90a3\u4fbf\u662f\u8bf4\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},'public class MyHashMap<TKey, TValue> {\n    private HashMap<TKey, TValue> m_map = new HashMap<TKey, TValue>();\n    \n    public TValue get(TKey key) {\n        return this.m_map.get(key);\n    }\n    \n    public void put(TKey key, TValue value) {\n        this.m_map.put(key, value);\n    }\n\n    public static void main(String[] args) {\n        MyHashMap<String, Integer> map = new MyHashMap<String, Integer>();\n        map.put("Hello", 5);\n        int i = map.get("Hello");\n    }    \n}\n')),Object(c.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7b80\u5355\u5730\u6ca1\u6709\u610f\u4e49\uff1a\u6211\u4eec\u5f00\u53d1\u4e86\u4e00\u4e2aMyHashMap\u6cdb\u578b\u7c7b\uff0c\u5c01\u88c5\u4e86\u6807\u51c6\u5e93\u4e2dHashMap\u6cdb\u578b\u7c7b\uff0c\u5e76\u66b4\u9732\u51fa\u7b80\u5355\u7684get\u548cset\u4e24\u4e2a\u6cdb\u578b\u65b9\u6cd5\u3002\u4e0d\u8fc7\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5728\u7f16\u8bd1\u6210bytecode\u4e4b\u540e\u5176\u5b9e\u5c31\u53d8\u6210\u4e86\u4e0b\u9762\u7684\u6837\u5b50\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},'public class MyHashMap {\n    private HashMap m_map = new HashMap();\n    \n    public Object get(Object key) {\n        return this.m_map.get(key);\n    }\n    \n    public void put(Object key, Object value) {\n        this.m_map.put(key, value);\n    }\n\n    public static void main(String[] args) {\n        MyHashMap map = new MyHashMap();\n        map.put("Hello", 5);\n        int i = (Integer)map.get("Hello");\n    }    \n}\n')),Object(c.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u4e24\u6bb5\u4ee3\u7801\u53ef\u4ee5\u8bf4\u662f\u7b49\u4ef7\u7684\u3002\u90a3\u4e48\u7f16\u8bd1\u5668\u5728\u8fd9\u91cc\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\u5462\uff1f\u9996\u5148\uff0c\u5b83\u628a\u6807\u51c6\u5e93\u4e2d\u7684HashMap\u8fd8\u539f\u6210\u672c\u6765\u9762\u76ee\uff1a\u952e\u548c\u503c\u90fd\u662fObject\u7c7b\u578b\u7684\u5bb9\u5668\u3002\u540c\u65f6\uff0c\u6211\u4eec\u7f16\u5199\u7684MyHashMap\u7c7b\u7684\u6cdb\u578b\u4fe1\u606f\u4e5f\u6d88\u5931\u4e86\u3002\u6700\u540e\uff0c\u5728\u4f7f\u7528MyHashMap\u7684\u5730\u65b9\u7f16\u8bd1\u5668\u4e3a\u6211\u4eec\u6dfb\u52a0\u4e86\u7c7b\u578b\u8f6c\u5316\u7684\u4ee3\u7801\u3002\u8fd9\u79cd\u505a\u6cd5\u7684\u786e\u5728\u4ee3\u7801\u5c42\u9762\u4fdd\u8bc1\u4e86\u7c7b\u578b\u5b89\u5168\uff0c\u4e0d\u8fc7\u5728\u8fd0\u884c\u65f6\u5c42\u9762\u4e0a\u548c\u4ee5\u524d\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u3002"),Object(c.b)("h2",{id:"type-erasure\u7684\u7f3a\u70b9"},"Type Erasure\u7684\u7f3a\u70b9"),Object(c.b)("p",null,"\u6709\u4eba\u8bf4\uff0c\u5982\u4f55\u5b9e\u73b0\u6709\u4ec0\u4e48\u5927\u4e0d\u4e86\u7684\uff0c\u53ea\u8981Java\u8bed\u8a00\u4e5f\u5b9e\u73b0\u4e86\u548cC#\u4e00\u6837\u7684\u6cdb\u578b\u4e0d\u5c31\u884c\u4e86\u4e48\u3002\u53ea\u53ef\u60dc\uff0cJava\u8bed\u8a00\u5728\u5b9e\u9645\u4e0a\u5e26\u6765\u4e86\u8bb8\u591a\u9650\u5236\u3002\u5982\u679c\u60a8\u662f\u4e00\u4e2aC#\u5f00\u53d1\u4eba\u5458\uff0c\u53ef\u80fd\u5f88\u96be\u60f3\u8c61\u4ee5\u4e0bJava\u4ee3\u7801\u90fd\u662f\u4e0d\u5408\u6cd5\u7684\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class MyClass<E> {\n    public static void myMethod(Object item) {\n        if (item instanceof E) { // Compiler error \n            ...\n        }\n        E item2 = new E(); // Compiler error \n        E[] iArray = new E[10]; // Compiler error \n    }\n}\n")),Object(c.b)("p",null,"\u7531\u4e8eJVM\u4e0d\u63d0\u4f9b\u5bf9\u6cdb\u578b\u7684\u652f\u6301\uff0c\u56e0\u6b64\u5bf9\u4e8eJVM\u4e0a\u652f\u6301\u6cdb\u578b\u7684\u8bed\u8a00\uff0c\u5982Scala\uff0c\u8fd9\u65b9\u9762\u7684\u538b\u529b\u5c31\u5b8c\u5168\u843d\u5728\u7f16\u8bd1\u5668\u8eab\u4e0a\u4e86\u3002\u800c\u4e14\uff0c\u7531\u4e8e\u8fd9\u4e9b\u8bed\u8a00\u4ee5JVM\u4e3a\u5e95\uff0cType Erasure\u4f1a\u5f71\u54cdJVM\u5e73\u53f0\u4e0a\u51e0\u4e4e\u6240\u6709\u8bed\u8a00\u3002\u4ee5Scala\u4e3a\u4f8b\uff0c\u5b83\u7684\u6a21\u5f0f\u5339\u914d\u8bed\u6cd5\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scala",metastring:'title="Scala"',title:'"Scala"'},'value match {\n    case x:String => println("Value is a String")\n    case x:HashMap[String, Int] => println("Value is HashMap[String, Int]")\n    case _ => println("Value is not a String or HashMap[String, Int]")\n}\n')),Object(c.b)("p",null,"\u731c\u731c\u770b\uff0c\u5982\u679c",Object(c.b)("inlineCode",{parentName:"p"},"value"),"\u53d8\u91cf\u662f\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"HashMap[Int, Object]"),"\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u4f1a\u8f93\u51fa\u4ec0\u4e48\u7ed3\u679c\u5462\uff1f\u7531\u4e8eJVM\u7684Type Erasure\u7279\u6027\uff0c\u4ee5\u4e0a\u4ee3\u7801\u8f93\u51fa\u7684\u5374\u662f\u201cValue is HashMap","[String, Int]","\u201d\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u8fd0\u884c\u671f\u95f4JVM\u5e76\u4e0d\u5305\u542b\u6cdb\u578b\u7684\u7c7b\u578b\u4fe1\u606f\uff0cHashMap","[K, V]","\u5373\u662fHashMap\uff0c\u65e0\u8bbaHashMap","[String, Int]","\u8fd8\u662fHashMap","[Int, Object]","\u90fd\u662fHashMap\uff0cJVM\u65e0\u6cd5\u5224\u65ad\u4e0d\u540c\u6cdb\u578b\u7c7b\u578b\u7684\u96c6\u5408\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b\u3002\u4e0d\u8fc7\u8fd8\u597d\uff0cScala\u7f16\u8bd1\u5668\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u4f1a\u53d1\u51fa\u8b66\u544a\uff0c\u7a0b\u5e8f\u5458\u53ef\u4ee5\u4e86\u89e3\u8fd9\u4e9b\u4ee3\u7801\u53ef\u80fd\u4f1a\u51fa\u73b0\u7684\u201c\u8bef\u4f1a\u201d\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u907f\u514d\u4e86\u8fdd\u53cd\u7a0b\u5e8f\u5458\u76f4\u89c9\u7684\u60c5\u51b5\u53d1\u751f\u3002"),Object(c.b)("p",null,"\u4f46\u662fJava\u7684\u6cdb\u578b\u5b9e\u73b0\u76f8\u5bf9\u4e8eC#\u6765\u8bf4\u66f4\u660e\u663e\u7684\u533a\u522b\u53ef\u80fd\u662f\u5728\u6027\u80fd\u4e0a\u3002.NET 2.0\u5f15\u5165\u4e86\u6cdb\u578b\u4e4b\u540e\uff0c\u5e26\u6765\u7684\u663e\u8457\u4f18\u52bf\u4e4b\u4e00\u4fbf\u662f\u6027\u80fd\u4e0a\u7684\u63d0\u9ad8\u3002\u56e0\u4e3a\u5728\u5199\u4e00\u4e9b\u5bb9\u5668\u7c7b\uff0c\u5982",Object(c.b)("inlineCode",{parentName:"p"},"List<T>"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"Dictionary<TKey, TValue>"),"\u7684\u65f6\u5019\uff0c\u65e0\u987b\u50cfJava\u5e73\u53f0\u91cc\u90a3\u6837\u4e0d\u65ad\u7684\u62c6\u7bb1\u88c5\u7bb1\uff0c\u8fd9\u65b9\u9762\u771f\u6b63\u7684\u6cdb\u578b\u5bb9\u5668\u65e0\u7591\u5177\u6709\u6027\u80fd\u4f18\u52bf\u3002",Object(c.b)("a",{parentName:"p",href:"http://fsharpnews.blogspot.com/2010/05/java-vs-f.html"},"\u8fd9\u7bc7\u6587\u7ae0\u4fbf\u8fdb\u884c\u4e86\u8fd9\u65b9\u9762\u7684\u8ba8\u8bba\u548c\u6bd4\u8f83"),"\u3002\u5728\u8bc4\u8bba\u4e2d\u6709\u4eba\u8bf4\uff0c\u8fd9\u65b9\u9762\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7279\u5b9a\u7c7b\u578b\u7684\u5bb9\u5668\uff0c\u5982IntFloatHashMap\u6765\u6539\u8fdb\u6027\u80fd\u3002\u4f46\u663e\u7136\uff0c\u8fd9\u9664\u4e86\u5f15\u5165\u66f4\u591a\u4ee3\u7801\u9020\u6210\u590d\u6742\u5ea6\u7684\u63d0\u9ad8\u4e4b\u5916\uff0c\u66f4\u52a0\u4e27\u5931\u4e86\u201c\u6cdb\u578b\u201d\u672c\u8eab\u7684\u6700\u5927\u4f18\u52bf\uff1a\u62bd\u8c61\u80fd\u529b\u3001\u6cdb\u5316\u80fd\u529b\u3002\u8bd5\u60f3\uff0c\u6211\u4eec\u53c8\u8be5\u5982\u4f55\u4e3a\u4e0d\u540c\u7684\u975e\u6cdb\u578b\u5bb9\u5668\u7edf\u4e00\u589e\u52a0\u4e00\u4e9b\u5904\u7406\u65b9\u6cd5\u5462\uff1f\u800c\u5728.NET\u4e2d\uff0c\u6211\u4eec\u53ea\u8981\u9488\u5bf9",Object(c.b)("inlineCode",{parentName:"p"},"Dictionary<TKey, TValue>"),"\u5199\u901a\u7528\u7684\u4ee3\u7801\u5373\u53ef\uff0c\u8fd0\u884c\u65f6\u4f1a\u4e3a\u6211\u4eec",Object(c.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2009/05/generics-performance-via-asm.html"},"\u751f\u6210\u6700\u4f18\u5316\u7684\u6267\u884c\u4ee3\u7801"),"\u3002"),Object(c.b)("p",null,"\u4e4b\u524d\u6211\u4e5f\u8c08\u5230\u8fc7\uff0c\u4f7f\u7528\u503c\u7c7b\u578b\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u2014\u2014\u5982\u5e76\u884c\u8ba1\u7b97\u65f6\uff0c\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u5341\u5206\u663e\u8457\u3002\u8fd9\u65b9\u9762JVM\u591a\u6838\u8ba1\u7b97\u7684\u4e13\u5bb6Dr. Cliff Click\u4e5f\u8868\u8fbe\u8fc7\u7c7b\u4f3c\u7684\u89c2\u70b9\uff0c\u60a8\u53ef\u4ee5\u5728\u4ed6\u7684\u6587\u7ae0\u4e2d\u641c\u7d22\u201cValue Types\u201d\u76f8\u5173\u7684\u5185\u5bb9\u3002\u4e0d\u8fc7\uff0c\u8fd9\u66f4\u50cf\u662f\u524d\u4e00\u7bc7\u8c08Java\u57fa\u7840\u7c7b\u578b\u65f6\u8be5\u8ba8\u8bba\u7684\u95ee\u9898\uff0c\u73b0\u5728\u6743\u5f53\u4e00\u4e2a\u8865\u5145\u5427\u3002"),Object(c.b)("h2",{id:"c\u4e0ejava\u7684\u5e38\u89c1\u7f16\u7a0b\u65b9\u5f0f"},"C#\u4e0eJava\u7684\u5e38\u89c1\u7f16\u7a0b\u65b9\u5f0f"),Object(c.b)("p",null,"\u5728C#\u4e2d\uff0c\u6211\u4eec\u65f6\u5e38\u4f1a\u5199\u4e00\u4e9b\u8fd9\u6837\u7684\u8f85\u52a9\u65b9\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public static class Retriever\n{\n    public static T TryGet<T>(IDictionary<string, object> dict, string key, T defaults)\n    {\n        object value;\n        if (dict.TryGetValue(key, out value) && value is T)\n        {\n            return (T)value; \n        }\n        else\n        {\n            return defaults;\n        }\n    }\n}\n")),Object(c.b)("p",null,"\u7531\u4e8e.NET 2.0\u5728\u8fd0\u884c\u65f6\u5c42\u9762\u4e0a\u5bf9\u6cdb\u578b\u63d0\u4f9b\u4e86\u652f\u6301\uff0c\u56e0\u6b64\u4e8b\u5b9e\u4e0aTryGet\u65b9\u6cd5\u5728\u8c03\u7528\u65f6\uff0c\u6cdb\u578b\u7c7b\u578bT\u4e5f\u662f\u65b9\u6cd5\u4f53\u5185\u83b7\u5f97\u7684\u4fe1\u606f\u4e4b\u4e00\u3002\u4e8e\u662f\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5728C#\u4e2d\u4fbf\u53ef\u4ee5\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u7684\u7c7b\u578b\u662f\u4e0d\u662fT\u3002\u90a3\u4e48\u4e0a\u9762\u8fd9\u4ee3\u7801\u53ef\u4ee5\u5982\u4f55\u4f7f\u7528\u5462\uff1f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},'var dict = new Dictionary<string, object>();\n\nint intValue = Retriever.TryGet(dict, "UserID", 0);\nstring userName = Retriever.TryGet(dict, "UserName", "");\n')),Object(c.b)("p",null,"\u8fd9\u4e2a\u8f85\u52a9\u65b9\u6cd5\u5e38\u7528\u4e8e\u4e0eJSON\u7684\u4e92\u64cd\u4f5c\u4e2d\u3002\u4f8b\u5982\u5ba2\u6237\u7aef\u4f20\u9012\u8fc7\u6765\u4e00\u4e2aJSON\u5b57\u7b26\u4e32\uff0c\u6211\u4eec\u53ea\u80fd\u5c06\u5176\u53cd\u5e8f\u5217\u6210\u201c\u5b57\u7b26\u4e32\u5230Object\u7c7b\u578b\u7684\u6620\u5c04\u201d\uff0c\u56e0\u4e3a\u5728C#\u6216Java\u8fd9\u79cd\u5f3a\u7c7b\u578b\u8bed\u8a00\u4e2d\uff0c\u6211\u4eec\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u7edf\u4e00\u6570\u5b57\u3001\u65f6\u95f4\u6216\u662f\u5e03\u5c14\u503c\u7b49\u591a\u79cd\u7c7b\u578b\u3002\u8fd9\u4f7f\u6211\u4eec\u5728\u83b7\u53d6\u503c\u7684\u65f6\u5019\uff0c\u5fc5\u987b\u4e0d\u65ad\u548c\u201c\u7c7b\u578b\u201d\u6253\u4ea4\u9053\u3002\u8fd8\u597d\uff0c\u6211\u4eec\u5728TryGet\u91cc\u5c01\u88c5\u4e86\u201c\u5c1d\u8bd5\u83b7\u53d6\u201d\u3001\u201c\u5224\u65ad\u7c7b\u578b\u201d\u3001\u201c\u8fd4\u56de\u9ed8\u8ba4\u503c\u201d\u7b49\u903b\u8f91\uff0c\u4fbf\u53ef\u4ee5\u8ba9\u4ee3\u7801\u53d8\u5f97\u7b80\u6d01\u4f18\u96c5\u4e86\u8bb8\u591a\uff08\u53ea\u53ef\u60dc\u73b0\u5728\u8fd8\u5728\u8c08C# 2.0\uff0c\u5982\u679c\u6709\u4e863.0\u7684\u6269\u5c55\u65b9\u6cd5\u4e4b\u540e\u4f1a\u66f4\u6f02\u4eae\uff09\u3002"),Object(c.b)("p",null,"\u5f53\u7136\uff0c\u8fd9\u65b9\u9762\u8fd8\u662f\u52a8\u6001\u8bed\u8a00\u7684\u4f18\u52bf\u6bd4\u8f83\u660e\u663e\u3002\u5f53\u7136\uff0cC# 4.0\u7684\u52a8\u6001\u652f\u6301\u5728\u8fd9\u65b9\u9762\u4e5f\u53ef\u4ee5\u5927\u663e\u795e\u5a01\u2014\u2014\u4e0d\u8fc7\u8fd9\u662f\u540e\u8bdd\uff0c\u6682\u4e14\u6309\u4e0b\u4e0d\u8868\u3002"),Object(c.b)("p",null,"\u540c\u6837\uff0c\u5728Java\u4e2d\u6211\u4eec\u65e0\u6cd5\u521b\u5efa\u6cdb\u578b\u7c7b\u578b\u7684\u6570\u7ec4\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public static <T> T[] convert(List<T> list) {\n    T[] array = new T[list.size()]; // Compiler error\n    ...\n}\n")),Object(c.b)("p",null,"\u4e3a\u4e86\u521b\u5efa\u6570\u7ec4\uff0c\u6211\u4eec\u5fc5\u987b\u5c06\u5143\u7d20\u7684\u7c7b\u578b\uff08\u7c7b\u4f3c\u4e8e.NET\u4e2d\u7684Type\u5bf9\u8c61\uff09\u4f5c\u4e3a\u65b9\u6cd5\u7684\u53c2\u6570\u4f20\u8fdb\u53bb\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public static <T> T[] convert(List<T> list, Class<T> componentType) {\n    T[] array = (T[])Array.newInstance(componentType, list.size());\n    ...\n}\n")),Object(c.b)("p",null,"\u4e8e\u662f\u5728\u4f7f\u7528\u65f6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"List<Integer> list = ...\nInteger[] array = convert(list, Integer.class);\n")),Object(c.b)("p",null,"\u5bf9\u4e8e\u6211\u8fd9\u79cd\u4e60\u60ef\u5199C#\u4ee3\u7801\u7684\u4eba\u6765\u8bf4\uff0c\u8fd9\u53c8\u4f55\u5fc5\u8fd9\u4e48\u9ebb\u70e6\u5462\uff1f\u5e78\u8fd0\u7684\u662f\uff0c\u5728Java\u8bed\u8a00\u4e2d\uff0cClass\u672c\u8eab\u53ef\u4ee5\u8fdb\u884c\u6cdb\u578b\u7ea6\u675f\uff0c\u8fd9\u6837\u6211\u4eec\u81f3\u5c11\u53ef\u4ee5\u4fdd\u8bc1\u4f20\u5165\u7684Class\u5bf9\u8c61\u548clist\u7684\u5143\u7d20\u662f\u76f8\u540c\u7c7b\u578b\u7684\uff08\u5426\u5219\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\uff09\u3002\u8fd9\u6837\u7684\u9ebb\u70e6\u4e4b\u5904\u8fd8\u6709\u8bb8\u591a\uff0c\u4f8b\u5982\u6700\u8fd1\u6211\u5199\u7684\u9879\u76ee\u4e2d\u6709\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u514b\u9686\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5047\u8bbe\u73b0\u4e5f\u5728Java\u4e2d\u5b9e\u73b0\u4e00\u4e0b\u5427\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public static <T> T clone(T entity) {\n    T copy = new T(); // Compiler error\n    ...\n}\n")),Object(c.b)("p",null,"\u53ea\u53ef\u60dc\u6211\u4eec\u65e0\u6cd5\u8fd9\u6837\u521b\u5efa\u4e00\u4e2a\u6cdb\u578b\u5bf9\u8c61\uff0c\u6211\u4eec\u6700\u591a\u53ea\u80fd\u8fd9\u4e48\u505a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:"Java",Java:!0},"public static <T> T clone(T entity) throws Exception {\n    T copy = (T)type.newInstance();\n    ...\n}\n")),Object(c.b)("p",null,"\u90a3\u4e48\u5728C#\u4e2d\u5462\uff1f\u6211\u4eec\u5b8c\u5168\u53ef\u4ee5\u6dfb\u52a0\u9488\u5bf9\u6784\u9020\u51fd\u6570\u7684\u201c\u6cdb\u578b\u7ea6\u675f\u201d\u6765\u5b9e\u73b0\u4f18\u96c5\u9ad8\u6548\uff08\u907f\u514d\u4e86\u53cd\u5c04\uff09\u7684\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public static T Clone<T>(T entity) where T : new()\n{\n    T copy = new T();\n    ...\n}\n")),Object(c.b)("p",null,"\u4e0d\u8fc7\u5728\u8fd9\u91cc\uff0c\u6211\u8ba4\u4e3a\u66f4\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff0c\u4e00\u4f46\u6dfb\u52a0\u4e86\u6cdb\u578b\u7ea6\u675f\uff0c\u7528\u6237\u4fbf\u5fc5\u987b\u4f20\u5165\u4e00\u4e2a\u62e5\u6709\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u7684\u7c7b\u578b\u4f5c\u4e3a\u6cdb\u578b\u53c2\u6570\uff0c\u5426\u5219\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\u3002\u8fd9\u70b9\u5728Java\u8bed\u8a00\u4e2d\u5e76\u6ca1\u6709\u7c7b\u4f3c\u7684\u4e1c\u897f\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f20\u5165\u7684\u7c7b\u578b\u4e0d\u5305\u542b\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u7684\u8bdd\uff0c\u5c31\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u7531newInstance\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u4e86\u3002"),Object(c.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u5728Java\u4e2d\u201c\u663e\u793a\u201d\u4f20\u5165\u7c7b\u578b\u53c2\u6570\u7684\u505a\u6cd5\uff0c\u4e0d\u4ec5\u4ec5\u662f\u5197\u4f59\u548c\u9ebb\u70e6\uff0c\u6211\u8ba4\u4e3a\u8fd9\u4e5f\u4f1a\u5bfc\u81f4\u4e00\u4e9bAPI\u8bbe\u8ba1\u4e0a\u7684\u95ee\u9898\u3002\u6211\u5728\u60f3\u4f1a\u4e0d\u4f1a\u6709\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f8b\u5982\u67d0\u4e2a\u6cdb\u578b\u65b9\u6cd5\uff0c\u5b83\u5728v1.0\u4e2d\u7684\u5b9e\u73b0\u4e0d\u9700\u8981\u4ece\u8c03\u7528\u6298\u90a3\u91cc\u5f97\u5230\u4e00\u4e2a\u7c7b\u578b\u4fe1\u606f\uff0c\u4f46\u662f\u5728v2.0\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0cAPI\u7684\u7f16\u5199\u8005\u5ffd\u7136\u53d1\u73b0\u8fd9\u4e2a\u65b9\u6cd5\u9700\u8981\u5f97\u5230\u6cdb\u578b\u7c7b\u578b\u7684\u5177\u4fe1\u606f\u624d\u80fd\u8fdb\u884c\u529f\u80fd\u4e0a\u7684\u6539\u8fdb\u2014\u2014\u90a3\u4e48\u8fd9\u65f6\u80fd\u5426\u52a0\u4e0a\u989d\u5916\u7684\u53c2\u6570\u5462\uff1f\u5f53\u7136\u4e0d\u884c\uff0c\u8fd9\u6837\u5c31\u7834\u574f\u4e86\u516c\u5f00\u7684API\uff0c\u4f1a\u9020\u6210\u4e0d\u517c\u5bb9\u7684\u60c5\u51b5\u51fa\u73b0\u3002\u8fd9\u5b9e\u5728\u662f\u79cd\u96be\u4ee5\u4e24\u5168\u7684\u505a\u6cd5\u3002"),Object(c.b)("p",null,"\u5173\u4e8eJava\u7684Type Erasure\u7279\u6027\uff0c\u4ee5\u53ca\u57fa\u4e8eC#\u4e0e.NET\u4e2d\u6cdb\u578b\u7279\u6027\u7684\u5e38\u89c1\u7f16\u7a0b\u6a21\u5f0f\uff08\u5982\u6cdb\u578b\u7c7b\u578b\u5b57\u5178\uff09\uff0c\u5728\u6211\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u4e5f\u6709\u8fc7\u8ba8\u8bba\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\uff08\u4ee5\u53ca\u8bc4\u8bba\uff09\u4f5c\u4e3a\u672c\u6587\u7684\u8865\u5145\u3002"),Object(c.b)(i.a,{mdxType:"BottomCopyRight"}))}b.isMDXComponent=!0},395:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),m=n,h=u["".concat(l,".").concat(m)]||u[m]||b[m]||c;return t?r.a.createElement(h,i(i({ref:a},p),{},{components:t})):r.a.createElement(h,i({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<c;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},396:function(e,a,t){"use strict";function n(e){var a=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!a||5!==a.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var t=a[1],n=a[2],r=a[3],c=a[4];return c.endsWith(".md")&&(c=c.substr(0,c.length-3)),c.endsWith(".mdx")&&(c=c.substr(0,c.length-4)),"/blog/"+t+"/"+n+"/"+r+"/"+c}t.d(a,"a",(function(){return n}))},397:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return p}));var n=t(4),r=t(0),c=t.n(r),l=function(e){function a(a){return e.call(this,a)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props.link,a="mailto:alan.wei@live.com;hello@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",t=this.props.link?c.a.createElement("a",{href:e,target:"_blank"},this.props.author):c.a.createElement("i",null,this.props.author);return c.a.createElement("section",null,c.a.createElement("ul",{style:{marginLeft:"-1em"}},c.a.createElement("li",null,"\u4f5c\u8005: ",t),c.a.createElement("li",null,"\u6765\u6e90: ",c.a.createElement("a",{href:e||a,target:"_blank"},this.props.link||"\u6682\u65e0")),c.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",t," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",c.a.createElement("a",{href:a,target:"_top"},"alan.wei#live.com(",c.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},a}(c.a.Component),i=t(396);function s(e){if("string"!=typeof e.href)return c.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var a=Object(i.a)(e.href);return c.a.createElement("a",{href:a,target:e.target,"data-component":"BlogLink"},e.children)}function p(e){var a="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?c.a.createElement("img",{alt:e.src,src:a}):c.a.createElement("a",{title:e.href,href:a,target:"_blank"},e.children)}},402:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(4),r=t(0),c=t.n(r),l=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return c.a.createElement("div",null,"\u672c\u6587\u4e3a ",c.a.createElement("a",{href:"https://www.zhihu.com/people/jeffz",target:"_blank"},"\u8d75\u52bc")," \u53d1\u8868\u5728 ",c.a.createElement("a",{href:"http://blog.zhaojie.me",target:"_blank"},"\u4e2a\u4eba\u535a\u5ba2")," \u7684\u7cfb\u5217\u6587\u7ae0\u4e4b\u4e00\u3002")},a}(c.a.Component)}}]);