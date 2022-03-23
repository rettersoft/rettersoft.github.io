"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[6251],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={sidebar_label:"Memory",sidebar_position:10},i="Global Memory",l={unversionedId:"Concepts/Memory",id:"Concepts/Memory",title:"Global Memory",description:"Think of rtbs as one big computer. There are object instances all over. Some instances can write to a global shared memory for other instances to consume.",source:"@site/docs/Concepts/Memory.md",sourceDirName:"Concepts",slug:"/Concepts/Memory",permalink:"/docs/Concepts/Memory",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar/docs/Concepts/Memory.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Memory",sidebar_position:10},sidebar:"ConceptsSideBar",previous:{title:"Sorted Sets",permalink:"/docs/Concepts/Sorted Sets"},next:{title:"Lookup Keys",permalink:"/docs/Concepts/Lookup Keys"}},p={},u=[{value:"Performance tip",id:"performance-tip",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"global-memory"},"Global Memory"),(0,a.kt)("p",null,"Think of rtbs as one big computer. There are object instances all over. Some instances can write to a global shared memory for other instances to consume. "),(0,a.kt)("p",null,"For example a ",(0,a.kt)("strong",{parentName:"p"},"Product")," class can write its metadata to its state like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function update(data: Data): Promise<StepResponse> {\n    data.state.private = data.request.body\n\n    return data\n}\n")),(0,a.kt)("p",null,"If another object would like to read this products state then it will have to fetch its instance and read its state. To make things faster let's write my metadata to memory too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function update(data: Data): Promise<StepResponse> {\n    data.state.private = data.request.body\n\n    await rdk.setGlobalMemory({\n        key: "product#" + data.context.instanceId,\n        value: data.state.private\n    })\n\n    return data\n}\n')),(0,a.kt)("p",null,"Another object can easily read this product metadata from memory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'\nexport async function getProductMetadata(data: Data): Promise<StepResponse> {\n\n    let memoryResult = await rdk.getGlobalMemory({\n        key: "product#" + data.request.body.productId\n    })\n\n    if (memoryResult.success) {\n        data.response = {\n            statusCode: 200,\n            body: memoryResult.data\n        }\n    } else {\n        data.response = {\n            statusCode: 404\n        }\n    }\n\n    return data\n}\n')),(0,a.kt)("h3",{id:"performance-tip"},"Performance tip"),(0,a.kt)("p",null,"To make things even faster let's make this method readonly so it doesn't deal with FIFO logic. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    - method: getProductMetadata\n      tag: test\n      sync: true\n      readonly: true\n      steps:\n          - id: default\n            handler: index.getProductMetadata\n")))}m.isMDXComponent=!0}}]);