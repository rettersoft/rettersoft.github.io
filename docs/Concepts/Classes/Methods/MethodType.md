---
id: MethodType
sidebar_label: 'Method Types'
sidebar_position: 2
---

# Method Type and Concurrency

There are two important parameters defining how a method works.

1. `type`: Defines what data method can access. (State Access Type)
2. `invocationType`: Defined when to execute incoming requests.

## Type (State Access Type)

Rio has 3 different types of methods. You can specify method type like below:

```typescript
methods:
  - method: sayHello
    type: READ | WRITE | STATIC
    handler: index.sayHello
```

### READ

READ methods can read state but they cannot change it. They run at concurrency N. You can call them in parallel. 

### WRITE

WRITE methods can read and also change state. They always run at concurrency 1. There is no chance that any WRITE method can end up in a race condition and over write each others state updates. 

If you set invocationType: IMMEDIATE on a WRITE method then your request takes precedence in the queue and gets executed before every other message. Let's say you have two methods like below:

```typescript
methods:
  - method: foo
    invocationType: IMMEDIATE
    type: WRITE
    handler: index.foo
  - method: bar
    invocationType: QUEUED
    type: WRITE
    handler: index.bar
```

You can send messages to `bar` and they get queued. They will be sent to your method one after another. While those messages are being processed you can call method `foo`. One of two things can happen.

1. Your message to `foo` gets processed right away. It gets precedence before every other message left in the FIFO queue.
2. Your message to `foo` gets rejected with a `statusCode:570`. This means there was a method in process so Rio rejected the request to this instance. Client should retry this message with an exponential backoff algorithm. 
   
> Rio Client SDK's are already retrying these 570 status codes by default. However you can change that behaviour in SDK configuration.

### STATIC

You can call STATIC methods without instanceId. 

`https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/CALL/{CLASS_NAME}/{METHOD_NAME}`

They don't have state. They are running in concurrency N. They are good for stateless API methods. You can still read and write to resources like files and memory instead of instance state.

### Method Types Table

| Type        | State       | Concurrency | External Resources (Files etc) |
| ----------- | ----------- | ----------- | ----------- |
| READ      | Yes | N | YES |
| WRITE   | YES | 1 | YES |
| STATIC   | No | N | YES |

## Method Invocation Type

Methods have different invocation types. Invocation type dictates wheter or not the request will be queued or handled immediately.

### QUEUED

QUEUED methods don't receive requests directly. These requests get queued in instance level FIFO queue and sent to methods one by one. As a side effect QUEUED methods don't return a response.

```typescript
methods:
  - method: foo
    invocationType: QUEUED
    type: WRITE
    handler: index.foo
```

### IMMEDIATE

IMMEDIATE methods requests are directly sent to method. You can return a response to the caller by setting `data.response` field.

```typescript
methods:
  - method: foo
    invocationType: IMMEDIATE
    type: WRITE
    handler: index.foo
```

If you have a IMMEDIATE & WRITE method then there is a chance you might get an status code error 570 from Rio. This means currenly this instance is busy processing another WRITE method. If you receive status code 570 then you should retry the request. Rio SDK's by default have this retrying mechanism. You can overwrite retry values. By default SDK's retry 5 times with exponential backoff.

:::caution
Important thing is, if you receive 570 from an instance, Rio pauses QUEUE processing by that instance for 3 seconds giving the caller to get in between messages by next try. So if the caller receives 570 and retries after 500 ms there is a good chance of being able to process that request, assuming on going method execution will be finished under 500 ms.
:::

### Diagram

![Method Invocation Diagram](https://static.rtbs.io/images/method-invocation.png)
