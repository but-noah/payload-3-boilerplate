/**
 * Brand Configuration
 *
 * Central configuration for all brand-related values.
 * To rebrand: update this file and follow the checklist in README.md
 */

export const brand = {
  // Core identity
  name: 'Eleven Works',
  tagline: 'AI Voice Receptionists that never miss a lead',
  companyName: 'Eleven Works',

  // CTAs
  primaryCTA: 'Call & test it live',
  secondaryCTA: 'Book a demo',

  // Contact
  demoPhone: '+1 (XXX) XXX-XXXX',
  calendarUrl: 'https://cal.com/',
  legalEmail: 'hello@elevenworks.io',

  // Navigation (neutral URLs for rebrand-readiness)
  nav: {
    main: [
      { label: 'Solution', href: '/solution' },
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
    footer: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Imprint', href: '/imprint' },
    ],
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | Eleven Works',
    defaultTitle: 'Eleven Works - AI Voice Receptionists',
    defaultDescription:
      'AI Voice Receptionists that never miss a lead. Automate your phone calls with intelligent voice AI.',
  },
} as const

export type Brand = typeof brand
