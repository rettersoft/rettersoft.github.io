---
sidebar_label: 'getInstance'
sidebar_position: 17
---

# getInstance
If instanceId is provided, getInstance method returns information about that instances methods. If instanceId is not provided then a new instance is created

```typescript
let result = await rdk.getInstance({
            classId: 'classId',
            instanceId: 'instanceId'
            body: {
            }
            })
```
# Response
```json
{
  "statusCode": 200,
  "body": {
    "instanceId": "instanceId",
    "newInstance": true,
    "methods": [
      {
        "name": "test",
        "type": "QUEUED_WRITE",
        "sync": true,
        "tag": "test"
      }
    ],
    "response": {
      "instanceId": "instanceId"
    }
```