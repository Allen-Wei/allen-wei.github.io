(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{116:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(169)),a={id:"docker-collections",title:"\u5e38\u7528Docker\u5bb9\u5668\u6536\u96c6"},i={unversionedId:"personal/docker-collections",id:"personal/docker-collections",isDocsHomePage:!1,title:"\u5e38\u7528Docker\u5bb9\u5668\u6536\u96c6",description:"Docker \u6536\u96c6",source:"@site/docs/personal/docker-collections.md",slug:"/personal/docker-collections",permalink:"/docs/personal/docker-collections",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/personal/docker-collections.md",version:"current",sidebar:"docs",previous:{title:"Client API",permalink:"/docs/guides/api/guides-api-client"},next:{title:"\u5e38\u7528Git\u547d\u4ee4",permalink:"/docs/personal/git-guides"}},l=[{value:"\u4e3a\u77e5\u7b14\u8bb0",id:"\u4e3a\u77e5\u7b14\u8bb0",children:[]}],p={toc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"docker-\u6536\u96c6"},"Docker \u6536\u96c6"),Object(c.b)("h3",{id:"\u4e3a\u77e5\u7b14\u8bb0"},"\u4e3a\u77e5\u7b14\u8bb0"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name wiz \\\n  --restart=always \\\n  -it \\\n  -d \\\n  -v $(PWD):/wiz/storage \\\n  -p 3014:80 \\\n  wiznote/wizserver\n")))}s.isMDXComponent=!0},169:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||c;return t?o.a.createElement(b,i(i({ref:r},p),{},{components:t})):o.a.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);