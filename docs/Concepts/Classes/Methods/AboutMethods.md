---
id: AboutMethods
sidebar_label: 'About Methods'
sidebar_position: 1
---

# About Methods

Each class can define any number of methods. These methods can be used in several ways. You can modify instance state with them or keep state unchanged and just return some data based on state, or you can also don't use state at all and return something else from any other Rio storage like memory or files.

Methods are ways to attach new endpoints to classes. So by creating methods you actually are designing an API you are exposing out to Internet. These methods can be called from SDK's or just by calling their URL's.

Endpoint for a method is like this:

`https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/CALL/{CLASS_NAME}/{METHOD_NAME}/{INSTANCE_ID}`