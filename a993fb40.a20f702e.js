(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(322)),o={title:"Git Tags \u4f7f\u7528\u7b80\u4ecb",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["git","git tags","git tag"],description:"Git Tags \u5e38\u7528\u547d\u4ee4\u7b80\u4ecb",draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/28/git-tags",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-28-git-tags.md",source:"@site/src/blog/2021-03-28-git-tags.md",description:"Git Tags \u5e38\u7528\u547d\u4ee4\u7b80\u4ecb",date:"2021-03-28T00:00:00.000Z",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"git tags",permalink:"/blog/tags/git-tags"},{label:"git tag",permalink:"/blog/tags/git-tag"}],title:"Git Tags \u4f7f\u7528\u7b80\u4ecb",readingTime:.515,truncated:!0,prevItem:{title:"\u89e3\u51b3 NPM \u5b89\u88c5\u5e94\u7528\u51fa\u73b0 ERESOLVE \u9519\u8bef",permalink:"/blog/2021/03/30/npm-install-eresulve-error"},nextItem:{title:"Docker\u914d\u7f6e\u955c\u50cf\u52a0\u901f",permalink:"/blog/2021/03/26/docker-config-mirror"}},s=[{value:"\u6dfb\u52a0 tag",id:"\u6dfb\u52a0-tag",children:[]},{value:"\u5217\u51fa\u6240\u6709 tag",id:"\u5217\u51fa\u6240\u6709-tag",children:[]},{value:"\u5220\u9664\u672c\u5730 tag",id:"\u5220\u9664\u672c\u5730-tag",children:[]},{value:"\u5220\u9664\u8fdc\u7a0b tag",id:"\u5220\u9664\u8fdc\u7a0b-tag",children:[]}],b={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u6dfb\u52a0-tag"},"\u6dfb\u52a0 tag"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git tag your_tag_name\n")),Object(i.b)("h2",{id:"\u5217\u51fa\u6240\u6709-tag"},"\u5217\u51fa\u6240\u6709 tag"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git tag\n")),Object(i.b)("h2",{id:"\u5220\u9664\u672c\u5730-tag"},"\u5220\u9664\u672c\u5730 tag"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git tag --delete your_tag_name\n")),Object(i.b)("h2",{id:"\u5220\u9664\u8fdc\u7a0b-tag"},"\u5220\u9664\u8fdc\u7a0b tag"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u5411\u8fdc\u7a0b\u4ed3\u5e93\u63a8\u9001\u4e00\u4e2a\u7a7a\u5f15\u7528\u7684\u540c\u540dtag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin :your_tag_name\n")),Object(i.b)("p",null,"\u6216\u8005\u66f4\u5177\u4f53\u4e00\u70b9\u7684\u65b9\u5f0f, \u662f\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"--delete"),"\u9009\u9879(\u5982\u679c\u4f60\u4f7f\u7528\u7684git\u7248\u672c\u4f4e\u4e8e1.8.0\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"-d"),"\u4ee3\u66ff):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push --delete origin your_tag_name\n")),Object(i.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f, Git\u6709\u6807\u7b7e(tag)\u547d\u540d\u7a7a\u95f4\u548c\u5206\u652f(branch)\u547d\u540d\u7a7a\u95f4\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u5b58\u5728\u6807\u7b7e\u540d\u548c\u5206\u652f\u540d\u540c\u540d\u7684\u60c5\u51b5\uff0c\u5982\u679c\u4f60\u60f3\u660e\u786e\u5220\u9664\u7684\u662f\u6307\u5b9a\u540d\u79f0\u7684\u6807\u7b7e\uff0c\u800c\u4e0d\u60f3\u8bef\u5220\u5206\u652f\u7684\u8bdd\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u6807\u7b7e\u5220\u9664\u65f6\u6307\u5b9a\u5b8c\u5168\u9650\u5b9a\u7684ref:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin :refs/tags/your_tag_name\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},'\u5f53\u4f60\u63a8\u9001\u4e00\u4e2a\u5206\u652f(branch)\u3001\u6807\u7b7e(tag)\u3001\u6216\u8005\u5176\u4ed6ref\u5230\u8fdc\u7a0b\u4ed3\u5e93\u65f6\uff0c\u90fd\u6d89\u53ca\u5230\u9700\u8981\u6307\u5b9a"\u54ea\u4e2a\u4ed3\u5e93(repo)\uff0c\u6e90\u662f\u4ec0\u4e48(source)\uff0c\u63a8\u9001\u5230\u54ea\u513f(destination)"'),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push remote-repo source-ref:destination-ref\n")),Object(i.b)("p",{parentName:"div"},"\u4e00\u4e2a\u771f\u5b9e\u73af\u5883\u7684\u4f8b\u5b50\u662f\u63a8\u9001\u4f60\u672c\u5730\u7684master\u5206\u652f\u5230\u8fdc\u7a0b\u7684master\u5206\u652f:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin refs/heads/master:refs/heads/maser\n")),Object(i.b)("p",{parentName:"div"},"\u56e0\u4e3a\u6709\u9ed8\u8ba4\u8def\u5f84\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u53ef\u4ee5\u7b80\u5199\u6210:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin master:master\n")),Object(i.b)("p",{parentName:"div"},"\u6807\u7b7e(tags)\u7684\u5de5\u4f5c\u65b9\u5f0f\u662f\u4e00\u6837\u7684:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin refs/tags/release-1.0:refs/tags/release-1.0\n")),Object(i.b)("p",{parentName:"div"},"\u53ef\u4ee5\u7b80\u5199\u6210:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git push origin release-1.0:release-1.0\n")),Object(i.b)("p",{parentName:"div"},"\u4e0a\u9762\u5220\u9664\u6807\u7b7e\u7684\u547d\u4ee4(",Object(i.b)("inlineCode",{parentName:"p"},"git push origin :your_tag_name"),")\u7701\u7565\u4e86\u6e90\u5f15\u7528(source ref)\uff0c\u76f8\u5f53\u4e8e\u63a8\u9001\u4e00\u4e2a\u7a7a(nothing)\u5230\u76ee\u7684\u5730(destination), \u4e5f\u5c31\u76f8\u5f53\u4e8e\u5728\u8fdc\u7a0b\u4ed3\u5e93\u5220\u9664\u4e86\u6807\u7b7e\u7684ref\u3002"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u53c2\u8003",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5480258/how-to-delete-a-remote-tag#:~:text=%20If%20you%20use%20SourceTree%20-%20a%20great,window%2C%20select%20%22Remove%20Tag%20From%20Remotes%22%20More%20"},"How to delete a remote tag?")))))}l.isMDXComponent=!0},322:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||g[m]||i;return a?r.a.createElement(u,c(c({ref:t},b),{},{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);