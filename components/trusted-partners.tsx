export default function TrustedPartners() {
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
Overdue is a Payment Recovery Platform that helps SaaS companies recover failed subscription payments and prevent involuntary churn.          </p>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">Try Overdue free for 30 days. Keep 100% of the revenue we recover for you. It's on us. .</p>

      </div>
    </section>
  )
}
