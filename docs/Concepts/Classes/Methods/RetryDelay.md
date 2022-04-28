---
id: Retry Delay
sidebar_label: 'Retry Delay'
sidebar_position: 7
---

# Retry Delay

Sometimes you want to retry a method execution after some delay. For example: you have a refund method and bank is not available at the moment. You would like to postpone this request for maybe five minutes and retry it again. Rio gives you this functionality out of the box.

```typescript
data.retryAfter = 10 // seconds
```

By setting retryAfter to an integer in seconds you are telling Rio to keep this message in instance queue and give to this method after this amount of time.

This only works for methods with invocation type QUEUED.


:::info
If you set retryAfter to 0 it doesn't have any effect.
:::