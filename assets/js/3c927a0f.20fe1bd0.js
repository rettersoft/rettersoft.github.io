"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[8172],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4575:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={sidebar_label:"Get started with CLI",sidebar_position:6},s="Get Started With CLI",c={unversionedId:"Getting Started/Get started with CLI",id:"Getting Started/Get started with CLI",title:"Get Started With CLI",description:"This article shows how to setup Rio' s CLI (Command Line Interface) and create a new project. So we can use Rio with our prefered IDE.",source:"@site/docs/Getting Started/Get started with CLI.md",sourceDirName:"Getting Started",slug:"/Getting Started/Get started with CLI",permalink:"/docs/Getting Started/Get started with CLI",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Getting Started/Get started with CLI.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Get started with CLI",sidebar_position:6},sidebar:"GettingStartedSideBar",previous:{title:"Get started with Android",permalink:"/docs/Getting Started/Get started with Android"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Setting Up Your Profile With CLI",id:"setting-up-your-profile-with-cli",level:2},{value:"Project Initialization",id:"project-initialization",level:2},{value:"Generating Classes",id:"generating-classes",level:2},{value:"Example:",id:"example",level:4},{value:"Project Pre-Deployment",id:"project-pre-deployment",level:3},{value:"Project Deployment",id:"project-deployment",level:3}],d={toc:u};function h(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started-with-cli"},"Get Started With CLI"),(0,o.kt)("p",null,"This article shows how to setup Rio' s CLI (Command Line Interface) and create a new project. So we can use Rio with our prefered IDE.\nYou can also watch \"",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VR7xygriFRE%22"},'https://www.youtube.com/watch?v=VR7xygriFRE"')," to follow along."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npm i -g @retter/rio-cli\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("p",null,'If you get "The operation was rejected by your operating system." error in this setup, you can add ',(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," before each command."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-your-profile-with-cli"},"Setting Up Your Profile With CLI"),(0,o.kt)("p",null,'After CLI setup is complete, we can set your profile up. To do this visit "',(0,o.kt)("a",{parentName:"p",href:"https://c.retter.io%22"},'https://c.retter.io"')," and login. Than open settings ",(0,o.kt)("inlineCode",{parentName:"p"},"Rbs Console > Right Top Dropdown Menu > Settings"),". There you will see your SECRET_ID and SECRET_KEY."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Settings Screen",src:r(6273).Z,width:"789",height:"333"})),(0,o.kt)("p",null,"Decide your PROFILE_NAME and run the following command with your own PROFILE_NAME, SECRET_ID and SECRET_KEY."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio set-profile --profile-name PROFILE_NAME --secret-id SECRET_ID --secret-key SECRET_KEY\n")),(0,o.kt)("p",null,"To see if your profile had been initialized, run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio list-profiles\n")),(0,o.kt)("h2",{id:"project-initialization"},"Project Initialization"),(0,o.kt)("p",null,"If we had successfully logged in, we can initialize our project with decided PROJECT_ALIAS. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio init PROJECT_ALIAS\n")),(0,o.kt)("p",null,'After this command you have a working project in your system. You can check it by revisiting "',(0,o.kt)("a",{parentName:"p",href:"https://c.retter.io%22'"},"https://c.retter.io\"'")," s Projects page. There you will see a project with your defined PROJECT_ALIAS."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Projects Screen",src:r(6773).Z,width:"480",height:"492"})),(0,o.kt)("h2",{id:"generating-classes"},"Generating Classes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rio generate")),(0,o.kt)("p",null,"Create the rio file for each of classes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio generate\n")),(0,o.kt)("h4",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio init TEST\n> cd TEST\n> rio generate # optional\n> rio pre-deploy # optional\n> rio deploy\n")),(0,o.kt)("h3",{id:"project-pre-deployment"},"Project Pre-Deployment"),(0,o.kt)("p",null,"This step does not make any changes. Just only detects changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio pre-deploy\n")),(0,o.kt)("h3",{id:"project-deployment"},"Project Deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> rio deploy\n")))}h.isMDXComponent=!0},6773:function(e,t,r){t.Z=r.p+"assets/images/Getting-Started-With-CLI-ProjectsPage-63e919def036a95cdc4b33c2bb07e6da.png"},6273:function(e,t,r){t.Z=r.p+"assets/images/Getting-Started-With-CLI-Settings-a5659b1469589be7e2c414e0ff7c92f6.png"}}]);