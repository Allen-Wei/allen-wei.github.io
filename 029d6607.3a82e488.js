(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{431:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n(0),a=n.n(r),c=n(433);function i(e){if("string"!=typeof e.href)return a.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");const t=Object(c.a)(e.href);return a.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function l(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.src||e.href}`;return e.src?a.a.createElement("img",{alt:e.src,src:t}):a.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},433:function(e,t,n){"use strict";function r(e){var t=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!t||5!==t.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var n=t[1],r=t[2],a=t[3],c=t[4];return c.endsWith(".md")&&(c=c.substr(0,c.length-3)),c.endsWith(".mdx")&&(c=c.substr(0,c.length-4)),"/blog/"+n+"/"+r+"/"+a+"/"+c}n.d(t,"a",(function(){return r}))},434:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l.a})),n.d(t,"c",(function(){return l.b}));var r=n(4),a=n(0),c=n.n(a),i=function(e){function t(t){return e.call(this,t)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",n=this.props.link?c.a.createElement("a",{href:e,target:"_blank"},this.props.author):c.a.createElement("i",null,this.props.author);return c.a.createElement("section",null,c.a.createElement("ul",{style:{marginLeft:"-1em"}},c.a.createElement("li",null,"\u4f5c\u8005: ",n),c.a.createElement("li",null,"\u6765\u6e90: ",c.a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),c.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",n," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",c.a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",c.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},t}(c.a.Component),l=n(432)},435:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r);class c extends a.a.Component{render(){return a.a.createElement("div",null,"\u611f\u8c22",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",a.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")}}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(431)),i=n(434),l=n(435),o={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e09\uff09\uff1a\u7c7b Class",sidebar_label:"\u7c7b Class",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},s={unversionedId:"articles/es6-in-depth/12-classes",id:"articles/es6-in-depth/12-classes",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e09\uff09\uff1a\u7c7b Class",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/12-classes.md",slug:"/articles/es6-in-depth/12-classes",permalink:"/docs/articles/es6-in-depth/12-classes",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/12-classes.md",version:"current",sidebar_label:"\u7c7b Class",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u4e8c\uff09\uff1a\u4ee3\u7406 Proxies",permalink:"/docs/articles/es6-in-depth/11-proxies-and-reflect"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u5341\u56db\uff09\uff1alet \u548c const",permalink:"/docs/articles/es6-in-depth/13-let-and-const"}},p=[{value:"\u65b9\u6cd5\u5b9a\u4e49\u8bed\u6cd5",id:"\u65b9\u6cd5\u5b9a\u4e49\u8bed\u6cd5",children:[]},{value:"\u7c7b\u5b9a\u4e49\u8bed\u6cd5",id:"\u7c7b\u5b9a\u4e49\u8bed\u6cd5",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-classes"},"\u539f\u6587")),Object(c.b)("p",null,"\u4f60\u53ef\u80fd\u89c9\u5f97\u4e4b\u524d\u8bb2\u89e3\u7684\u5185\u5bb9\u7565\u663e\u590d\u6742\uff0c\u4eca\u5929\u6211\u4eec\u5c31\u8bb2\u89e3\u4e00\u4e9b\u76f8\u5bf9\u7b80\u5355\u7684\u5185\u5bb9\uff0c\u4e0d\u518d\u662f",Object(c.b)("a",{parentName:"p",href:"/docs/articles/es6-in-depth/2-generators"},"\u751f\u6210\u5668\uff08Generator\uff09"),"\u8fd9\u6837\u524d\u6240\u672a\u95fb\u7684\u5168\u65b0\u7f16\u7801\u65b9\u5f0f\uff0c\u4e5f\u4e0d\u662f\u8bf8\u5982",Object(c.b)("a",{parentName:"p",href:"/docs/articles/es6-in-depth/11-proxies-and-reflect"},"\u4ee3\u7406\uff08Proxy\uff09"),"\u8fd9\u79cd\u4e3a JavaScript \u5185\u90e8\u7b97\u6cd5\u5de5\u4f5c\u539f\u7406\u63d0\u4f9b\u94a9\u5b50\u7684\u5168\u80fd\u5bf9\u8c61\uff0c\u66f4\u4e0d\u662f\u80fd\u591f\u4e3a\u5f00\u53d1\u63d0\u4f9b\u4fbf\u5229\u7684\u65b0\u578b\u6570\u636e\u7ed3\u6784\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u6211\u4eec\u5c06\u8981\u4e00\u8d77\u8ba8\u8bba\u5982\u4f55\u6839\u636e\u8bed\u8a00\u4e60\u60ef\u7b80\u5316\u5bf9\u8c61\u6784\u9020\u51fd\u6570\u7684\u521b\u5efa\u8fc7\u7a0b\u3002\n\u76ee\u524d\u9762\u4e34\u7684\u95ee\u9898"),Object(c.b)("p",null,"\u5047\u5982\u6211\u4eec\u60f3\u8981\u521b\u5efa\u4e00\u4e2a\u7ecf\u5178\u7684\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u793a\u4f8b\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"Circle")," \u7c7b\u3002\u60f3\u8c61\u4e00\u4e0b\u6211\u4eec\u6b63\u5728\u4e3a\u4e00\u4e2a\u7b80\u5355\u7684 Canvas \u5e93\u7f16\u5199\u8fd9\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"Circle")," \u7c7b\uff0c\u5728\u4f17\u591a\u9700\u8981\u8003\u8651\u7684\u56e0\u7d20\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u66f4\u60f3\u4e86\u89e3\u4ee5\u4e0b\u529f\u80fd\u7684\u5b9e\u73b0\u65b9\u5f0f\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728\u7ed9\u5b9a\u7684 Canvas \u4e0a\u7ed8\u5236\u4e00\u4e2a\u7ed9\u5b9a\u5706\u3002"),Object(c.b)("li",{parentName:"ul"},"\u8ddf\u8e2a\u8bb0\u5f55\u751f\u6210\u5706\u7684\u603b\u6570\u3002"),Object(c.b)("li",{parentName:"ul"},"\u8ddf\u8e2a\u8bb0\u5f55\u7ed9\u5b9a\u5706\u7684\u534a\u5f84\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u5176\u503c\u6210\u4e3a\u5706\u7684\u4e0d\u53d8\u6761\u4ef6\u3002"),Object(c.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u7ed9\u5b9a\u5706\u7684\u9762\u79ef\u3002")),Object(c.b)("p",null,"\u6309\u7167\u76ee\u524d\u5e38\u89c1\u7684 JS \u7f16\u7801\u98ce\u683c\uff0c\u6211\u4eec\u9996\u5148\u5e94\u8be5\u4ee5\u51fd\u6570\u7684\u5f62\u5f0f\u521b\u5efa\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u7136\u540e\u7ed9\u8be5\u51fd\u6570\u6dfb\u52a0\u4efb\u4f55\u6211\u4eec\u53ef\u80fd\u60f3\u8981\u7684\u5c5e\u6027\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u5bf9\u8c61\u66ff\u6362\u6784\u9020\u51fd\u6570\u7684",Object(c.b)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027\u3002\u8fd9\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"prototype"),"\u5bf9\u8c61\u5c06\u5305\u542b\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u5b9e\u4f8b\u7684\u6240\u6709\u521d\u59cb\u5316\u5c5e\u6027\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f5c\u4e3a\u6837\u677f\u6587\u4ef6\uff08boilerplate\uff09\u91cd\u590d\u4f7f\u7528\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'function Circle(radius) {\n    this.radius = radius;\n    Circle.circlesMade++;\n}\n    \nCircle.draw = function draw(circle, canvas) { /* Canvas \u7ed8\u5236\u4ee3\u7801 */ }\nObject.defineProperty(Circle, "circlesMade", {\n    get: function() {\n        return !this._count ? 0 : this._count;\n    },\n    set: function(val) {\n        this._count = val;\n    }\n});\n    \nCircle.prototype = {\n    area: function area() {\n        return Math.pow(this.radius, 2) * Math.PI;\n    }\n};\nObject.defineProperty(Circle.prototype, "radius", {\n    get: function() {\n        return this._radius;\n    },\n    set: function(radius) {\n        if (!Number.isInteger(radius))\n            throw new Error(" \u5706\u7684\u534a\u5f84\u5fc5\u987b\u4e3a\u6574\u6570\u3002");\n        this._radius = radius;\n    }\n});\n')),Object(c.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u975e\u5e38\u7e41\u7410\u4e14\u4e0d\u7b26\u5408\u4eba\u7684\u76f4\u89c9\uff0c\u8981\u60f3\u8bfb\u61c2\u5fc5\u987b\u5bf9\u51fd\u6570\u7684\u8fd0\u884c\u65b9\u5f0f\u6709\u7740\u975e\u51e1\u7684\u638c\u63e1\uff0c\u7136\u540e\u4f60\u624d\u80fd\u7406\u89e3\u5404\u79cd\u5df2\u88c5\u8f7d\u7684\u5c5e\u6027\u4e0e\u751f\u6210\u7684\u5b9e\u4f8b\u5bf9\u8c61\u8fdb\u884c\u7ed1\u5b9a\u7684\u65b9\u5f0f\u3002\u5982\u679c\u8fd9\u79cd\u65b9\u6cd5\u770b\u8d77\u6765\u5f88\u590d\u6742\uff0c\u4e0d\u8981\u62c5\u5fc3\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u4e3a\u4f60\u5c55\u793a\u4e00\u79cd\u66f4\u7b80\u5355\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u6240\u6709\u8fd9\u4e9b\u529f\u80fd\u3002"),Object(c.b)("h2",{id:"\u65b9\u6cd5\u5b9a\u4e49\u8bed\u6cd5"},"\u65b9\u6cd5\u5b9a\u4e49\u8bed\u6cd5"),Object(c.b)("p",null,"ES6 \u63d0\u4f9b\u4e00\u79cd\u5411\u5bf9\u8c61\u6dfb\u52a0\u7279\u6b8a\u5c5e\u6027\u7684\u65b0\u8bed\u6cd5\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6e05\u7406\u8fd9\u4e9b\u65b9\u6cd5\u3002\u7ed9",Object(c.b)("inlineCode",{parentName:"p"},"Circle.prototype"),"\u6dfb\u52a0",Object(c.b)("inlineCode",{parentName:"p"},"area"),"\u65b9\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u662f\u7ed9",Object(c.b)("inlineCode",{parentName:"p"},"radius"),"\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"getter/setter")," \u65b9\u6cd5\u5bf9\u5c31\u5f88\u96be\u3002\u968f\u7740 JS \u5f15\u5165\u8d8a\u6765\u8d8a\u591a\u7684\u9762\u5411\u5bf9\u8c61\u65b9\u6cd5\uff0c\u4eba\u4eec\u5f00\u59cb\u5bf9\u7b80\u5316\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u8bbf\u95ee\u5668\u7684\u65b9\u6cd5\u611f\u5174\u8da3\u3002\u6211\u4eec\u9700\u8981\u4e00\u79cd\u529f\u80fd\u7c7b\u4f3c",Object(c.b)("inlineCode",{parentName:"p"},"obj.prop = method"),"\u7684\u65b0\u65b9\u6cd5\u6765\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u201c\u65b9\u6cd5\u201d\uff0c\u540c\u65f6\u4e0d\u501f\u52a9",Object(c.b)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u7684\u529b\u91cf\u3002\u4eba\u4eec\u60f3\u8981\u80fd\u591f\u7b80\u5355\u5730\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u6807\u51c6\u7684\u51fd\u6570\u5c5e\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u751f\u6210\u5668\u51fd\u6570\u5c5e\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u6807\u51c6\u7684\u8bbf\u95ee\u5668\u51fd\u6570\u5c5e\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u4efb\u610f\u4f7f\u7528[]\u8bed\u6cd5\u6dfb\u52a0\u7684\u51fd\u6570\u5c5e\u6027\uff0c\u6211\u4eec\u79f0\u5176\u4e3a ",Object(c.b)("em",{parentName:"li"},"\u9884\u8ba1\u7b97\uff08computed\uff09\u5c5e\u6027\u540d"),"\u3002")),Object(c.b)("p",null,"\u5176\u4e2d\u4e00\u4e9b\u529f\u80fd\u5728\u4ee5\u524d\u65e0\u6cd5\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a\u6211\u4eec\u4e0d\u80fd\u901a\u8fc7\u7ed9",Object(c.b)("inlineCode",{parentName:"p"},"obj.prop"),"\u8d4b\u503c\u6765\u5b9a\u4e49 ",Object(c.b)("inlineCode",{parentName:"p"},"getter")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"setter")," \u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e9f\u9700\u65b0\u8bed\u6cd5\u6765\u7f16\u5199\u4ee5\u4e0b\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"var obj = {\n    // \u73b0\u5728\u4e0d\u518d\u4f7f\u7528 function \u5173\u952e\u5b57\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5\n    // \u800c\u662f\u76f4\u63a5\u4f7f\u7528\u5c5e\u6027\u540d\u4f5c\u4e3a\u51fd\u6570\u540d\u79f0\u3002\n    method(args) { ... },\n    // \u53ea\u9700\u5728\u6807\u51c6\u51fd\u6570\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u201c*\u201d\uff0c\u5c31\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u751f\u6210\u5668\u51fd\u6570\u3002\n    *genMethod(args) { ... },\n    // \u501f\u52a9|get|\u548c|set|\u53ef\u4ee5\u5728\u884c\u5185\u5b9a\u4e49\u8bbf\u95ee\u5668\u3002\n    // \u53ea\u662f\u5b9a\u4e49\u5185\u8054\u51fd\u6570\uff0c\u5373\u4f7f\u6ca1\u6709\u751f\u6210\u5668\u3002\n    // \u6ce8\u610f\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u88c5\u8f7d\u7684 getter \u4e0d\u80fd\u63a5\u53d7\u53c2\u6570\n    get propName() { ... },\n    // \u6ce8\u610f\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u88c5\u8f7d\u7684 setter \u81f3\u5c11\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\n    set propName(arg) { ... },\n    // [] \u8bed\u6cd5\u53ef\u4ee5\u7528\u4e8e\u4efb\u610f\u652f\u6301\u9884\u8ba1\u7b97\u5c5e\u6027\u540d\u7684\u5730\u65b9\uff0c\u6765\u6ee1\u8db3\u4e0a\u9762\u7684\u7b2c 4 \u4e2d\u60c5\u51b5\u3002\n    // \u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528 symbol\uff0c\u8c03\u7528\u51fd\u6570\uff0c\u8054\u7ed3\u5b57\u7b26\u4e32\n    // \u6216\u5176\u5b83\u53ef\u4ee5\u7ed9 property.id \u6c42\u503c\u7684\u8868\u8fbe\u5f0f\u3002\n    // \u8fd9\u4e2a\u8bed\u6cd5\u5bf9\u8bbf\u95ee\u5668\u6216\u751f\u6210\u5668\u540c\u6837\u6709\u6548\uff0c\u6211\u5728\u8fd9\u91cc\u53ea\u662f\u4e3e\u4e2a\u4f8b\u5b50\u3002\n    [functionThatReturnsPropertyName()] (args) { ... }\n};\n")),Object(c.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b0\u8bed\u6cd5\u91cd\u5199\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'function Circle(radius) {\n    this.radius = radius;\n    Circle.circlesMade++;\n}\nCircle.draw = function draw(circle, canvas) { /* Canvas \u7ed8\u5236\u4ee3\u7801 */ }\nObject.defineProperty(Circle, "circlesMade", {\n    get: function() {\n        return !this._count ? 0 : this._count;\n    },\n    set: function(val) {\n        this._count = val;\n    }\n});\nCircle.prototype = {\n    area() {\n        return Math.pow(this.radius, 2) * Math.PI;\n    },\n    get radius() {\n        return this._radius;\n    },\n    set radius(radius) {\n        if (!Number.isInteger(radius))\n            throw new Error(" \u5706\u7684\u534a\u5f84\u5fc5\u987b\u4e3a\u6574\u6570\u3002");\n        this._radius = radius;\n    }\n};\n')),Object(c.b)("p",null,"\u8bb2\u7a76\u5730\u8bf4\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4e0e\u4e0a\u9762\u7684\u4ee3\u7801\u6bb5\u5e76\u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u88c5\u8f7d\u540e\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\u4e2d\u7684\u65b9\u6cd5\u5b9a\u4e49\u662f\u53ef\u914d\u7f6e\uff08configurable\uff09\u548c\u53ef\u679a\u4e3e\uff08enumerable\uff09 \u7684\uff0c\u7136\u800c\u5728\u7b2c\u4e00\u6bb5\u4ee3\u7801\u6bb5\u4e2d\u5374\u4e0d\u662f\u8fd9\u6837\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5f88\u5c11\u6709\u4eba\u4f1a\u6ce8\u610f\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u51b3\u5b9a\u4e3a\u4e86\u7b80\u6d01\u8d77\u89c1\u6682\u65f6\u7701\u7565\u53ef\u679a\u4e3e\u6027\u548c\u53ef\u914d\u7f6e\u6027\u3002"),Object(c.b)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4f9d\u7136\u53d8\u5f97\u66f4\u597d\u4e86\uff0c\u4e0d\u662f\u4e48\uff1f\u4e0d\u5e78\u7684\u662f\uff0c\u5373\u4f7f\u6709\u4e86\u65b0\u7684\u65b9\u6cd5\u5b9a\u4e49\u8bed\u6cd5\uff0c\u6211\u4eec\u4ecd\u7136\u4e0d\u80fd\u6b66\u88c5\u5230\u7259\u9f7f\uff0c\u6240\u4ee5\u4ecd\u7136\u9700\u8981\u901a\u8fc7\u5b9a\u4e49\u51fd\u6570\u6765\u5b9a\u4e49Circle\u7c7b\u3002\u6ca1\u6709\u4e00\u79cd\u65b9\u6cd5\u80fd\u591f\u8ba9\u4f60\u5728\u5b9a\u4e49\u51fd\u6570\u65f6\u5c31\u83b7\u53d6\u5b83\u7684\u5c5e\u6027\u3002"),Object(c.b)("h2",{id:"\u7c7b\u5b9a\u4e49\u8bed\u6cd5"},"\u7c7b\u5b9a\u4e49\u8bed\u6cd5"),Object(c.b)("p",null,"\u5c3d\u7ba1\u8fd9\u6bd4\u4ee5\u524d\u66f4\u597d\uff0c\u4f46\u662f\u5b83\u4ecd\u7136\u4e0d\u80fd\u6ee1\u8db3\u4eba\u4eec\u5bf9\u4e8e\u7b80\u6d01\u7684 JavaScript \u9762\u5411\u5bf9\u8c61\u89e3\u51b3\u65b9\u6848\u7684\u6e34\u671b\u3002\u5728\u5176\u5b83\u8bed\u8a00\u4e2d\uff0c\u6709\u4e00\u4e2a\u53e5\u6cd5\u7ed3\u6784\u53ef\u4ee5\u7528\u6765\u5904\u7406\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u7684\u95ee\u9898\uff0c\u7ecf\u8fc7\u4e00\u756a\u8ba8\u8bba\u540e\u4ed6\u4eec\u5c06\u5176\u547d\u540d\u4e3a ",Object(c.b)("em",{parentName:"p"},"\u7c7b\uff08Class\uff09"),"\u3002"),Object(c.b)("p",null,"\u597d\u5427\uff0c\u8ba9\u6211\u4eec\u4e5f\u6765\u6dfb\u52a0\u4e00\u4e9b\u7c7b\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u9700\u8981\u8fd9\u6837\u4e00\u4e2a\u7cfb\u7edf\uff1a\u7ed9\u547d\u540d\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u65b9\u6cd5\u7684\u540c\u65f6\u7ed9\u51fd\u6570\u7684.prototype\u5c5e\u6027\u4e5f\u6dfb\u52a0\u76f8\u5e94\u65b9\u6cd5\uff0c\u4ece\u800c\u7528\u8fd9\u4e2a\u7c7b\u6784\u9020\u51fa\u7684\u5b9e\u4f8b\u4e5f\u5305\u542b\u76f8\u5e94\u7684\u65b9\u6cd5\u3002\u65e2\u7136\u6211\u4eec\u638c\u63e1\u4e86\u4e00\u79cd\u5d2d\u65b0\u7684\u65b9\u6cd5\u5b9a\u4e49\u8bed\u8a00\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u7269\u5c3d\u5176\u7528\u3002\u5728\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e00\u79cd\u533a\u5206\u666e\u901a\u51fd\u6570\u4e0e\u7279\u6b8a\u51fd\u6570\u7684\u65b9\u6cd5\uff0c\u5728 C++ \u6216 Java \u4e2d\uff0c\u8fd9\u79cd\u529f\u80fd\u5bf9\u5e94\u7684\u5173\u952e\u5b57\u662f",Object(c.b)("inlineCode",{parentName:"p"},"static"),"\u3002\u8fd9\u79cd\u65b9\u6cd5\u770b\u8d77\u6765\u4e0d\u9519\uff0c\u8ba9\u6211\u4eec\u7528\u8d77\u6765\uff01"),Object(c.b)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u4e00\u5806\u65b9\u6cd5\u4e2d\u6307\u5b9a\u51fa\u552f\u4e00\u7684\u6784\u9020\u51fd\u6570\u3002\u5728 C++ \u6216 Java \u4e2d\uff0c\u6784\u9020\u51fd\u6570\u4e0e\u7c7b\u540c\u540d\uff0c\u5e76\u4e14\u6ca1\u6709\u8fd4\u56de\u7c7b\u578b\u3002\u65e2\u7136 JS \u6ca1\u6709\u8fd4\u56de\u7c7b\u578b\uff0c\u6211\u4eec\u65e0\u8bba\u5982\u4f55\u90fd\u9700\u8981\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},".constructor"),"\u5c5e\u6027\u6765\u652f\u6301\u5411\u540e\u517c\u5bb9\u6027\uff0c\u4f60\u53ef\u4ee5\u79f0\u4e4b\u4e3a\u65b9\u6cd5\u6784\u9020\u51fd\u6570\uff08method constructor\uff09\u3002"),Object(c.b)("p",null,"\u5c06\u6240\u6709\u7684\u6982\u5ff5\u7ec4\u5408\u5230\u4e00\u8d77\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u5199 Circle \u7c7b\u5e76\u5b9e\u73b0\u6240\u6709\u529f\u80fd\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'class Circle {\n    constructor(radius) {\n        this.radius = radius;\n        Circle.circlesMade++;\n    };\n    static draw(circle, canvas) {\n        // Canvas \u7ed8\u5236\u4ee3\u7801\n    };\n    static get circlesMade() {\n        return !this._count ? 0 : this._count;\n    };\n    static set circlesMade(val) {\n        this._count = val;\n    };\n    area() {\n        return Math.pow(this.radius, 2) * Math.PI;\n    };\n    get radius() {\n        return this._radius;\n    };\n    set radius(radius) {\n        if (!Number.isInteger(radius))\n            throw new Error(" \u5706\u7684\u534a\u5f84\u5fc5\u987b\u4e3a\u6574\u6570\u3002");\n        this._radius = radius;\n    };\n}\n')),Object(c.b)("p",null,"\u54c7\u55f7\uff01\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u5b9e\u73b0",Object(c.b)("inlineCode",{parentName:"p"},"Circle"),"\u6240\u9700\u7684\u529f\u80fd\uff0c\u8fd8\u80fd\u4f7f\u4ee3\u7801\u5982\u6b64\u7b80\u6d01\uff0c\u8fd9\u6bd4\u521a\u5f00\u59cb\u597d\u591a\u4e86\uff01"),Object(c.b)("p",null,"\u867d\u7136\u5982\u6b64\uff0c\u6709\u7684\u4eba\u6709\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u6216\u78b0\u5230\u8fb9\u7f18\u7528\u4f8b\u3002\u6211\u4f1a\u5c1d\u8bd5\u7740\u9884\u6d4b\u4f60\u4eec\u5c06\u4f1a\u9047\u5230\u7684\u95ee\u9898\u5e76\u4e00\u4e00\u89e3\u7b54\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5206\u53f7\u662f\u600e\u4e48\u56de\u4e8b\uff1f"),"\u2014\u2014 \u5728\u4e00\u6b21\u201c\u6253\u9020\u4f20\u7edf\u7c7b\u201d\u7684\u5c1d\u8bd5\u4e2d\uff0c\u6211\u4eec\u51b3\u5b9a\u7f16\u5199\u4e00\u4e2a\u66f4\u4f20\u7edf\u7684\u5206\u9694\u7b26\u3002\u5982\u679c\u4e0d\u559c\u6b22\u53ef\u4ee5\u4e0d\u5199\uff0c\u5206\u9694\u7b26\u662f\u53ef\u9009\u7684\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5982\u679c\u6211\u4e0d\u60f3\u8981\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u4f46\u662f\u4ecd\u7136\u60f3\u5728\u521b\u5efa\u7684\u5bf9\u8c61\u4e2d\u653e\u7f6e\u65b9\u6cd5\u5462\uff1f")," \u2014\u2014 \u597d\u5427\uff0cconstructor\u65b9\u6cd5\u4e5f\u662f\u53ef\u9009\u7684\uff0c\u5bf9\u8c61\u4e2d\u4f1a\u9ed8\u8ba4\u58f0\u660e\u4e00\u4e2a\u7a7a\u7684\u6784\u9020\u51fd\u6570constructor() {}\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u53ef\u4ee5\u7528\u751f\u6210\u5668\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4e48\uff1f")," \u2014\u2014 \u575a\u51b3\u4e0d\u53ef\u4ee5\uff01\u6784\u9020\u5668\u4e0d\u662f\u666e\u901a\u65b9\u6cd5\uff0c\u968f\u610f\u6dfb\u52a0\u5c06\u4f1a\u89e6\u53d1\u7c7b\u578b\u9519\u8bef\uff08TypeError\uff09\uff0c\u8fd9\u6761\u89c4\u5219\u540c\u6837\u9002\u7528\u4e8e\u751f\u6210\u5668\u548c\u8bbf\u95ee\u5668\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u6211\u53ef\u4ee5\u7528\u9884\u8ba1\u7b97\u5c5e\u6027\u540d\u6765\u5b9a\u4e49\u6784\u9020\u51fd\u6570\u4e48\uff1f")," \u2014\u2014 \u5f88\u4e0d\u5e78\u7684\u662f\u4e0d\u53ef\u4ee5\uff01\u90a3\u5c06\u4f1a\u53d8\u5f97\u5f88\u96be\u9884\u6d4b\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u53bb\u5c1d\u8bd5\u3002\u5982\u679c\u4f60\u7528\u9884\u8ba1\u7b97\u5c5e\u6027\u540d\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u6765\u547d\u540d\u6784\u9020\u51fd\u6570\uff0c\u4f60\u5c06\u5f97\u5230\u4e00\u4e2a\u540d\u4e3aconstructor\u7684\u65b9\u6cd5\uff0c\u5b83\u5c31\u4e0d\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e86\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5982\u679c\u6211\u6539\u53d8\u4e86",Object(c.b)("inlineCode",{parentName:"strong"},"Circle"),"\u7684\u503c\uff0c\u4f1a\u5bfc\u81f4",Object(c.b)("inlineCode",{parentName:"strong"},"new Circle"),"\u7684\u884c\u4e3a\u5f02\u5e38\u4e48\uff1f")," \u2014\u2014 \u4e0d\u4f1a\uff01\u7c7b\u4e0e\u51fd\u6570\u8868\u8fbe\u5f0f\u7c7b\u4f3c\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u7ed9\u5b9a\u540d\u79f0\u7684\u5185\u90e8\u7ed1\u5b9a\uff0c\u8fd9\u4e2a\u7ed1\u5b9a\u4e0d\u4f1a\u88ab\u5916\u90e8\u529b\u91cf\u6539\u53d8\uff0c\u6240\u4ee5\u65e0\u8bba\u4f60\u5728\u5916\u56f4\u4f5c\u7528\u57df\u7ed9",Object(c.b)("inlineCode",{parentName:"li"},"Circle"),"\u53d8\u91cf\u8bbe\u7f6e\u4ec0\u4e48\u503c\uff0c\u6784\u9020\u5668\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"li"},"Circle.circlesMade++"),"\u4f9d\u7136\u4f1a\u50cf\u9884\u671f\u4e00\u6837\u8fd0\u884c\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u597d\u7684\uff0c\u4f46\u662f\u6211\u53ef\u80fd\u76f4\u63a5\u7ed9\u51fd\u6570\u4f20\u4e00\u4e2a\u5bf9\u8c61\u5b57\u9762\u91cf\u4f5c\u4e3a\u53c2\u6570\uff0c\u7c7b\u662f\u4e0d\u662f\u5c31\u4e0d\u80fd\u5b9e\u4f8b\u5316\u4e86\uff1f")," \u2014\u2014 \u5e78\u8fd0\u7684\u662f\uff0cES6 \u4e2d\u4e5f\u652f\u6301\u7c7b\u8868\u8fbe\u5f0f\uff01\u53ef\u4ee5\u662f\u547d\u540d\u6216\u533f\u540d\u8868\u8fbe\u5f0f\uff0c\u4e14\u884c\u4e3a\u4e0e\u4e0a\u8ff0\u4e00\u81f4\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u5b83\u4eec\u4e0d\u4f1a\u5728\u4f60\u58f0\u660e\u5b83\u4eec\u7684\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\u53d8\u91cf\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u4e0a\u9762\u63d0\u5230\u7684\u53ef\u679a\u4e3e\u6027\u3001\u53ef\u914d\u7f6e\u6027\u53c8\u5982\u4f55\u89e3\u91ca\u5462\uff1f")," \u2014\u2014 \u4eba\u4eec\u5e0c\u671b\u5728\u7c7b\u4e2d\u88c5\u8f7d\u7684\u65b9\u6cd5\u662f\u53ef\u914d\u7f6e\u3001\u4e0d\u53ef\u679a\u4e3e\u7684\u3002\u4e00\u6765\u4f60\u53ef\u4ee5\u5728\u5bf9\u8c61\u4e2d\u88c5\u8f7d\u65b9\u6cd5\uff0c\u4e8c\u6765\u5f53\u4f60\u679a\u4e3e\u5bf9\u8c61\u5c5e\u6027\u65f6\uff0c\u4e0d\u4f1a\u5c06\u88c5\u8f7d\u7684\u65b9\u6cd5\u679a\u4e3e\u51fa\u6765\uff0c\u5f97\u5230\u7684\u53ea\u662f\u9644\u52a0\u7684\u6570\u636e\u5c5e\u6027\uff0c\u8fd9\u6837\u505a\u662f\u6709\u9053\u7406\u7684\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u55e8\uff0c\u7b49\u7b49\u2026\u2026\u4ec0\u4e48\u2026\u2026\uff1f\u6211\u7684\u5b9e\u4f8b\u53d8\u91cf\u5728\u54ea\u513f\uff1f\u9759\u6001\u548c\u5e38\u91cf\u5462\uff1f")," \u2014\u2014 \u597d\u5427\uff0c\u4f60\u95ee\u4f4f\u6211\u4e86\u3002ES6 \u76ee\u524d\u7684\u5b9a\u4e49\u4e2d\u4e0d\u5b58\u5728\u76f8\u5173\u4fe1\u606f\u3002\u4f46\u662f\u6709\u4e2a\u597d\u6d88\u606f\uff0c\u5728\u8bf8\u591a\u7684\u89c4\u8303\u8fdb\u7a0b\u4e2d\uff0c\u6211\u5f3a\u70c8\u652f\u6301\u5728\u7c7b\u8bed\u6cd5\u4e2d\u52a0\u5165\u53ef\u9009\u7684",Object(c.b)("inlineCode",{parentName:"li"},"static"),"\u548c",Object(c.b)("inlineCode",{parentName:"li"},"const"),"\u5173\u952e\u5b57\uff0c\u8be5\u63d0\u6848\u5df2\u7ecf\u6b63\u5f0f\u5411\u89c4\u8303\u4f1a\u8bae\u9012\u4ea4\u5e76\u5904\u4e8e\u8bae\u7a0b\u4e2d\uff0c\u6211\u8ba4\u4e3a\u6211\u4eec\u53ef\u4ee5\u671f\u5f85\u5728\u672a\u6765\u4f1a\u4ea7\u751f\u66f4\u591a\u7684\u76f8\u5173\u8ba8\u8bba\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u597d\u7684\uff0c\u5373\u4f7f\u8fd9\u6837\uff0c\u8fd9\u4e9b\u5185\u5bb9\u90fd\u5f88\u8d5e\uff01\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6280\u672f\u4e48\uff1f")," \u2014\u2014 \u4e0d\u5b8c\u5168\u53ef\u4ee5\u3002\u76ee\u524d\uff0c\u4f60\u4eec\u53ef\u4ee5\u501f\u52a9 polyfill\uff08\u5c24\u5176\u662f Babel \uff09\u6765\u719f\u6089\u7279\u6027\u7684\u76f8\u5173\u8bed\u6cd5\uff0c\u7b49\u5230\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301\u8fd8\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u3002\u6211\u5df2\u7ecf\u5728 Firefox \u7684 Nightly \u7248\u672c\u4e2d\u5b9e\u73b0\u4e86\u6211\u4eec\u6240\u8ba8\u8bba\u7684\u6240\u6709\u7279\u6027\uff1b\u540c\u6837\uff0c\u8fd9\u4e9b\u7279\u6027\u5728 Edge \u548c Chrome \u4e2d\u4e5f\u5df2\u5b9e\u73b0\uff0c\u53ea\u662f\u9ed8\u8ba4\u4e0d\u542f\u7528\uff1b\u76ee\u524d Safari \u5c1a\u672a\u5b9e\u73b0\u76f8\u5173\u7279\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5728\u8fd9\u91cc\u6211\u4eec\u6ca1\u6709\u63d0\u53ca Java \u548c C+++ \u4e2d\u7684\u5b50\u7c7b\uff08subclassing\uff09\u548csuper\u5173\u952e\u5b57\uff0cJS \u4e5f\u6709\u4e48\uff1f\u2013 \u662f\u7684\uff0c\u5b83\u6709\uff01\u6211\u4eec\u5b8c\u5168\u53ef\u4ee5\u5728\u53e6\u4e00\u7bc7\u6587\u7ae0\u4e2d\u8be6\u7ec6\u8ba8\u8bba\uff0c\u540e\u7eed\u6b22\u8fce\u56de\u6765\u4e0e\u6211\u4eec\u4e00\u8d77\u63a2\u7d22\u5b50\u7c7b\uff0c\u6316\u6398\u66f4\u591a JavaScript \u7c7b\u5b9e\u73b0\u7684\u5f3a\u5927\u4e4b\u5904\u3002")),Object(c.b)("p",null,"\u611f\u8c22 Jason Orendorff \u548c Jeff Walden \u5f15\u5bfc\u6211\u8bbe\u8ba1\u8fd9\u4e00\u529f\u80fd\u5e76\u4e3a\u6211\u6240\u6709\u7684\u5b9e\u73b0\u505a\u4ee3\u7801\u5ba1\u67e5\uff0c\u6b63\u662f\u6709\u4e86\u4ed6\u4eec\u6211\u624d\u80fd\u5b9e\u73b0\u7c7b\u7684\u76f8\u5173\u7279\u6027\u3002"),Object(c.b)("p",null,"\u4e0b\u4e00\u6b21\uff0cJason Orendorff \u5c06\u4f1a\u4e3a\u6211\u4eec\u6df1\u5165\u6d45\u51fa\u8bb2\u89e3 ",Object(c.b)("em",{parentName:"p"},"let")," \u548c ",Object(c.b)("em",{parentName:"p"},"const"),"\uff0c\u6b22\u8fce\u7ee7\u7eed\u52a0\u5165\u6211\u4eec\uff01"),Object(c.b)(l.a,{mdxType:"BottomCopyRight"}))}b.isMDXComponent=!0}}]);