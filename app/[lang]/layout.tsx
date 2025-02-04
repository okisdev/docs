import { locales } from '@/lib/i18n';
import font from '@/styles/font';
import '@/styles/global.css';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>; children: React.ReactNode }) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={font.geistSans.className} suppressHydrationWarning>
      <body className='flex min-h-screen flex-col'>
        <I18nProvider locale={lang} locales={locales}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
