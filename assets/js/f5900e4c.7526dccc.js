"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[6053],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"What is Retter.io",sidebar_label:"What is Retter.io",sidebar_position:2},l="What is Retter.io?",c={unversionedId:"Getting Started/What is Retter.io",id:"Getting Started/What is Retter.io",title:"What is Retter.io?",description:"What is Rio?",source:"@site/docs/Getting Started/What is Retterio.md",sourceDirName:"Getting Started",slug:"/Getting Started/What is Retter.io",permalink:"/docs/Getting Started/What is Retter.io",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/main/docs/Getting Started/What is Retterio.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"What is Retter.io",sidebar_label:"What is Retter.io",sidebar_position:2},sidebar:"GettingStartedSideBar",previous:{title:"About Documentation",permalink:"/docs/Getting Started/About Documentation"},next:{title:"Your First Project: Hello World",permalink:"/docs/Getting Started/Your First project HelloWorld"}},u={},p=[{value:"What is Rio?",id:"what-is-rio",level:3},{value:"Underlying Technology",id:"underlying-technology",level:3},{value:"Design patterns",id:"design-patterns",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-retterio"},"What is Retter.io?"),(0,i.kt)("h3",{id:"what-is-rio"},"What is Rio?"),(0,i.kt)("p",null,"Retter.io (Rio) is an abstraction on top of cloud infrastructure. Basically instead of writing apps directly running on AWS, you write apps running on Rio. Rio runs on AWS. "),(0,i.kt)("p",null,"We like to call Rio a cloud operating system managing the resources of cloud computer (AWS). Nobody writes apps directly accessing Intel chip. There is always an operating system in between like Windows or MacOS. Writing an application on top of Windows is much faster and easier compared to directly using the underlying hardware. Also there are many high level components you can use like UI components etc. With Rio we aim to give developers the ease of use of an operating system."),(0,i.kt)("p",null,"There are some apps like realtime gaming, you cannot use Rio. These may require very low level networking components etc. However if you like to write an Internet scale cloud app for retail for instance, Rio gives you speed and ease of use."),(0,i.kt)("p",null,"We have created Rio for our internal use in retter while writing custom software for our clients. We can use Rio to deliver cloud software up to 10x faster than directly using AWS."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OL-V1CqF8oY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"underlying-technology"},"Underlying Technology"),(0,i.kt)("p",null,"Rio is running completely serverlessly on AWS. We use Lambda, DynamoDB, S3, Kinesis, SNS, Eventbridge etc in the background. However anyone using Rio doesn't have to have any experience on these services. Rio handles everything seamlessly."),(0,i.kt)("h3",{id:"design-patterns"},"Design patterns"),(0,i.kt)("p",null,"Serverless + NoSQL databases gave us a development pattern which we think is ",(0,i.kt)("inlineCode",{parentName:"p"},"object oriented"),". A set of lambda functions are running and reading and writing to a partition in a NoSQL db. We have created Rio to handle this scenario, so the developer doesn't have to. Rio takes care of following three things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Object state handling"),(0,i.kt)("li",{parentName:"ol"},"Single concurrency execution for each object instance"),(0,i.kt)("li",{parentName:"ol"},"Realtime streaming of instance state updates to connected clients")),(0,i.kt)("p",null,"We are yet to publish best practice documents. You can follow us on twitter."))}f.isMDXComponent=!0}}]);