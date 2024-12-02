'use client'

import React from 'react'
import { ProjectLayout } from '@/src/components/ui/project-layout'
import { IconsCard } from '@/src/components/ui/card-icons'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const JimagineHierPage = () => {
  const t = useTranslations()
  const projectContent = [
    {
      title: t('jimagine-hier-page.subtitle-1'),
      description: t('jimagine-hier-page.description-1'),
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
      title: t('jimagine-hier-page.subtitle-2'),
      description: t('jimagine-hier-page.description-2'),
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
      title: t('jimagine-hier-page.subtitle-3'),
      description: t('jimagine-hier-page.description-3'),
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
          {t('jimagine-hier-page.title')}
        </h1>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('jimagine-hier-page.intro')}</p>
          <p className='italic'>{t('jimagine-hier-page.disclaimer')}</p>
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
                window.open('https://jimagine-hier.com/', '_blank')
              }
            >
              {t('jimagine-hier-page.see-project')}
            </Button>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 mt-16 text-2xl font-semibold'>
            {t('jimagine-hier-page.technologies')}
          </h2>
          <IconsCard items={technologies} />
        </div>
      </div>
    </section>
  )
}

export default JimagineHierPage
