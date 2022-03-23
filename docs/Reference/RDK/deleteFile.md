---
sidebar_label: 'deleteFile'
sidebar_position: 15
---

# deleteFile
Deletes a saved file. Expects filename{string}

```typescript
const file = await rdk.deleteFile({
    filename: "fileName"
})
```

# Response
```json 
{
    "success": true
}
```