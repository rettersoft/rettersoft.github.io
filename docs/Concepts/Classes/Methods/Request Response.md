---
id: Request Response
sidebar_label: 'Request Response'
sidebar_position: 6
---

# Request & Response

### Data object

All Rio methods receive `data` object and we expect you to return the same object from the method. Data object has `request` and `response` objects on it.

### Request

Any data sent to a method will be accessible on `data.request` object. It's interface is:

```typescript
export interface Request<T = any> {
    httpMethod: string;
    body?: T;
    headers: KeyValueString;
    queryStringParams: KeyValueString;
}
```

You can use incoming data like this:

```typescript
export async function someMethod(data: Data): Promise<Data> {

    // Read body
    let foo = data.request.body.foo

    // Read headers
    let headerValue = data.request.headers['some-header']

    // Read http method
    let httpMethod = data.request.httpMethod

    // Read query string params
    let fooFromQueryString = data.request.queryStringParams.foo

    return data
}
```

### Response

Use `data.response` to customize the response the caller will receive. 

```typescript
export async function someMethod(data: Data): Promise<Data> {

    data.response = {
        statusCode: 200,
        body: 'OK'
    }

    return data
}
```

To return an object instead of a string you can:

```typescript
export async function someMethod(data: Data): Promise<Data> {

    data.response = {
        // You can change status code, body and headers
        statusCode: 200,
        body: { foo: "bar" },
        headers: { 'some-header': 'some-value' }
    }

    return data
}
```