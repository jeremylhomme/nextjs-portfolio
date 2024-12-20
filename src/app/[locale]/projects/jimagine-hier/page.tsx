'use client'

import React from 'react'
import { ProjectLayout } from '@/src/components/ui/project-layout'
import { IconsCard } from '@/src/components/ui/card-icons'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const JimagineHierPage = () => {
  const t = useTranslations('jimagine-hier-page')
  const projectContent = [
    {
      title: t('subtitle-1'),
      description: t('description-1'),
      content: (
        <Image
          src='/jimagine-hier-logo.webp'
          fill
          alt="Logo J'imagine Hier"
          className='h-full w-full object-cover'
        />
      ),
      image: '/jimagine-hier-logo.webp',
      alt: "Logo J'imagine Hier"
    },
    {
      title: t('subtitle-2'),
      description: t('description-2'),
      content: (
        <Image
          src='/jimagine-hier-home.webp'
          fill
          alt="Page d'accueil J'imagine Hier"
          className='h-full w-full object-cover'
        />
      ),
      image: '/jimagine-hier-home.webp',
      alt: "Page d'accueil J'imagine Hier"
    },
    {
      title: t('subtitle-3'),
      description: t('description-3'),
      content: (
        <Image
          src='/jimagine-hier-ex-photo.webp'
          fill
          alt="Photo J'imagine Hier"
          className='h-full w-full object-cover'
        />
      ),
      image: '/jimagine-hier-ex-photo.webp',
      alt: "Photo J'imagine Hier"
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
        <h1 className='mb-4 text-2xl font-semibold'>
          {t('title')}
        </h1>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('intro')}</p>
          <p className='italic'>{t('disclaimer')}</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='mt-4 w-full max-w-6xl'>
          <ProjectLayout content={projectContent} />
          <div className='mt-8 flex justify-center'>
            <Button
              variant='custom'
              size='custom'
              className='w-fit'
              onClick={() =>
                window.open('https://jimagine-hier.me/', '_blank')
              }
            >
              {t('see-project')}
            </Button>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 mt-16 text-2xl font-semibold'>
            {t('technologies')}
          </h2>
          <IconsCard items={technologies} />
        </div>
      </div>
    </section>
  )
}

export default JimagineHierPage
