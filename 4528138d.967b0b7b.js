(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(212)),i={title:"Vim \u76f8\u5173\u914d\u7f6e\u53ca\u6280\u5de7"},c={unversionedId:"personal/vim",id:"personal/vim",isDocsHomePage:!1,title:"Vim \u76f8\u5173\u914d\u7f6e\u53ca\u6280\u5de7",description:"\u57fa\u672c\u914d\u7f6e",source:"@site/docs/personal/vim.md",slug:"/personal/vim",permalink:"/docs/personal/vim",editUrl:"https://github.com/alanwei43/blog/tree/master/docs/personal/vim.md",version:"current",sidebar:"docs",previous:{title:"\u4e66\u7b7e\u96c6\u5408",permalink:"/docs/personal/bookmarks"},next:{title:"Visual Studio Code \u914d\u7f6e",permalink:"/docs/personal/vsc-config"}},l=[{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),Object(a.b)("p",null,"Windows\u914d\u7f6e\u6587\u4ef6\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"~/_vimrc"),", Unix\u914d\u7f6e\u6587\u4ef6\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"~/.vimrc")),Object(a.b)("p",null,"\u914d\u7f6e\u5185\u5bb9\u4e3a: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rc"},"filetype plugin on\nset rnu\nset nu\nset nocompatible\nset noswapfile\nset noswf\ncolo koehler\nset encoding=utf-8\nset fileencoding=utf-8\nset autoindent\nset showcmd\n\nset shiftwidth=4\nset tabstop=4\nset softtabstop=4\n")))}s.isMDXComponent=!0},212:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);