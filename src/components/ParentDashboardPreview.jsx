import { BarChart3, Clock, Award } from 'lucide-react'

export default function ParentDashboardPreview() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8 mb-10">
      <div className="mb-3">
        <h2 className="text-[#E6EEF3] text-xl font-semibold">Panel para familias</h2>
        <p className="text-[#98A3B8] text-sm">Progreso, tiempo y comprensión</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon={<Award className="h-5 w-5 text-[#4CD964]" />}
          title="Comprensión"
          value="82%"
          hint="Últimos 7 días"
        />
        <MetricCard
          icon={<Clock className="h-5 w-5 text-[#00C2A8]" />}
          title="Tiempo"
          value="38 min"
          hint="Esta semana"
        />
        <MetricCard
          icon={<BarChart3 className="h-5 w-5 text-[#7C4DFF]" />}
          title="Lecciones"
          value="12"
          hint="Completadas"
        />
      </div>
    </section>
  )
}

function MetricCard({ icon, title, value, hint }) {
  return (
    <div className="rounded-2xl bg-[#121826] ring-1 ring-white/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#98A3B8] text-sm">{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-semibold text-[#E6EEF3]">{value}</div>
      <div className="text-xs text-[#98A3B8] mt-1">{hint}</div>
    </div>
  )
}
