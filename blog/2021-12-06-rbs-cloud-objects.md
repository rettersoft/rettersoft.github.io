slug: state-of-cloud-object
title: Rbs Cloud Objects
authors: baran
tags: [cloudObjects, AWS, Lambda, RBS]
---

![rtbs screenshot](https://miro.medium.com/max/1400/1*Nz9RJzQD_s1dN7d66n6Zsw.png)

Cloud providers like AWS, GCP, Azure are next generation machines for writing programs to. Instead of writing containerized apps you can write serverless apps for these new big super computers.

However they allow you write stateless functions only. Data and functions are separated like in the early days of computing.

I will give AWS specific examples in this article.

Most common approach is to write a function and tie that to a data store like DynamoDB. You can call that function via Api Gateway. From your client application you can call your api via a rest api.


### Problem
Big promise of serverless is that developers only have to write business logic. And it really helps. However they still need to deal with following issues:

Authentication — Yes there are services like Cognito, but they are not really easy to use.
Client-Server-Communication — Rest api’s are great but they are not as easy as realtime syncing of client/server data.

Sorting of client requests — Biggest problem is that somehow you need to sort requests coming from clients in object level. Think of a wallet app, transactions need to be fed into a SQS Fifo queue or maybe locked in DynamoDB row level. It becomes even more difficult if you need a request/response model and also need to sort these requests.

Organization of a project in terms of source code

### Solution

RBS solves these three major problems by implementing following:

Authentication — is built into objects.

Client-Server-Communication — Objects have internal state and this state is streamed to clients in realtime.

Sorting— Any method request to an object is queued and handled in FIFO manner.

### Example: A simple wallet

The following template.yml defines two methods in a class.

'''yml

preAuthorizer: index.preAuthorizer
authorizer: index.authorizer
init: index.init
getState: index.getState
getInstanceId: index.getInstanceId
methods:
    - method: addMoney
      tag: test
      sync: true
      steps:
          - id: addMoney
            
    - method: spendMoney
      tag: test
      sync: true
      steps:
          - id: spendMoney
            handler: index.spendMoneyHandler
          - id: success
          - id: insufficientFunds
            handler: index.handler
      flow:
          - direction:
                - spendMoney
                - success
          - id: gotoInsufficientFunds
            direction:
                - spendMoney
                - insufficientFunds
'''

This class definition template yml file creates the following diagram.

![rtbs screenshot](https://miro.medium.com/max/1400/1*yau56m9fnonWs8KpK1wasw.png)

We have two methods we can call from our clients. To call this object first you need to create an RBS SDK instance.

'''typescript
this.rbs = RBS.getInstance({
  projectId: '{RBS_PROJECT_ID}'
})
'''

Let’s get an instance of our WalletB class. We also immediately start listening to its state updates.

'''typescipt
const co = await this.rbs?.getCloudObject({
  classId: 'WalletB'
})

co.state.public?.subscribe((publicState: any) => {
  console.log('publicState', publicState)
})
'''

Now it’s time to call some methods on our wallet instance

'''typescript
await co.call({
  method: 'spendMoney',
  payload: {
    amount: 10
  }
})
'''

That’s it for now. We will dive deeper into cloud objects mechanics in upcoming articles.



