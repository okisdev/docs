---
sidebar_position: 1
slug: /notion-blog-react
title: 介绍
---

# Notion Blog React 文档

## 这是什么

Notion Blog React 是一个由 Notion 提供支持，使用 React、Next.JS、tailwindcss、TypeScript、Notion-Api-Worker 等构建的博客。

## 长话短说

1. 从 GitHub Fork [**Notion Blog React**](https://github.com/Harry-Yep/Notion-Blog-React) 项目。
2. 改变 `config/site.config.js` 文件里的内容来更改你的网页设定。
3. 使用此[连接](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Blog-React)导入至 Vercel。
4. 加入两个环境变量 `NOTION_API` and `NOTION_TABLE_SLUG` 到 Vercel 配置中。
5. 开始部署。

现在你看可以通过使用 Vercel 生成的连接来查看你的网页。

## Complete Deployment Guide

If you interested in this project, you can have a try by using the doing the following things.

:::tip
To do the following, you need to have GitHub account ready.
:::

### Fork this project

Visiting [**Notion Blog React**](https://github.com/Harry-Yep/Notion-Blog-React), and click the `fork` on the top right.

![1.project](/docs/notion-blog-react/intro/1.project.png)

### Change the site configuration

Enter [`config/site.config.js`](https://github.com/Harry-Yep/Notion-Blog-React/blob/main/config/site.config.js), change the configuration.

<details>
  <summary>See details about the each variable</summary>

```js
module.exports = {
    global: {
        author: 'Harry Yep', // The Blog author
        site: {
            name: 'Notion Blog React Example', // The Blog title
            description: 'Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.', // The Blog description
            url: 'https://react-notion-blog.demo.harisfox.com/', // The blog URL
            banner_img: `https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png`, // The Blog Open Graph image
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
                description: `...`, // The description of the Blog, which will be shown on the header of the page. JSX supported.
                image_url: 'https://cdn.harrly.com/global/assets/icon/android-chrome-192x192.png', // The header image
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

### Create the Database in Notion

W

### Deploy on Serverless platform

We have now finished the large part of configuration, it is time to deploy it.

You can choose to deploy it on any serverless which support Next.JS framework, we recommand [Vercel](https://vercel.com), you can use [Netlify](https://www.netlify.com/), etc.

:::warning
Please don't use [Cloudflare Pages](https://pages.cloudflare.com/), they only support Next.JS Static Deploy at the moment.
:::

To deploy it on Vercel, visit Vercel and click the New Project button.

![2.new-project](/docs/notion-blog-react/intro/2.new-project.png)

Import your forked repository.

![3.import](/docs/notion-blog-react/intro/3.import.png)

This is how configuration looks like.

:::info
It is important to add the `Environment Variables`, else, the deployment will fail.
:::

![4.configure](/docs/notion-blog-react/intro/4.configure.png)

After all setup, click Deploy.

#### Visit Your Website

After successfully deployed, you can visit your website via Vercel auto-generated URL (Ending with `vercel.app`)
