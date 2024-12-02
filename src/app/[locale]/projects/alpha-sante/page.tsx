'use client'

import React from 'react'
import { ProjectLayout } from '@/src/components/ui/project-layout'
import { IconsCard } from '@/src/components/ui/card-icons'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const AlphaSantePage = () => {
  const t = useTranslations('alpha-sante-page')
  const projectContent = [
    {
      title: t('subtitle-1'),
      description: t('description-1'),
      content: (
        <Image
          src='/alpha-sante-logo.webp'
          fill
          alt="Page d'accueil Alpha Santé"
          className='h-full w-full object-cover'
        />
      ),
      image: '/alpha-sante-logo.webp',
      alt: "Page d'accueil Alpha Santé"
    },
    {
      title: t('subtitle-2'),
      description: t('description-2'),
      content: (
        <Image
          src='/alpha-sante-home.webp'
          fill
          alt="Page d'accueil Alpha Santé"
          className='h-full w-full object-cover'
        />
      ),
      image: '/alpha-sante-home.webp',
      alt: "Page d'accueil Alpha Santé"
    },
    {
      title: t('subtitle-3'),
      description: t('description-3'),
      content: (
        <Image
          src='/alpha-sante-ex-photo.webp'
          fill
          alt='Photos des produits Alpha Santé'
          className='h-full w-full object-cover'
        />
      ),
      image: '/alpha-sante-ex-photo.webp',
      alt: 'Photos des produits Alpha Santé'
    }
  ]

  const technologies = [
    {
      image: '/wordpress.svg',
      alt: 'WordPress',
      link: 'https://fr.wordpress.org/'
    },
    {
      image: '/woocommerce.svg',
      alt: 'WooCommerce',
      link: 'https://woocommerce.com/'
    }
  ]

  return (
    <section>
      <div className='container max-w-4xl justify-center border-b py-20'>
        <h1 className='mb-4 text-2xl font-semibold'>{t('title')}</h1>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('intro')}</p>
        </div>
      </div>

      <div className='flex justify-center border-t py-16'>
        <div className='mt-4 w-full max-w-4xl'>
          <ProjectLayout content={projectContent} />
          <div className='mt-8 flex justify-center'>
            <Button
              variant='custom'
              size='custom'
              className='w-fit'
              onClick={() => window.open('https://alphasante.net', '_blank')}
            >
              {t('see-project')}
            </Button>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 text-2xl font-semibold'>Technologies & Outils</h2>
          <IconsCard items={technologies} />
        </div>
      </div>
    </section>
  )
}

export default AlphaSantePage
