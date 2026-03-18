import { motion } from 'framer-motion';
import { ArrowRight, Sun, Lightning, Leaf, ChartBar, Wrench, TreeStructure, ShieldCheck, Handshake, Factory, ChartLineUp, House, Plugs, BatteryFull } from '@phosphor-icons/react';
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
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
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
              Complete green power solutions for every scale
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              From rooftop installations to utility-scale solar parks, from captive power plants to hybrid energy systems — we deliver full-cycle renewable energy solutions with zero upfront investment options and 100% financing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────── EACH SERVICE IN DETAIL ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-main flex flex-col gap-32">

          {/* 1. Solar Turnkey Solutions */}
          <ServiceBlock
            Icon={Sun}
            accentColor="bg-amber-50 text-amber-600"
            label="Solar turnkey solutions"
            title="End-to-end solar project execution from design to commissioning"
            img="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070"
            imgAlt="Commercial solar panel installation"
            body={[
              'We handle every aspect of solar project delivery — planning, procurement, installation, and commissioning — so our clients never have to coordinate between multiple vendors. Whether it is a commercial rooftop system, a ground-mounted farm, or an off-grid installation, our teams deliver turnkey solutions that are operational on day one.',
              'Our engineering teams use PVsyst, AutoCAD, ETAP, and proprietary shading analysis software to optimise panel layout, string configuration, and inverter sizing for each unique site. Every system is designed from scratch based on actual topographic survey data, local irradiance records, and the client\'s specific load profile.',
              'Through Unite Group, Inc. — whose professionals bring over 30 years of industry relationships — we source N-type TOPCon and HJT cell modules from Tier 1 manufacturers including LONGi, Trina Solar, JA Solar, Jinko Solar, Canadian Solar, and First Solar. Multi-brand options give our clients the flexibility to choose the right technology for their budget and performance requirements.',
            ]}
            features={[
              'Rooftop, ground-mounted, hybrid, and off-grid configurations',
              'Multi-brand solar and wind products for customer choice',
              'Tier 1 N-type TOPCon and HJT cell modules as standard',
              'String and central inverter configurations by SMA, Huawei, and Sungrow',
              '25-year linear performance warranties',
              'Real-time SCADA monitoring with anomaly detection',
            ]}
          />

          {/* 2. EPC Services */}
          <ServiceBlock
            reverse
            Icon={Wrench}
            accentColor="bg-sky-50 text-sky-600"
            label="EPC services"
            title="Engineering, procurement, and construction for utility, commercial, and industrial plants"
            img="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070"
            imgAlt="Renewable energy infrastructure"
            body={[
              'Our EPC division handles the full lifecycle of renewable energy projects — from initial feasibility studies and detailed engineering design through equipment procurement, civil and electrical construction, and grid interconnection. We work across utility-scale, commercial, and industrial segments in collaboration with leading local EPC partners.',
              'High-quality engineering with trusted procurement and execution is non-negotiable. Every structural calculation, electrical schematic, and geotechnical report is peer-reviewed before it leaves our office. Optimised cost, efficiency, and sustainability are guaranteed through our rigorous project management methodology.',
              'Our construction teams have deep experience erecting solar plants and wind turbines, working with leading OEM platforms. We maintain certified crane operators, installation teams, and high-voltage commissioning engineers — eliminating the scheduling delays and quality risks associated with subcontracted labour.',
            ]}
            features={[
              'Full-cycle EPC for solar, wind, and hybrid plants',
              'Collaboration with leading local and international EPC partners',
              'In-house civil, mechanical, and electrical construction crews',
              'Peer-reviewed engineering on every project',
              'Grid interconnection and SCADA integration',
              'Independent energy yield assessment (P50/P90)',
            ]}
          />

          {/* 3. Captive & Group Captive Power */}
          <ServiceBlock
            Icon={Factory}
            accentColor="bg-violet-50 text-violet-600"
            label="Captive & group captive"
            title="Ownership-based power models that reduce dependency on DISCOMs"
            img="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070"
            imgAlt="Industrial solar power installation"
            body={[
              'Captive and group captive power plants allow industries to generate their own electricity at a fraction of grid tariff rates, eliminating dependency on distribution companies (DISCOMs). In the captive model, a single entity owns and operates a dedicated power plant. In the group captive model, multiple industries invest together and share the generated power — reducing individual capital exposure while securing long-term, low-cost electricity.',
              'We structure group captive arrangements with full transparency — clear equity allocations, defined offtake agreements, and guaranteed savings. Industries that participate typically see a return on investment within 4 years and enjoy free power for the remaining 21+ years of the plant\'s life.',
              'Our team handles everything: SPV formation, equity structuring, power purchase agreements, land acquisition, plant engineering, grid connectivity, and long-term operations and maintenance. The result is a turnkey ownership model that delivers clean, affordable power with no surprises.',
            ]}
            features={[
              'Captive and group captive ownership structures',
              'Zero investment models with 100% bank financing available',
              'ROI within 4 years, 25 years of free power thereafter',
              'SPV formation, equity structuring, and offtake agreements',
              'Transparent cost structure with guaranteed energy savings',
              'Full O&M and performance management included',
            ]}
          />

          {/* 4. Open Access Power */}
          <ServiceBlock
            reverse
            Icon={Plugs}
            accentColor="bg-emerald-50 text-emerald-600"
            label="Open access power"
            title="Direct clean energy supply from solar and wind farms through open access"
            img="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070"
            imgAlt="Power transmission infrastructure"
            body={[
              'Open access allows industrial and commercial consumers to purchase electricity directly from renewable energy generators instead of from the local DISCOM. This model enables significant savings on electricity bills — often 20-40% compared to grid tariffs — while simultaneously reducing the organisation\'s carbon footprint.',
              'We offer flexible open access models including captive, group captive, and third-party access arrangements. Our team manages the regulatory approvals, transmission arrangements, scheduling, and billing so that our clients simply receive clean, low-cost power without the operational complexity.',
              'For industries, hospitals, malls, warehouses, cold storages, processing plants, educational institutions, and large commercial establishments, open access is often the single most impactful step they can take to reduce operating costs and meet sustainability commitments at the same time.',
            ]}
            features={[
              '20-40% savings compared to grid tariffs',
              'Captive, group captive, and third-party access models',
              'Regulatory approval and transmission management',
              'Scheduling, billing, and compliance handled end-to-end',
              'Suitable for industries, hospitals, malls, warehouses, and institutions',
              'Clean energy with measurable carbon reduction',
            ]}
          />

          {/* 5. PPA (Power Purchase Agreement) */}
          <ServiceBlock
            Icon={Handshake}
            accentColor="bg-orange-50 text-orange-600"
            label="PPA — Power purchase agreements"
            title="Zero-investment solar energy under long-term power purchase agreements"
            img="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070"
            imgAlt="Corporate building with solar"
            body={[
              'Under a Power Purchase Agreement, Synergy Greentech installs, owns, and operates a solar power plant on the client\'s premises at zero cost to the client. The client pays only for the electricity consumed — typically at a rate significantly lower than the prevailing grid tariff. There is no upfront capital investment, no equipment ownership burden, and no maintenance responsibility.',
              'PPA models are ideal for industries and businesses that want the benefits of solar power without the capital commitment. The client locks in a fixed or escalating power rate for 15-25 years, providing long-term cost predictability that grid tariffs simply cannot offer. We handle everything: system design, financing, installation, grid connectivity, and ongoing O&M.',
              'This is solar energy delivered as a service. The client\'s only obligation is to consume the power generated and pay for it at the agreed rate — which is almost always lower than what they are currently paying the DISCOM.',
            ]}
            features={[
              'Zero upfront investment — no capital expenditure required',
              'Pay only for the energy consumed at below-grid rates',
              'Fixed or escalating tariff for 15-25 year contract term',
              'We own, operate, and maintain the plant at our cost',
              'Long-term cost predictability and savings',
              'Ideal for industries, malls, hospitals, and commercial establishments',
            ]}
          />

          {/* 6. BOOT Model */}
          <ServiceBlock
            reverse
            Icon={TreeStructure}
            accentColor="bg-teal-50 text-teal-600"
            label="BOOT model"
            title="Build, own, operate, and transfer — solar parks and long-term energy investments"
            img="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
            imgAlt="Large-scale wind and solar farm"
            body={[
              'The BOOT (Build, Own, Operate, Transfer) model is designed for organisations and investors who want exposure to renewable energy assets without managing the operational complexity. Under this model, Synergy Greentech builds the solar or wind plant, owns and operates it for a defined concession period (typically 15-25 years), and then transfers ownership to the client at the end of the term.',
              'During the concession period, the client receives clean power at pre-agreed rates while we handle all maintenance, performance optimisation, insurance, and regulatory compliance. At transfer, the client receives a fully operational asset with documented performance history and remaining useful life.',
              'The BOOT model is particularly attractive for solar parks, large industrial installations, and institutional investors seeking long-term partnerships and stable returns from renewable energy infrastructure. It creates a clear path from energy consumer to energy asset owner.',
            ]}
            features={[
              '15-25 year concession period with guaranteed power supply',
              'Zero operational burden on the client during concession',
              'Full ownership transfer at end of term',
              'Ideal for solar parks and large-scale installations',
              'Attractive for institutional investors seeking stable returns',
              'Complete performance documentation and asset handover',
            ]}
          />

          {/* 7. Hybrid Energy Solutions */}
          <ServiceBlock
            Icon={Lightning}
            accentColor="bg-indigo-50 text-indigo-600"
            label="Hybrid energy"
            title="Integration of solar, wind, and storage for uninterrupted power supply"
            img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
            imgAlt="Energy infrastructure network"
            body={[
              'Hybrid energy systems combine multiple generation sources — typically solar and wind — with battery storage to create power plants that deliver electricity around the clock. By pairing technologies with complementary generation profiles (solar peaks during the day, wind often during early morning and evening), hybrid plants achieve significantly higher capacity factors than single-technology installations.',
              'Our engineering team designs customised hybrid configurations that maximise generation and minimise intermittency for each specific site and load profile. We integrate advanced battery management and energy management systems that coordinate dispatch across all generation and storage assets automatically.',
              'For industries and communities that need reliable, 24/7 clean power, hybrid energy is the definitive solution. We design, build, and commission hybrid systems from small commercial installations to large industrial and community-scale deployments.',
            ]}
            features={[
              'Solar + wind + battery storage integration',
              'Higher capacity factors than single-technology plants',
              'LFP, NMC, and flow battery chemistry options',
              'Advanced BMS and EMS for automated dispatch',
              'Frequency regulation and peak shaving capabilities',
              'Customised for each site, climate, and load profile',
            ]}
          />

          {/* 8. Rooftop Solar & Government Subsidy Support */}
          <ServiceBlock
            reverse
            Icon={House}
            accentColor="bg-rose-50 text-rose-600"
            label="Rooftop solar"
            title="Residential and commercial rooftop installations with government subsidy support"
            img="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070"
            imgAlt="Rooftop solar panels on building"
            body={[
              'Rooftop solar is the fastest, most accessible entry point into renewable energy. We design and install rooftop PV systems for homes, offices, factories, hospitals, educational institutions, function halls, and commercial buildings — with options for zero upfront investment through 100% bank financing.',
              'We actively support clients in accessing government programmes and subsidies that make rooftop solar even more affordable. Our team handles the entire application process, documentation, and compliance requirements so that our clients receive every benefit they are entitled to without navigating bureaucratic complexity.',
              'For commercial and industrial customers, rooftop solar can reduce electricity bills by up to 90%. With ROI typically achieved within 4 years and 25 years of virtually free power thereafter, rooftop solar is one of the strongest financial decisions any property owner can make.',
            ]}
            features={[
              'Residential, commercial, and industrial rooftop systems',
              'Zero down payment — 100% bank loan options available',
              'Pay through savings: reduced electricity bill becomes EMI',
              '48-60 month flexible financing tenure',
              'Government subsidy application and processing support',
              'Up to 90% savings on electricity bills',
            ]}
          />

          {/* 9. Rooftop Solar Lease Model */}
          <ServiceBlock
            Icon={ChartLineUp}
            accentColor="bg-cyan-50 text-cyan-600"
            label="Solar lease model"
            title="Rooftop solar under long-term lease for commercial buildings"
            img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            imgAlt="Modern commercial building"
            body={[
              'Our rooftop solar lease model is designed specifically for commercial building owners who have available roof space but do not want to invest in or manage a solar installation themselves. Under this model, we lease the rooftop, install and operate a solar power plant, and either supply the generated power to the building owner at discounted rates or export it to the grid.',
              'The building owner earns consistent lease rental income from their otherwise unused roof space while contributing to the clean energy transition. We handle all aspects of the installation, grid connectivity, maintenance, and regulatory compliance.',
              'This model works exceptionally well for large commercial buildings, warehouses, factories, malls, and institutional campuses with significant roof area. It creates a passive income stream for the property owner with zero investment and zero risk.',
            ]}
            features={[
              'Earn lease rental income from unused rooftop space',
              'Zero investment and zero risk for the building owner',
              'We install, own, operate, and maintain the system',
              'Ideal for large commercial, industrial, and institutional rooftops',
              'Discounted power supply option for the building occupant',
              'Long-term lease agreements (15-25 years)',
            ]}
          />

          {/* 10. Bio CNG */}
          <ServiceBlock
            reverse
            Icon={Leaf}
            accentColor="bg-emerald-50 text-emerald-600"
            label="Bio CNG"
            title="Bio CNG plant consultation and construction for sustainable fuel production"
            img="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070"
            imgAlt="Green fields and sustainable agriculture"
            body={[
              'Bio CNG (Compressed Natural Gas derived from biogas) represents one of the most promising emerging opportunities in the renewable energy space. By processing agricultural waste, food waste, municipal solid waste, and other organic feedstocks through anaerobic digestion, Bio CNG plants produce clean fuel that can directly replace conventional CNG and diesel in vehicles, industrial burners, and power generation.',
              'We provide end-to-end consultation and construction services for Bio CNG plants — from feedstock assessment and plant design through permitting, construction, commissioning, and offtake structuring. Our team helps clients identify viable feedstock supply chains, secure financing, and connect with gas distribution networks.',
              'Bio CNG is particularly attractive in agriculture-heavy regions where feedstock is abundantly available and conventional fuel costs are high. It creates a circular economy: waste becomes fuel, and the digestate byproduct becomes organic fertiliser.',
            ]}
            features={[
              'End-to-end Bio CNG plant consultation and construction',
              'Feedstock assessment and supply chain planning',
              'Plant design, permitting, and commissioning',
              'Offtake structuring and gas distribution connectivity',
              'Circular economy: waste to fuel to fertiliser',
              'Financing support and project economics modelling',
            ]}
          />

          {/* 11. Sustainability Consulting */}
          <ServiceBlock
            Icon={BatteryFull}
            accentColor="bg-slate-100 text-slate-600"
            label="Sustainability advisory"
            title="Corporate sustainability strategy, carbon accounting, and ESG reporting"
            img="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
            imgAlt="Corporate meeting space"
            body={[
              'Clean energy hardware is only half the equation. The other half is the strategic framework that determines how an organisation measures, reports, and continuously improves its environmental performance. Our sustainability consulting division works with C-suite executives, board directors, and sustainability officers to build robust, auditable sustainability programmes.',
              'We begin every engagement with a comprehensive Scope 1, 2, and 3 greenhouse gas inventory using the GHG Protocol Corporate Standard. From there, we develop science-based targets aligned with the SBTi framework and build implementation roadmaps with specific milestones, responsible owners, and measurable KPIs.',
              'Our team also supports ESG disclosure and reporting across GRI, SASB, CDP, TCFD, and EU CSRD frameworks. We ensure our clients are audit-ready for every framework relevant to their industry and jurisdiction.',
            ]}
            features={[
              'Scope 1, 2, and 3 greenhouse gas inventories',
              'Science-based target setting aligned with SBTi',
              'ESG disclosure support: GRI, SASB, CDP, TCFD, CSRD',
              'Carbon offset portfolio development and verification',
              'Supply chain sustainability assessment',
              'Board-level sustainability governance advisory',
            ]}
          />

        </div>
      </section>

      {/* ──────────── INDUSTRIES WE SERVE ──────────── */}
      <section className="section-padding bg-[#fafbfc]">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">Who we serve</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Industries and sectors</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our solutions are designed for any organisation that consumes significant electricity and wants to reduce costs, achieve energy independence, and meet sustainability commitments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Industries', 'Hospitals', 'Malls & Retail', 'Warehouses', 'Cold Storages',
              'Rice Mills', 'Educational Institutions', 'Processing Plants', 'Function Halls',
              'Offices', 'Theatres', 'NGOs', 'Hotels', 'Residential', 'Data Centres', 'Government',
              'Agriculture', 'EV Charging',
            ].map((sector, i) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.03, type: 'spring', stiffness: 80, damping: 18 }}
                className="bg-white border border-slate-100 rounded-xl px-4 py-4 text-center text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
              >
                {sector}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── PROCESS ──────────── */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="mb-20 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Our process</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How we deliver</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Every project follows our six-stage delivery methodology. This framework has been refined over years of deployments and ensures that quality, schedule, and budget are protected at every phase.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: '01', Icon: ChartBar, title: 'Feasibility and site assessment', body: 'Resource measurement, geotechnical studies, environmental impact assessments, permitting landscape analysis, and preliminary financial modelling.' },
              { n: '02', Icon: TreeStructure, title: 'System design and engineering', body: 'Detailed engineering design including electrical single-line diagrams, structural calculations, civil works drawings, and grid interconnection studies.' },
              { n: '03', Icon: ShieldCheck, title: 'Procurement optimisation', body: 'Competitive tendering across our supplier network, technical bid evaluation, factory acceptance testing, and logistics coordination.' },
              { n: '04', Icon: Wrench, title: 'Construction execution', body: 'Full construction management including civil works, mechanical installation, electrical wiring, high-voltage infrastructure, and site safety management.' },
              { n: '05', Icon: Lightning, title: 'Commissioning and grid connection', body: 'System testing, grid compliance verification, SCADA configuration, performance ratio measurement, and handover to the operations team.' },
              { n: '06', Icon: Leaf, title: 'Operations and asset management', body: 'Long-term preventive maintenance, real-time monitoring, performance optimisation, warranty claim management, and quarterly reporting. 5-year free AMC included.' },
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

      {/* ──────────── SUPPORT STRIP ──────────── */}
      <section className="py-16 bg-emerald-50 border-y border-emerald-100">
        <div className="container-main grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '24/7', label: 'Technical support' },
            { stat: '5 Years', label: 'Free AMC included' },
            { stat: 'TATA AIG', label: 'Insurance coverage' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-emerald-700 tracking-tight mb-1">{item.stat}</p>
              <p className="text-sm text-emerald-600 font-medium">{item.label}</p>
            </div>
          ))}
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
