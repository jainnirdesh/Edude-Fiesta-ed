'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function PreviousEditions() {
  const [selectedEdition, setSelectedEdition] = useState<number | null>(null)

  const editions = [
    {
      id: 1,
      title: 'EDUDE FIESTA 1.0',
      year: '2023',
      theme: 'Cultural Harmony & Educational Unity',
      description: 'The inaugural celebration that started it all, bringing together students from across India for a remarkable cultural experience.',
      stats: {
        universities: '25+',
        participants: '5,000+',
        performances: '40+',
      },
      highlights: [
        'Grand opening ceremony',
        'State performances showcase',
        'Inter-university competitions',
        'Cultural exchange programs',
        'Bonfire celebrations',
      ],
    },
    {
      id: 2,
      title: 'EDUDE FIESTA 2.0',
      year: '2024',
      theme: 'Global Perspectives, Local Traditions',
      description: 'Going international, this edition welcomed universities from across the globe, making it truly a world-class cultural festival.',
      stats: {
        universities: '50+',
        participants: '8,000+',
        performances: '60+',
      },
      highlights: [
        'International university delegations',
        'Red Bull artist performance',
        'EDM night celebration',
        'Global cultural fusion',
        'Multi-country collaborations',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent to-accent/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Previous Editions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Celebrating the success and growth of EDUDE FIESTA through the years
          </p>
        </div>
      </section>

      {/* Timeline Growth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Our Growth Story</h2>
            <p className="text-lg text-foreground/70">Year after year, reaching new heights</p>
          </div>

          <div className="space-y-8">
            {editions.map((edition, idx) => (
              <div
                key={edition.id}
                className="border-2 border-border rounded-2xl overflow-hidden hover:border-primary transition-all cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedEdition(selectedEdition === edition.id ? null : edition.id)}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-colors">
                  <div className="md:col-span-2 space-y-2">
                    <h3 className="text-3xl font-bold text-primary">{edition.title}</h3>
                    <p className="text-secondary font-semibold text-lg">{edition.year}</p>
                    <p className="text-foreground/70 text-sm">{edition.theme}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {Object.entries(edition.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs uppercase tracking-widest text-foreground/60 font-semibold">{key}</p>
                        <p className="text-2xl font-bold text-secondary">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-end">
                    <ChevronRight className={`text-primary transition-transform ${selectedEdition === edition.id ? 'rotate-90' : ''}`} size={32} />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedEdition === edition.id && (
                  <div className="p-8 bg-white border-t-2 border-border space-y-6">
                    <p className="text-lg text-foreground/70 leading-relaxed">{edition.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-primary">Highlights</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edition.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-secondary font-bold text-xl mt-1">•</span>
                            <span className="text-foreground/70">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                        View Gallery
                      </Button>
                      <Button variant="outline" className="border-2 border-primary text-primary">
                        Watch Videos
                      </Button>
                      <Button variant="outline" className="border-2 border-secondary text-secondary">
                        Download Report
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">The Progression</h2>
            <p className="text-lg text-foreground/70">Growing bigger and better with each edition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 space-y-6">
              <h3 className="text-2xl font-bold text-primary">Participation Growth</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground/70">Edition 1.0</span>
                    <span className="font-bold text-primary">5,000+ participants</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground/70">Edition 2.0</span>
                    <span className="font-bold text-primary">8,000+ participants</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 space-y-6">
              <h3 className="text-2xl font-bold text-secondary">International Expansion</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/70">Countries Represented</span>
                  <span className="text-3xl font-bold text-secondary">From 1 to 12+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/70">University Partnerships</span>
                  <span className="text-3xl font-bold text-accent">From 25+ to 50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Experience the Legacy</h2>
            <p className="text-lg text-white/80">Be part of the biggest cultural celebration yet</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              View 2025 Edition
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              See Gallery
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
