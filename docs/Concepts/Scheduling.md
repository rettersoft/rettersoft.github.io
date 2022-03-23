---
sidebar_label: 'Scheduling'
sidebar_position: 13
---

# Method Scheduling

You can schedule a method call by setting schedule option like:

```typescript
data.schedule = [{
    after: 5, // seconds
    method: "doSomething" // method name
}]
```

You can conditionally schedule a method call with a delay:

```typescript
export async function doSomething(data: Data): Promise<StepResponse> {
    
    if(data.state.private.counter === undefined) data.state.private.counter = 0

    data.state.private.counter = data.state.private.counter + 1

    if(data.state.private.counter > 3) {
        return data
    }

    data.schedule = [{
        after: 5,
        method: "doSomething"
    }]

    return data
}
```

Above code schedules itself with a 5 seconds delay only if the counter is not above 3.

You can also schedule any method on any class and instance like below:

```typescript
data.schedule = [{
    classId: "SomeOtherClass",
    instanceId: "some_instance_id",
    method: "doSomething",
    after: 5,
    payload: {
        x: 1, y: 2
    }
}]
```