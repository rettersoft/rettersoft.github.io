---
id: Limits
sidebar_label: 'Limits'
sidebar_position: 3
---

# Limits

There are two type of limits. 

Hard limits refer to system wide limits, which cannot be changed by upgrading to a new subscription.

Subscription limits refer to project specific limits which can be changed by upgrading to a newer subscription.

### Subscription Limits

Each project has it's own subscription. A subscription defines how much resource this project is entitled to use per day or month. A project can be configured to have daily or monthly limits. A free subscription daily limits are:

| Type        | Unit       | Limit | Description |
| ----------- | ----------- | ----------- | ----------- |
| File Storage      | KiloBytes | 20000 | Size of total stored files on Rio disk |
| Class Limit   | Count | 5 | Number of classes you can have. |
| Lu Storage   | Count | 1000 | Size of lookup key storage |
| User Code Duration   | miliseconds | 1500000 | Total miliseconds your code can run |
| Operations   | count | 5000 | Number of operations you can call |
| State Size     | KiloBytes | 100000 | Total size of instance state data you can store |
| Api Call     | KiloBytes | 5000 | Number of API calls made to your classes |
| Gm Storage     | KiloBytes | 1000 | Size of global memory usage |
| Schedule     | Count | 100 | Number of schedule calls you can make. |
| Method Lambda     | KiloBytes | 5000 |  |
| Ss Storage     | KiloBytes | 5000 | Size of data stored in `Sorted Sets` |

### Hard Limits

| Type        | Unit       | Limit | Description |
| ----------- | ----------- | ----------- | ----------- |
| Single Schedule API Call     | Count | 100 | Number of methods to schedule in a single schedule call. [See here for more details](../../classes/methods/scheduling)  |




