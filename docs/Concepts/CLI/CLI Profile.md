---
id: CLI Profile
sidebar_label: 'CLI Profile'
sidebar_position: 2
---

# CLI Profile

## Setting Up Your Profile With CLI
After CLI setup is complete, we can set your profile up. To do this visit [retter.io](https://c.retter.io) and login. Than open settings ``Rbs Console > Right Top Dropdown Menu > Settings``. There you will see your SECRET_ID and SECRET_KEY.

![Settings](/img/Getting-Started-With-CLI-Settings.png)

Decide your PROFILE_NAME and run the following command with your own PROFILE_NAME, SECRET_ID and SECRET_KEY.

```shell
> rio set-profile --profile-name PROFILE_NAME --secret-id SECRET_ID --secret-key SECRET_KEY
```

To see if your profile had been initialized, run the following command.

```shell
> rio list-profiles
```
