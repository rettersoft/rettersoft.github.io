"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1125],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"Template",sidebar_label:"Template",sidebar_position:2},l="Template",u={unversionedId:"Concepts/Classes/Template",id:"Concepts/Classes/Template",title:"Template",description:"Rio Classes are defined in template files. A template looks like this:",source:"@site/docs/Concepts/Classes/Template.md",sourceDirName:"Concepts/Classes",slug:"/Concepts/Classes/Template",permalink:"/docs/Concepts/Classes/Template",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/main/docs/Concepts/Classes/Template.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Template",sidebar_label:"Template",sidebar_position:2},sidebar:"ConceptsSideBar",previous:{title:"What are Classes",permalink:"/docs/Concepts/Classes/What are Classes"},next:{title:"Instances",permalink:"/docs/Concepts/Classes/Instances"}},c={},p=[{value:"Special methods",id:"special-methods",level:2},{value:"init",id:"init",level:3},{value:"authorizer",id:"authorizer",level:3},{value:"getState",id:"getstate",level:3},{value:"getInstanceId",id:"getinstanceid",level:3},{value:"Example:",id:"example",level:4},{value:"Methods",id:"methods",level:2},{value:"Method Fields",id:"method-fields",level:2},{value:"method:string",id:"methodstring",level:3},{value:"inputModel:string",id:"inputmodelstring",level:3},{value:"queryStringInputModel:string",id:"querystringinputmodelstring",level:3},{value:"tag:string",id:"tagstring",level:3},{value:"sync:bool",id:"syncbool",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template"},"Template"),(0,i.kt)("p",null,"Rio Classes are defined in template files. A template looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"init: index.init\ngetState: index.getState\nauthorizer: index.authorizer\nmethods:\n  - method: sayHello\n    inputModel: SayHelloInput\n    tag: test\n    invocationType: IMMEDIATE\n    handler: index.sayHello\n")),(0,i.kt)("h2",{id:"special-methods"},"Special methods"),(0,i.kt)("p",null,"There are some special methods you can define on a class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"init"),(0,i.kt)("li",{parentName:"ul"},"getState"),(0,i.kt)("li",{parentName:"ul"},"getInstanceId")),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"When a new instance is created ",(0,i.kt)("strong",{parentName:"p"},"init")," method is called. You can return an initial state for this instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function init(data: Data): Promise<Data> {\n    data.state.public = { foo: "bar" }\n    return data\n}\n')),(0,i.kt)("h3",{id:"authorizer"},"authorizer"),(0,i.kt)("p",null,"Every call made to your class calls the authorizer method defined in your template file. You can break execution at this point. An example authorizer could be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function authorizer(data: Data): Promise<Response> {\n    if(data.context.identity === 'none') \n        return { statusCode: 401 }\n    return { statusCode: 200 }\n}\n")),(0,i.kt)("h3",{id:"getstate"},"getState"),(0,i.kt)("p",null,"This method can be used to get state object when a client asks for state. You can return part of the state or even a modified version of the state to a caller by changing this function. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    return { statusCode: 200, body: data.state };\n}\n")),(0,i.kt)("p",null,"For example you can calculate and add some extra fields to the state object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    return { statusCode: 200, body: {\n      ...data.state,\n      someCalculatedField: data.state.public.something + 1\n    }}\n}\n")),(0,i.kt)("p",null,"or you can just return some part of the state depending on the role of the requester."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    if(data.context.identity === 'superuser')\n      // Return all state\n      return { statusCode: 200, body: data.state }\n    else \n      // Return just public part\n      return { statusCode: 200, body: data.state.public }\n}\n")),(0,i.kt)("h3",{id:"getinstanceid"},"getInstanceId"),(0,i.kt)("p",null,"This is optional. If not defined each instance will have a unique id. However you might want to change this behaviour. Let's say you like to have a singleton instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function getInstanceId(data: Data): Promise<string> {\n    return "MyInstanceId"\n}\n')),(0,i.kt)("p",null,"Every instance will have a unique id if ",(0,i.kt)("inlineCode",{parentName:"p"},"getInstanceId")," of class is not implemented. If you implement ",(0,i.kt)("inlineCode",{parentName:"p"},"getInstanceId")," you can create an instance with an instanceId you choose. "),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("p",null,"For example you can create an instance with instanceId same as the caller users userId. Think of an e-commerce application and you have a Cart class. You would like to create Cart instances with users Id. You can use this code to have each Cart instance the id of the user."),(0,i.kt)("p",null,"Template file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"init: index.init\ngetState: index.getState\ngetInstanceId: index.getInstanceId\n")),(0,i.kt)("p",null,"getInstanceId implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getInstanceId(data: Data): Promise<string> {\n    return data.context.userId\n}\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"You can as many methods as you like in your template file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"init: index.init\ngetState: index.getState\nauthorizer: index.authorizer\nmethods:\n  - method: sayHello\n    inputModel: SayHelloInput\n    tag: test\n    invocationType: IMMEDIATE\n    handler: index.sayHello\n  - method: sayByeBye\n    inputModel: SayByeByeInput\n    tag: test\n    invocationType: IMMEDIATE\n    handler: index.sayByeBye\n")),(0,i.kt)("h2",{id:"method-fields"},"Method Fields"),(0,i.kt)("h3",{id:"methodstring"},"method:string"),(0,i.kt)("p",null,"Name of method. "),(0,i.kt)("h3",{id:"inputmodelstring"},"inputModel:string"),(0,i.kt)("p",null,"Model file for post body."),(0,i.kt)("h3",{id:"querystringinputmodelstring"},"queryStringInputModel:string"),(0,i.kt)("p",null,"Model file for values sent as query strings."),(0,i.kt)("h3",{id:"tagstring"},"tag:string"),(0,i.kt)("p",null,"A string just for informational purpose."),(0,i.kt)("h3",{id:"syncbool"},"sync:bool"),(0,i.kt)("p",null,"Defines if a method is returning a response upon request. If sync is false, then all requests are immediately accepted and sent to instance execution queue. See method type and concurrency page for details."))}m.isMDXComponent=!0}}]);