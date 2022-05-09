---
id: Log Viewer
sidebar_label: 'Log Viewer'
sidebar_position: 1
---

# Log Viewer

This panel allows us the track requests. We can filter their attributes. 
This provides us valueable informations like request's platform, date etc.
We can also leverage basic logic operations to make tracking easier.
Like equal, less than or equal to etc. 

![LogViewer](/img/LogViewer.png)
:::note
  Log viewer provides us with request's:
  
  `requesttimeepoch`, `statuscode`, `classid`, `methodname`,
   `identity`, `userid`, `requestid`, `platform`, `year`, `month`, `day`, `hour`.
:::


# Filtering in Log Viwer

For finding what we are looking for in log viewer we can make us of:
`EQ`(equal), `NEQ` (not equal), `GTE` (greater than or equeal), `LTE` (less than or equal),
`IN`, `BEGINS_WITH`, `ENDS_WITH`, `CONTAIN` logical operators.

To add this operators click the top blank and selecet the attribute you want to filter by
. Than arrange your condition and press `get`.

For example if we filter like, 
>`Year` `EQ` `2022` -> shows us only the requests which are made in year 2022.
