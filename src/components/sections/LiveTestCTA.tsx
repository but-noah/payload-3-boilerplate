import React from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

interface LiveTestCTAProps {
  title?: string
  description?: string
  phone?: string
}

export const LiveTestCTA: React.FC<LiveTestCTAProps> = ({
  title = 'Try it yourself',
  description = 'Call our demo line and experience how your customers will be greeted.',
  phone = brand.demoPhone,
}) => {
  return (
    <section className="py-16 md:py-20 bg-foreground text-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Phone className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg opacity-80 mb-8">{description}</p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-foreground"
          >
            <Link href={`tel:${phone.replace(/\D/g, '')}`}>
              <Phone className="w-5 h-5 mr-2" />
              {phone}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
