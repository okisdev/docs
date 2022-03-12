module.exports = {
    projectLink: 'https://github.com/Harry-Yep/Website_Harrly_Docs',
    docsRepositoryBase: 'https://github.com/Harry-Yep/Website_Harrly_Docs/blob/main/pages/docs/',
    titleSuffix: " – Harry Yep's Docs",
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null,
    darkMode: true,
    font: false,
    footer: true,
    footerText: `Copyright ${new Date().getFullYear()} © Harry Yep. All rights reserved.`,
    footerEditLink: `Improve this page on GitHub`,
    logo: (
        <>
            <span>Harry Yep's Docs</span>
        </>
    ),
    head: (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='description' content="Harry Yep's Docs" />
            <meta name='og:title' content="Harry Yep's Docs" />
        </>
    ),
    i18n: [
        { locale: 'en-GB', text: 'British English' },
        { locale: 'zh-CN', text: '简体中文' },
    ],
};
