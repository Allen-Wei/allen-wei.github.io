(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{381:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return f})),a.d(n,"metadata",(function(){return w})),a.d(n,"toc",(function(){return y})),a.d(n,"default",(function(){return C}));var t=a(3),i=a(7),r=a(0),c=a.n(r),l=a(387),o=a(401),b=a(391),s=a(308),d=a.n(s),m=37,p=39;var u=function(e){var n=e.lazy,a=e.block,t=e.defaultValue,i=e.values,l=e.groupId,s=e.className,u=Object(o.a)(),O=u.tabGroupChoices,v=u.setTabGroupChoices,j=Object(r.useState)(t),h=j[0],g=j[1],N=r.Children.toArray(e.children);if(null!=l){var f=O[l];null!=f&&f!==h&&i.some((function(e){return e.value===f}))&&g(f)}var w=function(e){g(e),null!=l&&v(l,e)},y=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},s)},i.map((function(e){var n=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(b.a)("tabs__item",d.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,a){switch(a.keyCode){case p:!function(e,n){var a=e.indexOf(n)+1;e[a]?e[a].focus():e[0].focus()}(e,n);break;case m:!function(e,n){var a=e.indexOf(n)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},a)}))),n?Object(r.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))};var O=function(e){var n=e.children,a=e.hidden,t=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:t},n)},v=a(309),j=a.n(v),h=j.a["table-of-contents__link--inline"];function g(e){var n=e.toc,a=e.isChild;return n.length?c.a.createElement("ul",{className:a?"":"table-of-contents"},n.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:"#"+e.id,className:h,dangerouslySetInnerHTML:{__html:e.value}}),c.a.createElement(g,{isChild:!0,toc:e.children}))}))):null}var N=function(e){var n=e.toc;return c.a.createElement("div",{className:Object(b.a)(j.a.tableOfContentsInline)},c.a.createElement(g,{toc:n}))},f={title:"Markdown \u7279\u6027"},w={unversionedId:"guides/docs/markdown-features",id:"guides/docs/markdown-features",isDocsHomePage:!1,title:"Markdown \u7279\u6027",description:"\u539f\u6587 - Markdown Features",source:"@site/src/docs/guides/docs/markdown-features.mdx",slug:"/guides/docs/markdown-features",permalink:"/docs/guides/docs/markdown-features",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/guides/docs/markdown-features.mdx",version:"current",sidebar:"docs",previous:{title:"\u535a\u5ba2",permalink:"/docs/guides/blog"},next:{title:"TypeScript \u652f\u6301",permalink:"/docs/guides/typescript-support"}},y=[{value:"Markdown headers",id:"markdown-headers",children:[]},{value:"\u4f7f\u7528 MDX \u5d4c\u5165 React \u7ec4\u4ef6",id:"\u4f7f\u7528-mdx-\u5d4c\u5165-react-\u7ec4\u4ef6",children:[]},{value:"Tabs",id:"tabs",children:[{value:"\u540c\u6b65\u9009\u4e2dtab",id:"\u540c\u6b65\u9009\u4e2dtab",children:[]}]},{value:"\u5185\u7f6e\u76ee\u5f55",id:"\u5185\u7f6e\u76ee\u5f55",children:[{value:"\u5168\u90e8\u6587\u6863\u76ee\u5f55",id:"\u5168\u90e8\u6587\u6863\u76ee\u5f55",children:[]},{value:"\u81ea\u5b9a\u4e49\u6587\u6863\u76ee\u5f55",id:"\u81ea\u5b9a\u4e49\u6587\u6863\u76ee\u5f55",children:[]}]},{value:"Callouts/admonitions",id:"calloutsadmonitions",children:[{value:"\u6307\u5b9a\u6807\u9898",id:"\u6307\u5b9a\u6807\u9898",children:[]}]},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",children:[{value:"\u4ee3\u7801\u6807\u9898",id:"\u4ee3\u7801\u6807\u9898",children:[]},{value:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91",id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91",children:[]}]}],T={toc:y};function C(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},T,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features"},"\u539f\u6587 - Markdown Features")),Object(l.b)("h2",{id:"markdown-headers"},"Markdown headers"),Object(l.b)("p",null,"\u6587\u6863\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bmarkdown\u5934\u5b57\u6bb5, \u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"---"),"\u5305\u88f9:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id"),": \u6587\u6863\u552f\u4e00\u6807\u8bc6, \u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u6b64\u5b57\u6bb5, \u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u540d(\u4e0d\u5305\u542b\u6269\u5c55\u540d)\u4f5c\u4e3a\u6587\u6863id."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"title"),": \u6587\u6863\u6807\u9898, \u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u6b64\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4f7f\u7528\u6587\u6863id"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hide_title"),": \u662f\u5426\u5728\u6587\u6863\u9876\u90e8\u9690\u85cf\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hide_table_of_contents"),": \u662f\u5426\u9690\u85cf\u6587\u6863\u53f3\u8fb9\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sidebar_label"),": \u7528\u6765\u63a7\u5236\u672c\u6587\u6863\u51fa\u73b0\u5728\u6587\u6863\u4fa7\u8fb9\u680f\u53ca\u5e95\u90e8\u4e0a\u4e00\u7bc7\u6216\u4e0b\u4e00\u7bc7\u6587\u6863\u65f6\u663e\u793a\u7684\u6587\u672c\uff0c\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"title")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"custom_edit_url"),": \u6587\u6863\u7684\u7f16\u8f91\u5730\u5740, \u5982\u679c\u6ca1\u6709\u63d0\u4f9b, \u9ed8\u8ba4\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"docusauru-plugin-content-docs")," \u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"editUrl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"keywords"),": \u6587\u6863\u5bf9\u5e94\u7684meta\u5173\u952e\u8bcd, \u7528\u4e8eSEO"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"description"),": \u6587\u6863\u7684\u63cf\u8ff0\u4fe1\u606f \u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"<head>")," \u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},'<meta name="description" content="..."/>')," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},'<meta property="og:description" content="..."/>')," \u4f7f\u7528, \u7528\u4e8eSEO\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\uff0c\u9ed8\u8ba4\u4f7f\u7528\u6587\u6863\u7b2c\u4e00\u884c\u7684\u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"image"),": \u6587\u7ae0\u7684\u5c01\u9762\u6216\u7f29\u7565\u56fe")),Object(l.b)("p",null,"\u6bd4\u5982:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},"---\nid: doc-markdown\ntitle: Markdown Features\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Markdown :)\ncustom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md\ndescription: How do I find you when I cannot solve this problem\nkeywords:\n  - docs\n  - docusaurus\nimage: https://i.imgur.com/mErPwqL.png\n---\n")),Object(l.b)("h2",{id:"\u4f7f\u7528-mdx-\u5d4c\u5165-react-\u7ec4\u4ef6"},"\u4f7f\u7528 MDX \u5d4c\u5165 React \u7ec4\u4ef6"),Object(l.b)("p",null,"Docusaurus \u5185\u7f6e\u4e86\u5bf9 ",Object(l.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," \u7684\u652f\u6301\uff0c\u5b83\u5141\u8bb8\u4f60\u5728Markdown\u6587\u4ef6\u4e2d\u4e66\u5199JSX\uff0c\u5e76\u6e32\u67d3\u6210React\u7ec4\u4ef6\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u867d\u7136",Object(l.b)("inlineCode",{parentName:"p"},".md"),"\u548c",Object(l.b)("inlineCode",{parentName:"p"},".mdx"),"\u6587\u4ef6\u90fd\u4f7f\u7528MDX\u89e3\u6790\uff0c\u4f46\u662f\u5176\u4e2d\u6709\u4e00\u4e9b\u7ec6\u5fae\u7684\u4e0d\u540c\uff0c\u4e3a\u4e86\u6700\u51c6\u786e\u7684\u89e3\u6790\u548c\u66f4\u597d\u5730\u7f16\u8f91\u5668\u652f\u6301\uff0c\u6211\u4eec\u5efa\u8bae\u5bf9\u5305\u542bMDX\u8bed\u6cd5\u7684\u6587\u4ef6\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},".mdx"),"\u6269\u5c55\u540d\u3002\n\u56e0\u4e3a\u6240\u6709\u7684\u6587\u6863\u90fd\u662f\u7528MDX\u89e3\u6790\uff0c\u6240\u4ee5\u4efb\u4f55HTML\u90fd\u88ab\u5f53\u505aJSX\u3002\u56e0\u6b64\u5982\u679c\u4f60\u9700\u8981\u5bf9\u4e00\u4e2a\u7ec4\u4ef6\u4f7f\u7528\u5185\u8054\u6837\u5f0f\uff0c\u8bf7\u4f7f\u7528JSX\u8bed\u6cd5\u63d0\u4f9b\u6837\u5f0f\u5bf9\u8c61\u3002")),Object(l.b)("p",null,"\u793a\u4f8b: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),Object(l.b)("p",null,"\u4e5f\u53ef\u4ee5\u5bfc\u5165\u81ea\u5df1\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c\u6216\u8005\u901a\u8fc7npm\u5b89\u88c5\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u3002"),Object(l.b)("h2",{id:"tabs"},"Tabs"),Object(l.b)("p",null,"\u5982\u679c\u60f3\u5728Markdown\u6587\u4ef6\u4e2d\u663e\u793atab\u5185\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528MDX\u3002Docusaurus\u4e5f\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684",Object(l.b)("inlineCode",{parentName:"p"},"Tabs"),"\u7ec4\u4ef6:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),Object(l.b)("p",null,"\u7136\u540e\u4f60\u5c31\u80fd\u770b\u5230\u4ee5\u4e0b\u6548\u679c:"),Object(l.b)(u,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(l.b)(O,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(l.b)(O,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(l.b)(O,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0btab\u662f\u7acb\u5373\u6e32\u67d3\uff0c\u53ef\u4ee5\u901a\u8fc7\u5411",Object(l.b)("inlineCode",{parentName:"p"},"Tabs"),"\u7ec4\u4ef6\u4f20\u9012",Object(l.b)("inlineCode",{parentName:"p"},"lazy"),"\u5c5e\u6027\u5ef6\u8fdf\u6e32\u67d3\u3002")),Object(l.b)("h3",{id:"\u540c\u6b65\u9009\u4e2dtab"},"\u540c\u6b65\u9009\u4e2dtab"),Object(l.b)("p",null,"\u901a\u8fc7",Object(l.b)("inlineCode",{parentName:"p"},"groupId"),"\u5c5e\u6027\uff0c\u53ef\u4ee5\u540c\u6b65\u591a\u4e2aTabs\u7684\u9009\u4e2d\u72b6\u6001\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n  ]\n}>\n<TabItem value=\"win\">Use Ctrl + C to copy.</TabItem>\n<TabItem value=\"mac\">Use Command + C to copy.</TabItem>\n</Tabs>\n\n<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n  ]\n}>\n<TabItem value=\"win\">Use Ctrl + V to paste.</TabItem>\n<TabItem value=\"mac\">Use Command + V to paste.</TabItem>\n</Tabs>\n")),Object(l.b)(u,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},Object(l.b)(O,{value:"win",mdxType:"TabItem"},"Use Ctrl + C to copy."),Object(l.b)(O,{value:"mac",mdxType:"TabItem"},"Use Command + C to copy.")),Object(l.b)(u,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},Object(l.b)(O,{value:"win",mdxType:"TabItem"},"Use Ctrl + V to paste."),Object(l.b)(O,{value:"mac",mdxType:"TabItem"},"Use Command + V to paste.")),Object(l.b)("h2",{id:"\u5185\u7f6e\u76ee\u5f55"},"\u5185\u7f6e\u76ee\u5f55"),Object(l.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6bcf\u4e2aMarkdown\u6587\u6863\u7684\u53f3\u4e0a\u89d2\u90fd\u4f1a\u663e\u793a\u6587\u6863\u76ee\u5f55\u3002\u4e0b\u9762\u501f\u52a9 MDX \u5b9e\u73b0\u5728\u6587\u6863\u4e2d\u63d2\u5165\u76ee\u5f55\u3002"),Object(l.b)("h3",{id:"\u5168\u90e8\u6587\u6863\u76ee\u5f55"},"\u5168\u90e8\u6587\u6863\u76ee\u5f55"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"toc"),"\u662f\u5728\u6240\u6709\u7684MDX\u6587\u6863\u4e2d\u90fd\u5b58\u5728\u7684\u53d8\u91cf, \u5b83\u5305\u542b\u4e86MDX\u6587\u6863\u6240\u6709\u9876\u5c42\u76ee\u5f55:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n")),Object(l.b)(N,{toc:y,mdxType:"TOCInline"}),Object(l.b)("h3",{id:"\u81ea\u5b9a\u4e49\u6587\u6863\u76ee\u5f55"},"\u81ea\u5b9a\u4e49\u6587\u6863\u76ee\u5f55"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"toc"),"\u5c5e\u6027\u662f\u4e00\u4e2a\u6587\u6863\u76ee\u5f55\u7684\u5217\u8868:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"type TOCItem = {\n  value: string;\n  id: string;\n  children: TOCItem[];\n};\n")),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u624b\u5199TOC\u76ee\u5f55\u6811\uff0c\u6216\u8005\u4ece",Object(l.b)("inlineCode",{parentName:"p"},"toc"),"\u53d8\u91cf\u4e2d\u8f6c\u6362:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  toc={\n    // Only show 4th and 5th top-level heading\n    [toc[3], toc[4]]\n  }\n/>;\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"THe content"))),Object(l.b)("h2",{id:"calloutsadmonitions"},"Callouts/admonitions"),Object(l.b)("p",null,"\u6211\u4eec\u63d0\u4f9b\u989d\u5916\u7684Markdown\u8bed\u6cd5 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/elviswolcott/remark-admonitions"},"remark-admonitions")," \uff0c\u8b66\u544a\u4fe1\u606f\u53c8\u4e00\u7ec43\u4e2a\u5192\u53f7\u5305\u88f9\uff0c\u6bd4\u5982:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},":::note\nThe content and title *can* include markdown.\n:::\n\n:::tip You can specify an optional title\nHeads up! Here's a pro-tip.\n:::\n\n:::info\nUseful information.\n:::\n\n:::caution\nWarning! You better pay attention!\n:::\n\n:::danger\nDanger danger, mayday!\n:::\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The content and title ",Object(l.b)("em",{parentName:"p"},"can")," include markdown."))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Heads up! Here's a pro-tip."))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Useful information."))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Warning! You better pay attention!"))),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Danger danger, mayday!"))),Object(l.b)("h3",{id:"\u6307\u5b9a\u6807\u9898"},"\u6307\u5b9a\u6807\u9898"),Object(l.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u53ef\u9009\u7684\u6807\u9898:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},":::note Your Title\nThe content and title *can* include markdown.\n:::\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Your Title")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The content and title ",Object(l.b)("em",{parentName:"p"},"can")," include markdown."))),Object(l.b)("h2",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),Object(l.b)("p",null,"\u6587\u6863\u4e2d\u7684\u4ee3\u7801\u5757\u662f\u975e\u5e38\u5f3a\u5927\u7684"),Object(l.b)("h3",{id:"\u4ee3\u7801\u6807\u9898"},"\u4ee3\u7801\u6807\u9898"),Object(l.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u4ee3\u7801\u5757\u8bed\u8a00\u6807\u8bb0\u540e\u6dfb\u52a0",Object(l.b)("inlineCode",{parentName:"p"},"title"),"\u5173\u952e\u8bcd(\u6ce8\u610f\u8bed\u8a00\u6807\u8bc6\u548ctitle\u4e4b\u95f4\u9700\u8981\u52a0\u7a7a\u683c)\u6307\u5b9a\u6807\u9898: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),Object(l.b)("h3",{id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91"},"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91"),Object(l.b)("p",null,"\u5b89\u88c5\u63d2\u4ef6: ",Object(l.b)("inlineCode",{parentName:"p"},"npm install --save @docusaurus/theme-live-codeblock"),"\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}C.isMDXComponent=!0},387:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=t,u=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return a?i.a.createElement(u,l(l({ref:n},b),{},{components:a})):i.a.createElement(u,l({ref:n},b))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var b=2;b<r;b++)c[b]=a[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},391:function(e,n,a){"use strict";function t(e){var n,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=t(e[n]))&&(i&&(i+=" "),i+=a);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(n=t(e))&&(i&&(i+=" "),i+=n);return i}},401:function(e,n,a){"use strict";var t=a(0),i=a(402);n.a=function(){var e=Object(t.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},402:function(e,n,a){"use strict";var t=a(0),i=Object(t.createContext)(void 0);n.a=i}}]);