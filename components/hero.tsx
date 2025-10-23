"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Play, Pause } from "lucide-react"



const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min"
const WHATSAPP_NUMBER = "2348142878380"
const WHATSAPP_MESSAGE = "Hey! I'm interested in learning more about your client acquisition system."

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bars, setBars] = useState<number[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const initialHeights = Array.from({ length: 40 }, () => Math.random() * 80 + 20)
    setBars(initialHeights)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) audio.play().catch(console.error)
    else audio.pause()
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [isPlaying])



  const handleBookCall = () => window.open(GOOGLE_CALENDAR_LINK, "_blank")
  const handleWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book More Calls — Close More Deals
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We handle everything — Lead sourcing, Outreach, Nurturing, Follow-up, and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                filling your calendar with booked calls
              </span>
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6 w-full">

            {/* Dashboard Image */}
            <img
              src="/analytics.JPG"
              alt="Dashboard Preview"
              className="w-full rounded-2xl shadow-2xl border border-gray-100 object-cover"
            />

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 shadow-xl w-full">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">284</p>
                  <p className="text-xs text-gray-600">Leads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">127</p>
                  <p className="text-xs text-gray-600">Qualified Leads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-500">19</p>
                  <p className="text-xs text-gray-600">Calls booked</p>
                </div>
              </div>
            </div>

            {/* Audio Testimonial */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <img
                src="/founder-headshot.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full border border-blue-200 flex-shrink-0"
              />
              <div className="flex-1 flex flex-col w-full">
                <div className="flex items-center gap-2 w-full">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-md transition-all"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <div className="flex-1 flex items-center gap-1 h-6 overflow-hidden">
                    {bars.map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full transition-all duration-200 ease-in-out"
                        style={{
                          height: isPlaying ? `${height * 0.6 + Math.random() * 5}px` : `${height * 0.4}px`,
                          opacity: isPlaying ? 0.9 : 0.4,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-700 mt-1 italic">
                  "They delivered leads that actually turned into real business opportunities — we booked 3 calls in the first week."
                </p>
                <p className="text-xs font-semibold text-slate-900 mt-1">Ken Kiyoshi</p>
                <p className="text-xs text-slate-500">Founder, Funnel Edge</p>
              </div>
              <audio ref={audioRef} src="/audio0-feedback1.mp3" preload="auto" />
            </div>

            {/* Benefit Line */}
            <p className="text-md md:text-lg text-gray-700 mt-2">
              100% Automation — set it and forget it
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
              <Button
               onClick={handleBookCall}
               className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-6 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all">
                Book a Call
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full sm:w-auto rounded-full px-6 py-3 text-base md:text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 flex items-center gap-2 bg-transparent transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp DM
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
