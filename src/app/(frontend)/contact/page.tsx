import type { Metadata } from 'next'

import { brand } from '@/brand/brand'
import { Contact } from '@/components/sections'

export const metadata: Metadata = {
  title: `Contact | ${brand.name}`,
  description: 'Get in touch with us. Book a demo or reach out directly to learn how AI voice receptionists can help your business.',
}

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  )
}
