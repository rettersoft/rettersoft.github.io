"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[890],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"Files",sidebar_label:"Files",sidebar_position:5},l="Files",c={unversionedId:"Concepts/Shared Resources/Files",id:"Concepts/Shared Resources/Files",title:"Files",description:"Cloud Objects serves you simple APIs to manage files.",source:"@site/docs/Concepts/Shared Resources/Files.mdx",sourceDirName:"Concepts/Shared Resources",slug:"/Concepts/Shared Resources/Files",permalink:"/docs/Concepts/Shared Resources/Files",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/main/docs/Concepts/Shared Resources/Files.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Files",sidebar_label:"Files",sidebar_position:5},sidebar:"ConceptsSideBar",previous:{title:"Memory",permalink:"/docs/Concepts/Shared Resources/Memory"},next:{title:"RDK",permalink:"/docs/Concepts/RDK"}},p={},u=[{value:"setFile",id:"setfile",level:2},{value:"getFile",id:"getfile",level:2},{value:"deleteFile",id:"deletefile",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"files"},"Files"),(0,s.kt)("p",null,"Cloud Objects serves you simple APIs to manage files."),(0,s.kt)("h2",{id:"setfile"},"setFile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="classes/FileManager/file.ts"',title:'"classes/FileManager/file.ts"'},"import RDK, { Data,StepResponse } from '@retter/rdk';\n\nconst rdk = new RDK();\n\nexport async function uploadFile(data: Data): Promise<StepResponse> {\n\n    const { content } = data.request.body;\n\n    await rdk.setFile({\n        fileName: 'test.txt',\n        data: content,\n    });\n\n    data.response = {\n        status: 200,\n        body: {\n            message: 'File uploaded',\n        },\n    };\n\n    return data;\n}\n")),(0,s.kt)("h2",{id:"getfile"},"getFile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="classes/FileManager/file.ts"',title:'"classes/FileManager/file.ts"'},"import RDK, { Data,StepResponse } from '@retter/rdk';\n\nconst rdk = new RDK();\n\nexport async function getImage(data: Data): Promise<StepResponse> {\n\n    const { imageId } = data.request.querStringParams;\n\n    const fileResponse = await rdk.getFile({\n        fileName: `${imageId}.png`\n    });\n\n    data.response = {\n        status: 200,\n        body: fileResponse.data, // file content as base64 buffer\n        headers: {\n            'Content-Type': 'image/png', // Set the content type\n            'Cache-Control': 'public, max-age=31536000' // Cache for a year\n        },\n        isBase64: true, // Set the response as base64\n    };\n\n    return data;\n}\n")),(0,s.kt)("h2",{id:"deletefile"},"deleteFile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="classes/FileManager/file.ts"',title:'"classes/FileManager/file.ts"'},"import RDK, { Data,StepResponse } from '@retter/rdk';\n\nconst rdk = new RDK();\n\nexport async function removeImage(data: Data): Promise<StepResponse> {\n\n    const { imageId } = data.request.body;\n\n    await rdk.deleteFile({\n        fileName: `${imageId}.png`,\n    });\n\n    data.response = {\n        status: 200,\n        body: {\n            message: 'Image deleted',\n        },\n    };\n\n    return data;\n}\n")))}f.isMDXComponent=!0}}]);