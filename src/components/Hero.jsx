import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-fuchsia-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 text-cyan-300 border border-white/10 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Offensive Security • Research • Automation</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          sudo fuzzers
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300">
          A cybersecurity strike team specialized in fuzzing, exploit development, and red team operations. We discover what others miss and help you fix it fast.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors shadow">
            Request an Assessment
          </a>
          <a href="#work" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors border border-white/10">
            See our work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
