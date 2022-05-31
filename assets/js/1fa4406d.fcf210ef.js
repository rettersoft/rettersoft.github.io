"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[432],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"Android",sidebar_label:"Android",sidebar_position:2},d="Android",c={unversionedId:"Getting Started/SDKs/Android",id:"Getting Started/SDKs/Android",title:"Android",description:"Requirements",source:"@site/docs/Getting Started/SDKs/Android.md",sourceDirName:"Getting Started/SDKs",slug:"/Getting Started/SDKs/Android",permalink:"/docs/Getting Started/SDKs/Android",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/main/docs/Getting Started/SDKs/Android.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Android",sidebar_label:"Android",sidebar_position:2},sidebar:"GettingStartedSideBar",previous:{title:"iOS",permalink:"/docs/Getting Started/SDKs/IOS"},next:{title:"Web",permalink:"/docs/Getting Started/SDKs/Web"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Add it in your root build.gradle at the end of repositories:",id:"add-it-in-your-root-buildgradle-at-the-end-of-repositories",level:5},{value:"Add the dependency",id:"add-the-dependency",level:5},{value:"Proguard config",id:"proguard-config",level:5},{value:"Initialize SDK",id:"initialize-sdk",level:2},{value:"Authenticate",id:"authenticate",level:2},{value:"Get a cloud object",id:"get-a-cloud-object",level:2},{value:"Call a method on a cloud object",id:"call-a-method-on-a-cloud-object",level:2},{value:"Listen to realtime updates on cloud objects",id:"listen-to-realtime-updates-on-cloud-objects",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android"},"Android"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You need to have a Rio projectId."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h5",{id:"add-it-in-your-root-buildgradle-at-the-end-of-repositories"},"Add it in your root build.gradle at the end of repositories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"allprojects {\n  repositories {\n    ...\n    maven { url 'https://jitpack.io' }\n  }\n}\n")),(0,i.kt)("h5",{id:"add-the-dependency"},"Add the dependency"),(0,i.kt)("p",null,"Latest Version: ",(0,i.kt)("a",{parentName:"p",href:"https://jitpack.io/#rettersoft/rio-android-sdk"},(0,i.kt)("img",{parentName:"a",src:"https://jitpack.io/v/rettersoft/rio-android-sdk.svg",alt:null}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dependencies {\n  implementation 'com.github.rettersoft:rio-android-sdk:{latest-version}'\n}\n")),(0,i.kt)("h5",{id:"proguard-config"},"Proguard config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-keep class com.rettermobile** { *; }\n-keep class com.rettermobile.* { *; }\n")),(0,i.kt)("h2",{id:"initialize-sdk"},"Initialize SDK"),(0,i.kt)("p",null,"Initialize the SDK with your project id created in Rio console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'rio = Rio(\n    applicationContext = applicationContext,\n    projectId = "<ProjectId>",\n    culture= "en",\n    config = RioNetworkConfig.build {\n        region = RioRegion.EU_WEST_1\n        sslPinningEnabled = false // default: true\n    }\n)\n')),(0,i.kt)("h2",{id:"authenticate"},"Authenticate"),(0,i.kt)("p",null,"Rio client's authenticateWithCustomToken method should be used to authenticate a user. If you don't call this method, client will send actions as an anonymous user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'rio.authenticateWithCustomToken("<CUSTOM_TOKEN>") { isSuccess, throwable ->\n    if (isSuccess) {\n        // do success\n    } else {\n        // use throwable\n    }\n}\n')),(0,i.kt)("p",null,"You can sign out with .signout method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"rio.signOut() { isSuccess, throwable ->\n    if (isSuccess) {\n        // do success\n    } else {\n        // use throwable\n    }\n}\n")),(0,i.kt)("p",null,"You can also receive auth status changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"rio.setOnClientAuthStatusChangeListener { rbsClientAuthStatus, rbsUser ->\n    //\n}\n")),(0,i.kt)("h2",{id:"get-a-cloud-object"},"Get a cloud object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'rio.getCloudObject(RioCloudObjectOptions(classId = "<ClassId>"), onSuccess = { cloudObj ->\n    // cloudObj.call()\n    // cloudObj.instanceId()\n    // etc..\n}, onError = { throwable ->\n})\n')),(0,i.kt)("h2",{id:"call-a-method-on-a-cloud-object"},"Call a method on a cloud object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},'cloudObj.call<ParserClazz>(RioCallMethodOptions(\n    method = "<method>",\n    body = input,\n), onSuccess = {\n    onSuccess?.invoke(it.body)\n}, onError = {\n    onError?.invoke(it)\n})\n')),(0,i.kt)("h2",{id:"listen-to-realtime-updates-on-cloud-objects"},"Listen to realtime updates on cloud objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"cloudObj.public.subscribe( eventFired = { event ->\n    // \n}, errorFired = { throwable ->\n    // \n})\n")))}m.isMDXComponent=!0}}]);