(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{189:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return p})),a.d(n,"default",(function(){return l}));var t=a(3),r=a(7),c=(a(0),a(217)),o={title:"\u4f7f\u7528Maven\u521b\u5efa\u4e00\u4e2aJava\u9879\u76ee",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["java","maven"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/create-java-project-use-maven",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-create-java-project-use-maven.md",source:"@site/blog/2021-03-06-create-java-project-use-maven.md",description:"\u539f\u6587",date:"2021-03-06T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"maven",permalink:"/blog/tags/maven"}],title:"\u4f7f\u7528Maven\u521b\u5efa\u4e00\u4e2aJava\u9879\u76ee",readingTime:4.56,truncated:!0,prevItem:{title:"\u914d\u7f6e\u53f3\u51fb\u4f7f\u7528Sublime\u6253\u5f00\u6587\u4ef6\u5939",permalink:"/blog/2021/03/06/sublime-right-click-open"},nextItem:{title:"\u642d\u5efa IPSec \u670d\u52a1",permalink:"/blog/2021/03/06/ipsec-server"}},p=[{value:"1. Create a Project from Maven Template",id:"1-create-a-project-from-maven-template",children:[]},{value:"2. Maven Directory Layout",id:"2-maven-directory-layout",children:[]},{value:"3. POM file",id:"3-pom-file",children:[]},{value:"4. Update POM",id:"4-update-pom",children:[{value:"4.1 Add compiler properties to tell Maven use a specified JDK version to compile the source code.",id:"41-add-compiler-properties-to-tell-maven-use-a-specified-jdk-version-to-compile-the-source-code",children:[]},{value:"4.2 Update jUnit to 4.12",id:"42-update-junit-to-412",children:[]},{value:"4.3 Add commons-codec for SHA hashing.",id:"43-add-commons-codec-for-sha-hashing",children:[]},{value:"4.4 Complete updated version.",id:"44-complete-updated-version",children:[]}]},{value:"5. Write Code",id:"5-write-code",children:[{value:"5.1 Update the App.java to accept an input and hash it with a SHA-256 algorithm.",id:"51-update-the-appjava-to-accept-an-input-and-hash-it-with-a-sha-256-algorithm",children:[]},{value:"5.2 Unit Test.",id:"52-unit-test",children:[]}]},{value:"6. Maven Build",id:"6-maven-build",children:[{value:"6.1 Let build it with <code>mvn package</code>",id:"61-let-build-it-with-mvn-package",children:[]}]},{value:"7. Run#1",id:"7-run1",children:[{value:"7.1 Run it. Oops\u2026 By default, Maven didn\u2019t add the project dependencies <code>commons-codec</code> into the jar file.",id:"71-run-it-oops-by-default-maven-didnt-add-the-project-dependencies-commons-codec-into-the-jar-file",children:[]},{value:"7.2 To solve it, we can use this <code>maven-shade-plugin</code> to create an uber/fat-jar \u2013 group everything into a single jar file.",id:"72-to-solve-it-we-can-use-this-maven-shade-plugin-to-create-an-uberfat-jar--group-everything-into-a-single-jar-file",children:[]},{value:"7.3 Package it again!",id:"73-package-it-again",children:[]}]},{value:"8. Run#2",id:"8-run2",children:[{value:"8.1 Run it again. Good, the result is expected.",id:"81-run-it-again-good-the-result-is-expected",children:[]},{value:"8.2 Can we run it as Jar? No, there is no main class.",id:"82-can-we-run-it-as-jar-no-there-is-no-main-class",children:[]},{value:"8.3 To solve it, add the main class in maven-shade-plugin like this.",id:"83-to-solve-it-add-the-main-class-in-maven-shade-plugin-like-this",children:[]}]},{value:"9. Run#3",id:"9-run3",children:[{value:"9.1 Package it again!",id:"91-package-it-again",children:[]},{value:"9.2 Run it as Jar.",id:"92-run-it-as-jar",children:[]}]},{value:"10. POM",id:"10-pom",children:[]}],s={toc:p};function l(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://mkyong.com/maven/how-to-create-a-java-project-with-maven/"},"\u539f\u6587")),Object(c.b)("h2",{id:"1-create-a-project-from-maven-template"},"1. Create a Project from Maven Template"),Object(c.b)("p",null,"In a terminal (*uix or Mac) or command prompt (Windows), navigate to the folder you want to create the Java project. Type this command :"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"mvn archetype:generate \n    -DgroupId={project-packaging}\n    -DartifactId={project-name}\n    -DarchetypeArtifactId={maven-template} \n    -DinteractiveMode=false\n")),Object(c.b)("p",null,"This tells Maven to generate a Java project from a Maven template. For example,"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\>mvn archetype:generate -DgroupId=com.mkyong.hashing -DartifactId=java-project -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false\n\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 3.992 s\n[INFO] Finished at: 2018-09-27T17:15:57+08:00\n[INFO] ------------------------------------------------------------------------\n")),Object(c.b)("p",null,"Above command will generate a Java project from maven-archetype-quickstart template."),Object(c.b)("h2",{id:"2-maven-directory-layout"},"2. Maven Directory Layout"),Object(c.b)("p",null,"The following project directory structure will be created. In short, source code puts in folder /src/main/java/, unit test code puts in ",Object(c.b)("inlineCode",{parentName:"p"},"/src/test/java/"),"."),Object(c.b)("h2",{id:"3-pom-file"},"3. POM file"),Object(c.b)("p",null,"Review the generated ",Object(c.b)("inlineCode",{parentName:"p"},"pom.xml"),". It\u2019s quite empty, just a single ",Object(c.b)("inlineCode",{parentName:"p"},"jUnit")," dependency."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pom.xml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" \n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 \n         http://maven.apache.org/maven-v4_0_0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mkyong.hashing</groupId>\n    <artifactId>java-project3</artifactId>\n    <packaging>jar</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <name>java-project</name>\n    <url>http://maven.apache.org</url>\n    <dependencies>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>3.8.1</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n')),Object(c.b)("p",null,"This POM file is like the Ant ",Object(c.b)("inlineCode",{parentName:"p"},"build.xml")," file, it describes the entire project information, everything from directory structure, project plugins, project dependencies, how to build this project and etc, read this ",Object(c.b)("a",{parentName:"p",href:"http://maven.apache.org/guides/introduction/introduction-to-the-pom.html"},"official POM guide"),"."),Object(c.b)("h2",{id:"4-update-pom"},"4. Update POM"),Object(c.b)("h3",{id:"41-add-compiler-properties-to-tell-maven-use-a-specified-jdk-version-to-compile-the-source-code"},"4.1 Add compiler properties to tell Maven use a specified JDK version to compile the source code."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        \x3c!-- https://maven.apache.org/general.html#encoding-warning --\x3e\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        \n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n    </properties>\n")),Object(c.b)("h3",{id:"42-update-junit-to-412"},"4.2 Update jUnit to 4.12"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>junit</groupId>\n        <artifactId>junit</artifactId>\n        <version>4.12</version>\n        <scope>test</scope>\n    </dependency>\n")),Object(c.b)("h3",{id:"43-add-commons-codec-for-sha-hashing"},"4.3 Add commons-codec for SHA hashing."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},"    \x3c!-- Dependency for hashing --\x3e\n    \x3c!-- https://search.maven.org/artifact/commons-codec/commons-codec/1.11/jar --\x3e\n    <dependency>\n        <groupId>commons-codec</groupId>\n        <artifactId>commons-codec</artifactId>\n        <version>1.11</version>\n    </dependency>\n")),Object(c.b)("h3",{id:"44-complete-updated-version"},"4.4 Complete updated version."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pom.xml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" \n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 \n         http://maven.apache.org/maven-v4_0_0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mkyong.hashing</groupId>\n    <artifactId>java-project</artifactId>\n    <packaging>jar</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <name>java-project</name>\n    <url>http://maven.apache.org</url>\n\n    <properties>\n        \x3c!-- https://maven.apache.org/general.html#encoding-warning --\x3e\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.12</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>commons-codec</groupId>\n            <artifactId>commons-codec</artifactId>\n            <version>1.11</version>\n        </dependency>\n    </dependencies>\n\n</project>\n')),Object(c.b)("h2",{id:"5-write-code"},"5. Write Code"),Object(c.b)("h3",{id:"51-update-the-appjava-to-accept-an-input-and-hash-it-with-a-sha-256-algorithm"},"5.1 Update the App.java to accept an input and hash it with a SHA-256 algorithm."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"App.java")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'package com.mkyong.hashing;\n\nimport org.apache.commons.codec.digest.DigestUtils;\n\npublic class App {\n\n    public static void main(String[] args) {\n\n        if (args.length < 1) {\n            System.err.println("Please provide an input!");\n            System.exit(0);\n        }\n        System.out.println(sha256hex(args[0]));\n\n    }\n\n    public static String sha256hex(String input) {\n        return DigestUtils.sha256Hex(input);\n    }\n\n}\n')),Object(c.b)("h3",{id:"52-unit-test"},"5.2 Unit Test."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"AppTest.java")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'package com.mkyong.hashing;\n\nimport org.junit.Assert;\nimport org.junit.Test;\n\npublic class AppTest {\n\n    private String INPUT = "123456";\n\n    @Test\n    public void testLength() {\n        Assert.assertEquals(64, App.sha256hex(INPUT).length());\n    }\n\n    @Test\n    public void testHex() {\n        String expected = "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92";\n        Assert.assertEquals(expected, App.sha256hex(INPUT));\n    }\n\n}\n')),Object(c.b)("p",null,"Done."),Object(c.b)("h2",{id:"6-maven-build"},"6. Maven Build"),Object(c.b)("h3",{id:"61-let-build-it-with-mvn-package"},"6.1 Let build it with ",Object(c.b)("inlineCode",{parentName:"h3"},"mvn package")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>mvn package\n[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< com.mkyong.hashing:java-project >-------------------\n[INFO] Building java-project 1.0-SNAPSHOT\n[INFO] --------------------------------[ jar ]---------------------------------\n[INFO]\n......\n\n-------------------------------------------------------\n T E S T S\n-------------------------------------------------------\nRunning com.mkyong.hashing.AppTest\nTests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.067 sec\n\nResults :\n\nTests run: 2, Failures: 0, Errors: 0, Skipped: 0\n\n[INFO]\n[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ java-project ---\n[INFO] Building jar: D:\\java-project\\target\\java-project-1.0-SNAPSHOT.jar\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 1.956 s\n[INFO] Finished at: 2018-09-28T12:40:18+08:00\n[INFO] ------------------------------------------------------------------------\n")),Object(c.b)("p",null,"It compiles, run unit test and package the project into a ",Object(c.b)("inlineCode",{parentName:"p"},"jar")," file and puts it into the ",Object(c.b)("inlineCode",{parentName:"p"},"project/target")," folder."),Object(c.b)("h2",{id:"7-run1"},"7. Run#1"),Object(c.b)("h3",{id:"71-run-it-oops-by-default-maven-didnt-add-the-project-dependencies-commons-codec-into-the-jar-file"},"7.1 Run it. Oops\u2026 By default, Maven didn\u2019t add the project dependencies ",Object(c.b)("inlineCode",{parentName:"h3"},"commons-codec")," into the jar file."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'D:\\java-project>java -cp target/java-project-1.0-SNAPSHOT.jar com.mkyong.hashing.App 123456\n\nException in thread "main" java.lang.NoClassDefFoundError: org/apache/commons/codec/digest/DigestUtils\n        at com.mkyong.hashing.App.sha256hex(App.java:18)\n        at com.mkyong.hashing.App.main(App.java:13)\nCaused by: java.lang.ClassNotFoundException: org.apache.commons.codec.digest.DigestUtils\n        at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(Unknown Source)\n        at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(Unknown Source)\n        at java.base/java.lang.ClassLoader.loadClass(Unknown Source)\n        ... 2 more\n')),Object(c.b)("h3",{id:"72-to-solve-it-we-can-use-this-maven-shade-plugin-to-create-an-uberfat-jar--group-everything-into-a-single-jar-file"},"7.2 To solve it, we can use this ",Object(c.b)("inlineCode",{parentName:"h3"},"maven-shade-plugin")," to create an uber/fat-jar \u2013 group everything into a single jar file."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pom.xml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},"    <build>\n        <plugins>\n\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-shade-plugin</artifactId>\n                <version>3.2.0</version>\n                <executions>\n                    \x3c!-- Attach the shade goal into the package phase --\x3e\n                    <execution>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>shade</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n\n        </plugins>\n    </build>\n")),Object(c.b)("h3",{id:"73-package-it-again"},"7.3 Package it again!"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>mvn clean package\n[INFO] Scanning for projects...\n[...\n\n[INFO] --- maven-shade-plugin:3.2.0:shade (default) @ java-project ---\n[INFO] Including commons-codec:commons-codec:jar:1.11 in the shaded jar.\n[INFO] Replacing original artifact with shaded artifact.\n\n[INFO] Replacing D:\\java-project\\target\\java-project-1.0-SNAPSHOT.jar \n    with D:\\java-project\\target\\java-project-1.0-SNAPSHOT-shaded.jar\n...\n")),Object(c.b)("p",null,"Two jars will be generated, review the file size :"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>dir target\n Volume in drive D is Samsung970\n Volume Serial Number is 10DF-E63D\n\n Directory of D:\\java-project\\target\n\n28/09/2018  12:57 PM           335,643 java-project-1.0-SNAPSHOT.jar\n28/09/2018  12:57 PM             3,053 original-java-project-1.0-SNAPSHOT.jar\n...\n")),Object(c.b)("h2",{id:"8-run2"},"8. Run#2"),Object(c.b)("h3",{id:"81-run-it-again-good-the-result-is-expected"},"8.1 Run it again. Good, the result is expected."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>java -cp target/java-project-1.0-SNAPSHOT.jar com.mkyong.hashing.App 123456\n8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\n")),Object(c.b)("h3",{id:"82-can-we-run-it-as-jar-no-there-is-no-main-class"},"8.2 Can we run it as Jar? No, there is no main class."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>java -jar target/java-project-1.0-SNAPSHOT.jar 123456\nno main manifest attribute, in target/java-project-1.0-SNAPSHOT.jar\n")),Object(c.b)("h3",{id:"83-to-solve-it-add-the-main-class-in-maven-shade-plugin-like-this"},"8.3 To solve it, add the main class in maven-shade-plugin like this."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pom.xml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},'<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-shade-plugin</artifactId>\n    <version>3.2.0</version>\n    <executions>\n        \x3c!-- Attach the shade into the package phase --\x3e\n        <execution>\n            <phase>package</phase>\n            <goals>\n                <goal>shade</goal>\n            </goals>\n            <configuration>\n                <transformers>\n                    <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">\n                        <mainClass>com.mkyong.hashing.App</mainClass>\n                    </transformer>\n                </transformers>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n')),Object(c.b)("h2",{id:"9-run3"},"9. Run#3"),Object(c.b)("h3",{id:"91-package-it-again"},"9.1 Package it again!"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>mvn clean package\n")),Object(c.b)("h3",{id:"92-run-it-as-jar"},"9.2 Run it as Jar."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"D:\\java-project>java -jar target/java-project-1.0-SNAPSHOT.jar 123456\n8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\n")),Object(c.b)("p",null,"Done."),Object(c.b)("h2",{id:"10-pom"},"10. POM"),Object(c.b)("p",null,"Final POM file."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pom.xml")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" \n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 \n         http://maven.apache.org/maven-v4_0_0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mkyong.hashing</groupId>\n    <artifactId>java-project</artifactId>\n    <packaging>jar</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <name>java-project</name>\n    <url>http://maven.apache.org</url>\n\n    <properties>\n        \x3c!-- https://maven.apache.org/general.html#encoding-warning --\x3e\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.12</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>commons-codec</groupId>\n            <artifactId>commons-codec</artifactId>\n            <version>1.11</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-shade-plugin</artifactId>\n                <version>3.2.0</version>\n                <executions>\n                    \x3c!-- Attach the shade into the package phase --\x3e\n                    <execution>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>shade</goal>\n                        </goals>\n                        <configuration>\n                            <transformers>\n                                <transformer\n                                        implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">\n                                    <mainClass>com.mkyong.hashing.App</mainClass>\n                                </transformer>\n                            </transformers>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n            \n        </plugins>\n    </build>\n</project>\n')))}l.isMDXComponent=!0},217:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return g}));var t=a(0),r=a.n(t);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=t,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||c;return a?r.a.createElement(g,i(i({ref:n},s),{},{components:a})):r.a.createElement(g,i({ref:n},s))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);