---
id: Template
sidebar_label: 'Template'
sidebar_position: 2
---

# Template

Rio Classes are defined in template files. A template looks like this:

```typescript
init: index.init
getState: index.getState
authorizer: index.authorizer
methods:
  - method: sayHello
    inputModel: SayHelloInput
    tag: test
    sync: true
    handler: index.sayHello
```

## Special methods

There are some special methods you can define on a class:

- init
- getState
- getInstanceId

### init

When a new instance is created __init__ method is called. You can return an initial state for this instance.

```typescript
export async function init(data: Data): Promise<Data> {
    data.state.public = { foo: "bar" }
    return data
}
```

### authorizer

Every call made to your class calls the authorizer method defined in your template file. You can break execution at this point. An example authorizer could be like:

```typescript
export async function authorizer(data: Data): Promise<Response> {
    if(data.context.identity === 'none') 
        return { statusCode: 401 }
    return { statusCode: 200 }
}
```

### getState

This method can be used to get state object when a client asks for state. You can return part of the state or even a modified version of the state to a caller by changing this function. 

```typescript
export async function getState(data: Data): Promise<Response> {
    return { statusCode: 200, body: data.state };
}
```

For example you can calculate and add some extra fields to the state object

```typescript
export async function getState(data: Data): Promise<Response> {
    return { statusCode: 200, body: {
      ...data.state,
      someCalculatedField: data.state.public.something + 1
    }}
}
```

or you can just return some part of the state depending on the role of the requester.

```typescript
export async function getState(data: Data): Promise<Response> {
    if(data.context.identity === 'superuser')
      // Return all state
      return { statusCode: 200, body: data.state }
    else 
      // Return just public part
      return { statusCode: 200, body: data.state.public }
}
```

### getInstanceId

This is optional. If not defined each instance will have a unique id. However you might want to change this behaviour. Let's say you like to have a singleton instance.

```typescript
export async function getInstanceId(data: Data): Promise<string> {
    return "MyInstanceId"
}
```


## Methods

You can as many methods as you like in your template file.

```typescript
init: index.init
getState: index.getState
authorizer: index.authorizer
methods:
  - method: sayHello
    inputModel: SayHelloInput
    tag: test
    sync: true
    handler: index.sayHello
  - method: sayByeBye
    inputModel: SayByeByeInput
    tag: test
    sync: true
    handler: index.sayByeBye
```

## Method Fields

### method:string

Name of method. 

### inputModel:string

Model file for post body.

### queryStringInputModel:string

Model file for values sent as query strings.

### tag:string

A string just for informational purpose.

### sync:bool

Defines if a method is returning a response upon request. If sync is false, then all requests are immediately accepted and sent to instance execution queue. See method type and concurrency page for details.