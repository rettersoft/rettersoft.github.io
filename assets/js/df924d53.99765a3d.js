"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[4448],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"Folder Structure",sidebar_label:"Folder Structure",sidebar_position:3},l="Folder Structure",c={unversionedId:"Concepts/CLI/Folder Structure",id:"Concepts/CLI/Folder Structure",title:"Folder Structure",description:"When your CLI setup is complete you have basic, working project. Structure of this project may seem complicated.",source:"@site/docs/Concepts/CLI/Folder Structure.mdx",sourceDirName:"Concepts/CLI",slug:"/Concepts/CLI/Folder Structure",permalink:"/docs/Concepts/CLI/Folder Structure",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/master/docs/Concepts/CLI/Folder Structure.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Folder Structure",sidebar_label:"Folder Structure",sidebar_position:3},sidebar:"ConceptsSideBar",previous:{title:"New Project",permalink:"/docs/Concepts/CLI/New Project"},next:{title:"Riots Generation",permalink:"/docs/Concepts/CLI/Riots Generation"}},d={},u=[{value:"Classes",id:"classes",level:2},{value:"Adding a New Class",id:"adding-a-new-class",level:2},{value:"index.ts",id:"indexts",level:3},{value:"package.json",id:"packagejson",level:3},{value:"rio.ts",id:"riots",level:3},{value:"template.yml",id:"templateyml",level:3},{value:"Overall Project File Structure",id:"overall-project-file-structure",level:2},{value:"Models",id:"models",level:2},{value:"Adding a new Model",id:"adding-a-new-model",level:3},{value:"package.json",id:"packagejson-1",level:2},{value:"rio.json",id:"riojson",level:2}],p={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("p",null,"When your CLI setup is complete you have basic, working project. Structure of this project may seem complicated.\nDon' Worry! We will go over everthing what is important to us."),(0,o.kt)("p",null,"When complete you should have a folder structure looking like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"FolderStructure",src:n(976).Z,width:"656",height:"379"})),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("p",null,"As you know, Rio is an object-oriented cloud provider. This means we can create number of classes."),(0,o.kt)("h2",{id:"adding-a-new-class"},"Adding a New Class"),(0,o.kt)("p",null,"For creating a new class, just create a new folder with the class name you want in the ",(0,o.kt)("inlineCode",{parentName:"p"},"classes")," folder."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  Numbers are not allowed in class names."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Adding a new class named ",(0,o.kt)("inlineCode",{parentName:"p"},"order"),":\n",(0,o.kt)("img",{loading:"lazy",alt:"FolderStructure",src:n(1993).Z,width:"622",height:"282"}))),(0,o.kt)("p",null,"As you can see we have additionally 4 files in the class. Let's have a look at them."),(0,o.kt)("h3",{id:"indexts"},"index.ts"),(0,o.kt)("p",null,"Our main logic goes here. We import our models, dependencies here."),(0,o.kt)("p",null,"For example a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello world")," looks like this in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="classes/order/index.ts',title:'"classes/order/index.ts'},'import RDK, { Data, InitResponse, Response, StepResponse } from "@retter/rdk";\n\nconst rdk = new RDK();\n\nexport async function authorizer(data: Data): Promise<Response> {\n    return { statusCode: 200 };\n}\n\nexport async function init(data: Data): Promise<Data> {\n    data.state.public = {\n        message: "Hello World"\n    }\n    return data\n}\n\nexport async function getState(data: Data): Promise<Response> {\n    return { statusCode: 200, body: data.state };\n}\n\nexport async function sayHello(data: Data): Promise<Data> {\n    data.response = {\n        statusCode: 200,\n        body: { message: data.state.public.message },\n    };\n    return data;\n}\n')),(0,o.kt)("h3",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"This determines: which class we are in, which ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," we are going to use, and which version we are working with."),(0,o.kt)("p",null,"A small example of this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="classes/order/package.json"',title:'"classes/order/package.json"'},'{\n  "name": "order",\n  "version": "1.0.0",\n  "dependencies": {\n    "@retter/rdk": "1.1.1"\n  }\n}\n')),(0,o.kt)("h3",{id:"riots"},"rio.ts"),(0,o.kt)("p",null,"We don' t have to add rio.ts to our classes. But this file gives us more functionality.\nSuch as, using the ecosystem's models and classes, determining the input or output of a method etc.\nIts a big ",(0,o.kt)("inlineCode",{parentName:"p"},"helper")," to our projects."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To add rio.ts, run: "),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title:terminal","title:terminal":!0},"rio generate\n"))),(0,o.kt)("h3",{id:"templateyml"},"template.yml"),(0,o.kt)("p",null,"With this file we determine how and which methods are going to be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title:classes/order.template.yml","title:classes/order.template.yml":!0},"init: index.init\ngetState: index.getState\nmethods:\n  - method: sayHello\n    tag: order\n    invocationType: IMMEDIATE\n    handler: index.sayHello\n")),(0,o.kt)("h2",{id:"overall-project-file-structure"},"Overall Project File Structure"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After adding a another class our project is looking like this:\n",(0,o.kt)("img",{loading:"lazy",alt:"FolderStructure",src:n(2652).Z,width:"752",height:"557"}))),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("p",null,"Models are used for determining the output or input of the methods."),(0,o.kt)("h3",{id:"adding-a-new-model"},"Adding a new Model"),(0,o.kt)("p",null,"Add a mew json folder under the ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," folder with the model name you want. And that's it!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Example of a model:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title:models/sayHelloInput.json","title:models/sayHelloInput.json":!0},'{\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "type": "string",\n      "description": "The person\'s first name."\n    },\n    "lastName": {\n      "type": "string",\n      "description": "The person\'s last name."\n    },\n    "age": {\n      "description": "Age in years which must be equal to or greater than zero.",\n      "type": "integer",\n      "minimum": 0\n    }\n  }\n}\n'))),(0,o.kt)("h2",{id:"packagejson-1"},"package.json"),(0,o.kt)("p",null,"smt smt"),(0,o.kt)("h2",{id:"riojson"},"rio.json"),(0,o.kt)("p",null,"Rio json holds your projectId. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title:rio.json","title:rio.json":!0},'{\n  "projectId": "*********" // your projectId visible here.\n}\n')))}m.isMDXComponent=!0},976:function(e,t,n){t.Z=n.p+"assets/images/Untouched_Folder_Structure-bc9551fc554492d01ac8c6c7755c7564.png"},1993:function(e,t,n){t.Z=n.p+"assets/images/class_folder_structure-3fe32af98daaea693a06fe5416018fd1.png"},2652:function(e,t,n){t.Z=n.p+"assets/images/folder_structure-e4b58b50b016d5fe07770d9fed93187f.png"}}]);