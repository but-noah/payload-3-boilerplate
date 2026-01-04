import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

import { brand } from '@/brand/brand'
import { Button } from '@/components/ui/button'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  highlighted?: boolean
}

const defaultTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for solo professionals and small businesses.',
    features: [
      'AI receptionist (business hours)',
      'Up to 100 calls/month included',
      'Basic call routing',
      'Email notifications',
      'Standard voice',
    ],
    cta: { label: 'Get started', href: '/contact' },
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing businesses that need 24/7 coverage.',
    features: [
      'AI receptionist (24/7)',
      'Up to 500 calls/month included',
      'Advanced call routing',
      'Calendar integration',
      'Custom voice & scripts',
      'Priority support',
    ],
    cta: { label: 'Get started', href: '/contact' },
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For businesses with high volume or custom needs.',
    features: [
      'Unlimited AI receptionists',
      'Unlimited calls',
      'Multi-location support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: { label: 'Contact sales', href: '/contact' },
  },
]

interface PricingProps {
  title?: string
  subtitle?: string
  tiers?: PricingTier[]
  setupFee?: string
  usageNote?: string
}

export const Pricing: React.FC<PricingProps> = ({
  title = 'Simple, transparent pricing',
  subtitle = 'Choose the plan that fits your business. All plans include a 14-day free trial.',
  tiers = defaultTiers,
  setupFee = '$199 one-time setup fee for all plans',
  usageNote = 'Additional usage billed at $0.15/minute after included calls.',
}) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 ${
                tier.highlighted
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span
                  className={
                    tier.highlighted ? 'text-background/70' : 'text-muted-foreground'
                  }
                >
                  {tier.period}
                </span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? 'text-background/80' : 'text-muted-foreground'
                }`}
              >
                {tier.description}
              </p>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-background' : 'text-foreground'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                variant={tier.highlighted ? 'secondary' : 'default'}
              >
                <Link href={tier.cta.href}>{tier.cta.label}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>{setupFee}</p>
          <p>{usageNote}</p>
        </div>
      </div>
    </section>
  )
}
