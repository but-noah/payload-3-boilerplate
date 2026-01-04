'use client'

import React from 'react'
import Link from 'next/link'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

export const HeaderNav: React.FC = () => {
  return (
    <nav className="flex gap-6 items-center">
      {brand.nav.main.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <Button asChild size="sm">
        <Link href="/contact">{brand.primaryCTA}</Link>
      </Button>
    </nav>
  )
}
