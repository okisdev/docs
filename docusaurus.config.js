// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Harry Yep's Documentations",
    tagline: "Harry Yep's Documentations",
    url: 'https://docs.harrly.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'favicon.ico',
    organizationName: 'Harry-Yep',
    projectName: 'Website_Harrly_Docs',

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    scripts: [
        {
            async: true,
            src: 'https://splitbee.hode.co.uk/sb.js',
            'data-token': 'XLF8QST151A6',
        },
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-183901953-4',
        },
    ],

    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['en', 'zh'],
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Harry-Yep/Website_Harrly_Docs/edit/main/',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/Harry-Yep/Website_Harrly_Docs/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB', 'zh-CN'],
        localeConfigs: {
            'en-GB': {
                htmlLang: 'en-GB',
            },
            'zh-CN': {
                htmlLang: 'zh-CN',
            },
        },
    },

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // announcementBar: {
            //     id: '',
            //     content: ``,
            // },
            metadata: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
                { name: 'description', content: "Harry Yep's Documentations" },
                { name: 'author', content: 'Harry Yep' },
                { name: 'copyright', content: `Copyright © ${new Date().getFullYear()} Harry Yep.` },
                { property: 'og:title', content: "Harry Yep's Documentations" },
                { property: 'og:description', content: "Harry Yep's Documentations" },
            ],
            navbar: {
                title: "Harry Yep's Documentations",
                logo: {
                    alt: 'logo',
                    src: 'https://cdn.harrly.com/favicon.ico',
                },
                items: [
                    {
                        type: 'dropdown',
                        position: 'left',
                        label: 'Docs',
                        items: [
                            {
                                label: 'Notion Blog React',
                                to: '/docs/notion-blog-react/',
                            },
                            {
                                label: 'Notion Photo React',
                                to: '/docs/notion-photo-react/',
                            },
                        ],
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        to: '/search',
                        label: 'Search',
                        position: 'left',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/Harry-Yep/Website_Harrly_Docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Notion Blog React',
                                to: '/docs/notion-blog-react/',
                            },
                            {
                                label: 'Notion Photo React',
                                to: '/docs/notion-photo-react/',
                            },
                        ],
                    },
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://blog.harrly.com/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Harry-Yep',
                            },
                            {
                                label: 'Privacy Policy',
                                href: 'https://www.harrly.com/privacy-policy/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Harry Yep. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
