"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Freebie() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="freebie" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-blue-600 rounded-full mb-4">
              <Download size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get a Free Cold Outreach Blueprint</h2>
            <p className="text-lg text-gray-600">
              Discover the exact sequence Genesis uses to book 5–10 qualified calls weekly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white"
                required
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {submitted ? "✓ Blueprint Sent!" : "Download Free Blueprint"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">No spam, just pure value. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
