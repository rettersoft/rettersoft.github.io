---
id: From SDKs
sidebar_label: 'From SDKs'
sidebar_position: 1
---

# From SDK's

### Instantiate SDK client

```typescript
import Retter from '@retter/sdk'

const rio = Retter.getInstance({
  projectId: '{PROJECT_ID}',
  region: RetterRegion.euWest1
})
```

### Getting an object instance and calling its method

Rio class methods can be called from Rio iOS/Android/JS SDK's like below:

Example JS SDK call:

```typescript
const cloudObject = await rio.getCloudObject({
    classId: 'Test'
})

await cloudObject.call({
    method: 'sayHello',
    body: {
        firstName: "Baran Baygan"
    }
})

```

### Using Rio generated code

Rio can generate client side code for 3 platforms (iOS/Android/JS).

`Class Editor -> More -> Generate Helper File -> Typescript Client`

Save this file to your project, name it rio.ts and import it like this:

```typescript
import {
  SayHelloInput, // Example model
  RioClasses
} from './rio'
```

Then you can do this:

```typescript
// Pass the rio sdk client you created earlier.
const cloudObject = await RioClasses.Test.getInstance(rio)

// You can find the methods and parameters as types in your typescript code.
await cloudObject.sayHello({
    firstName: "Jane"
})
```

:::info
Every time you make changes to your backend code, you need to re-generate helper code and download it again.
:::



