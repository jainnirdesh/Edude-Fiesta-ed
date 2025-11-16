'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EF</span>
              </div>
              <h3 className="text-lg font-bold">EDUDE FIESTA</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Where Education Meets Culture - A Global Festival celebrating diversity and unity across 50+ universities and 12+ countries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/2025-edition" className="hover:text-white transition-colors hover:translate-x-1 inline-block">2025 Edition</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                edudefiesta@krmu.edu.in
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={16} />
                K.R. Mangalam University, Delhi
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                +91 XXXX XXXX XXXX
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs text-white/70">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Code of Conduct</Link>
          </div>
          
          {/* Made by Credit */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-center text-sm text-white/70">
              &copy; 2025 EDUDE FIESTA. All rights reserved. K.R. Mangalam University
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Made by</span>
              <a 
                href="https://www.linkedin.com/in/nirdeshhjain/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-semibold"
              >
                <Linkedin size={16} />
                Nirdesh Jain
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
