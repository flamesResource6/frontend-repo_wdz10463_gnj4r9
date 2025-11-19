import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-xl">sudo <span className="text-cyan-400">fuzzers</span></a>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Capabilities</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} sudo fuzzers. All rights reserved.</p>
          <p>Built for security leaders who need proof, not promises.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
