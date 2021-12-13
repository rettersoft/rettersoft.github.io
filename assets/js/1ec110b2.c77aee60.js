"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[8216],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},c="Classes",l={unversionedId:"main_concepts/classes",id:"main_concepts/classes",isDocsHomePage:!1,title:"Classes",description:"Classes are building blocks of a project.",source:"@site/docs/main_concepts/classes.mdx",sourceDirName:"main_concepts",slug:"/main_concepts/classes",permalink:"/docs/main_concepts/classes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/main_concepts/classes.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Your First Project",permalink:"/docs/getting_started/Project structure"},next:{title:"State",permalink:"/docs/main_concepts/state"}},u=[{value:"init",id:"init",children:[],level:3},{value:"getState",id:"getstate",children:[],level:3},{value:"getInstanceId",id:"getinstanceid",children:[],level:3}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"classes"},"Classes"),(0,s.kt)("p",null,"Classes are building blocks of a project. "),(0,s.kt)("p",null,"Classes are defined by template yaml files. An example file can be:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Methods",src:n(5552).Z})),(0,s.kt)("p",null,"Just like object oriented programming on a computer, classes can be instantiated and instances are created. Each instance must have a unique instance id."),(0,s.kt)("p",null,"There are some special methods you can define on a class:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"init"),(0,s.kt)("li",{parentName:"ul"},"getState"),(0,s.kt)("li",{parentName:"ul"},"getInstanceId")),(0,s.kt)("h3",{id:"init"},"init"),(0,s.kt)("p",null,"When a new instance is created ",(0,s.kt)("strong",{parentName:"p"},"init")," method is called. You can return an initial state for this instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function init(data: Data): Promise<InitResponse> {\n    return { state: { public: { message: 'Hello World' } } }\n}\n")),(0,s.kt)("h3",{id:"getstate"},"getState"),(0,s.kt)("p",null,"This method can be used to manipulate state object when a client asks for state. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    return { statusCode: 200, body: data.state }\n}\n")),(0,s.kt)("p",null,"For example you can calculate and add some extra fields to the state object"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    return { statusCode: 200, body: {\n      ...data.state,\n      someCalculatedField: data.state.public.something + 1\n    }}\n}\n")),(0,s.kt)("p",null,"or you can just return some part of the state depending on the role of the requester."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getState(data: Data): Promise<Response> {\n    if(data.method.context.identity === 'superuser')\n      // Return all state\n      return { statusCode: 200, body: data.state }\n    else \n      // Return just public part\n      return { statusCode: 200, body: data.state.public }\n}\n")),(0,s.kt)("h3",{id:"getinstanceid"},"getInstanceId"),(0,s.kt)("p",null,"This is optional. If not defined each instance will have a unique id. However you might want to change this behaviour. Let's say you like to have a singleton instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function getInstanceId(data: Data): Promise<string> {\n    return "MyInstanceId"\n}\n')))}d.isMDXComponent=!0},5552:function(e,t,n){t.Z=n.p+"assets/images/simple_template-b4da82883eb68e007f133c5289673996.png"}}]);