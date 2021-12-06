"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[6337],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={},s=void 0,c={permalink:"/blog/2021/12/06/rbs-cloud-objects",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-rbs-cloud-objects.md",source:"@site/blog/2021-12-06-rbs-cloud-objects.md",title:"rbs-cloud-objects",description:"slug: state-of-cloud-object",date:"2021-12-06T00:00:00.000Z",formattedDate:"December 6, 2021",tags:[],readingTime:2.4,truncated:!1,authors:[],prevItem:{title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3",permalink:"/blog/cloudobject-a-simple-user-with-auth-part-1-3"},nextItem:{title:"State of a CloudObject",permalink:"/blog/state-of-cloud-object"}},u={authorsImageUrls:[]},p=[{value:"tags: cloudObjects, AWS, Lambda, RBS",id:"tags-cloudobjects-aws-lambda-rbs",children:[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example: A simple wallet",id:"example-a-simple-wallet",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"slug: state-of-cloud-object\ntitle: Rbs Cloud Objects\nauthors: baran"),(0,l.kt)("h2",{id:"tags-cloudobjects-aws-lambda-rbs"},"tags: ","[cloudObjects, AWS, Lambda, RBS]"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*Nz9RJzQD_s1dN7d66n6Zsw.png",alt:"rtbs screenshot"})),(0,l.kt)("p",null,"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers."),(0,l.kt)("p",null,"However they allow you write stateless functions only. Data and functions are separated like in the early days of computing."),(0,l.kt)("p",null,"I will give AWS specific examples in this article."),(0,l.kt)("p",null,"Most common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api."),(0,l.kt)("h3",{id:"problem"},"Problem"),(0,l.kt)("p",null,"Big promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:"),(0,l.kt)("p",null,"Authentication \u2014 Yes there are services like Cognito, but they are not really easy to use.\nClient-Server-Communication \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data."),(0,l.kt)("p",null,"Sorting of client requests \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests."),(0,l.kt)("p",null,"Organization of a project in terms of source code"),(0,l.kt)("h3",{id:"solution"},"Solution"),(0,l.kt)("p",null,"RBS solves these three major problems by implementing following:"),(0,l.kt)("p",null,"Authentication \u2014 is built into objects."),(0,l.kt)("p",null,"Client-Server-Communication \u2014 Objects have internal state and this state is streamed to clients in realtime."),(0,l.kt)("p",null,"Sorting\u2014 Any method request to an object is queued and handled in FIFO manner."),(0,l.kt)("h3",{id:"example-a-simple-wallet"},"Example: A simple wallet"),(0,l.kt)("p",null,"The following template.yml defines two methods in a class."),(0,l.kt)("p",null,"'''yml"),(0,l.kt)("p",null,"preAuthorizer: index.preAuthorizer\nauthorizer: index.authorizer\ninit: index.init\ngetState: index.getState\ngetInstanceId: index.getInstanceId\nmethods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- method: addMoney\n  tag: test\n  sync: true\n  steps:\n      - id: addMoney\n        \n- method: spendMoney\n  tag: test\n  sync: true\n  steps:\n      - id: spendMoney\n        handler: index.spendMoneyHandler\n      - id: success\n      - id: insufficientFunds\n        handler: index.handler\n  flow:\n      - direction:\n            - spendMoney\n            - success\n      - id: gotoInsufficientFunds\n        direction:\n            - spendMoney\n            - insufficientFunds\n")),(0,l.kt)("p",null,"'''"),(0,l.kt)("p",null,"This class definition template yml file creates the following diagram."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*yau56m9fnonWs8KpK1wasw.png",alt:"rtbs screenshot"})),(0,l.kt)("p",null,"We have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance."),(0,l.kt)("p",null,"'''typescript\nthis.rbs = RBS.getInstance({\nprojectId: '{RBS_PROJECT_ID}'\n})\n'''"),(0,l.kt)("p",null,"Let\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates."),(0,l.kt)("p",null,"'''typescipt\nconst co = await this.rbs?.getCloudObject({\nclassId: 'WalletB'\n})"),(0,l.kt)("p",null,"co.state.public?.subscribe((publicState: any) => {\nconsole.log('publicState', publicState)\n})\n'''"),(0,l.kt)("p",null,"Now it\u2019s time to call some methods on our wallet instance"),(0,l.kt)("p",null,"'''typescript\nawait co.call({\nmethod: 'spendMoney',\npayload: {\namount: 10\n}\n})\n'''"),(0,l.kt)("p",null,"That\u2019s it for now. We will dive deeper into cloud objects mechanics in upcoming articles."))}m.isMDXComponent=!0}}]);