import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo only — the image already contains company name and "Powered by Unite Group" */}
          <Link to="/" className="shrink-0">
            <motion.img
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              src="/synergy.png"
              alt="Synergy Greentech Projects Private Limited — Powered by Unite Group, Inc."
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  location.pathname === l.path
                    ? 'text-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <Link to="/contact">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-md shadow-emerald-600/20 transition-colors"
              >
                Request a Quote
              </motion.button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-slate-700" onClick={() => setOpen(true)} aria-label="Open menu">
            <List size={28} weight="regular" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="container-main flex items-center justify-between py-5">
              <img src="/synergy.png" alt="Synergy Greentech" className="h-12 w-auto object-contain" />
              <button onClick={() => setOpen(false)} className="text-slate-700" aria-label="Close menu">
                <X size={28} weight="regular" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center container-main gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`block text-3xl font-semibold tracking-tight ${
                      location.pathname === l.path ? 'text-emerald-600' : 'text-slate-800'
                    }`}
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
