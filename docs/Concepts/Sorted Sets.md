---
sidebar_label: 'Sorted Sets'
sidebar_position: 9
---


# Sorted Sets

An instance has a state to store its data. But there are some cases where a state is not the perfect place to store your data. 

Think of a chat application. A chat room instance cannot hold all messages since the beginning of the time. At some point some messages need to be stored somewhere else. 

Sorted sets can be used for these kind of use cases. Sorted sets are basically a key value storage with a part and sort key. First get a sdk instance.

```typescript
import SDK, { Data, InitResponse, Response, StepResponse } from './CloudObjects'

const sdk = new SDK()
```

Now we can start writing to a sorted set like this:

```typescript
export async function addChatMessage(data: Data): Promise<StepResponse> {

    await rdk.addToSortedSet({
        setName: "messages",
        sortKey: Date.now().toString(),
        data: {
            "senderId": data.method.context.userId,
            "message": data.request.body.message
        }
    })

    data.response = { statusCode: 200, body: { success: true }}

    return data
}
```
When a new user opens this chat room she needs to be able to fetch latest messages like:

```typescript
export async function getMessages(data: Data): Promise<StepResponse> {

    let queryResult = await rdk.querySortedSet({
        setName: "messages",
        limit: 50
    })

    data.response = {
        statusCode: 200,
        body: {
            messages: queryResult.data
        }
    }

    return data
}
```
