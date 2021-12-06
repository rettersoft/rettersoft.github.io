"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[9665],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(b,i(i({ref:e},u),{},{components:n})):a.createElement(b,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6882:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={slug:"state-of-cloud-object",title:"State of a cloud object",authors:"baran",tags:["rtbs","state","todo app","object oriented cloud","cloud"]},s=void 0,c={permalink:"/blog/state-of-cloud-object",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-state-of-cloud-object.md",source:"@site/blog/2021-12-06-state-of-cloud-object.md",title:"State of a cloud object",description:"Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.",date:"2021-12-06T00:00:00.000Z",formattedDate:"December 6, 2021",tags:[{label:"rtbs",permalink:"/blog/tags/rtbs"},{label:"state",permalink:"/blog/tags/state"},{label:"todo app",permalink:"/blog/tags/todo-app"},{label:"object oriented cloud",permalink:"/blog/tags/object-oriented-cloud"},{label:"cloud",permalink:"/blog/tags/cloud"}],readingTime:1.605,truncated:!1,authors:[{name:"Baran Baygan",title:"Solution Architect",url:"https://github.com/baranbaygan",imageURL:"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg",key:"baran"}],prevItem:{title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3",permalink:"/blog/cloudobject-a-simple-user-with-auth-part-1-3"},nextItem:{title:"Todo App with CloudObjects \u2014 Part 1/3",permalink:"/blog/todo-app-1-3"}},u={authorsImageUrls:[void 0]},p=[{value:"Public",id:"public",children:[],level:3},{value:"Private",id:"private",children:[],level:3},{value:"User",id:"user",children:[],level:3},{value:"Role",id:"role",children:[],level:3},{value:"What do you do with state?",id:"what-do-you-do-with-state",children:[],level:3},{value:"getState function",id:"getstate-function",children:[],level:3}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.\nState object gets streamed to client sdk\u2019s in real time.\nState consists of four parts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "public": {},\n  "private": {},\n  "user": {\n    "userId1": { }\n  },\n  "role": {\n    "roleName1": { }\n  }\n}\n')),(0,r.kt)("h3",{id:"public"},"Public"),(0,r.kt)("p",null,"Public state can be seen by every client connected."),(0,r.kt)("h3",{id:"private"},"Private"),(0,r.kt)("p",null,"Private state doesn\u2019t get streamed to any client. Only server side code (objects methods) can see and edit this state."),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,"User object has userId\u2019s in it. Each userId node contains the data specific for that userId. Only that user is allowed to see that data."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/856/1*z2hPPoc3pmG-RBl_LbM-1g.png",alt:"rtbs screenshot"})),(0,r.kt)("h3",{id:"role"},"Role"),(0,r.kt)("p",null,"Role state can be seen by anybody who has that role."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/960/1*XS1vUwFlu43E2DxRwQit8Q.png",alt:"rtbs screenshot"})),(0,r.kt)("h3",{id:"what-do-you-do-with-state"},"What do you do with state?"),(0,r.kt)("p",null,"In your server side code you update the state object any way you want. Clients connected to this object will receive updates according to their permission level. It easy straight forward."),(0,r.kt)("h3",{id:"getstate-function"},"getState function"),(0,r.kt)("p",null,"Clients can either get the state via REST api or they can subscribe to state via sdk."),(0,r.kt)("p",null,"If you want to get your state via REST api you can define a delegate function in your template file and customize what part of state you will return to anybody making the call. Below I defined a getState function in index.ts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*_m62mrSZOkuoEopDDOse6Q.png",alt:"rtbs screenshot"})),(0,r.kt)("p",null,"Below is my getState function which returns my objects private state to any caller. Of course this is pretty unsecure. Don\u2019t do this at home :)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    return { \n        statusCode: 200, \n        body: {\n            ...data.state.private,\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Thanks."))}m.isMDXComponent=!0}}]);