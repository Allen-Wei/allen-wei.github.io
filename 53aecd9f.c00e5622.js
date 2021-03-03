(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(153)),i={title:"Spring Boot Hot Swapping",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","spring","spring boot","hot swap"]},l={permalink:"/blog/2021/02/24/hot-swapping-in-spring-boot",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-02-24-hot-swapping-in-spring-boot.md",source:"@site/blog/2021-02-24-hot-swapping-in-spring-boot.md",description:"Spring Boot \u5e94\u7528\u914d\u7f6e Hot Swapping",date:"2021-02-24T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"spring",permalink:"/blog/tags/spring"},{label:"spring boot",permalink:"/blog/tags/spring-boot"},{label:"hot swap",permalink:"/blog/tags/hot-swap"}],title:"Spring Boot Hot Swapping",readingTime:.75,truncated:!0,prevItem:{title:"Linux - Structure needs cleaning",permalink:"/blog/2021/03/03/Structure-needs-cleaning"},nextItem:{title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"}},p=[],c={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spring Boot \u5e94\u7528\u914d\u7f6e Hot Swapping"),Object(a.b)("p",null,"FROM ",Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21399586/hot-swapping-in-spring-boot"},"Hot Swapping In Spring Boot")),Object(a.b)("p",null,"What helped me in IntelliJ 15.0, windows 10, was the following sequence:"),Object(a.b)("p",null,"STEP 1: Added the following dependency in pom (This is mentioned everywhere but this alone dint solve it), as mentioned by @jonashackt"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.springframework.boot</groupId>\n     <artifactId>spring-boot-devtools</artifactId>\n</dependency>\n")),Object(a.b)("p",null,"STEP 2: Then from ",Object(a.b)("strong",{parentName:"p"},"File->Settings-> Build-Execution-Deployment -> Compiler")," (make sure main compiler option is selected and not any of its sub-options)"),Object(a.b)("p",null,"enable Make Project Automatically. Click ok and close the dialog Note : In latest version it will be Build project automatically"),Object(a.b)("p",null,"STEP 3: Hold ",Object(a.b)("inlineCode",{parentName:"p"},"Shift+Ctrl+A")," (on windows) you will see a search dialog with title ",Object(a.b)("strong",{parentName:"p"},"Enter Action or option name")," , type ",Object(a.b)("strong",{parentName:"p"},"registry"),' Double click the first option that says "Registry..." it will open another window. Look for the following option:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"compiler.automake.allow.when.app.running\n")),Object(a.b)("p",null,"and enable it, click close"),Object(a.b)("p",null,"STEP 4: Restart IDE"),Object(a.b)("p",null,"Elaborated from this ",Object(a.b)("a",{parentName:"p",href:"https://dzone.com/articles/spring-boot-application-live-reload-hot-swap-with"},"source")))}s.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(i,".").concat(g)]||u[g]||b[g]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);