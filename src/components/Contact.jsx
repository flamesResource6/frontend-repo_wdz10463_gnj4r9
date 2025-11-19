import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('Sent! We will get back to you shortly.')
      setForm({ name: '', email: '', company: '', subject: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Contact</h2>
        <p className="text-slate-300 text-center mt-2 mb-10">Tell us about your challenge</p>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company (optional)" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject (optional)" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="What do you need help with?" rows="5" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          <button type="submit" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">Send</button>
          {status && <p className="text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
