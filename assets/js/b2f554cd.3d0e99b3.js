"use strict";(self.webpackChunkrbs_dev_docs=self.webpackChunkrbs_dev_docs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"an-object-oriented-cloud","metadata":{"permalink":"/blog/an-object-oriented-cloud","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-07-an-object-oriented-cloud.md","source":"@site/blog/2021-12-07-an-object-oriented-cloud.md","title":"rtbs.io - An object oriented cloud","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-07T00:00:00.000Z","formattedDate":"December 7, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 1/3","permalink":"/blog/todo-app-1-3"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"todo-app-1-3","metadata":{"permalink":"/blog/todo-app-1-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-1-3.md","source":"@site/blog/2021-12-06-todo-app-1-3.md","title":"Todo App with CloudObjects \u2014 Part 1/3","description":"In this article we will create a simple todo class and implement adding an item to it.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":0.19,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"rtbs.io - An object oriented cloud","permalink":"/blog/an-object-oriented-cloud"},"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 2/3","permalink":"/blog/todo-app-2-3"}},"content":"### In this article we will create a simple todo class and implement adding an item to it.\\n\\nLet\u2019s write a basic todo app. First let\u2019s create an account in rtbs.io and create a class in your account."},{"id":"todo-app-2-3","metadata":{"permalink":"/blog/todo-app-2-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-2-3.md","source":"@site/blog/2021-12-06-todo-app-2-3.md","title":"Todo App with CloudObjects \u2014 Part 2/3","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 1/3","permalink":"/blog/todo-app-1-3"},"nextItem":{"title":"Todo App with CloudObjects \u2014 Part 3/3","permalink":"/blog/todo-app-3-3"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"todo-app-3-3","metadata":{"permalink":"/blog/todo-app-3-3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-06-todo-app-3-3.md","source":"@site/blog/2021-12-06-todo-app-3-3.md","title":"Todo App with CloudObjects \u2014 Part 3/3","description":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[{"label":"rtbs","permalink":"/blog/tags/rtbs"},{"label":"todo app","permalink":"/blog/tags/todo-app"},{"label":"object oriented cloud","permalink":"/blog/tags/object-oriented-cloud"},{"label":"cloud","permalink":"/blog/tags/cloud"}],"readingTime":2.385,"truncated":true,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 2/3","permalink":"/blog/todo-app-2-3"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers. \\n\\nHowever they allow you write stateless functions only. Data and functions are separated like in the early days of computing. rtbs.io is an object oriented approach to serverless cloud.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI will give AWS specific examples in this article.\\n\\nMost common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.\\n\\n\\n### Problem\\n\\nBig promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:\\n\\n**Authentication** \u2014 Yes there are services like Cognito, but they are not really easy to use.\\n\\n**Client-Server-Communication** \u2014 Rest api\u2019s are great but they are not as easy as realtime syncing of client/server data.\\n\\n**Sorting of client requests** \u2014 Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.\\nOrganization of a project in terms of source code\\n\\n### Solution\\n\\nRBS solves these three major problems by implementing following:\\n\\n**Authentication** \u2014 is built into objects.\\n**Client-Server-Communication** \u2014 Objects have internal state and this state is streamed to clients in realtime.\\n**Sorting** \u2014 Any method request to an object is queued and handled in FIFO manner.\\n\\n### Example: A simple wallet\\nThe following template.yml defines two methods in a class.\\n\\n```yml\\npreAuthorizer: index.preAuthorizer\\nauthorizer: index.authorizer\\ninit: index.init\\ngetState: index.getState\\ngetInstanceId: index.getInstanceId\\nmethods:\\n    - method: addMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: addMoney\\n            \\n    - method: spendMoney\\n      tag: test\\n      sync: true\\n      steps:\\n          - id: spendMoney\\n            handler: index.spendMoneyHandler\\n          - id: success\\n          - id: insufficientFunds\\n            handler: index.handler\\n      flow:\\n          - direction:\\n                - spendMoney\\n                - success\\n          - id: gotoInsufficientFunds\\n            direction:\\n                - spendMoney\\n                - insufficientFunds\\n\\n\\n```\\n\\nThis class definition template yml file creates the following diagram.\\n\\n![rtbs screenshot](http://s.rtbs.io/img/1*Nz9RJzQD_s1dN7d66n6Zsw.png)\\n\\nWe have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.\\n\\n```typescript\\nthis.rbs = RBS.getInstance({\\n  projectId: \'{RBS_PROJECT_ID}\'\\n})\\n```\\n\\nLet\u2019s get an instance of our WalletB class. We also immediately start listening to its state updates.\\n\\n```typescript\\nconst co = await this.rbs?.getCloudObject({\\n  classId: \'WalletB\'\\n})\\n\\nco.state.public?.subscribe((publicState: any) => {\\n  console.log(\'publicState\', publicState)\\n})\\n```\\n\\nNow it\u2019s time to call some methods on our wallet instance\\n\\n```typescript\\nawait co.call({\\n  method: \'spendMoney\',\\n  payload: {\\n    amount: 10\\n  }\\n})\\n```\\n\\nThat\u2019s it for now. We will dive deeper into cloud object mechanics in upcoming articles."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"Baran Baygan","title":"Solution Architect","url":"https://github.com/baranbaygan","imageURL":"https://miro.medium.com/fit/c/262/262/1*QxTUo9SYcZQj8EomGLqOPA.jpeg","key":"baran"}],"prevItem":{"title":"Todo App with CloudObjects \u2014 Part 3/3","permalink":"/blog/todo-app-3-3"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);