'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ContactModal from '@/src/components/contact-modal'

interface AvailabilityBadgeProps {
  className?: string
  onClick?: () => void
  text: string
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  className,
  onClick,
  text
}) => {
  return (
    <ContactModal>
      <div
        className={`inline-flex h-fit cursor-pointer items-center rounded-full border border-white/20 px-3 py-1 text-sm font-medium text-white ${className || ''}`}
        onClick={onClick}
      >
        <motion.span
          className='mr-2 h-2 w-2 rounded-full bg-green-400'
          animate={{
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {text}
      </div>
    </ContactModal>
  )
}

export default AvailabilityBadge
