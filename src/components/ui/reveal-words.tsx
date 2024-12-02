'use client'

import { FC, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/src/lib/utils'

interface Props {
  words: string[]
  className?: string
}
const RevealWords: FC<Props> = ({ words, className }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <AnimatePresence mode='wait'>
      <motion.p
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className={cn('tracking-[-0.02em] drop-shadow-sm', className)}
      >
        {words[index]}
      </motion.p>
    </AnimatePresence>
  )
}

export default RevealWords
