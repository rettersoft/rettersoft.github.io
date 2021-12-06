"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[789],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:2},l="Inputs & Outputs",p={unversionedId:"process-manager/in-out",id:"process-manager/in-out",isDocsHomePage:!1,title:"Inputs & Outputs",description:"A process starts with an optional payload, then executes step by step sequentially.",source:"@site/docs/process-manager/in-out.md",sourceDirName:"process-manager",slug:"/process-manager/in-out",permalink:"/docs/process-manager/in-out",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/process-manager/in-out.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About Deneme",permalink:"/docs/process-manager/about"},next:{title:"Components",permalink:"/docs/process-manager/components"}},u=[{value:"Dynamic Paths",id:"dynamic-paths",children:[],level:2},{value:"Directives",id:"directives",children:[{value:"$$",id:"",children:[],level:3},{value:"$$.USER_ID or $$.USER",id:"user_id-or-user",children:[],level:3},{value:"$$.TIMESTAMP",id:"timestamp",children:[],level:3},{value:"$$.ULID",id:"ulid",children:[],level:3},{value:"$$.UUID",id:"uuid",children:[],level:3},{value:"$$.APPEND(item: any, target?: any[])",id:"appenditem-any-target-any",children:[],level:3},{value:"$$.BASE64(input: string)",id:"base64input-string",children:[],level:3},{value:"$$.BCRYPT(input: string, salt: number)",id:"bcryptinput-string-salt-number",children:[],level:3},{value:"$$.BCRYPT_COMPARE(input: string, hash: string)",id:"bcrypt_compareinput-string-hash-string",children:[],level:3},{value:"$$.CONCAT(separator: string, ...items: any[])",id:"concatseparator-string-items-any",children:[],level:3},{value:"$$.DATE(method: string, d: string | number | Date, ...params: any[])",id:"datemethod-string-d-string--number--date-params-any",children:[],level:3},{value:"$$.LENGTH(input: string | any[])",id:"lengthinput-string--any",children:[],level:3},{value:"$$.MERGE(...items: object[]) or $$.SPREAD(...items: object[])",id:"mergeitems-object-or-spreaditems-object",children:[],level:3},{value:"$$.MD5()",id:"md5",children:[],level:3},{value:"$$.MODE(input: string, shardCount?: number)",id:"modeinput-string-shardcount-number",children:[],level:3},{value:"$$.OR(...items: any[])",id:"oritems-any",children:[],level:3},{value:"$$.POP()",id:"pop",children:[],level:3},{value:"$$.RANDOM(len?: number, numbersOnly?: boolean)",id:"randomlen-number-numbersonly-boolean",children:[],level:3},{value:"$$.REPLACE(input: string, pathToContext: string) or $$.VTL(input: string, pathToContext: string)",id:"replaceinput-string-pathtocontext-string-or-vtlinput-string-pathtocontext-string",children:[],level:3},{value:"$$.SPLIT(input: string, separator?: string)",id:"splitinput-string-separator-string",children:[],level:3},{value:"Conditional Flows",id:"conditional-flows",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inputs--outputs"},"Inputs & Outputs"),(0,i.kt)("p",null,"A process starts with an optional payload, then executes step by step sequentially.\nYou can interact with the client (caller) on any step you want again.\nA process might also have multiple outputs depend on conditional flows.\nFor example; some paths end up with error messages, while others end up with some result data."),(0,i.kt)("p",null,"Each executed path will be reported in process mining separately with possible errors and extra information (",(0,i.kt)("em",{parentName:"p"},"info1"),", ",(0,i.kt)("em",{parentName:"p"},"info2")," and ",(0,i.kt)("em",{parentName:"p"},"info3"),")."),(0,i.kt)("h2",{id:"dynamic-paths"},"Dynamic Paths"),(0,i.kt)("p",null,"State is available for all steps.\nAt first, it contains only client's initial payload with some metadata such as processId, executionId, details of token, etc.\nEach step can manipulate (add, update, remove) any key on the state.\nTo access a key in the state, you should declare a path starting with a dollar ($) sign."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"$.payload.phoneNumber returns the phone number that has been sent by client as initial payload.")),(0,i.kt)("p",null,"If you want to save value of a dynamic path into state or send them to another service, you should declare the key has a dynamic value by ending the name with a dollar ($) sign."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dynamic_key.$": "$.payload.originalValue",\n    "static_key": "Some Static Value"\n}\n')),(0,i.kt)("p",null,"To access any element of an array in a dynamic path, you should add index of the element into your path declaration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keyFromFirstItem.$": "$.payload.itemsArray.0.someKey"\n}\n')),(0,i.kt)("h2",{id:"directives"},"Directives"),(0,i.kt)("p",null,"Besides dynamic paths, a process can also use directives to work with dynamic values.\nProcess Manager has two kinds of directives: variables like ",(0,i.kt)("em",{parentName:"p"},"$$.TIMESTAMP"),", ",(0,i.kt)("em",{parentName:"p"},"$$.USER")," and functions like ",(0,i.kt)("em",{parentName:"p"},"$$.CONCAT()"),", ",(0,i.kt)("em",{parentName:"p"},"$$.OR()")),(0,i.kt)("h3",{id:""},"$$"),(0,i.kt)("p",null,"Returns all of the current state."),(0,i.kt)("h3",{id:"user_id-or-user"},"$$.USER_ID or $$.USER"),(0,i.kt)("p",null,"Both variables returns caller user's ID."),(0,i.kt)("h3",{id:"timestamp"},"$$.TIMESTAMP"),(0,i.kt)("p",null,"Returns current timestamp in milliseconds."),(0,i.kt)("h3",{id:"ulid"},"$$.ULID"),(0,i.kt)("p",null,"Returns a sortable ULID."),(0,i.kt)("h3",{id:"uuid"},"$$.UUID"),(0,i.kt)("p",null,"Returns a UUID."),(0,i.kt)("h3",{id:"appenditem-any-target-any"},"$$.APPEND(item: any, target?: any[])"),(0,i.kt)("p",null,"Appends a new item into target array. If you don't provide a target, it creates a new array and appends the item into it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "key.$" : "$$.APPEND($.anItemSomewhereInState, $.anArraySomewhereInState)"\n}\n')),(0,i.kt)("h3",{id:"base64input-string"},"$$.BASE64(input: string)"),(0,i.kt)("p",null,"Converts an input to base64 string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "converted.$" : "$$.BASE64($.aKeySomewhereInState)"\n}\n')),(0,i.kt)("h3",{id:"bcryptinput-string-salt-number"},"$$.BCRYPT(input: string, salt: number)"),(0,i.kt)("p",null,"Returns hash of an input in bcrypt format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "hash.$" : "$$.BCRYPT($.payload.password, 10)"\n}\n')),(0,i.kt)("h3",{id:"bcrypt_compareinput-string-hash-string"},"$$.BCRYPT_COMPARE(input: string, hash: string)"),(0,i.kt)("p",null,"Checks if input matches with provided bcrypt hash."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "isOK.$" : "$$.BCRYPT_COMPARE($.payload.password, $.hash)"\n}\n')),(0,i.kt)("h3",{id:"concatseparator-string-items-any"},"$$.CONCAT(separator: string, ...items: any[])"),(0,i.kt)("p",null,"Returns parameters in a form concatenated by separator.\nIf you want to concatenate arrays, you should pass ",(0,i.kt)("em",{parentName:"p"},"ARRAY!")," as separator, then provide more than one arrays to combine them into a single array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n    \"strValue.$\" : \"$$.CONCAT(' ', 'Name:', $.payload.name)\"\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "arrValue.$" : "$$.CONCAT(\'ARRAY!\', $.anArraySomewhereInState, $.anotherArraySomewhereInState)"\n}\n')),(0,i.kt)("h3",{id:"datemethod-string-d-string--number--date-params-any"},"$$.DATE(method: string, d: string | number | Date, ...params: any[])"),(0,i.kt)("p",null,"Date directive is simplified version of date component under third party libraries. It uses ",(0,i.kt)("a",{parentName:"p",href:"https://date-fns.org"},"date-fns")," under the hood.\nWhile you can chain multiple methods in date component, you can only call a single method here at once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n    \"year.$\": \"$$.DATE('format', $.payload.createdAt, 'yyyy')\"\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "nextDay.$": "$$.DATE(\'addDay\', $.payload.createdAt, 1)"\n}\n')),(0,i.kt)("h3",{id:"lengthinput-string--any"},"$$.LENGTH(input: string | any[])"),(0,i.kt)("p",null,"Returns the length of input. If input is string, returns character length. Otherwise it returns number of elements in the array."),(0,i.kt)("h3",{id:"mergeitems-object-or-spreaditems-object"},"$$.MERGE(...items: object[]) or $$.SPREAD(...items: object[])"),(0,i.kt)("p",null,"Combines all objects in provided order and returns a single object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "merged.$": "$$.MERGE(\'addDay\', $.anObjectSomewhereInState, $.anotherObjectSomewhereInState)"\n}\n')),(0,i.kt)("h3",{id:"md5"},"$$.MD5()"),(0,i.kt)("p",null,"Returns hash of an input in md5 format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "hash.$": "$$.MD5($.aStringSomewhereInState)"\n}\n')),(0,i.kt)("h3",{id:"modeinput-string-shardcount-number"},"$$.MODE(input: string, shardCount?: number)"),(0,i.kt)("p",null,"Calculates which shard the input should go into. Default ",(0,i.kt)("em",{parentName:"p"},"shardCount")," is 100."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "shardNo.$": "$$.MODE($.aStringSomewhereInState, 5)"\n}\n')),(0,i.kt)("h3",{id:"oritems-any"},"$$.OR(...items: any[])"),(0,i.kt)("p",null,"Returns first ",(0,i.kt)("em",{parentName:"p"},"defined")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "name.$": "$$.OR($.aPathToUndefinedValue, $.anotherPathToUndefinedValue, $.payload.name)"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "name.$": "$$.OR($.aPathToUndefinedValue, $.anotherPathToUndefinedValue, \'Name\')"\n}\n')),(0,i.kt)("h3",{id:"pop"},"$$.POP()"),(0,i.kt)("p",null,"Returns last element of an array."),(0,i.kt)("h3",{id:"randomlen-number-numbersonly-boolean"},"$$.RANDOM(len?: number, numbersOnly?: boolean)"),(0,i.kt)("p",null,"Returns a random string in length of ",(0,i.kt)("em",{parentName:"p"},"len")," parameter. Default value for len parameter is 8.\nIt uses only capital letters and numbers to generate the random string."),(0,i.kt)("h3",{id:"replaceinput-string-pathtocontext-string-or-vtlinput-string-pathtocontext-string"},"$$.REPLACE(input: string, pathToContext: string) or $$.VTL(input: string, pathToContext: string)"),(0,i.kt)("p",null,"Returns context-applied form of a string template."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Assume that we have an initial state like this: ",(0,i.kt)("em",{parentName:"p"},"{ template: 'Hello {name}!', context: { name: 'John', surname: 'Doe' } }"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "replacedText.$": "$$.REPLACE($.template, $.context)"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At the end, ",(0,i.kt)("em",{parentName:"p"},"replacedText"),' ends up being "Hello John!".')),(0,i.kt)("h3",{id:"splitinput-string-separator-string"},"$$.SPLIT(input: string, separator?: string)"),(0,i.kt)("p",null,"Parses a string by separator and returns the array back. Default separator is an empty string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "parsed.$": "$$.SPLIT($.aStringSomewhereInState, \',\')"\n}\n')),(0,i.kt)("h3",{id:"conditional-flows"},"Conditional Flows"),(0,i.kt)("p",null,"Moving one step to another is possible in two ways: ",(0,i.kt)("em",{parentName:"p"},"conditional")," and ",(0,i.kt)("em",{parentName:"p"},"default"),". You can consider these like ",(0,i.kt)("em",{parentName:"p"},"if"),", ",(0,i.kt)("em",{parentName:"p"},"else if")," and ",(0,i.kt)("em",{parentName:"p"},"else")," statements.\nProcess Manager will try conditions one by one. If there is a match, its target step will be executed. Otherwise, default flow will be executed."),(0,i.kt)("p",null,"All conditional expressions use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rettersoft/rbs-rule-engine"},"Rule Engine")," under the hood.\nBy default, rule engine can resolve attributes from state. So, you don't have to provide dollar ($) sign on left part of your condition.\nOn right part which is the value part, you can use dynamic paths as well as you can use constant values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "payload.username": { "EX": true }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "serviceResult.status": { "EQ": 200 }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "payload.password": { "EQ": "$.passwordSomewhereInState" }\n}\n')))}d.isMDXComponent=!0}}]);