"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[3195],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8896:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Methods",sidebar_position:7},l="Methods",c={unversionedId:"Concepts/Methods",id:"Concepts/Methods",title:"Methods",description:"In your class template you can add methods to your class.",source:"@site/docs/Concepts/Methods.md",sourceDirName:"Concepts",slug:"/Concepts/Methods",permalink:"/docs/Concepts/Methods",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Concepts/Methods.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Methods",sidebar_position:7},sidebar:"ConceptsSideBar",previous:{title:"State",permalink:"/docs/Concepts/State"},next:{title:"Authentication/Authorization",permalink:"/docs/Concepts/Authentication_Authorization"}},d={},u=[{value:"Steps",id:"steps",level:3},{value:"Flow control",id:"flow-control",level:3},{value:"Concurrency &amp; FIFO",id:"concurrency--fifo",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("p",null,"In your class template you can add methods to your class."),(0,a.kt)("p",null,"Each step can have a handle method. Let's define sayHello handler in our index.ts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"preAuthorizer: index.preAuthorizer\ninit: index.init\ngetState: index.getState\n\nmethods:\n\n    - method: sayHello\n      tag: test\n      sync: true\n      steps:\n          - id: default\n            handler: index.sayHello\n")),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("p",null,"Each method can have multiple steps. You can define a different handler function for each step. Steps are optional. You can define a method with one step only like the one above. However if you like you can define a method like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"preAuthorizer: auth.preAuthorizer\ninit: index.init\ngetState: index.getState\ndependencies: ['user']\nmethods:\n    - method: signup\n      sync: true\n      steps:\n          - id: lookupUser\n            handler: auth.lookupUser\n          - id: userAlreadyExists\n          - id: createUser\n            handler: auth.createUser\n          - id: generateToken\n            handler: auth.generateToken\n          - id: sendEmailToCallCenter\n            handler: auth.sendEmailToCallCenter\n          - id: invalidData\n      flow:\n          - direction:\n            - lookupUser\n            - createUser\n          - direction:\n            - createUser\n            - sendEmailToCallCenter\n          - direction:\n            - sendEmailToCallCenter\n            - generateToken\n          - id: goToUserAlreadyExists\n            direction:\n            - lookupUser\n            - userAlreadyExists\n          - id: goToInvalidData\n            direction:\n            - createUser\n            - invalidData\n")),(0,a.kt)("p",null,"This definition creates following method:"),(0,a.kt)("p",null,"//IMAGE"),(0,a.kt)("p",null,"You might want to add steps for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reusability: You can re-use some handler methods"),(0,a.kt)("li",{parentName:"ul"},"visualization: Even non developers can look at your method diagram and understand how it works. Also previous calls are logged in the system and you can visualize the flow of a method in UI.")),(0,a.kt)("h3",{id:"flow-control"},"Flow control"),(0,a.kt)("p",null,"Let's consider we have a method with multiple steps."),(0,a.kt)("p",null,"Below is our class definition template file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"preAuthorizer: index.preAuthorizer\ninit: index.init\ngetState: index.getState\nmethods:\n\n    - method: methodWithSteps\n      tag: test\n      sync: true\n      steps:\n          - id: step1\n            handler: step1\n          - id: step2\n          - id: step3\n      flow:\n          - direction:\n              - step1\n              - step2\n          - id: gotoStep3\n            direction:\n              - step1\n              - step3\n")),(0,a.kt)("p",null,"We can either go to step3 or step2 from step1. Let's see how we do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export async function step1(data: Data): Promise<StepResponse> {\n    \n    // You can check some state here and conditionally set nextFlowId\n    if(data.state.private.someField === true) {\n        data.nextFlowId = "gotoStep3"    \n    }\n    \n    return data\n}\n')),(0,a.kt)("p",null,"If you don't specify a ",(0,a.kt)("strong",{parentName:"p"},"nextFlowId"),", first direction will be selected. Which is step2 in this template."),(0,a.kt)("h2",{id:"concurrency--fifo"},"Concurrency & FIFO"),(0,a.kt)("p",null,"One of the most important features of class methods is that by default concurrency is 1. Calls made to your method gets ordered and executed one by one and exactly once guaranteed. This is a very important and crucial part of development with Rio."),(0,a.kt)("p",null,"Every time a method is running you are handed a data object and you are responsible of returning it. Basically what you do is calculating the next state of this instance. As long as the concurrency is one there is no risk of a race condition. So it is safe to alter the state any way you want and also check for state and calculate your next move."),(0,a.kt)("p",null,"Let's say there are two methods on a wallet class."),(0,a.kt)("p",null,"//IMAGE"),(0,a.kt)("p",null,"Everytime these are called they are ordered:"),(0,a.kt)("p",null,"//IMAGE"))}h.isMDXComponent=!0}}]);