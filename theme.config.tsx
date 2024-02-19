import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const currentYear = new Date().getFullYear();

const config: DocsThemeConfig = {
    logo: <span>okisdev docs</span>,
    project: {
        link: 'https://github.com/okisdev',
    },
    docsRepositoryBase: 'https://github.com/okisdev/docs',
    footer: {
        text: `Copyright © ${currentYear} Harry Yep. All rights reserved.`,
    },
};

export default config;
