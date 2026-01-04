import type { Metadata } from 'next'

import { brand } from '@/brand/brand'
import { Pricing, FAQ, FinalCTA } from '@/components/sections'

export const metadata: Metadata = {
  title: `Pricing | ${brand.name}`,
  description: 'Simple, transparent pricing for AI voice receptionists. Choose the plan that fits your business.',
}

export default function PricingPage() {
  return (
    <main>
      <Pricing />
      <FAQ
        title="Pricing questions"
        items={[
          {
            question: 'Is there a free trial?',
            answer:
              'Yes, all plans include a 14-day free trial. No credit card required to start.',
          },
          {
            question: 'What happens if I go over my included calls?',
            answer:
              'Additional usage is billed at $0.15 per minute. You can monitor your usage in real-time from your dashboard.',
          },
          {
            question: 'Can I change plans later?',
            answer:
              'Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.',
          },
          {
            question: 'What is the setup fee for?',
            answer:
              'The one-time setup fee covers custom configuration of your AI receptionist, including voice training, script development, and integration with your existing systems.',
          },
          {
            question: 'Do you offer annual billing?',
            answer:
              'Yes, annual billing is available with a 20% discount. Contact us for details.',
          },
        ]}
      />
      <FinalCTA />
    </main>
  )
}
