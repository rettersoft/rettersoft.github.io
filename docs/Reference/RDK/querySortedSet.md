---
sidebar_label: 'querySortedSet'
sidebar_position: 12
---

# querySortedSet
Returns the given number of values from sorted set. Expects setName{string} and limit{number,optional}

```typescript
    const result = await rdk.querySortedSet({
        setName: "setName",
        limit: 5
        }
    })
```
# Response
```json
{
    "success": true,
    "data":{

    } 
}
```