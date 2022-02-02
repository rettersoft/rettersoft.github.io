---
slug: cloudobject-a-simple-user-with-auth-part-1-3
title: CloudObject — A Simple User with Auth — Part 1/3
authors: baran
tags: [Serverless, Rtbs, Rbs, Cloudobjects]
---

Let’s create a new class DemoUser.

![rtbs screenshot](https://miro.medium.com/max/1400/1*VyrA6eP2VmQTZ4WKL3aUzQ.png)

Let’s add a new file called “auth.ts”. We will implement authentication related functions in this file.

![rtbs screenshot](https://miro.medium.com/max/1400/1*hXFJjgjd29Uz7QXuo7ShBA.png)

Now let’s start writing our lookupUser function:

```typescript
import CloudObjectsOperator, { Data, StepResponse } from './CloudObjects'

const sdk = new CloudObjectsOperator()

export async function lookupUser(data: Data): Promise<StepResponse> {
    const { success:userFound } = await rdk.getLookUpKey({ key: { name: 'email', value: data.request.email } })

    if(userFound) {
        data.response = {
            statusCode: 403, body: { message: "Email is taken" }
        }
        return data
    }

    return data
}
```

Our request will contain email, so we will use sdk.getLookupKey to check for another instance which might have the same email. Okay we are returning an error but let’s make it more visual in our method. Implement a flow and a second step.

![rtbs screenshot](https://miro.medium.com/max/1400/1*03-6XHfe6UHJQHuOZzN2DQ.png)

Why do we add a second step? We don’t have to add it. We can do everything in one step only. But if we separate different logics into different steps we can make it more visual and anybody looking at an execution later will be able to examine what happened very quickly.

Now add another step to create this user.

![rtbs screenshot](https://miro.medium.com/max/1400/1*bCig2aoebOoToF1WkXbgwA.png)

How do we tell the method to go to emailAlreadyTaken step? We use data.nextFlowId field. Like so:

![rtbs screenshot](https://miro.medium.com/max/1400/1*0PY4PPVBDHTjXnQ0fM8kdg.png)

We can also move some code to another function:

![rtbs screenshot](https://miro.medium.com/max/1400/1*WbwvtZYqdt7n0L4uZZAESw.png)

We have 3 functions. Now let’s see how we create a user.

```typescript
export async function createUser(data: Data): Promise<StepResponse> {

    const { email, name, password } = data.request

    await rdk.setLookUpKey({
        key: {
            name: 'email',
            value: email
        }
    })

    data.state = {
        ...data.state,
        public: { userId: data.context.instanceId },
        private: {
            email,
            name,
            password
        }
    }
    return data
}
```

We first set email as a lookup value to this instance. Now let’s add another step to generate a token. This token will be used by the client to sign in to rtbs.

```typescript
export async function generateToken(data: Data): Promise<StepResponse> {

    const actionResponse = await rdk.rbsAction({
        name: 'rbs.core.request.GENERATE_CUSTOM_TOKEN',
        data: { userId: data.method.context.userId, roleNames: ['enduser'] }
    })

    data.response = {
        statusCode: 200,
        body: {
            customToken: actionResponse.response.customToken
        }
    }

    return data
}
```

So we need to update our template.

![rtbs screenshot](https://miro.medium.com/max/1400/1*zUUfBaVQ9jPg5CShKZZxQA.png)

At this point we have a working signup method. In the next article we will sign in with this user.

Thanks.