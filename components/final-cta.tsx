"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

const CALENDLY_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey Michael! I'm interested in automating my client acquisition with Genesis."

export default function FinalCTA() {
  const handleBookCall = () => {
    window.open(CALENDLY_LINK, "_blank")
  }

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Ready to Automate Your Growth?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Join{" "}
          <span className="font-semibold text-blue-600">
            50+ founders
          </span>{" "}
          scaling client acquisition with{" "}
          <span className="font-semibold text-cyan-600">Genesis.ai</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Book a Call
          </Button>

          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
          >
            <MessageCircle size={20} />
            Message on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
