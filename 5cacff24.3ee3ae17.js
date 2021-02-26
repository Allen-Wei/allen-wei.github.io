(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),g=o,m=b["".concat(i,".").concat(g)]||b[g]||u[g]||a;return n?r.a.createElement(m,p(p({ref:t},c),{},{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n(3),r=(n(0),n(131));const a={title:"Spring Boot Hot Swapping",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","spring","spring boot","hot swap"]},i={permalink:"/blog/2021/02/24/hot-swapping-in-spring-boot",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-02-24-hot-swapping-in-spring-boot.md",source:"@site/blog/2021-02-24-hot-swapping-in-spring-boot.md",description:"Spring Boot \u5e94\u7528\u914d\u7f6e Hot Swapping",date:"2021-02-24T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"spring",permalink:"/blog/tags/spring"},{label:"spring boot",permalink:"/blog/tags/spring-boot"},{label:"hot swap",permalink:"/blog/tags/hot-swap"}],title:"Spring Boot Hot Swapping",readingTime:.75,truncated:!1,nextItem:{title:"Java \u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"}},p=[],l={toc:p};function c({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"spring-boot-\u5e94\u7528\u914d\u7f6e-hot-swapping"},"Spring Boot \u5e94\u7528\u914d\u7f6e Hot Swapping"),Object(r.b)("p",null,"FROM ",Object(r.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21399586/hot-swapping-in-spring-boot"},"Hot Swapping In Spring Boot")),Object(r.b)("p",null,"What helped me in IntelliJ 15.0, windows 10, was the following sequence:"),Object(r.b)("p",null,"STEP 1: Added the following dependency in pom (This is mentioned everywhere but this alone dint solve it), as mentioned by @jonashackt"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.springframework.boot</groupId>\n     <artifactId>spring-boot-devtools</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"STEP 2: Then from ",Object(r.b)("strong",{parentName:"p"},"File->Settings-> Build-Execution-Deployment -> Compiler")," (make sure main compiler option is selected and not any of its sub-options)"),Object(r.b)("p",null,"enable Make Project Automatically. Click ok and close the dialog Note : In latest version it will be Build project automatically"),Object(r.b)("p",null,"STEP 3: Hold ",Object(r.b)("inlineCode",{parentName:"p"},"Shift+Ctrl+A")," (on windows) you will see a search dialog with title ",Object(r.b)("strong",{parentName:"p"},"Enter Action or option name")," , type ",Object(r.b)("strong",{parentName:"p"},"registry"),' Double click the first option that says "Registry..." it will open another window. Look for the following option:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"compiler.automake.allow.when.app.running\n")),Object(r.b)("p",null,"and enable it, click close"),Object(r.b)("p",null,"STEP 4: Restart IDE"),Object(r.b)("p",null,"Elaborated from this ",Object(r.b)("a",{parentName:"p",href:"https://dzone.com/articles/spring-boot-application-live-reload-hot-swap-with"},"source")))}c.isMDXComponent=!0}}]);