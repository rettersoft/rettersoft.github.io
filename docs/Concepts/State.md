---
sidebar_label: 'State'
sidebar_position: 6
---

# State


Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.
State object gets streamed to client sdk’s in real time.
State consists of four parts:

```json
{
  "public": {},
  "private": {},
  "user": {
    "userId1": { }
  },
  "role": {
    "roleName1": { }
  }
}
```

### Public
Public state can be seen by every client connected.

### Private
Private state doesn’t get streamed to any client. Only server side code (objects methods) can see and edit this state.

### User
User object has userId’s in it. Each userId node contains the data specific for that userId. Only that user is allowed to see that data.

```typescript
{
    "userId": {
        "userId1": {}
    }
}
```

### Role
Role state can be seen by anybody who has that role.

```typescript
{
    "roleId": {
        "roleName1": {}
    }
}
```

### What do you do with state?
In your server side code you update the state object any way you want. Clients connected to this object will receive updates according to their permission level. It easy straight forward.

### getState function
Clients can either get the state via REST api or they can subscribe to state via sdk.

If you want to get your state via REST api you can define a delegate function in your template file and customize what part of state you will return to anybody making the call. Below I defined a getState function in index.ts.

```yaml
getState: index.getState
```

Below is my getState function which returns my objects private state to any caller. Of course this is pretty unsecure. Don’t do this at home :)

```typescript
export async function getState(data: Data): Promise<Response> {
    return { 
        statusCode: 200, 
        body: {
            ...data.state.private,
        }
    }
}
```