'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

interface LanguageSwitcherProps {
  pathname: string | null
  className?: string
}

export function LanguageSwitcher({
  pathname,
  className = ''
}: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en'
    router.push(pathname?.replace(`/${locale}`, `/${newLocale}`) || '/')
  }

  return (
    <button
      onClick={switchLanguage}
      className={`rounded-md border border-white/20 px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
    >
      {locale === 'en' ? 'FR' : 'EN'}
    </button>
  )
}
