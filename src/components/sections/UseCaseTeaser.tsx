import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface UseCaseTeaserProps {
  title?: string
  industry?: string
  description?: string
  href?: string
  stats?: {
    label: string
    value: string
  }[]
}

export const UseCaseTeaser: React.FC<UseCaseTeaserProps> = ({
  title = 'Perfect for wedding photographers',
  industry = 'Wedding Photography',
  description = 'Never miss an inquiry from excited couples. Our AI handles initial consultations, checks availability, and books discovery calls while you focus on capturing memories.',
  href = '/use-cases/wedding-photographers',
  stats = [
    { label: 'Inquiries captured', value: '100%' },
    { label: 'Response time', value: '<1 min' },
    { label: 'Bookings increased', value: '+40%' },
  ],
}) => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Use Case: {industry}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8 max-w-md">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button asChild variant="outline">
            <Link href={href}>
              Learn more
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
