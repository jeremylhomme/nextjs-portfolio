'use client'

import { cn } from '@/src/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export const IconsCard = ({
  items,
  className
}: {
  items: {
    image: string
    alt: string
    link: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('flex flex-wrap justify-start gap-4', className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className='group relative block h-20 w-20'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 block h-full w-full rounded-2xl bg-muted'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image
              src={item.image}
              alt={item.alt}
              width={30}
              height={30}
              className='mx-auto'
            />
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border p-4',
        className
      )}
    >
      <div className='relative z-50'>{children}</div>
    </div>
  )
}
