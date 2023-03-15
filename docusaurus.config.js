// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "okey's Dev Docs",
    tagline: "okey's Dev Docs",
    url: 'https://docs.okis.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'favicon.ico',

    organizationName: 'okisdev',
    projectName: 'docs',

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

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/okisdev/docs/edit/main/',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    routeBasePath: '/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

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
            defer: true,
            'data-website-id': '3738d376-31d5-49fa-9d29-fabb1a422195',
            src: 'https://umami.harisfox.com/script.js',
        },
        {
            async: true,
            defer: true,
            'data-website-id': 'd0053199-edb6-42b9-bcf5-2796c05f1721',
            src: 'https://analytics.umami.is/script.js',
        },
    ],

    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['en', 'zh'],
                docsRouteBasePath: '/',
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // announcementBar: {
            //     id: '',
            //     content: ``,
            // },
            metadata: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
                { name: 'description', content: "okey's Dev Docs" },
                { name: 'author', content: 'Harry Yep' },
                { name: 'copyright', content: `Copyright © ${new Date().getFullYear()} Harry Yep.` },
                { property: 'og:title', content: "okey's Dev Docs" },
                { property: 'og:description', content: "okey's Dev Docs" },
            ],
            navbar: {
                title: "okey's Dev Docs",
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
                                to: '/notion-blog-react/',
                            },
                            {
                                label: 'Notion Photo React',
                                to: '/notion-photo-react/',
                            },
                            {
                                label: 'TfL Tube',
                                to: '/tfl-tube/',
                            },
                            {
                                label: 'Chat Chat',
                                to: '/chat/',
                            },
                        ],
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
                        href: 'https://github.com/okisdev/docs',
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
                                to: '/notion-blog-react/',
                            },
                            {
                                label: 'Notion Photo React',
                                to: '/notion-photo-react/',
                            },
                            {
                                label: 'TfL Tube',
                                to: '/tfl-tube/',
                            },
                        ],
                    },
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://harrly.com/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/okisdev',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/okisdev',
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
