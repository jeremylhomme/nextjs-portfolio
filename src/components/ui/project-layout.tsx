'use client'
import React from 'react'
import { cn } from '@/src/lib/utils'
import Image from 'next/image'

export const ProjectLayout = ({
  content,
  contentClassName
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
    image: string
    alt?: string
  }[]
  contentClassName?: string
}) => {
  return (
    <div className={cn(contentClassName)}>
      <div className='container mx-auto'>
        {content.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col items-center gap-8 lg:flex-row ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Left Column (Text) */}
            <div className='w-full space-y-4 lg:w-1/2'>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <p className='mt-4 text-muted-foreground'>{item.description}</p>
            </div>

            {/* Right Column (Image with Responsive Height) */}
            <div className='w-full lg:w-1/2'>
              <div className='relative aspect-[4/3] w-full'>
                <Image
                  src={item.image}
                  alt={item.alt || ''}
                  fill
                  className='rounded-lg object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
