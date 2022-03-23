---
sidebar_label: 'getFile'
sidebar_position: 13
---

# getFile
Gets the file with given file name. Expects filename{string}
```typescript
const file = await rdk.getFile({
    filename: "fileName"
})
```
# Response
```json
{
    "data": "file",
    "success": true
}
```