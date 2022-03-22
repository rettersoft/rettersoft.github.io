---
sidebar_label: 'setMemory'
sidebar_position: 5
---

# setMemory
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