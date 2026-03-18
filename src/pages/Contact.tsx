import { motion } from 'framer-motion';
import { MapPin, Phone, EnvelopeSimple, Clock, Buildings } from '@phosphor-icons/react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      company: fd.get('company'),
      service: fd.get('service'),
      capacity: fd.get('capacity'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('sent');
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please email us directly at info@synergygreentech.in');
    }
  }

  return (
    <div className="bg-[#fafbfc]">

      {/* ──────────── PAGE HEADER ──────────── */}
      <section className="relative min-h-[50dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" alt="Modern office tower" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="container-main relative z-10 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">Get in touch</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
              Let's discuss your energy transition
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Whether you are exploring a feasibility study for a single facility or planning a multi-site renewable rollout, our enterprise sales team is ready to help scope the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────── CONTACT BODY ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* LEFT: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Contact information</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our enterprise sales team responds to all qualified inquiries within one business day. For urgent project requirements, please call our direct engineering line during business hours.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { Icon: Buildings, title: 'Company', lines: ['Synergy Greentech Projects Private Limited'] },
                { Icon: EnvelopeSimple, title: 'Email', lines: ['info@synergygreentech.in'] },
                { Icon: Phone, title: 'Phone', lines: ['+1 (415) 839-2740'] },
                { Icon: Clock, title: 'Business hours', lines: ['Monday – Friday: 8:00 AM – 6:00 PM PST', 'Emergency support: 24/7/365'] },
                { Icon: MapPin, title: 'Regional offices', lines: ['Mumbai, India', 'Dubai, UAE', 'London, United Kingdom', 'Singapore'] },
              ].map(item => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <item.Icon size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h4>
                    {item.lines.map(l => (
                      <p key={l} className="text-sm text-slate-500 leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Powered by block */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Powered by</p>
              <p className="text-xl font-bold text-slate-900 tracking-tight mb-1">Unite Group, Inc.</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                244 Fifth Avenue, Suite #1849<br />
                New York, NY 10001
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-10 md:p-14 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Submit an inquiry</h3>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Provide as much detail as possible about your energy requirements. Our engineering team will review your submission and respond with a preliminary assessment within 48 hours.
            </p>

            {status === 'sent' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                <h4 className="text-xl font-bold text-emerald-700 mb-2">Inquiry submitted</h4>
                <p className="text-emerald-600 leading-relaxed">
                  Thank you for reaching out. Our enterprise sales team will review your inquiry and respond within 48 hours. You will receive a confirmation at the email address you provided.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-emerald-700 font-semibold hover:underline">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">First name *</label>
                    <input name="firstName" type="text" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="Rajesh" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Last name *</label>
                    <input name="lastName" type="text" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="Mehta" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Corporate email *</label>
                    <input name="email" type="email" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="rajesh@corporation.com" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone number</label>
                    <input name="phone" type="tel" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company name *</label>
                  <input name="company" type="text" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="Tata Steel Ltd." required />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service of interest</label>
                  <select name="service" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50 appearance-none cursor-pointer">
                    <option>Solar EPC (utility-scale or commercial)</option>
                    <option>Onshore wind development</option>
                    <option>Battery energy storage systems</option>
                    <option>Sustainability consulting and ESG</option>
                    <option>Multi-technology portfolio</option>
                    <option>Other / general inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Estimated project capacity (if known)</label>
                  <input name="capacity" type="text" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50" placeholder="e.g. 50 MW solar, 10 MWh storage" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Project description *</label>
                  <textarea name="message" className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-slate-50/50 resize-none" rows={5} placeholder="Please describe your project requirements, site locations, timeline expectations, and any specific technical constraints our engineering team should be aware of." required></textarea>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-3 text-red-700 text-sm">
                    {errorMsg}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.01 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className={`font-semibold px-8 py-4 rounded-xl shadow-lg transition-colors mt-4 ${
                    status === 'sending'
                      ? 'bg-slate-300 text-slate-500 cursor-wait'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                  }`}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit inquiry'}
                </motion.button>

                <p className="text-xs text-slate-400 leading-relaxed">
                  By submitting this form, you agree to our privacy policy. We will use your information solely to respond to your inquiry and will not share it with third parties.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
