'use client'

import { Button } from '@/src/components/ui/button'
import { IconsCard } from '@/src/components/ui/card-icons'
import RevealWords from '@/src/components/ui/reveal-words'
import { MinimalCard } from '@/src/components/ui/minimal-card'

import AvailableBadge from '@/src/components/ui/available-badge'
import { useTranslations } from 'next-intl'

const items = [
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
  { image: '/nextjs.svg', alt: 'Next.js', link: 'https://nextjs.org/' },
  {
    image: '/typescript.svg',
    alt: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  { image: '/nodejs.svg', alt: 'Node.js', link: 'https://nodejs.org/' },
  { image: '/mongodb.svg', alt: 'MongoDB', link: 'https://www.mongodb.com/' },
  {
    image: '/wordpress.svg',
    alt: 'WordPress',
    link: 'https://fr.wordpress.org/'
  },
  {
    image: '/woocommerce.svg',
    alt: 'WooCommerce',
    link: 'https://woocommerce.com/'
  },
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

export default function Home() {
  const t = useTranslations('home-page')
  const revealWords = [
    t('reveal-words.modern'),
    t('reveal-words.secure'),
    t('reveal-words.powerful'),
    t('reveal-words.responsive'),
    t('reveal-words.scalable')
  ]
  const cards = [
    {
      title: 'Cinéphoria',
      description: t('cinephoria_description'),
      src: '/cinephoria-home.webp',
      badges: ['React', 'Node.js'],
      link: '/projects/cinephoria'
    },
    {
      title: 'Alpha Santé',
      description: t('alpha-sante_description'),
      src: '/alpha-sante-home.webp',
      badges: ['WordPress'],
      link: '/projects/alpha-sante'
    },
    {
      title: `J'imagine Hier`,
      description: t('jimagine-hier_description'),
      src: '/jimagine-hier-home.webp',
      badges: ['WordPress'],
      link: '/projects/jimagine-hier'
    },
    {
      title: `Jeremy Dan`,
      description: t('jeremy-dan_description'),
      src: '/jeremydan-home.webp',
      badges: ['Next.js', 'TypeScript'],
      link: '/projects/jeremydan'
    }
  ]
  return (
    <section className=''>
      <div className='container mx-auto max-w-4xl border-b py-16'>
        <h1 className='mb-4 text-center text-6xl leading-tight text-muted-foreground md:text-left'>
          {t('hero_title')}{' '}
          <RevealWords
            words={revealWords}
            className='text-primary-foreground'
          />
        </h1>
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
      <div className='container flex justify-center py-16'>
        <div className='w-full max-w-4xl'>
          <div>
            <h2 className='mb-4 text-2xl font-semibold'>
              {t('projects_title')}
            </h2>
          </div>
          <div className='flex flex-col justify-center space-y-4 rounded-lg'>
            <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {cards.map((card, index) => (
                <MinimalCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  src={card.src}
                  badges={card.badges}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='w-full max-w-4xl'>
          <h2 className='mb-4 text-2xl font-semibold'>
            {t('technologies_title')}
          </h2>
          <IconsCard items={items} />
        </div>
      </div>
    </section>
  )
}
