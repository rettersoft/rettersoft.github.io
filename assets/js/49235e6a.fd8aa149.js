"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1860],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Authentication/Authorization",sidebar_position:8},l="Authorization",u={unversionedId:"Concepts/Authentication_Authorization",id:"Concepts/Authentication_Authorization",title:"Authorization",description:"Every incoming request has a context. This context contains some information and it's interface is like below:",source:"@site/docs/Concepts/Authentication_Authorization.md",sourceDirName:"Concepts",slug:"/Concepts/Authentication_Authorization",permalink:"/docs/Concepts/Authentication_Authorization",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Concepts/Authentication_Authorization.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Authentication/Authorization",sidebar_position:8},sidebar:"ConceptsSideBar",previous:{title:"Methods",permalink:"/docs/Concepts/Methods"},next:{title:"Sorted Sets",permalink:"/docs/Concepts/Sorted Sets"}},c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Users or services",id:"users-or-services",level:3},{value:"Authorization",id:"authorization-1",level:2},{value:"authorizer",id:"authorizer",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Every incoming request has a context. This context contains some information and it's interface is like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Context {\n    requestId: string\n    projectId: string\n    action: string\n    identity: string\n    headers?: KeyValue\n    classId: string\n    instanceId?: string\n    methodName: string\n    refererClassId?: string\n    refererInstanceId?: string\n    refererMethodName?: string\n    refererUserId?: string\n    refererServiceId?: string\n    refererIdentity?: string\n    claims?: KeyValue\n    isAnonymous?: boolean\n    culture?: string\n    platform?: string\n    userId?: string\n    sourceIP: string\n    sessionId?: string\n    clientOs?: string\n}\n")),(0,o.kt)("p",null,"This context object is delivered to your code like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function sayHello(data: Data): Promise<StepResponse> {\n    console.log(data.context)\n    return data\n}\n")),(0,o.kt)("p",null,"For authorization we can use several of these fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"identity"),": Name of the role used to make this request."),(0,o.kt)("li",{parentName:"ul"},"claims: Token claims."),(0,o.kt)("li",{parentName:"ul"},"serviceId"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"userId"),": Users ID making this request. Can be null if this request is coming from a service or anonymous rest call."),(0,o.kt)("li",{parentName:"ul"},"sourceIP: IP adress this request is coming from."),(0,o.kt)("li",{parentName:"ul"},"isAnonymous: A boolean field indicating if the caller is a anonymous user. ")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Your classes are public on the internet. Anybody can call their methods. There are several methods to prevent unauthorized access. Let's first talk about users and services."),(0,o.kt)("h3",{id:"users-or-services"},"Users or services"),(0,o.kt)("p",null,"A caller can be either a user or a service. If you use the rest api and send requests without any access token, your context.identity will be rbs_anonymous_service. Other than this scenario there always must be a token in the request. Token management is usually done by sdk's."),(0,o.kt)("p",null,'By default any request sent to server side is made with anonymous users. An anonymous user is created on the fly and request is made. If so, isAnonymous field will be "true" in the context.'),(0,o.kt)("h2",{id:"authorization-1"},"Authorization"),(0,o.kt)("p",null,"Now that we know that there will be a identity in the context object let's talk about how to use it."),(0,o.kt)("p",null,"We know that cloud object methods are called in a fifo manner."),(0,o.kt)("p",null,"Let's say we have a wallet class holding a single amount value in its state.\n",(0,o.kt)("img",{loading:"lazy",alt:"Wallet1",src:n(7004).Z,width:"1090",height:"620"})),(0,o.kt)("p",null,"We might have methods on this class:\n",(0,o.kt)("img",{loading:"lazy",alt:"Wallet2",src:n(9808).Z,width:"1088",height:"606"})),(0,o.kt)("p",null,"Everytime these are called they are ordered:\n",(0,o.kt)("img",{loading:"lazy",alt:"Wallet1",src:n(3839).Z,width:"1096",height:"614"})),(0,o.kt)("p",null,"<<<<<<< Updated upstream\nYou can define two authorization methods in your template:"),(0,o.kt)("h1",{id:"wallet1"},(0,o.kt)("img",{loading:"lazy",alt:"Wallet1",src:n(419).Z,width:"1092",height:"614"})),(0,o.kt)("p",null,"You can define two authorization method in your template:\n//IMAGE"),(0,o.kt)("blockquote",null,(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"Stashed changes")))))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"authorizer: index.authorizer\n")),(0,o.kt)("h3",{id:"authorizer"},"authorizer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"authorizer is called in the queue. So each call to this function is ordered. You can check your state safely and make decisions."),(0,o.kt)("li",{parentName:"ul"},"authorizer is called with the state data.")),(0,o.kt)("p",null,"Below there is an authorizer checking the state if this method can be called by this user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function authorizer(data: Data): Promise<Response> {\n    if(data.context.methodName === "playHand" && \n        data.state.private.currentPlayerId !== data.context.userId) \n        return { statusCode: 403 }\n    return { statusCode: 200 }\n}\n')))}h.isMDXComponent=!0},7004:function(e,t,n){t.Z=n.p+"assets/images/wallet_class-7ceaa6aa5b3bfef584aae5926428005f.png"},9808:function(e,t,n){t.Z=n.p+"assets/images/wallet_fifo-87672a4146170e430d593ec068252292.png"},3839:function(e,t,n){t.Z=n.p+"assets/images/wallet_instance-28b2a2e9e4f6519cae6a2fa65abbdcfd.png"},419:function(e,t,n){t.Z=n.p+"assets/images/wallet_methods-75f007f25ff1876a0e973ba411a6a633.png"}}]);