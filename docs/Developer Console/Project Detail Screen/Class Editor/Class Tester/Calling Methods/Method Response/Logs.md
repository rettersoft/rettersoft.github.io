---
id: Logs
sidebar_label: 'Logs'
sidebar_position: 3
---

# Logs

Logs carries what inside of `console.log()`. This is useful debug porpuses. More than often we need
to see the current state of a variable after some manupilations/calculations. With `Logs` we can do
that easyly.

```typescirpt
console.log(variable)
```

## Example Code

In this method's model, `mail` variable is not `Required`. This means `mail` can be left empty. 
So we may want to check if that's what happened in curtain cases.

```typescript
export async function setOfficeProfile(data: Data): Promise<StepResponse> {

  let {phoneNumber, mail, firstName, lastName} = data.request.body;
  
  if (mail == null)
  {
    console.log("Mail is empty!") // We can see if the mail is unregistered
    mail = "default@mail.com"
  }

  console.log(mail) // prints the mail

  data.response = {
    statusCode: 200,
    body: {
      phoneNumber,
      mail,
      firstName,
      lastName
    }
  };
  return data;
}
```

### Response' s Logs

We left the mail unregitered and this is the response log:

![Logs](/img/Logs.png)
