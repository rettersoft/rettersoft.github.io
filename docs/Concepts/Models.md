---
id: Models
sidebar_label: 'Models'
sidebar_position: 6
---

# Models
Models are useful for getting inputs or sending outputs with prevalidated data. With modeled data we know what we send from responses and what we get from requests with typescripts powerfull autocomplition.

While defining models, we specify the type of each variable and if a variable needs to be initialized.

If a variable is in the `required` array, this means that variable needs to be initialized in typescript code.

### User Model Example
```json
{
  "type": "object",
  "required": [
    "userFullName",
    "email",
    "userId",
  ],
  "properties": {
    "userId": {
      "type": "string"
    },
    "userRank": {
      "type": "string"
    },
    "userFullName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "lastEnteredPlatform":{
      "enum": [
        "WEB",
        "IOS",
        "ANDROID"
      ]
    }
  }
}
```

---
**For More Advanced Use Cases Visit:**

[Json Schema](https://json-schema.org/)

---


## Using a Model

### Creating Models
First we create the model we are going to use in the Models.

```json
// CreateTodoInput.json
{
  "type": "object",
  "required": [
    "task"
  ],
  "properties": {
    "task": {
      "type": "string"
    }
  }
}
```

```json
// CreateTodoOutput.json
{
  "type": "object",
  "required": [
    "task"
  ],
  "properties": {
    "task": {
      "type": "string"
    }
  }
}
```

### Adding Models to Methods
After we created the model (in this example CreateTodoInput and CreateTodoOutput), we should add the model to the method file which we are going to use. Add the models to your methods in template.yml file.   

```yaml
# template.yml
...rest
methods:
    - method: createTodo
      sync: true
      inputModel: CreateTodoInput     # CreateTodoInput model added
      outputModel: CreateTodoOutput   # CreateTodoOutput model added
      handler: index.createTodo
```

### Using the Created Models
After we add the models to our method, we can use autocomplete to use our models in our method.

```ts
// index.ts
import { CreateTodoInput, CreateTodoOutput } from './rio'

export async function createTodo(data: Data<CreateTodoInput, CreateTodoOutput>): Promise<StepResponse> {
    const { task } = data.request.body // autocompleted

    data.response = {
        statusCode: 200,
        body: {
            task, // autocompleted
        }
    }

    return data
}

```