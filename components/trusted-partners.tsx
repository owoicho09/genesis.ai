
"use client"

const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey! I'm interested in learning more about your client acquisition system."


export default function TrustedPartners() {

  const handleBookCall = () => window.open(GOOGLE_CALENDAR_LINK, "_blank")
  const handleWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )
  return (
    <section id="partners" className="py-16 md:py-24 bg-green-50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
            Trusted Partners
          </p>

          {/* Logo at the top */}
          <div className="flex justify-center mb-4">
            <img
              src="/overdue.jpg" // replace with actual logo path
              alt="Overdue Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="text-lg text-green-900 leading-relaxed max-w-2xl mx-auto mt-2">
            Overdue is a Payment Recovery Platform that helps SaaS companies recover failed subscription payments and prevent involuntary churn.
          </p>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Try Overdue free for 30 days. Keep 100% of the revenue we recover for you. It's on us.
        </p>

        {/* Centered Green Button */}
        <div className="flex justify-center mt-9">
          <button
          onClick={handleBookCall}

        className="bg-green-700 hover:bg-green-800 text-gray-600 font-semibold rounded-full px-6 py-4 md:py-5 text-lg md:text-xl transition-colors duration-300"
          >
            Try it now
          </button>
        </div>
      </div>
    </section>
  )
}
