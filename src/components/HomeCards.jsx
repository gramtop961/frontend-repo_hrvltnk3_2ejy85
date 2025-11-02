import { Play, Star, Lock } from 'lucide-react'

function StatusBadge({ state }) {
  const mapping = {
    default: { label: 'Recomendado', className: 'bg-[#00C2A8]/10 text-[#00C2A8]' },
    'in-progress': { label: 'En curso', className: 'bg-[#7C4DFF]/10 text-[#7C4DFF]' },
    completed: { label: 'Completado', className: 'bg-[#4CD964]/10 text-[#4CD964]' },
    locked: { label: 'Bloqueado', className: 'bg-[#FF5C5C]/10 text-[#FF5C5C]' },
  }
  const cfg = mapping[state] || mapping.default
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${cfg.className}`}>{cfg.label}</span>
  )
}

function HomeCard({ title, minutes, stars, state }) {
  return (
    <div className="group relative rounded-2xl bg-[#121826] ring-1 ring-white/10 p-4 overflow-hidden hover:ring-white/20 transition-all">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#00C2A8]/10 to-[#7C4DFF]/10 pointer-events-none" />
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#E6EEF3] font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2 text-[#98A3B8] text-sm">
            <span>{minutes} min</span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 text-[#FFD166]" />
              {stars}
            </span>
          </div>
        </div>
        <StatusBadge state={state} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          disabled={state === 'locked'}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
            state === 'locked'
              ? 'bg-white/5 text-[#98A3B8] cursor-not-allowed'
              : 'bg-[#00C2A8] text-[#0B1220] hover:brightness-110'
          }`}
        >
          {state === 'locked' ? (
            <>
              <Lock className="h-4 w-4" /> Bloqueado
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Iniciar
            </>
          )}
        </button>
        <div className="text-xs text-[#98A3B8]">Nivel 1</div>
      </div>
    </div>
  )
}

export default function HomeCards() {
  const lessons = [
    { id: 1, title: 'El viaje de Lumi', minutes: 3, stars: 12, state: 'default' },
    { id: 2, title: 'El bosque sonoro', minutes: 4, stars: 9, state: 'in-progress' },
    { id: 3, title: 'La ciudad de las palabras', minutes: 5, stars: 15, state: 'completed' },
    { id: 4, title: 'El castillo de los verbos', minutes: 4, stars: 3, state: 'locked' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[#E6EEF3] text-xl font-semibold">Lecturas recomendadas</h2>
          <p className="text-[#98A3B8] text-sm">Microactividades de 1–5 minutos</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((l) => (
          <HomeCard key={l.id} {...l} />
        ))}
      </div>
    </section>
  )
}
