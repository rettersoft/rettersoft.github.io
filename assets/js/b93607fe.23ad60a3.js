"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1325],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4393:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],i={id:"Sorted Sets",sidebar_label:"Sorted Sets",sidebar_position:3},c="Sorted Sets",u={unversionedId:"Concepts/Shared Resources/Sorted Sets",id:"Concepts/Shared Resources/Sorted Sets",title:"Sorted Sets",description:"An instance has a state to store its data. But there are some cases where a state is not the perfect place to store your data.",source:"@site/docs/Concepts/Shared Resources/Sorted Sets.md",sourceDirName:"Concepts/Shared Resources",slug:"/Concepts/Shared Resources/Sorted Sets",permalink:"/docs/Concepts/Shared Resources/Sorted Sets",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/master/docs/Concepts/Shared Resources/Sorted Sets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Sorted Sets",sidebar_label:"Sorted Sets",sidebar_position:3},sidebar:"ConceptsSideBar",previous:{title:"Lookup Keys",permalink:"/docs/Concepts/Shared Resources/Lookup Keys"},next:{title:"Memory",permalink:"/docs/Concepts/Shared Resources/Memory"}},d={},l=[{value:"Usage of Sorted Sets",id:"usage-of-sorted-sets",level:2},{value:"Importing",id:"importing",level:3},{value:"Set Values with Sorted List",id:"set-values-with-sorted-list",level:3},{value:"Get Values from Sorted List",id:"get-values-from-sorted-list",level:3}],p={toc:l};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sorted-sets"},"Sorted Sets"),(0,o.kt)("p",null,"An instance has a state to store its data. But there are some cases where a state is not the perfect place to store your data. "),(0,o.kt)("h2",{id:"usage-of-sorted-sets"},"Usage of Sorted Sets"),(0,o.kt)("p",null,"Think of a chat application. A chat room instance cannot hold all messages since the beginning of the time. At some point some messages need to be stored somewhere else. "),(0,o.kt)("p",null,"Sorted sets can be used for these kind of use cases. Sorted sets are basically a key value storage with a part and sort key. First get a sdk instance."),(0,o.kt)("h3",{id:"importing"},"Importing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import SDK, { Data, InitResponse, Response, StepResponse } from './CloudObjects'\n\nconst sdk = new SDK()\n")),(0,o.kt)("h3",{id:"set-values-with-sorted-list"},"Set Values with Sorted List"),(0,o.kt)("p",null,"Now we can start writing to a sorted set like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function addChatMessage(data: Data): Promise<StepResponse> {\n\n    await rdk.addToSortedSet({\n        setName: "messages",\n        sortKey: Date.now().toString(),\n        data: {\n            "senderId": data.context.userId,\n            "message": data.request.body.message\n        }\n    })\n\n    data.response = { statusCode: 200, body: { success: true }}\n\n    return data\n}\n')),(0,o.kt)("h3",{id:"get-values-from-sorted-list"},"Get Values from Sorted List"),(0,o.kt)("p",null,"When a new user opens this chat room she needs to be able to fetch latest messages like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function getMessages(data: Data): Promise<StepResponse> {\n\n    let queryResult = await rdk.querySortedSet({\n        setName: "messages",\n        limit: 50\n    })\n\n    data.response = {\n        statusCode: 200,\n        body: {\n            messages: queryResult.data\n        }\n    }\n\n    return data\n}\n')))}m.isMDXComponent=!0}}]);