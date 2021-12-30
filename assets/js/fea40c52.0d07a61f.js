"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[6406],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={slug:"otp-signin-with-cloud-objects",title:"OTP Sign In With Cloud Objects - Part 1",authors:"semihayhan",tags:["Serverless","Rtbs","Rbs","Cloudobjects"]},l=void 0,d={permalink:"/blog/otp-signin-with-cloud-objects",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-14-otp-signin-with-cloud-objects.md",source:"@site/blog/2021-12-14-otp-signin-with-cloud-objects.md",title:"OTP Sign In With Cloud Objects - Part 1",description:"We need to several methods to implement OTP signin with cloudobjects. These methods are sendOTP, validateOTP and signUp. We'll use User class to add this methods. In this part of the tutorial we'll implement only sendOTP and validateOTP methods.",date:"2021-12-14T00:00:00.000Z",formattedDate:"December 14, 2021",tags:[{label:"Serverless",permalink:"/blog/tags/serverless"},{label:"Rtbs",permalink:"/blog/tags/rtbs"},{label:"Rbs",permalink:"/blog/tags/rbs"},{label:"Cloudobjects",permalink:"/blog/tags/cloudobjects"}],readingTime:3.065,truncated:!1,authors:[{name:"Semih Ayhan",url:"https://github.com/smhayhan",imageURL:"https://gravatar.com/avatar/7f3c02c0adc7b42b4e817063a5050b61?s=200",key:"semihayhan"}],nextItem:{title:"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3",permalink:"/blog/cloudobject-a-simple-user-with-auth-part-1-3"}},p={authorsImageUrls:[void 0]},u=[{value:"Methods",id:"methods",children:[{value:"- sendOTP",id:"--sendotp",children:[],level:3},{value:"- validateOTP",id:"--validateotp",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We need to several methods to implement OTP signin with cloudobjects. These methods are ",(0,r.kt)("inlineCode",{parentName:"p"},"sendOTP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"validateOTP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"signUp"),". We'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class to add this methods. In this part of the tutorial we'll implement only ",(0,r.kt)("inlineCode",{parentName:"p"},"sendOTP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"validateOTP")," methods."),(0,r.kt)("p",null,"Firstly we customize ",(0,r.kt)("inlineCode",{parentName:"p"},"preAuthorizer")," to allow method calls from anonymous users. Let's create ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.ts")," file. We'll use this file for otp related codes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export async function preAuthorizer(data: Data): Promise<Response> {\n    if (data.method.context.identity === 'Owner') return { statusCode: 200 }\n\n    // OTP methods can be called bu anyone\n    if (['sendOTP', 'validateOTP'].includes(data.method.name)) {\n        return { statusCode: 200 }\n    }\n\n    // User class specific control, don't allow users to use other's instance ids\n    if (data.method.context.userId !== data.context.instanceId || data.method.context.identity !== 'enduser') {\n        return {\n            statusCode: 403,\n        }\n    }\n\n    return { statusCode: 200 }\n}\n")),(0,r.kt)("p",null,"Now, we can add preAuthorizer to top of ",(0,r.kt)("inlineCode",{parentName:"p"},"template.yml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"preAuthorizer: auth.preAuthorizer\n# ...rest of file\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"We use SDK and types heavily in this file. So, let's add this to top of ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import SDK, { Data, InitResponse, Response, StepResponse } from './CloudObjects'\n\nconst sdk = new SDK()\n")),(0,r.kt)("p",null,"Let's update our template to define methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"...\nmethods:\n    - method: sendOTP\n      sync: true\n      steps:\n        - id: sendOTP\n          handler: auth.sendOTP\n    - method: validateOTP\n      sync: true\n      steps:\n        - id: validateOTP\n          handler: auth.validateOTP\n        - id: lookupUser\n          handler: auth.lookupUser\n        - id: generateToken\n          handler: auth.generateToken\n        # we'll set response from other steps so we don't need handlers for this steps, just for flow\n        - id: invalidOTP\n        - id: notRegistered\n      flow:\n        - id: goToInvalidOTP\n          direction:\n            - validateOTP\n            - invalidOTP\n        - id: goToValidOTP\n          direction:\n            - validateOTP\n            - lookupUser\n        - id: goToUserExists\n          direction:\n            - lookupUser\n            - generateToken\n        - id: goToUserNotExists\n          direction:\n            - lookupUser\n            - notRegistered\n...\n")),(0,r.kt)("p",null,"Final template should look like this.\n",(0,r.kt)("img",{alt:"Final Teamplte",src:n(4417).Z})),(0,r.kt)("h3",{id:"--sendotp"},"- sendOTP"),(0,r.kt)("p",null,"In this method, we need to create a otp code and send it to user's phone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function generateRandomOTP(): string {\n    const otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000\n    return otp.toString()\n}\n\nexport async function sendOTP(data: Data): Promise<StepResponse> {\n    const otp = generateRandomOTP() // random 4 digit number between 1000-9999\n\n    // get user's phone number from client\n    const { phoneNumber } = data.method.request\n\n    // use rbs actions to send otp sms\n    const { errors } = await sdk.rbsAction({\n        name: 'rbs.sms.request.SEND',\n        data: { type: 'otp', phoneNumber, message: `Do\u011frulama kodunuz: ${otp}` },\n    })\n\n    if (errors.length === 0) {\n        // we need to store otp code to access from validateOTP method\n        data.state.private.otp = otp\n    } else {\n        data.method.response = {\n            statusCode: 500,\n            body: { errors },\n        }\n    }\n\n    return data\n}\n")),(0,r.kt)("h3",{id:"--validateotp"},"- validateOTP"),(0,r.kt)("p",null,"After sending otp code to user's phone, we check if user enters rigth code to signin. We can check private state for that."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"validateOTP")," method consist of several steps. We check if otp is valid, and we check if user registered, if so we can create custom token to signin or inform user to register."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// first flow\nexport async function validateOTP(data: Data): Promise<StepResponse> {\n    if (data.state.private.otp === data.method.request.otp) {\n        data.nextFlowId = 'goToValidOTP'\n    } else {\n        data.nextFlowId = 'goToInvalidOTP'\n        data.method.response = {\n            statusCode: 403,\n            body: { error: 'invalidOTP' },\n        }\n    }\n\n    return data\n}\n\n// goToValidOTP flow\nexport async function lookupUser(data: Data): Promise<StepResponse> {\n    const { success: userFound } = await sdk.getLookUpKey({\n        key: {\n            name: 'phoneNumber',\n            value: data.method.request.phoneNumber,\n        },\n    })\n\n    if (userFound) {\n        data.nextFlowId = 'goToUserExists'\n    } else {\n        data.nextFlowId = 'goToUserNotExists'\n    }\n\n    return data\n}\n\n// goToUserExists flow\nexport async function generateToken(data: Data): Promise<StepResponse> {\n    const { response } = await sdk.rbsAction({\n        name: 'rbs.core.request.GENERATE_CUSTOM_TOKEN',\n        data: { userId: data.method.context.userId, roleNames: ['enduser'] },\n    })\n\n    data.method.response = {\n        statusCode: 200,\n        body: {\n            customToken: response.customToken,\n        },\n    }\n\n    return data\n}\n\n//\n")))}m.isMDXComponent=!0},4417:function(e,t,n){t.Z=n.p+"assets/images/otp-template-1-15a747eec27a44dff454823ee2afffae.png"}}]);