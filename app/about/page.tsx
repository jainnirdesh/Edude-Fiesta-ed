'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">About EDUDE FIESTA</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A journey of cultural celebration, educational excellence, and global unity
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Our Journey</h2>
            <p className="text-lg text-foreground/70">From vision to a global celebration</p>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                  <span className="text-secondary font-bold">EDUDE FIESTA 1.0</span>
                </div>
                <h3 className="text-3xl font-bold text-primary">The Beginning</h3>
                <p className="text-foreground/70 leading-relaxed">
                  EDUDE FIESTA 1.0 marked the inaugural celebration of cultural diversity and educational excellence at K.R. Mangalam University. With participation from multiple Indian states and universities, this groundbreaking event set the stage for future celebrations.
                </p>
              </div>
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl"></div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
                  <span className="text-accent font-bold">EDUDE FIESTA 2.0</span>
                </div>
                <h3 className="text-3xl font-bold text-primary">Going Global</h3>
                <p className="text-foreground/70 leading-relaxed">
                  EDUDE FIESTA 2.0 expanded the vision internationally, welcoming universities and artists from across the globe. This edition showcased spectacular performances, inter-university competitions, and established KRMU as a hub for cultural excellence.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                  <span className="text-primary font-bold">EDUDE FIESTA 3.0</span>
                </div>
                <h3 className="text-3xl font-bold text-secondary">The Next Chapter</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Building on the success of previous editions, EDUDE FIESTA 2025 promises to be the most spectacular celebration yet, with enhanced performances, global collaborations, and innovative experiences.
                </p>
              </div>
              <div className="h-64 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 space-y-4">
              <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To celebrate and promote cultural diversity, educational excellence, and global unity through a vibrant platform that brings together students, artists, and cultures from around the world.
              </p>
            </div>

            <div className="glass p-12 space-y-4">
              <h3 className="text-3xl font-bold text-secondary">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To create a world where cultural exchange and educational collaboration transcend borders, fostering mutual respect, understanding, and appreciation among diverse communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Our Impact</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '12+', label: 'Countries Participated' },
              { stat: '28', label: 'Indian States Represented' },
              { stat: '50+', label: 'Universities Involved' },
              { stat: '10K+', label: 'Participants & Attendees' },
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 text-center space-y-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl font-bold">{item.stat}</div>
                <p className="text-white/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Message from Leadership</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                "EDUDE FIESTA represents the core values of K.R. Mangalam University - excellence, diversity, and global perspective. It is a platform where students don't just learn about different cultures; they experience them, celebrate them, and grow through them. As we move into 2025, we are excited to welcome the world to our campus and share in this magnificent celebration."
              </p>
              <div>
                <p className="font-bold text-primary">Nirdesh Jain</p>
                <p className="text-foreground/60">President, K.R. Mangalam University</p>
              </div>
            </div>
            <div className="h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
