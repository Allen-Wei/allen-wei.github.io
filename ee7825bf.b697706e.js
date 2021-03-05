(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var r=n(3),a=(n(0),n(165));const i={title:"ASP.Net \u8eab\u4efd\u6a21\u5757\u4ecb\u7ecd",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:[".net","asp.net"]},l={permalink:"/blog/2019/05/14/\u8eab\u4efd\u7cfb\u7edf",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2019-05-14-\u8eab\u4efd\u7cfb\u7edf.md",source:"@site/blog/2019-05-14-\u8eab\u4efd\u7cfb\u7edf.md",description:"\u539f\u6587",date:"2019-05-14T00:00:00.000Z",tags:[{label:".net",permalink:"/blog/tags/net"},{label:"asp.net",permalink:"/blog/tags/asp-net"}],title:"ASP.Net \u8eab\u4efd\u6a21\u5757\u4ecb\u7ecd",readingTime:1.835,truncated:!0,prevItem:{title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"},nextItem:{title:"2015\u5e7412\u6708 \u968f\u4fbf\u54ea\u4e00\u5929",permalink:"/blog/2015/12/01/blog"}},b=[{value:"\u524d\u8a00(Preface)",id:"\u524d\u8a00preface",children:[]},{value:"\u80cc\u666f: ASP.Net\u4f1a\u5458\u7cfb\u7edf(ASP.Net Membership)",id:"\u80cc\u666f-aspnet\u4f1a\u5458\u7cfb\u7edfaspnet-membership",children:[{value:"ASP.Net Simple Membership",id:"aspnet-simple-membership",children:[]},{value:"ASP.Net Universal Providers",id:"aspnet-universal-providers",children:[]},{value:"ASP.Net Identity",id:"aspnet-identity",children:[]},{value:"ASP.Net Identity\u8d77\u6b65",id:"aspnet-identity\u8d77\u6b65",children:[]}]}],p={toc:b};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.asp.net/identity/overview/getting-started/introduction-to-aspnet-identity"},"\u539f\u6587")),Object(a.b)("h3",{id:"\u524d\u8a00preface"},"\u524d\u8a00(Preface)"),Object(a.b)("p",null,"ASP.Net \u4f1a\u5458\u7cfb\u7edf\u57282005\u5e74\u53d1\u5e03ASP.Net 2.0\u7684\u65f6\u5019\u540c\u65f6\u53d1\u5e03(\u4ecb\u7ecd), \u800c\u4e14\u4ece\u90a3\u4ee5\u540eWeb\u5e94\u7528\u5728\u5904\u7406\u8ba4\u8bc1\u548c\u6388\u6743\u65b9\u9762\u5df2\u7ecf\u53d1\u751f\u4e86\u5f88\u591a\u6539\u53d8.\u5bf9\u4e8e\u4f1a\u5458\u7cfb\u7edf\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u5b50\u7684, ASP.Net Identity\u662f\u4e00\u4e2a\u65b0\u7684\u5c1d\u8bd5, \u5f53\u4f60\u4e3aWeb, Phone, Tablet(\u5e73\u677f)\u521b\u5efa\u73b0\u4ee3\u5e94\u7528\u7684\u65f6\u5019.\n\u8fd9\u7bc7\u6587\u7ae0\u662f\u7531Pranav Rastogi, Jon Galloway, Tom Dykstra, and Rick Anderson\u6240\u5199."),Object(a.b)("h2",{id:"\u80cc\u666f-aspnet\u4f1a\u5458\u7cfb\u7edfaspnet-membership"},"\u80cc\u666f: ASP.Net\u4f1a\u5458\u7cfb\u7edf(ASP.Net Membership)"),Object(a.b)("p",null,"\u57282005\u5e74, \u4e3a\u4e86\u89e3\u51b3\u5927\u90e8\u5206\u7f51\u7ad9\u5bf9\u4f1a\u5458\u529f\u80fd\u7684\u9700\u6c42, ASP.Net Membership\u88ab\u8bbe\u8ba1\u51fa\u6765, \u5b83\u9700\u8981\u8868\u5355\u8ba4\u8bc1\u548c\u5305\u542b\u7528\u6237\u540d,\u5bc6\u7801\u548c\u4e2a\u4eba\u4fe1\u606f\u7684SQL Server\u6570\u636e\u5e93. \u73b0\u5728\u5bf9\u4e8eWeb\u5e94\u7528, \u6709\u66f4\u52a0\u5e7f\u6cdb(broader)\u7684\u53ef\u4f9b\u9009\u62e9\u6570\u636e\u5b58\u50a8\u65b9\u5f0f, \u800c\u4e14\u5927\u90e8\u5206\u5f00\u53d1\u8005\u60f3\u4f7f\u4ed6\u4eec\u7684\u7ad9\u70b9\u4f7f\u7528\u793e\u4ea4\u767b\u5f55\u6765\u63d0\u4f9b\u8ba4\u8bc1\u548c\u6388\u6743\u529f\u80fd. \u4e0b\u9762\u4ecb\u7ecd\u7684ASP.Net Membership\u7684\u8bbe\u8ba1\u9650\u5236\u4f7f\u4e0a\u8ff0\u7684\u9700\u6c42\u5b9e\u73b0\u53d8\u5f97\u5f88\u56f0\u96be:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u67b6\u6784\u88ab\u8bbe\u8ba1\u6210\u4f7f\u7528SQL Server, \u800c\u4e14\u4f60\u4e0d\u53ef\u4ee5\u6539\u53d8. \u4f60\u53ef\u4ee5\u6dfb\u52a0\u914d\u7f6e\u4fe1\u606f, \u4f46\u662f\u5176\u4ed6\u6570\u636e\u88ab\u653e\u5728\u4e86\u5176\u4ed6\u8868\u4e2d, \u4f7f\u7528\u4efb\u4f55\u624b\u6bb5(means)\u8bbf\u95ee\u8fd9\u4e9b\u4fe1\u606f\u90fd\u662f\u56f0\u96be\u7684, \u9664\u975e\u901a\u8fc7Profile Provider API(\u914d\u7f6e\u63d0\u4f9b\u5668API)."),Object(a.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5668\u7cfb\u7edf\u80fd\u591f\u8ba9\u4f60\u6539\u53d8\u80cc\u540e\u7684\u6570\u636e\u5b58\u50a8\u65b9\u5f0f, \u4f46\u662f\u7cfb\u7edf\u88ab\u8bbe\u8ba1\u6210\u5047\u8bbe\u4f60\u4f7f\u7528\u7684\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93. \u4f60\u53ef\u4ee5\u5b9e\u73b0\u5728\u975e\u5173\u7cfb\u578b\u5b58\u50a8\u673a\u5236\u5b58\u50a8\u4f1a\u5458\u4fe1\u606f\u7684\u63d0\u4f9b\u5668, \u6bd4\u5982 Azure Storage Tables, \u4f46\u662f\u4e4b\u540e\u4f60\u5c31\u4e0d\u5f97\u4e0d\u56f4\u7ed5\u7740\u5173\u7cfb\u578b\u8bbe\u8ba1\u6765\u5199\u5927\u91cf\u7684\u4ee3\u7801, \u800c\u4e14\u5bf9\u4e8e\u4e0d\u9002\u7528\u4e8e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u65b9\u6cd5\u9700\u8981\u5199\u5927\u91cf\u7684System.NotImplementationException\u5f02\u5e38\u629b\u51fa."),Object(a.b)("li",{parentName:"ul"},"\u81ea\u4ece\u767b\u9646/\u767b\u51fa\u529f\u80fd\u662f\u57fa\u4e8e\u8868\u5355\u8ba4\u8bc1\u7684, \u4f1a\u5458\u7cfb\u7edf\u5c31\u4e0d\u80fd\u591f\u4f7f\u7528OWIN, OWIN\u5305\u542b\u4e86\u5bf9\u4e8e\u8ba4\u8bc1\u7684\u4e2d\u95f4\u4ef6, \u4e5f\u5305\u62ec\u4e86\u5bf9\u4e8e\u5916\u90e8\u8eab\u4efd\u7cfb\u7edf(\u50cfMicrsoft Account, Facebook, Google, Twitter)\u767b\u9646\u7684\u652f\u6301, \u800c\u4e14log-ins\u53ef\u4ee5\u4ece\u6d3b\u52a8\u76ee\u5f55\u6216\u8005Azure\u6d3b\u52a8\u76ee\u5f55\u4f7f\u7528\u7ec4\u7ec7\u8d26\u53f7. OWIN\u4e5f\u5305\u62ec\u4e86\u5bf9\u4e8eOAuth 2.0\uff0c JWT(JSON Web Token)\u548cCORS(Corss Origin Request Source)\u7684\u652f\u6301.  (Alan: ",Object(a.b)("a",{parentName:"li",href:"http://stackoverflow.com/questions/23674613/using-jwt-to-implement-authentication-on-asp-net-web-api"},"Using JWT to implement Authentication on Asp.net web api"),")")),Object(a.b)("h3",{id:"aspnet-simple-membership"},"ASP.Net Simple Membership"),Object(a.b)("p",null,"ASP.net simple membership \u88ab\u5f00\u53d1\u6210ASP.Net Web Pages\u7684\u4f1a\u5458\u7cfb\u7edf. \u5b83\u968f\u540cWebMatrix\u548cVisual Studio 2010 SP1\u4e00\u8d77\u53d1\u5e03. Simple Membership\u7684\u76ee\u6807\u662f\u4f7fWeb Pages\u5e94\u7528\u6dfb\u52a0\u4f1a\u5458\u529f\u80fd\u66f4\u52a0\u5bb9\u6613.\nSimple Membership \u4f7f\u81ea\u5b9a\u4e49\u7528\u6237\u914d\u7f6e\u4fe1\u606f\u66f4\u52a0\u5bb9\u6613, \u4f46\u662f\u5728\u548cASP.Net Membership\u5171\u4eab(Alan: \u5e94\u8be5\u662f\u5171\u5b58\u7684\u610f\u601d)\u6709\u4e00\u4e9b\u5176\u4ed6\u95ee\u9898, \u800c\u4e14\u6709\u4e00\u4e9b\u9650\u5236:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5f88\u96be\u5728\u975e\u5173\u7cfb\u578b\u6570\u636e\u5b58\u50a8\u4e2d\u6301\u4e45\u5316\u4f1a\u5458\u7cfb\u7edf."),Object(a.b)("li",{parentName:"ul"},"\u4f60\u4e0d\u53ef\u4ee5\u4f7f\u7528OWIN."),Object(a.b)("li",{parentName:"ul"},"\u4ed6\u4e0d\u80fd\u548c\u73b0\u6709\u5df2\u7ecf\u5b58\u5728\u7684ASP.Net Mebership\u5b9e\u73b0(provider)\u5f88\u597d\u5730\u5de5\u4f5c, \u800c\u4e14\u5b83\u4e0d\u53ef\u6269\u5c55.")),Object(a.b)("h3",{id:"aspnet-universal-providers"},"ASP.Net Universal Providers"),Object(a.b)("p",null,"\u4e3a\u4e86\u80fd\u591f\u5728Microsoft Azure SQL Database\u4e2d\u6301\u4e45\u5316\u4f1a\u5458\u4fe1\u606f, ASP.Net Universal Provider(\u901a\u7528\u63d0\u4f9b\u5668)\u88ab\u5f00\u53d1\u51fa\u6765, \u800c\u4e14\u5b83\u4e5f\u53ef\u4ee5\u548cSQL Server Compact\u4e00\u8d77\u5de5\u4f5c. Universal Providers \u4f9d\u8d56\u4e8eEF Code First, \u8fd9\u610f\u5473\u7740Universal Providers\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301EF\u7684\u5b58\u50a8\u65b9\u5f0f\u4e0a\u6301\u4e45\u5316\u6570\u636e(Alan: \u4e5f\u5c31\u662f\u4f7f\u7528). \u4f7f\u7528Universal Provider, \u6570\u636e\u5e93\u67b6\u6784\u4e5f\u53d8\u7684\u975e\u5e38\u7b80\u6d01.\nUniversal Providers\u662f\u57fa\u4e8eASP.Net Membership\u57fa\u7840\u8bbe\u65bd, \u56e0\u6b64, \u4f5c\u4e3aSQLMembership Provider, Universal Provider\u4e5f\u5e26\u6765\u4e86\u540c\u6837\u7684\u9650\u5236. \u90a3\u5c31\u662f\u4ed6\u4eec\u90fd\u88ab\u8bbe\u8ba1\u6210\u9488\u5bf9\u5173\u7cfb\u578b\u6570\u636e\u5e93, \u800c\u4e14\u5f88\u96be\u81ea\u5b9a\u4e49\u914d\u7f6e\u548c\u7528\u6237\u4fe1\u606f. \u8fd9\u4e9b\u63d0\u4f9b\u5668\u4e5f\u4e00\u76f4\u4f7f\u7528\u8868\u5355\u8ba4\u8bc1\u7684\u767b\u5165/\u767b\u51fa\u529f\u80fd."),Object(a.b)("h3",{id:"aspnet-identity"},"ASP.Net Identity"),Object(a.b)("p",null,"ASP.Net\u7684\u4f1a\u5458\u7cfb\u7edf\u7ecf\u8fc7\u8fd9\u4e48\u591a\u5e74\u7684\u8fdb\u5316, ASP.Net\u56e2\u961f\u4ece\u5ba2\u6237\u90a3\u91cc\u83b7\u5f97\u4e86\u5e76\u5438\u6536\u4e86\u5f88\u591a\u53cd\u9988.\n\u5982\u679c\u7528\u6237\u4f7f\u7528\u5b83\u4eec\u6ce8\u518c\u65f6\u586b\u5199\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u6765\u767b\u9646\u7684\u5047\u8bbe\u4e0d\u518d\u6709\u6548(Alan: \u5927\u6982\u610f\u601d\u5e94\u8be5\u662f\u7528\u6237\u90fd\u4e0d\u518d\u901a\u8fc7\u6ce8\u518c\u7136\u540e\u767b\u9646\u7684\u5f62\u5f0f\u6765\u8bbf\u95ee\u7f51\u7ad9). Web\u5c31\u53d8\u5f97\u66f4\u52a0\u793e\u4ea4(\u793e\u4f1a\u5316). \u7528\u6237\u901a\u8fc7\u793e\u4ea4\u9891\u9053(\u6bd4\u5982FB, Twitter, \u6216\u8005\u5176\u4ed6\u793e\u4ea4\u7f51\u7ad9)\u5b9e\u65f6\u4e0e\u4ed6\u4eba\u4ea4\u6d41. \u5f00\u53d1\u8005\u7cfb\u7edf\u7528\u6237\u80fd\u591f\u4f7f\u7528\u5b83\u4eec\u7684\u793e\u4ea4\u8d26\u53f7\u6765\u767b\u9646, \u8fd9\u6837\u7528\u6237\u5728\u4ed6\u4eec(\u5f00\u53d1\u8005)\u7684\u7f51\u7ad9\u4e0a\u80fd\u591f\u83b7\u5f97\u66f4\u52a0\u4e30\u5bcc\u7684\u4f53\u9a8c. \u4e00\u4e2a\u73b0\u4ee3\u7684\u5e94\u7528\u5fc5\u987b\u62e5\u6709\u57fa\u4e8e\u8df3\u8f6c-\u767b\u9646\u7684\u8ba4\u8bc1\u63d0\u4f9b\u5668(\u6bd4\u5982FB, Twitter\u6216\u8005\u5176\u4ed6)(Alan: \u5c31\u662f\u7b2c\u4e09\u65b9\u767b\u9646).\n\u56e0\u4e3aWeb\u5f00\u53d1\u7684\u6f14\u8fdb, Web\u5f00\u53d1\u51fa\u73b0\u4e86\u4e00\u4e9b\u8bbe\u8ba1\u6a21\u5f0f/\u7f51\u7ad9\u67b6\u6784.(Alan: \u5927\u6982\u662f\u8fd9\u4e2a\u610f\u601d) \u5e94\u7528\u4ee3\u7801\u7684\u5355\u5143\u6d4b\u8bd5\u53d8\u6210\u4e86\u5e94\u7528\u5f00\u53d1\u8005\u7684\u6838\u5fc3\u90e8\u5206. \u57282008\u5e74, ASP.Net\u6dfb\u52a0\u4e86\u57fa\u4e8eMVC\u6a21\u5f0f\u7684\u65b0\u6846\u67b6, \u4f5c\u4e3a\u5e2e\u52a9\u5f00\u53d1\u8005\u5f00\u53d1\u53ef\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u7684ASP.Net\u5e94\u7528\u7684\u90e8\u5206. \u5e0c\u671b\u80fd\u591f\u5bf9\u5e94\u7528\u7a0b\u5e8f\u7684\u903b\u8f91\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u7684\u5f00\u53d1\u8005\u540c\u6837\u4e5f\u5e0c\u671b\u80fd\u591f\u5bf9\u4f1a\u5458\u7cfb\u7edf\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5.\n\u8003\u8651\u5230Web\u5e94\u7528\u5f00\u53d1\u4e2d\u7684\u8fd9\u4e9b\u6539\u53d8, Asp.Net Identity\u4e3a\u4e86\u5b9e\u73b0\u4e00\u4e0b\u76ee\u6807\u88ab\u5f00\u53d1\u51fa\u6765:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u4e00\u7edf\u6c5f\u6e56\u7684ASP.Net Identity\u7cfb\u7edf"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ASP.Net Identity \u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709\u7684ASP.Net\u6846\u67b6, \u6bd4\u5982ASP.Net MVC, Web Forms, Web Pages, Web API\u548cSignalR\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u4f60\u521b\u5efaWeb, Phone, Store\u6216\u8005\u6df7\u5408\u5e94\u7528\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u4f7f\u7528ASP.Net Identity."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u6570\u636e\u6613\u4e8e\u6269\u5c55(Ease of plugging in profile data about the user)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u63a7\u5236\u7528\u6237\u548c\u914d\u7f6e\u4fe1\u606f\u7684\u67b6\u6784(Alan: \u4e00\u822c\u6307\u8868\u7ed3\u6784). \u6bd4\u5982, \u5f53\u7528\u6237\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u6ce8\u518c\u65f6, \u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5b58\u50a8\u7528\u6c49\u8bed\u7684\u751f\u65e5."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u6301\u4e45\u5316\u63a7\u5236(Alan: \u5176\u5b9e\u5c31\u662f\u6570\u636e\u5b58\u50a8\u65b9\u6848\u7684\u9009\u62e9, \u6bd4\u5982\u5173\u7cfb\u578b\u6570\u636e\u5e93, \u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93, \u751a\u81f3XML)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ASP.Net Identity\u5c06\u6240\u6709\u7684\u7528\u6237\u4fe1\u606f\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d. ASP.Net Identity\u4f7f\u7528EF Code First\u6765\u5b9e\u73b0\u6240\u6709\u7684\u6301\u4e45\u5316\u673a\u5236."),Object(a.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u63a7\u5236\u6570\u636e\u67b6\u6784\u548c\u5e38\u89c1\u7684\u4efb\u52a1, \u6bd4\u5982\u6539\u53d8\u8868\u540d\u6216\u8005\u6539\u53d8\u4e3b\u952e\u6570\u636e\u7c7b\u578b."),Object(a.b)("li",{parentName:"ul"},"\u5f88\u5bb9\u5c31\u80fd\u66ff\u6362\u6210\u5176\u4ed6\u7684\u5b58\u50a8\u673a\u5236\uff0c \u6bd4\u5982SharePoint, Azure Storage Table Service, NoSQL\u6570\u636e\u5e93\u7b49\u7b49, \u800c\u4e14\u4e0d\u9700\u8981\u5fc5\u987b\u629b\u51faSystem.NotImplementedException\u5f02\u5e38."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u53ef\u5355\u5143\u6d4b\u8bd5"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ASP.Net Identity \u4f7fWeb\u5e94\u7528\u53ef\u5355\u5143\u6d4b\u8bd5. \u4f60\u53ef\u4ee5\u5199ASP.Net Identity\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u89d2\u8272\u63d0\u4f9b\u5668"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'\u6709\u4e00\u4e2a\u89d2\u8272\u63d0\u4f9b\u5668\u80fd\u591f\u8ba9\u4f60\u9650\u5236\u8bbf\u95ee\u4f60\u7684\u5e94\u7528\u7684\u67d0\u4e2a\u90e8\u5206. \u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u521b\u5efa\u89d2\u8272, \u6bd4\u5982"Admin" \u7136\u540e\u6dfb\u52a0\u7528\u6237\u5230\u89d2\u8272.'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u57fa\u4e8eClaims (Alan: claims\u662fASP.Net\u5f88\u5e95\u5c42\u7684\u4e00\u4e2a\u4e1c\u897f\u4e86, HttpContext.Current\u4e2d\u7684",Object(a.b)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.web.httpcontext.user.aspx"},"User"),"\u8fd4\u56de\u7684\u5c31\u662f\u5b9e\u73b0\u4e86IPrincipal\u7684\u4e00\u4e2a\u5bf9\u8c61. ",Object(a.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/1064271/asp-net-mvc-set-custom-iidentity-or-iprincipal/10524305#10524305"},"Note"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ASP.Net Identity\u652f\u6301claims-base\u7684\u8ba4\u8bc1, \u7528\u6237\u7684\u8eab\u4efd\u88ab\u8868\u793a\u6210\u4e00\u4e2aclaims\u96c6\u5408. Claims\u5141\u8bb8\u5f00\u53d1\u8005\u63cf\u8ff0\u89d2\u8272\u5141\u8bb8\u7684\u7528\u6237\u8eab\u4efd. \u800c\u89d2\u8272\u4ec5\u4ec5\u662f\u4e00\u4e2a\u5e03\u5c14\u503c(\u662f\u89d2\u8272\u6210\u5458\u6216\u4e0d\u662f), claim\u53ef\u4ee5\u5305\u62ec\u7528\u6237\u8eab\u4efd\u548c\u5173\u7cfb\u7684\u4e30\u5bcc\u4fe1\u606f."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u793e\u4ea4\u767b\u5f55\u63d0\u4f9b\u5668"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u529f\u80fd\u4f7f\u7528Azure\u6d3b\u52a8\u76ee\u5f55, \u7136\u540e\u5728\u4f60\u7684\u5e94\u7528\u91cc\u5b58\u50a8\u7528\u6237\u7279\u6b8a\u6570\u636e."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u96c6\u6210OWIN"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ASP.Net Identity \u8ba4\u8bc1\u73b0\u5728\u662f\u57fa\u4e8eOWIN\u4e2d\u95f4\u4ef6, \u53ef\u4ee5\u88ab\u4f7f\u7528\u5728\u4efb\u4f55\u57fa\u4e8eOWIN\u7684\u5bbf\u4e3b\u4e0a. ASP.Net Identity\u5728System.Web\u4e0a\u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56. \u5b83\u5b8c\u5168\u517c\u5bb9OWIN\u6846\u67b6, \u5e76\u53ef\u4ee5\u88ab\u4f7f\u7528\u5728\u4efb\u4f55\u57fa\u4e8eOWIN\u7684\u5bbf\u4e3b\u5e94\u7528\u4e2d."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"NugGet\u5305\u7ba1\u7406"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"ASP.Net Identity\u4f7f\u7528NuGet\u5305\u7ba1\u7406\u8fdb\u884c\u5206\u53d1. \u800cNuGet\u5de5\u5177\u88ab\u5b89\u88c5\u5728VS 2013\u4e2d. \u4f60\u53ef\u4ee5\u4eceNuGet\u4e0a\u4e0b\u8f7d."),Object(a.b)("li",{parentName:"ul"},"\u5c06ASP.Net Identity\u53d1\u5e03\u5728NuGet\u4e0a, \u53ef\u4f7fASP.Net\u56e2\u961f\u5f88\u5bb9\u6613\u8fed\u4ee3\u65b0\u7279\u6027\u548c\u4fee\u590dbug, \u800c\u4e14\u53ef\u4ee5\u66f4\u5feb\u6377\u5730\u5206\u53d1\u5230\u5f00\u53d1\u8005\u624b\u91cc.")))),Object(a.b)("h3",{id:"aspnet-identity\u8d77\u6b65"},"ASP.Net Identity\u8d77\u6b65"),Object(a.b)("p",null,"ASP.Net Identity\u88ab\u7528\u5728VS 2013 \u7684MVC, Web Forms, Web API\u548cSPA\u6a21\u677f\u91cc. \u5728\u8fd9\u4e2a\u6f14\u7ec3\u91cc, \u6211\u4eec\u5c06\u8bf4\u660e\u9879\u76ee\u6a21\u677f\u5982\u679c\u4f7f\u7528ASP.Net Identity\u7684\u6ce8\u518c, \u767b\u9646\u548c\u767b\u51fa\u529f\u80fd\u7684.\nASP.Net Identity\u88ab\u5b9e\u73b0\u4f7f\u7528\u4e0b\u9762\u6b65\u9aa4. \u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u7684\u662f\u8ba9\u4f60\u5bf9ASP.Net Identity\u6709\u4e00\u4e2a\u6982\u89c8; \u4f60\u53ef\u4ee5\u8ddf\u7740\u4e00\u6b65\u4e00\u6b65\u7684\u64cd\u4f5c\u6216\u8005\u4ec5\u4ec5\u9605\u8bfb\u8be6\u7ec6\u4fe1\u606f. \u50cf\u83b7\u5f97\u4f7f\u7528ASP.Net Identity\u521b\u5efa\u5e94\u7528\u7684\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd, \u5305\u62ec\u4f7f\u7528\u65b0\u7684API\u6765\u6dfb\u52a0\u7528\u6237, \u89d2\u8272\u548c\u914d\u7f6e\u4fe1\u606f, \u53ef\u4ee5\u67e5\u770b\u6587\u7ae0\u5e95\u90e8\u7684\u4e0b\u4e00\u6b65\u8282."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u4f7f\u7528\u72ec\u7acb\u8d26\u53f7(Individual User Accounts)\u521b\u5efaASP.Net MVC\u5e94\u7528.\u4f60\u53ef\u4ee5\u4f7f\u7528ASP.Net Identity\u5728ASP.Net MVC, Web Forms, Web API, SignalR\u7b49\u7b49\u9879\u76ee\u4e2d. \u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6211\u4eec\u5f00\u59cb\u521b\u5efa\u4e00\u4e2aASP.Net MVC\u5e94\u7528. ",Object(a.b)("a",{parentName:"p",href:"http://i2.asp.net/media/4459035/mvc.PNG?cdn_id=2015-05-22-001"},"\u56fe\u7247"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u521b\u5efa\u7684\u9879\u76ee\u5305\u542b\u4ee5\u4e0b\u4e09\u4e2aASP.Net Identity\u76f8\u5173\u7684\u5305"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Microsoft.AspNet.Identity.EntityFramework"),"\n\u8fd9\u4e2a\u5305\u6709ASP.Net Identity\u7684EF\u5b9e\u73b0, \u5b83\u5c06\u4f1a\u6301\u4e45\u5316ASP.Net Identity\u6570\u636e\u548c\u67b6\u6784\u5728SQL Server\u91cc."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Microsoft.AspNet.Identity.Core"),"\n\u8fd9\u4e2a\u5305\u5305\u542bASP.Net Identity\u7684\u6838\u5fc3\u63a5\u53e3. \u8fd9\u4e2a\u5305\u53ef\u4ee5\u88ab\u7528\u6765\u5b9e\u73b0\u4e0d\u540c\u7684\u6301\u4e45\u5316\u5b58\u50a8, \u6bd4\u5982Azure Table Storage, NoSQL\u6570\u636e\u5e93\u7b49."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Microsoft.AspNet.Identity.OWIN"),"\n\u8fd9\u4e2a\u5305\u5305\u542b\u5c06ASP.Net Identity\u7684OWIN\u8ba4\u8bc1\u63d2\u5165\u5230ASP.Net\u5e94\u7528\u7684\u529f\u80fd. \u8fd9\u88ab\u7528\u6765\u7ed9\u4f60\u7684\u5e94\u7528\u6dfb\u52a0\u767b\u9646\u529f\u80fd\u5e76\u8c03\u7528OWIN Cookie Authentication\u4e2d\u95f4\u4ef6\u6765\u751f\u6210Cookie\u7684\u529f\u80fd."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u521b\u5efa\u7528\u6237"))))}c.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return N}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),s=r,N=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(N,b(b({ref:t},c),{},{components:n})):a.a.createElement(N,b({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);