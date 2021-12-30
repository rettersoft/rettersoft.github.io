"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[3199],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},c="Files",l={unversionedId:"main_concepts/files",id:"main_concepts/files",isDocsHomePage:!1,title:"Files",description:"Classes can save files to disk.",source:"@site/docs/main_concepts/files.mdx",sourceDirName:"main_concepts",slug:"/main_concepts/files",permalink:"/docs/main_concepts/files",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/main_concepts/files.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Lookup Keys",permalink:"/docs/main_concepts/lookupKeys"},next:{title:"Method Scheduling",permalink:"/docs/main_concepts/method_scheduling"}},p=[{value:"cdn",id:"cdn",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"files"},"Files"),(0,o.kt)("p",null,"Classes can save files to disk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function saveFile(data: Data): Promise<StepResponse> {\n    \n    await sdk.setFile({\n        filename: "testFile",\n        body: data.method.request.body\n    })\n\n    return data\n}\n')),(0,o.kt)("p",null,"You can fetch the file with following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function getFile(data: Data): Promise<StepResponse> {\n    const fileResult = await sdk.getFile({\n        filename: "testFile",\n    })\n    if(fileResult.success) {\n        data.method.response = {\n            statusCode: 200,\n            body: fileResult.data\n        }\n    } else {\n        data.method.response = {\n            statusCode: 400\n        }\n    }\n    return data\n}\n')),(0,o.kt)("p",null,"With rtbs rest API you can fetch the file using a URL:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://{{ProjectId}}.api.rtbs.io/CALL/{{ClassName}}/{{MethodName}}/{{InstanceName}}")),(0,o.kt)("p",null,"For example a file url could look something like:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://6eedd7ca16be4ae8982451fdfdba7e15.api.rtbs.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA"},"https://6eedd7ca16be4ae8982451fdfdba7e15.api.rtbs.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA")),(0,o.kt)("p",null,"Notice that we have used the same method ",(0,o.kt)("strong",{parentName:"p"},"getFile")," to retrieve the file."),(0,o.kt)("h3",{id:"cdn"},"cdn"),(0,o.kt)("p",null,"You can also use CDN caching for your files changing the url ",(0,o.kt)("strong",{parentName:"p"},".api.")," to ",(0,o.kt)("strong",{parentName:"p"},".cdn.")," like:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://6eedd7ca16be4ae8982451fdfdba7e15.cdn.rtbs.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA"},"https://6eedd7ca16be4ae8982451fdfdba7e15.cdn.rtbs.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA")))}d.isMDXComponent=!0}}]);