import React from 'react'
import { Shield, Bug, ScanLine, Lock, Network, Cpu } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Red Team Operations',
    desc: 'Adversary emulation, breach-and-attack simulations, and full-kill-chain exercises.'
  },
  {
    icon: Bug,
    title: 'Fuzzing & Vulnerability Research',
    desc: 'Coverage-guided fuzzing, harness development, and vuln triage at scale.'
  },
  {
    icon: ScanLine,
    title: 'Application Security',
    desc: 'Secure code review, threat modeling, and exploit reproduction with clear fixes.'
  },
  {
    icon: Lock,
    title: 'Cloud & Infra Security',
    desc: 'Kubernetes, container, and cloud posture hardening with attack-path validation.'
  },
  {
    icon: Network,
    title: 'Network & AD Security',
    desc: 'Internal/external network assessments, AD abuse paths, and resilience testing.'
  },
  {
    icon: Cpu,
    title: 'Automation & Tooling',
    desc: 'Custom tooling, pipelines, and integrations to continuously test your estate.'
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Capabilities</h2>
        <p className="text-slate-300 text-center mt-2 mb-10">What we do best</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <s.icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
