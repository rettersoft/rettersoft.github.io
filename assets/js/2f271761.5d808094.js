"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[9951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"an-object-oriented-cloud",title:"An object oriented cloud",authors:"baran",tags:["rtbs","object oriented cloud","cloud"]},s=void 0,c={permalink:"/blog/an-object-oriented-cloud",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-07-an-object-oriented-cloud.md",source:"@site/blog/2021-12-07-an-object-oriented-cloud.md",title:"An object oriented cloud",description:"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.",date:"2021-12-07T00:00:00.000Z",formattedDate:"December 7, 2021",tags:[{label:"rtbs",permalink:"/blog/tags/rtbs"},{label:"object oriented cloud",permalink:"/blog/tags/object-oriented-cloud"},{label:"cloud",permalink:"/blog/tags/cloud"}],readingTime:2.385,truncated:!0,authors:[{name:"Baran Baygan",title:"Solution Architect",url:"https://github.com/baranbaygan",imageURL:"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg",key:"baran"}],nextItem:{title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 2/3",permalink:"/blog/cloudobject-a-simple-user-with-auth-part-2-3"}},u={authorsImageUrls:[void 0]},p=[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example: A simple wallet",id:"example-a-simple-wallet",children:[],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. "),(0,a.kt)("p",null,"However they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png",alt:"rtbs screenshot"})),(0,a.kt)("p",null,"I will give AWS specific examples in this article."),(0,a.kt)("p",null,"Most common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api."),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Big promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentication")," \u2014 Yes there are services like Cognito, but they are not really easy to use."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client-Server-Communication")," \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sorting of client requests")," \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\nOrganization of a project in terms of source code"),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"RBS solves these three major problems by implementing following:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentication")," \u2014 is built into objects.\n",(0,a.kt)("strong",{parentName:"p"},"Client-Server-Communication")," \u2014 Objects have internal state and this state is streamed to clients in realtime.\n",(0,a.kt)("strong",{parentName:"p"},"Sorting")," \u2014 Any method request to an object is queued and handled in FIFO manner."),(0,a.kt)("h3",{id:"example-a-simple-wallet"},"Example: A simple wallet"),(0,a.kt)("p",null,"The following template.yml defines two methods in a class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"preAuthorizer: index.preAuthorizer\nauthorizer: index.authorizer\ninit: index.init\ngetState: index.getState\ngetInstanceId: index.getInstanceId\nmethods:\n    - method: addMoney\n      tag: test\n      sync: true\n      steps:\n          - id: addMoney\n            \n    - method: spendMoney\n      tag: test\n      sync: true\n      steps:\n          - id: spendMoney\n            handler: index.spendMoneyHandler\n          - id: success\n          - id: insufficientFunds\n            handler: index.handler\n      flow:\n          - direction:\n                - spendMoney\n                - success\n          - id: gotoInsufficientFunds\n            direction:\n                - spendMoney\n                - insufficientFunds\n\n\n")),(0,a.kt)("p",null,"This class definition template yml file creates the following diagram."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png",alt:"rtbs screenshot"})),(0,a.kt)("p",null,"We have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.rbs = RBS.getInstance({\n  projectId: '{RBS_PROJECT_ID}'\n})\n")),(0,a.kt)("p",null,"Let\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const co = await this.rbs?.getCloudObject({\n  classId: 'WalletB'\n})\n\nco.state.public?.subscribe((publicState: any) => {\n  console.log('publicState', publicState)\n})\n")),(0,a.kt)("p",null,"Now it\u2019s time to call some methods on our wallet instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await co.call({\n  method: 'spendMoney',\n  payload: {\n    amount: 10\n  }\n})\n")),(0,a.kt)("p",null,"That\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."))}m.isMDXComponent=!0}}]);