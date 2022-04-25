---
id: MethodType
sidebar_label: 'Method Type and Concurrency'
sidebar_position: 2
---

# Method Type and Concurrency

Rio has 3 different types of methods. You can specify method type like below:

```typescript
methods:
  - method: sayHello
    sync: true
    type: READ | WRITE | STATIC
    handler: index.sayHello
```

### READ methods

READ methods can read state but they cannot change it. They run at concurrency N. You can call them in parallel. 

### WRITE methods

WRITE methods can read and also change state. They always run at concurrency 1. There is no chance that any WRITE method can end up in a race condition and over write each others state updates. 

If you set sync:true on a WRITE method then your request takes precedence in the queue and gets executed before every other message. Let's say you have two methods like below:

```typescript
methods:
  - method: foo
    sync: true
    type: WRITE
    handler: index.foo
  - method: bar
    sync: false
    type: WRITE
    handler: index.bar
```

You can send messages to `bar` and they get queued. They will be sent to your method one after another. While those messages are being processed you can call method `foo`. One of two things can happen.

1. Your message to `foo` gets processed right away. It gets precedence before every other message left in the FIFO queue.
2. Your message to `foo` gets rejected with a `statusCode:570`. This means there was a method in process so Rio rejected a sync:true request to this instance. Client should retry this message with an exponential backoff algorithm. 
   
> Rio Client SDK's are already retrying these 570 status codes by default. However you can change that behaviour in SDK configuration.

### STATIC methods

You can call STATIC methods without instanceId. 

`https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/CALL/{CLASS_NAME}/{METHOD_NAME}`

They don't have state. They are running in concurrency N. They are good for stateless API methods. You can still read and write to resources like files and memory instead of instance state.

### Method Types Table

| Type        | State       | Concurrency | External Resources (Files etc) |
| ----------- | ----------- | ----------- | ----------- |
| READ      | Yes | N | YES |
| WRITE   | YES | 1 | YES |
| STATIC   | No | N | YES |