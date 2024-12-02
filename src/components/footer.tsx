'use client'

import React from 'react'
import { Icon } from '@/src/components/ui/icon'
import ContactModal from '@/src/components/contact-modal'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Link } from '@/src/navigation'

interface NavigationItem {
  name: string
  href: string
}

interface SocialItem extends NavigationItem {
  icon: string
}

export default function Footer() {
  const t = useTranslations('footer')

  const navigation: {
    main: NavigationItem[]
    social: SocialItem[]
  } = {
    main: [
      { name: t('projects'), href: '/projects' },
      { name: t('about'), href: '/about' },
      { name: t('contact'), href: '#' }
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/jeremylhomme',
        icon: 'github'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jeremy-lhomme/',
        icon: 'linkedin'
      }
    ]
  }

  const pathname = usePathname()

  const getLinkClassName = (href: string) => {
    return `transition-colors hover:text-primary ${
      pathname === href ? 'text-yellow-300' : 'text-sm text-muted-foreground'
    }`
  }

  return (
    <footer className='mt-16 w-full border-t'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <h1 className='mb-4 text-center text-lg font-semibold'>
          JEREMY L'HOMME
        </h1>
        <p className='mb-6 text-center text-sm text-muted-foreground'>
          {t('title')}
        </p>
        <nav
          className='mb-4 columns-1 text-center sm:flex sm:columns-2 sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map((link, index) => (
            <div key={index} className='pb-6'>
              {link.name.toLowerCase() === t('contact').toLowerCase() ? (
                <ContactModal className={getLinkClassName('#')} />
              ) : (
                <Link href={link.href} className={getLinkClassName(link.href)}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className='mt-10 flex justify-center space-x-10'>
          {navigation.social.map(link => (
            <a key={link.name} href={link.href} className=''>
              <span className='sr-only'>{link.name}</span>
              <Icon name={link.icon} size='md' aria-hidden='true' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
