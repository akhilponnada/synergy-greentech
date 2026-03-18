import { motion } from 'framer-motion';
import { ArrowRight, SolarPanel, Leaf, Lightning, Buildings, ChartLineUp, ShieldCheck, Handshake, Globe, Factory, TreeStructure } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring' as const, stiffness: 80, damping: 18 },
  }),
};

export default function Home() {
  return (
    <div className="bg-[#fafbfc]">

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
            alt="Wind turbines across rolling hills at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>

        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 py-36 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div variants={fade} custom={0} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-emerald-300 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-8 w-max">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Backed by 30+ years of industry expertise
            </motion.div>

            <motion.h1 variants={fade} custom={1} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-8">
              Building the infrastructure for a carbon-free economy
            </motion.h1>

            <motion.p variants={fade} custom={2} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[52ch]">
              Synergy Greentech Projects Private Limited is an integrated engineering, procurement, and construction company specialising in utility-scale solar, wind, and battery storage. We partner with multinational corporations, governments, and industrial operators who require measurable, bankable clean energy outcomes — not promises.
            </motion.p>

            <motion.div variants={fade} custom={3} className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-colors flex items-center gap-3"
                >
                  View our solutions <ArrowRight weight="bold" size={18} />
                </motion.button>
              </Link>
              <Link to="/about">
                <button className="border border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-xl transition-colors">
                  Learn about us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── INTRO / MISSION STATEMENT ──────────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium tracking-tight"
            >
              The planet does not have a technology problem — it has an execution problem. Every year, billions of dollars worth of clean energy capacity remains unbuilt because developers, governments, and corporations lack the engineering precision to deliver at scale. Synergy Greentech exists to close that gap. We combine deep technical capability with the 30+ years of industry expertise behind <span className="text-emerald-600 font-bold">Unite Group, Inc.</span> to execute renewable projects that actually get finished — on time, on budget, and to specification.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICES OVERVIEW ──────────────── */}
      <section className="section-padding bg-[#fafbfc]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Complete green power solutions</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              From rooftop installations to utility-scale solar parks, from zero-investment PPA models to BOOT structures — we deliver full-cycle renewable energy solutions tailored to every scale and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: SolarPanel, title: 'Solar turnkey solutions', color: 'bg-amber-50 text-amber-600', body: 'End-to-end solar project execution — rooftop, ground-mounted, hybrid, and off-grid. Multi-brand Tier 1 equipment, 25-year warranties, and zero-investment financing options available.' },
              { Icon: Factory, title: 'Captive & group captive', color: 'bg-violet-50 text-violet-600', body: 'Ownership-based power models that reduce DISCOM dependency. Industries invest together for long-term, low-cost power with ROI in 4 years and 25 years of free power.' },
              { Icon: Handshake, title: 'PPA — zero investment', color: 'bg-orange-50 text-orange-600', body: 'We install, own, and operate the plant at our cost. You pay only for the power consumed at below-grid rates. Zero capital expenditure required.' },
              { Icon: TreeStructure, title: 'BOOT model', color: 'bg-teal-50 text-teal-600', body: 'Build, own, operate, and transfer. Solar parks and large installations under long-term concession — the path from energy consumer to energy asset owner.' },
              { Icon: Lightning, title: 'Hybrid energy', color: 'bg-indigo-50 text-indigo-600', body: 'Solar + wind + battery storage integration for uninterrupted 24/7 clean power supply. Customised for each site, climate, and load profile.' },
              { Icon: Leaf, title: 'Open access & more', color: 'bg-emerald-50 text-emerald-600', body: 'Direct clean energy supply through open access, rooftop leasing, Bio CNG plants, EPC services, and sustainability consulting — whatever your energy needs demand.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 80, damping: 18 }}
                className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.color}`}>
                  <s.Icon size={24} weight="duotone" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition-colors inline-flex items-center gap-3"
              >
                Explore all solutions in detail <ArrowRight weight="bold" size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────── WHY SYNERGY ──────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">Why choose us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">The Synergy difference</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Hundreds of companies claim to be green energy providers. What separates Synergy Greentech is our uncompromising focus on execution quality and vertical integration. We do not outsource critical engineering. We do not sub-contract procurement. Every watt of capacity we build is designed, sourced, installed, and commissioned by our own teams — giving our clients a single point of accountability from concept to commercial operation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We are powered by <strong className="text-emerald-600">Unite Group, Inc.</strong> — professionals with over 30 years of deep experience in energy infrastructure, procurement, and international project delivery. That expertise is the foundation of everything we do: sourcing Tier 1 equipment at competitive prices and executing projects with the precision of seasoned veterans.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { n: '30+', label: 'Years of expertise' },
                { n: 'EPC', label: 'Full-cycle delivery' },
                { n: 'Tier 1', label: 'Equipment sourcing' },
                { n: '24/7', label: 'Project support' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <p className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{stat.n}</p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/60 h-[550px] hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070"
              alt="Large solar panel array under blue sky"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ──────────────── VALUES STRIP ──────────────── */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="text-center mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Our principles</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Values that drive every decision</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Renewable energy is one of the most capital-intensive industries on earth. Our values exist to protect the enormous trust that our clients place in us when they commit hundreds of millions of dollars to projects we design and build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: ShieldCheck, title: 'Engineering rigour', body: 'Every structural calculation, electrical schematic, and geotechnical report is peer-reviewed by a second licensed engineer before it leaves our office. We treat engineering mistakes the way hospitals treat surgical errors — as unacceptable.' },
              { Icon: Handshake, title: 'Transparent partnerships', body: 'We publish real-time project dashboards for every client showing cost tracking, schedule performance, equipment deliveries, and safety metrics. There are no hidden margins, no surprise change orders, and no information asymmetry.' },
              { Icon: Globe, title: 'Global procurement reach', body: 'Through our affiliation with Unite Group, Inc. — a team of professionals with 30+ years of industry relationships — we access a vetted network of manufacturers. This allows us to source panels, inverters, transformers, and cables at competitive pricing, then pass those savings directly to clients.' },
              { Icon: Buildings, title: 'Local execution intelligence', body: 'We maintain permanent offices and construction crews in every market we operate in. Local knowledge — from soil conditions to utility regulations — prevents the costly surprises that plague foreign developers parachuting into new territories.' },
              { Icon: SolarPanel, title: 'Technology neutrality', body: 'We are not locked into any single equipment vendor. We evaluate panels, inverters, and storage systems on a project-by-project basis using independently verified performance data, selecting the optimal technology stack for each specific site and climate.' },
              { Icon: ChartLineUp, title: 'Measurable outcomes', body: 'We guarantee performance ratios, capacity factors, and energy yield using P50/P90 probabilistic modelling validated by third-party independent engineers. If a plant underperforms our contractual commitments, we bear the financial consequences.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 80, damping: 18 }}
                className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300"
              >
                <v.Icon size={28} weight="duotone" className="text-emerald-400 mb-5" />
                <h3 className="text-lg font-bold tracking-tight mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA BANNER ──────────────── */}
      <section className="section-padding bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto">
              Ready to transition your energy infrastructure?
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are evaluating solar for a single facility or planning a multi-hundred-megawatt portfolio across several countries, our team is ready to scope, design, and deliver the exact solution your organisation requires.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-emerald-700 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
              >
                Start a conversation <ArrowRight weight="bold" size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
