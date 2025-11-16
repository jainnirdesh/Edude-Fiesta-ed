'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)

    try {
      // Simple newsletter subscription without Firebase for now
      // You can integrate with your preferred email service later
      console.log('Newsletter subscription:', newsletterEmail)
      
      alert('Thank you for subscribing! You will receive our latest updates.')
      setNewsletterEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      alert('There was an error with your subscription. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-secondary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Get In Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about EDUDE FIESTA? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: 'Email',
                details: 'edudefiesta@krmu.edu.in',
                desc: 'Write to us anytime'
              },
              {
                icon: MapPin,
                title: 'Address',
                details: 'K.R. Mangalam University',
                desc: 'Gurugram, Delhi-NCR, India'
              },
              {
                icon: Phone,
                title: 'Phone',
                details: '+91 (XXX) XXXX-XXXX',
                desc: 'Call us during business hours'
              },
            ].map((contact, idx) => {
              const IconComp = contact.icon
              return (
                <div key={idx} className="glass p-8 space-y-4 text-center hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <IconComp size={32} className="text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{contact.title}</h3>
                  <p className="font-semibold text-foreground">{contact.details}</p>
                  <p className="text-foreground/70 text-sm">{contact.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Map & Info */}
            <div className="space-y-6 animate-fade-in-up max-w-2xl">
              {/* Map Placeholder */}
              <a 
                href="https://maps.app.goo.gl/GcQcVq5Q7odNWgS78" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-4xl">
                  <div className="group-hover:scale-110 transition-transform duration-300">📍</div>
                  <p className="text-lg font-semibold text-primary mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view on Google Maps
                  </p>
                </div>
              </a>

              {/* Helpful Links */}
              <div className="glass p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary">Quick Links</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-xl">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Registration Help</p>
                      <p className="text-sm text-foreground/70">Need help registering? Check our FAQ section</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-xl">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Accommodation</p>
                      <p className="text-sm text-foreground/70">Information about campus accommodation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-xl">→</span>
                    <div>
                      <p className="font-semibold text-foreground">Event Guidelines</p>
                      <p className="text-sm text-foreground/70">Code of conduct and event policies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold">Stay Updated</h2>
            <p className="text-lg text-white/80">Subscribe to our newsletter for latest updates and announcements</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-white text-primary hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed font-semibold px-6 py-3 rounded-lg transition-all"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
