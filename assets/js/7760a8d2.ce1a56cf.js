"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[7909],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(n),m=s,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],r={id:"Instances",sidebar_label:"Instances",sidebar_position:3},c="Instances",l={unversionedId:"Concepts/Classes/Instances",id:"Concepts/Classes/Instances",title:"Instances",description:"In object oriented programming an instance is usually a block of data in memory. It can be modified using class methods. In Rio every instance of a class has a state which is stored in Rio storage. You don't have to think about saving the state. State will be handed to every method call. Any change you make to the state object will be saved by Rio.",source:"@site/docs/Concepts/Classes/Instances.md",sourceDirName:"Concepts/Classes",slug:"/Concepts/Classes/Instances",permalink:"/docs/Concepts/Classes/Instances",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/master/docs/Concepts/Classes/Instances.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Instances",sidebar_label:"Instances",sidebar_position:3},sidebar:"ConceptsSideBar",previous:{title:"Template",permalink:"/docs/Concepts/Classes/Template"},next:{title:"State",permalink:"/docs/Concepts/Classes/State"}},u={},d=[{value:"Getting an instance",id:"getting-an-instance",level:3},{value:"Getting an instance from SDK&#39;s",id:"getting-an-instance-from-sdks",level:3},{value:"Local instances",id:"local-instances",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instances"},"Instances"),(0,o.kt)("p",null,"In object oriented programming an instance is usually a block of data in memory. It can be modified using class methods. In Rio every instance of a class has a state which is stored in Rio storage. You don't have to think about saving the state. State will be handed to every method call. Any change you make to the state object will be saved by Rio."),(0,o.kt)("h3",{id:"getting-an-instance"},"Getting an instance"),(0,o.kt)("p",null,"You can create instances of your classes. Each instance stores a different state object on Rio. An instance can be created in developer console, or from one of the client SDK's. However actually each of these just call this end point:"),(0,o.kt)("p",null,"https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/INSTANCE/{CLASS_NAME}"),(0,o.kt)("p",null,"Every time you call this a new instance is generated and its instance id and its method list is returned in response. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "instanceId": "idnfqpotq",\n    "newInstance": true,\n    "methods": [\n        {\n            "name": "drive",\n            "type": "WRITE",\n            "sync": true,\n            "tag": "test",\n            "inputModel": "DriveInput"\n        }\n    ],\n    "response": {}\n}\n')),(0,o.kt)("p",null,"You can also check if this instance is a newly created one or not by checking ",(0,o.kt)("inlineCode",{parentName:"p"},"newInstance")," field."),(0,o.kt)("p",null,"Everytime you get a new instance a unique instanceId is being generated. Each instance has a unique id.\n",(0,o.kt)("a",{parentName:"p",href:"../Template#getinstanceid"},"See here")," how to change this behaviour."),(0,o.kt)("h3",{id:"getting-an-instance-from-sdks"},"Getting an instance from SDK's"),(0,o.kt)("p",null,"Rio class methods can be called from Rio iOS/Android/JS SDK's like below:"),(0,o.kt)("p",null,"Example JS SDK call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const cloudObject = await rio.getCloudObject({\n    classId: 'Test'\n})\n")),(0,o.kt)("p",null,"This call sends a request to Rio backend and requests a new instance. This way you can create new instances."),(0,o.kt)("h3",{id:"local-instances"},"Local instances"),(0,o.kt)("p",null,"Local instances doesn't mean that these don't exist in Rio server side. But sometimes you don't want to create a new instance. You definetely know that there is an instance with this id and you just want to call it's methods. You should use ",(0,o.kt)("inlineCode",{parentName:"p"},"useLocal")," parameter in these cases. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const cloudObject = await rio.getCloudObject({\n    classId: 'Test', \n    instanceId: 'someid',\n    useLocal: true\n})\n")),(0,o.kt)("p",null,"By doing so, you didn't make a request to Rio server side."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you set useLocal field to true, you must provide an instanceId."))))}m.isMDXComponent=!0}}]);