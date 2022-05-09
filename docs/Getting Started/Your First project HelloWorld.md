---
id: Your First project HelloWorld
sidebar_label: 'Your First Project: Hello World'
sidebar_position: 3
---

# Your First Project: Hello World

This guide help you to create your first project with Retter Console.

## Creating a project

To create a new project, head to [Rio Console](https://c.retter.io) and log in. After successful login, you can create your first Rio project.

![Greeting Screen](/img/create-new-project-1.png)

Click to `Create New Project` button. Then choose an alias to your first project.

![New Project Screen](/img/create-new-project-2.png)

And, congratulations. You created the first Rio Project. Now on, we can continue to create classes.

## Creating a class

As you know, Rio is an object-oriented cloud provider. We can define our classes and models, create an class instance etc. In this section you will be learn how to create class using Rio Console.

![Project Detail Screen](/img/create-new-project-3.png)

Click the `Create` button and name the class you want to create. After class creation, you'll see the class contents.

A class consist of `template.yml`, `package.json`, and typescript user codes. This tutorial we won't dive into details. You can find detailed explanations on References section.

In `template.yml` file, you can configure how to interact with a class. You can point to methods using file name and method name with dot notation like `fileName.methodName`. File name refers to typescript file and method name refers to function exported on that file.

Additionally, you can use `npm` packages with classes. Just add any package use want to use to dependencies.

### Learn With Demo

For demo purposes let's create a todo app backend. A simple todo app needs 3 methods: list, create, and markAsCompleted. Let's create a `Todo` class and define these methods in template.

```yaml
# template.yml
...rest
methods:
    - method: listTodos
      invocationType: IMMEDIATE
      handler: index.listTodos
    - method: createTodo
      invocationType: IMMEDIATE
      handler: index.createTodo
    - method: markTodoAsCompleted
      invocationType: IMMEDIATE
      handler: index.markTodoAsCompleted
```

Now, we can create corresponding functions.

Rio has first-class typescript support for easing developers life. We'll leverage typescript when creating methods. Each method receives a `data` object and must return a `StepResponse`. You can find out more about this in [Method Data Context Reference](/docs/Reference/Method%20Data%20Context/).

```ts
// index.ts
import { Data, StepResponse } from '@retter/rdk'

// ...rest

export async function init(data: Data): Promise<InitResponse> {
  return { state: { public: { items: [] } }
}

export async function listTodos(data: Data): Promise<StepResponse> {
    return data
}

export async function createTodo(data: Data): Promise<StepResponse> {
    return data
}

export async function markTodoAsCompleted(data: Data): Promise<StepResponse> {
    return data
}
```

Now, we can impletement our logic. Rio methods are statefull. We don't need any database, we can just use simple state. Find out more on [State](/docs/Concepts/State/) docs.

To creating a list item, we need a task. We can get task information from the data's request object.

> To keep things simple, we dont implement all details for todo app.

```ts
export async function createTodo(data: Data): Promise<StepResponse> {
    const { task } = data.request.body

    data.state.public.items.push({
        task,
        isCompleted: false,
    })

    return data
}
```

```ts
export async function markTodoAsCompleted(data: Data): Promise<StepResponse> {
    const { task } = data.request.body

    const item = data.state.public.items.find(item => item.task === task)
    item.isCompleted = true

    return data
}
```

```ts
export async function listTodos(data: Data): Promise<StepResponse> {
    data.response = {
        statusCode: 200,
        body: {
            items: daat.state.public.items,
        },
    }

    return data
}
```

Now, we can implement out methods in [client side](/docs/Getting%20Started/Get%20started%20with%20web/).