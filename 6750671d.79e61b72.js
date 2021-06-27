(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(431)),o={title:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["github","Docusaurus","github action"],description:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",draft:!1,hide_table_of_contents:!1},c={permalink:"/blog/2021/03/21/docusaurus-github-deploy",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-21-docusaurus-github-deploy.md",source:"@site/src/blog/2021-03-21-docusaurus-github-deploy.md",description:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",date:"2021-03-21T00:00:00.000Z",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"Docusaurus",permalink:"/blog/tags/docusaurus"},{label:"github action",permalink:"/blog/tags/github-action"}],title:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",readingTime:1.205,truncated:!0,prevItem:{title:"Docker\u914d\u7f6e\u955c\u50cf\u52a0\u901f",permalink:"/blog/2021/03/26/docker-config-mirror"},nextItem:{title:"frp\u8fde\u63a5 EOF \u5931\u8d25\u95ee\u9898",permalink:"/blog/2021/03/21/frp-eof"}},l=[{value:"Git \u4ed3\u5e93\u7ed3\u6784",id:"git-\u4ed3\u5e93\u7ed3\u6784",children:[]},{value:"\u914d\u7f6e\u4ed3\u5e93",id:"\u914d\u7f6e\u4ed3\u5e93",children:[]},{value:"\u521b\u5efa Workflow \u6587\u4ef6",id:"\u521b\u5efa-workflow-\u6587\u4ef6",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment/#deploying-to-github-pages"},"\u539f\u6587 - Deploying to GitHub Pages")),Object(r.b)("p",null,"\u8bb0\u5f55\u4e00\u4e0b\u6211\u662f\u5982\u4f55\u5229\u7528 GitHub Action\uff0c\u81ea\u52a8\u53d1\u5e03\u6211\u7684 Docusaurus(\u4ee5\u4e0b\u7b80\u79f0Doc) \u535a\u5ba2\u7684\u3002"),Object(r.b)("h2",{id:"git-\u4ed3\u5e93\u7ed3\u6784"},"Git \u4ed3\u5e93\u7ed3\u6784"),Object(r.b)("p",null,"\u6211\u7684 Doc \u6e90\u7801\u662f\u5728\u4ed3\u5e93",Object(r.b)("inlineCode",{parentName:"p"},"alanwei43/blog"),"\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\uff0c\u6e90\u7801\u53d1\u5e03\u540e\u7684\u9759\u6001\u7ad9\u70b9\uff0c\u4e5f\u5c31\u662fGitHub Page\u6240\u5728\u4ed3\u5e93\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"alanwei43/alanwei43.github.io"),"\uff0cGitHub Page\u4f7f\u7528 ",Object(r.b)("em",{parentName:"p"},"master")," \u5206\u652f\u3002"),Object(r.b)("h2",{id:"\u914d\u7f6e\u4ed3\u5e93"},"\u914d\u7f6e\u4ed3\u5e93"),Object(r.b)("p",null,"\u9996\u5148\u9700\u8981\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"alanwei43/blog")," \u4ed3\u5e93\u7684\u8ba4\u8bc1\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u751f\u6210\u4e00\u5bf9 SSH Key(\u5982\u679c\u4f60\u7684\u7cfb\u7edf\u5b89\u88c5\u4e86SSH\uff0c\u53ef\u4ee5\u6267\u884c",Object(r.b)("inlineCode",{parentName:"li"},"ssh-keygen"),"\u751f\u6210\u3002\u56e0\u4e3a\u6211\u662fMac\uff0c\u4e4b\u524d\u751f\u6210\u8fc7\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u7528 ",Object(r.b)("em",{parentName:"li"},"~/.ssh")," \u76ee\u5f55\u4e0b\u7684SSH Key\u3002)"),Object(r.b)("li",{parentName:"ol"},"\u8bbf\u95ee\u4ed3\u5e93 ",Object(r.b)("inlineCode",{parentName:"li"},"alanwei43/alanwei43.github.io"),"\uff0c\u4f9d\u6b21\u8fdb\u5165\u5230\u4ed3\u5e93\u7684 ",Object(r.b)("strong",{parentName:"li"},"Settings > Deploy keys"),"\uff0c\u7136\u540e\u5c06\u7b2c\u4e00\u6b65\u751f\u6210\u7684\u516c\u94a5 ",Object(r.b)("em",{parentName:"li"},"id_rsa.pub")," \u6dfb\u52a0\u8fdb\u53bb\u3002(\u6dfb\u52a0key\u7684\u65f6\u5019\u9700\u8981\u52fe\u9009 ",Object(r.b)("strong",{parentName:"li"},"Allow write access"),"\u3002)"),Object(r.b)("li",{parentName:"ol"},"\u8bbf\u95ee\u4ed3\u5e93 ",Object(r.b)("inlineCode",{parentName:"li"},"alanwei43/blog"),"\uff0c\u4f9d\u6b21\u8fdb\u5165\u5230\u4ed3\u5e93\u7684 ",Object(r.b)("strong",{parentName:"li"},"Settings > Secrets"),"\uff0c\u7136\u540e\u5c06\u7b2c\u4e00\u6b65\u751f\u6210\u7684\u79c1\u94a5 ",Object(r.b)("em",{parentName:"li"},"id_rsa")," \u6dfb\u52a0\u8fdb\u53bb\uff0c\u540d\u79f0\u586b\u5199 ",Object(r.b)("inlineCode",{parentName:"li"},"GH_PAGES_DEPLOY"),"\u3002")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u6211\u5b9e\u9645\u64cd\u4f5c\u4e2d\u5e76\u6ca1\u6709\u6267\u884c\u7b2c2\u6b65\uff0c\u56e0\u4e3a\u6211\u4e4b\u524d\u5df2\u7ecf\u628aMac\u4e0a\u7684 ",Object(r.b)("em",{parentName:"p"},"id_rsa.pub")," \u6dfb\u52a0\u5230\u6211GitHub\u8d26\u53f7(",Object(r.b)("em",{parentName:"p"},"Account settings > SSH and GPG keys"),")\u91cc\u4e86, \u7136\u540e\u4f7f\u7528\u6211Mac\u4e0a\u7684\u79c1\u6709SSH\u53ef\u4ee5(",Object(r.b)("em",{parentName:"p"},"id_rsa"),")\u64cd\u4f5c\u6211GitHub\u8d26\u53f7\u4e0b\u7684\u6240\u6709\u4ed3\u5e93."))),Object(r.b)("h2",{id:"\u521b\u5efa-workflow-\u6587\u4ef6"},"\u521b\u5efa Workflow \u6587\u4ef6"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"alanwei43/blog")," \u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u6587\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},".github/workflows/documentation.yml")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/documentation.yml"',title:'".github/workflows/documentation.yml"'},"name: documentation\n\non:\n  pull_request:\n    branches: [master]\n  push:\n    branches: [master] # \u8fd9\u91cc\u8868\u793a\u5f53 alanwei43/blog \u7684\u5206\u652f master \u6709push\u4ee3\u7801\u662f\u6267\u884c\u4ee5\u4e0bjob\n\njobs:\n  checks:\n    if: github.event_name != 'push'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v1\n      - uses: actions/setup-node@v1\n        with:\n          node-version: '12.x'\n      - name: Test Build\n        run: |\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          npm run build\n  gh-release:\n    if: github.event_name != 'pull_request'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v1\n      - uses: actions/setup-node@v1\n        with:\n          node-version: '12.x'\n      - uses: webfactory/ssh-agent@v0.5.0\n        with:\n          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}\n      - name: Release to GitHub Pages\n        env:\n          USE_SSH: true # \u8fd9\u91cc\u914d\u7f6e\u6210\u4f7f\u7528SSH\u8ba4\u8bc1\uff0c\u4f1a\u7528\u5230\u4e0a\u9762\u914d\u7f6e\u7684 deploy key \u548c secret\n          GIT_USER: git\n          DEPLOYMENT_BRANCH: master # \u8fd9\u91cc\u6307\u7684\u662f alanwei43/alanwei43.github.io \u4ed3\u5e93\u7684 GitHub Page \u4f7f\u7528\u7684\u5206\u652f\u540d\n        run: |\n          git config --global user.email \"actions@github.com\"\n          git config --global user.name \"gh-actions\"\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          npm run deploy\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u53c2\u8003\u8d44\u6599")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.github.com/v3/guides/managing-deploy-keys/"},"GitHub deploy keys")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub secret"))))))}b.isMDXComponent=!0},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);