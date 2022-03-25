---
sidebar_label: 'Classes'
sidebar_position: 3
---

# Classes

Classes are building blocks of a project. 

Classes are defined by template yaml files. An example file can be:


//IMAGE

Just like object oriented programming on a computer, classes can be instantiated and instances are created. Each instance must have a unique instance id.

There are some special methods you can define on a class:

- init
- getState
- getInstanceId

### init

When a new instance is created __init__ method is called. You can return an initial state for this instance.

```typescript
export async function init(data: Data): Promise<InitResponse> {
    return { state: { public: { message: 'Hello World' } } }
}
```

### getState

This method can be used to get state object when a client asks for state. You can return part of the state or even a modified version of the state to a caller by changing this function. 

```typescript
export async function getState(data: Data): Promise<Response> {
    return { statusCode: 200, body: data.state }
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