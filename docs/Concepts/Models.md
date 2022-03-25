---
sidebar_label: 'Models'
sidebar_position: 4
---

# Models
Models are useful for getting inputs or sending outputs with prevalidated data. With modeled data we know what we send from responses and what we get from requests with typescripts powerfull autocomplition.

While defining models, we specify the type of each variable and if a variable needs to be initialized.

If a variable is in the `required` array, this means that variable needs to be initialized in typescript code.

### User Model Example
```json
{
  "type": "object",
  "required": [
    "userFullName",
    "email",
    "userId",
  ],
  "properties": {
    "userId": {
      "type": "string"
    },
    "userRank": {
      "type": "string"
    },
    "userFullName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "lastEnteredPlatform":{
      "enum": [
        "WEB",
        "IOS",
        "ANDROID"
      ]
    }
  }
}
```

**For More Advanced Use Cases Visit:**

[Json Schema](https://json-schema.org/)

---
