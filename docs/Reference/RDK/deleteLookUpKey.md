---
sidebar_label: 'deleteLookUpKey'
sidebar_position: 4
---

# deleteLookUpKey
Expects key name{string} and value{string}, returns success

```typescript
const result = await rdk.deleteLookUpKey({ key: { name: 'email', value: email } });
  
```
# Response
```json
{ 
    "success": true
}
```