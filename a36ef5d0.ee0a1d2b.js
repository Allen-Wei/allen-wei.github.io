(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(387)),i=(r(388),{title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["iis","reverse proxy"],description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",draft:!1,hide_table_of_contents:!1}),c={permalink:"/blog/2021/04/11/iis-reverse-proxy",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-iis-reverse-proxy.md",source:"@site/src/blog/2021-04-11-iis-reverse-proxy.md",description:"IIS\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",date:"2021-04-11T00:00:00.000Z",tags:[{label:"iis",permalink:"/blog/tags/iis"},{label:"reverse proxy",permalink:"/blog/tags/reverse-proxy"}],title:"\u914d\u7f6eIIS\u53cd\u5411\u4ee3\u7406\u6559\u7a0b",readingTime:.355,truncated:!0,prevItem:{title:"How to Setup Reverse Proxy on IIS with URL-Rewrite",permalink:"/blog/2021/04/11/iis-reverse-proxy-url-rewrite"},nextItem:{title:"\u67e5\u770b\u5f53\u524d\u673a\u5668\u7684\u6240\u6709SSH\u8fde\u63a5",permalink:"/blog/2021/04/11/linux-show-ssh-connection"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5047\u8bbe\u5c06\u57df\u540d",Object(o.b)("inlineCode",{parentName:"p"},"www.helloworld.com"),"\u4ee3\u7406\u5230\u672c\u5730\u7684",Object(o.b)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3"))}p.isMDXComponent=!0},387:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},388:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return u}));var n=r(4),a=r(0),o=r.n(a),i=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link?o.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",e,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),o.a.createElement("hr",null))},t}(o.a.Component),c=r(389);o.a.Component;function l(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!t)return o.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return o.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var r="/blog/"+t[1]+"/"+t[2]+"/"+t[3]+"/"+t[4];return o.a.createElement("a",{href:r,target:e.target,"data-component":"BlogLink"},e.children)}function u(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?o.a.createElement("img",{alt:e.src,src:t}):o.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}}}]);