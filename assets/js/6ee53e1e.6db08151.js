"use strict";(self.webpackChunkrio_doc=self.webpackChunkrio_doc||[]).push([[4019],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"Models",sidebar_label:"Models",sidebar_position:2},s="Models",d={unversionedId:"Developer Console/Project Detail Screen/Models",id:"Developer Console/Project Detail Screen/Models",title:"Models",description:"Models are mentioned in the Concepts Model in detail. In this page,",source:"@site/docs/Developer Console/Project Detail Screen/Models.mdx",sourceDirName:"Developer Console/Project Detail Screen",slug:"/Developer Console/Project Detail Screen/Models",permalink:"/docs/Developer Console/Project Detail Screen/Models",editUrl:"https://github.com/rettersoft/rettersoft.github.io/blob/v2/docs/Developer Console/Project Detail Screen/Models.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Models",sidebar_label:"Models",sidebar_position:2},sidebar:"DeveloperConsoleSideBar",previous:{title:"Log Viewer",permalink:"/docs/Developer Console/Project Detail Screen/Log Viewer"},next:{title:"Instance List",permalink:"/docs/Developer Console/Project Detail Screen/Class Editor/Instance List"}},c={},p=[{value:"Creating Models",id:"creating-models",level:2},{value:"Using Models",id:"using-models",level:2}],u={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"models"},"Models"),(0,a.kt)("p",null,"Models are mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Concepts/Models/"},"Concepts Model")," in detail. In this page,\nwe are going to look at how to create and use our models in ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer Console"),"."),(0,a.kt)("h2",{id:"creating-models"},"Creating Models"),(0,a.kt)("p",null,"In your project's panel navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Models")," at the left. For creating a new model, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Model")," in the upcoming page\nthan define and name the model. That's all! We have created a model."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"DefiningModels",src:n(1512).Z,width:"2858",height:"916"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Example of a model"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"title=exampleModel",title:"exampleModel"},'{\n  "properties": {\n    "lastName": {\n      "type": "string",\n      "description": "The person\'s last name."\n    },\n    "firstName": {\n      "type": "string",\n      "description": "The person\'s first name."\n    },\n    "age": {\n      "type": "integer",\n      "minimum": 0,\n      "description": "Age in years which must be equal to or greater than zero."\n    }\n  },\n  "type": "object"\n}\n'))),(0,a.kt)("h2",{id:"using-models"},"Using Models"),(0,a.kt)("p",null,"To use the models, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Classes")," panel and find the class you want to use your model on and open it's ",(0,a.kt)("inlineCode",{parentName:"p"},"template.yml")," file.\nThan in the methods, search for the method you want to add your model. You can use your model as\n",(0,a.kt)("inlineCode",{parentName:"p"},"inputModel")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"outputModel"),". Decide which do you want to use your model as, than add your model name."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Like Below."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=ProjectName/Classes/Test/template.yml",title:"ProjectName/Classes/Test/template.yml"},"preAuthorizer: index.preAuthorizer\ninit: index.init\ngetState: index.getState\nmethods:\n  - method: sayHello # The method we have added our model to\n    tag: test\n    sync: true\n    inputModel: SayHelloInput # Our model added as a input model\n    steps:\n      - id: default\n        handler: index.sayHello\n"))),(0,a.kt)("p",null,"That's it you can make use of your model now."))}m.isMDXComponent=!0},1512:function(e,t,n){t.Z=n.p+"assets/images/DefiningModels-857b1a2084a15d2bc250ee24e22a0722.png"}}]);