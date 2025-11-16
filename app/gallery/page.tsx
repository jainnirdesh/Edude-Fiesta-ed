'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    // 2024 Edition
    { id: 1, year: '2024', category: 'performances', title: 'Grand Opening Ceremony', type: 'image' },
    { id: 2, year: '2024', category: 'performances', title: 'Cultural Dance Performance', type: 'image' },
    { id: 3, year: '2024', category: 'performances', title: 'International Student Performance', type: 'image' },
    { id: 4, year: '2024', category: 'events', title: 'Pride March Moments', type: 'image' },
    { id: 5, year: '2024', category: 'events', title: 'Bonfire Night Celebration', type: 'image' },
    { id: 6, year: '2024', category: 'competitions', title: 'Dance Competition Finals', type: 'image' },
    { id: 7, year: '2024', category: 'competitions', title: 'Music Competition Stage', type: 'image' },
    { id: 8, year: '2024', category: 'moments', title: 'Candid Campus Moments', type: 'image' },

    // 2023 Edition
    { id: 9, year: '2023', category: 'performances', title: 'State Cultural Showcase', type: 'image' },
    { id: 10, year: '2023', category: 'performances', title: 'Traditional Dance Forms', type: 'image' },
    { id: 11, year: '2023', category: 'events', title: 'Grand Parade', type: 'image' },
    { id: 12, year: '2023', category: 'competitions', title: 'Inter-University Band Performance', type: 'image' },
    { id: 13, year: '2023', category: 'moments', title: 'Participant Celebrations', type: 'image' },
    { id: 14, year: '2023', category: 'moments', title: 'Campus Unity Moment', type: 'image' },
  ]

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.year === filter)

  const categories = [
    { id: 'all', label: 'All Memories' },
    { id: '2024', label: '2024 Edition' },
    { id: '2023', label: '2023 Edition' },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold">Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Relive the magic and memorable moments from EDUDE FIESTA
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-border text-foreground hover:bg-border/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedImage(item.title)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="font-bold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Highlight Videos</h2>
            <p className="text-lg text-foreground/70">Watch the best moments from previous editions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'EDUDE FIESTA 2.0 Highlights', videoId: 'dQw4w9WgXcQ' },
              { title: 'Grand Opening Ceremony 2024', videoId: 'dQw4w9WgXcQ' },
              { title: 'EDM Night - Full Performance', videoId: 'dQw4w9WgXcQ' },
              { title: 'Dance Competition Finals', videoId: 'dQw4w9WgXcQ' },
            ].map((video, idx) => (
              <div key={idx} className="space-y-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black hover:shadow-2xl transition-shadow">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-lg font-bold text-primary">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels/Short Videos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Behind the Scenes</h2>
            <p className="text-lg text-foreground/70">Short clips and quick moments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
              <div
                key={item}
                className="aspect-[9/16] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl hover:shadow-2xl transition-all cursor-pointer animate-fade-in-up overflow-hidden group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="w-full h-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">▶️</div>
                    <p className="text-xs font-semibold text-foreground/60">Short Video {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Follow Us for Updates</h2>
            <p className="text-lg text-foreground/70">Stay connected and share your EDUDE FIESTA moments</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: 'Instagram', handle: '@edudefiesta' },
              { name: 'Twitter', handle: '@edudefiesta' },
              { name: 'Facebook', handle: 'EDUDE FIESTA' },
              { name: 'YouTube', handle: 'EDUDE FIESTA Official' },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="glass px-6 py-3 hover:bg-white/20 transition-all"
              >
                <p className="font-bold text-foreground">{social.name}</p>
                <p className="text-sm text-foreground/60">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-foreground transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-xl p-8 space-y-4">
              <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-6xl">
                🖼️
              </div>
              <h3 className="text-2xl font-bold text-primary">{selectedImage}</h3>
              <p className="text-foreground/70">This is a moment captured during EDUDE FIESTA, celebrating cultural diversity and educational excellence.</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
