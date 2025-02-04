import { locales, zhCN, zhHK } from '@/lib/i18n';
import font from '@/styles/font';
import '@/styles/global.css';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: "okisdev's docs",
    template: "%s | okisdev's docs",
  },
  description: "okisdev's docs",
};

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>; children: React.ReactNode }) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={font.geistSans.className} suppressHydrationWarning>
      <head>
        <meta name='apple-mobile-web-app-title' content="okisdev's docs" />
        <Script defer src='https://umami.harisfox.com/script.js' data-website-id='3738d376-31d5-49fa-9d29-fabb1a422195' />
      </head>
      <body className='flex min-h-screen flex-col'>
        <I18nProvider locale={lang} locales={locales} translations={{ 'zh-CN': zhCN, 'zh-HK': zhHK }[lang]}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
