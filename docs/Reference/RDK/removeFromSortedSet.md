---
sidebar_label: 'removeFromSortedSet'
sidebar_position: 11
---

# removeFromSortedSet
Removes a value from sorted set. Expects setName{string} and sortKey{string}

```typescript
let result = await rdk.removeFromSortedSet({
        setName: "setName",
        sortKey: "sortkey"
    })
```
# Response
```json
{
    "success": true
}
```