(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{383:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},384:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return s}));var n=r(4),a=r(0),o=r.n(a),c=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link?o.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",e,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),o.a.createElement("hr",null))},t}(o.a.Component),i=r(389);o.a.Component;function l(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return o.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return o.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var r="/blog/"+t[1]+"/"+t[2]+"/"+t[3]+"/"+t[4];return o.a.createElement("a",{href:r,target:e.target,"data-component":"BlogLink"},e.children)}function s(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?o.a.createElement("img",{alt:e.src,src:t}):o.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},390:function(e,t,r){"use strict";var n=r(3),a=r(7),o=r(0),c=r.n(o),i=r(385),l=r(387),s=r(386),p=r(388),u=r(57),m=r.n(u);function b(e){var t=e.to,r=e.href,o=e.label,i=e.prependBaseUrlToHref,s=Object(a.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(p.a)(t),m=Object(p.a)(r,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(n.a)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:i?m:r}:{to:u},s),o)}t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},r=(t.copyright,t.links),n=void 0===r?[]:r,a=t.logo,o=void 0===a?{}:a;return Object(p.a)(o.src),e?(console.log(e),c.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},n&&n.length>0&&c.a.createElement("div",{className:"row footer__links"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(b,e))}))):null)}))),c.a.createElement("div",{className:"footer__bottom text--center"},c.a.createElement("div",{className:"footer__copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Alan's Blog"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",target:"_blank"},"\u672c\u7f51\u7ad9\u7531",c.a.createElement("img",{className:m.a.youPaiLogo,src:"https://gitee.com/alanway/resources/raw/master/images/youpai-logo.png"}),"\u63d0\u4f9bCDN\u52a0\u901f/\u4e91\u5b58\u50a8\u670d\u52a1")))))):null}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(383)),c=r(384),i={title:"\u521b\u5efaWindows\u670d\u52a1",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["windows","serivce"],description:"\u521b\u5efaWindows\u670d\u52a1",draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/04/11/create-windows-service",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-create-windows-service.md",source:"@site/src/blog/2021-04-11-create-windows-service.md",description:"\u521b\u5efaWindows\u670d\u52a1",date:"2021-04-11T00:00:00.000Z",tags:[{label:"windows",permalink:"/blog/tags/windows"},{label:"serivce",permalink:"/blog/tags/serivce"}],title:"\u521b\u5efaWindows\u670d\u52a1",readingTime:.475,truncated:!0,prevItem:{title:"CentOS\u5b89\u88c5Nginx",permalink:"/blog/2021/04/11/centos-install-nginx"},nextItem:{title:"\u81ea\u5b9a\u4e49Linux Bash\u7ec8\u7aef\u63d0\u793a\u7b26",permalink:"/blog/2021/04/11/customize-bash-prompt"}},s=[{value:"\u4e0b\u8f7d\u5de5\u5177",id:"\u4e0b\u8f7d\u5de5\u5177",children:[]},{value:"\u521b\u5efa\u670d\u52a1",id:"\u521b\u5efa\u670d\u52a1",children:[]},{value:"\u66f4\u6539\u6ce8\u518c\u8868",id:"\u66f4\u6539\u6ce8\u518c\u8868",children:[]},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]},{value:"\u8bbe\u7f6eWindows\u542f\u52a8\u81ea\u52a8\u767b\u9646:",id:"\u8bbe\u7f6ewindows\u542f\u52a8\u81ea\u52a8\u767b\u9646",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53c2\u8003 ",Object(o.b)("a",{parentName:"p",href:"http://www.tacktech.com/display.cfm?ttid=197"},"Create your own user-defined services Windows NT/2000/XP/2003"),", \u548c ",Object(o.b)("a",{parentName:"p",href:"https://www.iceflatline.com/2015/12/run-a-windows-application-as-a-service-with-srvany/"},"Run a Windows Application as a Service with srvany"))),Object(o.b)("h2",{id:"\u4e0b\u8f7d\u5de5\u5177"},"\u4e0b\u8f7d\u5de5\u5177"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.tacktech.com/display.cfm?ttid=197"},"srvany.zip"),", \u6216\u8005\u4ece",Object(o.b)(c.c,{href:"files/create-windows-service/srvany.zip",mdxType:"Res"},"\u672c\u4ed3\u5e93\u4e0b\u8f7d")),Object(o.b)("h2",{id:"\u521b\u5efa\u670d\u52a1"},"\u521b\u5efa\u670d\u52a1"),Object(o.b)("p",null,"\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00\u63a7\u5236\u53f0, \u5047\u8bbe\u670d\u52a1\u540d\u79f0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"frpc"),": "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dos"},'c:\\srvany\\instsrv.exe "frpc" c:\\srvany\\srvany.exe\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"instsrv.exe")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"srvany.exe")," \u4e00\u5b9a\u8981\u7528\u7edd\u5bf9\u8def\u5f84, \u4e5f\u5c31\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"c:\\srvany\\instsrv.exe"),", \u4e0d\u80fd\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84(\u6bd4\u5982",Object(o.b)("inlineCode",{parentName:"p"},".\\instsrv.exe"),"\u662f\u4e0d\u884c\u7684)."),Object(o.b)("h2",{id:"\u66f4\u6539\u6ce8\u518c\u8868"},"\u66f4\u6539\u6ce8\u518c\u8868"),Object(o.b)("p",null,"\u6253\u5f00\u6ce8\u518c\u8868, \u5b9a\u4f4d\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\services\\frpc"),", \u7136\u540e\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Parameters")," \u7684 Key( ",Object(o.b)("em",{parentName:"p"},"Edit > New > Key"),"), \u7136\u540e\u53f3\u51fb\u8fd9\u4e2aKey, \u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"Application"),"\u7684 ",Object(o.b)("strong",{parentName:"p"},"String Value"),", \u53cc\u51fb\u8fd9\u4e2aKey, \u503c\u8f93\u5165\u8981\u6267\u884c\u7684\u7a0b\u5e8f(\u6bd4\u5982: ",Object(o.b)("inlineCode",{parentName:"p"},'"C:\\frp_0.29.1_windows_amd64\\frpc.exe" -c "C:\\frp_0.29.1_windows_amd64\\frpc.ini"'),")"),Object(o.b)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-batch"},'sc start "frpc" REM \u542f\u52a8\u670d\u52a1\nsc delete "frcp" REM \u5220\u9664\u670d\u52a1\n')),Object(o.b)("h2",{id:"\u8bbe\u7f6ewindows\u542f\u52a8\u81ea\u52a8\u767b\u9646"},"\u8bbe\u7f6eWindows\u542f\u52a8\u81ea\u52a8\u767b\u9646:"),Object(o.b)("p",null,"\u8fd0\u884c\u8f93\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"Control Userpasswords2"),", \u5728\u6253\u5f00\u7684\u7a97\u53e3\u91cc\u9009\u4e2d\u8981\u81ea\u52a8\u767b\u9646\u7684\u8d26\u53f7, \u53d6\u6d88\u52fe\u9009\u7528\u6237\u767b\u9646\u5fc5\u987b\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u4f7f\u7528\u7535\u8111, \u7136\u540e\u70b9\u51fb\u4fdd\u5b58\u8f93\u5165\u8d26\u53f7\u7684\u5bc6\u7801\u5373\u53ef."))}u.isMDXComponent=!0}}]);