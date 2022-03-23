---
sidebar_label: 'addToSortedSet'
sidebar_position: 9
---

# addToSortedSet
You can write to a sorted set using this method. Expects setName {string}, sortKey{string} and data{object}
```typescript
    const result = await rdk.addToSortedSet({
        setName: "setName",
        sortKey: "sortKey",
        data: {
            "message": "foo"
        }
    })
```
# Response
```json
{
    "success": true
}
```