import { motion } from 'framer-motion';
import { ArrowRight, Sun, Wind, Lightning, Leaf, ChartBar, Wrench, TreeStructure, ShieldCheck } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface ServiceBlockProps {
  reverse?: boolean;
  img: string;
  imgAlt: string;
  label: string;
  title: string;
  body: string[];
  features: string[];
  accentColor: string;
  Icon: React.ElementType;
}

function ServiceBlock({ reverse, img, imgAlt, label, title, body, features, accentColor, Icon }: ServiceBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? '' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${accentColor}`}>
          <Icon size={24} weight="duotone" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">{label}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">{title}</h2>
        {body.map((p, i) => (
          <p key={i} className="text-slate-600 leading-relaxed mb-4 text-[1.05rem]">{p}</p>
        ))}
        <ul className="mt-8 grid gap-3">
          {features.map(f => (
            <li key={f} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 h-[450px] ${reverse ? 'lg:order-1' : ''}`}
      >
        <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-[#fafbfc]">

      {/* ──────────── PAGE HEADER ──────────── */}
      <section className="relative min-h-[60dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070" alt="Massive solar farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="container-main relative z-10 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">Our solutions</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
              Integrated clean energy solutions for global enterprise
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Full-cycle engineering, procurement, and construction services across the complete renewable energy spectrum — solar, wind, storage, and strategic advisory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────── EACH SERVICE IN DETAIL ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-main flex flex-col gap-32">

          <ServiceBlock
            Icon={Sun}
            accentColor="bg-amber-50 text-amber-600"
            label="Solar EPC"
            title="Utility-scale and commercial solar engineering, procurement, and construction"
            img="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070"
            imgAlt="Close-up of commercial solar panels"
            body={[
              'Solar photovoltaic generation is the backbone of our business. We design, procure, build, and commission PV plants ranging from 1 megawatt commercial rooftop installations to 500 megawatt utility-scale ground-mount farms. Every project follows our proprietary six-stage delivery methodology — Site Assessment, System Design, Procurement Optimisation, Construction Execution, Grid Interconnection, and Performance Verification — ensuring that no critical step is overlooked or rushed.',
              'Our engineering teams use PVsyst, AutoCAD, ETAP, and proprietary shading analysis software to optimise panel layout, string configuration, and inverter sizing for each unique site. We do not use generic templates. Every system is designed from scratch based on actual topographic survey data, local irradiance records, and the client\'s specific load profile.',
              'On the procurement side, our affiliation with Unite Group, Inc. gives us access to volume pricing from Tier 1 manufacturers including LONGi, Trina Solar, JA Solar, Jinko Solar, Canadian Solar, and First Solar. We procure N-type TOPCon and HJT cell modules as standard, ensuring that our clients receive equipment representing the current state of the art — not last-generation clearance stock.',
            ]}
            features={[
              'Tier 1 N-type TOPCon and HJT cell modules as standard',
              'String and central inverter configurations by SMA, Huawei, and Sungrow',
              'Comprehensive 25-year performance warranties',
              'Real-time SCADA monitoring with anomaly detection',
              'End-to-end permitting and grid interconnection management',
              'Independent energy yield assessment (P50/P90) by third-party engineers',
            ]}
          />

          <ServiceBlock
            reverse
            Icon={Wind}
            accentColor="bg-sky-50 text-sky-600"
            label="Wind energy"
            title="Onshore wind farm development from prospecting through commercial operation"
            img="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070"
            imgAlt="Wind turbines against a clear sky"
            body={[
              'Wind energy represents the highest capacity factor opportunity in many geographies, and Synergy Greentech has built the internal capability to execute onshore wind projects from initial site identification through commercial operation. Our wind division employs dedicated meteorological engineers, structural engineers, and high-voltage electrical engineers who work exclusively on wind projects.',
              'Before committing to any site, we conduct a minimum 12-month wind resource measurement campaign using hub-height anemometry towers and remote sensing (LiDAR and SoDAR) equipment. This data is processed using industry-standard WAsP and Openwind software to produce bankable energy yield estimates that satisfy the due diligence requirements of project finance lenders.',
              'Our construction teams have erected over 800 individual turbines across multiple wind farms, working with Vestas, Siemens Gamesa, Goldwind, Nordex, and Enercon platforms. We maintain certified crane operators, blade installation teams, and high-voltage commissioning engineers on permanent payroll — eliminating the scheduling delays and quality risks associated with subcontracted labour.',
            ]}
            features={[
              '12-month minimum wind resource measurement campaigns',
              'Micrositing optimisation using CFD and WAsP modelling',
              'Partnerships with Vestas, Siemens Gamesa, Goldwind, and Nordex',
              'In-house crane operations and blade installation crews',
              'Environmental and aviation impact assessments',
              'Full SCADA system integration with predictive maintenance',
            ]}
          />

          <ServiceBlock
            Icon={Lightning}
            accentColor="bg-violet-50 text-violet-600"
            label="Energy storage"
            title="Industrial battery storage for grid stability, peak management, and resilience"
            img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
            imgAlt="Energy infrastructure network"
            body={[
              'Intermittency is the single greatest barrier to 100% renewable electricity. Battery energy storage systems (BESS) solve this problem by buffering surplus generation and dispatching it precisely when demand peaks or renewable output dips. Synergy Greentech designs, engineers, and commissions BESS installations ranging from 500 kWh behind-the-meter systems to 200 MWh utility-scale front-of-meter deployments.',
              'Our storage engineering team evaluates each project on its own merits, selecting between lithium iron phosphate (LFP), nickel manganese cobalt (NMC), and vanadium redox flow battery chemistries based on the specific requirements of cy cycling depth, ambient temperature range, space constraints, and project economics. We are not locked into any single battery vendor — we specify the optimal technology for each application.',
              'Beyond the hardware, we integrate advanced battery management systems (BMS) and energy management systems (EMS) that coordinate storage dispatch with generation assets, grid signals, and real-time electricity pricing. This software layer transforms raw battery capacity into an intelligent financial asset that can participate in frequency regulation markets, demand response programmes, and energy arbitrage strategies.',
            ]}
            features={[
              'LFP, NMC, and vanadium redox flow battery chemistries',
              'Standalone and hybrid (co-located with solar/wind) configurations',
              'Advanced BMS and EMS integration for automated dispatch',
              'Participation in frequency regulation and ancillary services markets',
              'Thermal management and fire suppression engineering',
              'Capacity degradation modelling and warranty structuring',
            ]}
          />

          <ServiceBlock
            reverse
            Icon={Leaf}
            accentColor="bg-emerald-50 text-emerald-600"
            label="Sustainability advisory"
            title="Corporate sustainability strategy, carbon accounting, and ESG reporting"
            img="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
            imgAlt="Corporate meeting space"
            body={[
              'Clean energy hardware is only half the equation. The other half is the strategic framework that determines how an organisation measures, reports, and continuously improves its environmental performance. Synergy Greentech\'s sustainability consulting division works with C-suite executives, board directors, and sustainability officers to build robust, auditable sustainability programmes.',
              'We begin every engagement with a comprehensive Scope 1, 2, and 3 greenhouse gas inventory using the GHG Protocol Corporate Standard. This baseline tells the organisation exactly where its emissions come from — and more importantly, which emission sources represent the largest and most cost-effective reduction opportunities. From there, we develop science-based targets aligned with the SBTi framework and build implementation roadmaps with specific milestones, responsible owners, and measurable KPIs.',
              'Our team also supports ESG disclosure and reporting across GRI, SASB, CDP, TCFD, and EU CSRD frameworks. We understand that sustainability reporting is increasingly a compliance requirement — not a voluntary exercise — and we ensure our clients are audit-ready for every framework relevant to their industry and jurisdiction.',
            ]}
            features={[
              'Scope 1, 2, and 3 greenhouse gas inventories (GHG Protocol)',
              'Science-based target setting aligned with SBTi',
              'ESG disclosure support: GRI, SASB, CDP, TCFD, CSRD',
              'Carbon offset portfolio development and verification',
              'Supply chain sustainability assessment and scoring',
              'Board-level sustainability governance advisory',
            ]}
          />

        </div>
      </section>

      {/* ──────────── PROCESS ──────────── */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="mb-20 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Our process</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How we deliver</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Every project follows our six-stage delivery methodology. This framework has been refined over hundreds of deployments and ensures that quality, schedule, and budget are protected at every phase.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: '01', Icon: ChartBar, title: 'Feasibility and site assessment', body: 'Resource measurement, geotechnical studies, environmental impact assessments, permitting landscape analysis, and preliminary financial modelling.' },
              { n: '02', Icon: TreeStructure, title: 'System design and engineering', body: 'Detailed engineering design including electrical single-line diagrams, structural calculations, civil works drawings, and grid interconnection studies.' },
              { n: '03', Icon: ShieldCheck, title: 'Procurement optimisation', body: 'Competitive tendering across our global supplier network, technical bid evaluation, factory acceptance testing, and logistics coordination.' },
              { n: '04', Icon: Wrench, title: 'Construction execution', body: 'Full construction management including civil works, mechanical installation, electrical wiring, high-voltage infrastructure, and site safety management.' },
              { n: '05', Icon: Lightning, title: 'Commissioning and grid connection', body: 'System testing, grid compliance verification, SCADA configuration, performance ratio measurement, and handover to the operations team.' },
              { n: '06', Icon: Leaf, title: 'Operations and asset management', body: 'Long-term preventive maintenance, real-time monitoring, performance optimisation, warranty claim management, and quarterly reporting.' },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 80, damping: 18 }}
                className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
              >
                <p className="text-emerald-400 font-bold text-sm mb-4 font-mono">{step.n}</p>
                <step.Icon size={24} weight="duotone" className="text-slate-300 mb-4" />
                <h3 className="text-lg font-bold tracking-tight mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="section-padding bg-emerald-600">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto">
              Have a project in mind?
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-10 max-w-2xl mx-auto">
              Tell us about your energy requirements, site locations, and timeline expectations. Our engineering team will respond within 48 hours with a preliminary assessment and next steps.
            </p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="bg-white text-emerald-700 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3">
                Request a proposal <ArrowRight weight="bold" size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
