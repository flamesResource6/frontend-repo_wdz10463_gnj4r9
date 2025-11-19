import React from 'react'

const items = [
  {
    title: 'Zero-day triage in production service',
    tags: ['Fuzzing', 'Crash Triage', 'CVE coordination'],
    desc: 'Built custom harnesses and identified high-impact memory corruption issues. Partnered with vendor for fixes and CVE disclosure.'
  },
  {
    title: 'Full-kill-chain emulation for fintech',
    tags: ['Red Team', 'Cloud', 'Evasion'],
    desc: 'Achieved objective with cloud privilege escalation and C2 resiliency testing. Provided prioritized remediation playbook.'
  },
  {
    title: 'Modernizing security testing pipeline',
    tags: ['Automation', 'SAST/DAST', 'DevSecOps'],
    desc: 'Integrated continuous fuzzing & security checks in CI with actionable, low-noise results.'
  }
]

function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Selected Work</h2>
        <p className="text-slate-300 text-center mt-2 mb-10">Real impact, real results</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
