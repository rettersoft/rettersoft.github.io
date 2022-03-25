"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1181],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_label:"Why Rio?",sidebar_position:2},c="Why Rio?",l={unversionedId:"Concepts/Why Rio",id:"Concepts/Why Rio",title:"Why Rio?",description:"Developers used to run virtual machines in the cloud, but that was difficult to manage and scale. Than serverless systems came and because of they are scaled and managed automatically, they had preferred over virtual machines. Even though It has its own CPU (Lambda), its own disk (s3), and its own database (dynamo db) it had its own problems. It was difficult to write (or learn how to write) business logic in a serverless system because of its design. And also older codes were not compatible with it.",source:"@site/docs/Concepts/Why Rio.md",sourceDirName:"Concepts",slug:"/Concepts/Why Rio",permalink:"/docs/Concepts/Why Rio",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/master/docs/Concepts/Why Rio.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Why Rio?",sidebar_position:2},sidebar:"ConceptsSideBar",previous:{title:"Serverless Computing",permalink:"/docs/Concepts/Serverless Computing"},next:{title:"Classes",permalink:"/docs/Concepts/Classes"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-rio"},"Why Rio?"),(0,a.kt)("p",null,"Developers used to run virtual machines in the cloud, but that was difficult to manage and scale. Than serverless systems came and because of they are scaled and managed automatically, they had preferred over virtual machines. Even though It has its own CPU (Lambda), its own disk (s3), and its own database (dynamo db) it had its own problems. It was difficult to write (or learn how to write) business logic in a serverless system because of its design. And also older codes were not compatible with it."),(0,a.kt)("p",null,"(For more about Serverless Computing: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Concepts/Serverless%20Computing/"},"Serverless Computing"),")"),(0,a.kt)("p",null,"In Rio (Retter.io) instead of writing stateless functions in a serverless system, we write classes.\nWe don't even need a database. Each instance has a state, every data stored in its relative instance. Your objects have methods and clients can call methods. With every method call, we can just calculate the next state. Also, if one state changes, it gets synchronized to devices in real-time."),(0,a.kt)("p",null,"With Rio we can write our logic with object-oriented approach in a serverless system. So it is much easier and faster to write programs and maintain them. So that we can write complicated business logic in days instead of weeks or months."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You may also want to check: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCcSE3QHVrW4NwXyKmxQXvOw"},"Youtube What is retter.io ?")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);