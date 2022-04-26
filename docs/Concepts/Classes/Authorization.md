---
id: Authorization
sidebar_label: 'Authorization'
sidebar_position: 7
---

# Authorization

### Authentication vs Authorization

Authentication is the process to identify who the caller is.

Authorization is the process where you know who the caller is but decide if this caller should be allowed to make this call.

### Template

In Rio you can define an `authorizer` method to each class.

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

### Authorizer Implementation

```typescript
export async function authorizer(data: Data): Promise<Response> {
    return { statusCode: 200 };
}
```

:::info
You cannot read instance `state` in authorizer method. This is to limit access to underlying state object if the request is unauthorized. This way Rio tries to limit DB read access.
:::


