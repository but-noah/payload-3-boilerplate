import Link from 'next/link'
import React from 'react'

import { brand } from '@/brand/brand'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Left: Logo and copyright */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {brand.companyName}. All rights reserved.
            </p>
          </div>

          {/* Right: Legal links and theme */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <nav className="flex flex-wrap gap-4">
              {brand.nav.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeSelector />
          </div>
        </div>

        {/* Contact */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Questions?{' '}
            <a
              href={`mailto:${brand.legalEmail}`}
              className="underline hover:text-foreground transition-colors"
            >
              {brand.legalEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
