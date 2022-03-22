---
sidebar_label: 'getFile'
sidebar_position: 13
---

# getFile
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