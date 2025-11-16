'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { ChevronRight, X, Plus } from 'lucide-react'

type RegistrationCategory = 
  | 'international-delegation'
  | 'dance-competition'
  | 'music-competition'
  | 'freshers'
  | 'volunteer'

interface TeamMember {
  id: string
  name: string
  email: string
}

interface FormData {
  fullName: string
  email: string
  phone: string
  university: string
  category: RegistrationCategory | ''
  teamMembers: TeamMember[]
  universityId: File | null
  event: string
  notes: string
}

const EVENT_PRICING: Record<string, { name: string; amount: number }[]> = {
  'dance-competition': [
    { name: 'Classical Dance', amount: 5000 },
    { name: 'Contemporary Dance', amount: 5500 },
    { name: 'Bhangra', amount: 5000 },
    { name: 'Hip-Hop', amount: 5500 },
    { name: 'Folk Dance', amount: 5000 },
    { name: 'Bollywood Fusion', amount: 5500 },
  ],
  'music-competition': [
    { name: 'Classical Music (Instrumental)', amount: 5000 },
    { name: 'Classical Music (Vocal)', amount: 5000 },
    { name: 'Western Music', amount: 5500 },
    { name: 'Semi-Classical/Fusion', amount: 5500 },
    { name: 'Band Performance', amount: 6000 },
    { name: 'DJ/Electronic Music', amount: 5500 },
  ],
}

