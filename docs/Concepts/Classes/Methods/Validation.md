---
id: Validation
sidebar_label: 'Validation'
sidebar_position: 3
---

# Validation

Rio uses [JSON Schema](https://json-schema.org/) for validation.

Validation is optional but most of the time neccessary. You can use models for method input validation. [See here](../../../Models) for more about models.

### Example Model

Let's say we have a model called `SayHelloInput`

```typescript
{
  "type": "object",
  "required": [
    "firstName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  }
}
```

### Post Body Validation

To validate a post body you need to define validation in `inputModel` field like this:

```typescript
init: index.init
getState: index.getState
methods:
  - method: sayHello
    inputModel: SayHelloInput
    tag: test
    invocationType: IMMEDIATE
    handler: index.sayHello
```

### Query String Validation

To validate data sent in querystrings you need to define validation in `queryStringInputModel` field like this:

```typescript
init: index.init
getState: index.getState
methods:
  - method: sayHello
    queryStringInputModel: SayHelloInput
    tag: test
    invocationType: IMMEDIATE
    handler: index.sayHello
```

### Failed Validations

Rio uses [AJV](https://ajv.js.org/) for model validation. If a validation fails Rio returnes a response with status code: `400`.

```typescript
{
  "code": "VALIDATION",
  "message": "Model validation has been failed.",
  "issues": [
    {
      "instancePath": "",
      "schemaPath": "#/required",
      "keyword": "required",
      "params": {
        "missingProperty": "firstName"
      },
      "message": "must have required property 'firstName'"
    }
  ]
}
```