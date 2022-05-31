"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[4393],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={id:"What are Classes",sidebar_label:"What are Classes",sidebar_position:1},l="What are Classes",c={unversionedId:"Concepts/Classes/What are Classes",id:"Concepts/Classes/What are Classes",title:"What are Classes",description:"Basic building block in Rio are classes. Classes represent a data state and set of methods associated with it. You define classes in a file called template.yml . Below is an sample template file defining a Rio class:",source:"@site/docs/Concepts/Classes/What are Classes.md",sourceDirName:"Concepts/Classes",slug:"/Concepts/Classes/What are Classes",permalink:"/docs/Concepts/Classes/What are Classes",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/master/docs/Concepts/Classes/What are Classes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"What are Classes",sidebar_label:"What are Classes",sidebar_position:1},sidebar:"ConceptsSideBar",previous:{title:"Deleting a Project",permalink:"/docs/Concepts/Projects/Settings/Deleting a Project"},next:{title:"Template",permalink:"/docs/Concepts/Classes/Template"}},p={},d=[{value:"An example class",id:"an-example-class",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-are-classes"},"What are Classes"),(0,s.kt)("p",null,"Basic building block in Rio are classes. Classes represent a data state and set of methods associated with it. You define classes in a file called template.yml . Below is an sample template file defining a Rio class: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"init: index.init\ngetState: index.getState\nmethods:\n  - method: sayHello\n    invocationType: IMMEDIATE\n    handler: index.sayHello\n")),(0,s.kt)("p",null,"In object oriented approach usually there is a constructor method and other methods. Here we have a init method and list of other methods defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"methods")," section. "),(0,s.kt)("p",null,"Constructor method is defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"index.init"),". It's purpose is to initialize the state of this instance when it is first created. An example init method can be something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function init(data: Data): Promise<Data> {\n    data.state.private = { foo: "bar" }\n    return data\n}\n')),(0,s.kt)("p",null,"This class has one method called ",(0,s.kt)("inlineCode",{parentName:"p"},"sayHello")," and it is defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"index.sayHello")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function sayHello(data: Data): Promise<Data> {\n\n    data.state.private.foo = "Hello World" // Set some field on state\n\n    return data\n}\n')),(0,s.kt)("h3",{id:"an-example-class"},"An example class"),(0,s.kt)("p",null,"Let's think of a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class with an updateProfile method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"init: index.init\ngetState: index.getState\nmethods:\n  - method: updateProfile\n    invocationType: IMMEDIATE\n    handler: index.updateProfile\n")),(0,s.kt)("p",null,"We can have a separate instance of this class for every single user in our system. There could be millions of instances. Each instance's method can be called and handed it's own state data as it's input. ",(0,s.kt)("inlineCode",{parentName:"p"},"updateProfile")," method can be like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function updateProfile(data: Data): Promise<Data> {\n\n    data.state.private.firstName = data.request.body.firstName \n\n    return data\n}\n")))}m.isMDXComponent=!0}}]);