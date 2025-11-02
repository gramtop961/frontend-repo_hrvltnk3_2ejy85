import { Rocket } from 'lucide-react'

export default function FooterCTA() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#00C2A8]/10 flex items-center justify-center ring-1 ring-white/10">
            <Rocket className="h-6 w-6 text-[#00C2A8]" />
          </div>
          <div>
            <p className="text-[#E6EEF3] font-semibold">¿Listos para aprender con Loomi?</p>
            <p className="text-[#98A3B8] text-sm">Microlecturas, TTS y juegos cortos para mantener el enfoque.</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#00C2A8] text-[#0B1220] font-semibold hover:brightness-110">
          Comenzar ahora
        </button>
      </div>
    </footer>
  )
}
