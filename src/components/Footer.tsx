import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-28 pb-10">
      <div className="container-main">
        {/* Upper grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/synergy.png" alt="Synergy Greentech" className="h-14 w-auto object-contain brightness-0 invert opacity-80 mb-6" />
            <p className="text-sm leading-relaxed max-w-xs">
              Engineering decisive renewable energy systems for industrial-scale deployment across continents.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5 uppercase">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Solar EPC</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Wind generation</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Battery storage</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Sustainability consulting</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Carbon offset programs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5 uppercase">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Synergy</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Leadership team</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact sales</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Press &amp; media</Link></li>
            </ul>
          </div>

          {/* Contact & Unite Group */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5 uppercase">Reach us</h4>
            <ul className="flex flex-col gap-3 text-sm mb-8">
              <li>info@synergygreentech.in</li>
              <li>+1 (415) 839-2740</li>
            </ul>

            <div className="border border-slate-700/50 rounded-xl p-5 bg-slate-800/30">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-2">Powered by</p>
              <p className="text-white text-sm font-semibold mb-1">Unite Group, Inc.</p>
              <p className="text-xs leading-relaxed">
                244 Fifth Avenue, Suite #1849<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Synergy Greentech Projects Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
