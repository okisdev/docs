---
sidebar_position: 1
slug: /notion-photo-react
title: 介绍
---

# Notion Photo React 文档

## 这是什么

Notion Photo React 是一个由 Notion 提供支持，使用 React、Next.JS、tailwindcss、TypeScript、Notion-Api-Worker 等构建的图片库。

## 长话短说

1. 从 GitHub Fork [**Notion Photo React**](https://github.com/okisdev/Notion-Photo-React) 项目。
2. 改变 `config/site.config.js` 文件里的内容来更改你的网页设定。
3. 使用此[连接](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Photo-React)导入至 Vercel。
4. 加入两个环境变量 `NOTION_API` and `NOTION_TABLE_SLUG` 到 Vercel 配置中。
5. 开始部署。

现在你看可以通过使用 Vercel 生成的连接来查看你的网页。

## 完全部署指南

如果您对这个项目感兴趣，您可以通过执行以下操作来尝试自行部署。

:::tip 提示
要执行以下操作，您需要准备好 GitHub 帐户。
:::

### Fork 这个项目

访问 [**Notion Photo React**](https://github.com/okisdev/Notion-Photo-React) 的 GitHub 页面，然后单击右上角的 `fork`。

![1.project](/docs/notion-photo-react/intro/1.project.png)

### 更改站点配置

进入 [`config/site.config.js`](https://github.com/okisdev/Notion-Photo-React/blob/main/config/site.config.js)，更改配置。

<details>
  <summary>查看每个变量的详细信息</summary>

```js
module.exports = {
    global: {
        author: 'Harry Yep', // Photo Gallery 作者
        site: {
            name: 'Notion Photo React Example', // Photo Gallery 标题
            description: 'Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.', // Photo Gallery 描述
            url: 'https://npr.okis.dev/', // The Photo Gallery URL
            banner_img: `https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png`, // The Photo Gallery Open Graph image
            language: [
                // The supported language of the Blog (Not recommand to change, only support **简体中文** and **British England** so far)
                {
                    name: 'British English', // The language name (Default is **British English**)
                    code: 'en-GB', // The language code, this is related the URL you visited. For example, `blog.example.com/zh-CN` stand for **简体中文** of the blog.
                },
                {
                    name: 'Simplified Chinese',
                    code: 'zh-CN',
                },
            ],
        },
        content: {
            header: {
                description: `...`, // The description of the Photo Gallery, which will be shown on the header of the page. JSX supported.
            },
            license: {
                name: 'CC BY-NC-SA 4.0', // The License Name
                url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // The License agreement URL
            },
        },
        analytics: {
            google: '', // The Google Analytics UA Code
            splitbee: 'O1KKIQNSGP18', // The Splitbee Analytics Code
        },
    },
};
```

</details>

### Notion API 准备工作

:::tip 提示
这将是您网站的环境变量之一，称为 `NOTION_API`。
:::

:::warning 警告
请不要在 `NOTION_API` 前面添加 `http://` 或 `https://`。
:::

如果你不想自己部署 Notion API 你可以使用 `notion-api.splitbee.io` 替代。

或者, [点此查看](https://github.com/splitbee/notion-api-worker) 如何部署自己的 Notion API。

### 在 Notion 中创建数据库

:::tip 提示
这将是您网站的环境变量之一，称为 `NOTION_TABLE_SLUG`。
:::

您应该创建一个具有以下属性的 Notion 数据库。（您可以从 [此处](https://harrly.notion.site/d04d7d2efc9a4e79a3c98d7d4c9e8fc9) 复制模板。）

<details>
  <summary>查看每个变量的详细信息</summary>

```
title: Title
location: Select
published: Checkbox
date: Date
slug: Text
url: URL (Your photo image url)
```

</details>

:::warning 警告
请不要在任何属性框中留空，除了复选框和描述。

如果这样做会发生错误。
:::

### 在无服务器平台上部署

我们现在已经完成了大部分配置，是时候部署它了。

您可以选择将其部署在任何支持 Next.JS 框架的 serverless 平台上，我们推荐使用 [Vercel](https://vercel.com)，当然，您也可以使用 [Netlify](https://www.netlify.com/) 等。

:::warning 警告
请勿使用 [Cloudflare Pages](https://pages.cloudflare.com/)，他们目前只支持 Next.JS 静态部署。
:::

1. 要将其部署在 Vercel 上，请访问 Vercel 并单击 `New Project` 按钮。

    ![2.new-project](/docs/notion-photo-react/intro/2.new-project.png)

2. 导入您 `fork` 的 GitHub 存储库。

    ![3.import](/docs/notion-photo-react/intro/3.import.png)

    配置的结构基本是这样。

    :::info 须知
    添加 `Environment Variables` 很重要，否则部署将失败。
    :::

    ![4.configure](/docs/notion-photo-react/intro/4.configure.png)

3. 完成所有设置后，单击部署。

4. 您可以通过 Vercel 自动生成的 URL 访问您的网站（如果是在 Vercel 部署，以 `vercel.app` 结尾）。

### 部署在本地

我们现在已经完成了大部分配置，是时候部署它了。

您可以通过单击 GitHub 上的 **Download ZIP** 来下载整个项目，或者如果您愿意，也可以 **Clone** 它。

![5.download](/docs/notion-photo-react/intro/5.download.png)

之后，请执行以下操作：

1. 在 IDE（例如 **VSCode**）或终端（例如 **iterm2**）中打开您的项目。
2. 在项目的根路径中创建一个 `.env.local`。
3. 从 `.env.example` 复制并粘贴到 `.env.local`。
4. 在`.env.local`中填写环境变量。
   :::info 须知
   添加 `Environment Variables` 很重要，否则部署将失败。
   :::
5. 在你的项目中运行 `yarn`。
6. 在你的项目中运行`yarn build && yarn start`。
7. 您现在可以通过 `http://localhost:3000` 访问您的网站。
