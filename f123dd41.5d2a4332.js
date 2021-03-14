(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(212)),o={title:"\u5982\u4f55\u4f7f\u7528Maven\u521b\u5efa\u53ef\u6267\u884c\u7684JAR\u6587\u4ef6",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","maven"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/03/06/how-can-i-create-an-executable-jar-with-dependencies-using-maven",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-how-can-i-create-an-executable-jar-with-dependencies-using-maven.md",source:"@site/blog/2021-03-06-how-can-i-create-an-executable-jar-with-dependencies-using-maven.md",description:"\u539f\u6587 - \u4f7f\u7528Maven\u6253\u5305\u53ef\u6267\u884cJAR\u7a0b\u5e8f",date:"2021-03-06T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"maven",permalink:"/blog/tags/maven"}],title:"\u5982\u4f55\u4f7f\u7528Maven\u521b\u5efa\u53ef\u6267\u884c\u7684JAR\u6587\u4ef6",readingTime:1.225,truncated:!0,prevItem:{title:"IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",permalink:"/blog/2021/03/06/ipsec-clients-ikev2"},nextItem:{title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-l2tp"}},c=[{value:"\u65b9\u6848 1",id:"\u65b9\u6848-1",children:[]},{value:"\u65b9\u6848 2",id:"\u65b9\u6848-2",children:[]},{value:"\u65b9\u6848 3",id:"\u65b9\u6848-3",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/574594/how-can-i-create-an-executable-jar-with-dependencies-using-maven"},"\u539f\u6587 - \u4f7f\u7528Maven\u6253\u5305\u53ef\u6267\u884cJAR\u7a0b\u5e8f")),Object(i.b)("h2",{id:"\u65b9\u6848-1"},"\u65b9\u6848 1"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<build>\n  <plugins>\n    <plugin>\n      <artifactId>maven-assembly-plugin</artifactId>\n      <configuration>\n        <archive>\n          <manifest>\n            <mainClass>fully.qualified.MainClass</mainClass>\n          </manifest>\n        </archive>\n        <descriptorRefs>\n          <descriptorRef>jar-with-dependencies</descriptorRef>\n        </descriptorRefs>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>\n")),Object(i.b)("p",null,"and you run it with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mvn clean compile assembly:single\n")),Object(i.b)("h2",{id:"\u65b9\u6848-2"},"\u65b9\u6848 2"),Object(i.b)("p",null,"You can use the dependency-plugin to generate all dependencies in a separate directory before the package phase and then include that in the classpath of the manifest:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-dependency-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>copy-dependencies</id>\n            <phase>prepare-package</phase>\n            <goals>\n                <goal>copy-dependencies</goal>\n            </goals>\n            <configuration>\n                <outputDirectory>${project.build.directory}/lib</outputDirectory>\n                <overWriteReleases>false</overWriteReleases>\n                <overWriteSnapshots>false</overWriteSnapshots>\n                <overWriteIfNewer>true</overWriteIfNewer>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <configuration>\n        <archive>\n            <manifest>\n                <addClasspath>true</addClasspath>\n                <classpathPrefix>lib/</classpathPrefix>\n                <mainClass>theMainClass</mainClass>\n            </manifest>\n        </archive>\n    </configuration>\n</plugin>\n")),Object(i.b)("p",null,"Alternatively use ",Object(i.b)("inlineCode",{parentName:"p"},"${project.build.directory}/classes/lib")," as OutputDirectory to integrate all jar-files into the main jar, but then you will need to add custom classloading code to load the jars."),Object(i.b)("h2",{id:"\u65b9\u6848-3"},"\u65b9\u6848 3"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://robert-reiz.com/2011/10/19/uber-jar-with-maven/"},"Uber JAR with Maven")),Object(i.b)("p",null,"By default maven is generating a small JAR file, which just contains your compiled classes and other project files. If you want to have a single JAR file which also includes all dependent JAR files, you have to create a uber JAR. You can do that with the maven shade plugin. Just put this lines of xml into your pom.xml."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <version>1.4</version>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals>\n                        <goal>shade</goal>\n                    </goals>\n                    <configuration>\n                        <shadedArtifactAttached>true</shadedArtifactAttached>\n                        <shadedClassifierName>all</shadedClassifierName>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n")),Object(i.b)("p",null,"In Maven you can solve every problem. You just need enough XML code for that. If you still have problems, than probably your pom.xml is to short."))}u.isMDXComponent=!0},212:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(f,l(l({ref:n},s),{},{components:t})):r.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);