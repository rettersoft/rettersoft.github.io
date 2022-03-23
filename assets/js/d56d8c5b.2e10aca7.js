"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1248],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"Template",sidebar_label:"Template",sidebar_position:0},s="Template",u={unversionedId:"Reference/Template",id:"Reference/Template",title:"Template",description:"Template.yml file contains all the fundamental configuration of your class. It can be in the form of;",source:"@site/docs/Reference/Template.md",sourceDirName:"Reference",slug:"/Reference/Template",permalink:"/docs/Reference/Template",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar/docs/Reference/Template.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Template",sidebar_label:"Template",sidebar_position:0},sidebar:"ReferenceSideBar",next:{title:"Method Data Context",permalink:"/docs/Reference/Method Data Context"}},d={},c=[{value:"authorizer",id:"authorizer",level:2},{value:"init",id:"init",level:2},{value:"getState",id:"getstate",level:2},{value:"getInstanceId",id:"getinstanceid",level:2},{value:"Methods",id:"methods",level:2},{value:"method",id:"method",level:3},{value:"tag",id:"tag",level:3},{value:"sync",id:"sync",level:3},{value:"type",id:"type",level:3},{value:"Models",id:"models",level:3},{value:"handler",id:"handler",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"template"},"Template"),(0,o.kt)("p",null,"Template.yml file contains all the fundamental configuration of your class. It can be in the form of;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"authorizer: index.authorizer\ninit: index.init\ngetState: index.getState\ngetInstanceId: index.getInstanceId\nmethods:\n  - method: apiHandler\n    tag: apiHandler\n    sync: false\n    handler: index.apiHandler\n    errorModel: apiError\n    inputModel: apiInput\n    outputModel: apiOutput\n  - method: square\n    tag: square\n    sync: true\n    handler: index.square\n  - method: getConfig\n    tag: getConfig\n    sync: true\n    type: READ\n    handler: index.getConfig\n")),(0,o.kt)("p",null,"Using the template you can specify some of the parameters via setting a function in a typescript file in you class. In these examples all the functions are stored in index.ts file;"),(0,o.kt)("h2",{id:"authorizer"},"authorizer"),(0,o.kt)("p",null,"Authorizer is called before every method call for authorization purposes. It is useful with keeping authorization logic seperate from your code. It has to be specified Basic usage could be as in the example;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function authorizer(data: Data): Promise<Response> {\n    if (data.context.identity === 'developer') {\n        return {statusCode: 200}\n    }\n    else return {statusCode: 401}\n}\n")),(0,o.kt)("h2",{id:"init"},"init"),(0,o.kt)("p",null,"Init is used to set the initial configuration of your new instance. You can set your initial state to a certain value, or leave it as it is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function init(data: Data): Promise<InitResponse> {\n  data.state.private.message = 'Hello World!';\n  return data;\n}\n")),(0,o.kt)("h2",{id:"getstate"},"getState"),(0,o.kt)("p",null,"Getstate can be configured asf how you want your state to be returned. Common usage is as;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n  return {\n    statusCode: 200,\n    body: data.state,\n  };\n}\n")),(0,o.kt)("h2",{id:"getinstanceid"},"getInstanceId"),(0,o.kt)("p",null,"You can set the formula for your instance id/ids in getInstanceId. You can set for a statical value or a random generated string. The returned value will be your instanceId"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getInstanceId(data: Data): Promise<string> {\n  return 'myInstance'; // Set to static value of myInstance\n  //Or\n  return data.request.body.projectId // projectId value taken from request/user\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"Methods are the code blocks that you will implement your business logic with. These methods can have couple settings:"),(0,o.kt)("h3",{id:"method"},"method"),(0,o.kt)("p",null,"Method value is where you set the name of your method"),(0,o.kt)("h3",{id:"tag"},"tag"),(0,o.kt)("p",null,"Tag has no actual impact on the architecture. Can be used for categorizing purposes. Usually set to method name."),(0,o.kt)("h3",{id:"sync"},"sync"),(0,o.kt)("p",null,"Sync can have 2 values: true or false. If it is set to true, method will return a response. If it is set to false, method will work in a asynchronous manner and will not return a response."),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"There are 4 different type values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WRITE"),": Write typed method can manipulate the state. But the request are not queued so they can overwrite eachother."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"QUEUED_WRITE"),": Method can manipulate the state, but request are queued in order."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"READ"),": Method can only read the state but can not change it. Responds faster compared to write types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"STATIC"),": Static type method have no instance therefore no state. Fastest among them.")),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,"Every methods input, output and error can be ",(0,o.kt)("strong",{parentName:"p"},"validated")," with assgining a certain model to it. As in the example template, apiHandler method has 3 models assigned to it. These models can be defined in Models tab. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - method: apiHandler\n    tag: apiHandler\n    sync: false\n    handler: index.apiHandler\n    errorModel: apiError\n    inputModel: apiInput\n    outputModel: apiOutput\n")),(0,o.kt)("h3",{id:"handler"},"handler"),(0,o.kt)("p",null,"Handler is the part where you relate the method to a function. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function square(data: Data): Promise<Response> {\n    let result=data.request.body.firstVariable*data.request.body.secondVariable\n    return { statusCode: 200, body: result }\n}\n")))}m.isMDXComponent=!0}}]);