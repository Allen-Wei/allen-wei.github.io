(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{342:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),s=(t(0),t(395)),i=t(397),l=t(402),c={title:"Why Java Sucks and C# Rocks\uff086\uff09\uff1ayield\u53ca\u5176\u4f5c\u7528",sidebar_label:"yield\u53ca\u5176\u4f5c\u7528",keywords:["java","c#","csharp"],description:"Why Java Sucks and C# Rocks"},u={unversionedId:"articles/why-java-sucks-and-csharp-rocks/6-yield",id:"articles/why-java-sucks-and-csharp-rocks/6-yield",isDocsHomePage:!1,title:"Why Java Sucks and C# Rocks\uff086\uff09\uff1ayield\u53ca\u5176\u4f5c\u7528",description:"Why Java Sucks and C# Rocks",source:"@site/src/docs/articles/why-java-sucks-and-csharp-rocks/6-yield.md",slug:"/articles/why-java-sucks-and-csharp-rocks/6-yield",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/6-yield",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/why-java-sucks-and-csharp-rocks/6-yield.md",version:"current",sidebar_label:"yield\u53ca\u5176\u4f5c\u7528",sidebar:"docs",previous:{title:"Why Java Sucks and C# Rocks\uff085\uff09\uff1a\u533f\u540d\u65b9\u6cd5",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method"},next:{title:"RabbitMQ\u5b89\u88c5",permalink:"/docs/articles/rabbitmq-guide/0-install"}},o=[{value:"\u8fed\u4ee3\u751f\u6210\u5668",id:"\u8fed\u4ee3\u751f\u6210\u5668",children:[]},{value:"\u7b80\u5316\u5f02\u6b65\u64cd\u4f5c",id:"\u7b80\u5316\u5f02\u6b65\u64cd\u4f5c",children:[]},{value:"\u8f7b\u91cf\u7ea7\u4efb\u52a1",id:"\u8f7b\u91cf\u7ea7\u4efb\u52a1",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:o};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)(i.b,{author:"\u8001\u8d75\u70b9\u6ef4",link:"http://blog.zhaojie.me/",mdxType:"NetworkCopyRight"}),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2010/07/why-java-sucks-and-csharp-rocks-6-yield.html"},"\u539f\u6587 - Why Java Sucks and C# Rocks\uff086\uff09\uff1ayield\u53ca\u5176\u4f5c\u7528")),Object(s.b)("p",null,"C# 2.0\u65b0\u589e\u4e86yield\u5173\u952e\u5b57\uff0c\u5176\u521d\u8877\u662f\u7b80\u5316\u8fed\u4ee3\u5668\u7684\u751f\u6210\uff0c\u8fd9\u53ef\u4ee5\u8bf4\u662f\u73b0\u4ee3\u8bed\u8a00\u7684\u6807\u914d\u3002\u53ea\u53ef\u60dcJava\u5386\u7ecf\u6570\u6b21\u5347\u7ea7\uff0c\u4ece\u6570\u91cf\u4e0a\u6765\u8bf4\u4e5f\u7b97\u589e\u52a0\u4e86\u4e0d\u5c11\u8bed\u8a00\u7279\u6027\u4e86\uff0c\u5374\u8fd8\u662f\u5c06\u8fd9\u4e2a\u529f\u80fd\u62d2\u4e4b\u95e8\u5916\uff0c\u8ba9\u4eba\u8d39\u89e3\u3002\u9664\u4e86\u7528\u4e8e\u751f\u6210\u8fed\u4ee3\u5668\u4e4b\u5916\uff0cyield\u8fd8\u53ef\u7528\u4e8e\u5176\u5b83\u4e00\u4e9b\u573a\u666f\uff0c\u9887\u4e3a\u5947\u5999\u3002\u8fd9\u4e9b\u573a\u666f\u90fd\u662f\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u5e38\u7528\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u53ea\u53ef\u60dc\u5bf9\u4e8e\u4f7f\u7528Java\u8bed\u8a00\u7684\u7a0b\u5e8f\u5458\u6765\u8bf4\u90fd\u53ea\u80fd\u671b\u800c\u5174\u53f9\u4e86\u3002"),Object(s.b)("h2",{id:"\u8fed\u4ee3\u751f\u6210\u5668"},"\u8fed\u4ee3\u751f\u6210\u5668"),Object(s.b)("p",null,"\u8bf4\u8d77\u8fed\u4ee3\u5668\uff08Iterator\uff09\u5927\u5bb6\u4e00\u5b9a\u90fd\u4e0d\u964c\u751f\uff0c\u65e0\u8bba\u662f\u662fJava\uff0cC#\u6216\u662fPython\u7b49\u8bed\u8a00\u90fd\u6709\u5185\u7f6e\u6807\u51c6\u7684\u8fed\u4ee3\u5668\u7ed3\u6784\uff0c\u5b83\u4eec\u4e5f\u90fd\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684for\u6216foreach\u5173\u952e\u5b57\u7b80\u5316\u8fed\u4ee3\u5668\u7684\u201c\u4f7f\u7528\u201d\u3002\u4e0d\u8fc7\u5bf9\u4e8e\u8fed\u4ee3\u5668\u7684\u201c\u751f\u6210\u201d\uff0c\u4e0d\u540c\u8bed\u8a00\u4e4b\u95f4\u7684\u5c31\u4f1a\u6709\u5f88\u5927\u5dee\u8ddd\u3002\u4f8b\u5982\uff0c\u5728C#\u548cPython\u4e2d\u90fd\u63d0\u4f9b\u4e86yield\u6765\u7b80\u5316\u8fed\u4ee3\u5668\u7684\u201c\u521b\u5efa\u201d\uff0c\u6b64\u65f6\u751f\u6210\u4e00\u4e2a\u8fed\u4ee3\u5668\u4fbf\u518d\u7b80\u5355\u4e0d\u8fc7\u4e86\u3002\u4f46\u5bf9\u4e8eJava\u7a0b\u5e8f\u5458\u6765\u8bf4\uff0c\u5373\u4f7f\u5230\u4e86Java 7\u8fd8\u5fc5\u987b\u4e3a\u5728\u8fed\u4ee3\u5668\u5185\u90e8\u624b\u52a8\u7ef4\u62a4\u72b6\u6001\uff0c\u975e\u5e38\u75db\u82e6\u3002\u800c\u66f4\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff0c\u5229\u7528yield\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u521b\u5efa\u4e00\u4e2a\u201c\u5ef6\u8fdf\u201d\u7684\uff0c\u201c\u65e0\u9650\u201d\u7684\u5e8f\u5217\u3002"),Object(s.b)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u4f7f\u7528Java\u5199\u4e00\u4e2a\u65e0\u9650\u7684\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u4e00\u822c\u5219\u9700\u8981\u8fd9\u6837\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class Fibonacci implements Iterable<Integer> {\n\n    @Override\n    public Iterator<Integer> iterator() {\n        return new Iterator<Integer>() {\n\n            private int m_state = 0;\n            private int m_current;\n            private int m_last0;\n            private int m_last1;\n            \n            public boolean hasNext() {\n                return true;\n            }\n            \n            public Integer next() {\n                if (m_state == 0) { // first\n                    this.m_current = 0;\n                    this.m_state = 1;\n                }\n                else if (this.m_state == 1) {\n                    this.m_current = 1;\n                    this.m_last1 = 0;\n                    this.m_state = 2;\n                }\n                else {\n                    this.m_last0 = this.m_last1;\n                    this.m_last1 = this.m_current;\n                    this.m_current = this.m_last0 + this.m_last1;\n                }\n                \n                return this.m_current;\n            }\n\n            public void remove() {\n                throw new UnsupportedOperationException();\n            }\n        };\n    }\n}\n")),Object(s.b)("p",null,"\u5728C# 1.0\u5b9e\u73b0\u76f8\u540c\u7684\u529f\u80fd\uff08\u5373",Object(s.b)("inlineCode",{parentName:"p"},"IEnumerable<int>"),"\u8fed\u4ee3\u5668\uff09\u4e5f\u9700\u8981\u4f7f\u7528\u7c7b\u4f3c\u7684\u505a\u6cd5\uff0c\u751a\u81f3\u6bd4Java\u66f4\u9ebb\u70e6\u4e00\u4e9b\uff0c\u56e0\u4e3a\u5728C#\u4e2d\u6ca1\u6709Java\u8bed\u8a00\u4e2d\u7684\u201c\u533f\u540d\u7c7b\u578b\u201d\u7279\u6027\u3002\u5982\u4e0b\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public class Fibonacci : IEnumerable<int>\n{\n    public class Enumerator : IEnumerator<int>\n    {\n        private int m_state = 0;\n        private int m_current;\n        private int m_last0;\n        private int m_last1;\n\n        public bool MoveNext()\n        {\n            if (this.m_state == 0) // first\n            {\n                this.m_current = 0;\n                this.m_state = 1;\n            }\n            else if (this.m_state == 1)\n            {\n                this.m_current = 1;\n                this.m_last1 = 0;\n                this.m_state = 2;\n            }\n            else\n            {\n                this.m_last0 = this.m_last1;\n                this.m_last1 = this.m_current;\n                this.m_current = this.m_last0 + this.m_last1;\n            }\n\n            return true;\n        }\n\n        public int Current { get { return this.m_current; } }\n        object IEnumerator.Current { get { return this.Current; } }\n\n        public void Reset() { }\n        public void Dispose() { }\n    }\n\n    public IEnumerator<int> GetEnumerator()\n    {\n        return new Enumerator();\n    }\n\n    IEnumerator IEnumerable.GetEnumerator()\n    {\n        return this.GetEnumerator();\n    }\n}\n")),Object(s.b)("p",null,"\u4e00\u4e2a\u679a\u4e3e\u5668\u5176\u5b9e\u5c31\u662f\u4e2a\u72b6\u6001\u673a\uff0c\u5728\u666e\u901a\u72b6\u6001\u4e0b\u6211\u4eec\u5f80\u5f80\u9700\u8981\u624b\u52a8\u7ef4\u62a4\u5176\u4e2d\u7684\u683c\u5f0f\u72b6\u6001\uff0c\u7f16\u5199\u8d77\u6765\u53ef\u8c13\u65e2\u8d39\u795e\u53c8\u4e0d\u76f4\u89c2\u3002\u5e78\u597dC# 2.0\u63d0\u4f9b\u4e86yield\u8bed\u6cd5\u652f\u6301\uff0c\u4e00\u5207\u5c31\u53d8\u5f97\u7b80\u5355\u4e86\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public static IEnumerable<int> GenerateFibonacci()\n{\n    yield return 0;\n    yield return 1;\n\n    int last0 = 0, last1 = 1, current;\n\n    while (true)\n    {\n        current = last0 + last1;\n        yield return current;\n\n        last0 = last1;\n        last1 = current;\n    }\n}\n")),Object(s.b)("p",null,"yield return\u7684\u4f5c\u7528\u662f\u5728\u6267\u884c\u5230\u8fd9\u884c\u4ee3\u7801\u4e4b\u540e\uff0c\u5c06\u63a7\u5236\u6743\u7acb\u5373\u4ea4\u8fd8\u7ed9\u5916\u90e8\uff0c\u6b64\u65f6\u5916\u90e8\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7Current\u5bf9\u8c61\u8bbf\u95ee\u5230\u8fd4\u56de\u51fa\u53bb\u7684\u503c\u3002\u800cyield return\u4e4b\u540e\u7684\u4ee3\u7801\u4f1a\u5728\u5916\u90e8\u4ee3\u7801\u518d\u6b21\u8c03\u7528MoveNext\u65f6\u624d\u4f1a\u6267\u884c\uff0c\u76f4\u5230\u4e0b\u4e00\u4e2ayield return\u2014\u2014\u6216\u662f\u8fed\u4ee3\u7ed3\u675f\u3002\u867d\u7136\u4e0a\u9762\u7684\u4ee3\u7801\u770b\u4f3c\u6709\u4e2a\u6b7b\u5faa\u73af\uff0c\u4f46\u4e8b\u5b9e\u4e0a\u5728\u5faa\u73af\u5185\u90e8\u6211\u4eec\u59cb\u7ec8\u4f1a\u628a\u63a7\u5236\u6743\u4ea4\u8fd8\u7ed9\u5916\u90e8\uff0c\u8fd9\u5c31\u7531\u5916\u90e8\u6765\u51b3\u5b9a\u4f55\u65f6\u4e2d\u6b62\u8fd9\u6b21\u8fed\u4ee3\u3002\u6709\u4e86yield\u4e4b\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5229\u7528\u201c\u6b7b\u5faa\u73af\u201d\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\u51fa\u542b\u4e49\u660e\u786e\u7684\u201c\u65e0\u9650\u7684\u201d\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002"),Object(s.b)("p",null,"\u5c31\u6700\u7ec8\u6267\u884c\u7684\u4ee3\u7801\u6765\u8bf4\uff0cC# 2.0\u548cJava\u6216C# 1.0\u662f\u5dee\u4e0d\u591a\u7684\uff0c\u53ea\u4e0d\u8fc7C#\u7684\u7f16\u8bd1\u5668\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u8282\u7701\u4e86\u8bb8\u591a\u5de5\u4f5c\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u6839\u636eC#\u7f16\u8bd1\u5668\u6700\u7ec8\u7684\u751f\u6210\u7ed3\u679c\uff0c\u53ef\u4ee5\u6839\u636e\u4e00\u5b9a\u89c4\u5f8b\u53cd\u63a8\u51fa\u539f\u59cb\u4ee3\u7801\uff0c\u53ea\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u663e\u5f97\u6bd4\u8f83\u56f0\u96be\u7f62\u4e86\u3002"),Object(s.b)("p",null,"\u5982\u201c\u65e0\u9650\u6590\u6ce2\u90a3\u5951\u6570\u5217\u201d\u90a3\u6837\uff0c\u5229\u7528yield\u6211\u4eec\u53ef\u4ee5\u7528\u6700\u76f4\u89c2\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668\uff0c\u4f8b\u5982\u8fde\u63a5\u591a\u4e2a\u8fed\u4ee3\u5668\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"static IEnumerable<T> Concat<T>(params IEnumerable<T>[] iterators)\n{\n    foreach (var iter in iterators)\n    {\n        foreach (var item in iter)\n            yield return item;\n    }\n}\n")),Object(s.b)("p",null,"\u6216\u662f\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"static IEnumerable<T> Traverse<T>(TreeNode<T> node)\n{\n    if (node == null) yield break;\n\n    foreach (var child in Traverse(node.Left))\n        yield return child;\n\n    yield return node.Value;\n    \n    foreach (var child in Traverse(node.Right))\n        yield return child;\n}\n")),Object(s.b)("p",null,"\u5982\u679c\u6ca1\u6709yield\uff0c\u90a3\u4e48\u8fd9\u4e24\u6bb5\u4ee3\u7801\u4f1a\u662f\u4ec0\u4e48\u6837\u5b50\u5462\uff1f\u5982\u679c\u60a8\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u4e5f\u4e0d\u59a8\u4f7f\u7528Java\u8bed\u8a00\u6765\u5b9e\u73b0\u4e00\u4e0b\uff0c\u6709\u6bd4\u8f83\u4fbf\u80fd\u770b\u51fa\u5dee\u8ddd\u3002"),Object(s.b)("h2",{id:"\u7b80\u5316\u5f02\u6b65\u64cd\u4f5c"},"\u7b80\u5316\u5f02\u6b65\u64cd\u4f5c"),Object(s.b)("p",null,"\u5f02\u6b65\u64cd\u4f5c\u662f\u5f3a\u5927\u7684\uff0c\u5b83\u662f\u8bb8\u591a\u9ad8\u4f38\u7f29\u6027\u67b6\u6784\u7684\u57fa\u77f3\u3002\u4f46\u662f\uff0c\u5f02\u6b65\u7f16\u7a0b\u53c8\u662f\u5341\u5206\u56f0\u96be\u7684\uff0c\u5b83\u8ba9\u8fd9\u8ba9\u8bb8\u591a\u7a0b\u5e8f\u5458\u656c\u800c\u8fdc\u4e4b\u3002\u56e0\u6b64\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u7f16\u7a0b\u8bed\u8a00\u90fd\u5bf9\u5f02\u6b65\u7f16\u7a0b\u63d0\u4f9b\u4e86\u76f8\u5f53\u7a0b\u5ea6\u7684\u652f\u6301\uff0c\u5176\u4e2d\u7684\u5178\u578b\u4ee3\u8868\u4fbf\u662fF#\u4e2d\u7684\u5f02\u6b65\u5de5\u4f5c\u6d41\u3002\u4e0d\u8fc7\uff0c\u5176\u5b9e\u5728C# 2.0\u51fa\u73b0\u4e86yield\u4e4b\u540e\uff0c\u8bb8\u591a\u60c5\u51b5\u4e0b\u7684\u5f02\u6b65\u7f16\u7a0b\u5df2\u7ecf\u53d8\u5f97\u5341\u5206\u7b80\u5355\u4e86\u3002\u90a3\u4e48\uff0c\u6211\u4eec\u8fd8\u662f\u5148\u6765\u770b\u4e00\u4e0b\u5f02\u6b65\u7f16\u7a0b\u56f0\u96be\u7684\u539f\u56e0\u5427\u3002"),Object(s.b)("p",null,"\u8fd9\u91cc\u6211\u51c6\u5907\u4e86\u4e00\u4e2a\u63a5\u53e3\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public class CompletedEventArgs : EventArgs\n{\n    public CompletedEventArgs(Exception ex)\n    {\n        this.Error = ex;\n    }\n\n    public Exception Error { get; private set; }\n}\n\npublic class WebAsyncTransfer\n{\n    public void StartAsync(HttpContext context, string url)\n    {\n        ...\n    }\n\n    public event EventHandler<CompletedEventArgs> Completed;\n}\n")),Object(s.b)("p",null,"\u5728\u8fd9\u91ccWebAsyncTransfer\u662f\u4e00\u4e2a\u201c\u5f02\u6b65\u4e0b\u8f7d\u7c7b\u201d\uff0c\u5b83\u7684StartAsync\u65b9\u6cd5\u4f1a\u53d1\u8d77\u4e00\u4e2a\u9488\u5bf9\u8fdc\u7a0burl\u7684\u8bf7\u6c42\uff0c\u5e76\u5c06\u5185\u5bb9\u4e0b\u8f7d\u81f3context\u4e2d\uff08\u5e76\u8bbe\u7f6eContentType\u7b49\u53c2\u6570\uff09\uff0c\u4e0b\u8f7d\u5b8c\u6210\u540e\u5219\u901a\u8fc7Completed\u4e8b\u4ef6\u8fdb\u884c\u901a\u77e5\u3002\u5199\u597d\u4e86\u5417\uff1f\u90a3\u4e48\u4e5f\u6765\u770b\u770b\u6211\u7ed9\u7684\u53c2\u8003\u7b54\u6848\u5427\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C#"',title:'"C#"'},"public class WebAsyncTransfer\n{\n    private HttpContext m_context;\n    private WebRequest m_request;\n    private WebResponse m_response;\n    private Stream m_streamIn;\n    private Stream m_streamOut;\n\n    public void StartAsync(HttpContext context, string url)\n    {\n        this.m_context = context;\n\n        this.m_request = HttpWebRequest.Create(url);\n        this.m_request.BeginGetResponse(this.EndGetResponse, null);\n    }\n\n    public event EventHandler<CompletedEventArgs> Completed;\n\n    private void EndGetResponse(IAsyncResult ar)\n    {\n        try\n        {\n            this.m_response = this.m_request.EndGetResponse(ar);\n            this.m_context.Response.ContentType = this.m_response.ContentType;\n\n            var buffer = new byte[1024];\n            this.m_streamIn = this.m_response.GetResponseStream();\n            this.m_streamOut = this.m_context.Response.OutputStream;\n\n            this.m_streamIn.BeginRead(\n                buffer, 0, buffer.Length,\n                this.EndReadInputStream, buffer);\n        }\n        catch (Exception ex)\n        {\n            this.OnCompleted(ex);\n        }\n        finally\n        {\n            this.m_request = null;\n        }\n    }\n\n    private void EndReadInputStream(IAsyncResult ar)\n    {\n        var buffer = (byte[])ar.AsyncState;\n        int lengthRead;\n\n        try\n        {\n            lengthRead = this.m_streamIn.EndRead(ar);\n        }\n        catch (Exception ex)\n        {\n            this.OnCompleted(ex);\n            return;\n        }\n\n        if (lengthRead <= 0)\n        {\n            this.OnCompleted(null);\n        }\n        else\n        {\n            try\n            {\n                this.m_streamOut.BeginWrite(\n                    buffer, 0, lengthRead,\n                    this.EndWriteOutputStream, buffer);\n            }\n            catch (Exception ex)\n            {\n                this.OnCompleted(ex);\n            }\n        }\n    }\n\n    private void EndWriteOutputStream(IAsyncResult ar)\n    {\n        try\n        {\n            this.m_streamOut.EndWrite(ar);\n\n            var buffer = (byte[])ar.AsyncState;\n            this.m_streamIn.BeginRead(\n                buffer, 0, buffer.Length,\n                this.EndReadInputStream, buffer);\n        }\n        catch (Exception ex)\n        {\n            this.OnCompleted(ex);\n        }\n    }\n\n    private void OnCompleted(Exception ex)\n    {\n        if (this.m_response != null)\n        {\n            this.m_response.Close();\n            this.m_response = null;\n        }\n\n        var handler = this.Completed;\n        if (handler != null)\n        {\n            handler(this, new CompletedEventArgs(ex));\n        }\n    }\n}\n")),Object(s.b)("p",null,"\u662f\u4e0d\u662f\u5f88\u590d\u6742\uff1f"),Object(s.b)("p",null,"\u5f02\u6b65\u64cd\u4f5c\u7684\u96be\u70b9\u4e4b\u4e00\uff0c\u4fbf\u662f\u7834\u574f\u4e86\u201c\u4ee3\u7801\u5c40\u90e8\u6027\uff08Code Locality\uff09\u201d\uff0c\u8fd9\u53ef\u80fd\u4e5f\u662f\u5f02\u6b65\u64cd\u4f5c\u4e2d\u6700\u4e3a\u5e38\u89c1\u7684\u963b\u788d\u3002\u7a0b\u5e8f\u5458\u65e9\u5df2\u4e60\u60ef\u4e86\u201c\u7ebf\u6027\u201d\u5730\u8868\u8fbe\u903b\u8f91\uff0c\u4f46\u5373\u4fbf\u662f\u591a\u4e2a\u987a\u5e8f\u6267\u884c\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u4e5f\u4f1a\u56e0\u4e3a\u5927\u91cf\u7684\u56de\u8c03\u51fd\u6570\u800c\u5c06\u7b97\u6cd5\u62c6\u5f97\u652f\u79bb\u7834\u788e\uff0c\u66f4\u4f55\u51b5\u8fd8\u4f1a\u51fa\u73b0\u5404\u79cd\u5faa\u73af\u53ca\u6761\u4ef6\u5224\u65ad\u3002\u540c\u65f6\uff0c\u5728\u7ebf\u6027\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u201c\u5c40\u90e8\u53d8\u91cf\u201d\u4fdd\u5b58\u72b6\u6001\uff0c\u800c\u5728\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\u65f6\u5219\u9700\u8981\u624b\u52a8\u5730\u5728\u591a\u4e2a\u51fd\u6570\u4e2d\u4f20\u9012\u72b6\u6001\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u903b\u8f91\u88ab\u62c6\u5206\u81f3\u591a\u4e2a\u65b9\u6cd5\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u65e0\u6cd5\u4f7f\u7528\u4f20\u7edf\u7684try/catch\u8fdb\u884c\u7edf\u4e00\u5f02\u5e38\u5904\u7406\u3002"),Object(s.b)("p",null,"\u53cd\u6620\u5728\u4e0a\u9762\u8fd9\u6bb5\u5b9e\u73b0\u4e2d\uff0c\u5c31\u5728\u4e8e\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528\u666e\u901a\u5faa\u73af\u6765\u5b9e\u73b0\u5f02\u6b65\u8bfb\u53d6\u5199\u5165\uff0c\u4e5f\u5fc5\u987b\u5728\u6bcf\u4e2a\u5f02\u6b65\u64cd\u4f5c\u65f6\u4f7f\u7528try\u2026catch\u6765\u6355\u83b7\u53ef\u80fd\u4f1a\u629b\u51fa\u7684\u5f02\u5e38\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u5fc5\u987b\u624b\u52a8\u5730\u4fdd\u6301\u72b6\u6001\uff0c\u66f4\u91cd\u8981\u7684\u662f\u624b\u52a8\u5730\u6e05\u7406\u4e00\u4e9b\u8d44\u6e90\u3002\u4f8b\u5982\u5728EndGetResponse\u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u624b\u52a8\u5730\u5c06m_request\u8bbe\u4e3anull\uff0c\u8fd9\u6837\u4f7f\u5f97\u8be5\u5bf9\u8c61\u53ef\u4ee5\u65e9\u4e8eWebAsyncTransfer\u5f97\u5230\u56de\u6536\u3002\u603b\u4e4b\uff0c\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\u5c31\u662f\u8fd9\u4e48\u9ebb\u70e6\u3002"),Object(s.b)("p",null,"\u90a3\u4e48yield\u53c8\u662f\u600e\u4e48\u6837\u5e2e\u5230\u6211\u4eec\u7684\u5462\uff1f\u4e14\u770b\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp"},"private static IEnumerator<int> GenerateTransferTask(\n    AsyncEnumerator ae, HttpContext context, string url)\n{\n    WebRequest request = WebRequest.Create(url);\n    request.BeginGetResponse(ae.End(), null);\n    yield return 1;\n\n    using (WebResponse response = request.EndGetResponse(ae.DequeueAsyncResult()))\n    {\n        Stream streamIn = response.GetResponseStream();\n        Stream streamOut = context.Response.OutputStream;\n        byte[] buffer = new byte[1024];\n\n        while (true)\n        {\n            streamIn.BeginRead(buffer, 0, buffer.Length, ae.End(), null);\n            yield return 1;\n            int lengthRead = streamIn.EndRead(ae.DequeueAsyncResult());\n\n            if (lengthRead <= 0) break;\n\n            streamOut.BeginWrite(buffer, 0, lengthRead, ae.End(), null);\n            yield return 1;\n            streamOut.EndWrite(ae.DequeueAsyncResult());\n        }\n    }\n}\n")),Object(s.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5229\u7528\u4e86",Object(s.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/magazine/cc546608.aspx"},"Jeffrey Ricther\u63d0\u4f9b\u7684AsyncEnumerator\u7ec4\u4ef6"),"\u3002\u5728\u6bcf\u6b21\u53d1\u8d77\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u4e4b\u540e\uff0c\u6211\u4eec\u4f7f\u7528yield\u5c06\u64cd\u4f5c\u63a7\u5236\u6743\u4ea4\u7ed9\u5916\u90e8\u2014\u2014\u5b9e\u9645\u4e0a\u5c31\u662fAsyncEnumerator\u7ec4\u4ef6\uff0c\u7136\u540e\u5728\u5f02\u6b65\u64cd\u4f5c\u7ed3\u675f\u4e4b\u540e\uff0cAsyncEnumerator\u53c8\u4f1a\u8c03\u7528\u8fed\u4ee3\u5668\u7684MoveNext\u65b9\u6cd5\uff0c\u8fd9\u6837\u4fbf\u53ef\u4ee5\u4e8eyield\u4e4b\u540e\u7684\u4ee3\u7801\u7ee7\u7eed\u6267\u884c\u4e86\u3002\u5728\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528while\uff0cif\uff0cbreak\u7b49\u5e38\u89c1\u7684\u63a7\u5236\u8bed\u53e5\u6765\u8868\u8ff0\u201c\u7ebf\u6027\u201d\u7684\u903b\u8f91\uff0c\u800c\u7f16\u8bd1\u5668\u4f1a\u4e3a\u6211\u4eec\u751f\u6210\u90a3\u4e9b\u201c\u652f\u79bb\u7834\u788e\u201d\u7684\u4ee3\u7801\u3002\u81f3\u4e8e\u5f02\u5e38\u63a7\u5236\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u4e00\u5904\u8fdb\u884c\u5373\u53ef\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-csharp"},"public class YieldWebAsyncTransfer\n{\n    private static IEnumerator<int> GenerateTransferTask(\n        AsyncEnumerator ae, HttpContext context, string url)\n    {\n        ...\n    }\n\n    private AsyncEnumerator m_asyncEnumerator;\n\n    public void StartAsync(HttpContext context, string url)\n    {\n        this.m_asyncEnumerator = new AsyncEnumerator();\n        var asyncTask = GenerateTransferTask(this.m_asyncEnumerator, context, url);\n        this.m_asyncEnumerator.BeginExecute(asyncTask, this.EndExecuteCallback);\n    }\n\n    private void EndExecuteCallback(IAsyncResult ar)\n    {\n        Exception error = null;\n        try\n        {\n            this.m_asyncEnumerator.EndExecute(ar);\n        }\n        catch (Exception ex)\n        {\n            error = ex;\n        }\n\n        var handler = this.Completed;\n        if (handler != null)\n        {\n            handler(this, new CompletedEventArgs(error));\n        }\n    }\n\n    public event EventHandler<CompletedEventArgs> Completed;\n}\n")),Object(s.b)("p",null,"\u8fd9\u5c31\u662fyield\u7684\u5a01\u529b\u3002yield\u672c\u8eab\u53ea\u662f\u4e2a\u57fa\u7840\u8bed\u8a00\u7279\u6027\uff0c\u4f46\u662f\u6709\u4e86\u8fd9\u4e2a\u7279\u6027\uff0c\u5f00\u53d1\u4eba\u5458\u5c31\u80fd\u5199\u51fa\u5982AsyncEnumerator\u8fd9\u6837\u7b80\u5316\u5f02\u6b65\u7f16\u7a0b\u7684\u7c7b\u5e93\uff0c\u751a\u81f3",Object(s.b)("a",{parentName:"p",href:"http://tomasp.net/blog/csharp-async.aspx"},"\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u6a21\u62dfF#\u4e2d\u5f02\u6b65\u5de5\u4f5c\u6d41\u7684\u529f\u80fd"),"\u3002\u540c\u6837\u7684\u529f\u80fd\uff0c\u6709\u7684\u8bed\u8a00\u53ea\u80fd\u5199\u51fa\u7f16\u5199\u56f0\u96be\u7406\u89e3\u4e0d\u6613\u7684\u4ee3\u7801\uff0c\u800c\u6709\u7684\u8bed\u8a00\u5374\u8ba9\u5f00\u53d1\u4eba\u5458\u8f7b\u677e\u5730\u5b8c\u6210\u5de5\u4f5c\uff0c\u800c\u6700\u7ec8\u7684\u6210\u679c\u4e5f\u5341\u5206\u5229\u4e8e\u540e\u671f\u7684\u7ef4\u62a4\u3002\u8fd9\u4e2a\u60c5\u51b5\u4e0b\uff0c\u60a8\u8fd8\u4f1a\u8bf4\u8bed\u8a00\u662f\u4e0d\u91cd\u8981\u7684\u5417\uff1f"),Object(s.b)("h2",{id:"\u8f7b\u91cf\u7ea7\u4efb\u52a1"},"\u8f7b\u91cf\u7ea7\u4efb\u52a1"),Object(s.b)("p",null,"\u5982\u679c\u60a8\u6709\u8fc7VB\uff08\u4e0d\u662fVB.NET\uff09\u7f16\u7a0b\u7684\u7ecf\u9a8c\uff0c\u53ef\u80fd\u8fd8\u8bb0\u5f97\u5f53\u65f6\u662f\u5982\u4f55\u5728\u8fdb\u884c\u957f\u65f6\u95f4\u8ba1\u7b97\u7684\u60c5\u51b5\u4e0b\u4fdd\u6301\u754c\u9762\u54cd\u5e94\u80fd\u529b\u7684\u3002\u6ca1\u9519\uff0c\u5c31\u662f\u4f7f\u7528DoEvents\u8bed\u53e5\u3002DoEvents\u7684\u4f5c\u7528\u662f\u6682\u65f6\u5c06\u8ba1\u7b97\u6302\u8d77\uff0c\u628a\u63a7\u5236\u6743\u4ea4\u8fd8\u7ed9UI\uff0c\u770b\u770b\u6709\u6ca1\u6709\u4ec0\u4e48\u4e8b\u4ef6\u9700\u8981\u54cd\u5e94\uff0c\u7136\u540e\u518d\u7ee7\u7eedDoEvents\u540e\u7684\u8ba1\u7b97\u3002\u5176\u5b9eyield\u4ece\u67d0\u4e9b\u89d2\u5ea6\u4e0a\u770b\u4e5f\u6709\u8fd9\u6837\u7684\u6548\u679c\uff0c\u4f8b\u5982",Object(s.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/zh-cn/library/dscyy5s0(VS.80).aspx"},"MSDN\u4e0a\u5199\u9053"),"\uff1a"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"yield\u5173\u952e\u5b57\u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u7684\u503c\u3002\u5230\u8fbeyield return\u8bed\u53e5\u65f6\uff0c\u4f1a\u4fdd\u5b58\u5f53\u524d\u4f4d\u7f6e\u3002\u4e0b\u6b21\u8c03\u7528\u8fed\u4ee3\u5668\u65f6\u5c06\u4ece\u6b64\u4f4d\u7f6e\u91cd\u65b0\u5f00\u59cb\u6267\u884c\u3002")),Object(s.b)("p",null,"\u8fd9\u91cc\u7684\u5173\u952e\u5c31\u5728\u4e8e\u201c\u4fdd\u5b58\u5f53\u524d\u4f4d\u7f6e\u201d\u5e76\u4ea4\u51fa\u63a7\u5236\u6743\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u4fbf\u6709\u529e\u6cd5\u6839\u636e\u9700\u8981\u8fdb\u884c\u4e0b\u4e00\u6b65\u7684\u5904\u7406\u3002\u4f8b\u5982\u6211\u4eec\u77e5\u9053\uff0c\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u4efb\u52a1\u8c03\u5ea6\u7684\u6700\u5c0f\u5355\u5143\u662f\u201c\u7ebf\u7a0b\uff08Thread\uff09\u201d\uff0c\u6b64\u5916Windows\u91cc\u6709\u201c\u7ea4\u7a0b\uff08Fiber\uff09\u201d\uff0c\u53ef\u7528\u4e8e\u5728\u7ebf\u7a0b\u7684\u57fa\u7840\u4e0a\u624b\u52a8\u5b9e\u73b0\u66f4\u5c0f\u7c92\u5ea6\u7684\u4efb\u52a1\u8c03\u5ea6\uff0c\u8fd8\u6709\u4e00\u4e9b\u5982\u201c\u534f\u7a0b\uff08coroutine\uff09\u201d\u4e4b\u7c7b\u7684\u6982\u5ff5\u4e5f\u6709\u76f8\u4f3c\u4e4b\u5904\u3002\u5229\u7528yield\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728C#\u4e2d\u5b9e\u73b0\u66f4\u5c0f\u7c92\u5ea6\u7684\u4efb\u52a1\u6982\u5ff5\uff0c\u8fd9\u53ea\u9700\u8981\u4efb\u52a1\u672c\u8eab\u5728\u5408\u9002\u7684\u65f6\u5019\u4f7f\u7528yield\u5c06\u63a7\u5236\u6743\u4ea4\u8fd8\u7ed9\u5916\u90e8\u5373\u53ef\u3002\u5916\u90e8\u7684\u4efb\u52a1\u8c03\u5ea6\u903b\u8f91\u53ef\u4ee5\u5728\u5f97\u5230\u63a7\u5236\u6743\u7684\u65f6\u5019\uff0c\u5224\u65ad\u662f\u5426\u7ee7\u7eed\u5f53\u524d\u4efb\u52a1\u8fd8\u662f\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002\u5982\u6b64\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u8c03\u5ea6\u5b9e\u73b0\u4e86\u3002"),Object(s.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u4e4b\u524d\u7684\u5f02\u6b65\u7f16\u7a0b\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4e5f\u662f\u57fa\u4e8e\u8fd9\u91cc\u7684\u201c\u8f7b\u91cf\u7ea7\u4efb\u52a1\u201d\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u4e2a\u5e94\u7528\u8fc7\u4e8e\u5178\u578b\uff0c\u56e0\u6b64\u5355\u72ec\u62ff\u51fa\u6765\u5f3a\u8c03\u4e00\u4e0b\u3002"),Object(s.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(s.b)("p",null,"\u6709\u4eba\u8bf4\uff0cyield\u4e0d\u8be5\u52a0\u5165\u5230\u8bed\u8a00\u4e4b\u4e2d\uff0c\u5b83\u7834\u574f\u4e86\u8bed\u8a00\u7684\u7d27\u51d1\u6027\u3002\u4f46\u6211\u8ba4\u4e3a\uff0cyield\u672c\u8eab\u662f\u4e2a\u518d\u7b80\u5355\u4e0d\u8fc7\u7684\u8bed\u8a00\u7279\u6027\uff0c\u4f60\u51e0\u4e4e\u4e0d\u4f1a\u5bdf\u89c9\u5230\u5b83\u7684\u5b58\u5728\u3002\u66f4\u4f55\u51b5\uff0cyield\u672c\u8eab\u7684\u786e\u5927\u5927\u964d\u4f4e\u4e86\u521b\u5efa\u8fed\u4ee3\u5668\u7684\u96be\u5ea6\uff0c\u800c\u8fed\u4ee3\u5668\u672c\u8eab\u53ef\u4ee5\u8bf4\u662f\u7cfb\u7edf\u4e2d\u6700\u5e38\u89c1\u7684\u529f\u80fd\u4e4b\u4e00\uff0c\u56e0\u6b64\u6211\u8ba4\u4e3a\u5728\u8bed\u8a00\u4e2d\u4e3a\u5176\u52a0\u5165foreach\u548cyield\u5173\u952e\u5b57\u7684\u652f\u6301\u4e1d\u6beb\u4e0d\u4e3a\u8fc7\u3002\u66f4\u4f55\u51b5\u6211\u4eec\u4e5f\u770b\u5230\uff0cyield\u672c\u8eab\u4e5f\u6709\u8d85\u8131\u4e8e\u8fed\u4ee3\u5668\u4e4b\u5916\u4f5c\u7528\uff0c\u5b83\u4eec\u90fd\u6e90\u4e8e\u6211\u65e5\u5e38\u5de5\u4f5c\u4e2d\u7684\u4f7f\u7528\u6a21\u5f0f\u3002\u56e0\u6b64\u5728\u6211\u770b\u6765\uff0cyield\u662f\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u8bed\u8a00\u529f\u80fd\uff0c\u4f18\u96c5\uff0c\u7b80\u5355\u3002"),Object(s.b)(l.a,{mdxType:"BottomCopyRight"}))}m.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),o=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(t),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||s;return t?a.a.createElement(d,l(l({ref:n},u),{},{components:t})):a.a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},396:function(e,n,t){"use strict";function r(e){var n=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!n||5!==n.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var t=n[1],r=n[2],a=n[3],s=n[4];return s.endsWith(".md")&&(s=s.substr(0,s.length-3)),s.endsWith(".mdx")&&(s=s.substr(0,s.length-4)),"/blog/"+t+"/"+r+"/"+a+"/"+s}t.d(n,"a",(function(){return r}))},397:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u}));var r=t(4),a=t(0),s=t.n(a),i=function(e){function n(n){return e.call(this,n)||this}return Object(r.a)(n,e),n.prototype.render=function(){var e=this.props.link,n="mailto:alan.wei@live.com;hello@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",t=this.props.link?s.a.createElement("a",{href:e,target:"_blank"},this.props.author):s.a.createElement("i",null,this.props.author);return s.a.createElement("section",null,s.a.createElement("ul",{style:{marginLeft:"-1em"}},s.a.createElement("li",null,"\u4f5c\u8005: ",t),s.a.createElement("li",null,"\u6765\u6e90: ",s.a.createElement("a",{href:e||n,target:"_blank"},this.props.link||"\u6682\u65e0")),s.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",t," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",s.a.createElement("a",{href:n,target:"_top"},"alan.wei#live.com(",s.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},n}(s.a.Component),l=t(396);function c(e){if("string"!=typeof e.href)return s.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var n=Object(l.a)(e.href);return s.a.createElement("a",{href:n,target:e.target,"data-component":"BlogLink"},e.children)}function u(e){var n="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?s.a.createElement("img",{alt:e.src,src:n}):s.a.createElement("a",{title:e.href,href:n,target:"_blank"},e.children)}},402:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(4),a=t(0),s=t.n(a),i=function(e){function n(){return e.apply(this,arguments)||this}return Object(r.a)(n,e),n.prototype.render=function(){return s.a.createElement("div",null,"\u672c\u6587\u4e3a ",s.a.createElement("a",{href:"https://www.zhihu.com/people/jeffz",target:"_blank"},"\u8d75\u52bc")," \u53d1\u8868\u5728 ",s.a.createElement("a",{href:"http://blog.zhaojie.me",target:"_blank"},"\u4e2a\u4eba\u535a\u5ba2")," \u7684\u7cfb\u5217\u6587\u7ae0\u4e4b\u4e00\u3002")},n}(s.a.Component)}}]);