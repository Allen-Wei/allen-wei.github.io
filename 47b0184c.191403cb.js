(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),c=(t(0),t(280)),a={title:"Routing",hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null,keywords:["rabbitmq"]},o={unversionedId:"articles/rabbitmq-guides/4-Routing",id:"articles/rabbitmq-guides/4-Routing",isDocsHomePage:!1,title:"Routing",description:"\u82f1\u6587\u539f\u6587",source:"@site/src/docs/articles/rabbitmq-guides/4-Routing.md",slug:"/articles/rabbitmq-guides/4-Routing",permalink:"/docs/articles/rabbitmq-guides/4-Routing",editUrl:null,version:"current",sidebar:"docs",previous:{title:"Publish/Subscribe",permalink:"/docs/articles/rabbitmq-guides/3-Publish-Subscribe"},next:{title:"Topics",permalink:"/docs/articles/rabbitmq-guides/5-Topic"}},l=[{value:"Bindings",id:"bindings",children:[]},{value:"Direct exchange",id:"direct-exchange",children:[]},{value:"Multiple bindings",id:"multiple-bindings",children:[]},{value:"Emitting logs",id:"emitting-logs",children:[]},{value:"Subscribing",id:"subscribing",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}],b={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://www.rabbitmq.com/tutorials/tutorial-four-dotnet.html"},"\u82f1\u6587\u539f\u6587")),Object(c.b)("p",null,"\u5728",Object(c.b)("a",{parentName:"p",href:"/docs/articles/rabbitmq-guides/3-Publish-Subscribe"},"\u4e0a\u4e00\u6559\u7a0b"),"\u6211\u4eec\u5efa\u7acb\u4e86\u7b80\u5355\u7684\u65e5\u5fd7\u7cfb\u7edf\u3002\u6211\u4eec\u80fd\u591f\u5411\u591a\u4e2a\u63a5\u6536\u8005\u5e7f\u64ad\u65e5\u5fd7\u6d88\u606f\u3002"),Object(c.b)("p",null,"\u5728\u8fd9\u4e2a\u6559\u7a0b\u91cc\u6211\u4eec\u5c06\u4f1a\u7ee7\u7eed\u7ed9\u5b83\u6dfb\u52a0\u7279\u6027\uff1a\u6211\u4eec\u5c06\u4f1a\u4f7f\u4ec5\u4ec5\u8ba2\u9605\u6d88\u606f\u7684\u67d0\u4e2a\u5b50\u96c6\u6210\u4e3a\u53ef\u80fd\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u80fd\u591f\u4e25\u91cd\u9519\u8bef\u7684\u6d88\u606f\u5199\u5165\u5230\u65e5\u5fd7\u6587\u4ef6\uff08\u4fdd\u5b58\u5230\u78c1\u76d8\u7a7a\u95f4\uff09\uff0c\u671f\u95f4\u4f9d\u7136\u80fd\u591f\u6253\u5370\u6240\u6709\u7684\u65e5\u5fd7\u6d88\u606f\u5230\u63a7\u5236\u53f0\u3002"),Object(c.b)("h2",{id:"bindings"},"Bindings"),Object(c.b)("p",null," \u5728\u4e0a\u4e00\u4e2a\u4f8b\u5b50\u6211\u4eec\u521b\u5efa\u7ed1\u5b9a\u3002\u4f60\u4e5f\u8bb8\u50cf\u4e0b\u9762\u4e00\u6837\u8c03\u7528\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'channel.QueueBind(queue: queueName, exchange: "logs", routingKey: "");\n')),Object(c.b)("p",null,"\u7ed1\u5b9a\u662f\u4ea4\u6362\u5668\u548c\u961f\u5217\u4e4b\u95f4\u7684\u4e00\u79cd\u5173\u7cfb\u3002\u53ef\u4ee5\u7b80\u5355\u7684\u8bfb\u4f5c\uff1a\u67d0\u4e2a\u961f\u5217\u5bf9\u67d0\u4e2a\u4ea4\u6362\u5668\u7684\u6d88\u606f\u611f\u5174\u8da3\u3002"),Object(c.b)("p",null,"\u7ed1\u5b9a\u9700\u8981\u989d\u5916\u7684",Object(c.b)("inlineCode",{parentName:"p"},"routingKey"),"\u53c2\u6570\u3002\u4e3a\u4e86\u907f\u514d\u548c\u4e00\u4e2aBasicPublish\u7684\u4e00\u4e2a\u53c2\u6570\u4ea7\u751f\u6df7\u4e71\u6211\u4eec\u628a\u5b83\u79f0\u4f5cbinding key\uff08\u7ed1\u5b9a\u952e\uff09\u3002\u4e0b\u9762\u662f\u6211\u4eec\u5982\u4f55\u80fd\u591f\u901a\u8fc7\u4e00\u4e2a\u952e\u521b\u5efa\u7ed1\u5b9a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-csharp"},'channel.QueueBind(queue: queueName, exchange: "direct_logs", routingKey: "black");\n')),Object(c.b)("p",null,"\u8fd9\u610f\u5473\u7740\u7ed1\u5b9a\u952e\u4f9d\u8d56\u4e8e\u4ea4\u6362\u5668\u7c7b\u578b\u3002\u6211\u4eec\u4e4b\u524d\u4f7f\u7528\u7684fanout\u4ea4\u6362\u5668\u4f1a\u7b80\u5355\u5730\u5ffd\u7565\u8fd9\u4e2a\u503c\u3002"),Object(c.b)("h2",{id:"direct-exchange"},"Direct exchange"),Object(c.b)("p",null,"\u6211\u4eec\u4e0a\u4e00\u6559\u7a0b\u7684\u65e5\u5fd7\u7cfb\u7edf\u5e7f\u64ad\u6240\u6709\u7684\u6d88\u606f\u7ed9\u6240\u6709\u7684\u6d88\u8d39\u8005\u3002\u6211\u4eec\u60f3\u6269\u5c55\u65e5\u5fd7\u7cfb\u7edf\uff0c\u5141\u8bb8\u57fa\u4e8e\u5b83\u4eec\u7684\u4e25\u91cd\u7ea7\u522b\u8fc7\u6ee4\u6d88\u606f\u3002\u6bd4\u5982\u6211\u4eec\u60f3\u8ba9\u65e5\u5fd7\u5199\u5165\u5230\u78c1\u76d8\u7684\u811a\u672c\u4ec5\u63a5\u6536\u4e25\u91cd\u9519\u8bef\u7684\u65e5\u5fd7\uff0c\u4e0d\u4f1a\u6d6a\u8d39\u78c1\u76d8\u7a7a\u95f4\u5728warning\u548cinfo\u7ea7\u522b\u7684\u65e5\u5fd7\u6d88\u606f\u4e0a\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u6b63\u4f7f\u7528\u7684fanout\u4ea4\u6362\u5668\u5e76\u6ca1\u6709\u63d0\u4f9b\u7ed9\u6211\u4eec\u8fc7\u591a\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\uff1a\u5b83\u4ec5\u80fd\u80dc\u4efb\u65e0\u8111\u7684\u5e7f\u64ad\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528direct\u4ea4\u6362\u5668\u4ee3\u66ff\u3002direct\u4ea4\u6362\u5668\u80cc\u540e\u7684\u8def\u7531\u7b97\u6cd5\u662f\u7b80\u5355\u7684\uff1a\u4e00\u4e2a\u6d88\u606f\u8981\u5230\u8fbe\u4e00\u4e2a\u961f\u5217\uff0c\u90a3\u4e48\u8fd9\u4e2a\u961f\u5217\u7684\u7ed1\u5b9a\u952e\uff08binding key\uff09\u9700\u8981\u5b8c\u5168\u5339\u914d\u6d88\u606f\u7684\u8def\u7531\u952e\uff08routing key\uff09\u3002"),Object(c.b)("p",null,"\u4e3a\u4e86\u56fe\u89e3\u8fd9\u4e2a\u7b97\u6cd5\uff0c\u8003\u8651\u4e0b\u9762\u7684\u7ec4\u7ec7\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/direct-exchange.png",alt:"direct exchange"})),Object(c.b)("p",null,"\u5728\u4e0a\u9762\u7684\u8bbe\u7f6e\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230",Object(c.b)("inlineCode",{parentName:"p"},"direct"),"\u4ea4\u6362\u5668\u7c7b\u578bx\u7ed1\u5b9a\u4e86\u4e24\u4e2a\u961f\u5217\u3002\u7b2c\u4e00\u4e2a\u961f\u5217\u4f7f\u7528\u7ed1\u5b9a\u952e",Object(c.b)("inlineCode",{parentName:"p"},"orange"),"\u7ed1\u5b9a\uff0c\u7b2c\u4e8c\u4e2a\u6709\u4e24\u4e2a\u7ed1\u5b9a, \u5176\u4e2d\u4e00\u4e2a\u7ed1\u5b9a\u952e\u662f",Object(c.b)("inlineCode",{parentName:"p"},"black"),", \u53e6\u5916\u4e00\u4e2a\u7ed1\u5b9a\u952e\u662f",Object(c.b)("inlineCode",{parentName:"p"},"green"),"."),Object(c.b)("p",null,"\u5728\u4e0a\u8ff0\u7684\u914d\u7f6e\u91cc\uff0c\u4e00\u4e2a\u8def\u7531\u952e\u4e3aorange\u7684\u6d88\u606f\u53d1\u5e03\u5230\u4ea4\u6362\u5668\u5c06\u4f1a\u88ab\u8def\u7531\u5230Q1\u961f\u5217\u3002\u8def\u7531\u952e\u4e3ablack\u548cgreen\u7684\u6d88\u606f\u5c06\u4f1a\u88ab\u8def\u7531\u5230Q2\u3002\u5176\u4ed6\u8def\u7531\u952e\u7684\u6d88\u606f\u5c06\u4f1a\u88ab\u4e22\u5f03\u3002"),Object(c.b)("h2",{id:"multiple-bindings"},"Multiple bindings"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/direct-exchge-multiple.png",alt:"multiple bindings"})),Object(c.b)("p",null,"\u4f7f\u7528\u76f8\u540c\u7684\u7ed1\u5b9a\u952e\u7ed1\u5b9a\u591a\u4e2a\u961f\u5217\u662f\u5b8c\u5168\u5408\u6cd5\u7684\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u91cc\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7ed1\u5b9a\u952eblack\u5728X\u548cQ1\u4e4b\u95f4\u6dfb\u52a0\u7ed1\u5b9a\u3002\u8fd9\u6837direct\u4ea4\u6362\u5668\u5c06\u4f1a\u8868\u73b0\u7684\u548cfanout\u7c7b\u4f3c\uff0c\u5e7f\u64ad\u6240\u6709\u7684\u6d88\u606f\u5230\u6240\u6709\u5339\u914d\u7684\u961f\u5217\u3002\u8def\u7531\u952e\u4e3ablack\u7684\u6d88\u606f\u5c06\u4f1a\u88ab\u9012\u9001\u5230Q1\u548cQ2\u961f\u5217\u3002"),Object(c.b)("h2",{id:"emitting-logs"},"Emitting logs"),Object(c.b)("p",null,"\u6211\u4eec\u5c06\u4f1a\u4e3a\u6211\u4eec\u7684\u65e5\u5fd7\u7cfb\u7edf\u4f7f\u7528\u8fd9\u4e2a\u6a21\u578b\u3002\u6211\u4eec\u5c06\u4f1a\u53d1\u9001\u6d88\u606f\u5230direct\u4ea4\u6362\u5668\u53d6\u4ee3fanout\u4ea4\u6362\u5668\u3002\u6211\u4eec\u5c06\u4f1a\u63d0\u4f9b\u65e5\u5fd7\u4e25\u91cd\u7ea7\u522b\u4f5c\u4e3arouting key\u3002\u8fd9\u6837\u63a5\u6536\u811a\u672c\u5c31\u80fd\u591f\u7b5b\u9009\u5b83\u60f3\u63a5\u6536\u7684\u4e25\u91cd\u7ea7\u522b\u7684\u65e5\u5fd7\u3002\u8ba9\u6211\u4eec\u5148\u5173\u6ce8\u53d1\u9001\u65e5\u5fd7\u3002"),Object(c.b)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u4ea4\u6362\u5668\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'channel.ExchangeDeclare(exchange: "direct_logs", type: "direct");\n')),Object(c.b)("p",null,"\u7136\u540e\u6211\u4eec\u51c6\u5907\u53d1\u9001\u6d88\u606f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'var body = Encoding.UTF8.GetBytes(message);\nchannel.BasicPublish(exchange: "direct_logs",\n                     routingKey: severity,\n                     basicProperties: null,\n                     body: body);\n')),Object(c.b)("p",null,"\u4e3a\u4e86\u7b80\u5355\u6211\u4eec\u5047\u8bbe\u4e25\u91cd\u7ea7\u522b\u53ef\u4ee5\u662finfo\uff0cwarning\uff0cerror\u4e2d\u7684\u4e00\u4e2a\u3002\t\t\t\t\t\t"),Object(c.b)("h2",{id:"subscribing"},"Subscribing"),Object(c.b)("p",null,"\u63a5\u6536\u6d88\u606f\u5c31\u50cf\u4e0a\u4e00\u6559\u7a0b\u91cc\u7684\u63a5\u6536\u5f02\u5e38\u4fe1\u606f\u90a3\u6837\u8fd0\u884c\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6211\u4eec\u611f\u5174\u8da3\u7684\u65e5\u5fd7\u7ea7\u522b\u6211\u4eec\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ed1\u5b9a\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'var queueName = channel.QueueDeclare().QueueName;\n\nforeach(var severity in args)\n{\n    channel.QueueBind(queue: queueName,\n                      exchange: "direct_logs",\n                      routingKey: severity);\n}\n')),Object(c.b)("h2",{id:"putting-it-all-together"},"Putting it all together"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://www.rabbitmq.com/img/tutorials/python-four.png",alt:"putting it all together"})),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"EmitLogDirect.cs"),"\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'using System;\nusing System.Linq;\nusing RabbitMQ.Client;\nusing System.Text;\n\nclass EmitLogDirect\n{\n    public static void Main(string[] args)\n    {\n        var factory = new ConnectionFactory() { HostName = "localhost" };\n        using(var connection = factory.CreateConnection())\n        using(var channel = connection.CreateModel())\n        {\n            channel.ExchangeDeclare(exchange: "direct_logs",\n                                    type: "direct");\n\n            var severity = (args.Length > 0) ? args[0] : "info";\n            var message = (args.Length > 1)\n                          ? string.Join(" ", args.Skip( 1 ).ToArray())\n                          : "Hello World!";\n            var body = Encoding.UTF8.GetBytes(message);\n            channel.BasicPublish(exchange: "direct_logs",\n                                 routingKey: severity,\n                                 basicProperties: null,\n                                 body: body);\n            Console.WriteLine(" [x] Sent \'{0}\':\'{1}\'", severity, message);\n        }\n\n        Console.WriteLine(" Press [enter] to exit.");\n        Console.ReadLine();\n    }\n}\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ReceiveLogsDirect.cs"),"\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'using System;\nusing RabbitMQ.Client;\nusing RabbitMQ.Client.Events;\nusing System.Text;\n\nclass ReceiveLogsDirect\n{\n    public static void Main(string[] args)\n    {\n        var factory = new ConnectionFactory() { HostName = "localhost" };\n        using(var connection = factory.CreateConnection())\n        using(var channel = connection.CreateModel())\n        {\n            channel.ExchangeDeclare(exchange: "direct_logs",\n                                    type: "direct");\n            var queueName = channel.QueueDeclare().QueueName;\n\n            if(args.Length < 1)\n            {\n                Console.Error.WriteLine("Usage: {0} [info] [warning] [error]",\n                                        Environment.GetCommandLineArgs()[0]);\n                Console.WriteLine(" Press [enter] to exit.");\n                Console.ReadLine();\n                Environment.ExitCode = 1;\n                return;\n            }\n\n            foreach(var severity in args)\n            {\n                channel.QueueBind(queue: queueName,\n                                  exchange: "direct_logs",\n                                  routingKey: severity);\n            }\n\n            Console.WriteLine(" [*] Waiting for messages.");\n\n            var consumer = new EventingBasicConsumer(channel);\n            consumer.Received += (model, ea) =>\n            {\n                var body = ea.Body;\n                var message = Encoding.UTF8.GetString(body);\n                var routingKey = ea.RoutingKey;\n                Console.WriteLine(" [x] Received \'{0}\':\'{1}\'",\n                                  routingKey, message);\n            };\n            channel.BasicConsume(queue: queueName,\n                                 noAck: true,\n                                 consumer: consumer);\n\n            Console.WriteLine(" Press [enter] to exit.");\n            Console.ReadLine();\n        }\n    }\n}\n')),Object(c.b)("p",null,"\u50cf\u5f80\u5e38\u4e00\u6837\u7f16\u8bd1\u4ee3\u7801\uff08\u89c1\u7b2c\u4e00\u7bc7\u6559\u7a0b\u7684\u7f16\u8bd1\u5efa\u8bae\uff09: "),Object(c.b)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u4fdd\u5b58warning\u548cerror\uff08\u800c\u4e0d\u662finfo\uff09\u7ea7\u522b\u7684\u65e5\u5fd7\u6d88\u606f\u5230\u6587\u4ef6\uff0c\u53ea\u9700\u8981\u6253\u5f00\u63a7\u5236\u53f0\u5e76\u952e\u5165\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ ReceiveLogsDirect.exe warning error > logs_from_rabbit.log\n")),Object(c.b)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u663e\u793a\u5668\u4e0a\u67e5\u770b\u6240\u6709\u7684\u65e5\u5fd7\u6d88\u606f\uff0c\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\u5e76\u5982\u4e0b\u64cd\u4f5c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ ReceiveLogsDirect.exe info warning error\n [*] Waiting for logs. To exit press CTRL+C\n")),Object(c.b)("p",null,"\u7136\u540e\uff0c\u6bd4\u5982\u53d1\u9001\u4e00\u4e2aerror\u65e5\u5fd7\u6d88\u606f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ EmitLogDirect.exe error \"Run. Run. Or it will explode.\"\n [x] Sent 'error':'Run. Run. Or it will explode.'\n")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://github.com/rabbitmq/rabbitmq-tutorials/blob/master/dotnet/EmitLogDirect.cs"},"EmitLogDirect.cs source")," ",Object(c.b)("a",{parentName:"p",href:"http://github.com/rabbitmq/rabbitmq-tutorials/blob/master/dotnet/ReceiveLogsDirect.cs"},"ReceiveLogsDirect.cs source")))}u.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),u=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),p=r,d=s["".concat(a,".").concat(p)]||s[p]||g[p]||c;return t?i.a.createElement(d,o(o({ref:n},b),{},{components:t})):i.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var b=2;b<c;b++)a[b]=t[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);