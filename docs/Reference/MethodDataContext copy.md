---
id: Method Data Context
sidebar_label: 'Method Data Context'
sidebar_position: 1
---

# Method Data Context
Data object used in every method call has some useful attributes. Mainly they are; Request, Response, State and Context.

## Request
Contains information about the request method has received. Has the following form:

### Request Model
```typescript
export interface Request<T = any> {
    httpMethod: string  // GET, POST, OPTIONS etc.
    body?: T            // Content received as the request.
    headers: { [key: string]: string }
    queryStringParams: { [key: string]: string }
}
```
### Request Example
```typescript
if(data.request.httpMethod==='POST'){
    const userMessage=data.request.body.userMessage
}
```
## Response
Using the response, anyting can be returned in the body. 

### Response Model

```typescript
export interface Response<T = any> {
    statusCode: number   // HTTP request codes. e.g 200 for success.
    body?: T            // Actual content that will be returned as the response.
    headers?: { [key: string]: string }, // Response headers could be specified here.
    isBase64Encoded?: boolean
}
```
### Response Example

```typescript
if(calculationResult==='correct'){
    data.response={
        statusCode: 200, body: 'Success!'
        }
}
return data;
```
## Context
Context has the metadata values of data.

### Context Model
```typescript
export interface Context {
    requestId: string               // Every method call has a unique requestId. 
    projectId: string               // projectId that method belongs to.
    action: string                  // Action method called with. 
    identity: string                // Identity of the methods caller. Like the rolename of the user. Extracted from token provided
    serviceId?: string              // If method is called via a service, null otherwise
    headers?: { [key: string]: any }
    classId: string                 // classId this method belongs to.
    instanceId?: string             // instanceId of this request received from.
    methodName: string              // Name of the method. 
    refererClassId?: string
    refererInstanceId?: string
    refererMethodName?: string
    refererUserId?: string
    refererIdentity?: string
    claims?: { [key: string]: any } // Attributes claimed by method caller. Could be email, role,  etc.
    isAnonymous?: boolean
    culture?: string                // language option if provided
    platform?: string               // platform information of the request, if provided
    userId?: string                 // userId of the method caller
    sourceIP: string                // IP of the request received from
    sessionId?: string
    clientOs?: string               // operationSystem of the client that created the request
    targetServiceIds?: string[]
    relatedUserId?: string
    pathParameters?: {
        path: string
        rule?: string
        params?: { [key: string]: string }
    }
}
```

## State
State represents the state of that instance. Contrary to public, private object can not be accessed from other instances. 

### State Model
```typescript
export interface State {
    public?: { [key: string]: any } // Object that public data can be stored in
    private?: { [key: string]: any } // Data that is private to that instance can be stored here
    user?: { [userId: string]: { [key: string]: any } } 
    role?: { [identity: string]: { [key: string]: any } }
}
```
