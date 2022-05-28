---
sidebar_position: 2
slug: /notion-blog-react/advanced-configuration
title: Advanced configuration
---

# Advanced configuration

We'll cover some optional modes for Notion Blog React.

You will be able to change them in [`config/mode.config.js`](https://github.com/Harry-Yep/Notion-Blog-React/blob/main/config/mode.config.js) for semi-customization.

## Global Configuration

### Default Language

path: `global.language.default`

-   `default: 'en-GB'` (default)
-   `default: 'zh-CN'`

### Navbar

-   atom:

    path: `global.navbar.atom`

    -   `shown: true` (default)
    -   `shown: false`

-   github:

    path: `global.navbar.github`

    -   `shown: true` (default)
    -   `shown: false`

-   email:

    path: `global.navbar.email`

    -   `shown: true`
    -   `shown: false` (default)

-   privacy_policy:

    path: `global.navbar.privacy_policy`

    -   `shown: true` (default)
    -   `shown: false`

-   language:

    path: `global.navbar.language`

    -   `shown: true` (default)
    -   `shown: false`

### Footer

-   poweredByVercel:

    path: `global.footer.poweredByVercel`

    -   `shown: true` (default)

        ![global.footer.poweredByVercel.shown.true.png](/docs/notion-blog-react/advanced-configuration/global.footer.poweredByVercel.shown.true.png)

    -   `shown: false`

        ![global.footer.poweredByVercel.shown.false.png](/docs/notion-blog-react/advanced-configuration/global.footer.poweredByVercel.shown.false.png)

-   themeSwitcher:

    path: `global.footer.themeSwitcher`

    -   `shown: true` (default)

        ![global.footer.themeSwitcher.shown.true.png](/docs/notion-blog-react/advanced-configuration/global.footer.themeSwitcher.shown.true.png)

    -   `shown: false`

        ![global.footer.themeSwitcher.shown.false.png](/docs/notion-blog-react/advanced-configuration/global.footer.themeSwitcher.shown.false.png)

## Homepage

### Header Avatar

path: `home.header.avatar`

-   `shown: true` (default)

    ![header.avatar.shown.true.png](/docs/notion-blog-react/advanced-configuration/header.avatar.shown.true.png)

-   `shown: false`

    ![header.avatar.shown.false.png](/docs/notion-blog-react/advanced-configuration/header.avatar.shown.false.png)

### Blog Card Information Details Display Mode

path: `home.card.mode`

-   `mode: 0`

    ![home.blog.card.mode.0.png](/docs/notion-blog-react/advanced-configuration/home.blog.card.mode.0.png)

-   `mode: 1` (default)

    ![home.blog.card.mode.1.png](/docs/notion-blog-react/advanced-configuration/home.blog.card.mode.1.png)

### Blog Card Information Details Date - Locale

path: `home.card.date.locale`

Default: `locale: 'en-GB'`

Please check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) for more information.

## Posts page

### Collection

path: `posts.collection`

-   `shown: true` (default)

    ![posts.collection.shown.true.png](/docs/notion-blog-react/advanced-configuration/posts.collection.shown.true.png)

-   `shown: false`

    ![posts.collection.shown.false.png](/docs/notion-blog-react/advanced-configuration/posts.collection.shown.false.png)

### Table of Content

path: `posts.toc`

-   `shown: true` (default)

    ![posts.toc.shown.true.png](/docs/notion-blog-react/advanced-configuration/posts.toc.shown.true.png)

-   `shown: false`

    ![posts.toc.shown.false.png](/docs/notion-blog-react/advanced-configuration/posts.toc.shown.false.png)
