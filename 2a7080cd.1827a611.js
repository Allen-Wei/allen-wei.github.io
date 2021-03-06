(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(205)),o={id:"guides-api-client",title:"Client API"},i={unversionedId:"guides/api/guides-api-client",id:"guides/api/guides-api-client",isDocsHomePage:!1,title:"Client API",description:"Docusaurus Client API",source:"@site/docs/guides/api/client.md",slug:"/guides/api/guides-api-client",permalink:"/docs/guides/api/guides-api-client",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/guides/api/client.md",version:"current",sidebar:"docs",previous:{title:"Markdown \u7279\u6027",permalink:"/docs/guides/docs/markdown-features"},next:{title:"\u5e38\u7528Docker\u5bb9\u5668\u6536\u96c6",permalink:"/docs/personal/docker-collections"}},l=[{value:"Components \u7ec4\u4ef6",id:"components-\u7ec4\u4ef6",children:[{value:"&lt;Head/&gt;",id:"head",children:[]},{value:"&lt;Link/&gt;",id:"link",children:[]},{value:"&lt;Redirect/&gt;",id:"redirect",children:[]},{value:"&lt;BrowserOnly/&gt;",id:"browseronly",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"docusaurus-client-api"},"Docusaurus Client API"),Object(c.b)("p",null,"Docusaurus \u4e3a\u6784\u5efa\u7ad9\u70b9\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5ba2\u6237\u7aefAPI\u4f1a\u5e2e\u5230\u4f60."),Object(c.b)("h2",{id:"components-\u7ec4\u4ef6"},"Components \u7ec4\u4ef6"),Object(c.b)("h3",{id:"head"},"<","Head/",">"),Object(c.b)("p",null,"\u8fd9\u662f\u53ef\u591a\u6b21\u4f7f\u7528\u7684React\u7ec4\u4ef6, \u5b83\u5c06\u4f1a\u7ba1\u7406\u6587\u6863\u5934\u90e8\u7684\u6240\u6709\u53d8\u66f4. \u5b83\u662f\u65b0\u4eba\u53cb\u597d\u7684, \u63a5\u6536\u5bccHTML\u6807\u7b7e, \u8f93\u51fa\u5bccHTML\u6807\u7b7e, \u5b83\u662f\u7531 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"React Helmet")," \u5305\u88f9."),Object(c.b)("p",null,"\u4f7f\u7528\u793a\u4f8b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'import React from \'react\';\nimport Head from \'@docusaurus/Head\';\n\nconst MySEO = () => (\n  <Head>\n    <meta property="og:description" content="My custom description" />\n    <meta charSet="utf-8" />\n    <title>My Title</title>\n    <link rel="canonical" href="http://mysite.com/example" />\n  </Head>\n);\n')),Object(c.b)("p",null,"\u5d4c\u5957\u6216\u540e\u9762\u7684\u7ec4\u4ef6\u5c06\u4f1a\u8986\u76d6\u91cd\u590d\u7684\u4f7f\u7528:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<Parent>\n  <Head>\n    <title>My Title</title>\n    <meta name="description" content="Helmet application" />\n  </Head>\n  <Child>\n    <Head>\n      <title>Nested Title</title>\n      <meta name="description" content="Nested component" />\n    </Head>\n  </Child>\n</Parent>\n')),Object(c.b)("p",null,"\u6700\u7ec8\u8f93\u51fa\u7ed3\u6784\u4e3a: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<head>\n  <title>Nested Title</title>\n  <meta name="description" content="Nested component" />\n</head>\n')),Object(c.b)("h3",{id:"link"},"<","Link/",">"),Object(c.b)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u80fd\u591f\u94fe\u63a5\u5230\u5185\u90e8\u9875\u9762, \u800c\u4e14\u6709\u4e00\u4e2a\u5f3a\u5927\u7684\u7279\u6027\u53eb\u9884\u52a0\u8f7d. \u9884\u52a0\u8f7d\u88ab\u7528\u6765\u9884\u5148\u52a0\u8f7d\u8d44\u6e90, \u7528\u6237\u5bfc\u822a\u5230\u7ec4\u4ef6\u65f6\u624d\u52a0\u8f7d\u8d44\u6e90. \u5bf9\u4e8e\u4f4e\u4f18\u5148\u7ea7\u7684\u8d44\u6e90, \u6211\u4eec\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"IntersectionObserver")," \u68c0\u6d4b\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"<Link>"),"\u5728\u89c6\u7a97\u65f6\u52a0\u8f7d. \u5bf9\u4e8e\u9ad8\u4f18\u5148\u7ea7\u7684\u8bf7\u6c42, \u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"onMouseOver"),"\u4e8b\u4ef6\u89e6\u53d1:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport Link from '@docusaurus/Link';\n\nconst Page = () => (\n  <div>\n    <p>\n      Check out my <Link to=\"/blog\">blog</Link>!\n    </p>\n    <p>\n      {/* Note that external links still use `a` tags, but automatically opens in new tab. */}\n      Follow me on <a href=\"https://twitter.com/docusaurus\">Twitter</a>!\n    </p>\n  </div>\n);\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"to:")," string")),Object(c.b)("p",null,"\u9700\u8981\u5bfc\u822a\u5230\u7684\u76ee\u6807\u5730\u5740, \u6bd4\u5982: ",Object(c.b)("inlineCode",{parentName:"p"},"/docs/introduction")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<Link to="/courses" />\n')),Object(c.b)("h3",{id:"redirect"},"<","Redirect/",">"),Object(c.b)("p",null,"\u6e32\u67d3\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"<Redirect>")," \u5c06\u4f1a\u5bfc\u822a\u5230\u4e00\u4e2a\u65b0\u5730\u5740. \u8fd9\u4e2a\u65b0\u5730\u5740\u5c06\u4f1a\u5728\u5386\u53f2\u8bb0\u5f55\u5806\u6808\u91cc\u8986\u76d6\u5f53\u524d\u5730\u5740, \u5c31\u50cf\u662f\u670d\u52a1\u5668\u7aef\u8f93\u51fa\u8df3\u8f6c(HTTP 3xxx). \u4f60\u53ef\u4ee5\u67e5\u770b",Object(c.b)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/api/Redirect"},"React Router's Redirect documentation"),"\u83b7\u53d6\u66f4\u591a\u53ef\u7528",Object(c.b)("inlineCode",{parentName:"p"},"props"),"\u4fe1\u606f."),Object(c.b)("p",null,"\u4f7f\u7528\u793a\u4f8b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nconst Home = () => {\n  return <Redirect to=\"/docs/test\" />;\n};\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5907\u6ce8\n",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/router")," \u5b9e\u73b0\u5e76\u652f\u6301 ",Object(c.b)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/guides/quick-start"},"React Router")," \u7684\u7279\u6027.")),Object(c.b)("h3",{id:"browseronly"},"<","BrowserOnly/",">"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<BrowserOnly>"),"\u7ec4\u4ef6\u63a5\u53d7\u4e00\u4e2arender\u51fd\u6570\u7684\u5c5e\u6027, \u8fd9\u4e2a\u6e32\u67d3\u51fd\u6570\u4e0d\u4f1a\u5728\u6784\u5efa\u8fdb\u7a0b\u91cc\u7684\u9884\u6e32\u67d3\u9636\u6bb5\u6267\u884c. \u8fd9\u5bf9\u53ea\u80fd\u5728\u6d4f\u89c8\u5668\u73af\u5883\u8fd0\u884c\u7684\u4ee3\u7801\u662f\u6709\u7528\u7684. \u4e3a\u4e86\u6539\u8fdbSEO\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"fallback"),"\u63d0\u4f9b\u56de\u9000\u5185\u5bb9:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nconst MyComponent = () => {\n  return (\n    <BrowserOnly\n      fallback={<div>The fallback content to display on prerendering</div>}>\n      {() => {\n        // Something that should be excluded during build process prerendering.\n      }}\n    </BrowserOnly>\n  );\n};\n")))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);