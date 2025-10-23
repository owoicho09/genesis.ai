"use client";

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"


const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey! I'm interested in learning more about your client acquisition system."


export default function ClientResults() {
  const results = [
    {
      title: "Fully booked calender",
      description: "4 highly qualified calls in 7days",
      img: "/booked calender.jpg", // replace with actual screenshot
    },
    {
      title: "3 calls in 5 Days",
      description: "Automated lead nurturing converted 3 prospects in 1 week",

      img: "/booked calls.jpg",
    },
    {
      title: "Before & After",
      description: "Before Ken booked 2-3 sales call monthly - So far After Genesis 4 calls in 1 week",

      img: "/casestudy before and after.jpg",
    },
  ]
  const handleBookCall = () => window.open(GOOGLE_CALENDAR_LINK, "_blank")
  const handleWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )
  return (
    <section id="results" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Results: Proof, Not Promises
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Real systems. Real leads. Real booked calls.
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Screenshot / Image */}
              <div className="w-full h-48 md:h-56 bg-gray-100 relative">
                <img
                  src={result.img}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metric & Text */}
              <div className="p-6">
                <div className="mb-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">{result.metric}</p>
                  <p className="text-sm text-gray-600 mt-1">{result.metricLabel}</p>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{result.title}</h3>
                <p className="text-gray-600 mb-4">{result.description}</p>

                {/* Testimonial link */}

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
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
