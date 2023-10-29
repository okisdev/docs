import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>okey's Dev Docs</span>,
    project: {
        link: 'https://github.com/okisdev/docs',
    },
    i18n: [
        { locale: 'en-GB', text: 'English' },
        { locale: 'zh-CN', text: '简体中文' },
    ],
};

export default config;
