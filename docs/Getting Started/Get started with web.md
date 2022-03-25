---
sidebar_label: 'Get started with web'
sidebar_position: 3
---

# Get Started With Web

Firstly, we need to install Rio JS sdk. Rio SDK's eases you to call methods and allows you to authenticate clients with rio. You can see how to use the sdk on [github repo](https://github.com/rettersoft/retter-js-sdk).  

```bash
npm install @retter/sdk
```

Now, we can initiate sdk with `projectId`. You can find project id from console's home page.

```ts
import Rio from '@retter/sdk'

const rio = Rio.getInstance({
    projectId: '{your-project-id}'
})
```

Previous article, we created Todo class and three methods. We can get the Todo class's cloud object from sdk.

```ts
const todoObject = await rio.getCloudObject({
    classId: 'Todo' // previously created class
})
```

With cloud object, we can access several methods and properties. We can call methods with `call` method, get the current instance with `instanceId`, etc.

To continue with demo, let's call the `createTodo` method with todo item. This methods required `task` field from body.

```ts
await todoObject.call({
    method: 'createTodo',
    body: {
        task: 'Buy tickets for latest Robert Pattinson movie'
    }
})
```

Now, we can fetch todos. On `listTodos` method, we returned an `items` array. We can reach this item from response. 

```ts
const response = await todoObject.call({
    method: 'listTodos'
})

const items = response.body.items
/*
[
    {
        "task": "Buy tickets for latest Robert Pattinson movie",
        "isCompleted": false
    }
]
*/
```

To mark the task as completed, we can call `markTodoAsCompleted` method with `task`.

```ts
await todoObject.call({
    method: 'markTodoAsCompleted',
    body: {
        task: "Buy tickets for latest Robert Pattinson movie"
    }
})
```

If we list todo items now, we can see `isCompleted` field as `true`.

```json
[
    {
        "task": "Buy tickets for latest Robert Pattinson movie",
        "isCompleted": false
    }
]
```

We can also take realtime updates from cloud objects. Because of updating public state (in previous article), we can subscribe the public state. When a new item created or existing one updated, we will be notified. 

```ts
todoObject.state.public.subscribe(state => {
    const items = state.items

    /*
    [
        {
            "task": "Buy tickets for latest Robert Pattinson movie",
            "isCompleted": true
        }
    ]
    */
})
```

That's it. It is simple as that.