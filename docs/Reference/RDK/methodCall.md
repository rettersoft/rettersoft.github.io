---
sidebar_label: 'methodCall'
sidebar_position: 16
---

# methodCall
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