'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function Edition2025() {
  const [expandedDay, setExpandedDay] = useState(0)

  const schedule = [
    {
      day: 'Day 1',
      date: 'February 25, 2026',
      events: [
        { time: '10:00 AM', title: 'Grand Pride March', desc: '10+ international universities & 12 Indian states with 3-minute stop performances' },
        { time: '4:00 PM', title: 'Cultural Mixer Break', desc: 'Informal networking and cultural exchange' },
        { time: '7:00 PM', title: 'Bonfire Night', desc: 'Evening celebration with cultural performances' },
      ]
    },
    {
      day: 'Day 2',
      date: 'February 26, 2026',
      events: [
        { time: '10:00 AM', title: 'International University Performances', desc: 'Showcasing global talent and traditions' },
        { time: '2:00 PM', title: 'State Cultural Dance & Music', desc: '12 Indian states presenting their cultural heritage' },
        { time: '5:00 PM', title: 'Collaboration Sequence', desc: 'Joint performances between international and Indian artists' },
        { time: '7:00 PM', title: 'EDM Night', desc: 'Red Bull Artist & Electronic Dance Music performances' },
      ]
    },
    {
      day: 'Day 3',
      date: 'February 27, 2026',
      events: [
        { time: '10:00 AM', title: 'Mr. & Ms. Freshers Competition', desc: 'Celebrating the campus ambassadors' },
        { time: '1:00 PM', title: 'Inter-University Competitions', desc: 'Dance, music, and art competitions' },
        { time: '4:00 PM', title: 'Prize Distribution', desc: 'Celebrating all winners and participants' },
        { time: '7:00 PM', title: 'Artist Night - Closing Ceremony', desc: 'Grand finale with special artist performance' },
      ]
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-secondary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">EDUDE FIESTA 2025</h1>
          <p className="text-2xl font-semibold">Global Culture, One Stage</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join us for three days of spectacular performances, competitions, and celebrations
          </p>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: 'Dates', value: 'February 25-27, 2026' },
              { label: 'Venue', value: 'K.R. Mangalam University Campus, Delhi' },
              { label: 'Theme', value: 'Global Culture, One Stage' },
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 space-y-2 text-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm">{item.label}</p>
                <p className="text-2xl font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Festival Poster */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold">EDUDE FIESTA 2025</h2>
                <p className="text-2xl font-semibold">Global Culture, One Stage</p>
                <p className="text-lg">February 25-27, 2026 | K.R. Mangalam University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Event Schedule</h2>
            <p className="text-lg text-foreground/70">Three days of spectacular celebrations</p>
          </div>

          <div className="space-y-4">
            {schedule.map((daySchedule, dayIdx) => (
              <div key={dayIdx} className="border-2 border-border rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: `${dayIdx * 0.1}s` }}>
                <button
                  onClick={() => setExpandedDay(expandedDay === dayIdx ? -1 : dayIdx)}
                  className="w-full p-6 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 flex items-center justify-between transition-all"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-primary">{daySchedule.day}</h3>
                    <p className="text-foreground/60">{daySchedule.date}</p>
                  </div>
                  <ChevronDown className={`transition-transform ${expandedDay === dayIdx ? 'rotate-180' : ''}`} size={24} />
                </button>

                {expandedDay === dayIdx && (
                  <div className="p-6 bg-white space-y-4 border-t-2 border-border">
                    {daySchedule.events.map((event, idx) => (
                      <div key={idx} className="space-y-2 pb-4 border-b border-border last:border-b-0 last:pb-0">
                        <div className="flex items-baseline gap-4">
                          <span className="font-bold text-secondary text-lg">{event.time}</span>
                          <h4 className="text-xl font-bold text-primary">{event.title}</h4>
                        </div>
                        <p className="text-foreground/70 ml-24">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-foreground/60 text-center mt-8">
            Note: Day 3 events are open to Indian university teams only
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Featured Artists</h2>
            <p className="text-lg text-foreground/70">World-class performances await you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Red Bull Artist', desc: 'International performance artist bringing high-energy entertainment' },
              { name: 'EDM DJ Night', desc: 'Electronic Dance Music featuring top international DJs' },
              { name: 'Closing Artist', desc: 'Special artist performance for the grand finale' },
            ].map((artist, idx) => (
              <div key={idx} className="glass p-8 space-y-4 hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-lg"></div>
                <h3 className="text-2xl font-bold text-primary">{artist.name}</h3>
                <p className="text-foreground/70">{artist.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Join EDUDE FIESTA 2025</h2>
            <p className="text-lg text-white/80">Register now to be part of this global celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Universities', desc: 'Register your delegation' },
              { label: 'Performers', desc: 'Showcase your talent' },
              { label: 'Volunteers', desc: 'Help us organize' },
            ].map((item, idx) => (
              <Button key={idx} size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold h-12" asChild>
                <Link href="/registration">
                  Register as {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
