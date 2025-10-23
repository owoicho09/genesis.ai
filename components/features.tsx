"use client"

import { Button } from "@/components/ui/button"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey! I'm interested in learning more about your client acquisition system."

export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Verified Lead Supply",
      description: "We deliver verified, high-quality B2B leads based on your ICP match.",
    },
    {
      icon: "💬",
      title: "Personalized Outreach",
      description: "Smart, context-aware messages that go beyond first names, boosting reply rates.",
    },
    {
      icon: "🔄",
      title: "Nurturing Sequences",
      description: "Automated multi-step sequences warm up cold leads and guide them toward a call.",
    },
    {
      icon: "📧",
      title: "Consistent Follow-Up",
      description: "Reliable follow-ups ensure no opportunity slips through the cracks.",
    },
  ]

  const handleBookCall = () => window.open(GOOGLE_CALENDAR_LINK, "_blank")
  const handleWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Book More Calls, Close More Deals
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Genesis delivers verified B2B leads and automates outreach so you focus on talking to ready-to-buy clients.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-2xl md:text-3xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Everything is automated so you focus on closing deals with clients who are ready to buy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
          <Button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full px-8 py-4 md:py-6 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Strategy Call
          </Button>


        </div>
      </div>
    </section>
  )
}
