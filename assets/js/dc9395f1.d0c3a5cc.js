"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[9133],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"IOS",sidebar_label:"iOS",sidebar_position:1},c="iOS",u={unversionedId:"Getting Started/SDKs/IOS",id:"Getting Started/SDKs/IOS",title:"iOS",description:"Requirements",source:"@site/docs/Getting Started/SDKs/IOS.md",sourceDirName:"Getting Started/SDKs",slug:"/Getting Started/SDKs/IOS",permalink:"/docs/Getting Started/SDKs/IOS",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/v2/docs/Getting Started/SDKs/IOS.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"IOS",sidebar_label:"iOS",sidebar_position:1},sidebar:"GettingStartedSideBar",previous:{title:"What Can You Build With Retterio",permalink:"/docs/Getting Started/What Can You Build With Retterio"},next:{title:"Android",permalink:"/docs/Getting Started/SDKs/Android"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Initialize SDK",id:"initialize-sdk",level:2},{value:"Authenticate",id:"authenticate",level:2},{value:"Rio Delegate",id:"rio-delegate",level:2},{value:"Get a cloud object",id:"get-a-cloud-object",level:2},{value:"Call a method on a cloud object",id:"call-a-method-on-a-cloud-object",level:2},{value:"Listen to realtime updates on cloud objects",id:"listen-to-realtime-updates-on-cloud-objects",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ios"},"iOS"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You need to have a Rio projectId."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"cocoapods"},"Cocoapods"),(0,r.kt)("p",null,"Rio is available through ",(0,r.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods"),". To install\nit, simply add the following line to your Podfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'Rio'\n")),(0,r.kt)("h3",{id:"swift-package-manager"},"Swift Package Manager"),(0,r.kt)("p",null,"You can use swift package manager with following repo url and using main branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://github.com/rettersoft/rio-ios-sdk\n")),(0,r.kt)("h2",{id:"initialize-sdk"},"Initialize SDK"),(0,r.kt)("p",null,"Initialize the SDK with your project id created in Rio console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let rio = Rio.init(config: RioConfig(projectId: "{PROJECT_ID}"))\n')),(0,r.kt)("h2",{id:"authenticate"},"Authenticate"),(0,r.kt)("p",null,"Rio client's authenticateWithCustomToken method should be used to authenticate a user. If you don't call this method, client will send actions as an anonymous user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"rio.authenticateWithCustomToken(customToken)\n")),(0,r.kt)("p",null,"You can sign out with .signout method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"rio.signOut()\n")),(0,r.kt)("h2",{id:"rio-delegate"},"Rio Delegate"),(0,r.kt)("p",null,"You can attach a delegate to Rio client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"rio.delegate = self\n")),(0,r.kt)("p",null,"And start receiving authentication state changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController : RioClientDelegate {\n    func rioClient(client: Rio, authStatusChanged toStatus: RioClientAuthStatus) {\n        \n    }\n}\n")),(0,r.kt)("h2",{id:"get-a-cloud-object"},"Get a cloud object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'rio.getCloudObject(with: RioCloudObjectOptions(classID: "Test")) { object in\n    \n} onError: { error in\n    \n}\n')),(0,r.kt)("h2",{id:"call-a-method-on-a-cloud-object"},"Call a method on a cloud object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'object.call(with: RioCloudObjectOptions(method: "sayHello")) { resp in\n    \n} onError: { error in\n    \n}\n')),(0,r.kt)("h2",{id:"listen-to-realtime-updates-on-cloud-objects"},"Listen to realtime updates on cloud objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"object.state?.public.subscribe(onSuccess: { data in\n    \n}, onError: { err in\n    \n})\n")))}m.isMDXComponent=!0}}]);