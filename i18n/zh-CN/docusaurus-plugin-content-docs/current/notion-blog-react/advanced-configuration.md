---
sidebar_position: 2
slug: /notion-blog-react/advanced-configuration
title: 进阶配置
---

# 进阶配置

我们将在这里介绍一些 Notion Blog React 的可选配置。

您将能够在 [`config/mode.config.js`](https://github.com/Harry-Yep/Notion-Blog-React/blob/main/config/mode.config.js) 中更改它们以进行半定制。

## 主页 - Blog Card

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
