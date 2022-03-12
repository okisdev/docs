import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-GB'>
                <Head>
                    <link rel='icon' type='image/png' href='https://cdn.harrly.com/favicon.ico'></link>
                    <link rel='icon' type='image/png' sizes='180x180' href='https://cdn.harrly.com/global/assets/icon/apple-touch-icon.png'></link>
                    <link rel='icon' type='image/png' sizes='32x32' href='https://cdn.harrly.com/global/assets/icon/favicon-32x32.png'></link>
                    <link rel='icon' type='image/png' sizes='16x16' href='https://cdn.harrly.com/global/assets/icon/favicon-16x16.png'></link>
                    <link rel='icon' type='image/png' sizes='150x150' href='https://cdn.harrly.com/global/assets/icon/mstile-150x150.png'></link>
                    <link rel='icon' type='image/png' sizes='192x192' href='https://cdn.harrly.com/global/assets/icon/android-chrome-192x192.png'></link>
                    <link rel='icon' type='image/png' sizes='256x256' href='https://cdn.harrly.com/global/assets/icon/android-chrome-256x256.png'></link>

                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />

                    <script data-token='XLF8QST151A6' async src='https://splitbee-analytics.harisfox.com/sb.js'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
