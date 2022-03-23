---
sidebar_label: 'Methods'
sidebar_position: 7
---

# Methods

In your class template you can add methods to your class.

Each step can have a handle method. Let's define sayHello handler in our index.ts.

```yaml
preAuthorizer: index.preAuthorizer
init: index.init
getState: index.getState

methods:

    - method: sayHello
      tag: test
      sync: true
      steps:
          - id: default
            handler: index.sayHello
```

### Steps

Each method can have multiple steps. You can define a different handler function for each step. Steps are optional. You can define a method with one step only like the one above. However if you like you can define a method like below:

```yaml
preAuthorizer: auth.preAuthorizer
init: index.init
getState: index.getState
dependencies: ['user']
methods:
    - method: signup
      sync: true
      steps:
          - id: lookupUser
            handler: auth.lookupUser
          - id: userAlreadyExists
          - id: createUser
            handler: auth.createUser
          - id: generateToken
            handler: auth.generateToken
          - id: sendEmailToCallCenter
            handler: auth.sendEmailToCallCenter
          - id: invalidData
      flow:
          - direction:
            - lookupUser
            - createUser
          - direction:
            - createUser
            - sendEmailToCallCenter
          - direction:
            - sendEmailToCallCenter
            - generateToken
          - id: goToUserAlreadyExists
            direction:
            - lookupUser
            - userAlreadyExists
          - id: goToInvalidData
            direction:
            - createUser
            - invalidData
```

This definition creates following method:

//IMAGE

You might want to add steps for:

- reusability: You can re-use some handler methods
- visualization: Even non developers can look at your method diagram and understand how it works. Also previous calls are logged in the system and you can visualize the flow of a method in UI.

### Flow control

Let's consider we have a method with multiple steps.


Below is our class definition template file:

```yaml
preAuthorizer: index.preAuthorizer
init: index.init
getState: index.getState
methods:

    - method: methodWithSteps
      tag: test
      sync: true
      steps:
          - id: step1
            handler: step1
          - id: step2
          - id: step3
      flow:
          - direction:
              - step1
              - step2
          - id: gotoStep3
            direction:
              - step1
              - step3
```

We can either go to step3 or step2 from step1. Let's see how we do that:

```typescript
export async function step1(data: Data): Promise<StepResponse> {
    
    // You can check some state here and conditionally set nextFlowId
    if(data.state.private.someField === true) {
        data.nextFlowId = "gotoStep3"    
    }
    
    return data
}
```

If you don't specify a __nextFlowId__, first direction will be selected. Which is step2 in this template.

## Concurrency & FIFO

One of the most important features of class methods is that by default concurrency is 1. Calls made to your method gets ordered and executed one by one and exactly once guaranteed. This is a very important and crucial part of development with Rio.

Every time a method is running you are handed a data object and you are responsible of returning it. Basically what you do is calculating the next state of this instance. As long as the concurrency is one there is no risk of a race condition. So it is safe to alter the state any way you want and also check for state and calculate your next move.

Let's say there are two methods on a wallet class.

//IMAGE

Everytime these are called they are ordered:

//IMAGE