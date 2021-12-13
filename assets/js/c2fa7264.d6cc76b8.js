"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[2696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="iOS",c={unversionedId:"sdks/ios",id:"sdks/ios",isDocsHomePage:!1,title:"iOS",description:"CI Status",source:"@site/docs/sdks/ios.md",sourceDirName:"sdks",slug:"/sdks/ios",permalink:"/docs/sdks/ios",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdks/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/docs/sdks/JS"}},u=[{value:"Example",id:"example",children:[],level:2},{value:"About RBS",id:"about-rbs",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Cocoapods",id:"cocoapods",children:[],level:3},{value:"Swift Package Manager",id:"swift-package-manager",children:[],level:3}],level:2},{value:"Initialize SDK",id:"initialize-sdk",children:[],level:2},{value:"Authenticate",id:"authenticate",children:[],level:2},{value:"RBS Delegate",id:"rbs-delegate",children:[],level:2},{value:"Send Actions",id:"send-actions",children:[],level:2},{value:"License",id:"license",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios"},"iOS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org/baranbaygan/RBS"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/travis/baranbaygan/RBS.svg?style=flat",alt:"CI Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/v/RBS.svg?style=flat",alt:"Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/l/RBS.svg?style=flat",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/p/RBS.svg?style=flat",alt:"Platform"}))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To run the example project, clone the repo, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," from the Example directory first."),(0,i.kt)("h2",{id:"about-rbs"},"About RBS"),(0,i.kt)("p",null,"RBS can be used by developers to build event based systems. You should create an RBS account and an RBS project to start. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://console.rtbs.io"},"https://console.rtbs.io")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You need to have a RTBS projectId."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"cocoapods"},"Cocoapods"),(0,i.kt)("p",null,"RTBS is available through ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods"),". To install\nit, simply add the following line to your Podfile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'RBS'\n")),(0,i.kt)("h3",{id:"swift-package-manager"},"Swift Package Manager"),(0,i.kt)("p",null,"You can use swift package manager with following repo url and using main branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://github.com/rettersoft/rbs-ios-sdk\n")),(0,i.kt)("h2",{id:"initialize-sdk"},"Initialize SDK"),(0,i.kt)("p",null,"Initialize the SDK with your project id created in RBS console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let rbs = RBS(config: RBSConfig(projectId: "{PROJECT_ID}"))\n')),(0,i.kt)("h2",{id:"authenticate"},"Authenticate"),(0,i.kt)("p",null,"RBS client's authenticateWithCustomToken method should be used to authenticate a user. If you don't call this method, client will send actions as an anonymous user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"rbs.authenticateWithCustomToken(customToken)\n")),(0,i.kt)("p",null,"RBS custom tokens can be generated by a RBS service by contacting RBS core service via RBS SDK."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A client app sends a request to a RBS service which has permission to generate RBS custom tokens."),(0,i.kt)("li",{parentName:"ul"},"RBS Service uses RBS SDK on the server side to communicate with RBS Core to generate custom token with user credentials."),(0,i.kt)("li",{parentName:"ul"},"RBS Core creates a custom token and returns it to the service."),(0,i.kt)("li",{parentName:"ul"},"The service returns it to the client application."),(0,i.kt)("li",{parentName:"ul"},"The client application uses RBS SDK authenticateWithCustomToken method to sign in as this user. From that point on any request made by this client, is recognized as this user by all RBS services.")),(0,i.kt)("p",null,"You can sign out with .signout method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"rbs.signOut()\n")),(0,i.kt)("h2",{id:"rbs-delegate"},"RBS Delegate"),(0,i.kt)("p",null,"You can attach a delegate to RBS client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"rbs.delegate = self\n")),(0,i.kt)("p",null,"And start receiving authentication state changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'extension ViewController : RBSClientDelegate {\n    func rbsClient(client: RBS, authStatusChanged toStatus: RBSClientAuthStatus) {\n        print("RBS authStatusChanged to \\(toStatus)")\n    }\n}\n')),(0,i.kt)("h2",{id:"send-actions"},"Send Actions"),(0,i.kt)("p",null,"Actions are unique strings to call a service on RBS. Actions have 4 parts separated by dots like below:"),(0,i.kt)("p",null,"{COMPANY}.{SERVICE_ID}.{ACTION_TYPE}.{ACTION_NAME}"),(0,i.kt)("p",null,"Action Type can only be \u201cevent\u201d or \u201crequest\u201d."),(0,i.kt)("p",null,"Some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rtbs.oms.request.INSERT_ORDER"),(0,i.kt)("li",{parentName:"ul"},"rtbs.oms.request.LIST_MY_ORDERS"),(0,i.kt)("li",{parentName:"ul"},"rtbs.oms.event.ORDER_CREATED"),(0,i.kt)("li",{parentName:"ul"},"rtbs.notification.request.SEND_SMS"),(0,i.kt)("li",{parentName:"ul"},"somecompany.awesomeservice.request.DO_STUFF")),(0,i.kt)("p",null,"You can use .send method to send actions to RBS services. The list of which actions will trigger which services is listed in your RBS project configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'rbs.send(action: "rbs.someservice.request.SOME_ACTION",\n         data: [\n            "key": "value",\n         ],\n         onSuccess: { result in\n            print("Result: \\(result)")\n         },\n         onError: { error in\n            print("Error Result: \\(error)")\n         })\n')),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"RBS is available under the MIT license. See the LICENSE file for more info."))}d.isMDXComponent=!0}}]);