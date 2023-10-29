---
sidebar_position: 2
slug: /notion-blog-react/advanced-configuration
title: 进阶配置
---

# 进阶配置

我们将在这里介绍一些 Notion Blog React 的可选配置。

您将能够在 [`config/mode.config.js`](https://github.com/okisdev/Notion-Blog-React/blob/main/config/mode.config.js) 中更改它们以进行半定制。

## 全局配置

### 默认语言

路径: `global.language.default`

-   `default: 'en-GB'` (默认)
-   `default: 'zh-CN'`

### 导航栏

-   atom:

    路径: `global.navbar.atom`

    -   `shown: true` (默认)
    -   `shown: false`

-   github:

    路径: `global.navbar.github`

    -   `shown: true` (默认)
    -   `shown: false`

-   email:

    路径: `global.navbar.email`

    -   `shown: true`
    -   `shown: false` (默认)

-   privacy_policy:

    路径: `global.navbar.privacy_policy`

    -   `shown: true` (默认)
    -   `shown: false`

-   language:

    路径: `global.navbar.language`

    -   `shown: true` (默认)
    -   `shown: false`

### 页尾

-   poweredByVercel:

    路径: `global.footer.poweredByVercel`

    -   `shown: true` (默认)

        ![global.footer.poweredByVercel.shown.true.png](/docs/notion-blog-react/advanced-configuration/global.footer.poweredByVercel.shown.true.png)

    -   `shown: false`

        ![global.footer.poweredByVercel.shown.false.png](/docs/notion-blog-react/advanced-configuration/global.footer.poweredByVercel.shown.false.png)

-   themeSwitcher:

    路径: `global.footer.themeSwitcher`

    -   `shown: true` (默认)

        ![global.footer.themeSwitcher.shown.true.png](/docs/notion-blog-react/advanced-configuration/global.footer.themeSwitcher.shown.true.png)

    -   `shown: false`

        ![global.footer.themeSwitcher.shown.false.png](/docs/notion-blog-react/advanced-configuration/global.footer.themeSwitcher.shown.false.png)

## 主页

### 标题头像

路径: `home.header.avatar`

-   `shown: true` (默认)

    ![header.avatar.shown.true.png](/docs/notion-blog-react/advanced-configuration/header.avatar.shown.true.png)

-   `shown: false`

    ![header.avatar.shown.false.png](/docs/notion-blog-react/advanced-configuration/header.avatar.shown.false.png)

### Blog Card 信息详情显示模式

路径: `home.card.mode`

-   `mode: 0`

    ![home.blog.card.mode.0.png](/docs/notion-blog-react/advanced-configuration/home.blog.card.mode.0.png)

-   `mode: 1` (默认)

    ![home.blog.card.mode.1.png](/docs/notion-blog-react/advanced-configuration/home.blog.card.mode.1.png)

### Blog Card 信息详情显示日期 - 区域设置

路径: `home.card.date.locale`

默认: `locale: 'en-GB'`

更多内容请在[此处](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)查看更多信息。

## Posts 页面

### Collection

路径: `posts.collection`

-   `shown: true` (默认)

    ![posts.collection.shown.true.png](/docs/notion-blog-react/advanced-configuration/posts.collection.shown.true.png)

-   `shown: false`

    ![posts.collection.shown.false.png](/docs/notion-blog-react/advanced-configuration/posts.collection.shown.false.png)

### Table of Content

路径: `posts.toc`

-   `shown: true` (默认)

    ![posts.toc.shown.true.png](/docs/notion-blog-react/advanced-configuration/posts.toc.shown.true.png)

-   `shown: false`

    ![posts.toc.shown.false.png](/docs/notion-blog-react/advanced-configuration/posts.toc.shown.false.png)
