---
slug: cloudobject-a-simple-user-with-auth-part-2-3
title: CloudObject — A Simple User with Auth — Part 2/3
authors: baran
tags: [Serverless, Rtbs, Rbs, Cloudobjects]
---

In the last part we have implemented a signup method. Now we will add a method for signin in. Let’s change our template as follows:

```yml
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


```

So our class diagram looks like this:

![rtbs screenshot](https://miro.medium.com/max/1400/1*wx68mhOaeNxx397UAMd_Hw.png)

We already have our generateToken function implemented. That will stay the same. Let’s implement the rest; validateCredentials and invalidCredentials

[rtbs screenshot](https://miro.medium.com/max/1400/1*KggpuTwzIz4Ekeizidw8Ow.png)

If you don’t define a nextFlowId the next flow direction without any id will be executed. So validateCredentials will lead to generateToken

Of course credential validation is not going to be like this. You probably should bcrypt the password when saving it and compare bcrypted versions. But for sake of simplicity let’s just compare clear text passwords.

Invalid credentials step updates response object and sets statusCode to 403.

[rtbs screenshot](https://miro.medium.com/max/1400/1*rrTk-wM1FgA2f6xEJ-T41Q.png)

Otherwise generateToken is called and a token will be returned to the client.

In the next part we will implement the preAuthorizer and authorizer functions.

Thanks.
