"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How are leads verified to match ICP?",
      answer:
        "We use advanced data enrichment and verification processes to ensure every lead matches your ideal customer profile. Our AI analyzes company size, industry, technology stack, and buying signals.",
    },
    {
      question: "What is Overdue and how does it work with Genesis?",
      answer:
        "Overdue recovers failed subscription payments and prevents involuntary churn. Together with Genesis, you get full-cycle growth: front-end client acquisition + back-end revenue retention.",
    },
    {
      question: "How is outreach personalized?",
      answer:
        "Our system analyzes each prospect's company, recent news, and digital footprint to create highly personalized messages that go beyond first names.",
    },
    {
      question: "Do I need technical skills to use Genesis or Overdue?",
      answer:
        "No. Both systems are plug-and-play. Genesis automates lead sourcing and outreach, while Overdue manages payment recovery seamlessly.",
    },
    {
    question: "Is there a demo or trial available?",
      answer:
        "Absolutely! Schedule a demo of Genesis, and Overdue offers a 30-day free trial where clients keep 100% of recovered revenue — no upfront cost.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
