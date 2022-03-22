---
id: Template
sidebar_label: 'Template'
sidebar_position: 0
---

# Template 
Template.yml file contains all the fundamental configuration of your class. It can be in the form of;

```yml
authorizer: index.authorizer
init: index.init
getState: index.getState
getInstanceId: index.getInstanceId
methods:
  - method: apiHandler
    tag: apiHandler
    sync: false
    handler: index.apiHandler
  - method: square
    tag: square
    sync: true
    handler: index.square
  - method: getConfig
    tag: getConfig
    sync: true
    type: READ
    handler: index.getConfig
```
Using the template you can specify some of the parameters via setting a function in a typescript file in you class. In these examples all the functions are stored in index.ts file;

## authorizer
Authorizer is called before every method call for authorization purposes. It is useful with keeping authorization logic seperate from your code. It has to be specified Basic usage could be as in the example;

```typescript
export async function authorizer(data: Data): Promise<Response> {
    if (data.context.identity === 'developer') {
        return {statusCode: 200}
    }
    else return {statusCode: 401}
}
```

## init
Init is used to set the initial configuration of your new instance. You can set your initial state to a certain value, or leave it as it is.

```typescript
export async function init(data: Data): Promise<InitResponse> {
  data.state.private.message = 'Hello World!';
  return data;
}
```

## getState
Getstate can be configured asf how you want your state to be returned. Common usage is as;

```typescript
export async function getState(data: Data): Promise<Response> {
  return {
    statusCode: 200,
    body: data.state,
  };
}
```

## getInstanceId
You can set the formula for your instance id/ids in getInstanceId. You can set for a statical value or a random generated string. The returned value will be your instanceId

```typescript
export async function getInstanceId(data: Data): Promise<string> {
  return 'myInstance'; // Set to static value of myInstance
  //Or
  return data.request.body.projectId // projectId value taken from request/user
}
```

## Methods
Methods are the code blocks that you will implement your business logic with. These methods can have couple settings:

### method
method value is where you set the name of your method

### tag
tag can be the same with the name of the method

### sync

### type

### handler
Handler is the part where you relate the method to a function. 
```typescript
export async function square(data: Data): Promise<Response> {
    let result=data.request.body.firstVariable*data.request.body.secondVariable
    return { statusCode: 200, body: result }
}
```
