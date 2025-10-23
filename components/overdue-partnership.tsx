import { Button } from "@/components/ui/button"

export default function OverduePartnership() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Logos */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Official Partner: Overdue</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Together with Overdue, Genesis helps SaaS companies generate leads and recover failed payments
                automatically — 100% performance-based, zero risk.
              </p>
            </div>

            <div className="flex gap-6 flex-wrap">
              <div className="px-8 py-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <p className="font-bold text-gray-900">Genesis.ai</p>
                <p className="text-sm text-gray-600">Lead Generation</p>
              </div>
              <div className="px-8 py-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <p className="font-bold text-gray-900">Overdue</p>
                <p className="text-sm text-gray-600">Payment Recovery</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit">
              Learn About Our Partnership
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <p className="text-xl font-semibold text-gray-900">Genesis + Overdue</p>
              <p className="text-gray-600 mt-2">Complete Growth Solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
