import React from 'react'
import Link from 'next/link'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

interface FinalCTAProps {
  title?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  title = 'Ready to never miss a lead again?',
  description = 'Join businesses that trust AI to handle their calls professionally, 24/7.',
  primaryCTA = { label: brand.primaryCTA, href: '/contact' },
  secondaryCTA = { label: brand.secondaryCTA, href: brand.calendarUrl },
}) => {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
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
