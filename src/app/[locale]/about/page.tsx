'use client'
import React from 'react'
import { Button } from '@/src/components/ui/button'
import Image from 'next/image'
import AvailableBadge from '@/src/components/ui/available-badge'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about-page')
  return (
    <section>
      <div className='container max-w-4xl px-6 pt-16'>
        <div className='mb-12 overflow-hidden rounded-lg border border-muted p-6'>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='mb-6 md:mb-0 md:mr-8'>
              <Image
                src='/profile-picture.webp'
                alt='Profile Picture'
                width={200}
                height={200}
                className='rounded-full'
              />
            </div>
            <div>
              <h2 className='mb-4 text-2xl font-semibold'>Jérémy L'homme</h2>
              <p className='text-muted-foreground'>{t('title')}</p>
            </div>
          </div>
        </div>

        <div className='space-y-6 text-muted-foreground'>
          {' '}
          <p>
            {t('description')}{' '}
            <a
              href='https://jeremydan.fr'
              target='_blank'
              className='underline'
            >
              {t('wedding-photographer')}
            </a>
            .{' '}
          </p>
        </div>
        <div className='mt-8 flex flex-col items-center md:flex-row md:items-center'>
          <a href='/cv-jeremy-lhomme.pdf' download>
            <Button
              variant='custom'
              size='custom'
              className='mb-8 w-fit md:mb-0 md:mr-8'
            >
              {t('cv_button')}
            </Button>
          </a>
          <AvailableBadge text={t('available_button')} />
        </div>
      </div>
    </section>
  )
}