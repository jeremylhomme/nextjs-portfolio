'use client'

import React from 'react'
import { ProjectLayout } from '@/src/components/ui/project-layout'
import { IconsCard } from '@/src/components/ui/card-icons'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const CinephoriaPage = () => {
  const t = useTranslations()
  const projectContent = [
    {
      title: t('cinephoria-page.subtitle-1'),
      description: t('cinephoria-page.description-1'),
      content: (
        <Image
          src='/cinephoria-logo.webp'
          fill
          alt='Logo Cinéphoria'
          className='h-full w-full object-cover'
        />
      ),
      image: '/cinephoria-logo.webp',
      alt: 'Logo Cinéphoria'
    },
    {
      title: t('cinephoria-page.subtitle-2'),
      description: t('cinephoria-page.description-2'),
      content: (
        <Image
          src='/cinephoria-home.webp'
          fill
          alt="Page d'accueil Cinéphoria"
          className='h-full w-full object-cover'
        />
      ),
      image: '/cinephoria-home.webp',
      alt: "Page d'accueil Cinéphoria"
    }
  ]

  const technologies = [
    { image: '/react.svg', alt: 'React', link: 'https://fr.react.dev/' },
    {
      image: '/tailwind.svg',
      alt: 'Tailwind CSS',
      link: 'https://tailwindcss.com/'
    },
    {
      image: '/github.svg',
      alt: 'GitHub',
      link: 'https://github.com/'
    },

    { image: '/nodejs.svg', alt: 'Node.js', link: 'https://nodejs.org/' },
    { image: '/mongodb.svg', alt: 'MongoDB', link: 'https://www.mongodb.com/' },

    {
      image: '/mysql.svg',
      alt: 'My SQL',
      link: 'https://www.mysql.com/fr/'
    },
    {
      image: '/docker.svg',
      alt: 'Docker',
      link: 'https://www.docker.com/'
    },
    {
      image: '/mailgun.svg',
      alt: 'Mailgun',
      link: 'https://www.mailgun.com/'
    },
    {
      image: '/prisma.svg',
      alt: 'Prisma',
      link: 'https://www.prisma.io/'
    }
  ]

  return (
    <section>
      <div className='container max-w-4xl justify-center border-b py-20'>
        <h1 className='mb-4 text-3xl font-semibold'>
          {t('cinephoria-page.title')}
        </h1>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('cinephoria-page.intro')}</p>
          <p className='italic'>{t('cinephoria-page.disclaimer')}</p>
        </div>
      </div>

      <div className='flex justify-center border-t pb-16'>
        <div className='mt-4 w-full max-w-4xl'>
          <ProjectLayout content={projectContent} />
          <div className='mt-8 flex justify-center'>
            <Button
              variant='custom'
              size='custom'
              className='w-fit'
              onClick={() =>
                window.open(
                  'https://cinephoria-frontend.onrender.com/',
                  '_blank'
                )
              }
            >
              {t('cinephoria-page.see_project')}
            </Button>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 text-2xl font-semibold'>
            {t('cinephoria-page.technologies')}
          </h2>
          <IconsCard items={technologies} />
        </div>
      </div>
    </section>
  )
}

export default CinephoriaPage
