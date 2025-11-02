import { Star, Clock, Award, Activity } from 'lucide-react'

function MetricCard({ icon: Icon, label, value, accent = '#00C2A8' }) {
  return (
    <div className="rounded-2xl bg-[#121826] ring-1 ring-white/10 p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl" style={{ backgroundColor: accent + '1A' }}>
          <div className="h-full w-full flex items-center justify-center">
            <Icon className="h-5 w-5" style={{ color: accent }} />
          </div>
        </div>
        <p className="text-sm text-[#98A3B8]">{label}</p>
      </div>
      <p className="text-[#E6EEF3] text-2xl font-semibold">{value}</p>
    </div>
  )
}

export default function ProgressDashboard() {
  return (
    <section aria-label="Panel parental" className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#E6EEF3] text-xl font-semibold">Panel de progreso</h2>
        <p className="text-sm text-[#98A3B8]">Vista de ejemplo</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={Star} label="Estrellas" value="36" accent="#FFD166" />
        <MetricCard icon={Clock} label="Minutos esta semana" value="42" accent="#7C4DFF" />
        <MetricCard icon={Award} label="Insignias" value="5" accent="#4CD964" />
        <MetricCard icon={Activity} label="Precisión" value="82%" accent="#00C2A8" />
      </div>
      <div className="mt-6 rounded-2xl bg-[#121826] ring-1 ring-white/10 p-4">
        <p className="text-sm text-[#98A3B8] mb-2">Progreso semanal</p>
        <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
          <div className="h-full bg-[#00C2A8]" style={{ width: '68%' }} />
        </div>
        <p className="text-xs text-[#98A3B8] mt-2">Objetivo: 60 min / Completado: 41 min</p>
      </div>
    </section>
  )
}
