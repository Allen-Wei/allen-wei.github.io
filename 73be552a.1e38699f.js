(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{209:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(401)),l=(r(403),{title:"frp\u8fde\u63a5 EOF \u5931\u8d25\u95ee\u9898",author:"\u8001\u9ad8",author_title:"\u8bb0\u5f55\u548c\u5206\u4eab\uff0c\u4e0e\u4f60\u6bcf\u5929\u8fdb\u6b65\u4e00\u70b9\u70b9\u3002",author_url:"https://blog.phpgao.com/author/1/",tags:["frp"],draft:!1}),c={permalink:"/blog/2021/03/21/frp-eof",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-21-frp-eof.md",source:"@site/src/blog/2021-03-21-frp-eof.md",description:"\u4e3a\u4e86\u5728\u5bb6\u8c03\u8bd5\u65b9\u4fbf\uff0c\u8001\u9ad8\u4f7f\u7528frp\u5c06\u81ea\u5df1\u653e\u5728\u516c\u53f8\u7684\u5f00\u53d1\u673a\u5668\u7684ssh\u7aef\u53e3\u5f00\u653e\u51fa\u6765\u4e86\uff0c\u4f46\u662f\u914d\u7f6efrp\u5ba2\u6237\u7aef\u7684\u8fc7\u7a0b\u4e2d\u603b\u662f\u51fa\u73b0\u4e0b\u9762\u7684\u4e00\u53e5\u8bdd\uff1a",date:"2021-03-21T00:00:00.000Z",tags:[{label:"frp",permalink:"/blog/tags/frp"}],title:"frp\u8fde\u63a5 EOF \u5931\u8d25\u95ee\u9898",readingTime:1.395,truncated:!0,prevItem:{title:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",permalink:"/blog/2021/03/21/docusaurus-github-deploy"},nextItem:{title:"linux\u4e0b\u67e5\u770b\u6307\u5b9a\u8fdb\u7a0b\u7684\u6240\u6709\u8fde\u63a5\u4fe1\u606f",permalink:"/blog/2021/03/21/linux-all-ps-connection"}},i=[],u={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},401:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},402:function(e,t,r){"use strict";function n(e){var t=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!t||5!==t.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var r=t[1],n=t[2],a=t[3],o=t[4];return o.endsWith(".md")&&(o=o.substr(0,o.length-3)),o.endsWith(".mdx")&&(o=o.substr(0,o.length-4)),"/blog/"+r+"/"+n+"/"+a+"/"+o}r.d(t,"a",(function(){return n}))},403:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return u}));var n=r(4),a=r(0),o=r.n(a),l=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link,t="mailto:alan.wei@live.com;hello@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?o.a.createElement("a",{href:e,target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("ul",{style:{marginLeft:"-1em"}},o.a.createElement("li",null,"\u4f5c\u8005: ",r),o.a.createElement("li",null,"\u6765\u6e90: ",o.a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),o.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",o.a.createElement("a",{href:t,target:"_top"},"alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},t}(o.a.Component),c=r(402);function i(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=Object(c.a)(e.href);return o.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function u(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?o.a.createElement("img",{alt:e.src,src:t}):o.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}}}]);