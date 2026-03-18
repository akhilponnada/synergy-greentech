import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Eye, Factory, Certificate, Gear, TreeStructure, Strategy } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-[#fafbfc]">

      {/* ──────────── PAGE HEADER ──────────── */}
      <section className="relative min-h-[60dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070" alt="Team strategy session in modern office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="container-main relative z-10 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">About Synergy Greentech</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
              The company behind the infrastructure
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              We are not a startup. We are not a consultancy. We are a vertically integrated clean energy company that builds real physical infrastructure at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────── OUR STORY ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">Our story</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">Built on engineering, scaled by conviction</h2>
            <div className="space-y-6 text-slate-600 text-[1.05rem] leading-relaxed">
              <p>
                Synergy Greentech Projects Private Limited was founded with a straightforward thesis: the world does not lack renewable energy technology — it lacks companies capable of deploying that technology at the speed and scale the climate crisis demands. From our first project — a 5 MW rooftop solar installation for a textile manufacturer in Gujarat — we understood that clean energy adoption is fundamentally an execution challenge, not a technology challenge.
              </p>
              <p>
                Over the years that followed, we expanded methodically. We added onshore wind to our capabilities. We developed in-house battery storage engineering. We built a sustainability consulting practice staffed by former chief sustainability officers from Fortune 500 companies. At every stage, we invested in deepening our own technical capacity rather than outsourcing to third parties.
              </p>
              <p>
                Today, Synergy Greentech operates across multiple continents with a combined installed capacity exceeding 4.8 gigawatts. We maintain full-time offices, engineering teams, and construction crews in every market we serve. We employ over 2,400 people — the majority of whom are engineers, project managers, and skilled tradespeople who spend their days on construction sites, not in marketing departments.
              </p>
              <p>
                Our strategic backing by <strong className="text-emerald-600 font-bold">Unite Group, Inc.</strong> provides access to a $1.4 billion global procurement network. This affiliation is not cosmetic branding — it is the backbone of our competitive advantage. Unite Group's relationships with Tier 1 equipment manufacturers across 38 countries allow us to source solar panels, wind turbines, inverters, transformers, and cables at institutional volumes and pricing that independent developers cannot access. We pass these savings directly to our clients.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }} className="space-y-6 sticky top-32">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 h-[350px]">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2070" alt="Solar panels stretching to the horizon" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-3xl font-bold text-slate-900 tracking-tight mb-1">2,400+</p>
                <p className="text-sm text-slate-500 font-medium">Full-time employees</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-3xl font-bold text-emerald-600 tracking-tight mb-1">4.8 GW</p>
                <p className="text-sm text-slate-500 font-medium">Installed capacity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── MISSION & VISION ──────────── */}
      <section className="section-padding bg-[#fafbfc]">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { Icon: Target, title: 'Our mission', body: 'To accelerate the global transition to clean energy by providing industrial-grade engineering, procurement, and construction services that make renewable power the most reliable and cost-effective source of electricity for every enterprise client we serve. We measure our success not by the number of press releases we publish, but by the megawatt-hours of fossil generation our plants displace every single day.' },
            { Icon: Eye, title: 'Our vision', body: 'A global energy system where 100% of industrial electricity is generated from renewable sources, where every corporate campus operates its own microgrid, and where the concept of carbon-intensive power generation is remembered only in history books. We intend to build a meaningful fraction of that future ourselves — not advocate for it from the sidelines.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 80, damping: 18 }}
              className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm"
            >
              <item.Icon size={32} weight="duotone" className="text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────── LEADERSHIP PHILOSOPHY ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">Leadership and governance</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Led by engineers, governed by accountability</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Synergy Greentech's executive team consists primarily of career engineers and project directors — people who have spent decades on construction sites, in control rooms, and in front of regulatory commissions. Our leadership philosophy is simple: the people who make strategic decisions about project design, procurement, and construction must have personal experience doing all three.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Factory, title: 'Vertical integration', body: 'We own and operate our entire value chain from engineering design studios to construction fleets to O&M service teams. This eliminates the finger-pointing and coordination failures that plague projects run by coalitions of subcontractors.' },
              { Icon: Certificate, title: 'Quality certifications', body: 'ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and IEC 62446 (PV System Testing). These are not marketing badges — they are audited annually by independent certification bodies.' },
              { Icon: Gear, title: 'Continuous improvement', body: 'Every completed project undergoes a formal lessons-learned review. Findings are documented, distributed across the organisation, and incorporated into our standard operating procedures. This institutional learning is what allows us to improve cost efficiency by 3-5% year over year.' },
              { Icon: TreeStructure, title: 'Decentralised execution', body: 'Project decisions are made by the country-level management team closest to the work, not by remote corporate headquarters. This ensures that local soil conditions, labour markets, regulatory requirements, and cultural contexts are properly accounted for.' },
              { Icon: Strategy, title: 'Risk management', body: 'We maintain dedicated insurance programmes, performance bonds, and liquidated damages frameworks on every project. Our clients are financially protected against delays, underperformance, and equipment defects from day one of construction.' },
              { Icon: Users, title: 'Talent density', body: 'We invest heavily in recruiting and retaining the best engineers in the industry. Competitive compensation, clear career progression, mentoring programmes, and access to global project assignments make Synergy an employer of choice for elite technical talent.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 80, damping: 18 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <v.Icon size={24} weight="duotone" className="text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="section-padding bg-emerald-600">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto">Interested in working with us?</h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-10 max-w-2xl mx-auto">
              We are always looking to partner with organisations that share our commitment to building measurable, bankable clean energy assets. If that describes your company, we would welcome the conversation.
            </p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="bg-white text-emerald-700 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3">
                Contact our team <ArrowRight weight="bold" size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
