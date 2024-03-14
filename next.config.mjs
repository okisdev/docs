import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true,
});

export default withNextra({
    i18n: {
        locales: ['en-GB', 'zh-CN'],
        defaultLocale: 'en-GB',
    },
});
