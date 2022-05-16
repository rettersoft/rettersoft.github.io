"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[5956],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},914:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={id:"Memory",sidebar_label:"Memory",sidebar_position:4},i="Memory",u={unversionedId:"Concepts/Shared Resources/Memory",id:"Concepts/Shared Resources/Memory",title:"Memory",description:"Think of rtbs as one big computer. There are object instances all over. Some instances can write to a shared memory for other instances to consume.",source:"@site/docs/Concepts/Shared Resources/Memory.md",sourceDirName:"Concepts/Shared Resources",slug:"/Concepts/Shared Resources/Memory",permalink:"/docs/Concepts/Shared Resources/Memory",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/v2/docs/Concepts/Shared Resources/Memory.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Memory",sidebar_label:"Memory",sidebar_position:4},sidebar:"ConceptsSideBar",previous:{title:"Sorted Sets",permalink:"/docs/Concepts/Shared Resources/Sorted Sets"},next:{title:"Files",permalink:"/docs/Concepts/Shared Resources/Files"}},p={},l=[{value:"Why Memory?",id:"why-memory",level:2},{value:"Usage of Memory",id:"usage-of-memory",level:2},{value:"Performance tip",id:"performance-tip",level:3}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"memory"},"Memory"),(0,a.kt)("p",null,"Think of rtbs as one big computer. There are object instances all over. Some instances can write to a shared memory for other instances to consume. "),(0,a.kt)("h2",{id:"why-memory"},"Why Memory?"),(0,a.kt)("p",null,"For example a ",(0,a.kt)("strong",{parentName:"p"},"Product")," class can write its metadata to its state like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function update(data: Data): Promise<StepResponse> {\n    data.state.private = data.request.body\n\n    return data\n}\n")),(0,a.kt)("p",null,"If another object would like to read this products state then it will have to fetch its instance and read its state."),(0,a.kt)("h2",{id:"usage-of-memory"},"Usage of Memory"),(0,a.kt)("p",null,"To make things faster let's write my metadata to memory too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function update(data: Data): Promise<StepResponse> {\n    data.state.private = data.request.body\n\n    await rdk.setGlobalMemory({\n        key: "product#" + data.context.instanceId,\n        value: data.state.private\n    })\n\n    return data\n}\n')),(0,a.kt)("p",null,"Another object can easily read this product metadata from memory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'\nexport async function getProductMetadata(data: Data): Promise<StepResponse> {\n\n    let memoryResult = await rdk.getGlobalMemory({\n        key: "product#" + data.request.body.productId\n    })\n\n    if (memoryResult.success) {\n        data.response = {\n            statusCode: 200,\n            body: memoryResult.data\n        }\n    } else {\n        data.response = {\n            statusCode: 404\n        }\n    }\n\n    return data\n}\n')),(0,a.kt)("h3",{id:"performance-tip"},"Performance tip"),(0,a.kt)("p",null,"To make things even faster let's make this methods type read so it doesn't deal with FIFO logic. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    - method: getProductMetadata\n      tag: test\n      sync: true\n      type: READ\n      handler: index.getProductMetadata\n")))}m.isMDXComponent=!0}}]);