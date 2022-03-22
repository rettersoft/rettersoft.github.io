---
sidebar_label: 'deleteMemory'
sidebar_position: 7
---

# deleteMemory
Body içerisinde `msisdn` ve `profile` bekler.

```json
{
    "msisdn": "{string}",
    "profile": {
       "firstName": "{string}",
       "lastName": "{string}",
       "phoneNumber": "{string}",
       "email": "{string}",
       "district": "{string}",
       "province": "{string}"
   }
}
```
#### Response
```json
{
    "message": "success"
}
```