export default function Registration() {
  const [step, setStep] = useState<'category' | 'form' | 'payment' | 'success'>('category')
  const [selectedCategory, setSelectedCategory] = useState<RegistrationCategory | null>(null)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    category: '',
    teamMembers: [],
    universityId: null,
    event: '',
    notes: '',
  })
  const [paymentAmount, setPaymentAmount] = useState(0)
  const [receiptNumber, setReceiptNumber] = useState('')

  const categories = [
    {
      id: 'international-delegation',
      title: 'International University Delegation',
      fee: 'Free',
      feAmount: 0,
      desc: 'Register your international university delegation',
      eligibility: 'International universities with 10-50 members',
      badge: 'Invite Only'
    },
    {
      id: 'dance-competition',
      title: 'Dance Competition',
      fee: '₹5,000 - ₹5,500',
      feAmount: 5000,
      desc: 'Inter-university dance competition',
      eligibility: 'Indian university teams with 8-15 dancers',
      badge: 'Paid'
    },
    {
      id: 'music-competition',
      title: 'Music Competition',
      fee: '₹5,000 - ₹6,000',
      feAmount: 5000,
      desc: 'Inter-university music competition',
      eligibility: 'Indian university teams with 4-10 musicians',
      badge: 'Paid'
    },
    {
      id: 'freshers',
      title: 'Mr. & Ms. Freshers',
      fee: '₹2,000',
      feAmount: 2000,
      desc: 'Freshers competition for new students',
      eligibility: 'Indian university freshers only',
      badge: 'Paid'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Registration',
      fee: 'Free',
      feAmount: 0,
      desc: 'Help organize EDUDE FIESTA 2025',
      eligibility: 'All university students',
      badge: 'Free'
    },
  ]

  const handleCategorySelect = (categoryId: RegistrationCategory) => {
    setSelectedCategory(categoryId)
    setFormData({ ...formData, category: categoryId, event: '' })
    const selected = categories.find(c => c.id === categoryId)
    if (selected) {
      setPaymentAmount(selected.feAmount)
    }
    setStep('form')
  }

  const handleEventChange = (eventName: string) => {
    handleFormChange('event', eventName)
    
    if (selectedCategory && EVENT_PRICING[selectedCategory]) {
      const event = EVENT_PRICING[selectedCategory].find(e => e.name === eventName)
      if (event) {
        setPaymentAmount(event.amount)
      }
    }
  }

  const handleAddTeamMember = () => {
    setFormData({
      ...formData,
      teamMembers: [
        ...formData.teamMembers,
        { id: Date.now().toString(), name: '', email: '' }
      ]
    })
  }

  const handleRemoveTeamMember = (id: string) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter(m => m.id !== id)
    })
  }

  const handleTeamMemberChange = (id: string, field: 'name' | 'email', value: string) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.map(m =>
        m.id === id ? { ...m, [field]: value } : m
      )
    })
  }

  const handleFormChange = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmitForm = () => {
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.university) {
      alert('Please fill in all required fields')
      return
    }

    if (['dance-competition', 'music-competition'].includes(selectedCategory || '') && !formData.event) {
      alert('Please select an event')
      return
    }

    if (paymentAmount > 0) {
      setStep('payment')
    } else {
      handlePaymentSuccess()
    }
  }

  const handlePaymentSuccess = () => {
    const receipt = `EDUDE-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`
    setReceiptNumber(receipt)
    setStep('success')

    // Here you would typically send data to your backend/database
    console.log('Registration submitted:', { formData, receiptNumber: receipt })
  }

  const handlePaymentRedirect = () => {
    // Razorpay redirect
    const paymentData = {
      amount: paymentAmount * 100, // in paise
      description: `EDUDE FIESTA 2025 - ${selectedCategory}`,
      email: formData.email,
      phone: formData.phone,
    }
    
    // In a real app, you would redirect to Razorpay/Paytm
    // For now, we'll simulate successful payment
    console.log('Redirecting to payment gateway:', paymentData)
    handlePaymentSuccess()
  }

  const getCategoryTitle = (catId: RegistrationCategory | null) => {
    return categories.find(c => c.id === catId)?.title || ''
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Register for EDUDE FIESTA 2025</h1>
          <p className="text-xl text-white/80">Choose your registration category and join the celebration</p>
        </div>
      </section>

      {/* Category Selection Step */}
      {step === 'category' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">Select Registration Category</h2>
              <p className="text-lg text-foreground/70">Choose the category that fits you best</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="glass p-8 space-y-6 hover:bg-white/20 transition-all cursor-pointer group animate-fade-in-up"
                  style={{ animationDelay: `${categories.indexOf(category) * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs font-bold px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                        {category.badge}
                      </span>
                    </div>
                    <p className="text-foreground/70">{category.desc}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/20">
                    <p className="text-sm text-foreground/60">
                      <span className="font-semibold">Eligibility:</span> {category.eligibility}
                    </p>
                    <p className="text-2xl font-bold text-secondary">{category.fee}</p>
                  </div>

                  <Button
                    onClick={() => handleCategorySelect(category.id as RegistrationCategory)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 group-hover:shadow-lg transition-all"
                  >
                    Select Category <ChevronRight size={20} className="ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Form Step */}
      {step === 'form' && selectedCategory && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm">Category</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">{getCategoryTitle(selectedCategory)}</h2>
              <p className="text-foreground/70">Fee: ₹{paymentAmount}</p>
            </div>

            <form className="space-y-6">
              {/* Personal Information */}
              <div className="glass p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleFormChange('fullName', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">University/College Name *</label>
                  <Input
                    placeholder="Enter your university name"
                    value={formData.university}
                    onChange={(e) => handleFormChange('university', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Team Members (for competitions) */}
              {['dance-competition', 'music-competition'].includes(selectedCategory) && (
                <div className="glass p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">Team Members</h3>
                    <Button
                      type="button"
                      onClick={handleAddTeamMember}
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      <Plus size={18} className="mr-2" /> Add Member
                    </Button>
                  </div>

                  {formData.teamMembers.map((member, idx) => (
                    <div key={member.id} className="space-y-3 p-4 bg-white/50 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-foreground">Member {idx + 1}</p>
                        <button
                          type="button"
                          onClick={() => handleRemoveTeamMember(member.id)}
                          className="text-destructive hover:bg-destructive/10 p-1 rounded"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          placeholder="Member name"
                          value={member.name}
                          onChange={(e) => handleTeamMemberChange(member.id, 'name', e.target.value)}
                          className="h-10"
                        />
                        <Input
                          type="email"
                          placeholder="Member email"
                          value={member.email}
                          onChange={(e) => handleTeamMemberChange(member.id, 'email', e.target.value)}
                          className="h-10"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Event Selection */}
              {['dance-competition', 'music-competition'].includes(selectedCategory) && (
                <div className="glass p-8 space-y-6">
                  <h3 className="text-xl font-bold text-primary">Event Details</h3>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Event *</label>
                    <select
                      value={formData.event}
                      onChange={(e) => handleEventChange(e.target.value)}
                      className="w-full h-12 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                    >
                      <option value="">Select an event type</option>
                      {selectedCategory && EVENT_PRICING[selectedCategory] && EVENT_PRICING[selectedCategory].map((event) => (
                        <option key={event.name} value={event.name}>
                          {event.name} - ₹{event.amount}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formData.event && (
                    <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <p className="text-sm text-foreground/60">Selected Event Fee</p>
                      <p className="text-2xl font-bold text-secondary">₹{paymentAmount}</p>
                    </div>
                  )}
                </div>
              )}

              {/* University ID Upload */}
              <div className="glass p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary">Documents</h3>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">University ID</label>
                  <input
                    type="file"
                    onChange={(e) => handleFormChange('universityId', e.target.files?.[0])}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="glass p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary">Additional Information</h3>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Additional Notes</label>
                  <Textarea
                    placeholder="Any special requirements or additional information"
                    value={formData.notes}
                    onChange={(e) => handleFormChange('notes', e.target.value)}
                    className="min-h-24"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setStep('category')}
                  variant="outline"
                  className="flex-1 h-12 font-semibold"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleSubmitForm}
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-white h-12 font-semibold"
                >
                  Continue {paymentAmount > 0 ? 'to Payment' : 'to Confirmation'}
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Payment Step */}
      {step === 'payment' && selectedCategory && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm">Payment</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Complete Your Payment</h2>
            </div>

            <Card className="p-8 space-y-6 border-2 border-secondary">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-foreground/70">Registration Category</span>
                  <span className="font-semibold text-foreground">{getCategoryTitle(selectedCategory)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-foreground/70">Registrant Name</span>
                  <span className="font-semibold text-foreground">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-secondary">
                  <span className="text-lg font-bold text-primary">Total Amount</span>
                  <span className="text-3xl font-bold text-secondary">₹{paymentAmount}</span>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <p className="text-sm text-foreground/70 mb-2">Payment Methods Accepted:</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Razorpay', 'Paytm', 'UPI'].map((method) => (
                    <div key={method} className="text-center p-2 bg-white rounded border border-border">
                      <p className="text-xs font-semibold text-foreground">{method}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setStep('form')}
                  variant="outline"
                  className="flex-1 h-12 font-semibold"
                >
                  Back
                </Button>
                <Button
                  onClick={handlePaymentRedirect}
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-white h-12 font-semibold"
                >
                  Proceed to Payment
                </Button>
              </div>

              <p className="text-xs text-foreground/60 text-center">
                You will be redirected to a secure payment gateway. Your transaction is 100% safe.
              </p>
            </Card>
          </div>
        </section>
      )}

      {/* Success Step */}
      {step === 'success' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="text-4xl">✓</div>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">Registration Successful!</h2>
              <p className="text-lg text-foreground/70">Welcome to EDUDE FIESTA 2025</p>
            </div>

            <Card className="p-8 space-y-4 bg-secondary/10 border-2 border-secondary">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Receipt Number</p>
                <p className="text-2xl font-bold text-primary font-mono">{receiptNumber}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Registration Category</p>
                <p className="text-lg font-semibold text-foreground">{getCategoryTitle(selectedCategory)}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Confirmation Email</p>
                <p className="text-foreground">{formData.email}</p>
              </div>
              {paymentAmount > 0 && (
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Amount Paid</p>
                  <p className="text-lg font-semibold text-secondary">₹{paymentAmount}</p>
                </div>
              )}
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm text-foreground/70 space-y-2">
              <p className="font-semibold text-foreground">What's Next?</p>
              <p>A confirmation email has been sent to {formData.email}</p>
              <p>Check your email for event details, updates, and further instructions</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8"
              >
                Back to Home
              </Button>
              <Button
                onClick={() => window.location.href = '/2025-edition'}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold h-12 px-8"
              >
                Explore 2025 Edition
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
