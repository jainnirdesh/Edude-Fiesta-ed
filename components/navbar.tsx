'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: '2025 Edition', href: '/2025-edition' },
    { label: 'Previous Editions', href: '/previous-editions' },
    { label: 'Universities', href: '/universities' },
    { label: 'Artists', href: '/artists' },
    { label: 'Competitions', href: '/competitions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-lg">EF</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-primary group-hover:text-secondary transition-colors">EDUDE FIESTA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(item.href)
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Link href="/registration">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-lg">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-in-right">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/registration" className="w-full block">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
