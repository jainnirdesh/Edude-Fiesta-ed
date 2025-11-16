'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Universities() {
  const internationalUniversities = [
    { name: 'Oxford University', country: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Harvard University', country: 'United States', flag: '🇺🇸' },
    { name: 'University of Toronto', country: 'Canada', flag: '🇨🇦' },
    { name: 'University of Melbourne', country: 'Australia', flag: '🇦🇺' },
    { name: 'National University of Singapore', country: 'Singapore', flag: '🇸🇬' },
    { name: 'Tokyo University', country: 'Japan', flag: '🇯🇵' },
    { name: 'Humboldt University', country: 'Germany', flag: '🇩🇪' },
    { name: 'Sorbonne University', country: 'France', flag: '🇫🇷' },
    { name: 'Sapienza University', country: 'Italy', flag: '🇮🇹' },
    { name: 'Complutense University', country: 'Spain', flag: '🇪🇸' },
    { name: 'University of Casablanca', country: 'Morocco', flag: '🇲🇦' },
    { name: 'National University Seoul', country: 'South Korea', flag: '🇰🇷' },
  ]

  const indianStates = [
    { name: 'Delhi University', state: 'Delhi' },
    { name: 'Mumbai University', state: 'Maharashtra' },
    { name: 'Bangalore University', state: 'Karnataka' },
    { name: 'Kolkata University', state: 'West Bengal' },
    { name: 'Chennai University', state: 'Tamil Nadu' },
    { name: 'Ahmedabad University', state: 'Gujarat' },
    { name: 'Pune University', state: 'Maharashtra' },
    { name: 'Jaipur University', state: 'Rajasthan' },
    { name: 'Lucknow University', state: 'Uttar Pradesh' },
    { name: 'Chandigarh University', state: 'Punjab' },
    { name: 'Hyderabad University', state: 'Telangana' },
    { name: 'Cochin University', state: 'Kerala' },
    { name: 'Banaras Hindu University', state: 'Uttar Pradesh' },
    { name: 'Jamia Millia Islamia', state: 'Delhi' },
    { name: 'Savitribai Phule Pune University', state: 'Maharashtra' },
    { name: 'Manipal Academy', state: 'Karnataka' },
    { name: 'Symbiosis International', state: 'Maharashtra' },
    { name: 'Amity University', state: 'Delhi' },
    { name: 'Sharda University', state: 'Uttar Pradesh' },
    { name: 'Nirma University', state: 'Gujarat' },
    { name: 'VIT Vellore', state: 'Tamil Nadu' },
    { name: 'BITS Pilani', state: 'Rajasthan' },
    { name: 'Ashoka University', state: 'Haryana' },
    { name: 'Flame University', state: 'Maharashtra' },
    { name: 'Presidency University', state: 'West Bengal' },
    { name: 'Miranda House', state: 'Delhi' },
    { name: 'St. Stephens College', state: 'Delhi' },
    { name: 'K.R. Mangalam University', state: 'Delhi' },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Participating Universities</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A global celebration featuring universities from around the world
          </p>
        </div>
      </section>

      {/* International Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">International Universities</h2>
            <p className="text-lg text-foreground/70">12+ countries representing global excellence in education and culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalUniversities.map((uni, idx) => (
              <div
                key={idx}
                className="glass p-6 hover:bg-white/20 transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{uni.flag}</span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-primary">{uni.name}</h3>
                    <p className="text-sm text-foreground/70">{uni.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary">Indian Universities & Institutions</h2>
            <p className="text-lg text-foreground/70">Celebrating the diversity of education across all Indian states</p>
          </div>

          {/* State-wise grouping */}
          <div className="space-y-8">
            {/* Group universities by state for better organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indianStates.map((uni, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl border-2 border-border hover:border-secondary hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${(idx + internationalUniversities.length) * 0.03}s` }}
                >
                  <h3 className="text-lg font-bold text-primary">{uni.name}</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    <span className="inline-block bg-secondary/10 px-3 py-1 rounded-full text-secondary font-semibold">
                      {uni.state}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t-2 border-border">
            <div className="glass p-8 text-center space-y-2">
              <p className="text-4xl font-bold text-primary">12+</p>
              <p className="font-semibold text-foreground/70">Countries Represented</p>
            </div>
            <div className="glass p-8 text-center space-y-2">
              <p className="text-4xl font-bold text-secondary">28</p>
              <p className="font-semibold text-foreground/70">Indian States Represented</p>
            </div>
            <div className="glass p-8 text-center space-y-2">
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="font-semibold text-foreground/70">Total Universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join as University */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Your University Next?</h2>
            <p className="text-lg text-white/80">Register your institution to be part of EDUDE FIESTA 2025</p>
          </div>
          <button className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg text-lg transition-all">
            Register Your University
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
