"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[1731],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||c;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1468:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={sidebar_label:"incrementMemory",sidebar_position:8},u="incrementMemory",s={unversionedId:"Reference/RDK/incrementMemory",id:"Reference/RDK/incrementMemory",title:"incrementMemory",description:"Excepts key and value{number} in the form below. If current value is number, adds this value to it.",source:"@site/docs/Reference/RDK/incrementMemory.md",sourceDirName:"Reference/RDK",slug:"/Reference/RDK/incrementMemory",permalink:"/docs/Reference/RDK/incrementMemory",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar/docs/Reference/RDK/incrementMemory.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"incrementMemory",sidebar_position:8},sidebar:"ReferenceSideBar",previous:{title:"deleteMemory",permalink:"/docs/Reference/RDK/deleteMemory"},next:{title:"addToSortedSet",permalink:"/docs/Reference/RDK/addToSortedSet"}},l={},p=[{value:"Response",id:"response",level:4}],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"incrementmemory"},"incrementMemory"),(0,c.kt)("p",null,"Excepts key{string} and value{number} in the form below. If current value is number, adds this value to it."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"    const result= await rdk.incrementMemory({ key: 'key',\n      value: 5 });\n")),(0,c.kt)("h4",{id:"response"},"Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')))}f.isMDXComponent=!0}}]);