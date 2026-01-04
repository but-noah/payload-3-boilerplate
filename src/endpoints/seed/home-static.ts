import type { Page } from '@/payload-types'
import { brand } from '@/brand/brand'

// Used for pre-seeded content so that the homepage is not empty
// @ts-expect-error
export const homeStatic: Page = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'mediumImpact',
    richText: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: brand.tagline,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Never miss another call. Our AI voice receptionists handle inquiries, book appointments, and qualify leads 24/7.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    links: [
      {
        link: {
          type: 'custom',
          appearance: 'default',
          label: brand.primaryCTA,
          url: '/contact',
        },
      },
      {
        link: {
          type: 'custom',
          appearance: 'outline',
          label: brand.secondaryCTA,
          url: brand.calendarUrl,
        },
      },
    ],
  },
  layout: [],
  meta: {
    description: brand.seo.defaultDescription,
    title: brand.seo.defaultTitle,
  },
  title: 'Home',
}
