import { useRouter } from 'next/router';

export default {
    logo: <span>okey's docs</span>,
    project: {
        link: 'https://github.com/okisdev/docs',
    },
    docsRepositoryBase: 'https://github.com/okisdev/docs/tree/main',
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: "%s – okisdev's docs",
            };
        }
    },
    head: (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
            <meta property='og:title' content="okey's docs" />
            <meta property='og:description' content="okisdev's docs" />
            <script async defer data-website-id='3738d376-31d5-49fa-9d29-fabb1a422195' scr='https://umami.harisfox.com/script.js' />
        </>
    ),
    darkMode: true,
};
