---
sidebar_label: 'generateCustomToken'
sidebar_position: 1
---

# generateCustomToken
Expects identity and userId values. Returns a token

# Usecase

```typescript
 const tokenResult = await rdk.generateCustomToken({
        identity: {string},
        userId: {string}
})
```
# Response
```json
{
"success": true,      
"data": {      
    "customToken": "customTokenString"      
}  

```