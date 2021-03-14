(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(212)),o={title:"\u642d\u5efa IPSec \u670d\u52a1",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-server",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-ipsec-server.md",source:"@site/blog/2021-03-06-ipsec-server.md",description:"\u4f7f\u7528\u6280\u672f:",date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"}],title:"\u642d\u5efa IPSec \u670d\u52a1",readingTime:1.155,truncated:!0,prevItem:{title:"\u914d\u7f6e IPsec/XAuth VPN \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-xauth"},nextItem:{title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",permalink:"/blog/2021/03/06/sublime-right-click-open"}},l=[{value:"\u670d\u52a1\u5668\u5b89\u88c5Docker\u73af\u5883",id:"\u670d\u52a1\u5668\u5b89\u88c5docker\u73af\u5883",children:[{value:"Ubuntu",id:"ubuntu",children:[]},{value:"CentOS",id:"centos",children:[]}]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[]},{value:"\u5ba2\u6237\u7aef\u8fde\u63a5",id:"\u5ba2\u6237\u7aef\u8fde\u63a5",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u6280\u672f: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hwdsl2/setup-ipsec-vpn"},"setup-ipsec")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hwdsl2/docker-ipsec-vpn-server"},"docker-ipsec-server"))),Object(c.b)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528Docker\u65b9\u5f0f\u90e8\u7f72 IPSec \u670d\u52a1\u3002"),Object(c.b)("h2",{id:"\u670d\u52a1\u5668\u5b89\u88c5docker\u73af\u5883"},"\u670d\u52a1\u5668\u5b89\u88c5Docker\u73af\u5883"),Object(c.b)("h3",{id:"ubuntu"},"Ubuntu"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'# Update the apt package index\napt-get update\n\n# Install packages to allow apt to use a repository over HTTPS\napt-get install  apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y\n\n# Add Docker\u2019s official GPG key\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -\napt-key fingerprint 0EBFCD88\n\n# Set up the stable repository\nadd-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\napt-get update\n\n# install\napt-get install docker-ce docker-ce-cli containerd.io -y\n')),Object(c.b)("h3",{id:"centos"},"CentOS"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# Install required packages\nyum install -y yum-utils device-mapper-persistent-data lvm2 -y\n\n# Use the following command to set up the stable repository \nyum-config-manager --add-repo  https://download.docker.com/linux/centos/docker-ce.repo \n\n# Install the latest version of Docker CE and containerd\nyum install docker-ce docker-ce-cli containerd.io -y\n")),Object(c.b)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),Object(c.b)("p",null,"\u5148\u521b\u5efa ",Object(c.b)("inlineCode",{parentName:"p"},"ipsec.env")," \u6587\u4ef6, \u7528\u4e8e\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5VPN\u670d\u52a1\u5668\u6240\u9700\u8981\u7684"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'touch ipsec.env # \u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u5668\u6240\u9700\u8981\u7684\u8d26\u53f7\u5bc6\u7801\u7b49\u914d\u7f6e\u4fe1\u606f\necho "VPN_IPSEC_PSK=b558fC19z34oa2fa" >> ipsec.env # \u5171\u4eab\u5bc6\u94a5, \u5ba2\u6237\u7aef\u8fde\u63a5\u662f\u9700\u8981\necho "VPN_USER=2508681c" >> ipsec.env # \u7528\u6237\u540d, \u5ba2\u6237\u7aef\u8fde\u63a5\u9700\u8981\necho "VPN_PASSWORD=76644c20" >> ipsec.env # \u5bc6\u7801, \u5ba2\u6237\u7aef\u8fde\u63a5\u9700\u8981\n\nmodprobe af_key\ndocker run --name ipsec-server \\\n    --env-file ./ipsec.env \\\n    --restart=always \\\n    -p 500:500/udp \\\n    -p 4500:4500/udp \\\n    -v /lib/modules:/lib/modules:ro \\\n    -d \\\n    --privileged \\\n    hwdsl2/ipsec-vpn-server\n')),Object(c.b)("p",null,"\u4ee5\u4e0b\u662f\u5176\u4ed6\u547d\u4ee4:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u8fdb\u5165 IPSec \u5bb9\u5668\ndocker exec -it ipsec-server bash \n\n# \u67e5\u770b\u8fde\u63a5\u6570\ndocker exec -it ipsec-server ipsec whack --trafficstatus\n\n# \u6253\u5370\u65e5\u5fd7 \ndocker logs ipsec-server\n\n# \u67e5\u770b\u8fd0\u884c\u72b6\u6001\ndocker exec -it ipsec-server ipsec status\n")),Object(c.b)("h2",{id:"\u5ba2\u6237\u7aef\u8fde\u63a5"},"\u5ba2\u6237\u7aef\u8fde\u63a5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"IPSec/L2TP \u65b9\u5f0f\u8fde\u63a5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/blog/2021/03/06/ipsec-clients-ikev2"},"IPSec/IKEv2 \u65b9\u5f0f\u8fde\u63a5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/blog/2021/03/06/ipsec-clients-xauth"},"xauth \u65b9\u5f0f\u8fde\u63a5"))))}s.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);