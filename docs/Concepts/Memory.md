---
sidebar_label: 'Memory'
sidebar_position: 10
---


# Global Memory

Think of rtbs as one big computer. There are object instances all over. Some instances can write to a global shared memory for other instances to consume. 

For example a __Product__ class can write its metadata to its state like this:

```typescript
export async function update(data: Data): Promise<StepResponse> {
    data.state.private = data.request.body

    return data
}
```

If another object would like to read this products state then it will have to fetch its instance and read its state. To make things faster let's write my metadata to memory too.

```typescript
export async function update(data: Data): Promise<StepResponse> {
    data.state.private = data.request.body

    await rdk.setGlobalMemory({
        key: "product#" + data.context.instanceId,
        value: data.state.private
    })

    return data
}
```

Another object can easily read this product metadata from memory.

```typescript

export async function getProductMetadata(data: Data): Promise<StepResponse> {

    let memoryResult = await rdk.getGlobalMemory({
        key: "product#" + data.request.body.productId
    })

    if (memoryResult.success) {
        data.response = {
            statusCode: 200,
            body: memoryResult.data
        }
    } else {
        data.response = {
            statusCode: 404
        }
    }

    return data
}
```

### Performance tip

To make things even faster let's make this method readonly so it doesn't deal with FIFO logic. 

```yaml
    - method: getProductMetadata
      tag: test
      sync: true
      readonly: true
      steps:
          - id: default
            handler: index.getProductMetadata
```
