"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[7273],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"Web",sidebar_label:"Web",sidebar_position:3},l="Web",c={unversionedId:"Getting Started/SDKs/Web",id:"Getting Started/SDKs/Web",title:"Web",description:"Firstly, we need to install Rio JS sdk. Rio SDK's eases you to call methods and allows you to authenticate clients with rio. You can see how to use the sdk on github repo.",source:"@site/docs/Getting Started/SDKs/Web.md",sourceDirName:"Getting Started/SDKs",slug:"/Getting Started/SDKs/Web",permalink:"/docs/Getting Started/SDKs/Web",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/main/docs/Getting Started/SDKs/Web.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Web",sidebar_label:"Web",sidebar_position:3},sidebar:"GettingStartedSideBar",previous:{title:"Android",permalink:"/docs/Getting Started/SDKs/Android"},next:{title:"Get started with CLI",permalink:"/docs/Getting Started/Get started with CLI"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web"},"Web"),(0,a.kt)("p",null,"Firstly, we need to install Rio JS sdk. Rio SDK's eases you to call methods and allows you to authenticate clients with rio. You can see how to use the sdk on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rettersoft/retter-js-sdk"},"github repo"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @retter/sdk\n")),(0,a.kt)("p",null,"Now, we can initiate sdk with ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId"),". You can find project id from console's home page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Rio from '@retter/sdk'\n\nconst rio = Rio.getInstance({\n    projectId: '{your-project-id}'\n})\n")),(0,a.kt)("p",null,"Previous article, we created Todo class and three methods. We can get the Todo class's cloud object from sdk."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const todoObject = await rio.getCloudObject({\n    classId: 'Todo' // previously created class\n})\n")),(0,a.kt)("p",null,"With cloud object, we can access several methods and properties. We can call methods with ",(0,a.kt)("inlineCode",{parentName:"p"},"call")," method, get the current instance with ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceId"),", etc."),(0,a.kt)("p",null,"To continue with demo, let's call the ",(0,a.kt)("inlineCode",{parentName:"p"},"createTodo")," method with todo item. This methods required ",(0,a.kt)("inlineCode",{parentName:"p"},"task")," field from body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await todoObject.call({\n    method: 'createTodo',\n    body: {\n        task: 'Buy tickets for latest Robert Pattinson movie'\n    }\n})\n")),(0,a.kt)("p",null,"Now, we can fetch todos. On ",(0,a.kt)("inlineCode",{parentName:"p"},"listTodos")," method, we returned an ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," array. We can reach this item from response. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const response = await todoObject.call({\n    method: \'listTodos\'\n})\n\nconst items = response.body.items\n/*\n[\n    {\n        "task": "Buy tickets for latest Robert Pattinson movie",\n        "isCompleted": false\n    }\n]\n*/\n')),(0,a.kt)("p",null,"To mark the task as completed, we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"markTodoAsCompleted")," method with ",(0,a.kt)("inlineCode",{parentName:"p"},"task"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await todoObject.call({\n    method: 'markTodoAsCompleted',\n    body: {\n        task: \"Buy tickets for latest Robert Pattinson movie\"\n    }\n})\n")),(0,a.kt)("p",null,"If we list todo items now, we can see ",(0,a.kt)("inlineCode",{parentName:"p"},"isCompleted")," field as ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "task": "Buy tickets for latest Robert Pattinson movie",\n        "isCompleted": false\n    }\n]\n')),(0,a.kt)("p",null,"We can also take realtime updates from cloud objects. Because of updating public state (in previous article), we can subscribe the public state. When a new item created or existing one updated, we will be notified. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'todoObject.state.public.subscribe(state => {\n    const items = state.items\n\n    /*\n    [\n        {\n            "task": "Buy tickets for latest Robert Pattinson movie",\n            "isCompleted": true\n        }\n    ]\n    */\n})\n')),(0,a.kt)("p",null,"That's it. It is simple as that."))}m.isMDXComponent=!0}}]);