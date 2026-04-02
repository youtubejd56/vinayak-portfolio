import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Service from './components/Service'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Myskills from './components/Myskills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalName) => {
    setActiveModal(modalName)
    document.body.style.overflow = 'hidden' // Prevent scroll when modal is open
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto' // Restore scroll
  }

  return (
    <>
        <div className="lightning-overlay"></div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Project />
        <Myskills />
        <Contact />
        <Footer onOpenPrivacy={() => openModal('privacy')} onOpenTerms={() => openModal('terms')} />

        {/* Immersive Modal System */}
        <AnimatePresence>
          {activeModal && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-[#0a0a0c]/80 backdrop-blur-3xl overflow-y-auto"
            >
                {/* Close Button Handle */}
                <button 
                  onClick={closeModal}
                  className="fixed top-8 right-8 z-[120] w-12 h-12 rounded-full bg-white/10 hover:bg-green-400 text-white hover:text-black flex items-center justify-center transition-all shadow-xl"
                >
                    ✕
                </button>

                <div className="w-full h-full pt-20 pb-10">
                   {activeModal === 'privacy' && <Privacy />}
                   {activeModal === 'terms' && <Terms />}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}

export default App
