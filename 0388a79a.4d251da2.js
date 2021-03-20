(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{235:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return N}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,N=O["".concat(l,".").concat(m)]||O[m]||s[m]||r;return a?b.a.createElement(N,i(i({ref:t},o),{},{components:a})):b.a.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(7),r=(a(0),a(235)),l={title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec","xauth"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-clients-xauth",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-06-ipsec-clients-xauth.md",source:"@site/src/blog/2021-03-06-ipsec-clients-xauth.md",description:'\u5728\u6210\u529f \u642d\u5efa\u81ea\u5df1\u7684 VPN \u670d\u52a1\u5668 \u4e4b\u540e\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u4f60\u7684\u8bbe\u5907\u3002IPsec/XAuth ("Cisco IPsec") \u5728 Android, iOS \u548c OS X \u4e0a\u5747\u53d7\u652f\u6301\uff0c\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002Windows \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u514d\u8d39\u7684 Shrew Soft \u5ba2\u6237\u7aef\u3002\u5982\u679c\u65e0\u6cd5\u8fde\u63a5,\u8bf7\u9996\u5148\u68c0\u67e5\u662f\u5426\u8f93\u5165\u4e86\u6b63\u786e\u7684 VPN \u767b\u5f55\u51ed\u8bc1\u3002',date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"},{label:"xauth",permalink:"/blog/tags/xauth"}],title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",readingTime:3.215,truncated:!0,prevItem:{title:"IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",permalink:"/blog/2021/03/06/ipsec-clients-ikev2"},nextItem:{title:"\u642d\u5efa IPSec \u670d\u52a1",permalink:"/blog/2021/03/06/ipsec-server"}},c=[{value:"Windows",id:"windows",children:[]},{value:"OS X",id:"os-x",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Linux",id:"linux",children:[{value:"Fedora \u548c CentOS",id:"fedora-\u548c-centos",children:[]},{value:"\u5176\u5b83 Linux",id:"\u5176\u5b83-linux",children:[]}]},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",children:[]},{value:"\u6388\u6743\u534f\u8bae",id:"\u6388\u6743\u534f\u8bae",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5728\u6210\u529f ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-server"},"\u642d\u5efa\u81ea\u5df1\u7684 VPN \u670d\u52a1\u5668"),' \u4e4b\u540e\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u4f60\u7684\u8bbe\u5907\u3002IPsec/XAuth ("Cisco IPsec") \u5728 Android, iOS \u548c OS X \u4e0a\u5747\u53d7\u652f\u6301\uff0c\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002Windows \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u514d\u8d39\u7684 ',Object(r.b)("a",{href:"https://www.shrew.net/download/vpn",target:"_blank"},"Shrew Soft \u5ba2\u6237\u7aef"),"\u3002\u5982\u679c\u65e0\u6cd5\u8fde\u63a5,\u8bf7\u9996\u5148\u68c0\u67e5\u662f\u5426\u8f93\u5165\u4e86\u6b63\u786e\u7684 VPN \u767b\u5f55\u51ed\u8bc1\u3002"),Object(r.b)("p",null,'IPsec/XAuth \u6a21\u5f0f\u4e5f\u79f0\u4e3a "Cisco IPsec"\u3002\u8be5\u6a21\u5f0f\u901a\u5e38\u80fd\u591f\u6bd4 IPsec/L2TP ',Object(r.b)("strong",{parentName:"p"},"\u66f4\u9ad8\u6548"),"\u5730\u4f20\u8f93\u6570\u636e\uff08\u8f83\u4f4e\u7684\u989d\u5916\u5f00\u9500\uff09\u3002"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-ikev2"},"\u914d\u7f6e IKEv2"),"\uff08\u63a8\u8350\uff09\uff0c\u6216\u8005\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"IPsec/L2TP \u6a21\u5f0f")," \u8fde\u63a5\u3002"))),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5e73\u53f0\u540d\u79f0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#windows"},"Windows")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#os-x"},"OS X (macOS)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#android"},"Android")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#ios"},"iOS (iPhone/iPad)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#linux"},"Linux"))))),Object(r.b)("h2",{id:"windows"},"Windows"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u4f60\u4e5f\u53ef\u4ee5 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-ikev2"},"\u914d\u7f6e IKEv2"),"\uff08\u63a8\u8350\uff09\uff0c\u6216\u8005\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"IPsec/L2TP \u6a21\u5f0f")," \u8fde\u63a5\u3002\u65e0\u9700\u5b89\u88c5\u989d\u5916\u7684\u8f6f\u4ef6\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u514d\u8d39\u7684 ",Object(r.b)("a",{href:"https://www.shrew.net/download/vpn",target:"_blank"},"Shrew Soft VPN \u5ba2\u6237\u7aef"),"\u3002\u5728\u5b89\u88c5\u65f6\u8bf7\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"Standard Edition"),"\u3002",Object(r.b)("br",{parentName:"li"}),Object(r.b)("strong",{parentName:"li"},"\u6ce8\uff1a")," \u8be5 VPN \u5ba2\u6237\u7aef ",Object(r.b)("strong",{parentName:"li"},"\u4e0d\u652f\u6301")," Windows 10\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb\u5f00\u59cb\u83dc\u5355 -> \u6240\u6709\u7a0b\u5e8f -> ShrewSoft VPN Client -> VPN Access Manager"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb\u5de5\u5177\u680f\u4e2d\u7684 ",Object(r.b)("strong",{parentName:"li"},"Add (+)")," \u6309\u94ae\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Host Name or IP Address")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Authentication")," \u9009\u9879\u5361\uff0c\u4ece ",Object(r.b)("strong",{parentName:"li"},"Authentication Method")," \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"Mutual PSK + XAuth"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Local Identity")," \u5b50\u9009\u9879\u5361\u4e2d\uff0c\u4ece ",Object(r.b)("strong",{parentName:"li"},"Identification Type")," \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"IP Address"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Credentials")," \u5b50\u9009\u9879\u5361\uff0c\u5e76\u5728 ",Object(r.b)("strong",{parentName:"li"},"Pre Shared Key")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN IPsec PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Phase 1")," \u9009\u9879\u5361\uff0c\u4ece ",Object(r.b)("strong",{parentName:"li"},"Exchange Type")," \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"main"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Phase 2")," \u9009\u9879\u5361\uff0c\u4ece ",Object(r.b)("strong",{parentName:"li"},"HMAC Algorithm")," \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"sha1"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Save")," \u4fdd\u5b58 VPN \u8fde\u63a5\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),Object(r.b)("li",{parentName:"ol"},"\u9009\u62e9\u65b0\u6dfb\u52a0\u7684 VPN \u8fde\u63a5\u3002\u5355\u51fb\u5de5\u5177\u680f\u4e2d\u7684 ",Object(r.b)("strong",{parentName:"li"},"Connect")," \u6309\u94ae\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Username")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u7528\u6237\u540d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Password")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u5bc6\u7801"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Connect"),"\u3002")),Object(r.b)("p",null,"VPN \u8fde\u63a5\u6210\u529f\u540e\uff0c\u4f60\u4f1a\u5728 VPN Connect \u72b6\u6001\u7a97\u53e3\u4e2d\u770b\u5230 ",Object(r.b)("strong",{parentName:"p"},"tunnel enabled"),' \u5b57\u6837\u3002\u5355\u51fb "Network" \u9009\u9879\u5361\uff0c\u5e76\u786e\u8ba4 ',Object(r.b)("strong",{parentName:"p"},"Established - 1"),' \u663e\u793a\u5728 "Security Associations" \u4e0b\u9762\u3002\u6700\u540e\u4f60\u53ef\u4ee5\u5230 ',Object(r.b)("a",{href:"https://www.ipchicken.com",target:"_blank"},"\u8fd9\u91cc")," \u68c0\u6d4b\u4f60\u7684 IP \u5730\u5740\uff0c\u5e94\u8be5\u663e\u793a\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u5728\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u53c2\u89c1 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"\u6545\u969c\u6392\u9664"),"\u3002"),Object(r.b)("h2",{id:"os-x"},"OS X"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u6253\u5f00\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e\u5e76\u8f6c\u5230\u7f51\u7edc\u90e8\u5206\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728\u7a97\u53e3\u5de6\u4e0b\u89d2\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4ece ",Object(r.b)("strong",{parentName:"li"},"\u63a5\u53e3")," \u4e0b\u62c9\u83dc\u5355\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"VPN"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4ece ",Object(r.b)("strong",{parentName:"li"},"VPN\u7c7b\u578b")," \u4e0b\u62c9\u83dc\u5355\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"Cisco IPSec"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u670d\u52a1\u540d\u79f0")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u4efb\u610f\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u670d\u52a1\u5668\u5730\u5740")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5e10\u6237\u540d\u79f0")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u7528\u6237\u540d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5bc6\u7801")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u5bc6\u7801"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u8ba4\u8bc1\u8bbe\u7f6e")," \u6309\u94ae\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u673a\u5668\u8ba4\u8bc1")," \u90e8\u5206\uff0c\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"\u5171\u4eab\u7684\u5bc6\u94a5")," \u5355\u9009\u6309\u94ae\uff0c\u7136\u540e\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN IPsec PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4fdd\u6301 ",Object(r.b)("strong",{parentName:"li"},"\u7fa4\u7ec4\u540d\u79f0")," \u5b57\u6bb5\u7a7a\u767d\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u597d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u9009\u4e2d ",Object(r.b)("strong",{parentName:"li"},"\u5728\u83dc\u5355\u680f\u4e2d\u663e\u793a VPN \u72b6\u6001")," \u590d\u9009\u6846\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u5e94\u7528")," \u4fdd\u5b58VPN\u8fde\u63a5\u4fe1\u606f\u3002")),Object(r.b)("p",null,"\u8981\u8fde\u63a5\u5230 VPN\uff1a\u4f7f\u7528\u83dc\u5355\u680f\u4e2d\u7684\u56fe\u6807\uff0c\u6216\u8005\u6253\u5f00\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e\u7684\u7f51\u7edc\u90e8\u5206\uff0c\u9009\u62e9 VPN \u5e76\u5355\u51fb ",Object(r.b)("strong",{parentName:"p"},"\u8fde\u63a5"),"\u3002\u6700\u540e\u4f60\u53ef\u4ee5\u5230 ",Object(r.b)("a",{href:"https://www.ipchicken.com",target:"_blank"},"\u8fd9\u91cc")," \u68c0\u6d4b\u4f60\u7684 IP \u5730\u5740\uff0c\u5e94\u8be5\u663e\u793a\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u5728\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u53c2\u89c1 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"\u6545\u969c\u6392\u9664"),"\u3002"),Object(r.b)("h2",{id:"android"},"Android"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u542f\u52a8 ",Object(r.b)("strong",{parentName:"li"},"\u8bbe\u7f6e")," \u5e94\u7528\u7a0b\u5e8f\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u7f51\u7edc\u548c\u4e92\u8054\u7f51"),"\u3002\u6216\u8005\uff0c\u5982\u679c\u4f60\u4f7f\u7528 Android 7 \u6216\u66f4\u65e9\u7248\u672c\uff0c\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u65e0\u7ebf\u548c\u7f51\u7edc")," \u90e8\u5206\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u66f4\u591a..."),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"VPN"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u6dfb\u52a0VPN\u914d\u7f6e\u6587\u4ef6")," \u6216\u7a97\u53e3\u53f3\u4e0a\u89d2\u7684 ",Object(r.b)("strong",{parentName:"li"},"+"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u540d\u79f0")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u4efb\u610f\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u7c7b\u578b")," \u4e0b\u62c9\u83dc\u5355\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"IPSec Xauth PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u670d\u52a1\u5668\u5730\u5740")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4fdd\u6301 ",Object(r.b)("strong",{parentName:"li"},"IPSec \u6807\u8bc6\u7b26")," \u5b57\u6bb5\u7a7a\u767d\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"IPSec \u9884\u5171\u4eab\u5bc6\u94a5")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN IPsec PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb\u65b0\u7684VPN\u8fde\u63a5\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u7528\u6237\u540d")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u7528\u6237\u540d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5bc6\u7801")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u5bc6\u7801"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u9009\u4e2d ",Object(r.b)("strong",{parentName:"li"},"\u4fdd\u5b58\u5e10\u6237\u4fe1\u606f")," \u590d\u9009\u6846\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u8fde\u63a5"),"\u3002")),Object(r.b)("p",null,"VPN \u8fde\u63a5\u6210\u529f\u540e\uff0c\u4f1a\u5728\u901a\u77e5\u680f\u663e\u793a\u56fe\u6807\u3002\u6700\u540e\u4f60\u53ef\u4ee5\u5230 ",Object(r.b)("a",{href:"https://www.ipchicken.com",target:"_blank"},"\u8fd9\u91cc")," \u68c0\u6d4b\u4f60\u7684 IP \u5730\u5740\uff0c\u5e94\u8be5\u663e\u793a\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u5728\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u53c2\u89c1 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"\u6545\u969c\u6392\u9664"),"\u3002"),Object(r.b)("h2",{id:"ios"},"iOS"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u8fdb\u5165\u8bbe\u7f6e -> \u901a\u7528 -> VPN\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u6dfb\u52a0VPN\u914d\u7f6e..."),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"\u7c7b\u578b")," \u3002\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"IPSec")," \u5e76\u8fd4\u56de\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u63cf\u8ff0")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u4efb\u610f\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u670d\u52a1\u5668")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5e10\u6237")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u7528\u6237\u540d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5bc6\u7801")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u5bc6\u7801"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4fdd\u6301 ",Object(r.b)("strong",{parentName:"li"},"\u7fa4\u7ec4\u540d\u79f0")," \u5b57\u6bb5\u7a7a\u767d\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u5bc6\u94a5")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN IPsec PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",Object(r.b)("strong",{parentName:"li"},"\u5b8c\u6210"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u542f\u7528 ",Object(r.b)("strong",{parentName:"li"},"VPN")," \u8fde\u63a5\u3002")),Object(r.b)("p",null,"VPN \u8fde\u63a5\u6210\u529f\u540e\uff0c\u4f1a\u5728\u901a\u77e5\u680f\u663e\u793a\u56fe\u6807\u3002\u6700\u540e\u4f60\u53ef\u4ee5\u5230 ",Object(r.b)("a",{href:"https://www.ipchicken.com",target:"_blank"},"\u8fd9\u91cc")," \u68c0\u6d4b\u4f60\u7684 IP \u5730\u5740\uff0c\u5e94\u8be5\u663e\u793a\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u5728\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u53c2\u89c1 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"\u6545\u969c\u6392\u9664"),"\u3002"),Object(r.b)("h2",{id:"linux"},"Linux"),Object(r.b)("h3",{id:"fedora-\u548c-centos"},"Fedora \u548c CentOS"),Object(r.b)("p",null,"Fedora 28 \uff08\u548c\u66f4\u65b0\u7248\u672c\uff09\u548c CentOS 8/7 \u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," \u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"p"},"NetworkManager-libreswan-gnome")," \u8f6f\u4ef6\u5305\uff0c\u7136\u540e\u901a\u8fc7 GUI \u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u8fdb\u5165 Settings -> Network -> VPN\u3002\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),Object(r.b)("li",{parentName:"ol"},"\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"IPsec based VPN"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Name")," \u5b57\u6bb5\u4e2d\u8f93\u5165\u4efb\u610f\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Gateway")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Type")," \u4e0b\u62c9\u83dc\u5355\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"IKEv1 (XAUTH)"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"User name")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u7528\u6237\u540d"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u53f3\u952e\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"User password")," \u5b57\u6bb5\u4e2d\u7684 ",Object(r.b)("strong",{parentName:"li"},"?"),"\uff0c\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"Store the password only for this user"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"User password")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN \u5bc6\u7801"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4fdd\u6301 ",Object(r.b)("strong",{parentName:"li"},"Group name")," \u5b57\u6bb5\u7a7a\u767d\u3002"),Object(r.b)("li",{parentName:"ol"},"\u53f3\u952e\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Secret")," \u5b57\u6bb5\u4e2d\u7684 ",Object(r.b)("strong",{parentName:"li"},"?"),"\uff0c\u9009\u62e9 ",Object(r.b)("strong",{parentName:"li"},"Store the password only for this user"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5728 ",Object(r.b)("strong",{parentName:"li"},"Secret")," \u5b57\u6bb5\u4e2d\u8f93\u5165",Object(r.b)("inlineCode",{parentName:"li"},"\u4f60\u7684 VPN IPsec PSK"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"\u4fdd\u6301 ",Object(r.b)("strong",{parentName:"li"},"Remote ID")," \u5b57\u6bb5\u7a7a\u767d\u3002"),Object(r.b)("li",{parentName:"ol"},"\u5355\u51fb ",Object(r.b)("strong",{parentName:"li"},"Add")," \u4fdd\u5b58 VPN \u8fde\u63a5\u4fe1\u606f\u3002"),Object(r.b)("li",{parentName:"ol"},"\u542f\u7528 ",Object(r.b)("strong",{parentName:"li"},"VPN")," \u8fde\u63a5\u3002")),Object(r.b)("p",null,"VPN \u8fde\u63a5\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u5230 ",Object(r.b)("a",{href:"https://www.ipchicken.com",target:"_blank"},"\u8fd9\u91cc")," \u68c0\u6d4b\u4f60\u7684 IP \u5730\u5740\uff0c\u5e94\u8be5\u663e\u793a\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u4f60\u7684 VPN \u670d\u52a1\u5668 IP"),"\u3002"),Object(r.b)("h3",{id:"\u5176\u5b83-linux"},"\u5176\u5b83 Linux"),Object(r.b)("p",null,"\u5176\u5b83 Linux \u7248\u672c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"IPsec/L2TP")," \u6a21\u5f0f\u8fde\u63a5\u3002"),Object(r.b)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),Object(r.b)("p",null,"\u672c\u6587\u6863\u662f\u5728 ",Object(r.b)("a",{href:"https://github.com/StreisandEffect/streisand",target:"_blank"},"Streisand")," \u9879\u76ee\u6587\u6863\u57fa\u7840\u4e0a\u7ffb\u8bd1\u548c\u4fee\u6539\u3002\u8be5\u9879\u76ee\u7531 Joshua Lund \u548c\u5176\u4ed6\u5f00\u53d1\u8005\u7ef4\u62a4\u3002"),Object(r.b)("h2",{id:"\u6388\u6743\u534f\u8bae"},"\u6388\u6743\u534f\u8bae"),Object(r.b)("p",null,"\u6ce8\uff1a \u8fd9\u4e2a\u534f\u8bae\u4ec5\u9002\u7528\u4e8e\u672c\u6587\u6863\u3002"),Object(r.b)("p",null,"\u7248\u6743\u6240\u6709 (C) 2016-2021 Lin Song",Object(r.b)("br",{parentName:"p"}),"\n","\u57fa\u4e8e ",Object(r.b)("a",{href:"https://github.com/StreisandEffect/streisand/blob/6aa6b6b2735dd829ca8c417d72eb2768a89b6639/playbooks/roles/l2tp-ipsec/templates/instructions.md.j2",target:"_blank"},"Joshua Lund \u7684\u5de5\u4f5c")," (\u7248\u6743\u6240\u6709 2014-2016)"),Object(r.b)("p",null,"\u672c\u7a0b\u5e8f\u4e3a\u81ea\u7531\u8f6f\u4ef6\uff0c\u5728\u81ea\u7531\u8f6f\u4ef6\u8054\u76df\u53d1\u5e03\u7684",Object(r.b)("a",{href:"https://www.gnu.org/licenses/gpl.html",target:"_blank"}," GNU \u901a\u7528\u516c\u5171\u8bb8\u53ef\u534f\u8bae"),"\u7684\u7ea6\u675f\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u518d\u53d1\u5e03\u53ca\u4fee\u6539\u3002\u534f\u8bae\u7248\u672c\u4e3a\u7b2c\u4e09\u7248\u6216\uff08\u968f\u4f60\uff09\u66f4\u65b0\u7684\u7248\u672c\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u5e0c\u671b\u53d1\u5e03\u7684\u8fd9\u6b3e\u7a0b\u5e8f\u6709\u7528\uff0c\u4f46\u4e0d\u4fdd\u8bc1\uff0c\u751a\u81f3\u4e0d\u4fdd\u8bc1\u5b83\u6709\u7ecf\u6d4e\u4ef7\u503c\u548c\u9002\u5408\u7279\u5b9a\u7528\u9014\u3002\u8be6\u60c5\u53c2\u89c1GNU\u901a\u7528\u516c\u5171\u8bb8\u53ef\u534f\u8bae\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients-xauth-zh.md"},"\u539f\u6587 - \u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef"))))}p.isMDXComponent=!0}}]);