---
sidebar_label: 'pipeline and send'
sidebar_position: 20
---

# pipeline
You can create pipeline to stack your request in order to send them at the sametime, like a batch. 

```typescript
const pipeline = rdk.pipeline() 

pipeline.getFile({filename: "fileName1" }).getFile({ filename: "fileName2" }).getState({classId:'classId', instanceId: 'instanceId'})

```

# send
After filling the pipeline with requests, send function can be used to send them together.
 Response

```typescript
const files = (await pipeline.send()).getFile
const state = (await pipeline.send()).getState

```