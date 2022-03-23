"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[5569],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,d=p["".concat(s,".").concat(f)]||p[f]||l[f]||a;return t?n.createElement(d,c(c({ref:r},m),{},{components:t})):n.createElement(d,c({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5768:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={sidebar_label:"removeFromSortedSet",sidebar_position:11},s="removeFromSortedSet",u={unversionedId:"Reference/RDK/removeFromSortedSet",id:"Reference/RDK/removeFromSortedSet",title:"removeFromSortedSet",description:"Removes a value from sorted set. Expects setName and sortKey{string}",source:"@site/docs/Reference/RDK/removeFromSortedSet.md",sourceDirName:"Reference/RDK",slug:"/Reference/RDK/removeFromSortedSet",permalink:"/docs/Reference/RDK/removeFromSortedSet",editUrl:"https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar/docs/Reference/RDK/removeFromSortedSet.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"removeFromSortedSet",sidebar_position:11},sidebar:"ReferenceSideBar",previous:{title:"getFromSortedList",permalink:"/docs/Reference/RDK/getFromSortedList"},next:{title:"querySortedSet",permalink:"/docs/Reference/RDK/querySortedSet"}},m={},l=[],p={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"removefromsortedset"},"removeFromSortedSet"),(0,a.kt)("p",null,"Removes a value from sorted set. Expects setName{string} and sortKey{string}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let result = await rdk.removeFromSortedSet({\n        setName: "setName",\n        sortKey: "sortkey"\n    })\n')),(0,a.kt)("h1",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')))}f.isMDXComponent=!0}}]);