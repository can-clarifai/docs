---
description: Authenticate your access across all apps within the Clarifai platform
sidebar_position: 1
---

# Personal Access Tokens

**Make inferences on resources outside the scope of your apps**
<hr />

A Personal Access Token \(usually shortened as PAT\) is a kind of key that authenticates a user across all applications they have access to. It's not linked to a specific application.

A PAT represents you when accessing the Clarifai API. It's a powerful way of accessing your resources within the Clarifai platform. 

You can use PATs to accomplish the following:

- Access multiple apps with a single key. This lets you access your own apps as well as any other apps you have permissions to use, such as public apps, apps where you're added as a collaborator, or apps belonging to your organization's team.
- Create apps and app-specific keys programmatically through the API. This is crucial for programs that segregate the data of each of their end-users into different apps.


:::info

- PAT is the primary authentication mechanism we use.  
- When using a PAT, you need to specify the **user ID** alongside the **application ID** of the owner of the resource you want to access—be it your own or for another user. If accessing your own resources, you specify your own `user_id` and `app_id`; if you don't own them, specify the owner's `user_id` and `app_id`. 

:::

:::tip

A PAT allows you to make inferences on resources that are outside the scope of your apps. [An API Key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) only allows you to access resources scoped to the app defined by that key. So, you can use an API Key to access your own resources, but not Clarifai's resources. 

:::

## How to Create a PAT in the Legacy Portal

To create a new PAT on the Legacy Portal, [log in](https://portal.clarifai.com/login) and navigate to the bottom left-hand corner of the application overview page. Then, click  the initials of your name.

![navigate-authentication](/img/navigate_authentication.jpg)

Select the **Authentication** option. On the ensuing page, click the **Create Personal Access Token** button.

![authentication-screen](/img/authentication_screen.jpg)

Provide a short token description, set the scopes you want to apply, and click the **Create** button.

![create-pat](/img/create_pat.jpg)

## How to Create a PAT in the Community Platform

To create a new PAT on the Community platform, [log in](https://clarifai.com/login) and navigate to the top right-hand section of the navigation bar. Then, click your user’s profile icon.

![Create new PAT on Community](/img/others/create_pat_community.png)

Select the **Security** settings option on the drop-down list. On the ensuing page, click the **Create Personal Access Token** button.  

![Account security settings](/img/others/account_security_settings.png)

Provide a short token description, set the scopes you want to apply, and click the **Confirm** button.

![create pat](/img/others/pat_dialog_box.png)

:::caution

- PATs do not expire. In case your PAT gets compromised, you should delete it, and create a new one with the same scopes.

- We recommend that you do **not** share your PAT with other users.

:::

## How to Use a PAT Example

Here is an example of how to use a PAT to make a prediction request from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. Note that you need to specify the resource owner's `user_id` and `app_id` in the `UserAppIDSet`, if making a gRPC call, or in the URL, if making a REST call. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.py";
import CurlPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.sh";

<Tabs>
<TabItem value="python" label="Python">
     <CodeBlock className="language-python">{PythonPat}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPat}</CodeBlock>
</TabItem>
</Tabs>