(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(280)),s=t(281),l=t(287),i={title:"Why Java Sucks and C# Rocks\uff08\u88652\uff09\uff1a\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",sidebar_label:"\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",keywords:["java","c#","csharp"],description:"Why Java Sucks and C# Rocks"},c={unversionedId:"articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model",id:"articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model",isDocsHomePage:!1,title:"Why Java Sucks and C# Rocks\uff08\u88652\uff09\uff1a\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",description:"Why Java Sucks and C# Rocks",source:"@site/src/docs/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model.md",slug:"/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/why-java-sucks-and-csharp-rocks/5-1-standard-event-model.md",version:"current",sidebar_label:"\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b",sidebar:"docs",previous:{title:"Why Java Sucks and C# Rocks\uff084\uff09\uff1a\u6cdb\u578b",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/4-generics"},next:{title:"Why Java Sucks and C# Rocks\uff085\uff09\uff1a\u533f\u540d\u65b9\u6cd5",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/5-anonymous-method"}},u=[{value:".NET\u4e2d\u7684\u4e8b\u4ef6",id:"net\u4e2d\u7684\u4e8b\u4ef6",children:[]},{value:"Java\u4e2d\u7684\u4e8b\u4ef6",id:"java\u4e2d\u7684\u4e8b\u4ef6",children:[]},{value:"Java\u4e8b\u4ef6\u6a21\u578b\u7684\u7f3a\u70b9",id:"java\u4e8b\u4ef6\u6a21\u578b\u7684\u7f3a\u70b9",children:[]},{value:".NET\u4e8b\u4ef6\u6a21\u578b\u7684\u9057\u61be",id:"net\u4e8b\u4ef6\u6a21\u578b\u7684\u9057\u61be",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(s.b,{author:"\u8001\u8d75\u70b9\u6ef4",link:"http://blog.zhaojie.me/",mdxType:"NetworkCopyRight"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2010/07/more-why-java-sucks-and-csharp-rocks-2-standard-event-model.html"},"\u539f\u6587 - Why Java Sucks and C# Rocks\uff08\u88652\uff09\uff1a\u6807\u51c6\u4e8b\u4ef6\u6a21\u578b")),Object(o.b)("p",null,"\u8fd9\u53c8\u662f\u4e00\u7bc7\u201c\u8865\u201d\uff0c\u672c\u6765\u5e76\u4e0d\u60f3\u5199\u8fd9\u65b9\u9762\u7684\u5185\u5bb9\uff0c\u56e0\u4e3a\u8fd9\u5e76\u975e\u5b8c\u5168\u662f\u201c\u8bed\u8a00\u201d\u76f8\u5173\u3002\u6253\u4e2a\u6bd4\u65b9\uff0c\u5982\u679c\u60a8\u89c9\u5f97.NET\u4e2d\u7684\u4e8b\u4ef6\u6a21\u578b\u4e0d\u53cb\u597d\uff0c\u90a3\u4e48\u5c31\u6309Java\u7684\u505a\u6cd5\u53bb\u505a\u54af\uff08\u53cd\u4e4b\u5c31\u505a\u4e0d\u5230\u4e86\uff09\u3002\u4e0d\u8fc7\u65e2\u7136\u6b63\u597d\u770b\u5230\u6709\u4e9b\u6d89\u53ca\u5230\u8fd9\u65b9\u9762\u7684\u8ba8\u8bba\uff0c\u90a3\u4e48\u6211\u4e5f\u8d81\u6b64\u673a\u4f1a\u53d1\u8868\u4e00\u4e0b\u81ea\u5df1\u7684\u770b\u6cd5\u5427\u3002\u8fd9\u6b21\u8c08\u7684\u662f\u4e24\u79cd\u8bed\u8a00\uff08\u5176\u5b9e\u5728\u8fd9\u4e2a\u8bdd\u9898\u4e0a\u4e5f\u662f\u5e73\u53f0\uff09\u4e0b\u201c\u6807\u51c6\u201d\u7684\u4e8b\u4ef6\u6a21\u578b\u3002\u201c\u6807\u51c6\u201d\u4e8c\u5b57\u610f\u5473\u7740\u662f\u88ab\u53cc\u65b9\u793e\u533a\u5404\u81ea\u63a5\u53d7\u7684\u6a21\u578b\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4e3a\u4e86\u5b9e\u73b0\u201c\u4e8b\u4ef6\u201d\u8fd9\u4e00\u7406\u5ff5\u800c\u4f7f\u7528\u7684\u4efb\u610f\u505a\u6cd5\u3002"),Object(o.b)("h2",{id:"net\u4e2d\u7684\u4e8b\u4ef6"},".NET\u4e2d\u7684\u4e8b\u4ef6"),Object(o.b)("p",null,"\u8fd8\u662f\u4ece\u4e24\u79cd\u4e8b\u4ef6\u6a21\u578b\u5f00\u59cb\u4ecb\u7ecd\u3002\u9996\u5148\u662f.NET\u4e2d\u7684\u4e8b\u4ef6\u6a21\u578b\u3002.NET\u91cc\u7684\u201c\u4e8b\u4ef6\u201d\u662f\u4e00\u7b49\u516c\u6c11\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u662f\u5e73\u53f0\u4e2d\u6240\u76f4\u63a5\u5b9a\u4e49\u548c\u63cf\u8ff0\u7684\u6982\u5ff5\uff0c\u6211\u4eec\u5229\u7528\u53cd\u5c04\u76f8\u5173\u7684API\uff08\u5982GetEvent\u65b9\u6cd5\uff09\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u5230\u67d0\u4e2a\u201c\u4e8b\u4ef6\u201d\u5bf9\u8c61\uff0c\u7136\u540e\u5bf9\u5176\u8fdb\u884c\u5404\u7c7b\u64cd\u4f5c\uff08\u4f8b\u5982\u6dfb\u52a0\u6216\u5220\u9664\u5904\u7406\u5668\uff09\u3002.NET\u4e2d\u7684\u4e8b\u4ef6\u57fa\u4e8e\u201c\u59d4\u6258\u201d\uff0c\u8fd9\u4e5f\u662f.NET\u6709\u522b\u4e8eJava\u5e73\u53f0\u7684\u6982\u5ff5\u4e4b\u4e00\uff0c\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\u4e5f\u6709\u8fc7\u7b80\u5355\u4ecb\u7ecd\uff0c\u4e8b\u5b9e\u4e0a\u59d4\u6258\u5728.NET 1.0\u4e2d\u4f3c\u4e4e\u5b8c\u5168\u662f\u4e3a\u4e8b\u4ef6\u91cf\u8eab\u5b9a\u505a\u7684\uff0c\u4f8b\u5982\u5728System.Windows.Forms.Form\u7c7b\u4e2d\u4fbf\u5b9a\u4e49\u4e86\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"public class Form : Component\n{\n    public event MouseEventHandler MouseMove;\n    public event MouseEventHandler MouseDown;\n    public event MouseEventHandler MouseUp;\n    public event MouseEventHandler MouseWheel;\n    ...\n}\n")),Object(o.b)("p",null,"\u5f53\u7136\u201c\u4e8b\u4ef6\u201d\u8fd9\u4e1c\u897f\u4e0d\u5149\u662fUI\u7ec4\u4ef6\u72ec\u6709\u7684\uff0c\u4e8b\u5b9e\u4e0a",Object(o.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/wewwczdw.aspx"},"\u5728.NET\u4e2d\u6709\u4e00\u79cd\u5f02\u6b65\u6a21\u5f0f\u4fbf\u662f\u57fa\u4e8e\u4e8b\u4ef6\u7684"),"\u2014\u2014\u4f8b\u5982WebClient\u7c7b\uff0c\u5728\u4f7f\u7528\u65f6\u6211\u4eec\u53ef\u4ee5\u4e3a\u4e00\u4e2aWebClient\u5bf9\u8c61\u7684DownloadProgressChanged\u4e8b\u4ef6\u6ce8\u518c\u4e8b\u4ef6\u5904\u7406\u65b9\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:'title="C#"',title:'"C#"'},"void Download()\n{\n    WebClient client = new WebClient();\n    client.DownloadProgressChanged +=\n        new DownloadProgressChangedEventHandler(OnDownloadProgressChanged);\n    ...\n}\n\nvoid OnDownloadProgressChanged(object sender, DownloadProgressChangedEventArgs e)\n{\n    ...\n}\n")),Object(o.b)("p",null,"\u5728.NET\u4e2d\uff0c\u4e8b\u4ef6\u7684\u5904\u7406\u5668\u662f\u4e00\u4e2a\u7b26\u5408\u59d4\u6258\u7b7e\u540d\u65b9\u6cd5\uff0c\u5355\u4e2a\u4e8b\u4ef6\u4e4b\u95f4\u5b8c\u5168\u5206\u79bb\uff0c\u5b83\u4eec\u5404\u81ea\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u4e5f\u5b8c\u5168\u72ec\u7acb\u3002"),Object(o.b)("h2",{id:"java\u4e2d\u7684\u4e8b\u4ef6"},"Java\u4e2d\u7684\u4e8b\u4ef6"),Object(o.b)("p",null,"Java\u4e2d\u5e76\u6ca1\u6709\u7279\u5b9a\u7684\u201c\u4e8b\u4ef6\u201d\u5bf9\u8c61\uff0c\u8fd9\u548c\u5b83\u7684\u201c\u5c5e\u6027\u201d\u4e00\u6837\uff0c\u90fd\u662f\u5c5e\u4e8e\u7eaf\u7cb9\u201c\u6982\u5ff5\u201d\u4e0a\u7684\u5185\u5bb9\uff0c\u4e8b\u5b9e\u4e0a\u5b83\u4eec\u5b8c\u5168\u662f\u7531\u666e\u901a\u7684\u65b9\u6cd5\uff0c\u63a5\u53e3\u7b49\u57fa\u672c\u4e8b\u7269\u5f62\u6210\u7684\u3002\u4f8b\u5982\uff0c\u540c\u6837\u4f5c\u4e3aUI\u7ec4\u4ef6\u4e2d\u7684\u7a97\u53e3\uff0cjavax.swing.JFrame\u6709\u4e00\u5957\u8fd9\u6837\u7684API\uff08\u7ee7\u627f\u81eajava.awt.Component\uff09\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class Component {\n    public void addMouseListener(MouseListener l);\n    public void removeMouseListener(MouseListener l);\n    public MouseListener[] getMouseListeners();\n    ...\n}\n\npublic interface MouseListener {\n    void mouseClicked(MouseEvent e);\n    void mouseEntered(MouseEvent e);\n    void mouseExited(MouseEvent e);\n    void mousePressed(MouseEvent e);\n    void mouseReleased(MouseEvent e);\n}\n")),Object(o.b)("p",null,"Java\u4e2d\u7684\u4e8b\u4ef6\u4e0d\u662f\u201c\u5bf9\u8c61\u201d\uff0c\u5982\u5b83\u7684\u5c5e\u6027\u4e00\u6837\uff0c\u90fd\u662f\u201c\u4e00\u7ec4API\u201d\uff0c\u4e0d\u8fc7\u4e8b\u4ef6\u6bd4\u5c5e\u6027\u66f4\u590d\u6742\u4e00\u4e9b\u3002Java\u4e2d\u7684\u4e8b\u4ef6\u6a21\u578b\u7531\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a\u4e00\u4e2aaddXxxListener\u65b9\u6cd5\uff0c\u7528\u4e8e\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u5668\uff1b\u4e00\u4e2aremoveXxxListener\u65b9\u6cd5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\uff1b\u8fd8\u6709\u4e00\u4e2agetXxxListners\u65b9\u6cd5\u7528\u4e8e\u83b7\u5f97\u5f53\u524d\u5df2\u7ecf\u6dfb\u52a0\u7684\u6240\u6709\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u3002\u6b64\u5916\uff0c\u5728Java\u4e2d\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u662f\u7531\u63a5\u53e3XxxListener\u8868\u793a\u7684\uff0c\u4e00\u4e2a\u63a5\u53e3\u4e2d\u5305\u542b\u4e86\u591a\u4e2a\u4e8b\u4ef6\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0cJava\u662f\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u4e86\u201c\u5206\u7ec4\u201d\uff0c\u4f8b\u5982\u5728Component\u5bf9\u8c61\u4e2d\u8fd8\u6709\u53e6\u5916\u4e00\u7ec4\u4e0e\u9f20\u6807\u6709\u5173\u7684\u4e8b\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"public class Component {\n    public void addMouseMotionListener(MouseMotionListener l);\n    public void removeMouseMotionListener(MouseMotionListener l);\n    public MouseMotionListener[] getMouseMotionListeners();\n    ...\n}\n\npublic interface MouseMotionListener {\n    void mouseDragged(MouseEvent e);\n    void mouseMoved(MouseEvent e);\n}\n")),Object(o.b)("p",null,"\u5728\u4f7f\u7528\u4e8b\u4ef6\u65f6\uff0c\u5f80\u5f80\u662f\u5229\u7528\u533f\u540d\u7c7b\u578b\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"component.addMouseMotionListener(\n    new MouseMotionListener() {\n        public void mouseMoved(MouseEvent e) {\n            // do this, do that...\n        }\n        public void mouseDragged(MouseEvent e) { /* empty */ }\n    });\n")),Object(o.b)("p",null,"\u4f7f\u7528\u533f\u540d\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u5185\u8054\u5730\u521b\u5efa\u4e00\u4e2a\u5b9e\u73b0\u4e86XxxListener\u63a5\u53e3\u7684\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u907f\u514d\u4e86\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\uff08\u5728Java\u8bed\u8a00\u4e2d\u8fd9\u610f\u5473\u7740\u8fd8\u8981\u521b\u5efa\u65b0\u7684\u6e90\u6587\u4ef6\uff09\uff0c\u4e5f\u65b9\u4fbf\u5f62\u6210\u4e00\u4e2a\u80fd\u591f\u8bbf\u95ee\u4e0a\u4e0b\u6587\u6210\u5458\u7684\u95ed\u5305\u3002\u4e0d\u8fc7\u60a8\u53ef\u4ee5\u53d1\u73b0\uff0c\u5982\u679c\u6211\u4eec\u53ea\u662f\u8981\u76d1\u542cmouseMoved\u4e8b\u4ef6\uff0c\u4e5f\u9700\u8981\u5b9e\u73b0\u6574\u4e2a\u5206\u7ec4\uff0c\u5373MouseMontionListener\u63a5\u53e3\uff0c\u53ea\u4e0d\u8fc7\u8981\u5c06\u65e0\u9700\u5b9e\u73b0\u7684\u65b9\u6cd5\u7559\u7a7a\u7f62\u4e86\u3002\u8fd9\u4e48\u505a\u4ea7\u751f\u7684\u95ee\u9898\u5c31\u662f\uff0c\u4f8b\u5982\u50cfMouseListener\u8fd9\u6837\u7684\u63a5\u53e3\uff0c\u5176\u4e2d\u5305\u542b5\u4e2a\u6210\u5458\uff0c\u90a3\u4e48\u5982\u679c\u6211\u53ea\u60f3\u5b9e\u73b0mouseClicked\u5355\u4e2a\u4e8b\u4ef6\u7684\u8bdd\uff0c\u7559\u7a7a\u5176\u4ed64\u4e2a\u65b9\u6cd5\u8fd8\u662f\u592a\u8fc7\u9ebb\u70e6\u4e86\u3002\u56e0\u6b64Java\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684XxxAdaptor\u7c7b\uff0c\u8ba9\u6211\u4eec\u53ef\u4ee5\u5199\u51fa\u8fd9\u6837\u7684\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"component.addMouseListener(\n    new MouseAdaptor() {\n        public void mouseClicked(MouseEvent e) {\n            // do this, do that...\n        }\n    });\n")),Object(o.b)("p",null,"XxxAdaptor\u7c7b\u4f1a\u5b9e\u73b0XxxListener\u63a5\u53e3\uff0c\u5e76\u4e14\u5b9e\u73b0\u5176\u4e2d\u7684\u6240\u6709\u65b9\u6cd5\uff0c\u5e76\u5168\u90e8\u7559\u7a7a\u3002\u4e8e\u662f\u5728\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u57fa\u4e8eAdaptor\u7c7b\u521b\u5efa\u4e00\u4e2a\u533f\u540d\u7c7b\u578b\uff0c\u5e76\u9009\u62e9\u6211\u4eec\u9700\u8981\u7684\u65b9\u6cd5\u6765\u8986\u76d6\uff08override\uff09\u3002\u4f8b\u5982\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u6211\u4eec\u65e2\u7136\u53ea\u8981\u5173\u6ce8mouseClicked\u4e8b\u4ef6\uff0c\u90a3\u4e48\u4e5f\u53ea\u8981\u8986\u76d6\u8fd9\u4e00\u4e2a\u65b9\u6cd5\u5c31\u884c\u4e86\u3002"),Object(o.b)("h2",{id:"java\u4e8b\u4ef6\u6a21\u578b\u7684\u7f3a\u70b9"},"Java\u4e8b\u4ef6\u6a21\u578b\u7684\u7f3a\u70b9"),Object(o.b)("p",null,"\u4e00\u53e5\u8bdd\uff1a\u6211\u4e0d\u559c\u6b22Java\u7684\u4e8b\u4ef6\u6a21\u578b\u3002"),Object(o.b)("p",null,"\u9996\u5148\uff0cJava\u7684\u4e8b\u4ef6\u6a21\u578b\u6bd4\u8f83\u96f6\u6563\u3002\u4e00\u4e2a\u4e8b\u4ef6\u8981\u5305\u542b\u4e09\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u7ec4\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8b\u4ef6\uff0c\u7f3a\u4e00\u4e0d\u53ef\u3002\u90a3\u4e48\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u4e3a\u4ec0\u4e48\u5c31\u4e0d\u80fd\u201c\u4e00\u4f53\u5316\u201d\uff0c\u7edf\u4e00\u6210\u5355\u4e2a\u5bf9\u8c61\u5462\uff1f.NET\u5728\u8fd9\u65b9\u9762\u505a\u7684\u6bd4\u8f83\u597d\uff0c\u4e8b\u4ef6\u672c\u8eab\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bf9\u8c61\uff0c\u65e0\u8bba\u662f\u6dfb\u52a0\u3001\u5220\u9664\uff0c\u8fd8\u662f\u83b7\u5f97\u5f53\u524d\u6240\u6709\u7684\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u90fd\u662f\u4ece\u201c\u4e8b\u4ef6\u5bf9\u8c61\u201d\u672c\u8eab\u51fa\u53d1\u7684\u529f\u80fd\u3002\u8fd9\u4e0e\u201c\u5c5e\u6027\u201d\u4e00\u6837\uff0c\u6211\u8ba4\u4e3a.NET\u7684\u8bbe\u8ba1\u66f4\u4e3a\u7d27\u51d1\uff0c\u4f18\u96c5\u3002\u5f53\u7136\uff0c\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u5e76\u975e\u4e00\u5b9a\u8981.NET\u4e2d\u201c\u59d4\u6258\u201d\u8fd9\u6837\u6709\u4e9b\u7279\u6b8a\u7684\u7c7b\u578b\uff0c\u4e00\u4e2a\u666e\u901a\u7684\u63a5\u53e3\u6216\u662f\u62bd\u8c61\u7c7b\u4e5f\u53ef\u4ee5\u6ee1\u8db3\u201c\u5355\u4e00\u5bf9\u8c61\u201d\u7684\u8981\u6c42\u3002\u53ea\u662f\uff0c\u6211\u4e0d\u662f\u5341\u5206\u63a5\u53d7Java\u8fd9\u79cd\u201c\u677e\u6563\u201d\u7684\u4e8b\u4ef6\u6a21\u578b\u3002"),Object(o.b)("p",null,"\u5176\u6b21\uff0cJava\u7684\u4e8b\u4ef6\u4e4b\u95f4\u4e0d\u662f\u72ec\u7acb\uff0c\u800c\u662f\u7ecf\u8fc7\u201c\u5206\u7ec4\u201d\u7684\u2014\u2014\u5f53\u7136\uff0c\u4e5f\u6709\u50cfMouseWheelListener\u90a3\u6837\u7684\u53ea\u5305\u542bmouseWheel\u5355\u4e2a\u4e8b\u4ef6\u7684\u201c\u5206\u7ec4\u201d\uff0c\u4f46\u6bd5\u7adf\u5927\u90e8\u5206\u5206\u7ec4\u4e2d\u8fd8\u662f\u5305\u542b\u591a\u4e2a\u4e8b\u4ef6\u3002\u8fd9\u5c31\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u96be\u4ee5\u5355\u72ec\u5904\u7406\u5355\u4e2a\u4e8b\u4ef6\uff0c\u5728\u6dfb\u52a0\u5355\u4e2a\u4e8b\u4ef6\u7684\u5904\u7406\u5668\u65f6\u5fc5\u7136\u8981\u6d89\u53ca\u5230\u5176\u4ed6\u4e8b\u4ef6\u3002\u6211\u4eec\u6765\u8bbe\u60f3\u8fd9\u6837\u4e00\u79cd\u60c5\u51b5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"component.addMouseListener(\n    new MouseAdaptor() {\n        public void mouseClicked(MouseEvent e) {\n             // do this, do that...\n        }\n    });\n\ncomponent.addMouseListener(\n    new MouseAdaptor() {\n        public void mousePressed(MouseEvent e) {\n             // do this, do that...\n        }\n    });\n")),Object(o.b)("p",null,"\u4ee5\u4e0a\u4e24\u6bb5\u4ee3\u7801\u5206\u522b\u4e3amouseClicked\u548cmousePressed\u4e8b\u4ef6\u5404\u81ea\u6dfb\u52a0\u4e86\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\u3002\u90a3\u4e48\u8bf7\u95ee\uff0c\u5f53mouseClicked\u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0c\u5c06\u4f1a\u6267\u884c\u51e0\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\uff1f\u7b54\u6848\u662f2\u4e2a\uff0c\u4e00\u4e2a\u662f\u6211\u4eec\u6dfb\u52a0\u7684\u903b\u8f91\uff0c\u8fd8\u6709\u4e00\u4e2a\u662f\u968fmousePressed\u4e8b\u4ef6\u4e00\u8d77\u643a\u5e26\u800c\u6765\u7684\u201c\u7a7a\u767d\u903b\u8f91\u201d\u3002\u800c\u4e14\u4e8b\u5b9e\u4e0a\uff0c\u5373\u4fbf\u662f\u7406\u5e94\u201c\u7f6e\u8eab\u4e8b\u5916\u201d\u7684mouseEntered\u6216mouseExited\u4e8b\u4ef6\uff0c\u5b83\u4eec\u4e5f\u88ab\u5404\u81ea\u6dfb\u52a0\u4e86\u4e24\u4e2a\u7a7a\u767d\u7684\u5904\u7406\u5668\u3002\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u6027\u80fd\u6781\u5ea6\u82db\u523b\u7684\u7a0b\u5e8f\u5458\u6765\u8bf4\uff0c\u8fd9\u6837\u7684\u201c\u6d6a\u8d39\u201d\u53ef\u80fd\u662f\u65e0\u6cd5\u5fcd\u53d7\u7684\uff08\u867d\u7136\u6211\u89c9\u5f97\u8fd9\u91cc\u5e76\u4e0d\u4f1a\u6709\u4ec0\u4e48\u6027\u80fd\u95ee\u9898\uff09\u3002"),Object(o.b)("p",null,"\u6b64\u5916\u60a8\u662f\u5426\u60f3\u8fc7\uff0c\u4e3a\u4ec0\u4e48MouseListener\u548cMouseMotionListener\u4f1a\u662f\u4e24\u4e2a\u201c\u4e8b\u4ef6\u7ec4\u201d\u800c\u4e0d\u5408\u5e76\u4e3a\u540c\u4e00\u4e2a\u5462\uff1f\u636e\u8bf4\u4e5f\u662f\u6027\u80fd\u65b9\u9762\u7684\u7f18\u6545\uff0c\u56e0\u4e3aMouseMotionListener\u4e2d\u7684\u4e8b\u4ef6\u90fd\u662f\u201c\u8fde\u7eed\u89e6\u53d1\u201d\u7684\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4eec\u6267\u884c\u4e8b\u4ef6\u5904\u7406\u5668\u7684\u5bc6\u5ea6\u5f88\u9ad8\uff0c\u5982\u679c\u5c06\u5b83\u548cMouseListener\u5408\u5e76\uff0c\u90a3\u4e48\u4e00\u4e2a\u5982mouseClicked\u8fd9\u6837\u7684\u201c\u666e\u901a\u578b\u201d\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u4e5f\u4f1a\u8ba9mouseMoved\u8fd9\u6837\u7684\u201c\u5bc6\u96c6\u578b\u201d\u4e8b\u4ef6\u6267\u884c\u65e0\u8c13\u7684\u65b9\u6cd5\u3002\u7531\u4e8e\u6267\u884c\u5bc6\u5ea6\u5f88\u9ad8\uff0c\u53ef\u80fd\u5bf9\u4e8e\u6027\u80fd\u7684\u5f71\u54cd\u5c31\u6bd4\u8f83\u53ef\u89c2\u4e86\u3002"),Object(o.b)("p",null,"\u53ef\u80fd\u60a8\u4f1a\u8bf4\uff0c\u628a\u6240\u6709\u7684\u4e8b\u4ef6\u5904\u7406\u903b\u8f91\u5b9e\u73b0\u5728\u4e00\u4e2aXxxAdaptor\u6216\u662fXxxListener\u4e2d\u4e0d\u5c31\u53ef\u4ee5\u4e86\u5417\uff1f\u4e0d\u8fc7\u8fd9\u5c31\u8981\u6c42\u591a\u4e2a\u4e0d\u540c\u4e8b\u4ef6\u7684\u5904\u7406\u5668\u5fc5\u987b\u5728\u540c\u4e00\u6bb5\u4ee3\u7801\u4e2d\u6dfb\u52a0\uff0c\u5b9e\u5728\u4e0d\u591f\u81ea\u7531\u2014\u2014\u8fd9\u70b9\u5728\u4f7f\u7528\u4e86Reactive Framework\u7684\u65f6\u5019\u4f53\u4f1a\u5c24\u751a\u3002"),Object(o.b)("p",null,"\u4e0d\u8fc7\uff0c\u6211\u8ba4\u4e3aJava\u4e8b\u4ef6\u6a21\u578b\u6700\u5927\u7684\u7f3a\u9677\u8fd8\u662f\u201c\u6269\u5c55\u6027\u201d\u3002Java\u4e2d\u7684\u4e8b\u4ef6\u5927\u91cf\u4f9d\u8d56\u4e86\u63a5\u53e3\uff0c\u800c\u5728\u4e00\u4e2a\u6210\u719f\u7684\u7c7b\u5e93\u4e2d\uff0c\u63a5\u53e3\u7684\u4f7f\u7528\u5e94\u8be5\u662f\u975e\u5e38\u8c28\u614e\u7684\uff0c\u56e0\u4e3a\u4e00\u65e6\u53d1\u5e03\u4e86\u67d0\u4e2a\u516c\u5f00\u63a5\u53e3\uff0c\u5b83\u5c31\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\uff0c\u56e0\u4e3a\u4efb\u4f55\u4fee\u6539\u90fd\u4f1a\u5bfc\u81f4\u517c\u5bb9\u6027\u4e0a\u7684\u7834\u574f\uff0c\u8fd9\u65b9\u9762\u5728\u300aFramework Design Guildlines\u300b\u4e00\u4e66\u4e2d\u8fdb\u884c\u4e86\u8be6\u7ec6\u8bba\u8ff0\u3002\u8bd5\u60f3\uff0c\u73b0\u5728MouseListener\u4e2d\u67095\u4e2a\u65b9\u6cd5\uff0c\u8868\u793a5\u4e2a\u4e8b\u4ef6\uff0c\u90a3\u4e48\u5982\u679c\u6211\u5728\u65b0\u7248\u672c\u7684\u7c7b\u5e93\u4e2d\u5e0c\u671b\u589e\u52a0\u53e6\u5916\u4e00\u4e2a\u4e8b\u4ef6\uff08\u5982mouseDoubleClicked\uff09\uff0c\u90a3\u4e48\u8be5\u600e\u4e48\u529e\uff1f\u4f3c\u4e4e\u4e5f\u53ea\u6709\u521b\u5efa\u65b0\u7684\u63a5\u53e3\u3002\u4f46\u662f\u5982\u679c\u6bcf\u6b21\u9700\u8981\u6dfb\u52a0\u65b0\u7684\u4e8b\u4ef6\u65f6\u90fd\u8981\u589e\u52a0\u65b0\u7684\u63a5\u53e3\uff0c\u800c\u5176\u4e2d\u4ec5\u4ec5\u662f\u5305\u542b\u4e00\u4e2a\u63a5\u53e3\u7684\u8bdd\uff0c\u7c7b\u5e93\u4e2d\u7684\u8865\u4e01\u75d5\u8ff9\u5c31\u4f1a\u5f88\u91cd\u3002\u66f4\u4f55\u51b5\uff0c\u5982mouseDoubleClicked\u8fd9\u6837\u7684\u4e8b\u4ef6\u660e\u663e\u4e5f\u5e94\u8be5\u5c5e\u4e8eMouseListener\u7684\u4e00\u90e8\u5206\u3002"),Object(o.b)("h2",{id:"net\u4e8b\u4ef6\u6a21\u578b\u7684\u9057\u61be"},".NET\u4e8b\u4ef6\u6a21\u578b\u7684\u9057\u61be"),Object(o.b)("p",null,".NET\u4e8b\u4ef6\u6a21\u578b\u6ca1\u6709Java\u4e2d\u7684\u8bb8\u591a\u7f3a\u70b9\uff0c\u4e8b\u5b9e\u4e0a\u5982\u679c\u6709\u4eba\u8bf4.NET\u7684\u8bbe\u8ba1\u53c2\u8003\u4e86Java\u7684\u7f3a\u70b9\uff0c\u90a3\u4e48\u6211\u8ba4\u4e3a\u201c\u4e8b\u4ef6\u6a21\u578b\u201d\u53ef\u80fd\u7684\u786e\u662f\u5176\u4e2d\u4e00\u4e2a\u3002\u5728.NET\u7684\u4e8b\u4ef6\u6a21\u578b\u4e2d\uff0c\u4e8b\u4ef6\u662f\u4e00\u7b49\u516c\u6c11\uff0c\u6bcf\u4e2a\u4e8b\u4ef6\u90fd\u662f\u7c7b\u7684\u72ec\u7acb\u6210\u5458\uff1b\u5b83\u4eec\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u5b8c\u5168\u72ec\u7acb\uff0c\u4e0d\u4f1a\u76f8\u4e92\u5e72\u6d89\uff1b\u5728\u7c7b\u5e93\u5347\u7ea7\u65f6\u5982\u679c\u8981\u589e\u52a0\u65b0\u7684\u4e8b\u4ef6\uff0c\u4f7f\u7528\u6700\u666e\u901a\u6700\u81ea\u7136\u7684\u65b9\u5f0f\u589e\u52a0\u4fbf\u662f\uff0c\u4ec5\u6b64\u800c\u5df2\u3002"),Object(o.b)("p",null,"\u5f53\u7136\uff0c.NET\u4e2d\u7684\u4e8b\u4ef6\u6a21\u578b\u4e5f\u4e0d\u591f\u5b8c\u7f8e\u3002\u5728\u6211\u770b\u6765\u5b83\u7684\u7f3a\u70b9\u5728\u4e8e\uff0c\u5b83\u867d\u7136\u662f\u5bf9\u8c61\uff0c\u4f46\u8fd8\u662f\u6709\u9650\u5236\u7684\u5bf9\u8c61\u3002\u5728C#\u4e2d\uff0c\u6211\u4eec\u65e0\u6cd5\u5c06\u4e00\u4e2a\u4e8b\u4ef6\u4f5c\u4e3a\u5bf9\u8c61\u4f20\u9012\uff0c\u65e0\u6cd5\u4f7f\u7528\u4e00\u4e2a\u62bd\u8c61\u7c7b\u5bf9\u5176\u8fdb\u884c\u7edf\u4e00\u5904\u7406\uff08object\u7c7b\u578b\u81ea\u7136\u9664\u5916\uff09\uff0c\u4e5f\u96be\u9488\u5bf9\u5176\u5229\u7528\u201c\u6269\u5c55\u65b9\u6cd5\u201d\u7b49\u5e38\u7528\u7279\u6027\u3002\u8fd9\u4e2a\u95ee\u9898\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u9650\u5236\u67d0\u4e9b\u5f00\u53d1\u6a21\u578b\uff0c\u4e8e\u662f\u6211\u4eec\u4f1a\u4e3a\u5176\u589e\u52a0\u4e00\u4e9b\u201c\u4e8b\u4ef6\u5373\u5bf9\u8c61\u201d\u7684\u673a\u5236\u3002"),Object(o.b)("p",null,"\u5fae\u8f6f\u81ea\u5df1\u5176\u5b9e\u4e5f\u610f\u8bc6\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u56e0\u6b64\u5728F#\u4e2d\u8fdb\u884c\u4e86\u4e00\u4e9b\u7279\u522b\u7684\u5904\u7406\u3002F#\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u5c06.NET\u4e2d\u7684\u4e8b\u4ef6\u89c6\u4e3a\u4e00\u4e2aIEvent<THandler, TEventArgs>\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-fsharp",metastring:'title="F#"',title:'"F#"'},"type IDelegateEvent<'Delegate> =\n  interface\n    abstract this.AddHandler : 'Delegate -> unit\n    abstract this.RemoveHandler : 'Delegate -> unit\nend\n\ntype IEvent<'Delegate,'Args\n  when 'Delegate : delegate<'Args,unit> and 'Delegate :> System.Delegate> =\n  interface\n    inherit IDelegateEvent<'Delegate>\nend\n")),Object(o.b)("p",null,"\u5728F#\u4e2d\uff0c\u4e00\u4e2a.NET\u4e2d\u7684\u4e8b\u4ef6\u4fbf\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u5bf9\u8c61\uff0c\u5b83\u5f25\u8865\u4e86C#\u91cc\u7684\u7f3a\u70b9\uff0c\u4e8e\u662f\u8bb8\u591a\u505a\u6cd5\u5728F#\u4e2d\u4fbf\u663e\u5f97\u81ea\u7136\u6216\u76f4\u63a5\u4e86\u4e00\u4e9b\u3002\u4f8b\u5982\uff0c\u5728F#\u4e2d\u5185\u7f6e\u4e86\u54cd\u5e94\u5f0f\u7f16\u7a0b\u6a21\u578b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u800c\u5bf9\u4e8eC#\u6765\u8bf4\uff0c\u4f7f\u7528Reactive Framework\u76f8\u5173\u529f\u80fd\u65f6\uff0c\u5219\u9700\u8981\u624b\u52a8\u5730\u5c06\u4e00\u4e2a\u4e8b\u4ef6\u8f6c\u5316\u4e3aIObservable\u5bf9\u8c61\u2014\u2014\u5f53\u7136\uff0c\u6709\u4e86\u4e00\u4e9b\u8f85\u52a9\u65b9\u6cd5\uff0c\u8fd9\u4e5f\u5c31\u662f\u4e00\u884c\u4ee3\u7801\u7684\u5de5\u4f5c\u7f62\u4e86\u3002"),Object(o.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(o.b)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6211\u7b80\u5355\u4ecb\u7ecd\u4e86.NET\u4e0eJava\u4e2d\u4e8b\u4ef6\u6a21\u578b\uff0c\u5e76\u8c08\u4e86\u8c08\u81ea\u5df1\u7684\u770b\u6cd5\u3002\u603b\u800c\u8a00\u4e4b\uff0c.NET\u7684\u4e8b\u4ef6\u6a21\u578b\u867d\u6709\u9057\u61be\uff0c\u4f46\u8f83\u4e4bJava\u7684\u4e8b\u4ef6\u6a21\u578b\u8fd8\u662f\u6709\u5f88\u5927\u4f18\u52bf\u7684\u3002\u5373\u4fbf\u662f.NET\u4e2d\u7684\u4e8b\u4ef6\u6a21\u578b\uff0c\u5728\u67d0\u4e9b\u4eba\u770b\u6765\u4f1a\u6210\u4e3a\u201c\u5fc3\u667a\u8d1f\u62c5\u201d\uff0c\u4f46\u6bd4\u8f83\u4e4b\u4e0b\u6211\u4e5f\u4e0d\u613f\u610f\u8ba9.NET\u6216C#\u9000\u56de\u5230Java\u7684\u8bbe\u8ba1\u65b9\u5f0f\u4e0a\u2014\u2014\u66f4\u4f55\u51b5\uff0c\u5c31\u8fd9\u6837\u4e00\u4e2a\u7b80\u5355\u7684\u673a\u5236\u5c31\u80fd\u6210\u4e3a\u503c\u5f97\u4e00\u63d0\u7684\u5fc3\u667a\u8d1f\u62c5\u5417\uff1f\u6211\u5bf9\u6b64\u6301\u4fdd\u7559\u610f\u89c1\u3002"),Object(o.b)(l.a,{mdxType:"BottomCopyRight"}))}p.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,v=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(v,l(l({ref:n},c),{},{components:t})):r.a.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},281:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return i}));var a=t(4),r=t(0),o=t.n(r),s=function(e){function n(n){return e.call(this,n)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props.link?o.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("b",null,"\u672c\u6587\u4f5c\u8005\u4e3a ",e,", \u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),o.a.createElement("hr",null))},n}(o.a.Component),l=t(282);o.a.Component;function i(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var n=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!n)return o.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return o.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var t="/blog/"+n[1]+"/"+n[2]+"/"+n[3]+"/"+n[4];return o.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(4),r=t(0),o=t.n(r),s=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return o.a.createElement("div",null,"\u672c\u6587\u4e3a ",o.a.createElement("a",{href:"https://www.zhihu.com/people/jeffz",target:"_blank"},"\u8d75\u52bc")," \u53d1\u8868\u5728 ",o.a.createElement("a",{href:"http://blog.zhaojie.me",target:"_blank"},"\u4e2a\u4eba\u535a\u5ba2")," \u7684\u7cfb\u5217\u6587\u7ae0\u4e4b\u4e00\u3002")},n}(o.a.Component)}}]);