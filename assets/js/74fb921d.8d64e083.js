"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[7263],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Files",sidebar_position:12},l="Files",c={unversionedId:"Concepts/Files",id:"Concepts/Files",title:"Files",description:"Classes can save files to disk.",source:"@site/docs/Concepts/Files.md",sourceDirName:"Concepts",slug:"/Concepts/Files",permalink:"/docs/Concepts/Files",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Concepts/Files.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"Files",sidebar_position:12},sidebar:"ConceptsSideBar",previous:{title:"Lookup Keys",permalink:"/docs/Concepts/Lookup Keys"},next:{title:"Scheduling",permalink:"/docs/Concepts/Scheduling"}},p={},u=[{value:"cdn",id:"cdn",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"files"},"Files"),(0,o.kt)("p",null,"Classes can save files to disk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function saveFile(data: Data): Promise<StepResponse> {\n    \n    await rdk.setFile({\n        filename: "testFile",\n        body: data.request.body\n    })\n\n    return data\n}\n')),(0,o.kt)("p",null,"You can fetch the file with following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function getFile(data: Data): Promise<StepResponse> {\n    const fileResult = await rdk.getFile({\n        filename: "testFile",\n    })\n    if(fileResult.success) {\n        data.response = {\n            statusCode: 200,\n            body: fileResult.data\n        }\n    } else {\n        data.response = {\n            statusCode: 400\n        }\n    }\n    return data\n}\n')),(0,o.kt)("p",null,"With rtbs rest API you can fetch the file using a URL:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://{{ProjectId}}.api.retter.io/CALL/{{ClassName}}/{{MethodName}}/{{InstanceName}}")),(0,o.kt)("p",null,"For example a file url could look something like:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://6eedd7ca16be4ae8982451fdfdba7e15.api.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA"},"https://6eedd7ca16be4ae8982451fdfdba7e15.api.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA")),(0,o.kt)("p",null,"Notice that we have used the same method ",(0,o.kt)("strong",{parentName:"p"},"getFile")," to retrieve the file."),(0,o.kt)("h3",{id:"cdn"},"cdn"),(0,o.kt)("p",null,"You can also use CDN caching for your files changing the url ",(0,o.kt)("strong",{parentName:"p"},".api.")," to ",(0,o.kt)("strong",{parentName:"p"},".cdn.")," like:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://6eedd7ca16be4ae8982451fdfdba7e15.cdn.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA"},"https://6eedd7ca16be4ae8982451fdfdba7e15.cdn.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA")))}f.isMDXComponent=!0}}]);