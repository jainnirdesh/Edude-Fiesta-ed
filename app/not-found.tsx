'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-white flex-1">
        <div className="max-w-7xl mx-auto text-center space-y-8 py-20">
          <div className="space-y-4">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Page Not Found</h2>
            <p className="text-xl text-foreground/70 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
