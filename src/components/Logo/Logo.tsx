import clsx from 'clsx'
import React from 'react'

import { brand } from '@/brand/brand'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'font-semibold text-xl tracking-tight text-foreground',
        className,
      )}
    >
      {brand.name}
    </span>
  )
}
