---
sidebar_label: 'Methods'
sidebar_position: 7
---

# Methods

In your class template you can add methods to your class.


```yaml
preAuthorizer: index.preAuthorizer
init: index.init
getState: index.getState
methods:
    - method: sayHello
      tag: test
      sync: true
      handler: index.sayHello
```


## Concurrency & FIFO

One of the most important features of class methods is that by default concurrency is 1. Calls made to your method gets ordered and executed one by one and exactly once guaranteed. This is a very important and crucial part of development with Rio.

Every time a method is running you are handed a data object and you are responsible of returning it. Basically what you do is calculating the next state of this instance. As long as the concurrency is one there is no risk of a race condition. So it is safe to alter the state any way you want and also check for state and calculate your next move.
