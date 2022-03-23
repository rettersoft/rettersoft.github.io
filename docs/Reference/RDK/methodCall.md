---
sidebar_label: 'methodCall'
sidebar_position: 16
---

# methodCall
A method within the same project can be called using the methodCall function. classId{string}, instanceId{string} and methodName{string} values have to be specified. body{any} can be given too. 
**Notice** If the method you're calling methodCall function and the method you called are both queued methods, your request will time-out.

```typescript
const result = await rdk.methodCall({
            classId: 'classId',
            instanceId: 'instanceId',
            methodName: 'methodName',
            body:{
              message: "foo"
            }
        });

```
# Response
```json
{
    "statusCode": 200,
    "body": "body",
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json"
    }
}
```