"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey! I'm interested in learning more about your client acquisition system."



export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const handleBookCall = () => window.open(GOOGLE_CALENDAR_LINK, "_blank")
  const handleWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Genesis.ai
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">

            <a href="#partners" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Client Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full px-8 py-4 md:py-6 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a call
          </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">

            <a href="#partners" className="block text-gray-700 hover:text-blue-600 py-2">
              Partners
            </a>

            <a href="#results" className="block text-gray-700 hover:text-blue-600 py-2">
              Client Results
            </a>
            <Button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full px-8 py-4 md:py-6 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a call
          </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
