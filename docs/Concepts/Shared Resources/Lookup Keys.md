---
id: Lookup Keys
sidebar_label: 'Lookup Keys'
sidebar_position: 2
---

# Lookup Keys

Instances have unique id's. However sometimes we need an easier method to find our instances instead of instance id's. 

## Usage of Lookup Keys

For example think of a __User__ class. Users have user id's but they might also have emails. Let's create a updateProfile method and mark this instance with users email.

```typescript
export async function updateEmail(data: Data): Promise<StepResponse> {

    await rdk.setLookUpKey({
        key: { name: "email", value: "jane@mail.com" }
    })

    return data
}
```

Let's change it a little bit to make it look a bit more realistic. Maybe we have sent a code to this users email and she is validating it like below:

```typescript
export async function updateEmail(data: Data): Promise<StepResponse> {

    if(data.request.body.code !== data.state.private.emailValidationCode) {
        data.response = {statusCode: 403}
        return data
    }

    await rdk.setLookUpKey({
        key: { name: "email", value: "jane@mail.com" }
    })

    return data
}
```

Now let's see how to find this instance without knowing its instance id.

```typescript
export async function findUserByEmail(data: Data): Promise<StepResponse> {
    
    const lookupResult = await rdk.getLookUpKey({
        key: {
            name: "email", value: "jane@mail.com"
        }
    })

    if(lookupResult.success) {
        data.response = {
            statusCode: 200,
            body: lookupResult.data
        }
    }

    return data
}
```

```lookupResult.data``` contains:

```typescript
{
  "instanceId": "01FPT7Z2W67MYZ3ZAKBDCPZ4AJ"
}
```