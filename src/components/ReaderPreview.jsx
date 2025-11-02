import { useState } from 'react'
import { ArrowLeft, Play, Pause, Volume2, Plus, Minus } from 'lucide-react'

export default function ReaderPreview() {
  const [playing, setPlaying] = useState(false)
  const [highlight, setHighlight] = useState(true)
  const [size, setSize] = useState(18)

  const sample = 'Lumi mira el cielo. Las nubes parecen barcos. Ella respira y cuenta tres. Ahora puede leer con calma.'

  return (
    <section aria-label="Visor de lectura" className="max-w-6xl mx-auto px-4">
      <div className="rounded-2xl bg-[#121826] ring-1 ring-white/10 p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <button className="inline-flex items-center gap-2 text-[#E6EEF3] hover:text-white/90">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm">Volver</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={playing}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                playing ? 'bg-[#7C4DFF] text-white' : 'bg-white/5 text-[#E6EEF3] hover:bg-white/10'
              }`}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? 'Pausar' : 'Leer'}
            </button>
            <button
              onClick={() => setHighlight((h) => !h)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                highlight ? 'bg-[#00C2A8] text-[#0B1220]' : 'bg-white/5 text-[#E6EEF3] hover:bg-white/10'
              }`}
            >
              <Volume2 className="h-4 w-4" /> Resaltar
            </button>
            <div className="inline-flex items-center gap-1 bg-white/5 text-[#E6EEF3] px-2 py-2 rounded-xl">
              <button
                aria-label="Reducir tamaño de texto"
                onClick={() => setSize((s) => Math.max(14, s - 2))}
                className="p-1 rounded-lg hover:bg-white/10"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-xs w-8 text-center">{size}px</span>
              <button
                aria-label="Aumentar tamaño de texto"
                onClick={() => setSize((s) => Math.min(28, s + 2))}
                className="p-1 rounded-lg hover:bg-white/10"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-4 md:p-6 bg-[#0F1724] ring-1 ring-white/5"
          style={{ fontSize: `${size}px`, lineHeight: 1.6 }}
        >
          {sample.split(' ').map((w, i) => (
            <span
              key={i}
              className={highlight && i % 5 === 0 ? 'bg-[#00C2A8]/20 rounded-md px-1' : ''}
            >
              {w + ' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
