import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Projects', href: '#project' },
    { name: 'Skills', href: '#my skill' },
    { name: 'Contact', href: '#contactme' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 bg-[#0a0a0c]/80 backdrop-blur-[40px] border-b border-white/10 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className='container mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between'>

          <div className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-lobster cursor-pointer'>
            Jd mega creations
          </div>

          <ul className='hidden lg:flex items-center space-x-10'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-green-400 transition-all relative group'
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a
              href="#contactme"
              className='hidden md:flex items-center justify-center px-8 py-2.5 rounded-full bg-white/5 hover:bg-green-400 text-white hover:text-black border border-white/10 hover:border-green-400 font-black text-[10px] tracking-widest uppercase transition-all duration-500'
            >
              Get In Touch
            </a>

            <button className='lg:hidden relative z-[110]' onClick={() => setOpenMenu(!openMenu)}>
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`h-0.5 bg-white transition-all rounded-full ${openMenu ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
                <span className={`h-0.5 bg-white transition-all rounded-full ${openMenu ? 'opacity-0' : 'w-5'}`}></span>
                <span className={`h-0.5 bg-white transition-all rounded-full ${openMenu ? 'w-8 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Immersive Mobile Menu Overlay */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed top-0 right-0 w-full h-screen bg-[#0a0a0c]/98 backdrop-blur-[80px] z-[105] flex flex-col items-center justify-center overflow-hidden'
          >
            {/* Background Storm Elements Inside Menu (Sync-ed) */}
            <div className="lightning-overlay" style={{ animationDelay: '2s', opacity: 0.05 }}></div>
            <div className="glow-sphere w-64 h-64 bg-green-500/10 top-0 left-0"></div>
            <div className="glow-sphere w-80 h-80 bg-blue-500/10 bottom-0 right-0"></div>

            {/* Falling Snow Inside Menu */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="snowflake" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.2
              }}></div>
            ))}

            {/* Centered Brand Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className='absolute top-20 text-3xl font-lobster text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 z-[120]'
            >
              Jd mega creations
            </motion.div>

            {/* Close Button Inside Modal (Since it's covering Navbar) */}
            <button
              className='absolute top-6 right-6 z-[120] text-gray-400 hover:text-white transition-colors'
              onClick={() => setOpenMenu(false)}
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className='h-0.5 w-8 bg-white rounded-full rotate-45 translate-y-2'></span>
                <span className='h-0.5 w-8 bg-white rounded-full -rotate-45 -translate-y-2 opacity-100'></span>
              </div>
            </button>

            {/* Staggered Navigation Links */}
            <ul className='flex flex-col items-center gap-6 mt-10 relative z-[110]'>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring', damping: 20 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpenMenu(false)}
                    className='group relative py-2 text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-all text-center flex flex-col items-center'
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500"
                    ></motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='absolute bottom-20 flex gap-10 text-2xl text-gray-500 z-[110]'
            >
              <a href="https://www.instagram.com/youtube_jd_/" className='hover:text-green-400 transition-colors'><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/ct-vinayak-4271092ba" className='hover:text-green-400 transition-colors'><FaLinkedin /></a>
              <a href="https://github.com/youtubejd56" className='hover:text-green-400 transition-colors'><FaGithub /></a>
            </motion.div>

            {/* Bottom Tagline */}
            <p className='absolute bottom-10 text-[8px] uppercase tracking-[0.4em] text-gray-600 font-black z-[110]'>Design Universe • 2026</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar