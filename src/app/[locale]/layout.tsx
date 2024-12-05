import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/src/components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

if (!process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY) {
  throw new Error('NEXT_PUBLIC_CAPTCHA_SITE_KEY is not configured');
}

export const metadata: Metadata = {
  title: `Jeremy L'homme | Développeur Web FullStack`,
  description: `Développeur web fullstack basé dans les Hauts-de-Seine près de Paris.`
};

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LayoutProps) {
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
          strategy='beforeInteractive'
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster
              position='top-right'
              toastOptions={{
                duration: 3000
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
