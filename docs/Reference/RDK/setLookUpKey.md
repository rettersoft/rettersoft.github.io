---
sidebar_label: 'setLookUpKey'
sidebar_position: 3
---

# setLookUpKey
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