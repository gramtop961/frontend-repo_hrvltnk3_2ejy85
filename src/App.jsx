import Header from './components/Header'
import HomeCards from './components/HomeCards'
import ReaderPreview from './components/ReaderPreview'
import ProgressDashboard from './components/ProgressDashboard'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EEF3]">
      <Header />

      <main className="space-y-10 pt-6 pb-12">
        <section className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-[#0F1724] ring-1 ring-white/10 p-5 md:p-8 mb-2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Loomi: Lectura enfocada y divertida</h1>
            <p className="text-[#98A3B8] mt-2 max-w-2xl">
              Microlecturas con audio, resaltado y preguntas integradas. Diseñado para niños con dificultades de atención o comprensión.
            </p>
          </div>
        </section>

        <HomeCards />
        <ReaderPreview />
        <ProgressDashboard />
      </main>

      <FooterCTA />
    </div>
  )
}

export default App
