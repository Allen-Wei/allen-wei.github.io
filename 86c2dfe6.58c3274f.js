(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(373)),s={title:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:[],description:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",draft:!1,hide_table_of_contents:!1},a={permalink:"/blog/2021/04/11/node-exec-bash-cmd",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-node-exec-bash-cmd.md",source:"@site/src/blog/2021-04-11-node-exec-bash-cmd.md",description:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",date:"2021-04-11T00:00:00.000Z",tags:[],title:"\u4f7f\u7528 Node \u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f",readingTime:2.615,truncated:!0,prevItem:{title:"\u67e5\u770b\u5f53\u524d\u673a\u5668\u7684\u6240\u6709SSH\u8fde\u63a5",permalink:"/blog/2021/04/11/linux-show-ssh-connection"},nextItem:{title:"Windows \u4e0a\u7684TCP\u4ee3\u7406\u8bbe\u7f6e",permalink:"/blog/2021/04/11/tcp-proxy-in-windows"}},l=[],i={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js"},"\u539f\u6587 - Execute a command line binary with Node.js")),Object(c.b)("p",null,"For even newer version of Node.js (v8.1.4), the events and calls are similar or identical to older versions, but it's encouraged to use the standard newer language features. Examples:"),Object(c.b)("p",null,"For buffered, non-stream formatted output (you get it all at once), use ",Object(c.b)("inlineCode",{parentName:"p"},"child_process.exec"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const { exec } = require('child_process');\nexec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {\n  if (err) {\n    // node couldn't execute the command\n    return;\n  }\n\n  // the *entire* stdout and stderr (buffered)\n  console.log(`stdout: ${stdout}`);\n  console.log(`stderr: ${stderr}`);\n});\n")),Object(c.b)("p",null,"You can also use it with Promises:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const util = require('util');\nconst exec = util.promisify(require('child_process').exec);\n\nasync function ls() {\n  const { stdout, stderr } = await exec('ls');\n  console.log('stdout:', stdout);\n  console.log('stderr:', stderr);\n}\nls();\n")),Object(c.b)("p",null,"If you wish to receive the data gradually in chunks (output as a stream), use child_process.spawn:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const { spawn } = require('child_process');\nconst child = spawn('ls', ['-lh', '/usr']);\n\n// use child.stdout.setEncoding('utf8'); if you want text chunks\nchild.stdout.on('data', (chunk) => {\n  // data from standard output is here as buffers\n});\n\n// since these are streams, you can pipe them elsewhere\nchild.stderr.pipe(dest);\n\nchild.on('close', (code) => {\n  console.log(`child process exited with code ${code}`);\n});\n")),Object(c.b)("p",null,"Both of these functions have a synchronous counterpart. An example for ",Object(c.b)("inlineCode",{parentName:"p"},"child_process.execSync"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const { execSync } = require('child_process');\n// stderr is sent to stderr of parent process\n// you can set options.stdio if you want it to go elsewhere\nlet stdout = execSync('ls');\n")),Object(c.b)("p",null,"As well as ",Object(c.b)("inlineCode",{parentName:"p"},"child_process.spawnSync"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const { spawnSync} = require('child_process');\nconst child = spawnSync('ls', ['-lh', '/usr']);\n\nconsole.log('error', child.error);\nconsole.log('stdout ', child.stdout);\nconsole.log('stderr ', child.stderr);\n")),Object(c.b)("p",null,"Note: The following code is still functional, but is primarily targeted at users of ES5 and before."),Object(c.b)("p",null,"The module for spawning child processes with Node.js is well documented in the documentation (v5.0.0). To execute a command and fetch its complete output as a buffer, use child_process.exec:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var exec = require('child_process').exec;\nvar cmd = 'prince -v builds/pdf/book.html -o builds/pdf/book.pdf';\n\nexec(cmd, function(error, stdout, stderr) {\n  // command output is in stdout\n});\nIf you need to use handle process I/O with streams, such as when you are expecting large amounts of output, use child_process.spawn:\n\nvar spawn = require('child_process').spawn;\nvar child = spawn('prince', [\n  '-v', 'builds/pdf/book.html',\n  '-o', 'builds/pdf/book.pdf'\n]);\n\nchild.stdout.on('data', function(chunk) {\n  // output will be here in chunks\n});\n\n// or if you want to send output elsewhere\nchild.stdout.pipe(dest);\n")),Object(c.b)("p",null,"If you are executing a file rather than a command, you might want to use ",Object(c.b)("inlineCode",{parentName:"p"},"child_process.execFile"),", which parameters which are almost identical to spawn, but has a fourth callback parameter like exec for retrieving output buffers. That might look a bit like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var execFile = require('child_process').execFile;\nexecFile(file, args, options, function(error, stdout, stderr) {\n  // command output is in stdout\n});\n")),Object(c.b)("p",null,"As of v0.11.12, Node now supports synchronous spawn and exec. All of the methods described above are asynchronous, and have a synchronous counterpart. Documentation for them can be found here. While they are useful for scripting, do note that unlike the methods used to spawn child processes asynchronously, the synchronous methods do not return an instance of ChildProcess."))}u.isMDXComponent=!0},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||c;return n?o.a.createElement(h,a(a({ref:t},i),{},{components:n})):o.a.createElement(h,a({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var i=2;i<c;i++)s[i]=n[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);