import React from 'react'
import { Link } from '@/src/navigation'
import { cn } from '@/src/lib/utils'

interface MinimalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  src?: string
  badges?: string[]
  link?: string
  isExternal?: boolean
}

const MinimalCard = React.forwardRef<HTMLDivElement, MinimalCardProps>(
  (
    { className, title, description, src, badges, link, isExternal, ...props },
    ref
  ) => {
    const content = (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg',
          className
        )}
        {...props}
      >
        {src && (
          <MinimalCardImage src={src} alt={`Project image for ${title}`} />
        )}
        <MinimalCardTitle>{title}</MinimalCardTitle>
        {description && (
          <MinimalCardDescription>{description}</MinimalCardDescription>
        )}

        {badges && (
          <MinimalCardBadges>
            {badges.map((badge, index) => (
              <span
                key={index}
                className='bg-secondary p-2 text-xs leading-none text-secondary-foreground'
              >
                {badge}
              </span>
            ))}
          </MinimalCardBadges>
        )}
      </div>
    )

    if (link) {
      if (isExternal) {
        return (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            {content}
          </a>
        )
      } else {
        return (
          <Link href={link} className='block'>
            {content}
          </Link>
        )
      }
    }

    return content
  }
)
MinimalCard.displayName = 'MinimalCard'

const MinimalCardImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => <img className={cn('mb-4 w-full rounded-md', className)} {...props} />

const MinimalCardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => <h3 className={cn('mb-2 text-lg font-semibold', className)} {...props} />

const MinimalCardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...props }) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)

const MinimalCardBadges: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('mt-4 flex flex-wrap gap-2', className)} {...props} />

export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardBadges
}
