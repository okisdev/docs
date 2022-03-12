const nextConfig = require('nextra')({
    reactStrictMode: true,
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    unstable_staticImage: true,
});

module.exports = nextConfig({
    i18n: {
        locales: ['en-GB', 'zh-CN'],
        defaultLocale: 'en-GB',
    },
});
