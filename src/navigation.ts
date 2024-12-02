import { createSharedPathnamesNavigation } from 'next-intl/navigation'

const locales = ['fr', 'en'] as const

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales
  })
