"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[8730],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={slug:"cloudobject-a-simple-user-with-auth-part-1-3",title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3",authors:"baran",tags:["Serverless","Rtbs","Rbs","Cloudobjects"]},i=void 0,u={permalink:"/blog/cloudobject-a-simple-user-with-auth-part-1-3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-cloudobject-a-simple-user-with-auth-part-1-3.md",source:"@site/blog/2021-12-06-cloudobject-a-simple-user-with-auth-part-1-3.md",title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3",description:"Let\u2019s create a new class DemoUser.",date:"2021-12-06T00:00:00.000Z",formattedDate:"December 6, 2021",tags:[{label:"Serverless",permalink:"/blog/tags/serverless"},{label:"Rtbs",permalink:"/blog/tags/rtbs"},{label:"Rbs",permalink:"/blog/tags/rbs"},{label:"Cloudobjects",permalink:"/blog/tags/cloudobjects"}],readingTime:1.935,truncated:!1,authors:[{name:"Baran Baygan",title:"Solution Architect",url:"https://github.com/baranbaygan",imageURL:"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg",key:"baran"}],prevItem:{title:"rtbs.io - An object oriented cloud",permalink:"/blog/an-object-oriented-cloud"},nextItem:{title:"State of a cloud object",permalink:"/blog/state-of-cloud-object"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let\u2019s create a new class DemoUser."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*VyrA6eP2VmQTZ4WKL3aUzQ.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"Let\u2019s add a new file called \u201cauth.ts\u201d. We will implement authentication related functions in this file."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*hXFJjgjd29Uz7QXuo7ShBA.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"Now let\u2019s start writing our lookupUser function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import CloudObjectsOperator, { Data, StepResponse } from './CloudObjects'\n\nconst sdk = new CloudObjectsOperator()\n\nexport async function lookupUser(data: Data): Promise<StepResponse> {\n    const { success:userFound } = await sdk.getLookUpKey({ key: { name: 'email', value: data.method.request.email } })\n\n    if(userFound) {\n        data.method.response = {\n            statusCode: 403, body: { message: \"Email is taken\" }\n        }\n        return data\n    }\n\n    return data\n}\n")),(0,o.kt)("p",null,"Our request will contain email, so we will use sdk.getLookupKey to check for another instance which might have the same email. Okay we are returning an error but let\u2019s make it more visual in our method. Implement a flow and a second step."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*03-6XHfe6UHJQHuOZzN2DQ.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"Why do we add a second step? We don\u2019t have to add it. We can do everything in one step only. But if we separate different logics into different steps we can make it more visual and anybody looking at an execution later will be able to examine what happened very quickly."),(0,o.kt)("p",null,"Now add another step to create this user."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*bCig2aoebOoToF1WkXbgwA.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"How do we tell the method to go to emailAlreadyTaken step? We use data.nextFlowId field. Like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*0PY4PPVBDHTjXnQ0fM8kdg.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"We can also move some code to another function:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*WbwvtZYqdt7n0L4uZZAESw.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"We have 3 functions. Now let\u2019s see how we create a user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function createUser(data: Data): Promise<StepResponse> {\n\n    const { email, name, password } = data.method.request\n\n    await sdk.setLookUpKey({\n        key: {\n            name: 'email',\n            value: email\n        }\n    })\n\n    data.state = {\n        ...data.state,\n        public: { userId: data.context.instanceId },\n        private: {\n            email,\n            name,\n            password\n        }\n    }\n    return data\n}\n")),(0,o.kt)("p",null,"We first set email as a lookup value to this instance. Now let\u2019s add another step to generate a token. This token will be used by the client to sign in to rtbs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function generateToken(data: Data): Promise<StepResponse> {\n\n    const actionResponse = await sdk.rbsAction({\n        name: 'rbs.core.request.GENERATE_CUSTOM_TOKEN',\n        data: { userId: data.method.context.userId, roleNames: ['enduser'] }\n    })\n\n    data.method.response = {\n        statusCode: 200,\n        body: {\n            customToken: actionResponse.response.customToken\n        }\n    }\n\n    return data\n}\n")),(0,o.kt)("p",null,"So we need to update our template."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*zUUfBaVQ9jPg5CShKZZxQA.png",alt:"rtbs screenshot"})),(0,o.kt)("p",null,"At this point we have a working signup method. In the next article we will sign in with this user."),(0,o.kt)("p",null,"Thanks."))}d.isMDXComponent=!0}}]);