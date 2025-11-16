'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Phone } from 'lucide-react'
import { db } from '@/lib/firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Firestore here
      await addDoc(collection(db, "contactMessages"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: new Date(),
      })

      alert("Thank you for reaching out! We will get back to you soon.")

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Firestore error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)

    try {
      // Save newsletter subscription to Firestore
      await addDoc(collection(db, "newsletterSubscriptions"), {
        email: newsletterEmail,
        createdAt: new Date(),
      })
      
      alert('Thank you for subscribing! You will receive our latest updates.')
      setNewsletterEmail('')
    } catch (error) {
      console.error('Firestore error:', error)
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-primary">Send us a Message</h2>
                <p className="text-foreground/70">Fill out the form and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-secondary/50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Map Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-4xl">
                📍
              </div>

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
