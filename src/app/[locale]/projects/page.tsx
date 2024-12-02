'use client'

import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'

interface Card {
  title: string
  subtitle: string
  description: string
  image: string
  href: string
}

export default function Projets() {
  const t = useTranslations('projects-page')
  const cards: Card[] = [
    {
      title: 'Cinéphoria',
      subtitle: t('subtitles.cinephoria'),
      description: t('projects.cinephoria.description'),
      image: '/cinephoria.webp',
      href: '/projects/cinephoria'
    },
    {
      title: 'Alpha Santé',
      subtitle: t('subtitles.alpha-sante'),
      description: t('projects.alpha-sante.description'),
      image: '/alpha-sante.webp',
      href: '/projects/alpha-sante'
    },
    {
      title: `J'imagine Hier`,
      subtitle: t('subtitles.jimagine-hier'),
      description: t('projects.jimagine-hier.description'),
      image: '/jimagine-hier.webp',
      href: '/projects/jimagine-hier'
    },
    {
      title: `Jeremy Dan`,
      subtitle: t('subtitles.jeremy-dan'),
      description: t('projects.jeremydan.description'),
      image: '/jeremydan.webp',
      href: '/projects/jeremydan'
    }
  ]
  return (
    <section>
      <div className='container mx-auto max-w-4xl justify-center py-20'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('title')}</h2>
        <div className='space-y-6 text-muted-foreground'>
          <p>{t('description')}</p>
        </div>
      </div>
      <div className='container flex flex-wrap border-t pt-16'>
        {cards.map((card, index) => (
          <div key={index} className='group relative w-full p-4 sm:w-1/2'>
            <Link href={card.href}>
              <div
                className='h-64 w-full transform bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105'
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-50'>
                <h3 className='text-4xl font-bold text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  {card.title}
                </h3>
                <p className='text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  {card.subtitle}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
