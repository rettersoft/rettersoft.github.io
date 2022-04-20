---
id: Instances
sidebar_label: 'Instances'
sidebar_position: 3
---

# Instances

In object oriented programming an instance is usually a block of data in memory. It can be modified using class methods. In Rio every instance of a class has an instance which is stored in Rio storage. You don't have to think about saving the state. State will be handed to every method call. Any change you make to the state object will be saved by Rio.

### Getting an instance

You can create instances of your classes. Each instance stores a different state object on Rio. An instance can be created in developer console, or from one of the client SDK's. However actually each of these just call this end point:

https://{PROJECT_ID}}.api.retter.io/{PROJECT_ID}/INSTANCE/{CLASS_NAME}

Every time you call this a new instance is generated and its instance id is returned in response. For example:

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

Everytime you get a new instance a unique instanceId is being generated. Each instance has a unique id. 
[See here](../GetInstanceID) how to change this behaviour.



