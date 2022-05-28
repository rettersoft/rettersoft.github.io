---
id: What is Retter.io
sidebar_label: 'What is Retter.io'
sidebar_position: 2
---

# What is Retter.io?

### What is Rio?

Retter.io (Rio) is an abstraction on top of cloud infrastructure. Basically instead of writing apps directly running on AWS, you write apps running on Rio. Rio runs on AWS. 

We like to call Rio a cloud operating system managing the resources of cloud computer (AWS). Nobody writes apps directly accessing Intel chip. There is always an operating system in between like Windows or MacOS. Writing an application on top of Windows is much faster and easier compared to directly using the underlying hardware. Also there are many high level components you can use like UI components etc. With Rio we aim to give developers the ease of use of an operating system.

There are some apps like realtime gaming, you cannot use Rio. These may require very low level networking components etc. However if you like to write an Internet scale cloud app for retail for instance, Rio gives you speed and ease of use.

We have created Rio for our internal use in retter while writing custom software for our clients. We can use Rio to deliver cloud software up to 10x faster than directly using AWS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OL-V1CqF8oY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Underlying Technology

Rio is running completely serverlessly on AWS. We use Lambda, DynamoDB, S3, Kinesis, SNS, Eventbridge etc in the background. However anyone using Rio doesn't have to have any experience on these services. Rio handles everything seamlessly.

### Design patterns

Serverless + NoSQL databases gave us a development pattern which we think is `object oriented`. A set of lambda functions are running and reading and writing to a partition in a NoSQL db. We have created Rio to handle this scenario, so the developer doesn't have to. Rio takes care of following three things:

1. Object state handling
2. Single concurrency execution for each object instance
3. Realtime streaming of instance state updates to connected clients

We are yet to publish best practice documents. You can follow us on twitter.