(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(212),m=t(218),c=t(211),s=t(215);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,i=a.allTagsPath,o=a.name,u=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:i},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},215:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),n=t.n(r),l=t(209),m=t(211),c=t(57),s=t.n(c);function i(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},n.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},218:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(209),m=t(208),c=t(23),s=t(211),i=t(219),o=t(213),u=t(59),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,E,v=e.children,b=e.frontMatter,p=e.metadata,h=e.truncated,N=e.isBlogPostPage,f=void 0!==N&&N,k=p.date,w=p.permalink,_=p.tags,y=p.readingTime,I=b.author,T=b.title,M=b.image,L=b.keywords,P=b.author_url||b.authorURL,J=b.author_title||b.authorTitle,j=b.author_image_url||b.authorImageURL,A=Object(o.a)(M,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,L&&L.length&&n.a.createElement("meta",{name:"keywords",content:L.join(",")}),M&&n.a.createElement("meta",{property:"og:image",content:A}),M&&n.a.createElement("meta",{name:"twitter:image",content:A}),M&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=k.substring(0,10).split("-"),r=t[0],u=d[parseInt(t[1],10)-1],E=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},f?T:n.a.createElement(s.a,{to:w},T)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:k,className:g.a.blogPostDate},u," ",E,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:I})),n.a.createElement("div",{className:"avatar__intro"},I&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},I)),n.a.createElement("small",{className:"avatar__subtitle"},J)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:i.a},v)),(_.length>0||h)&&n.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:p.permalink,"aria-label":"Read more about "+T},n.a.createElement("strong",null,"Read More"))))))}}}]);