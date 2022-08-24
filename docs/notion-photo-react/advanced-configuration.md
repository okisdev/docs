---
sidebar_position: 2
slug: /notion-photo-react/advanced-configuration
title: Advanced configuration
---

# Advanced configuration

We'll cover some optional modes for Notion Photo React.

You will be able to change them in [`config/mode.config.js`](https://github.com/okisdev/Notion-Photo-React/blob/main/config/mode.config.js) for semi-customization.

## Homepage - Photo Card

### Photo Card Information Details Display Mode

path: `home.card.mode`

-   `mode: 0`

    ![home.blog.card.mode.0.png](/docs/notion-photo-react/advanced-configuration/home.photo.card.mode.0.png)

-   `mode: 1` (default)

    ![home.blog.card.mode.1.png](/docs/notion-photo-react/advanced-configuration/home.photo.card.mode.1.png)

### Photo Card Information Details Date - Locale

path: `home.card.date.locale`

Default: `locale: 'en-GB'`

Please check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) for more information.
