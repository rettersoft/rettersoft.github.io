---
id: Instances
sidebar_label: 'Instances'
sidebar_position: 3
---

# Instances

In object oriented programming an instance is usually a block of data in memory. It can be modified using class methods. In Rio every instance of a class has a state which is stored in Rio storage. You don't have to think about saving the state. State will be handed to every method call. Any change you make to the state object will be saved by Rio.

### Getting an instance

You can create instances of your classes. Each instance stores a different state object on Rio. An instance can be created in developer console, or from one of the client SDK's. However actually each of these just call this end point:

https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/INSTANCE/{CLASS_NAME}

Every time you call this a new instance is generated and its instance id and its method list is returned in response. For example:

```typescript
{
    "instanceId": "idnfqpotq",
    "newInstance": true,
    "methods": [
        {
            "name": "drive",
            "type": "WRITE",
            "sync": true,
            "tag": "test",
            "inputModel": "DriveInput"
        }
    ],
    "response": {}
}
```

You can also check if this instance is a newly created one or not by checking `newInstance` field.

Everytime you get a new instance a unique instanceId is being generated. Each instance has a unique id. 
[See here](../Template#getinstanceid) how to change this behaviour.

### Getting an instance from SDK's

Rio class methods can be called from Rio iOS/Android/JS SDK's like below:

Example JS SDK call:

```typescript
const cloudObject = await rio.getCloudObject({
    classId: 'Test'
})
```

This call sends a request to Rio backend and requests a new instance. This way you can create new instances.

### Local instances

Local instances doesn't mean that these don't exist in Rio server side. But sometimes you don't want to create a new instance. You definetely know that there is an instance with this id and you just want to call it's methods. You should use `useLocal` parameter in these cases. 

```typescript
const cloudObject = await rio.getCloudObject({
    classId: 'Test', 
    instanceId: 'someid',
    useLocal: true
})
```

By doing so, you didn't make a request to Rio server side.

:::info
If you set useLocal field to true, you must provide an instanceId.
:::




