(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),o=(t(0),t(225)),c={title:"\u5220\u9664HTTP\u8bf7\u6c42\u5934\u4e2d\u7684 referrer",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["http","web"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/09/remove-http-request-referrer",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-09-remove-http-request-referrer.md",source:"@site/blog/2021-03-09-remove-http-request-referrer.md",description:"\u5220\u9664HTTP\u8bf7\u6c42\u5934\u4e2d\u7684 Referer\uff0c\u80fd\u89e3\u51b3\u90e8\u5206\u9632\u76d7\u94fe\u95ee\u9898\u3002",date:"2021-03-09T00:00:00.000Z",tags:[{label:"http",permalink:"/blog/tags/http"},{label:"web",permalink:"/blog/tags/web"}],title:"\u5220\u9664HTTP\u8bf7\u6c42\u5934\u4e2d\u7684 referrer",readingTime:.9,truncated:!0,prevItem:{title:"macOS - \u66f4\u6539\u529f\u80fd\u952e\u7684\u9ed8\u8ba4\u884c\u4e3a",permalink:"/blog/2021/03/13/macos-change-default-behavior-function-keys"},nextItem:{title:"\u4ece\u524d\u6162",permalink:"/blog/2021/03/07/cong-qian-man"}},l=[],p={toc:l};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5220\u9664HTTP\u8bf7\u6c42\u5934\u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Referer"),"\uff0c\u80fd\u89e3\u51b3\u90e8\u5206\u9632\u76d7\u94fe\u95ee\u9898\u3002"),Object(o.b)("p",null,"\u5728\u9875\u9762\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"head")," \u91cc\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u5373\u53ef\u5220\u9664",Object(o.b)("inlineCode",{parentName:"p"},"Referer"),"\u8bf7\u6c42\u5934\uff1a "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="referrer" content="no-referrer" />\n')),Object(o.b)("p",null,"\u8fd9\u5bf9\u9875\u9762\u4e0a\u7684\u94fe\u63a5\u8bf7\u6c42\u4ee5\u53ca\u4f7f\u7528JavaScript\u4ee3\u7801\u53d1\u8d77\u7684Ajax\u8bf7\u6c42\u90fd\u6709\u6548\u3002"),Object(o.b)("p",null,"\u5176\u4ed6\u6709\u6548 ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," \u9009\u9879\u5982\u4e0b:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<meta name="referrer" content="unsafe-url" />\n<meta name="referrer" content="origin" />\n<meta name="referrer" content="no-referrer-when-downgrade" />\n<meta name="referrer" content="origin-when-cross-origin" />\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See if it works for your browser here: ",Object(o.b)("a",{parentName:"li",href:"http://caniuse.com/#feat=referrer-policy"},"http://caniuse.com/#feat=referrer-policy")),Object(o.b)("li",{parentName:"ul"},"See specs here: ",Object(o.b)("a",{parentName:"li",href:"http://w3c.github.io/webappsec/specs/referrer-policy/"},"http://w3c.github.io/webappsec/specs/referrer-policy/"))),Object(o.b)("p",null,"Also note that browsers now send the Origin header (with CORS requests and POST requests, see here: ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin")," ) which includes domain and port, and, as far as I know, cannot be removed. If you use ",Object(o.b)("inlineCode",{parentName:"p"},'<meta name="referrer" content="origin" />')," the referrer will contain similar information to the Origin header, which is already good from a privacy point of view, since it will hide the exact page the user is in."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Update:")),Object(o.b)("p",null,"If you want to remove the referrer by using JavaScript only, you may add the appropriate meta tag dynamically just before making the Ajax request. This JavaScript will add ",Object(o.b)("inlineCode",{parentName:"p"},'<meta name="referrer" content="no-referrer" /> '),"to head section of the web page:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var meta = document.createElement('meta');\nmeta.name = \"referrer\";\nmeta.content = \"no-referrer\";\ndocument.getElementsByTagName('head')[0].appendChild(meta);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6817595/remove-http-referer"},"\u539f\u6587 - Remove http referer"))))}b.isMDXComponent=!0},225:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=b(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(t),s=n,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return t?a.a.createElement(f,i(i({ref:r},p),{},{components:t})):a.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);