(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{373:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||l;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},374:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return s}));var a=t(4),r=t(0),l=t.n(r),i=function(e){function n(n){return e.call(this,n)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props.link?l.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):l.a.createElement("i",null,this.props.author);return l.a.createElement("section",null,l.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",e,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",l.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),l.a.createElement("hr",null))},n}(l.a.Component),c=t(379);l.a.Component;function o(e){if("string"!=typeof e.href)return l.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var n=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!n)return l.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return l.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var t="/blog/"+n[1]+"/"+n[2]+"/"+n[3]+"/"+n[4];return l.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function s(e){var n="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?l.a.createElement("img",{alt:e.src,src:n}):l.a.createElement("a",{title:e.href,href:n,target:"_blank"},e.children)}},380:function(e,n,t){"use strict";var a=t(3),r=t(7),l=t(0),i=t.n(l),c=t(375),o=t(377),s=t(376),p=t(378),u=t(57),b=t.n(u);function m(e){var n=e.to,t=e.href,l=e.label,c=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(p.a)(n),b=Object(p.a)(t,{forcePrependBaseUrl:!0});return i.a.createElement(o.a,Object(a.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:c?b:t}:{to:u},s),l)}n.a=function(){var e=Object(s.useThemeConfig)().footer,n=e||{},t=(n.copyright,n.links),a=void 0===t?[]:t,r=n.logo,l=void 0===r?{}:r;return Object(p.a)(l.src),e?(console.log(e),i.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},i.a.createElement("div",{className:"container"},a&&a.length>0&&i.a.createElement("div",{className:"row footer__links"},a.map((function(e,n){return i.a.createElement("div",{key:n,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,n){return e.html?i.a.createElement("li",{key:n,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(m,e))}))):null)}))),i.a.createElement("div",{className:"footer__bottom text--center"},i.a.createElement("div",{className:"footer__copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Alan's Blog"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",target:"_blank"},"\u672c\u7f51\u7ad9\u7531",i.a.createElement("img",{className:b.a.youPaiLogo,src:"https://gitee.com/alanway/resources/raw/master/images/youpai-logo.png"}),"\u63d0\u4f9bCDN\u52a0\u901f/\u4e91\u5b58\u50a8\u670d\u52a1")))))):null}},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(4),r=t(0),l=t.n(r),i=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return l.a.createElement("div",null,"\u611f\u8c22",l.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%88%98%E6%8C%AF%E6%B6%9B"},"\u5218\u632f\u6d9b"),"\u5bf9\u672c\u6587\u7684\u7b56\u5212\uff0c ",l.a.createElement("a",{href:"http://www.infoq.com/cn/author/%E5%BE%90%E5%B7%9D"},"\u5f90\u5ddd"),"\u5bf9\u672c\u6587\u7684\u5ba1\u6821\u3002")},n}(l.a.Component)},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),l=(t(0),t(373)),i=t(374),c=t(381),o={title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e94\uff09\uff1a\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",sidebar_label:"\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",keywords:["es6","javascript","\u6df1\u5165\u6d45\u51faES6","ES6 in depth"],description:"\u6df1\u5165\u6d45\u51fa ES6"},s={unversionedId:"articles/es6-in-depth/4-rest-parameters-and-defaults",id:"articles/es6-in-depth/4-rest-parameters-and-defaults",isDocsHomePage:!1,title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u4e94\uff09\uff1a\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",description:"\u6df1\u5165\u6d45\u51fa ES6",source:"@site/src/docs/articles/es6-in-depth/4-rest-parameters-and-defaults.md",slug:"/articles/es6-in-depth/4-rest-parameters-and-defaults",permalink:"/docs/articles/es6-in-depth/4-rest-parameters-and-defaults",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/es6-in-depth/4-rest-parameters-and-defaults.md",version:"current",sidebar_label:"\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",sidebar:"docs",previous:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u56db\uff09\uff1a\u6a21\u677f\u5b57\u7b26\u4e32",permalink:"/docs/articles/es6-in-depth/3-template-string"},next:{title:"\u6df1\u5165\u6d45\u51fa ES6\uff08\u516d\uff09\uff1a\u89e3\u6784 Destructuring",permalink:"/docs/articles/es6-in-depth/5-destructuring"}},p=[{value:"\u4e0d\u5b9a\u53c2\u6570",id:"\u4e0d\u5b9a\u53c2\u6570",children:[]},{value:"\u9ed8\u8ba4\u53c2\u6570",id:"\u9ed8\u8ba4\u53c2\u6570",children:[]},{value:"\u505c\u6b62\u4f7f\u7528 arguments",id:"\u505c\u6b62\u4f7f\u7528-arguments",children:[]},{value:"\u6d4f\u89c8\u5668\u652f\u6301",id:"\u6d4f\u89c8\u5668\u652f\u6301",children:[]}],u={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(i.b,{author:"InfoQ.cn",link:"https://www.infoq.cn/",mdxType:"NetworkCopyRight"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.infoq.cn/article/es6-in-depth-rest-parameters-and-defaults"},"\u539f\u6587")),Object(l.b)("p",null,"\u4eca\u5929\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4e3a\u4f60\u5e26\u6765\u4e24\u4e2a\u4f7f JavaScript \u51fd\u6570\u8bed\u6cd5\u66f4\u5bcc\u8868\u73b0\u529b\u7684\u65b0\u7279\u6027\uff1a\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u3002"),Object(l.b)("h2",{id:"\u4e0d\u5b9a\u53c2\u6570"},"\u4e0d\u5b9a\u53c2\u6570"),Object(l.b)("p",null,"\u6211\u4eec\u901a\u5e38\u4f7f\u7528\u53ef\u53d8\u53c2\u51fd\u6570\u6765\u6784\u9020 API\uff0c\u53ef\u53d8\u53c2\u51fd\u6570\u53ef\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"String.prototype.concat")," \u65b9\u6cd5\u5c31\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u5b57\u7b26\u4e32\u53c2\u6570\u3002ES6 \u63d0\u4f9b\u4e86\u4e00\u79cd\u7f16\u5199\u53ef\u53d8\u53c2\u51fd\u6570\u7684\u65b0\u65b9\u5f0f\u2014\u2014\u4e0d\u5b9a\u53c2\u6570\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u53ef\u53d8\u53c2\u6570\u51fd\u6570 ",Object(l.b)("inlineCode",{parentName:"p"},"containsAll")," \u7ed9\u5927\u5bb6\u6f14\u793a\u4e0d\u5b9a\u53c2\u6570\u7684\u7528\u6cd5\u3002\u51fd\u6570 ",Object(l.b)("inlineCode",{parentName:"p"},"containsAll")," \u53ef\u4ee5\u68c0\u67e5\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u5305\u542b\u82e5\u5e72\u4e2a\u5b50\u4e32\uff0c\u4f8b\u5982\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"containsAll(\u201cbanana\u201d, \u201cb\u201d, \u201cnan\u201d)")," \u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"containsAll(\u201cbanana\u201d, \u201cc\u201d, \u201cnan\u201d)")," \u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(l.b)("p",null,"\u9996\u5148\u4f7f\u7528\u4f20\u7edf\u65b9\u6cd5\u6765\u5b9e\u73b0\u8fd9\u4e2a\u51fd\u6570\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function containsAll(haystack) {\n  for (var i = 1; i < arguments.length; i++) {\n    var needle = arguments[i];\n    if (haystack.indexOf(needle) === -1) {\n      return false;\n    }\n  }\n  return true;\n}\n")),Object(l.b)("p",null,"\u5728\u8fd9\u4e2a\u5b9e\u73b0\u4e2d\uff0c\u6211\u4eec\u7528\u5230\u4e86\u795e\u5947\u7684 ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"},"arguments")," \u5bf9\u8c61\uff0c\u5b83\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\u3002\u8fd9\u6bb5\u4ee3\u7801\u5b9e\u73b0\u4e86\u6211\u4eec\u7684\u9700\u6c42\uff0c\u4f46\u5b83\u7684\u53ef\u8bfb\u6027\u5374\u4e0d\u662f\u6700\u7406\u60f3\u7684\u3002\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u4e2d\u53ea\u6709\u4e00\u4e2a\u53c2\u6570 haystack\uff0c\u6211\u4eec\u65e0\u6cd5\u4e00\u773c\u5c31\u770b\u51fa\u8fd9\u4e2a\u51fd\u6570\u5b9e\u9645\u4e0a\u63a5\u53d7\u4e86\u591a\u4e2a\u53c2\u6570\u3002\u53e6\u5916\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u6ce8\u610f\uff0c\u5e94\u8be5\u4ece 1 \u5f00\u59cb\u8fed\u4ee3\uff0c\u800c\u4e0d\u662f\u4ece 0 \u5f00\u59cb\uff0c\u56e0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"arguments[0]")," \u76f8\u5f53\u4e8e\u53c2\u6570 haystack\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u5728 haystack \u524d\u540e\u6dfb\u52a0\u53e6\u4e00\u4e2a\u53c2\u6570\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u8bb0\u5f97\u66f4\u65b0\u5faa\u73af\u4f53\u3002\u4e0d\u5b9a\u53c2\u6570\u6070\u597d\u53ef\u4ee5\u89e3\u51b3\u53ef\u8bfb\u6027\u4e0e\u53c2\u6570\u7d22\u5f15\u7684\u95ee\u9898\u3002\u4e0b\u9762\u662f\u7528 ES6 \u4e0d\u5b9a\u53c2\u6570\u7279\u6027\u5b9e\u73b0\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"containsAll")," \u51fd\u6570\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"function containsAll(haystack, ...needles) {\n  for (var needle of needles) {\n    if (haystack.indexOf(needle) === -1) {\n      return false;\n    }\n  }\n  return true;\n}\n")),Object(l.b)("p",null,"\u8fd9\u4e00\u7248 ",Object(l.b)("inlineCode",{parentName:"p"},"containsAll")," \u51fd\u6570\u4e0e\u524d\u8005\u6709\u76f8\u540c\u7684\u884c\u4e3a\uff0c\u4f46\u8fd9\u4e00\u7248\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u2026needles \u8bed\u6cd5\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"containsAll(\u201cbanana\u201d, \u201cb\u201d, \u201cnan\u201d)"),' \u4e4b\u540e\u7684\u51fd\u6570\u8c03\u7528\u8fc7\u7a0b\uff0c\u4e0e\u4e4b\u524d\u4e00\u6837\uff0c\u4f20\u9012\u8fdb\u6765\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570"banana"\u8d4b\u503c\u7ed9\u53c2\u6570 haystack\uff0cneedles \u524d\u7684\u7701\u7565\u53f7\u8868\u660e\u5b83\u662f\u4e00\u4e2a\u4e0d\u5b9a\u53c2\u6570\uff0c\u6240\u6709\u4f20\u9012\u8fdb\u6765\u7684\u5176\u5b83\u53c2\u6570\u90fd\u88ab\u653e\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u8d4b\u503c\u7ed9\u53d8\u91cf needles\u3002\u5bf9\u4e8e\u6211\u4eec\u7684\u8c03\u7528\u793a\u4f8b\u800c\u8a00\uff0cneedles \u88ab\u8d4b\u503c\u4e3a ',Object(l.b)("inlineCode",{parentName:"p"},"[\u201cb\u201d, \u201cnan\u201d]"),"\uff0c\u540e\u7eed\u7684\u51fd\u6570\u6267\u884c\u8fc7\u7a0b\u4e00\u5982\u5f80\u5e38\u3002\uff08\u6ce8\u610f\u5566\uff0c\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528\u8fc7 ES6 \u4e2d for-of \u5faa\u73af\u3002\uff09"),Object(l.b)("p",null,"\u5728\u6240\u6709\u51fd\u6570\u53c2\u6570\u4e2d\uff0c\u53ea\u6709\u6700\u540e\u4e00\u4e2a\u624d\u53ef\u4ee5\u88ab\u6807\u8bb0\u4e3a\u4e0d\u5b9a\u53c2\u6570\u3002\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u4e0d\u5b9a\u53c2\u6570\u524d\u7684\u6240\u6709\u53c2\u6570\u90fd\u6b63\u5e38\u586b\u5145\uff0c\u4efb\u4f55\u201c\u989d\u5916\u7684\u201d\u53c2\u6570\u90fd\u88ab\u653e\u8fdb\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5e76\u8d4b\u503c\u7ed9\u4e0d\u5b9a\u53c2\u6570\u3002\u5982\u679c\u6ca1\u6709\u989d\u5916\u7684\u53c2\u6570\uff0c\u4e0d\u5b9a\u53c2\u6570\u5c31\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),Object(l.b)("h2",{id:"\u9ed8\u8ba4\u53c2\u6570"},"\u9ed8\u8ba4\u53c2\u6570"),Object(l.b)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u51fd\u6570\u8c03\u7528\u8005\u4e0d\u9700\u8981\u4f20\u9012\u6240\u6709\u53ef\u80fd\u5b58\u5728\u7684\u53c2\u6570\uff0c\u6ca1\u6709\u88ab\u4f20\u9012\u7684\u53c2\u6570\u53ef\u7531\u611f\u77e5\u5230\u7684\u9ed8\u8ba4\u53c2\u6570\u8fdb\u884c\u586b\u5145\u3002JavaScript \u6709\u4e25\u683c\u7684\u9ed8\u8ba4\u53c2\u6570\u683c\u5f0f\uff0c\u672a\u88ab\u4f20\u503c\u7684\u53c2\u6570\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002ES6 \u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u3002"),Object(l.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff08\u53cd\u6487\u53f7\u8868\u793a\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u4e0a\u5468\u5df2\u7ecf\u8ba8\u8bba\u8fc7\u3002\uff09\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},' function animalSentence(animals2="tigers", animals3="bears") {\n    return `Lions and ${animals2} and ${animals3}! Oh my!`;\n}\n')),Object(l.b)("p",null,"\u9ed8\u8ba4\u53c2\u6570\u7684\u5b9a\u4e49\u5f62\u5f0f\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"[param1[ = defaultValue1 ][, \u2026, paramN[ = defaultValueN ]]]"),"\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u53c2\u6570\u800c\u8a00\uff0c\u5b9a\u4e49\u9ed8\u8ba4\u503c\u65f6 ",Object(l.b)("inlineCode",{parentName:"p"},"=")," \u540e\u7684\u90e8\u5206\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u8c03\u7528\u8005\u6ca1\u6709\u4f20\u9012\u76f8\u5e94\u53c2\u6570\uff0c\u5c06\u4f7f\u7528\u8be5\u8868\u8fbe\u5f0f\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u9ed8\u8ba4\u503c\u3002\u76f8\u5173\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'animalSentence();                       // Lions and tigers and bears! Oh my!\nanimalSentence("elephants");            // Lions and elephants and bears! Oh my!\nanimalSentence("elephants", "whales");  // Lions and elephants and whales! Oh my!\n')),Object(l.b)("p",null,"\u9ed8\u8ba4\u53c2\u6570\u6709\u51e0\u4e2a\u5fae\u5999\u7684\u7ec6\u8282\u9700\u8981\u6ce8\u610f\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u8868\u8fbe\u5f0f\u5728\u51fd\u6570\u8c03\u7528\u65f6\u81ea\u5de6\u5411\u53f3\u6c42\u503c\uff0c\u8fd9\u4e00\u70b9\u4e0e Python \u4e0d\u540c\u3002\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u9ed8\u8ba4\u8868\u8fbe\u5f0f\u53ef\u4ee5\u4f7f\u7528\u8be5\u53c2\u6570\u4e4b\u524d\u5df2\u7ecf\u586b\u5145\u597d\u7684\u5176\u5b83\u53c2\u6570\u503c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u4f18\u5316\u4e00\u4e0b\u521a\u521a\u90a3\u4e2a\u52a8\u7269\u8bed\u53e5\u51fd\u6570\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'function animalSentenceFancy(animals2="tigers", animals3=(animals2 == "bears") ? "sealions" : "bears")\n{\n  return `Lions and ${animals2} and ${animals3}! Oh my!`;\n}\n')),Object(l.b)("p",null,"\u73b0\u5728\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"animalSentenceFancy(\u201cbears\u201d)")," \u5c06\u8fd4\u56de",Object(l.b)("inlineCode",{parentName:"p"},"\u201cLions and bears and sealions. Oh my!\u201d"),"\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f20\u9012 ",Object(l.b)("inlineCode",{parentName:"li"},"undefined")," \u503c\u7b49\u6548\u4e8e\u4e0d\u4f20\u503c\uff0c\u6240\u4ee5 ",Object(l.b)("inlineCode",{parentName:"li"},"animalSentence(undefined, \u201cunicorns\u201d)")," \u5c06\u8fd4\u56de",Object(l.b)("inlineCode",{parentName:"li"},"\u201cLions and tigers and unicorns! Oh my!\u201d"),"\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u9690\u5f0f\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u6240\u4ee5 ",Object(l.b)("inlineCode",{parentName:"li"},"function myFunc(a=42, b) {...}"),"\u662f\u5408\u6cd5\u7684\uff0c\u5e76\u4e14\u7b49\u6548\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"function myFunc(a=42, b=undefined) {...}"))),Object(l.b)("h2",{id:"\u505c\u6b62\u4f7f\u7528-arguments"},"\u505c\u6b62\u4f7f\u7528 arguments"),Object(l.b)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u770b\u5230\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments")," \u5bf9\u8c61\u53ef\u88ab\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u5b8c\u7f8e\u4ee3\u66ff\uff0c\u79fb\u9664 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments")," \u540e\u901a\u5e38\u4f1a\u4f7f\u4ee3\u7801\u66f4\u6613\u4e8e\u9605\u8bfb\u3002\u9664\u4e86\u7834\u574f\u53ef\u8bfb\u6027\u5916\uff0c\u4f17\u6240\u5468\u77e5\uff0c\u9488\u5bf9 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments")," \u5bf9\u8c61\u5bf9 JavaScript \u865a\u62df\u673a\u8fdb\u884c\u7684\u4f18\u5316\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u8ba9\u4f60\u5934\u75bc\u4e0d\u5df2\u7684\u95ee\u9898\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u671f\u5f85\u7740\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u53ef\u4ee5\u5b8c\u5168\u53d6\u4ee3 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments"),"\uff0c\u8981\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\uff0c\u6807\u51c6\u4e2d\u589e\u52a0\u4e86\u76f8\u5e94\u7684\u9650\u5236\uff1a\u5728\u4f7f\u7528\u4e0d\u5b9a\u53c2\u6570\u6216\u9ed8\u8ba4\u53c2\u6570\u7684\u51fd\u6570\u4e2d\u7981\u6b62\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments")," \u5bf9\u8c61\u3002\u66fe\u7ecf\u5b9e\u73b0\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"arguments")," \u7684\u5f15\u64ce\u4e0d\u4f1a\u7acb\u5373\u79fb\u9664\u5bf9\u5b83\u7684\u652f\u6301\uff0c\u5f53\u7136\uff0c\u73b0\u5728\u66f4\u63a8\u8350\u4f7f\u7528\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u3002"),Object(l.b)("h2",{id:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"),Object(l.b)("p",null,"Firefox \u65e9\u5728\u7b2c 15 \u7248\u7684\u65f6\u5019\u5c31\u652f\u6301\u4e86\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u3002"),Object(l.b)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u5c1a\u672a\u6709\u5176\u5b83\u5df2\u53d1\u5e03\u7684\u6d4f\u89c8\u5668\u652f\u6301\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u3002V8 \u5f15\u64ce\u6700\u8fd1\u589e\u6dfb\u4e86\u9488\u5bf9\u4e0d\u5b9a\u53c2\u6570\u7684\u5b9e\u9a8c\u6027\u7684\u652f\u6301\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u5f00\u653e\u72b6\u6001\u7684V8 issue \u7ed9\u5b9e\u73b0\u9ed8\u8ba4\u53c2\u6570\u4f7f\u7528\uff0cJSC \u540c\u6837\u4e5f\u6709\u4e00\u4e2a\u5f00\u653e\u7684 issue \u6765\u7ed9\u4e0d\u5b9a\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\u4f7f\u7528\u3002"),Object(l.b)("p",null,"Babel \u548c Traceur \u7f16\u8bd1\u5668\u90fd\u652f\u6301\u9ed8\u8ba4\u53c2\u6570\uff0c\u6240\u4ee5\u4ece\u73b0\u5728\u8d77\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u3002\n\u6587\u540e\u76d8\u70b9"),Object(l.b)("p",null,"\u5c3d\u7ba1\u6280\u672f\u4e0a\u4e0d\u652f\u6301\u4efb\u4f55\u65b0\u7684\u884c\u4e3a\uff0c\u4e0d\u5b9a\u53c2\u6570\u548c\u53c2\u6570\u9ed8\u8ba4\u503c\u8fd8\u662f\u53ef\u4ee5\u4f7f\u4e00\u4e9b JavaScript \u51fd\u6570\u5b9a\u4e49\u66f4\u5bcc\u6709\u8868\u73b0\u529b\u5e76\u4e14\u66f4\u52a0\u53ef\u8bfb\u3002\u8c03\u7528\u65f6\u81ea\u7136\u4e5f\u66f4\u52a0\u8212\u723d\uff01"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u9e23\u8c22\uff1a\u611f\u8c22 Benjamin Peterson \u5728 Firefox \u4e2d\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u7279\u6027\uff0c\u540c\u65f6\u611f\u8c22\u4ed6\u5bf9\u4e8e\u6574\u4e2a\u9879\u76ee\u7684\u8d21\u732e\uff0c\u4ee5\u53ca\u4ed6\u7528\u5fc3\u64b0\u5199\u4e86\u672c\u7bc7\u6587\u7ae0\u3002")),Object(l.b)("p",null,"\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u53e6\u5916\u4e00\u4e2a\u7b80\u5355\u3001\u4f18\u96c5\u3001\u5b9e\u7528\uff0c\u540c\u6837\u662f\u4f60\u6bcf\u5929\u90fd\u4f1a\u7528\u5230\u7684 ES6 \u7279\u6027\u3002\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u7528\u5230\u4e86\u4f60\u5e73\u65f6\u7528\u6765\u5199\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u719f\u6089\u7684\u8bed\u6cd5\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u8bed\u6cd5\u6da6\u8272\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u3001\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u62c6\u89e3\u6570\u7ec4\u548c\u5bf9\u8c61\u3002\u90a3\u610f\u5473\u7740\u4ec0\u4e48\u5462\uff1f\u4e3a\u4ec0\u4e48\u8981\u62c6\u89e3\u5bf9\u8c61\uff1f\u656c\u8bf7\u671f\u5f85 Mozilla \u5de5\u7a0b\u5e08 Nick Fitzgerald \u4e3a\u6211\u4eec\u5e26\u6765\u7684",Object(l.b)("a",{parentName:"p",href:"/docs/articles/es6-in-depth/5-destructuring"},"\u300a\u6df1\u5165\u6d45\u51fa ES6 \u89e3\u6784\u300b"),"\u3002"),Object(l.b)(c.a,{mdxType:"BottomCopyRight"}))}b.isMDXComponent=!0}}]);