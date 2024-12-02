import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'fr',
  localePrefix: 'always'
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
