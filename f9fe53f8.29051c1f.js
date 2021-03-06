(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(198)),l={title:"Core Java for the Impatient"},c={unversionedId:"reading/core-java-for-the-impatient",id:"reading/core-java-for-the-impatient",isDocsHomePage:!1,title:"Core Java for the Impatient",description:"Object.finalize()",source:"@site/docs/reading/core-java-for-the-impatient.md",slug:"/reading/core-java-for-the-impatient",permalink:"/docs/reading/core-java-for-the-impatient",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/reading/core-java-for-the-impatient.md",version:"current"},b=[{value:"Object.finalize()",id:"objectfinalize",children:[{value:"2.4.2 \u9759\u6001\u5e38\u91cf",id:"242-\u9759\u6001\u5e38\u91cf",children:[]},{value:"2.4.3 \u9759\u6001\u521d\u59cb\u5316\u5757",id:"243-\u9759\u6001\u521d\u59cb\u5316\u5757",children:[]},{value:"2.4.5 \u5de5\u5382\u65b9\u6cd5",id:"245-\u5de5\u5382\u65b9\u6cd5",children:[]},{value:"2.5.1 \u5305\u7684\u58f0\u660e",id:"251-\u5305\u7684\u58f0\u660e",children:[]},{value:"2.5.2 \u7c7b\u8def\u5f84",id:"252-\u7c7b\u8def\u5f84",children:[]},{value:"2.6.2",id:"262",children:[]}]},{value:"\u63a5\u53e3\u548clambda\u8868\u8fbe\u5f0f",id:"\u63a5\u53e3\u548clambda\u8868\u8fbe\u5f0f",children:[{value:"3.1.7 \u5e38\u91cf",id:"317-\u5e38\u91cf",children:[]},{value:"3.7.2 \u8bbf\u95ee\u6765\u81ea\u95ed\u5408\u4f5c\u7528\u57df\u7684\u53d8\u91cf",id:"372-\u8bbf\u95ee\u6765\u81ea\u95ed\u5408\u4f5c\u7528\u57df\u7684\u53d8\u91cf",children:[]}]}],o={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"objectfinalize"},"Object.finalize()"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.infoq.com/news/2017/03/Java-Finalize-Deprecated"},Object(i.b)("inlineCode",{parentName:"a"},"finalize")," is marked as deprecated in Java 9"),"."),Object(i.b)("p",null,"\u53ef\u4ee5\u5728\u7a0b\u5e8f\u7ed3\u675f\u4e4b\u524d\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"Runtime"),"\u7684",Object(i.b)("inlineCode",{parentName:"p"},"addShutdownHook"),"\u65b9\u6cd5\u6765\u6ce8\u518c\u7a0b\u5e8f\u7ed3\u675f\u7684\u94a9\u5b50:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'Runtime.getRuntime().addShutdownHook(new Thread(() -> {\n    System.out.println("addShutdownHook");\n}));\n')),Object(i.b)("h3",{id:"242-\u9759\u6001\u5e38\u91cf"},"2.4.2 \u9759\u6001\u5e38\u91cf"),Object(i.b)("p",null,"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"static final"),"\u58f0\u660e\u9759\u6001\u5e38\u91cf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6700\u597d\u5728\u7c7b\u5b57\u6bb5(\u9759\u6001\u5b57\u6bb5)\u5171\u4eab\u4e00\u4e2a\u968f\u673a\u6570\u751f\u6210\u5668, \u76f8\u5bf9\u4e8e\u5b9e\u4f8b\u5b57\u6bb5\u7684\u968f\u673a\u6570\u751f\u6210\u5668\u66f4\u8282\u7701\u8d44\u6e90\u548c\u5b89\u5168.(\u968f\u673a\u6570\u751f\u6210\u5668\u6700\u597d\u5171\u7528\u4e00\u4e2a)")),Object(i.b)("h3",{id:"243-\u9759\u6001\u521d\u59cb\u5316\u5757"},"2.4.3 \u9759\u6001\u521d\u59cb\u5316\u5757"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class Employee{\n    private static final String hello;\n    static {\n        hello = "world";\n    }\n}\n')),Object(i.b)("h3",{id:"245-\u5de5\u5382\u65b9\u6cd5"},"2.4.5 \u5de5\u5382\u65b9\u6cd5"),Object(i.b)("p",null,"\u9759\u6001\u65b9\u6cd5\u5e38\u89c1\u7684\u4f7f\u7528\u5c31\u662f\u5de5\u5382\u65b9\u6cd5, \u4e5f\u5c31\u662f\u8fd4\u56de\u4e00\u4e2a\u7d2f\u7684\u65b0\u5b9e\u4f8b\u7684\u9759\u6001\u65b9\u6cd5."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u83b7\u53d6\u7c7b\u5b9e\u4f8b, \u6784\u9020\u51fd\u6570\u53ea\u80fd\u901a\u8fc7\u53c2\u6570\u7c7b\u578b\u548c\u6570\u91cf\u6765\u533a\u5206, \u800c\u9759\u6001\u65b9\u6cd5\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u540d\u6765\u533a\u5206."),Object(i.b)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u53ea\u80fd\u8fd4\u56de\u7c7b\u5b9e\u4f8b, \u9759\u6001\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5b50\u7c7b\u5b9e\u4f8b."),Object(i.b)("li",{parentName:"ul"},"\u9759\u6001\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u5171\u4eab\u5b9e\u4f8b(\u6bd4\u5982\u5355\u4f8b).")),Object(i.b)("h3",{id:"251-\u5305\u7684\u58f0\u660e"},"2.5.1 \u5305\u7684\u58f0\u660e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f53\u4ece\u6587\u4ef6\u7cfb\u7edf\u8bfb\u53d6\u7c7b\u6587\u4ef6\u65f6, \u8def\u5f84\u540d\u79f0\u5fc5\u987b\u5339\u914d\u5305\u540d\u79f0, \u4f8b\u5982\u6587\u4ef6",Object(i.b)("inlineCode",{parentName:"li"},"Employee.class"),"\u5fc5\u987b\u5728\u5b50\u76ee\u5f55",Object(i.b)("inlineCode",{parentName:"li"},"com/horstmann/corejava"),".")),Object(i.b)("h3",{id:"252-\u7c7b\u8def\u5f84"},"2.5.2 \u7c7b\u8def\u5f84"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528JAR\u6587\u4ef6\u5c06\u7a0b\u5e8f\u6253\u5305: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"> jar cvfe com.company.MainClass com/company/*.class\n")),Object(i.b)("p",null,"\u7136\u540e\u8fd0\u884c\u7a0b\u5e8f:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"> java -jar program.jar\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"javac"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"java"),"\u547d\u4ee4\u90fd\u6709",Object(i.b)("inlineCode",{parentName:"p"},"-classpath"),"\u9009\u9879, \u53ef\u4ee5\u7f29\u5199\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"-cp"),", \u7528\u4e8e\u6307\u5b9a\u5f15\u7528\u7684\u7c7b\u5e93\u6587\u4ef6\u7684jar\u548c\u76ee\u5f55: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"> java -classpath .:../libs/lib1.jar:../libs/lib2.jar com.company.MainClass\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728Windows\u7cfb\u7edf\u4e2d\u5c06",Object(i.b)("inlineCode",{parentName:"p"},":"),"\u66ff\u6362\u6210",Object(i.b)("inlineCode",{parentName:"p"},";"),".")),Object(i.b)("h3",{id:"262"},"2.6.2"),Object(i.b)("p",null,"\u9759\u6001\u5d4c\u5957\u7c7b\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"static"),"\u8fdb\u884c\u4fee\u9970: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class Network {\n    public static class Member {}\n\n    private List<Member> members = new ArrayList<>();\n}\n")),Object(i.b)("p",null,"\u5185\u90e8\u7c7b\u4e0d\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"static"),"\u4fee\u9970, \u800c\u4e14\u5185\u90e8\u7c7b\u77e5\u9053\u81ea\u5df1\u5c5e\u4e8e\u54ea\u4e2a\u7236\u7c7b\u7684\u5b9e\u4f8b, \u4e5f\u5c31\u662f\u80fd\u591f\u8bbf\u95ee\u7236\u7c7b\u7684\u5b9e\u4f8b\u5b57\u6bb5\u548c\u65b9\u6cd5: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class Network {\n    public class Member {\n        //\u9664\u4e86\u7f16\u8bd1\u65f6\u5e38\u91cf\u5916, \u5185\u90e8\u7c7b\u4e0d\u80fd\u58f0\u660e\u9759\u6001\u6210\u5458.\n        public static final String constant_variable = "is ok";\n        public static String static_variable = "error code";\n        \n        private String name;\n\n        public Member(String name) {\n            this.name = name;\n        }\n\n        public void remove() {\n            members.remove(this);\n            //OR\n            Network.this.members.remove(this);\n        }\n\n        //\u68c0\u67e5Member\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u67d0\u4e2a\u7279\u5b9a\u7f51\u7edc(Network)\n        public boolean belongsTo(Network n) {\n            return Network.this == n;\n        }\n    }\n\n    private List<Member> members = new ArrayList<>();\n\n    public void add(String name) {\n        this.members.add(new Member(name));\n        //OR\n        this.members.add(this.new Member(name));\n    }\n}\n')),Object(i.b)("h2",{id:"\u63a5\u53e3\u548clambda\u8868\u8fbe\u5f0f"},"\u63a5\u53e3\u548clambda\u8868\u8fbe\u5f0f"),Object(i.b)("h3",{id:"317-\u5e38\u91cf"},"3.1.7 \u5e38\u91cf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728\u63a5\u53e3\u4e2d\u65e0\u6cd5\u62e5\u6709\u5b9e\u4f8b\u53d8\u91cf, \u63a5\u53e3\u5b9a\u4e49\u884c\u4e3a\u800c\u4e0d\u662f\u72b6\u6001."),Object(i.b)("li",{parentName:"ul"},"\u4e4b\u524d\u6240\u6709\u7684\u63a5\u53e3\u65b9\u6cd5\u5fc5\u987b\u662f\u62bd\u8c61\u7684(abstract), \u73b0\u5728\u53ef\u4ee5\u6dfb\u52a0\u4e24\u79cd\u6709\u5177\u4f53\u5b9e\u73b0\u7684\u65b9\u6cd5: \u9759\u6001\u65b9\u6cd5\u548c\u9ed8\u8ba4\u65b9\u6cd5."),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u5728\u63a5\u53e3\u4e2d\u7684\u4efb\u4f55\u53d8\u91cf\u81ea\u52a8\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"public static final"),"."),Object(i.b)("li",{parentName:"ul"},"\u5de5\u5382\u65b9\u6cd5\u5728\u63a5\u53e3\u4e2d\u975e\u5e38\u6709\u610f\u4e49, \u8c03\u7528\u63a5\u53e3\u7684\u5de5\u5382\u65b9\u6cd5\u8fd4\u56de\u5b9e\u73b0\u63a5\u53e3\u7684\u5b9e\u4f8b, \u53ef\u4ee5\u8ba9\u8c03\u7528\u8005\u65e0\u9700\u5173\u5fc3\u5b83\u662f\u54ea\u4e2a\u7c7b.")),Object(i.b)("h3",{id:"372-\u8bbf\u95ee\u6765\u81ea\u95ed\u5408\u4f5c\u7528\u57df\u7684\u53d8\u91cf"},"3.7.2 \u8bbf\u95ee\u6765\u81ea\u95ed\u5408\u4f5c\u7528\u57df\u7684\u53d8\u91cf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'int index = 0;\nList<String> names = Arrays.asList("Alan", "Wei");\nConsumer<String> lambda = name -> {\n    //index \u662f\u81ea\u7531\u53d8\u91cf\n    System.out.println(name.toLowerCase());\n};\nnames.stream().forEach(lambda);\n')),Object(i.b)("p",null,"lambda\u8868\u8fbe\u5f0f\u6709\u4e09\u4e2a\u90e8\u5206: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4ee3\u7801\u5757"),Object(i.b)("li",{parentName:"ol"},"\u53c2\u6570(",Object(i.b)("inlineCode",{parentName:"li"},"name")," \u662f\u53c2\u6570)"),Object(i.b)("li",{parentName:"ol"},"\u81ea\u7531\u53d8\u91cf\u7684\u503c(\u65e2\u4e0d\u662f\u53c2\u6570\u53d8\u91cf, \u4e5f\u4e0d\u662f\u4ee3\u7801\u5185\u90e8\u5b9a\u4e49\u7684\u53d8\u91cf, \u5bf9\u4e8elambda\u8868\u8fbe\u5f0f, index\u5c31\u662f\u81ea\u7531\u53d8\u91cf.)")),Object(i.b)("p",null,"\u63cf\u8ff0\u5e26\u6709\u81ea\u7531\u53d8\u91cf\u503c\u7684\u6280\u672f\u540d\u8bcd\u662f\u95ed\u5305."),Object(i.b)("p",null,"\u5728",Object(i.b)("inlineCode",{parentName:"p"},"lambda"),"\u7684\u4ee3\u7801\u5757\u4e2d\u65e0\u6cd5\u4fee\u6539index\u7684\u503c: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"int index = 0;\nConsumer<String> lambda = name -> {\n    index++; //\u65e0\u6cd5\u7f16\u8bd1\n};\n")),Object(i.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u957f\u5ea6\u4e3a1\u7684\u6570\u7ec4\u7ed5\u8fc7\u8fd9\u4e2a\u9650\u5236: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"int[] index = new int[1];\nConsumer<String> lambda = name -> {\n    index[0]++;\n};\n")))}p.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,s=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.a.createElement(s,c(c({ref:n},o),{},{components:t})):r.a.createElement(s,c({ref:n},o))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);