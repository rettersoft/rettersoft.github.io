"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[6926],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=s,k=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:1},o="RBS-SDK",c={unversionedId:"sdks/JS",id:"sdks/JS",isDocsHomePage:!1,title:"RBS-SDK",description:"Initialization",source:"@site/docs/sdks/JS.md",sourceDirName:"sdks",slug:"/sdks/JS",permalink:"/docs/sdks/JS",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdks/JS.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/guides/intro"}},d=[{value:"Initialization",id:"initialization",children:[],level:2},{value:"Actions",id:"actions",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Cloud Objects",id:"cloud-objects",children:[{value:"State Subscription",id:"state-subscription",children:[],level:3},{value:"Method Calls",id:"method-calls",children:[],level:3},{value:"Getting State",id:"getting-state",children:[],level:3},{value:"Available Methods",id:"available-methods",children:[],level:3}],level:2},{value:"How It Works",id:"how-it-works",children:[{value:"Actions",id:"actions-1",children:[],level:3},{value:"Cloud Objects",id:"cloud-objects-1",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rbs-sdk"},"RBS-SDK"),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"Firstly ",(0,i.kt)("inlineCode",{parentName:"p"},"rbs-sdk")," should be installed with a package manager."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @rettersoft/rbs-sdk\nor\nyarn add @rettersoft/rbs-sdk\n")),(0,i.kt)("p",null,"Clients should initialize with project id. Instances with same project id always be cached."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const rbs = RBS.getInstance({\n    projectId: '{PROJECT_ID}',\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PROJECT_ID"),": Unique id of a project created in RBS Developer Console"),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Any service action can be sent via ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let result = await rbs.send({\n    action: 'rbs.someservice.request.SOME_ACTION',\n    data: {\n        key: '{value}',\n    },\n})\n")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"RBS uses custom token to authenticate. This custom tokens can be given by an action or a cloud object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await rbs.authenticateWithCustomToken('{CUSTOM_TOKEN}')\n")),(0,i.kt)("p",null,"Authentication statuses can be listened. SDK will fire an event that clients can be subscribe on status change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"rbs.authStatus.subscribe((event: RBSAuthChangedEvent) => {\n    //\n})\n")),(0,i.kt)("p",null,"Event gives information about current auth status. Clients can check the ",(0,i.kt)("inlineCode",{parentName:"p"},"authStatus")," to determine if they need to show login/register pages or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RBSAuthChangedEvent {\n    authStatus: RBSAuthStatus\n    identity?: string\n    uid?: string\n    message?: string\n}\n\nenum RBSAuthStatus {\n    SIGNED_IN = 'SIGNED_IN',\n    SIGNED_IN_ANONYM = 'SIGNED_IN_ANONYM',\n    SIGNED_OUT = 'SIGNED_OUT',\n    AUTH_FAILED = 'AUTH_FAILED',\n}\n")),(0,i.kt)("h2",{id:"cloud-objects"},"Cloud Objects"),(0,i.kt)("p",null,"SDK will allow to use RBS Cloud Objects. Clients can subscribe realtime state changes, trigger cloud methods, ..."),(0,i.kt)("p",null,"Firstly an cloud object must be initilize with ",(0,i.kt)("inlineCode",{parentName:"p"},"classId"),". Additional config options can be seen in interface below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const cloudObject = await rbs.getCloudObject(config: RBSCloudObjectData)\n\ninterface RBSCloudObjectData {\n    classId: string\n    key?: {\n        name: string\n        value: string\n    }\n    instanceId?: string\n    method?: string\n    headers?: {\n        [key: string]: string\n    }\n    querystring?: {\n        [key: string]: string\n    }\n    payload?: {\n        [key: string]: any\n    }\n    httpMethod?: 'get' | 'delete' | 'post' | 'put'\n}\n")),(0,i.kt)("h3",{id:"state-subscription"},"State Subscription"),(0,i.kt)("p",null,"Clients can be subscribe to realtime state (public, user and role states) changes. On first subscription, it gives current state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"cloudObject.state.public.subscribe((state: {[key: string]: any}) => {\n    // \n})\n\ncloudObject.state.user.subscribe((state: {[key: string]: any}) => {\n    // \n})\n\ncloudObject.state.role.subscribe((state: {[key: string]: any}) => {\n    // \n})\n")),(0,i.kt)("h3",{id:"method-calls"},"Method Calls"),(0,i.kt)("p",null,"Any cloud method can be called via sdk. ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," parameter must be specified. Other parameters can be seen in interface below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await cloudObject.call(params: RBSCloudObjectCallData)\n\ninterface RBSCloudObjectCallData {\n    method: string\n    headers?: {\n        [key: string]: string\n    }\n    querystring?: {\n        [key: string]: string\n    }\n    payload?: {\n        [key: string]: any\n    }\n    httpMethod?: 'get' | 'delete' | 'post' | 'put'\n}\n")),(0,i.kt)("p",null,"Call method will return a response with ",(0,i.kt)("inlineCode",{parentName:"p"},"RBSCallResponse")," type includes ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),"."),(0,i.kt)("h3",{id:"getting-state"},"Getting State"),(0,i.kt)("p",null,"Clients also access state via method call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await cloudObject.getState(params: RBSCloudObjectCallData)\n\ninterface RBSCloudObjectCallData {\n    method: string\n    headers?: {\n        [key: string]: string\n    }\n    querystring?: {\n        [key: string]: string\n    }\n    payload?: {\n        [key: string]: any\n    }\n    httpMethod?: 'get' | 'delete' | 'post' | 'put'\n}\n")),(0,i.kt)("p",null,"Get stae method will return a response with ",(0,i.kt)("inlineCode",{parentName:"p"},"RBSCallResponse")," type includes ",(0,i.kt)("inlineCode",{parentName:"p"},"data<RBSCloudObjectState>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),"."),(0,i.kt)("h3",{id:"available-methods"},"Available Methods"),(0,i.kt)("p",null,"Cloud objects available methods can be accessed on ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," array/"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const methods = cloudObject.methods: RBSCloudObjectMethod[]\n\ninterface RBSCloudObjectMethod {\n    tag?: string\n    name: string\n    sync?: boolean\n    readonly?: boolean\n}\n")),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("h3",{id:"actions-1"},"Actions"),(0,i.kt)("p",null,"All requests flow through a pipe and token's expire dates will be checked before each request. If the accessToken has expired, it will be renewed with refreshToken. In the first request, if there is no pre-assigned accessToken, the token is assigned anonymously."),(0,i.kt)("h3",{id:"cloud-objects-1"},"Cloud Objects"),(0,i.kt)("p",null,"When a cloud object instance created, first of all we need an ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId"),". We can fetch it and its methods with ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTANCE")," request. If client specified the ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," we need to send it too. Key should be string as ",(0,i.kt)("inlineCode",{parentName:"p"},"name!value"),".  In the response we'll get ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"newInstance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"methods"),". Returned methods assigned to instance and can be accessed by client."),(0,i.kt)("p",null,"Example URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"instanceId: https://{projectId}.test-api.rtbs.io/INSTANCE/{class}/{instanceId}\nkey:        https://{projectId}.test-api.rtbs.io/INSTANCE/{class}/{name!value}\n")),(0,i.kt)("p",null,"instanceId can be omitted."),(0,i.kt)("p",null,"After getting ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId"),", we set firebase listeners for public,user and role states. Clients should subscribe to this listeners via state on the object. eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"object.state.public.subscribe"),". Full example can be seen above."),(0,i.kt)("p",null,"Firebase document paths:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/projects/{projectId}/classes/{classId}/instances/{instanceId}\n/projects/{projectId}/classes/{classId}/instances/{instanceId}/roleState/{identity}\n/projects/{projectId}/classes/{classId}/instances/{instanceId}/userState/{userId}\n")),(0,i.kt)("p",null,"Clients also call to methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getState"),". Each method is a different request to its own url. "),(0,i.kt)("p",null,"Example URLS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://{projectId}.test-api.rtbs.io/CALL/{classId}/{method}/{instanceId}\nhttps://{projectId}.test-api.rtbs.io/STATE/{classId}/{instanceId}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Each api request should called with ",(0,i.kt)("inlineCode",{parentName:"p"},"_token")," query string parameter. We use action pipes to handle authentication. Client can send different parameters like ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"querystring"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"httpMethod")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),". These should be inclued the request.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"httpMethod")," indicates which method will be used on api call\n",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"querystring")," self explanatory\n",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," should be sent as a request body."),(0,i.kt)("p",null,"Client should access ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"call"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isNewInstance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," props on cloud object instance. With the same ",(0,i.kt)("inlineCode",{parentName:"p"},"classId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceId")," instances are cached. Caches invalidated after a status change."))}u.isMDXComponent=!0}}]);