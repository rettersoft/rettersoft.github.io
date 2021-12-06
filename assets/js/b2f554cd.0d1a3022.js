"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"an-object-oriented-cloud","metadata":{"permalink":"/blog/an-object-oriented-cloud","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-07-an-object-oriented-cloud.md","source":"@site/blog/2021-12-07-an-object-oriented-cloud.md","title":"An object oriented cloud","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-07T00:00:00.000Z","formattedDate":"December 7, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"nextItem":{"title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 2/3","permalink":"/blog/cloudobject-a-simple-user-with-auth-part-2-3"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"cloudobject-a-simple-user-with-auth-part-2-3","metadata":{"permalink":"/blog/cloudobject-a-simple-user-with-auth-part-2-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-cloudobject-a-simple-user-with*auth-part-2-3.md","source":"@site/blog/2021-12-06-cloudobject-a-simple-user-with*auth-part-2-3.md","title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 2/3","description":"In the last part we have implemented a signup method. Now we will add a method for signin in. Let\u2019s change our template as follows:","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"Serverless","permalink":"/blog/tags/serverless"},{"label":"Rtbs","permalink":"/blog/tags/rtbs"},{"label":"Rbs","permalink":"/blog/tags/rbs"},{"label":"Cloudobjects","permalink":"/blog/tags/cloudobjects"}],"readingTime":1.055,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"An object oriented cloud","permalink":"/blog/an-object-oriented-cloud"},"nextItem":{"title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3","permalink":"/blog/cloudobject-a-simple-user-with-auth-part-1-3"}},"content":"In the last part we have implemented a signup method. Now we will add a method for signin in. Let\u2019s change our template as follows:\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nSo our class diagram looks like this:\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*wx68mhOaeNxx397UAMd_Hw.png)\\n\\nWe already have our generateToken function implemented. That will stay the same. Let\u2019s implement the rest; validateCredentials and invalidCredentials\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*KggpuTwzIz4Ekeizidw8Ow.png)\\n\\nIf you don\u2019t define a nextFlowId the next flow direction without any id will be executed. So validateCredentials will lead to generateToken\\n\\nOf course credential validation is not going to be like this. You probably should bcrypt the password when saving it and compare bcrypted versions. But for sake of simplicity let\u2019s just compare clear text passwords.\\n\\nInvalid credentials step updates response object and sets statusCode to 403.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*rrTk-wM1FgA2f6xEJ-T41Q.png)\\n\\nOtherwise generateToken is called and a token will be returned to the client.\\n\\nIn the next part we will implement the preAuthorizer and authorizer functions.\\n\\nThanks."},{"id":"cloudobject-a-simple-user-with-auth-part-1-3","metadata":{"permalink":"/blog/cloudobject-a-simple-user-with-auth-part-1-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-cloudobject-a-simple-user-with-auth-part-1-3.md","source":"@site/blog/2021-12-06-cloudobject-a-simple-user-with-auth-part-1-3.md","title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3","description":"Let\u2019s create a new class DemoUser.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"Serverless","permalink":"/blog/tags/serverless"},{"label":"Rtbs","permalink":"/blog/tags/rtbs"},{"label":"Rbs","permalink":"/blog/tags/rbs"},{"label":"Cloudobjects","permalink":"/blog/tags/cloudobjects"}],"readingTime":1.935,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 2/3","permalink":"/blog/cloudobject-a-simple-user-with-auth-part-2-3"},"nextItem":{"title":"rbs-cloud-objects","permalink":"/blog/2021/12/06/rbs-cloud-objects"}},"content":"Let\u2019s create a new class DemoUser.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*VyrA6eP2VmQTZ4WKL3aUzQ.png)\\n\\nLet\u2019s add a new file called \u201cauth.ts\u201d. We will implement authentication related functions in this file.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*hXFJjgjd29Uz7QXuo7ShBA.png)\\n\\nNow let\u2019s start writing our lookupUser function:\\n\\n```typescript\\nimport CloudObjectsOperator, { Data, StepResponse } from \'./CloudObjects\'\\n\\nconst sdk = new CloudObjectsOperator()\\n\\nexport async function lookupUser(data: Data): Promise<StepResponse> {\\n    const { success:userFound } = await sdk.getLookUpKey({ key: { name: \'email\', value: data.method.request.email } })\\n\\n    if(userFound) {\\n        data.method.response = {\\n            statusCode: 403, body: { message: \\"Email is taken\\" }\\n        }\\n        return data\\n    }\\n\\n    return data\\n}\\n```\\n\\nOur request will contain email, so we will use sdk.getLookupKey to check for another instance which might have the same email. Okay we are returning an error but let\u2019s make it more visual in our method. Implement a flow and a second step.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*03-6XHfe6UHJQHuOZzN2DQ.png)\\n\\nWhy do we add a second step? We don\u2019t have to add it. We can do everything in one step only. But if we separate different logics into different steps we can make it more visual and anybody looking at an execution later will be able to examine what happened very quickly.\\n\\nNow add another step to create this user.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*bCig2aoebOoToF1WkXbgwA.png)\\n\\nHow do we tell the method to go to emailAlreadyTaken step? We use data.nextFlowId field. Like so:\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*0PY4PPVBDHTjXnQ0fM8kdg.png)\\n\\nWe can also move some code to another function:\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*WbwvtZYqdt7n0L4uZZAESw.png)\\n\\nWe have 3 functions. Now let\u2019s see how we create a user.\\n\\n```typescript\\nexport async function createUser(data: Data): Promise<StepResponse> {\\n\\n    const { email, name, password } = data.method.request\\n\\n    await sdk.setLookUpKey({\\n        key: {\\n            name: \'email\',\\n            value: email\\n        }\\n    })\\n\\n    data.state = {\\n        ...data.state,\\n        public: { userId: data.context.instanceId },\\n        private: {\\n            email,\\n            name,\\n            password\\n        }\\n    }\\n    return data\\n}\\n```\\n\\nWe first set email as a lookup value to this instance. Now let\u2019s add another step to generate a token. This token will be used by the client to sign in to rtbs.\\n\\n```typescript\\nexport async function generateToken(data: Data): Promise<StepResponse> {\\n\\n    const actionResponse = await sdk.rbsAction({\\n        name: \'rbs.core.request.GENERATE_CUSTOM_TOKEN\',\\n        data: { userId: data.method.context.userId, roleNames: [\'enduser\'] }\\n    })\\n\\n    data.method.response = {\\n        statusCode: 200,\\n        body: {\\n            customToken: actionResponse.response.customToken\\n        }\\n    }\\n\\n    return data\\n}\\n```\\n\\nSo we need to update our template.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*zUUfBaVQ9jPg5CShKZZxQA.png)\\n\\nAt this point we have a working signup method. In the next article we will sign in with this user.\\n\\nThanks."},{"id":"rbs-cloud-objects","metadata":{"permalink":"/blog/2021/12/06/rbs-cloud-objects","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-rbs-cloud-objects.md","source":"@site/blog/2021-12-06-rbs-cloud-objects.md","title":"rbs-cloud-objects","description":"slug: state-of-cloud-object","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[],"readingTime":2.4,"truncated":false,"authors":[],"prevItem":{"title":"CloudObject \u2014 A Simple User with Auth \u2014 Part 1/3","permalink":"/blog/cloudobject-a-simple-user-with-auth-part-1-3"},"nextItem":{"title":"State of a CloudObject","permalink":"/blog/state-of-cloud-object"}},"content":"slug: state-of-cloud-object\\ntitle: Rbs Cloud Objects\\nauthors: baran\\ntags: [cloudObjects, AWS, Lambda, RBS]\\n---\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nCloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.\\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing.\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\nAuthentication \u2014 Yes there are services like Cognito, but they are not really easy to use.\\nClient-Server-Communication \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\nSorting of client requests \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\n\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\nAuthentication \u2014 is built into objects.\\n\\nClient-Server-Communication \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n\\nSorting\u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\n\\nThe following template.yml defines two methods in a class.\\n\\n\'\'\'yml\\n\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\'\'\'\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*yau56m9fnonWs8KpK1wasw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n\'\'\'typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n\'\'\'\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n\'\'\'typescipt\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n\'\'\'\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n\'\'\'typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n\'\'\'\\n\\nThat\u2019s it for now. We will dive deeper into cloud objects mechanics in upcoming articles."},{"id":"state-of-cloud-object","metadata":{"permalink":"/blog/state-of-cloud-object","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-state-of-cloud-object.md","source":"@site/blog/2021-12-06-state-of-cloud-object.md","title":"State of a CloudObject","description":"Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"state","permalink":"/blog/tags/state"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":1.605,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"rbs-cloud-objects","permalink":"/blog/2021/12/06/rbs-cloud-objects"},"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 1/3","permalink":"/blog/todo-app-1-3"}},"content":"Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.\\nState object gets streamed to client sdk\u2019s in real time.\\nState consists of four parts:\\n\\n```json\\n{\\n  \\"public\\": {},\\n  \\"private\\": {},\\n  \\"user\\": {\\n    \\"userId1\\": { }\\n  },\\n  \\"role\\": {\\n    \\"roleName1\\": { }\\n  }\\n}\\n```\\n\\n### Public\\nPublic state can be seen by every client connected.\\n\\n### Private\\nPrivate state doesn\u2019t get streamed to any client. Only server side code (objects methods) can see and edit this state.\\n\\n### User\\nUser object has userId\u2019s in it. Each userId node contains the data specific for that userId. Only that user is allowed to see that data.\\n\\n![rtbs screenshot](https://miro.medium.com/max/856/1*z2hPPoc3pmG-RBl_LbM-1g.png)\\n\\n### Role\\nRole state can be seen by anybody who has that role.\\n\\n![rtbs screenshot](https://miro.medium.com/max/960/1*XS1vUwFlu43E2DxRwQit8Q.png)\\n\\n### What do you do with state?\\nIn your server side code you update the state object any way you want. Clients connected to this object will receive updates according to their permission level. It easy straight forward.\\n\\n### getState function\\nClients can either get the state via REST api or they can subscribe to state via sdk.\\n\\nIf you want to get your state via REST api you can define a delegate function in your template file and customize what part of state you will return to anybody making the call. Below I defined a getState function in index.ts.\\n\\n![rtbs screenshot](https://miro.medium.com/max/1400/1*_m62mrSZOkuoEopDDOse6Q.png)\\n\\nBelow is my getState function which returns my objects private state to any caller. Of course this is pretty unsecure. Don\u2019t do this at home :)\\n\\n```typescript\\nexport async function getState(data: Data): Promise<Response> {\\n    return { \\n        statusCode: 200, \\n        body: {\\n            ...data.state.private,\\n        }\\n    }\\n}\\n```\\n\\nThanks."},{"id":"todo-app-1-3","metadata":{"permalink":"/blog/todo-app-1-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-1-3.md","source":"@site/blog/2021-12-06-todo-app-1-3.md","title":"Todo App with CloudObjects \u2014 Part 1/3","description":"In this article we will create a simple todo class and implement adding an item to it.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":0.19,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"State of a CloudObject","permalink":"/blog/state-of-cloud-object"},"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 2/3","permalink":"/blog/todo-app-2-3"}},"content":"### In this article we will create a simple todo class and implement adding an item to it.\\n\\nLet\u2019s write a basic todo app. First let\u2019s create an account in rtbs.io and create a class in your account."},{"id":"todo-app-2-3","metadata":{"permalink":"/blog/todo-app-2-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-2-3.md","source":"@site/blog/2021-12-06-todo-app-2-3.md","title":"Todo App with CloudObjects \u2014 Part 2/3","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 1/3","permalink":"/blog/todo-app-1-3"},"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 3/3","permalink":"/blog/todo-app-3-3"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"todo-app-3-3","metadata":{"permalink":"/blog/todo-app-3-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-3-3.md","source":"@site/blog/2021-12-06-todo-app-3-3.md","title":"Todo App with CloudObjects \u2014 Part 3/3","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 2/3","permalink":"/blog/todo-app-2-3"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 3/3","permalink":"/blog/todo-app-3-3"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);