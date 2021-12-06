---
slug: state-of-cloud-object
title: State of a cloud object
authors: baran
tags: [rtbs, state, todo app, object oriented cloud, cloud]
---


Every object has a state. This state is stored within the object. Best practice is to keep the size of this state relatively small. For instance if you are developing a chat application you might hold last 100 messages in state but store the rest in a sortedSet of this object. However we will only talk about state in this article.
State object gets streamed to client sdk’s in real time.
State consists of four parts:

```json
{
  "public": {},
  "private": {},
  "user": {
    "userId1": { }
  },
  "role": {
    "roleName1": { }
  }
}
```