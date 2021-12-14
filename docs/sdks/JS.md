---
sidebar_position: 1
---

# Javascript

## Initialization

Firstly `rbs-sdk` should be installed with a package manager.

```
npm install @rettersoft/rbs-sdk
or
yarn add @rettersoft/rbs-sdk
```

Clients should initialize with project id. Instances with same project id always be cached.

```ts
const rbs = RBS.getInstance({
    projectId: '{PROJECT_ID}',
})
```

**PROJECT_ID**: Unique id of a project created in RBS Developer Console

## Actions

Any service action can be sent via `send` method.

```ts
let result = await rbs.send({
    action: 'rbs.someservice.request.SOME_ACTION',
    data: {
        key: '{value}',
    },
})
```

## Authentication

RBS uses custom token to authenticate. This custom tokens can be given by an action or a cloud object.

```ts
await rbs.authenticateWithCustomToken('{CUSTOM_TOKEN}')
```

Authentication statuses can be listened. SDK will fire an event that clients can be subscribe on status change.

```ts
rbs.authStatus.subscribe((event: RBSAuthChangedEvent) => {
    //
})
```

Event gives information about current auth status. Clients can check the `authStatus` to determine if they need to show login/register pages or not.

```ts
interface RBSAuthChangedEvent {
    authStatus: RBSAuthStatus
    identity?: string
    uid?: string
    message?: string
}

enum RBSAuthStatus {
    SIGNED_IN = 'SIGNED_IN',
    SIGNED_IN_ANONYM = 'SIGNED_IN_ANONYM',
    SIGNED_OUT = 'SIGNED_OUT',
    AUTH_FAILED = 'AUTH_FAILED',
}
```

## Cloud Objects

SDK will allow to use RBS Cloud Objects. Clients can subscribe realtime state changes, trigger cloud methods, ...

Firstly an cloud object must be initilize with `classId`. Additional config options can be seen in interface below.

```ts
const cloudObject = await rbs.getCloudObject(config: RBSCloudObjectData)

interface RBSCloudObjectData {
    classId: string
    key?: {
        name: string
        value: string
    }
    instanceId?: string
    method?: string
    headers?: {
        [key: string]: string
    }
    querystring?: {
        [key: string]: string
    }
    payload?: {
        [key: string]: any
    }
    httpMethod?: 'get' | 'delete' | 'post' | 'put'
}
```

### State Subscription
Clients can be subscribe to realtime state (public, user and role states) changes. On first subscription, it gives current state.

```ts
cloudObject.state.public.subscribe((state: {[key: string]: any}) => {
    // 
})

cloudObject.state.user.subscribe((state: {[key: string]: any}) => {
    // 
})

cloudObject.state.role.subscribe((state: {[key: string]: any}) => {
    // 
})
```

### Method Calls
Any cloud method can be called via sdk. `method` parameter must be specified. Other parameters can be seen in interface below.
```ts
const response = await cloudObject.call(params: RBSCloudObjectCallData)

interface RBSCloudObjectCallData {
    method: string
    headers?: {
        [key: string]: string
    }
    querystring?: {
        [key: string]: string
    }
    payload?: {
        [key: string]: any
    }
    httpMethod?: 'get' | 'delete' | 'post' | 'put'
}
```

Call method will return a response with `RBSCallResponse` type includes `data`, `status` and `headers`.

### Getting State
Clients also access state via method call.
```ts
const response = await cloudObject.getState(params: RBSCloudObjectCallData)

interface RBSCloudObjectCallData {
    method: string
    headers?: {
        [key: string]: string
    }
    querystring?: {
        [key: string]: string
    }
    payload?: {
        [key: string]: any
    }
    httpMethod?: 'get' | 'delete' | 'post' | 'put'
}
```


Get stae method will return a response with `RBSCallResponse` type includes `data<RBSCloudObjectState>`, `status` and `headers`.

### Available Methods
Cloud objects available methods can be accessed on `methods` array/
```ts
const methods = cloudObject.methods: RBSCloudObjectMethod[]

interface RBSCloudObjectMethod {
    tag?: string
    name: string
    sync?: boolean
    readonly?: boolean
}
```

## How It Works

### Actions
All requests flow through a pipe and token's expire dates will be checked before each request. If the accessToken has expired, it will be renewed with refreshToken. In the first request, if there is no pre-assigned accessToken, the token is assigned anonymously.

### Cloud Objects
When a cloud object instance created, first of all we need an `instanceId`. We can fetch it and its methods with `INSTANCE` request. If client specified the `instanceId` or `key` we need to send it too. Key should be string as `name!value`.  In the response we'll get `instanceId`, `newInstance` and `methods`. Returned methods assigned to instance and can be accessed by client.

Example URL:
```
instanceId: https://{projectId}.test-api.rtbs.io/INSTANCE/{class}/{instanceId}
key:        https://{projectId}.test-api.rtbs.io/INSTANCE/{class}/{name!value}
```
instanceId can be omitted.


After getting `instanceId`, we set firebase listeners for public,user and role states. Clients should subscribe to this listeners via state on the object. eg. `object.state.public.subscribe`. Full example can be seen above.

Firebase document paths:
```
/projects/{projectId}/classes/{classId}/instances/{instanceId}
/projects/{projectId}/classes/{classId}/instances/{instanceId}/roleState/{identity}
/projects/{projectId}/classes/{classId}/instances/{instanceId}/userState/{userId}
```

Clients also call to methods: `call` and `getState`. Each method is a different request to its own url. 

Example URLS:
```
https://{projectId}.test-api.rtbs.io/CALL/{classId}/{method}/{instanceId}
https://{projectId}.test-api.rtbs.io/STATE/{classId}/{instanceId}
```

> Each api request should called with `_token` query string parameter. We use action pipes to handle authentication. Client can send different parameters like `headers`, `querystring`, `httpMethod` and `payload`. These should be inclued the request.

`httpMethod` indicates which method will be used on api call
`headers` and `querystring` self explanatory
`payload` should be sent as a request body.

Client should access `instanceId`, `state`, `call`, `getState`, `isNewInstance` and `methods` props on cloud object instance. With the same `classId` and `instanceId` instances are cached. Caches invalidated after a status change.
