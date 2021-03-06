(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(182)),i={title:"\u5e38\u7528Git\u547d\u4ee4"},c={unversionedId:"personal/git-guides",id:"personal/git-guides",isDocsHomePage:!1,title:"\u5e38\u7528Git\u547d\u4ee4",description:"\u514b\u9686\u6307\u5b9a\u5206\u652f",source:"@site/docs/personal/git-guides.md",slug:"/personal/git-guides",permalink:"/docs/personal/git-guides",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/personal/git-guides.md",version:"current",sidebar:"docs",previous:{title:"\u5e38\u7528Docker\u5bb9\u5668\u6536\u96c6",permalink:"/docs/personal/docker-collections"},next:{title:"\u4e66\u7b7e\u96c6\u5408",permalink:"/docs/personal/bookmarks"}},l=[{value:"\u514b\u9686\u6307\u5b9a\u5206\u652f",id:"\u514b\u9686\u6307\u5b9a\u5206\u652f",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u514b\u9686\u6307\u5b9a\u5206\u652f"},"\u514b\u9686\u6307\u5b9a\u5206\u652f"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1778088/how-do-i-clone-a-single-branch-in-git"},"How do I clone a single branch in Git?")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# clone only the remote primary HEAD (default: origin/master)\ngit clone <url> --single-branch\n\n# as in:\ngit clone <url> --branch <branch> --single-branch [<folder>]\n")))}p.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);