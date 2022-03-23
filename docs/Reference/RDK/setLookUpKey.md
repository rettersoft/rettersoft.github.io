---
sidebar_label: 'setLookUpKey'
sidebar_position: 3
---

# setLookUpKey
Excepts key name{string} and value{string}, returns success

```typescript
const result = await rdk.setLookUpKey({ 
    key: { 
        name: 'email', 
        value: email 
    } 
});
  
```
# Response
```json
{ 
    "success": true
}
```