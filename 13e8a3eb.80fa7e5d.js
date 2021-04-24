(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var i=a(3),r=a(7),n=(a(0),a(395)),l={title:"Chrome flags",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["chrome flags","chrome","puppeteer","chrome-launcher"],description:"Chrome\u652f\u6301\u7684flags\u5217\u8868",draft:!1,hide_table_of_contents:!1},o={permalink:"/blog/2021/03/15/chrome-flags",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-15-chrome-flags.md",source:"@site/src/blog/2021-03-15-chrome-flags.md",description:"Chrome\u652f\u6301\u7684flags\u5217\u8868",date:"2021-03-15T00:00:00.000Z",tags:[{label:"chrome flags",permalink:"/blog/tags/chrome-flags"},{label:"chrome",permalink:"/blog/tags/chrome"},{label:"puppeteer",permalink:"/blog/tags/puppeteer"},{label:"chrome-launcher",permalink:"/blog/tags/chrome-launcher"}],title:"Chrome flags",readingTime:4.96,truncated:!0,prevItem:{title:"Visual Studio Code \u4fa7\u8fb9\u680f\u5b9a\u4f4d\u5230\u5f53\u524d\u6587\u4ef6",permalink:"/blog/2021/03/20/visual-studio-code-reveal"},nextItem:{title:"Let's Encrypt\u8bc1\u4e66\u7533\u8bf7\u53ca\u914d\u7f6e",permalink:"/blog/2021/03/14/lets-encrypt-ssl-certificate"}},b=[{value:"\u5e38\u7528",id:"\u5e38\u7528",children:[]},{value:"SSL \u8bc1\u4e66",id:"ssl-\u8bc1\u4e66",children:[]},{value:"\u901a\u5e38\u65e0\u7528\u7684\u6d4f\u89c8\u5668\u7279\u6027",id:"\u901a\u5e38\u65e0\u7528\u7684\u6d4f\u89c8\u5668\u7279\u6027",children:[]},{value:"\u6027\u80fd\u548cWeb\u5e73\u53f0\u884c\u4e3a",id:"\u6027\u80fd\u548cweb\u5e73\u53f0\u884c\u4e3a",children:[]},{value:"Test &amp; debugging flags",id:"test--debugging-flags",children:[]},{value:"Background updates, networking, reporting",id:"background-updates-networking-reporting",children:[]},{value:"Rendering &amp; GPU",id:"rendering--gpu",children:[]},{value:"Window &amp; screen management",id:"window--screen-management",children:[]},{value:"Process management",id:"process-management",children:[]},{value:"Headless",id:"headless",children:[]},{value:"~Removed~ flags",id:"removed-flags",children:[]},{value:"Sources",id:"sources",children:[]},{value:"\u6d4f\u89c8\u5668\u6240\u6709 flags",id:"\u6d4f\u89c8\u5668\u6240\u6709-flags",children:[]},{value:"Feature Flags FYI",id:"feature-flags-fyi",children:[]}],c={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Chrome \u5de5\u5177 flags \u5217\u8868, \u6458\u81ea ",Object(n.b)("a",{parentName:"p",href:"https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md"},"Chrome Flags for Tooling"),": "),Object(n.b)("h2",{id:"\u5e38\u7528"},"\u5e38\u7528"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--proxy-server=http://192.168.1.199:3210")," \u8bbe\u7f6eHTTP\u4ee3\u7406"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--proxy-bypass-list")," \u5ffd\u7565\u7684 server host")),Object(n.b)("h2",{id:"ssl-\u8bc1\u4e66"},"SSL \u8bc1\u4e66"),Object(n.b)("p",null,"\u89e3\u51b3 Chrome\u8bbe\u7f6e\u4f7f\u7528\u4ee3\u7406\uff0c\u4ee3\u7406\u5de5\u5177\u8bc1\u4e66\u672a\u88ab\u4fe1\u4efb\u5bfc\u81f4\u7684\u7b7e\u540d\u95ee\u9898\u3002"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u4ee3\u7406\u5de5\u5177\u662f\u672c\u5730\u8fd0\u884c\uff0c\u53ef\u4ee5\u5728Chrome\u542f\u52a8\u65f6\u589e\u52a0 ",Object(n.b)("inlineCode",{parentName:"li"},"--allow-insecure-localhost")," flag\u3002"),Object(n.b)("li",{parentName:"ul"},"\u6216\u8005\u5ffd\u7565\u6240\u6709\u8bc1\u4e66\u9519\u8bef ",Object(n.b)("inlineCode",{parentName:"li"},"--ignore-certificate-errors"))),Object(n.b)("p",null,"\u672c\u6587\u5c1d\u8bd5\u8bb0\u5f55\u548c\u81ea\u52a8\u5316\u5de5\u5177\u4ee5\u53ca\u57fa\u51c6\u6d4b\u8bd5\u76f8\u5173\u7684Chrome flags\u5217\u8868. "),Object(n.b)("p",null,"\u6ca1\u6709\u76f8\u540c\u7684\u573a\u666f, \u6240\u4ee5\u4f60\u9700\u8981\u9009\u62e9\u6700\u9002\u5408\u81ea\u5df1\u7684flag. "),Object(n.b)("h2",{id:"\u901a\u5e38\u65e0\u7528\u7684\u6d4f\u89c8\u5668\u7279\u6027"},"\u901a\u5e38\u65e0\u7528\u7684\u6d4f\u89c8\u5668\u7279\u6027"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-client-side-phishing-detection"),": \u7981\u7528\u5ba2\u6237\u7aef\u9493\u9c7c\u68c0\u6d4b"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-component-extensions-with-background-pages"),": \u7981\u7528\u4e00\u4e9b ",Object(n.b)("inlineCode",{parentName:"li"},"--disable-extensions")," \u65e0\u6cd5\u7981\u7528\u7684\u5185\u7f6e\u6269\u5c55"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-default-apps"),": \u7981\u6b62\u5b89\u88c5\u9ed8\u8ba4App"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-extensions"),": \u7981\u7528\u6240\u6709Chrome\u6269\u5c55"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--mute-audio"),": \u9759\u97f3"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--no-default-browser-check"),": \u7981\u7528\u9ed8\u8ba4\u6d4f\u89c8\u5668\u68c0\u6d4b"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--no-first-run"),": \u8df3\u8fc7\u9996\u6b21\u8fd0\u884c\u5411\u5bfc"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--use-fake-device-for-media-stream"),": Use fake device for Media Stream to replace camera and microphone"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--use-file-for-fake-video-capture=<path-to-file>"),": Use file for fake video capture (.y4m or .mjpeg) Needs ",Object(n.b)("inlineCode",{parentName:"li"},"--use-fake-device-for-media-stream"))),Object(n.b)("h2",{id:"\u6027\u80fd\u548cweb\u5e73\u53f0\u884c\u4e3a"},"\u6027\u80fd\u548cWeb\u5e73\u53f0\u884c\u4e3a"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--allow-running-insecure-content")," \u5141\u8bb8\u8fd0\u884c\u4e0d\u5b89\u5168\u7684\u5185\u5bb9"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--autoplay-policy=user-gesture-required"),": \u4e0d\u8981\u6e32\u67d3\u89c6\u9891"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-background-timer-throttling"),": \u7981\u7528\u540e\u53f0\u9875\u9762\u6216tab\u6296\u52a8\u8ba1\u65f6\u5668"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-backgrounding-occluded-windows")," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-features=ScriptStreaming"),": V8 script streaming"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-hang-monitor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-ipc-flooding-protection"),": Some javascript functions can be used to flood the browser process with IPC. By default, protection is on to limit the number of IPC sent to 10 per second per frame. This flag disables it. ",Object(n.b)("a",{parentName:"li",href:"https://crrev.com/604305"},"https://crrev.com/604305")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-notifications"),": Disables the Web Notification and the Push APIs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-popup-blocking"),": Disable popup blocking.  ",Object(n.b)("inlineCode",{parentName:"li"},"--block-new-web-contents")," is the strict version of this."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-prompt-on-repost"),": Reloading a page that came from a POST normally prompts the user."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-renderer-backgrounding"),": This disables non-foreground tabs from getting a lower process priority This doesn't (on its own) affect timers or painting behavior. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/karma-runner/karma-chrome-launcher/issues/123"},"karma-chrome-launcher#123")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--js-flags=--random-seed=1157259157"),": Initialize V8's RNG with a fixed seed.")),Object(n.b)("h2",{id:"test--debugging-flags"},"Test & debugging flags"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-device-discovery-notifications"),': Avoid messages like "New printer on your network"'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--enable-automation"),": Disable a few things considered not appropriate for automation. (",Object(n.b)("a",{parentName:"li",href:"https://docs.google.com/a/google.com/document/d/1JYj9K61UyxIYavR8_HATYIglR9T_rDwAtLLsD3fbDQg/preview"},"Original design doc"),", though renamed ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/2564973002#msg24"},"here"),") ",Object(n.b)("a",{parentName:"li",href:"https://cs.chromium.org/search/?q=kEnableAutomation&type=cs"},"codesearch"),". Note that some projects have chosen to ",Object(n.b)("strong",{parentName:"li"},"avoid")," using this flag: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/web-platform-tests/wpt/pull/6348"},"web-platform-tests/wpt/#6348"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"disables bubble notification about running development/unpacked extensions"),Object(n.b)("li",{parentName:"ul"},"disables the password saving UI (which ",Object(n.b)("a",{parentName:"li",href:"https://source.chromium.org/chromium/chromium/src/+/master:chrome/browser/password_manager/chrome_password_manager_client.cc;l=295-298;drc=00053fb4d880a925c890193b74a8ff35e1cef2a0"},"covers")," the usecase of the ",Object(n.b)("a",{parentName:"li",href:"https://bugs.chromium.org/p/chromedriver/issues/detail?id=1015"},"removed")," ",Object(n.b)("inlineCode",{parentName:"li"},"--disable-save-password-bubble")," flag)"),Object(n.b)("li",{parentName:"ul"},"disables infobar animations"),Object(n.b)("li",{parentName:"ul"},"disables auto-reloading on network errors (",Object(n.b)("a",{parentName:"li",href:"https://cs.chromium.org/chromium/src/chrome/renderer/net/net_error_helper_core.cc?l=917&rcl=6eaf0af71262eb876764c6237ee2fe021a3e7a18"},"source"),")"),Object(n.b)("li",{parentName:"ul"},"means the default browser check prompt isn't shown"),Object(n.b)("li",{parentName:"ul"},"avoids showing these 3 infobars: ShowBadFlagsPrompt, GoogleApiKeysInfoBarDelegate, ObsoleteSystemInfoBarDelegate"),Object(n.b)("li",{parentName:"ul"},"adds this infobar: ",Object(n.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/39191/30349667-92a7a086-97c8-11e7-86b2-1365e3d407e3.png",alt:"image"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--enable-logging=stderr"),": Logging behavior slightly more appropriate for a server-type process."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--log-level=0"),": 0 means INFO and higher."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--password-store=basic"),": Avoid potential instability of using Gnome Keyring or KDE wallet. ",Object(n.b)("a",{parentName:"li",href:"https://chromium.googlesource.com/chromium/src/+/master/docs/linux/password_storage.md"},"chromium/linux/password_storage.md")," ",Object(n.b)("a",{parentName:"li",href:"https://crbug.com/571003"},"https://crbug.com/571003")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--remote-debugging-pipe"),": more secure than using protocol over a websocket"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--silent-debugger-extension-api"),": Does not show an infobar when a Chrome extension attaches to a page using ",Object(n.b)("inlineCode",{parentName:"li"},"chrome.debugger")," page. Required to attach to extension background pages."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--test-type"),": Basically the 2014 version of ",Object(n.b)("inlineCode",{parentName:"li"},"--enable-automation"),". ",Object(n.b)("a",{parentName:"li",href:"https://cs.chromium.org/search/?q=kTestType%5Cb&type=cs"},"codesearch"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"It avoids creating application stubs in ~/Applications on mac."),Object(n.b)("li",{parentName:"ul"},"It makes exit codes slightly more correct"),Object(n.b)("li",{parentName:"ul"},"windows navigation jumplists arent updated ",Object(n.b)("a",{parentName:"li",href:"https://crbug.com/389375"},"https://crbug.com/389375")),Object(n.b)("li",{parentName:"ul"},"doesn't start some chrome StartPageService"),Object(n.b)("li",{parentName:"ul"},"disables initializing chromecast service"),Object(n.b)("li",{parentName:"ul"},'"Component extensions with background pages are not enabled during tests because they generate a lot of background behavior that can interfere."'),Object(n.b)("li",{parentName:"ul"},"when quitting the browser, it disables additional checks that may stop that quitting process. (like unsaved form modifications or unhandled profile notifications..)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--use-mock-keychain"),": Use mock keychain on Mac to prevent blocking permissions dialogs. ",Object(n.b)("a",{parentName:"li",href:"https://crbug.com/865247"},"https://crbug.com/865247"))),Object(n.b)("h2",{id:"background-updates-networking-reporting"},"Background updates, networking, reporting"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-background-networking"),": Disable various background network services, including extension updating,safe browsing service, upgrade detector, translate, UMA"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-breakpad"),": Disable crashdump collection (reporting is already disabled in Chromium)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-component-update"),": Don't update the browser 'components' listed at chrome://components/"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-domain-reliability"),": Disables Domain Reliability Monitoring, which tracks whether the browser has difficulty contacting Google-owned sites and uploads reports to Google."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-sync"),": Disable syncing to a Google account"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--enable-crash-reporter-for-testing"),": Used for turning on Breakpad crash reporting in a debug environment where crash reporting is typically compiled but disabled."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--metrics-recording-only"),": Disable reporting to UMA, but allows for collection")),Object(n.b)("h2",{id:"rendering--gpu"},"Rendering & GPU"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--deterministic-mode"),": An experimental meta flag. This sets the below indented flags which put the browser into a mode where rendering (border radius, etc) is deterministic and begin frames should be issued over DevTools Protocol. ",Object(n.b)("a",{parentName:"li",href:"https://source.chromium.org/chromium/chromium/src/+/master:headless/app/headless_shell.cc;drc=df45d1abbc20abc7670643adda6d9625eea55b4d"},"codesearch"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--run-all-compositor-stages-before-draw")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-new-content-rendering-timeout")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--enable-begin-frame-control")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-threaded-animation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-threaded-scrolling")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-checker-imaging")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-image-animation-resync")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-features=PaintHolding"),": Don't defer paint commits (normally used to avoid flash of unstyled content)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-partial-raster"),": ",Object(n.b)("a",{parentName:"li",href:"https://crbug.com/919955"},"https://crbug.com/919955")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-skia-runtime-opts"),": Do not use runtime-detected high-end CPU optimizations in Skia."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--in-process-gpu"),": Saves some memory by moving GPU process into a browser process thread"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'--use-gl="swiftshader"'),": Select which implementation of GL the GPU process should use. Options are: ",Object(n.b)("inlineCode",{parentName:"li"},"desktop"),": whatever desktop OpenGL the user has installed (Linux and Mac default). ",Object(n.b)("inlineCode",{parentName:"li"},"egl"),": whatever EGL / GLES2 the user has installed (Windows default - actually ANGLE). ",Object(n.b)("inlineCode",{parentName:"li"},"swiftshader"),": The SwiftShader software renderer.")),Object(n.b)("h2",{id:"window--screen-management"},"Window & screen management"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--block-new-web-contents"),": All pop-ups and calls to window.open will fail."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--force-color-profile=srgb"),": Force all monitors to be treated as though they have the specified color profile."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--force-device-scale-factor=1")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--new-window"),": Launches URL in new browser window."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--window-position=0,0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--window-size=1600,1024"))),Object(n.b)("h2",{id:"process-management"},"Process management"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-features=site-per-process"),": Disables OOPIF. ",Object(n.b)("a",{parentName:"li",href:"https://www.chromium.org/Home/chromium-security/site-isolation"},"https://www.chromium.org/Home/chromium-security/site-isolation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--process-per-tab"),": ",Object(n.b)("a",{parentName:"li",href:"https://source.chromium.org/chromium/chromium/src/+/master:content/public/common/content_switches.cc;l=602-605;drc=2149a93144ce2030ab20863c2983b6c9d7bfd177"},"Doesn't do anything"),". Use --single-process instead."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--single-process"),": Runs the renderer and plugins in the same process as the browser.")),Object(n.b)("h2",{id:"headless"},"Headless"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-dev-shm-usage"),": Often used in Lambda, Cloud Functions scenarios. (",Object(n.b)("a",{parentName:"li",href:"https://github.com/GoogleChrome/puppeteer/issues/1834"},"pptr issue"),", ",Object(n.b)("a",{parentName:"li",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--no-sandbox"),": ",Object(n.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox"},"Sometimes used")," with headless, though not recommended."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-gpu"),": Sometimes ",Object(n.b)("a",{parentName:"li",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=737678"},"used")," with headless.")),Object(n.b)("h2",{id:"removed-flags"},"~Removed~ flags"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-add-to-shelf"),": ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/2944283002"},"Removed June 2017")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-background-downloads"),": ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/607843002"},"Removed Oct 2014"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-browser-side-navigation")," Disabled PlzNavigate."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-datasaver-prompt")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-desktop-notifications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-features=TranslateUI"),": renamed ",Object(n.b)("inlineCode",{parentName:"li"},"TranslateUI")," to ",Object(n.b)("inlineCode",{parentName:"li"},"Translate")," in ",Object(n.b)("a",{parentName:"li",href:"https://chromium-review.googlesource.com/c/chromium/src/+/2404484"},"Sept 2020"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-infobars"),": ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/240193003"},"Removed April 2014")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-save-password-bubble"),": ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/1978563002"},"Removed May 2016")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--disable-translate"),": ",Object(n.b)("a",{parentName:"li",href:"https://codereview.chromium.org/2819813002/"},"Removed April 2017")," Used to disable built-in Google Translate service."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--ignore-autoplay-restrictions"),": ",Object(n.b)("a",{parentName:"li",href:"https://chromium-review.googlesource.com/#/c/816855/"},"Removed December 2017")," Can use ",Object(n.b)("inlineCode",{parentName:"li"},"--autoplay-policy=no-user-gesture-required")," instead."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"--safebrowsing-disable-auto-update"),": ",Object(n.b)("a",{parentName:"li",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=74848#c26"},"Removed Nov 2017"))),Object(n.b)("h2",{id:"sources"},"Sources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/GoogleChrome/chrome-launcher/blob/master/src/flags.ts"},"chrome-launcher's flags")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome_launcher.cc?type=cs&q=f:chrome_launcher++kDesktopSwitches&sq=package:chromium"},"Chromedriver's flags")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/src/node/Launcher.ts"},"Puppeteer's flags")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/WPO-Foundation/wptagent/blob/master/internal/chrome_desktop.py"},"WebpageTest's flags")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://source.chromium.org/search?q=f:catapult%20f:desktop%20symbol:GetBrowserStartupArgs&ss=chromium%2Fchromium%2Fsrc"},"Catapult's flags")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/karma-runner/karma-chrome-launcher/blob/master/index.js"},"Karma's flags"))),Object(n.b)("h2",{id:"\u6d4f\u89c8\u5668\u6240\u6709-flags"},"\u6d4f\u89c8\u5668\u6240\u6709 flags"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/blog/2021/03/21/chromium-command-line-switches"},"The canonical list of Chrome command-line switches on peter.sh")," (maintained by the Chromium team)")),Object(n.b)("p",null,"FYI: (Probably) all flags are defined in files matching the pattern of ",Object(n.b)("a",{parentName:"p",href:"f:_switches.cc"},Object(n.b)("inlineCode",{parentName:"a"},"*_switches.cc")),"."),Object(n.b)("h2",{id:"feature-flags-fyi"},"Feature Flags FYI"),Object(n.b)("p",null,"Chromium and Blink use feature flags to disable/enable many features at runtime. Chromium has ",Object(n.b)("a",{parentName:"p",href:"https://source.chromium.org/search?q=%22const%20base::Feature%22%20f:%5C.cc&sq=&ss=chromium%2Fchromium%2Fsrc"},"~400 features")," that can be toggled with ",Object(n.b)("inlineCode",{parentName:"p"},"--enable-features")," / ",Object(n.b)("inlineCode",{parentName:"p"},"--disable-features"),". Indepdently, Blink has ",Object(n.b)("a",{parentName:"p",href:"https://source.chromium.org/chromium/chromium/src/+/master:out/Debug/gen/third_party/blink/renderer/platform/runtime_enabled_features.cc;l=1559;drc=170473ad887b7990079f1f996b126548569c5902"},"many features")," that can be toggled ",Object(n.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/platform/RuntimeEnabledFeatures.md#command_line-switches"},"with commandline switches"),": ",Object(n.b)("inlineCode",{parentName:"p"},"--enable-blink-features")," / ",Object(n.b)("inlineCode",{parentName:"p"},"--disable-blink-features"),"."))}s.isMDXComponent=!0},395:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);