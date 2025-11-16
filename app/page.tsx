'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date('2026-02-25').getTime()
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setCountdownTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        })
      }
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const countries = ['🇮🇳', '🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇸🇬', '🇯🇵', '🇩🇪', '🇫🇷', '🇮🇹', '🇪🇸', '🇲🇦']

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-secondary font-semibold text-sm uppercase tracking-widest">
                  Welcome to 2025
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-primary">
                  EDUDE FIESTA 2025
                </h1>
                <p className="text-2xl font-semibold text-secondary">
                  Where Education Meets Culture
                </p>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                International Cultural & Educational Festival by K.R. Mangalam University. Celebrate diversity, unity, and excellence with 12+ countries and Indian states.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/registration">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 h-12">
                    Register Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 h-12">
                  Explore 2025
                </Button>
              </div>

              {/* Animated Flags */}
              <div className="pt-8 space-y-3">
                <p className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">Participating Countries</p>
                <div className="flex flex-wrap gap-3">
                  {countries.map((flag, idx) => (
                    <div
                      key={idx}
                      className="text-4xl animate-float"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {flag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-20"></div>
              <img
                src="/festival-celebration-dance.jpg"
                alt="Festival celebration"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all cursor-pointer">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Event Countdown</h2>
            <p className="text-lg text-white/80">Mark your calendar for the festival of a lifetime</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: countdownTime.days, label: 'Days' },
              { value: countdownTime.hours, label: 'Hours' },
              { value: countdownTime.minutes, label: 'Minutes' },
              { value: countdownTime.seconds, label: 'Seconds' },
            ].map((item, idx) => (
              <div key={idx} className="glass space-y-2 py-8">
                <div className="text-4xl sm:text-5xl font-bold">{String(item.value).padStart(2, '0')}</div>
                <div className="text-white/70 text-sm sm:text-base uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Global Unity</h3>
              <p className="text-foreground/70">Connect with cultures from around the world and celebrate global diversity.</p>
            </div>

            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Educational Excellence</h3>
              <p className="text-foreground/70">Learn, grow, and expand your horizons through cultural exchange.</p>
            </div>

            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Cultural Expression</h3>
              <p className="text-foreground/70">Witness spectacular performances and celebrate artistic traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Event Highlights</h2>
            <p className="text-lg text-foreground/70">What to expect at EDUDE FIESTA 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Grand Pride March', desc: '10+ International Universities & 12 Indian States' },
              { title: 'International Dance', desc: 'Global performances and cultural celebrations' },
              { title: 'State Performances', desc: 'Traditional and contemporary cultural showcases' },
              { title: 'EDM Night', desc: 'High-energy electronic music performances' },
              { title: 'Inter-University Competitions', desc: 'Dance, music, and art competitions' },
              { title: 'Artist Performances', desc: 'Red Bull Artist, EDM DJs, and collaborations' },
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 space-y-3 hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Experience EDUDE FIESTA?</h2>
            <p className="text-lg text-white/90">Join thousands of students from around the world for an unforgettable celebration</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 h-12">
                Register Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 h-12">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
