(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{380:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),c=t.n(l),s=t(375),i=t(377),o=t(376),m=t(378),u=t(57),f=t.n(u);function d(e){var a=e.to,t=e.href,l=e.label,s=e.prependBaseUrlToHref,o=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(a),f=Object(m.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(i.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:s?f:t}:{to:u},o),l)}a.a=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=(a.copyright,a.links),r=void 0===t?[]:t,n=a.logo,l=void 0===n?{}:n;return Object(m.a)(l.src),e?(console.log(e),c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},r&&r.length>0&&c.a.createElement("div",{className:"row footer__links"},r.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(d,e))}))):null)}))),c.a.createElement("div",{className:"footer__bottom text--center"},c.a.createElement("div",{className:"footer__copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Alan's Blog"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",target:"_blank"},"\u672c\u7f51\u7ad9\u7531",c.a.createElement("img",{className:f.a.youPaiLogo,src:"https://gitee.com/alanway/resources/raw/master/images/youpai-logo.png"}),"\u63d0\u4f9bCDN\u52a0\u901f/\u4e91\u5b58\u50a8\u670d\u52a1")))))):null}},384:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),n=t.n(r),l=t(375),c=t(377),s=t(58),i=t.n(s);function o(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},71:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(379),c=t(377),s=t(384);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var i=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return n.a.createElement("div",{key:t},n.a.createElement("h3",null,t),r.map((function(e){return n.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:t})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);