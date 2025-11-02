import { BookOpen, Home, Settings, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/70 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#00C2A8]/10 flex items-center justify-center ring-1 ring-white/10">
            <BookOpen className="h-6 w-6 text-[#00C2A8]" />
          </div>
          <div>
            <p className="text-[18px] font-semibold tracking-tight text-[#E6EEF3]">Loomi</p>
            <p className="text-xs text-[#98A3B8]">Lectura divertida y enfocada</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-[#E6EEF3] hover:bg-white/5 transition-colors">
            <Home className="h-4 w-4" />
            Inicio
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-[#E6EEF3] hover:bg-white/5 transition-colors">
            <User className="h-4 w-4" />
            Perfil
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-[#E6EEF3] hover:bg-white/5 transition-colors">
            <Settings className="h-4 w-4" />
            Ajustes
          </button>
        </nav>
        <button className="sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-[#E6EEF3] hover:bg-white/5 transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
