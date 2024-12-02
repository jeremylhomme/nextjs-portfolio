import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/src/components/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Jeremy L'homme | Développeur Web FullStack`,
  description: `Développeur web fullstack basé dans les Hauts-de-Seine près de Paris.`
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  return (
    <html suppressHydrationWarning lang={locale}>
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
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
