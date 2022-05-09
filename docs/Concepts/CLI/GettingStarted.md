---
id: GettingStarted
sidebar_label: 'Getting Started'
sidebar_position: 1
---

# Getting Started

Rio CLI is a nodejs program to help you create projects and deploy them. You can install it by executing command below:

```typescript
npm install -g @retter/rio-cli
```

After installing execute rio by calling:

```typescript
% rio
RIO CLI

Usage: rio <command>


Commands:
  rio                Default                                           [default]
  rio deploy         Deploy the project                             [aliases: d]
  rio generate       Generate rio class files
                     Usage: rio generate                            [aliases: g]
  rio generate-docs  Generate project docs
                     Usage: rio generate-docs                      [aliases: gd]
  rio init [alias]   Create a new project
                     Usage: init [alias]                            [aliases: i]
  rio list-profiles  List local admin profiles                     [aliases: lp]
  rio pre-deploy     Show deployment changes                       [aliases: pd]
  rio set-profile    Upsert admin profile in local storage
                     Usage: rio set-profile --profile-name PROFILE_NAME
                     --secret-id SECRET_ID --secret-key SECRET_KEY
                                                                   [aliases: sp]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --profile  Admin profile to execute command               [default: "DEFAULT"]
```
