"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[3195],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8896:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Methods",sidebar_position:7},s="Methods",u={unversionedId:"Concepts/Methods",id:"Concepts/Methods",title:"Methods",description:"In your class template you can add methods to your class.",source:"@site/docs/Concepts/Methods.md",sourceDirName:"Concepts",slug:"/Concepts/Methods",permalink:"/docs/Concepts/Methods",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Concepts/Methods.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Methods",sidebar_position:7},sidebar:"ConceptsSideBar",previous:{title:"State",permalink:"/docs/Concepts/State"},next:{title:"Authentication/Authorization",permalink:"/docs/Concepts/Authentication_Authorization"}},l={},d=[{value:"Concurrency &amp; FIFO",id:"concurrency--fifo",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("p",null,"In your class template you can add methods to your class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"preAuthorizer: index.preAuthorizer\ninit: index.init\ngetState: index.getState\nmethods:\n    - method: sayHello\n      tag: test\n      sync: true\n      handler: index.sayHello\n")),(0,a.kt)("h2",{id:"concurrency--fifo"},"Concurrency & FIFO"),(0,a.kt)("p",null,"One of the most important features of class methods is that by default concurrency is 1. Calls made to your method gets ordered and executed one by one and exactly once guaranteed. This is a very important and crucial part of development with Rio."),(0,a.kt)("p",null,"Every time a method is running you are handed a data object and you are responsible of returning it. Basically what you do is calculating the next state of this instance. As long as the concurrency is one there is no risk of a race condition. So it is safe to alter the state any way you want and also check for state and calculate your next move."))}f.isMDXComponent=!0}}]);