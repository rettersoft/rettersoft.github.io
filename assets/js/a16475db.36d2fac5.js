"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[1320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3498:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="iOS",c={unversionedId:"sdks/ios",id:"sdks/ios",isDocsHomePage:!1,title:"iOS",description:"CI Status",source:"@site/docs/sdks/ios.mdx",sourceDirName:"sdks",slug:"/sdks/ios",permalink:"/docs/sdks/ios",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdks/ios.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/sdks/Android"}},u=[{value:"Example",id:"example",children:[],level:2},{value:"About RBS",id:"about-rbs",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Cocoapods",id:"cocoapods",children:[],level:3},{value:"Swift Package Manager",id:"swift-package-manager",children:[],level:3}],level:2},{value:"Initialize SDK",id:"initialize-sdk",children:[],level:2},{value:"Authenticate",id:"authenticate",children:[],level:2},{value:"RBS Delegate",id:"rbs-delegate",children:[],level:2},{value:"Cloud Objects",id:"cloud-objects",children:[],level:2},{value:"Send Actions",id:"send-actions",children:[],level:2},{value:"License",id:"license",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios"},"iOS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://travis-ci.org/baranbaygan/RBS"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/travis/baranbaygan/RBS.svg?style=flat",alt:"CI Status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/v/RBS.svg?style=flat",alt:"Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/l/RBS.svg?style=flat",alt:"License"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/pods/RBS"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/cocoapods/p/RBS.svg?style=flat",alt:"Platform"}))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To run the example project, clone the repo, and run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," from the Example directory first."),(0,o.kt)("h2",{id:"about-rbs"},"About RBS"),(0,o.kt)("p",null,"RBS can be used by developers to build event based systems. You should create an RBS account and an RBS project to start. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.rtbs.io"},"https://console.rtbs.io")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You need to have a RTBS projectId."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"cocoapods"},"Cocoapods"),(0,o.kt)("p",null,"RTBS is available through ",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods"),". To install\nit, simply add the following line to your Podfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'RBS'\n")),(0,o.kt)("h3",{id:"swift-package-manager"},"Swift Package Manager"),(0,o.kt)("p",null,"You can use swift package manager with following repo url and using main branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/rettersoft/rbs-ios-sdk\n")),(0,o.kt)("h2",{id:"initialize-sdk"},"Initialize SDK"),(0,o.kt)("p",null,"Initialize the SDK with your project id created in RBS console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'let rbs = RBS(config: RBSConfig(projectId: "{PROJECT_ID}"))\n')),(0,o.kt)("h2",{id:"authenticate"},"Authenticate"),(0,o.kt)("p",null,"RBS client's authenticateWithCustomToken method should be used to authenticate a user. If you don't call this method, client will send actions as an anonymous user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"rbs.authenticateWithCustomToken(customToken)\n")),(0,o.kt)("p",null,"RBS custom tokens can be generated by a RBS service by contacting RBS core service via RBS SDK."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A client app sends a request to a RBS service which has permission to generate RBS custom tokens."),(0,o.kt)("li",{parentName:"ul"},"RBS Service uses RBS SDK on the server side to communicate with RBS Core to generate custom token with user credentials."),(0,o.kt)("li",{parentName:"ul"},"RBS Core creates a custom token and returns it to the service."),(0,o.kt)("li",{parentName:"ul"},"The service returns it to the client application."),(0,o.kt)("li",{parentName:"ul"},"The client application uses RBS SDK authenticateWithCustomToken method to sign in as this user. From that point on any request made by this client, is recognized as this user by all RBS services.")),(0,o.kt)("p",null,"You can sign out with .signout method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"rbs.signOut()\n")),(0,o.kt)("h2",{id:"rbs-delegate"},"RBS Delegate"),(0,o.kt)("p",null,"You can attach a delegate to RBS client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"rbs.delegate = self\n")),(0,o.kt)("p",null,"And start receiving authentication state changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'extension ViewController : RBSClientDelegate {\n    func rbsClient(client: RBS, authStatusChanged toStatus: RBSClientAuthStatus) {\n        print("RBS authStatusChanged to \\(toStatus)")\n    }\n}\n')),(0,o.kt)("h2",{id:"cloud-objects"},"Cloud Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"var cloudObject: RBSCloudObject?\n")),(0,o.kt)("p",null,"Now let's get this object from the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'rbs.getCloudObject(with: RBSCloudObjectOptions(classID: "ChatRoom", instanceID: "01FPJX38KE3G8HBQ49VMF2KC3C")) { [weak self] (newObject) in\n    print("--- Cloud Object Created ---")\n    self?.cloudObject = newObject\n} onError: { (error) in\n    print(error)\n}\n')),(0,o.kt)("p",null,"Listen to state updates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'self.cloudObject.state.user.subscribe { (data) in\n   print("---User State ->", data)\n} errorFired: { (error) in\n   print("---User State Error ->", error)\n}\n\nself.cloudObject.state.role.subscribe { (data) in\n   print("---RoleState State ->", data)\n} errorFired: { (error) in\n   print("---Role State Error ->", error)\n}\n\nself.cloudObject.state.public.subscribe { (data) in\n   print("---Public State ->", data)\n} errorFired: { (error) in\n   print("---Public State Error ->", error)\n}\n')),(0,o.kt)("p",null,"Let's call a method on an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'self.cloudObject.call(\n   with: RBSCloudObjectOptions(method: "sayHello")\n) { (response) in\n   if let firstResponse = response.first,\n      let data = firstResponse as? Data {\n         let json = try? JSONSerialization.jsonObject(with: data, options: [])\n         print("---Method Response ->", json)\n   }\n} errorFired: { (error) in\n   print("---Method Error ->", error)\n}\n')),(0,o.kt)("h2",{id:"send-actions"},"Send Actions"),(0,o.kt)("p",null,"Actions are unique strings to call a service on RBS. Actions have 4 parts separated by dots like below:"),(0,o.kt)("p",null,"{COMPANY}.{SERVICE_ID}.{ACTION_TYPE}.{ACTION_NAME}"),(0,o.kt)("p",null,"Action Type can only be \u201cevent\u201d or \u201crequest\u201d."),(0,o.kt)("p",null,"Some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rtbs.oms.request.INSERT_ORDER"),(0,o.kt)("li",{parentName:"ul"},"rtbs.oms.request.LIST_MY_ORDERS"),(0,o.kt)("li",{parentName:"ul"},"rtbs.oms.event.ORDER_CREATED"),(0,o.kt)("li",{parentName:"ul"},"rtbs.notification.request.SEND_SMS"),(0,o.kt)("li",{parentName:"ul"},"somecompany.awesomeservice.request.DO_STUFF")),(0,o.kt)("p",null,"You can use .send method to send actions to RBS services. The list of which actions will trigger which services is listed in your RBS project configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'rbs.send(action: "rbs.someservice.request.SOME_ACTION",\n         data: [\n            "key": "value",\n         ],\n         onSuccess: { result in\n            print("Result: \\(result)")\n         },\n         onError: { error in\n            print("Error Result: \\(error)")\n         })\n')),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"RBS is available under the MIT license. See the LICENSE file for more info."))}d.isMDXComponent=!0}}]);