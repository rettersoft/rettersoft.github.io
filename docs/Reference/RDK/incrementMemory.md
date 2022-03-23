---
sidebar_label: 'incrementMemory'
sidebar_position: 8
---

# incrementMemory
Excepts key{string} and value{number} in the form below. If current value is number, adds this value to it.

```typescript
    const result= await rdk.incrementMemory({ key: 'key',
      value: 5 });
```
#### Response
```json
{
    "success": true
}
```