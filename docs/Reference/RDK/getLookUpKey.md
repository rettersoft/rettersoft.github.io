---
sidebar_label: 'getLookUpKey'
sidebar_position: 2
---

# getLookUpKey
Excepts key name{string} and value{string}, returns related instanceId

```typescript
const result = await rdk.getLookUpKey({ 
    key: { 
        name: 'email', 
        value: email 
    } 
});
  
```
# Response
```json
{ 
    "success": true, 
    "data": { 
        "instanceId": "instanceId"
        } 
}
```