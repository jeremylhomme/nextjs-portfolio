'use client'

import React, { useState } from 'react'
import { Link } from '@/src/navigation'
import { Icon } from '@/src/components/ui/icon'
import { useTranslations, useLocale } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import ContactModal from '@/src/components/contact-modal'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('header')
  const locale = useLocale()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getLinkClassName = (href: string) => {
    return `transition-colors hover:text-primary ${
      pathname === href ? 'text-yellow-300' : ''
    }`
  }

  const links = [
    { text: t('home'), href: '/' },
    { text: t('projects'), href: '/projects' },
    { text: t('about'), href: '/about' },
    { text: t('contact'), href: '#' }
  ]

  return (
    <header className='bg-background text-foreground'>
      <div className='container relative mx-auto border-b py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-center text-lg font-semibold'>
              <Link href='/'>JEREMY L'HOMME</Link>
            </h1>
          </div>

          <div className='flex items-center'>
            <button
              className='mr-4 block md:hidden'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              <Icon name='menu' size='md' />
            </button>
            <div className='hidden md:block'>
              <nav className='mr-8 inline-block'>
                <ul className='flex space-x-8'>
                  {links.map((link, index) =>
                    link.text === t('contact') ? (
                      <li key={index}>
                        <ContactModal className={getLinkClassName('#')} />
                      </li>
                    ) : (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className={getLinkClassName(link.href)}
                        >
                          {link.text}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              <LanguageSwitcher pathname={pathname} />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute left-0 right-0 top-full z-50 border-t bg-background px-4 py-6 shadow-lg md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav>
            <ul className='space-y-2 pl-4'>
              {links.map((link, index) =>
                link.text === t('contact') ? (
                  <li key={index}>
                    <ContactModal className={getLinkClassName('#')} />
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={getLinkClassName(link.href)}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              )}
              <li>
                <LanguageSwitcher pathname={pathname} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
