(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),l=t(7),r=(t(0),t(395)),c={title:"Hello World",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Hello World",custom_edit_url:null,keywords:["rabbitmq"]},i={unversionedId:"articles/rabbitmq-guide/1-hello-world",id:"articles/rabbitmq-guide/1-hello-world",isDocsHomePage:!1,title:"Hello World",description:"\u539f\u6587",source:"@site/src/docs/articles/rabbitmq-guide/1-hello-world.md",slug:"/articles/rabbitmq-guide/1-hello-world",permalink:"/docs/articles/rabbitmq-guide/1-hello-world",editUrl:null,version:"current",sidebar_label:"Hello World",sidebar:"docs",previous:{title:"RabbitMQ\u5b89\u88c5",permalink:"/docs/articles/rabbitmq-guide/0-install"},next:{title:"Work Queues",permalink:"/docs/articles/rabbitmq-guide/2-WorkQueues"}},b=[{value:"&quot;Hello World&quot;",id:"hello-world",children:[]},{value:"Sending",id:"sending",children:[]},{value:"Receiving",id:"receiving",children:[]},{value:"Putting It All Together",id:"putting-it-all-together",children:[]}],o={toc:b};function s(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://www.rabbitmq.com/tutorials/tutorial-one-dotnet.html"},"\u539f\u6587")),Object(r.b)("p",null,"RabbitMQ \u662f\u4e00\u4e2a\u6d88\u606f\u4ee3\u7406(\u534f\u5546\u670d\u52a1\u5668). \u672c\u8d28\u4e0a, RabbitMQ\u4ece\u751f\u4ea7\u8005\u90a3\u513f\u63a5\u6536\u4e00\u4e2a\u6d88\u606f, \u7136\u540e\u628a\u6d88\u606f\u4f20\u9012\u7ed9\u6d88\u8d39\u8005. \u5728\u4e24\u8005\u4e4b\u95f4, \u53ef\u4ee5\u6839\u636e\u4f60\u63d0\u4f9b\u7684\u89c4\u5219\u8def\u7531, \u7f13\u5b58\u548c\u6301\u4e45\u5316\u6d88\u606f."),Object(r.b)("p",null,"RabbitMQ, \u7528\u884c\u4e1a\u672f\u8bed\u5c31\u662f\u901a\u4fe1."),Object(r.b)("p",null,"\u751f\u4ea7\u610f\u5473\u7740\u53d1\u9001. \u4e00\u4e2a\u7a0b\u5e8f\u53d1\u9001\u6d88\u606f\u5c31\u662f\u751f\u4ea7\u8005, \u6211\u4eec\u7528P\u8868\u793a:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/producer.png",alt:"P"})),Object(r.b)("p",null,"\u961f\u5217\u5c31\u662f\u6709\u540d\u5b57\u7684\u90ae\u7bb1, \u5b58\u6d3b\u5728RabbitMQ\u91cc. \u867d\u7136\u6d88\u606f\u6d41\u901a\u8fc7RabbitMQ\u548c\u4f60\u7684\u7a0b\u5e8f, \u4f46\u662f\u6d88\u606f\u88ab\u5b58\u50a8\u5728\u961f\u5217\u91cc\u9762. \u961f\u5217\u6ca1\u6709\u88ab\u7ed1\u5b9a\u4efb\u4f55\u9650\u5236, \u4f60\u53ef\u4ee5\u5b58\u50a8\u8bb8\u591a\u6d88\u606f\u5728\u961f\u5217\u91cc. \u5b83\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u65e0\u9650\u7684\u7f13\u5b58\u533a. \u591a\u4e2a\u751f\u4ea7\u8005\u53ef\u4ee5\u53d1\u9001\u591a\u4e2a\u6d88\u606f\u5230\u4e00\u4e2a\u961f\u5217, \u591a\u4e2a\u6d88\u8d39\u8005\u53ef\u4ee5\u4ece\u4e00\u4e2a\u961f\u5217\u63a5\u6536\u6570\u636e. \u961f\u5217\u53ef\u4ee5\u8868\u793a\u5982\u4e0b:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/queue.png",alt:"Queue"})),Object(r.b)("p",null,"\u6d88\u8d39\u8fd1\u4f3c\u610f\u5473\u7740\u63a5\u6536. \u6d88\u8d39\u8005\u662f\u4e00\u4e2a\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5728\u7b49\u5f85\u63a5\u6536\u6d88\u606f\u7684\u7a0b\u5e8f. \u8868\u793a\u5982\u4e0b:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/consumer.png",alt:"Consumer"})),Object(r.b)("p",null,"\u6ce8\u610f, \u751f\u4ea7\u8005, \u6d88\u8d39\u8005\u548c\u4ee3\u7406\u4e0d\u4e00\u5b9a\u5fc5\u987b\u5728\u5bbf\u4e3b\u5728\u4e00\u53f0\u673a\u5668\u4e0a. \u5b9e\u9645\u4e0a, \u5927\u90e8\u5206\u5e94\u7528\u4ed6\u4eec\u90fd\u4e0d\u5728\u4e00\u53f0\u673a\u5668\u4e0a."),Object(r.b)("h2",{id:"hello-world"},'"Hello World"'),Object(r.b)("p",null,'(using the .NET/C# Client)\n\u5728\u6559\u7a0b\u7684\u8fd9\u4e2a\u90e8\u5206, \u6211\u4eec\u5c06\u7528C#\u5199\u4e24\u4e2a\u7a0b\u5e8f. \u4e00\u4e2a\u53d1\u9001\u5355\u6761\u6d88\u606f\u7684\u751f\u4ea7\u8005, \u548c\u63a5\u6536\u5e76\u6253\u5370\u6d88\u606f\u7684\u6d88\u8d39\u8005. \u6211\u4eec\u5c06\u4f1a\u505a\u4e00\u4e9b\u6ce8\u91ca, \u5728\u4e00\u4e9b\u5177\u4f53\u7684.NET API\u4e0a.\n\u5728\u4e0b\u9762\u7684\u793a\u610f\u56fe\u4e0a, "P" \u662f\u6211\u4eec\u7684\u751f\u4ea7\u8005, "C"\u662f\u6d88\u8d39\u8005. \u4e2d\u95f4\u7684\u76d2\u5b50\u662f\u961f\u5217, \u4e5f\u5373\u662f\u7f13\u5b58\u7684\u6d88\u606f:\n',Object(r.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/python-one.png",alt:"P-Q-C"})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),".NET client library")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"RabbmitMQ\u652f\u6301\u591a\u79cd\u534f\u8bae. \u8fd9\u4e2a\u6559\u7a0b\u4f7f\u7528\u7684\u662fAMQP 0-9-1, \u4e00\u79cd\u5f00\u653e\u7684, \u591a\u7528\u9014\u7684\u6d88\u606f\u534f\u8bae. \u6709\u591a\u4e2aRabbitMQ\u4e0d\u540c\u8bed\u8a00\u7684\u5ba2\u6237\u7aef.\u6211\u4eec\u5c06\u8981\u4f7f\u7528RabbitMQ\u63d0\u4f9b\u7684.NET\u5ba2\u6237\u7aef\n\u4e0b\u8f7d",Object(r.b)("a",{parentName:"p",href:"http://www.rabbitmq.com/dotnet.html"},"\u5ba2\u6237\u7aef\u7c7b\u5e93"),", \u6bd4\u5bf9\u7b7e\u540d.\u89e3\u538b\u5e76\u62f7\u8d1d\u5230\u5de5\u4f5c\u76ee\u5f55.\n\u4f60\u9700\u8981\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u80fd\u591f\u627e\u5230C#\u7f16\u8bd1\u5de5\u5177 ",Object(r.b)("inlineCode",{parentName:"p"},"csc.exe"),", \u4f60\u4e5f\u8bb8\u9700\u8981\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"p"},"http://www.rabbitmq.com/dotnet.html"),"(\u6839\u636e\u4f60\u5b89\u88c5\u7684.NET\u7248\u672c\u6539\u53d8\u8def\u5f84) \u5230\u4f60\u7684Path."))),Object(r.b)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86.NET\u5ba2\u6237\u7aef\u7c7b\u5e93, \u6211\u4eec\u53ef\u4ee5\u5199\u4e00\u4e0b\u4ee3\u7801"),Object(r.b)("h2",{id:"sending"},"Sending"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/sending.png",alt:"sending"})),Object(r.b)("p",null,"\u6211\u4eec\u5c06\u4f1a\u8c03\u7528\u6211\u4eec\u7684\u6d88\u606f\u53d1\u9001\u8005 ",Object(r.b)("inlineCode",{parentName:"p"},"Send.cs")," \u548c\u6211\u4eec\u7684\u6d88\u606f\u63a5\u6536\u8005 ",Object(r.b)("inlineCode",{parentName:"p"},"Receive.cs"),". \u53d1\u9001\u8005\u5c06\u4f1a\u8fde\u63a5 RabbitMQ, \u53d1\u9001\u4e00\u6761\u6d88\u606f, \u7136\u540e\u9000\u51fa."),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Send.cs")," \u91cc, \u6211\u4eec\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u540d\u7a7a\u95f4:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Send.cs"',title:'"Send.cs"'},"    using System;\n    using RabbitMQ.Client;\n    using System.Text;  \n")),Object(r.b)("p",null,"\u8bbe\u7f6e\u7c7b:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Send.cs"',title:'"Send.cs"'},"class Send\n{\n    public static void Main()\n    {\n        ...\n    }\n}\n")),Object(r.b)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\u5230\u670d\u52a1\u5668:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Send.cs"',title:'"Send.cs"'},'class Send\n{\n    public static void Main()\n    {\n        var factory = new ConnectionFactory() {HostName = "localhost"};\n        using(var connection = factory.CreateConnection())\n        {\n            using(var channel = connection.CreateModel())\n            {\n                ...\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"connection\u8fde\u63a5\u62bd\u8c61\u4e86socket\u8fde\u63a5, \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u534f\u8bae\u7248\u672c\u534f\u5546\u548c\u8ba4\u8bc1\u7b49\u7b49. \u8fd9\u91cc\u6211\u4eec\u8fde\u63a5\u5230\u672c\u673a\u7684\u4ee3\u7406 - ",Object(r.b)("em",{parentName:"p"},"localhost"),". \u5982\u679c\u6211\u4eec\u60f3\u8fde\u63a5\u5176\u4ed6\u673a\u5668\u4e0a\u7684\u4ee3\u7406, \u53ea\u9700\u8981\u5728\u6b64\u5904\u6307\u5b9a\u4ed6\u7684\u540d\u5b57\u6216IP\u5730\u5740."),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u521b\u5efachannel(\u4fe1\u9053), \u8fd9\u662f\u5927\u90e8\u5206API\u83b7\u53d6\u4fe1\u606f\u7684\u5730\u65b9."),Object(r.b)("p",null,"\u6211\u4eec\u8981\u4e3a\u6211\u4eec\u7684\u53d1\u9001\u58f0\u660e\u4e00\u4e2a\u961f\u5217, \u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u53d1\u5e03\u6d88\u606f\u5230\u8fd9\u4e2a\u961f\u5217:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Send.cs"',title:'"Send.cs"'},'using System;\nusing RabbitMQ.Client;\nusing System.Text;\n\nclass Send\n{\n    public static void Main()\n    {\n        var factory = new ConnectionFactory() { HostName = "localhost" };\n        using(var connection = factory.CreateConnection())\n        using(var channel = connection.CreateModel())\n        {\n            channel.QueueDeclare(queue: "hello",\n                                    durable: false,\n                                    exclusive: false,\n                                    autoDelete: false,\n                                    arguments: null);\n\n            string message = "Hello World!";\n            var body = Encoding.UTF8.GetBytes(message);\n\n            channel.BasicPublish(exchange: "",\n                                    routingKey: "hello",\n                                    basicProperties: null,\n                                    body: body);\n            Console.WriteLine(" [x] Sent {0}", message);\n        }\n\n        Console.WriteLine(" Press [enter] to exit.");\n        Console.ReadLine();\n    }\n}\n')),Object(r.b)("p",null,"\u58f0\u660e\u961f\u5217\u662f\u5e42\u7b49\u7684, \u961f\u5217\u4ec5\u4ec5\u5728\u5b83\u4e0d\u5b58\u5728\u7684\u65f6\u5019\u624d\u88ab\u521b\u5efa.(Alan: \u5982\u679c\u961f\u5217A\u5df2\u7ecf\u88ab\u58f0\u660e\u8fc7, \u518d\u6b21\u58f0\u660e\u961f\u5217A, \u53ea\u662f\u7b80\u5355\u5730\u8fd4\u56de\u961f\u5217A, \u5e76\u4e0d\u4f1a\u518d\u521b\u5efa\u4e00\u6b21\u961f\u5217A. \u5982\u679c\u4e24\u6b21\u58f0\u660e\u7684\u961f\u5217A\u7684\u540d\u5b57\u76f8\u540c, \u5176\u4ed6\u53c2\u6570\u4e0d\u540c, \u90a3\u4e48\u7b2c\u4e8c\u6b21\u7684\u961f\u5217\u58f0\u660e\u4f1a\u629b\u5f02\u5e38.)\u6d88\u606f\u5185\u5bb9\u662f\u5b57\u8282\u6570\u7ec4, \u6240\u4ee5\u4f60\u53ef\u4ee5\u7f16\u7801\u4efb\u4f55\u4f60\u60f3\u53d1\u9001\u7684\u4e1c\u897f."),Object(r.b)("p",null,"\u5f53\u4e0a\u9762\u7684\u4ee3\u7801\u7ed3\u675f\u8fd0\u884c, channel\u4fe1\u9053\u548c\u8fde\u63a5\u90fd\u4f1a\u88ab\u56de\u6536."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://github.com/rabbitmq/rabbitmq-tutorials/blob/master/dotnet/Send.cs"},"\u8fd9\u662f\u5b8c\u6574\u7684Send.cs\u7c7b")),Object(r.b)("p",null,"\u53d1\u9001\u65e0\u6cd5\u6b63\u5e38\u6267\u884c!"),Object(r.b)("p",null,'\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528RabbitMQ, \u800c\u4e14\u770b\u4e0d\u5230\u6d88\u606f "Sent", \u4f60\u6293\u7834\u5934\u76ae\u4e5f\u60f3\u4e0d\u51fa\u54ea\u91cc\u51fa\u4e86\u95ee\u9898. \u4e5f\u8bb8\u662f\u4ee3\u7406\u6ca1\u6709\u8db3\u591f\u7684\u78c1\u76d8\u7a7a\u95f4\u5f00\u59cb\u6267\u884c(\u9ed8\u8ba4RabbitMQ\u9700\u8981\u81f3\u5c1150MB\u7684\u7a7a\u95f4), \u56e0\u6b64RabbitMQ\u62d2\u7edd\u63a5\u6536\u6d88\u606f. \u68c0\u67e5\u4ee3\u7406\u65e5\u5fd7\u6587\u4ef6, \u5982\u679c\u5fc5\u8981, \u786e\u8ba4\u548c\u964d\u4f4e\u9650\u5236. ',Object(r.b)("a",{parentName:"p",href:"http://www.rabbitmq.com/configure.html#config-items"},"\u914d\u7f6e\u6587\u4ef6\u6587\u6863"),"\u544a\u8bc9\u4f60\u5982\u679c\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"disk_free_limit"),"."),Object(r.b)("h2",{id:"receiving"},"Receiving"),Object(r.b)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u6211\u4eec\u7684\u53d1\u9001\u8005\u3002\u6211\u4eec\u7684\u63a5\u53d7\u8005\u4eceRabbitMQ\u63a5\u6536\u6d88\u606f\uff0c\u6240\u4ee5\u4e0d\u50cf\u53d1\u5e03\u4e00\u6761\u6d88\u606f\u7684\u53d1\u9001\u8005\uff0c\u6211\u4eec\u9700\u8981\u4fdd\u6301\u63a5\u6536\u8005\u6301\u7eed\u8fd0\u884c\u63a5\u6536\u6d88\u606f\u5e76\u6253\u5370\u51fa\u6765\u3002"),Object(r.b)("p",null,"receive.cs\u91cc\u7684using\u8bed\u53e5\u51e0\u4e4e\u548csend.cs\u4e00\u6837\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="receive.cs"',title:'"receive.cs"'},"using RabbitMQ.Client;\nusing RabbitMQ.Client.Events;\nusing System;\nusing System.Text;\n")),Object(r.b)("p",null," \u628a\u5b83\u8bbe\u7f6e\u7684\u6cb3\u53d1\u9001\u8005\u4e00\u6837\uff1b\u6211\u4eec\u6253\u5f00\u4e00\u4e2a\u8fde\u63a5\u548c\u901a\u9053\uff0c\u58f0\u660e\u4e00\u4e2a\u6211\u4eec\u5c06\u8981\u6d88\u8d39\u7684\u961f\u5217\u3002\u6ce8\u610f\u8fd9\u91cc\u8fd9\u4e2a\u961f\u5217\u9700\u8981\u548csend\u7a0b\u5e8f\u91cc\u7684\u5339\u914d\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="receive.cs"',title:'"receive.cs"'},'class Receive\n{\n    public static void Main()\n    {\n        var factory = new ConnectionFactory() { HostName = "localhost" };\n        using (var connection = factory.CreateConnection())\n        {\n            using (var channel = connection.CreateModel())\n            {\n                channel.QueueDeclare(queue: "hello",\n                                        durable: false,\n                                        exclusive: false,\n                                        autoDelete: false,\n                                        arguments: null);\n                ...\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"\u6ce8\u610f\u6211\u4eec\u5728\u8fd9\u91cc\u4e5f\u58f0\u660e\u4e86\u90a3\u4e2a\u961f\u5217\u3002\u56e0\u4e3a\u6211\u4eec\u4e5f\u8bb8\u5148\u4e8e\u53d1\u9001\u8005\u7a0b\u5e8f\u542f\u52a8\u63a5\u53d7\u8005\u7a0b\u5e8f\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u5c06\u4f1a\u544a\u8bc9\u670d\u52a1\u5668\u4ece\u90a3\u4e2a\u961f\u5217\u9012\u9001\u6d88\u606f\u7ed9\u6211\u4eec\u56e0\u4e3a\u670d\u52a1\u5668\u4f1a\u5f02\u6b65\u7ed9\u6211\u4eec\u63a8\u9001\u6d88\u606f\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u7231\u63d0\u4f9b\u56de\u8c03\u3002\u8fd9\u5c31\u662fEventingBasicConsumer.Received\u4e8b\u4ef6\u6240\u8981\u5904\u7406\u7684\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp",metastring:'title="receive.cs"',title:'"receive.cs"'},'using RabbitMQ.Client;\nusing RabbitMQ.Client.Events;\nusing System;\nusing System.Text;\n\nclass Receive\n{\n    public static void Main()\n    {\n        var factory = new ConnectionFactory() { HostName = "localhost" };\n        using(var connection = factory.CreateConnection())\n        using(var channel = connection.CreateModel())\n        {\n            channel.QueueDeclare(queue: "hello",\n                                    durable: false,\n                                    exclusive: false,\n                                    autoDelete: false,\n                                    arguments: null);\n\n            var consumer = new EventingBasicConsumer(channel);\n            consumer.Received += (model, ea) =>\n            {\n                var body = ea.Body;\n                var message = Encoding.UTF8.GetString(body);\n                Console.WriteLine(" [x] Received {0}", message);\n            };\n            channel.BasicConsume(queue: "hello",\n                                    noAck: true,\n                                    consumer: consumer);\n\n            Console.WriteLine(" Press [enter] to exit.");\n            Console.ReadLine();\n        }\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/dotnet/Receive.cs"},"Receive.cs \u6e90\u7801")),Object(r.b)("h2",{id:"putting-it-all-together"},"Putting It All Together"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u5f15\u7528RabbitMQ .NET\u5e93\u540c\u65f6\u7f16\u8bd1\u5b83\u4eec\u4e24\u4e2a. \u6211\u4eec\u4f7f\u7528\u547d\u4ee4\u884c(cmd.exe\u548ccsc)\u7f16\u8bd1\u548c\u8fd0\u884c\u4ee3\u7801\u3002\u53e6\u5916\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528VS\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},'$ csc /r:"RabbitMQ.Client.dll" Send.cs\n$ csc /r:"RabbitMQ.Client.dll" Receive.cs\n')),Object(r.b)("p",null,"\u7136\u540e\u8fd0\u884c\u53ef\u6267\u884c\u7a0b\u5e8f:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ Send.exe\n")),Object(r.b)("p",null,"\u7136\u540e\u8fd0\u884c\u63a5\u6536\u8005: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ Receive.exe\n")),Object(r.b)("p",null,"\u63a5\u6536\u8005\u5c06\u4f1a\u6253\u5370\u6765\u81eaRabbitMQ\u53d1\u9001\u8005\u7684\u6d88\u606f\u3002\u63a5\u6536\u8005\u5c06\u4f1a\u4fdd\u6301\u8fd0\u884c\uff0c\u7b49\u5f85\u6d88\u606f\uff08\u4f7f\u7528Ctrl+C\u505c\u6b62\uff09\uff0c\u6240\u4ee5\u8bd5\u7740\u4ece\u53e6\u4e00\u4e2a\u7ec8\u7aef\u8fd0\u884c\u53d1\u9001\u8005\u3002"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u60f3\u68c0\u67e5\u961f\u5217\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"RabbitMQctl list_queues"),"."),Object(r.b)("p",null,"\u662f\u65f6\u5019\u79fb\u6b65\u7b2c\u4e8c\u4e2a\u6559\u7a0b\u5efa\u7acb\u7b80\u5355\u5de5\u4f5c\u961f\u5217\u4e86."))}s.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),s=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return t?l.a.createElement(d,i(i({ref:n},o),{},{components:t})):l.a.createElement(d,i({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<r;o++)c[o]=t[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);