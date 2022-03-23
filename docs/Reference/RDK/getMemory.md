---
sidebar_label: 'getMemory'
sidebar_position: 6
---

# getMemory
Can be used to get a value that is set to memory before. Expects key{string} only

```typescript
    const result= await rdk.getMemory({ key: 'key' });
```
# Response
```json
 {  "success": true, 
    "data": { 
        "value": "value" 
    } 
}
```