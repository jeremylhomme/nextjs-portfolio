'use client'

import React from 'react'
import { ProjectLayout } from '@/src/components/ui/project-layout'
import { IconsCard } from '@/src/components/ui/card-icons'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

const JeremyDanPage = () => {
  const t = useTranslations()
  const [isLoading, setIsLoading] = useState(true)
  const projectContent = [
    {
      title: t('jeremydan-page.subtitle-1'),
      description: t('jeremydan-page.description-1'),
      content: (
        <Image
          src='/jeremydan-logo.webp'
          fill
          alt='Logo Jeremy Dan'
          className='h-full w-full object-cover'
        />
      ),
      image: '/jeremydan-logo.webp',
      alt: 'Logo Jeremy Dan'
    },
    {
      title: t('jeremydan-page.subtitle-2'),
      description: t('jeremydan-page.description-2'),
      content: (
        <Image
          src='/jeremydan-home.webp'
          fill
          alt="Page d'accueil Jeremy Dan"
          className='h-full w-full object-cover'
        />
      ),
      image: '/jeremydan-home.webp',
      alt: "Page d'accueil Jeremy Dan"
    },
    {
      title: t('jeremydan-page.subtitle-3'),
      description: t('jeremydan-page.description-3'),
      content: (
        <Image
          src='/WD_C&A-552.webp'
          fill
          alt='Photo de mariage Jeremy Dan'
          className='h-full w-full object-cover'
        />
      ),
      image: '/WD_C&A-552.webp',
      alt: 'Photo de mariage Jeremy Dan'
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
      image: '/shadcn.svg',
      alt: 'Shadcn UI',
      link: 'https://ui.shadcn.com/'
    },
    {
      image: '/nextjs.svg',
      alt: 'Next.js',
      link: 'https://nextjs.org/'
    },
    {
      image: '/github.svg',
      alt: 'GitHub',
      link: 'https://github.com/'
    }
  ]

  return (
    <section>
      <div className='container max-w-4xl justify-center border-b py-20'>
        <h1 className='mb-4 text-2xl font-semibold'>
          {t('jeremydan-page.title')}
        </h1>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('jeremydan-page.intro')}</p>
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
              onClick={() => window.open('https://jeremydan.fr/', '_blank')}
            >
              {t('jeremydan-page.see-project')}
            </Button>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 text-2xl font-semibold'>
            {t('jeremydan-page.technologies')}
          </h2>
          <IconsCard items={technologies} />
        </div>
      </div>
    </section>
  )
}

export default JeremyDanPage
