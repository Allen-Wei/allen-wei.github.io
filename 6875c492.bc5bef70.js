(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{190:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(379),m=t(387),c=t(377),o=t(384);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=a.allTagsPath,i=a.name,u=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"',wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(o.a,{sidebar:r})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',i,'"'),l.a.createElement(c.a,{href:s},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}},380:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(0),m=t.n(n),c=t(375),o=t(377),s=t(376),i=t(378),u=t(57),g=t.n(u);function d(e){var a=e.to,t=e.href,n=e.label,c=e.prependBaseUrlToHref,s=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(i.a)(a),g=Object(i.a)(t,{forcePrependBaseUrl:!0});return m.a.createElement(o.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:c?g:t}:{to:u},s),n)}a.a=function(){var e=Object(s.useThemeConfig)().footer,a=e||{},t=(a.copyright,a.links),r=void 0===t?[]:t,l=a.logo,n=void 0===l?{}:l;return Object(i.a)(n.src),e?(console.log(e),m.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},m.a.createElement("div",{className:"container"},r&&r.length>0&&m.a.createElement("div",{className:"row footer__links"},r.map((function(e,a){return m.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?m.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?m.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?m.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):m.a.createElement("li",{key:e.href||e.to,className:"footer__item"},m.a.createElement(d,e))}))):null)}))),m.a.createElement("div",{className:"footer__bottom text--center"},m.a.createElement("div",{className:"footer__copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Alan's Blog"),m.a.createElement("div",null,m.a.createElement("a",{href:"https://www.upyun.com/?utm_source=lianmengutm_medium=referral"},"\u672c\u7f51\u7ad9\u7531",m.a.createElement("img",{className:g.a.youPaiLogo,src:"https://gitee.com/alanway/resources/raw/master/images/youpai-logo.png"}),"\u63d0\u4f9bCDN\u52a0\u901f/\u4e91\u5b58\u50a8\u670d\u52a1")))))):null}},384:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),l=t.n(r),n=t(375),m=t(377),c=t(58),o=t.n(c);function s(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(o.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:o.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:o.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},l.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))))}},387:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(375),m=t(373),c=t(23),o=t(377),s=t(394),i=t(378),u=t(59),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,E,f=e.children,h=e.frontMatter,p=e.metadata,v=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,_=p.date,k=p.permalink,w=p.tags,y=p.readingTime,T=h.author,j=h.title,O=h.image,I=h.keywords,L=h.author_url||h.authorURL,M=h.author_title||h.authorTitle,P=h.author_image_url||h.authorImageURL,A=Object(i.a)(O,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,I&&I.length&&l.a.createElement("meta",{name:"keywords",content:I.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:A}),O&&l.a.createElement("meta",{name:"twitter:image",content:A}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),l.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=_.substring(0,10).split("-"),r=t[0],u=d[parseInt(t[1],10)-1],E=parseInt(t[2],10),l.a.createElement("header",null,l.a.createElement(a,{className:Object(n.a)("margin-bottom--sm",g.a.blogPostTitle)},N?j:l.a.createElement(o.a,{to:k},j)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:_,className:g.a.blogPostDate},u," ",E,", ",r," ",y&&l.a.createElement(l.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),l.a.createElement("div",{className:"avatar margin-vert--md"},P&&l.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:L,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:P,alt:T})),l.a.createElement("div",{className:"avatar__intro"},T&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement("a",{href:L,target:"_blank",rel:"noreferrer noopener"},T)),l.a.createElement("small",{className:"avatar__subtitle"},M)))))),l.a.createElement("section",{className:"markdown"},l.a.createElement(m.a,{components:s.a},f)),(w.length>0||v)&&l.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(o.a,{to:p.permalink,"aria-label":"Read more about "+j},l.a.createElement("strong",null,"Read More"))))))}}}]);