import React from 'react'
import Link from 'next/link'
import { Calendar, Mail, Phone } from 'lucide-react'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

interface ContactProps {
  title?: string
  subtitle?: string
}

export const Contact: React.FC<ContactProps> = ({
  title = 'Get in touch',
  subtitle = 'Ready to transform how you handle calls? Book a demo or reach out directly.',
}) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Book a demo */}
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
            <h2 className="font-semibold text-lg mb-2">Book a demo</h2>
            <p className="text-sm text-muted-foreground mb-6">
              See our AI receptionist in action with a personalized demo.
            </p>
            <Button asChild className="w-full">
              <Link href={brand.calendarUrl}>{brand.secondaryCTA}</Link>
            </Button>
          </div>

          {/* Call us */}
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <Phone className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
            <h2 className="font-semibold text-lg mb-2">Call our demo line</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Experience our AI receptionist firsthand by calling now.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href={`tel:${brand.demoPhone.replace(/\D/g, '')}`}>
                {brand.demoPhone}
              </Link>
            </Button>
          </div>
        </div>

        {/* Email fallback */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <Mail className="w-4 h-4 inline-block mr-1" />
            Or email us at{' '}
            <a
              href={`mailto:${brand.legalEmail}`}
              className="underline hover:text-foreground transition-colors"
            >
              {brand.legalEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
