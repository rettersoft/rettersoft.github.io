---
sidebar_label: 'getState'
sidebar_position: 18
---

# getState
getState method returns the specifed instances state value. Together with instanceId, classId should be given

```typescript
      let result = await rdk.getState({
            classId:'classId',
            instanceId: 'instanceId'
            })
```
# Response
```json
{
  "statusCode": 200,
  "body": {
    "public": {
      "message": "Hello World"
    },
    "private": {},
    "user": {},
    "role": {}
  },
  "headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json"
  }
}
```