---
id: InitMethod
sidebar_label: 'Init'
sidebar_position: 5
---

# Init Method

When you request a new instance, `init` method gets called. You can set the initial state for this instance here. Let's see an example:

```typescript
export async function init(data: Data): Promise<Data> {
    data.state.public = {
        foo: 'bar'
    }
    return data
}
```