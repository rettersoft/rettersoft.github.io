"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[791],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:10},p="data.method.response",c={unversionedId:"api-ref/response",id:"api-ref/response",isDocsHomePage:!1,title:"data.method.response",description:"Response object can be used to return a response to the caller.",source:"@site/docs/api-ref/response.mdx",sourceDirName:"api-ref",slug:"/api-ref/response",permalink:"/docs/api-ref/response",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-ref/response.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"data.method.request",permalink:"/docs/api-ref/request"}},l=[{value:"Fields",id:"fields",children:[{value:"Example usage:",id:"example-usage",children:[],level:3}],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datamethodresponse"},"data.method.response"),(0,a.kt)("p",null,"Response object can be used to return a response to the caller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CloudObjectResponse {\n    statusCode: number\n    body?: any\n    headers?: { [key: string]: string }\n}\n")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"statusCode: string"))),(0,a.kt)("p",null,"Returning statusCode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"body: string"))),(0,a.kt)("p",null,"Response body of this method."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"headers: string"))),(0,a.kt)("p",null,"Headers sent to the client."),(0,a.kt)("h3",{id:"example-usage"},"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function sayHello(data: Data): Promise<StepResponse> {\n    data.method.response = {\n        statusCode: 200,\n        headers: {\n            "content-type": "application/json"\n        },\n        body: {\n            message: "Hello"\n        }\n    }\n    return data\n}\n')))}d.isMDXComponent=!0}}]);