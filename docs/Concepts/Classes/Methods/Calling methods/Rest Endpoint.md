---
id: Rest Endpoint
sidebar_label: 'Rest Endpoint'
sidebar_position: 2
---

# Rest Endpoint

Every call made to instance methods are actually calls made to REST endpoints. When you call methods in TEST screen you can actually find all endpoints in browsers network inspection window.

### Getting an instance

URL: `https://{PROJECT_ID}.api.retter.io/{PROJECT}}/INSTANCE/{CLASS_NAME}`

### Calling methods

URL: `https://{PROJECT_ID}.api.retter.io/{PROJECT_ID}/CALL/{CLASS_NAME}/{METHOD_NAME}/{INSTANCE_ID}`

:::info
You can either GET or POST to these url's.
:::
