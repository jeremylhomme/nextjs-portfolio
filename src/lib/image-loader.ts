interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith('http')) {
    return src
  }
  return `${process.env.NEXT_PUBLIC_SITE_URL || ''}${src}?w=${width}&q=${quality || 75}`
}
