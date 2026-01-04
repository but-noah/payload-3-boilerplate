# Eleven Works Website

A modern, minimalist marketing website built with Payload CMS V3, Next.js 15, and Tailwind CSS.

## Tech Stack

- **CMS**: Payload CMS V3
- **Frontend**: Next.js 15, React 19
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS, shadcn/ui
- **Hosting**: Railway

## Quick Start

### Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- PostgreSQL database

### Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your values:
   ```
   DATABASE_URI=postgres://postgres:postgres@localhost:5432/eleven-works
   PAYLOAD_SECRET=your-secret-key
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/(frontend)/     # Next.js pages
├── app/(payload)/      # Payload admin
├── brand/              # Brand configuration
├── collections/        # Payload collections
├── components/
│   ├── sections/       # Marketing page sections
│   └── ui/             # shadcn/ui components
├── blocks/             # Payload content blocks
├── heros/              # Hero section variants
└── Header/Footer/      # Global layout components
```

## Brand Configuration

All brand values are centralized in `src/brand/brand.ts`:

```typescript
export const brand = {
  name: 'Eleven Works',
  tagline: 'AI Voice Receptionists that never miss a lead',
  companyName: 'Eleven Works',
  primaryCTA: 'Call & test it live',
  secondaryCTA: 'Book a demo',
  demoPhone: '+1 (XXX) XXX-XXXX',
  calendarUrl: 'https://cal.com/',
  legalEmail: 'hello@elevenworks.io',
  // ... navigation and SEO config
}
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/solution` | Solution page (CMS) |
| `/use-cases/*` | Use case pages (CMS) |
| `/pricing` | Pricing page |
| `/contact` | Contact page |
| `/privacy`, `/terms`, `/imprint` | Legal pages (CMS) |

## Rebranding Guide

To rebrand from "Eleven Works" to "Kellner Digital" (or any other brand):

### 1. Update Brand Configuration

Edit `src/brand/brand.ts`:

```typescript
export const brand = {
  name: 'Kellner Digital',
  tagline: 'Your new tagline here',
  companyName: 'Kellner Digital',
  legalEmail: 'hello@kellner.digital',
  // Update other values as needed
}
```

### 2. Update Environment Variables

Update `NEXT_PUBLIC_SERVER_URL` in your environment to the new domain.

### 3. Update Favicon & Assets

Replace the following files:
- `public/favicon.ico`
- `public/favicon.svg`
- Any logo images in `public/`

### 4. Update CMS Content

1. Log into `/admin`
2. Update any hardcoded content in Pages
3. Update Header/Footer navigation if needed

### 5. Domain Switch Checklist

- [ ] Update DNS records
- [ ] Update `NEXT_PUBLIC_SERVER_URL` environment variable
- [ ] Update `brand.ts` with new email/phone
- [ ] Update SSL certificates
- [ ] Set up redirects from old domain (if applicable)
- [ ] Update external integrations (Cal.com, etc.)
- [ ] Test all forms and CTAs
- [ ] Update Google Search Console
- [ ] Update social media links

### Files to Review

| File | What to Change |
|------|----------------|
| `src/brand/brand.ts` | All brand values |
| `public/favicon.*` | Favicon files |
| `src/app/(frontend)/layout.tsx` | Uses brand config (auto) |
| `src/plugins/index.ts` | Uses brand config (auto) |
| CMS Content | Any hardcoded references |

## Customization

### Design System

Colors and styling are configured in:
- `src/app/(frontend)/globals.css` - CSS variables
- `tailwind.config.mjs` - Tailwind theme

### Marketing Sections

Reusable marketing components in `src/components/sections/`:
- `Hero` - Main hero section
- `ValueProps` - Feature/benefit grid
- `HowItWorks` - Step-by-step process
- `LiveTestCTA` - Call-to-action with phone
- `UseCaseTeaser` - Industry use case highlight
- `FAQ` - Accordion FAQ
- `Pricing` - Pricing tiers
- `Contact` - Contact options
- `FinalCTA` - Bottom call-to-action

### Adding New Pages

1. For static pages: Create in `src/app/(frontend)/your-page/page.tsx`
2. For CMS pages: Create via Payload admin at `/admin`

## Deployment

### Railway

This project is optimized for Railway deployment:

1. Connect your repository to Railway
2. Add a PostgreSQL database
3. Set environment variables:
   - `DATABASE_URI`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SERVER_URL`
4. Deploy

### Media Storage

By default, media files are stored locally in `public/media/`. For production, consider configuring cloud storage (S3, Cloudflare R2, etc.) via Payload's storage adapters.

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix linting issues
```

## License

Private - All rights reserved.
