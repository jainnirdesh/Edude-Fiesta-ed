'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronDown } from 'lucide-react'

export default function Competitions() {
  const [expandedComp, setExpandedComp] = useState(0)

  const competitions = [
    {
      id: 1,
      title: 'Mr. & Ms. Freshers',
      subtitle: 'Campus Ambassador Selection',
      description: 'A prestigious competition celebrating the most talented freshers on campus. Showcase your personality, talent, and leadership qualities.',
      rules: [
        'All first-year students are eligible to participate',
        'Participants must represent their respective institutions',
        'Competition includes talent showcase and interview rounds',
        'Winners will serve as brand ambassadors for KRMU',
      ],
      judgingCriteria: [
        'Personality and Confidence - 30%',
        'Talent and Performance - 40%',
        'Communication Skills - 20%',
        'Overall Presence - 10%',
      ],
      prizes: [
        { place: '1st Place', reward: '₹50,000 + Trophy' },
        { place: '2nd Place', reward: '₹30,000 + Trophy' },
        { place: '3rd Place', reward: '₹20,000 + Trophy' },
      ],
    },
    {
      id: 2,
      title: 'Inter-University Dance Competition',
      subtitle: 'Celebrating Movement and Expression',
      description: 'A high-energy dance competition where universities showcase their best dance teams. Classical, contemporary, fusion, and hip-hop categories available.',
      rules: [
        'Teams of 5-15 dancers per university',
        'Performance duration: 5-8 minutes',
        'All styles of dance are welcome',
        'Teams must register by the deadline',
      ],
      judgingCriteria: [
        'Choreography and Creativity - 35%',
        'Technical Execution - 30%',
        'Synchronization - 20%',
        'Stage Presence - 15%',
      ],
      prizes: [
        { place: '1st Place', reward: '₹1,00,000 + Trophy' },
        { place: '2nd Place', reward: '₹75,000 + Trophy' },
        { place: '3rd Place', reward: '₹50,000 + Trophy' },
      ],
    },
    {
      id: 3,
      title: 'Inter-University Music Competition',
      subtitle: 'Harmonizing Global Talent',
      description: 'Showcase musical excellence with instrumental and vocal performances. Solo artists and bands from participating universities compete for glory.',
      rules: [
        'Solo or group performances allowed',
        'Maximum group size: 10 members',
        'Performance duration: 4-7 minutes',
        'Backing tracks or live instruments permitted',
      ],
      judgingCriteria: [
        'Vocal/Instrumental Quality - 40%',
        'Musicality and Rhythm - 25%',
        'Arrangement and Composition - 20%',
        'Stage Performance - 15%',
      ],
      prizes: [
        { place: '1st Place', reward: '₹1,00,000 + Trophy' },
        { place: '2nd Place', reward: '₹75,000 + Trophy' },
        { place: '3rd Place', reward: '₹50,000 + Trophy' },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent to-accent/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Competitions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Showcase your talent and compete on the global stage
          </p>
        </div>
      </section>

      {/* Competitions Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {competitions.map((comp, idx) => (
            <div
              key={comp.id}
              className="border-2 border-border rounded-2xl overflow-hidden hover:border-secondary transition-all animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedComp(expandedComp === comp.id ? -1 : comp.id)}
                className="w-full p-8 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-primary">{comp.title}</h3>
                  <p className="text-foreground/60 text-lg mt-2">{comp.subtitle}</p>
                </div>
                <ChevronDown
                  className={`transition-transform flex-shrink-0 text-primary ${expandedComp === comp.id ? 'rotate-180' : ''}`}
                  size={32}
                />
              </button>

              {/* Expanded Content */}
              {expandedComp === comp.id && (
                <div className="p-8 bg-white border-t-2 border-border space-y-8">
                  {/* Description */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-primary">About</h4>
                    <p className="text-foreground/70 leading-relaxed text-lg">{comp.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Rules */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-primary">Rules</h4>
                      <ul className="space-y-2">
                        {comp.rules.map((rule, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-secondary font-bold flex-shrink-0">•</span>
                            <span className="text-foreground/70">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Judging Criteria */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-primary">Judging Criteria</h4>
                      <ul className="space-y-2">
                        {comp.judgingCriteria.map((criterion, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-accent font-bold flex-shrink-0">•</span>
                            <span className="text-foreground/70">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h4 className="text-xl font-bold text-primary">Prize Distribution</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {comp.prizes.map((prize, idx) => (
                        <div
                          key={idx}
                          className={`glass p-6 text-center space-y-3 ${
                            idx === 0 ? 'md:col-span-1 lg:col-start-2 border-2 border-secondary' : ''
                          } hover:bg-white/20 transition-all`}
                        >
                          <p className="text-lg font-bold text-secondary">{prize.place}</p>
                          <p className="text-2xl font-bold text-primary">{prize.reward}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <Link href="/registration">
                    <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-lg transition-all text-lg mt-6">
                      Register Team
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Competition Overview Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">What's at Stake</h2>
            <p className="text-lg text-foreground/70">Prizes and recognition await the champions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 space-y-3 text-center hover:bg-white/20 transition-all animate-fade-in-up">
              <p className="text-5xl font-bold text-secondary">₹3,00,000+</p>
              <p className="font-semibold text-foreground/70">Total Prize Money</p>
            </div>
            <div className="glass p-8 space-y-3 text-center hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-5xl font-bold text-accent">3</p>
              <p className="font-semibold text-foreground/70">Major Competitions</p>
            </div>
            <div className="glass p-8 space-y-3 text-center hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-5xl font-bold text-primary">50+</p>
              <p className="font-semibold text-foreground/70">Participating Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Compete?</h2>
            <p className="text-lg text-white/80">Register your team and showcase your talent on the global stage</p>
          </div>
          <Link href="/registration">
            <button className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg text-lg transition-all">
              Register Your Team
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
