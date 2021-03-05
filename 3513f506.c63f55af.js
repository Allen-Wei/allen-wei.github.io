(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(165));const i={title:"\u5e38\u7528Git\u547d\u4ee4"},a={unversionedId:"personal/git-guides",id:"personal/git-guides",isDocsHomePage:!1,title:"\u5e38\u7528Git\u547d\u4ee4",description:"\u514b\u9686\u6307\u5b9a\u5206\u652f",source:"@site/docs/personal/git-guides.md",slug:"/personal/git-guides",permalink:"/docs/personal/git-guides",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/personal/git-guides.md",version:"current",sidebar:"docs",previous:{title:"\u5e38\u7528Docker\u5bb9\u5668\u6536\u96c6",permalink:"/docs/personal/docker-collections"},next:{title:"\u4e66\u7b7e\u96c6\u5408",permalink:"/docs/personal/bookmarks"}},c=[{value:"\u514b\u9686\u6307\u5b9a\u5206\u652f",id:"\u514b\u9686\u6307\u5b9a\u5206\u652f",children:[]}],l={toc:c};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u514b\u9686\u6307\u5b9a\u5206\u652f"},"\u514b\u9686\u6307\u5b9a\u5206\u652f"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1778088/how-do-i-clone-a-single-branch-in-git"},"How do I clone a single branch in Git?")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# clone only the remote primary HEAD (default: origin/master)\ngit clone <url> --single-branch\n\n# as in:\ngit clone <url> --branch <branch> --single-branch [<folder>]\n")))}u.isMDXComponent=!0}}]);