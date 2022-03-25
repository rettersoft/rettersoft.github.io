---
sidebar_label: 'Why Rio?'
sidebar_position: 2
---

# Why Rio?
Developers used to run virtual machines in the cloud, but that was difficult to manage and scale. Than serverless systems came and because of they are scaled and managed automatically, they had preferred over virtual machines. Even though It has its own CPU (Lambda), its own disk (s3), and its own database (dynamo db) it had its own problems. It was difficult to write (or learn how to write) business logic in a serverless system because of its design. And also older codes were not compatible with it.

(For more about Serverless Computing: [Serverless Computing](/docs/Concepts/Serverless%20Computing/))

In Rio (Retter.io) instead of writing stateless functions in a serverless system, we write classes.
We don't even need a database. Each instance has a state, every data stored in its relative instance. Your objects have methods and clients can call methods. With every method call, we can just calculate the next state. Also, if one state changes, it gets synchronized to devices in real-time.

With Rio we can write our logic with object-oriented approach in a serverless system. So it is much easier and faster to write programs and maintain them. So that we can write complicated business logic in days instead of weeks or months.

---

You may also want to check [Youtube What is retter.io?](https://www.youtube.com/watch?v=OL-V1CqF8oY)

---