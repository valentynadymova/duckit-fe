/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/global.css';
import AdaptiveProvider from '@/context/AdaptiveContext';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { sora, firaCode } from './fonts';
// import ToastProvider from '@/context/ToastProvider'

export const metadata: Metadata = {
  title: 'duck_it',
  description: '',
};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sora.variable} ${firaCode.variable}`}>
      <head>
        {/* <meta property="og:title" content="duck_it - websites from scratch" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duckit-budget.vercel.app/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta
          property="og:image"
          content="https://duckit-budget.vercel.app/images/duck_it_logo-1200x630px-png.png"
        />
        <meta property="og:image:alt" content="duck" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="High-quality custom websites at budget-friendly prices"
        />
        <meta property="og:site_name" content="duck_it" />
        <meta property="fb:app_id" content="989493622914614" />
        <meta name="msvalidate.01" content="8D61F59F2944EA9385F76FDAEFF31FB5" />

        <meta
          name="google-site-verification"
          content="LSTpPk54feBs9-DviIf1AabqugEq8ptPXpWD3d395mc"
        /> */}

        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#faff00" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#faff00" />
        <GoogleAnalytics gaId="" /> */}
      </head>
      <body className="body">
        <div className="page_container">
          <NextIntlClientProvider messages={messages}>
            <div id="portal" />
            <AdaptiveProvider>
              <Header />
              {children}
              <Footer />
            </AdaptiveProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
