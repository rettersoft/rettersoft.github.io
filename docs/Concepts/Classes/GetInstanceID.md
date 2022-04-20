---
id: GetInstanceID
sidebar_label: 'Get Instance ID'
sidebar_position: 4
---

# Get Instance ID

### Instance id
Every instance will have a unique id if `getInstanceId` of class is not implemented. If you implement `getInstanceId` you can create an instance with an instanceId you choose. For example you can create an instance with instanceId same as the caller users userId. See example below:


Template file:

```typescript
init: index.init
getState: index.getState
getInstanceId: index.getInstanceId
```

getInstanceId implementation:

```typescript
export async function getInstanceId(data: Data): Promise<string> {
    return data.context.userId
}
```