"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[4480],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9173:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={sidebar_label:"getFromSortedList",sidebar_position:10},c="getFromSortedList",l={unversionedId:"Reference/RDK/getFromSortedList",id:"Reference/RDK/getFromSortedList",title:"getFromSortedList",description:"Body i\xe7erisinde msisdn ve profile bekler.",source:"@site/docs/Reference/RDK/getFromSortedList.md",sourceDirName:"Reference/RDK",slug:"/Reference/RDK/getFromSortedList",permalink:"/docs/Reference/RDK/getFromSortedList",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar/docs/Reference/RDK/getFromSortedList.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"getFromSortedList",sidebar_position:10},sidebar:"ReferenceSideBar",previous:{title:"addToSortedSet",permalink:"/docs/Reference/RDK/addToSortedSet"},next:{title:"removeFromSortedSet",permalink:"/docs/Reference/RDK/removeFromSortedSet"}},p={},u=[{value:"Response",id:"response",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getfromsortedlist"},"getFromSortedList"),(0,i.kt)("p",null,"Body i\xe7erisinde ",(0,i.kt)("inlineCode",{parentName:"p"},"msisdn")," ve ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," bekler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msisdn": "{string}",\n    "profile": {\n       "firstName": "{string}",\n       "lastName": "{string}",\n       "phoneNumber": "{string}",\n       "email": "{string}",\n       "district": "{string}",\n       "province": "{string}"\n   }\n}\n')),(0,i.kt)("h4",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "success" \n}\n')))}f.isMDXComponent=!0}}]);