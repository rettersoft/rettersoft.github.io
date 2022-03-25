---
sidebar_label: 'Files'
sidebar_position: 12
---
# Files

Classes can save files to disk.

```typescript
export async function saveFile(data: Data): Promise<StepResponse> {
    
    await rdk.setFile({
        filename: "testFile",
        body: data.request.body
    })

    return data
}
```

You can fetch the file with following code:

```typescript
export async function getFile(data: Data): Promise<StepResponse> {
    const fileResult = await rdk.getFile({
        filename: "testFile",
    })
    if(fileResult.success) {
        data.response = {
            statusCode: 200,
            body: fileResult.data
        }
    } else {
        data.response = {
            statusCode: 400
        }
    }
    return data
}
```

With rtbs rest API you can fetch the file using a URL:

```https://{{ProjectId}}.api.retter.io/CALL/{{ClassName}}/{{MethodName}}/{{InstanceName}}```

For example a file url could look something like:

https://6eedd7ca16be4ae8982451fdfdba7e15.api.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA

Notice that we have used the same method __getFile__ to retrieve the file.

### cdn

You can also use CDN caching for your files changing the url __.api.__ to __.cdn.__ like:

https://6eedd7ca16be4ae8982451fdfdba7e15.cdn.retter.io/CALL/MyClass/getFile/01FPTHPRHTJN8A1EE4DEKTYNAA