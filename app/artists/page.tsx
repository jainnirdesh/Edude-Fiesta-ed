'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Artists() {
  const artists = [
    {
      id: 1,
      name: 'Red Bull Artist',
      type: 'Performance Artist',
      description: 'International high-energy performer bringing cutting-edge entertainment and innovation to the stage with spectacular visual displays and interactive performances.',
      bio: 'Known worldwide for groundbreaking performances that blend technology, acrobatics, and artistic expression. Has performed at major festivals and events globally.',
      image: 'bg-gradient-to-br from-secondary to-orange-600',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      id: 2,
      name: 'EDM DJ Night',
      type: 'Electronic Music Producer',
      description: 'World-class electronic music producers bringing premium EDM entertainment from 7-10 PM on Day 2. Experience cutting-edge beats, production, and an electrifying atmosphere.',
      bio: 'A collective of international DJs known for their high-energy sets and seamless mixing. Regular performers at major music festivals across Europe and Asia.',
      image: 'bg-gradient-to-br from-accent to-yellow-600',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      id: 3,
      name: 'Closing Artist',
      type: 'Cultural Icon',
      description: 'The grand finale artist bringing the festival to a spectacular conclusion on Day 3 evening. A special performance combining art, music, and cultural storytelling.',
      bio: 'A celebrated artist whose work bridges contemporary and traditional art forms. Brings a unique perspective on cultural expression and global unity.',
      image: 'bg-gradient-to-br from-primary to-blue-700',
      videoId: 'dQw4w9WgXcQ',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-secondary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Featured Artists</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            World-class performances and entertainment across three spectacular days
          </p>
        </div>
      </section>

      {/* Artists Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {artists.map((artist, idx) => (
            <div key={artist.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Image/Visual */}
                <div className={`h-96 ${artist.image} rounded-2xl shadow-2xl hover:shadow-3xl transition-all`}></div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm">{artist.type}</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary">{artist.name}</h2>
                  </div>

                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {artist.description}
                  </p>

                  <div className="glass p-6 space-y-3">
                    <p className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">About the Artist</p>
                    <p className="text-foreground/70 leading-relaxed">
                      {artist.bio}
                    </p>
                  </div>

                  {/* Performance Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Performance Type</p>
                      <p className="text-lg font-semibold text-primary">{artist.type}</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Event</p>
                      <p className="text-lg font-semibold text-primary">EDUDE FIESTA 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teaser Video */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black hover:shadow-2xl transition-all group">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${artist.videoId}`}
                  title={`${artist.name} Teaser`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="group-hover:scale-105 transition-transform duration-300"
                ></iframe>
              </div>

              {idx < artists.length - 1 && (
                <div className="mt-20 border-b-2 border-border"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Performance Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Performance Schedule</h2>
            <p className="text-lg text-foreground/70">When to catch your favorite artists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: 'Day 1',
                date: 'March 15, 2025',
                artist: 'Opening Acts',
                time: 'Throughout the day',
                desc: 'Cultural performances and state showcases'
              },
              {
                day: 'Day 2',
                date: 'March 16, 2025',
                artist: 'EDM DJ Night',
                time: '7:00 PM - 10:00 PM',
                desc: 'High-energy electronic music performances'
              },
              {
                day: 'Day 3',
                date: 'March 17, 2025',
                artist: 'Closing Performance',
                time: '7:00 PM onwards',
                desc: 'Grand finale with special artist'
              },
            ].map((perf, idx) => (
              <div key={idx} className="glass p-8 space-y-4 hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="space-y-1">
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">{perf.day}</p>
                  <p className="text-foreground/60 text-sm">{perf.date}</p>
                </div>
                <h3 className="text-2xl font-bold text-primary">{perf.artist}</h3>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{perf.time}</p>
                  <p className="text-white/70 text-sm">{perf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Don't Miss Out</h2>
            <p className="text-lg text-white/80">Secure your spot for these incredible performances</p>
          </div>
          <button className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg text-lg transition-all">
            Register Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
