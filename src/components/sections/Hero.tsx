import React from 'react'
import Link from 'next/link'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
}

export const Hero: React.FC<HeroProps> = ({
  title = brand.tagline,
  subtitle = 'Never miss another call. Our AI voice receptionists handle inquiries, book appointments, and qualify leads 24/7.',
  primaryCTA = { label: brand.primaryCTA, href: '/contact' },
  secondaryCTA = { label: brand.secondaryCTA, href: brand.calendarUrl },
}) => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
