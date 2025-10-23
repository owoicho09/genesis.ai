import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import TrustedPartners from "@/components/trusted-partners"
import Features from "@/components/features"
import ClientResults from "@/components/client-results"
import OverduePartnership from "@/components/overdue-partnership"
import FAQ from "@/components/faq"
import Freebie from "@/components/freebie"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustedPartners />
      <Features />
      <ClientResults />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
