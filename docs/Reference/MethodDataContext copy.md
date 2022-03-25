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
    httpMethod: string                      // * GET, POST, OPTIONS etc.
    body?: T                                // * Content received as the request.
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
    statusCode: number                      // * HTTP request codes. e.g 200 for success.
    body?:                                  // * Actual content that will be returned as the response.
    headers?: { [key: string]: string },    // * Response headers could be specified here.
    isBase64Encoded?: boolean               // * If a file is returned in the response, it should be put in 
                                            // the body with base64 format rather than binary with this value being true. 
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
    requestId: string                       // * Every method call has a unique requestId. 
    projectId: string                       // * projectId that method belongs to.
    action: string                          // * Action method called with. 
    identity: string                        // * Identity of the methods caller. Like the rolename of the user. Extracted from token provided
    headers?: { [key: string]: any }
    classId: string                         // * classId this method belongs to.
    instanceId?: string                     // * instanceId of this request received from.
    methodName: string                      // * Name of the method. 
    refererClassId?: string         
    refererInstanceId?: string
    refererMethodName?: string
    refererUserId?: string
    refererIdentity?: string
    claims?: { [key: string]: any }         // * Attributes claimed by method caller. Could be email, role,  etc.
    isAnonymous?: boolean                   // * True if no token is provided with the request
    culture?: string                        // * Language option if provided
    platform?: string                       // * Platform information of the request, if provided
    userId?: string                         // * userId of the method caller
    sourceIP: string                        // * IP of the request received from
    sessionId?: string                      // * The requests send in a certain period of time by the same user have the same 
                                            // sessionId. Managed on the server side. New sessionId value is created after certain period of 
                                            // time has passed between two request. Could be used to trace request a user send in a session. 
    clientOs?: string                       // * Operating System of the client that request is sent from
    pathParameters?: {                      // * Path Parameters provided in the Api Call url
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
    public?: { [key: string]: any }                         // * Object that public data can be stored in
    private?: { [key: string]: any }                        // * Data that is private to that instance can be stored here. 
                                                            // Can not be shared publicly by default. It is in developers initiative to share to any specified user or role. 
    user?: { [userId: string]: { [key: string]: any } }     // * User specific data can be stored here with userId as key value.
    role?: { [identity: string]: { [key: string]: any } }   // * Role specific data can be stored here with role as key value. 
}
```
