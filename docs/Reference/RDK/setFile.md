---
sidebar_label: 'setFile'
sidebar_position: 14
---

# setFile
setFile is used for saving a with a filename. File can be reached later on with getFile function. Expects filename {string} and body {any}

```typescript
const result = await rdk.setFile({
            filename: "fileName",
            body: "file",
        })
```
# Response
```json 
{
    "success": true
}
```