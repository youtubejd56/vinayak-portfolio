import React from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
    return (
        <section className='relative min-h-screen bg-[#0a0a0c] text-white py-32 overflow-hidden flex items-center justify-center'>
            {/* Background Animations (Unified Universe) */}
            <div className="glow-sphere w-64 h-64 bg-green-500/10 top-10 left-10"></div>
            <div className="glow-sphere w-96 h-96 bg-blue-500/5 bottom-10 right-10" style={{ animationDelay: '2s' }}></div>
            
            {/* Falling Snowflakes */}
            {[...Array(15)].map((_, i) => (
                <div key={i} className="snowflake" style={{ 
                    left: `${Math.random() * 100}%`, 
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 8 + 5}s`,
                    opacity: Math.random() * 0.3
                }}></div>
            ))}

            {/* High-Speed Rain */}
            {[...Array(12)].map((_, i) => (
                <div key={i} className="rain-drop" style={{ 
                    left: `${Math.random() * 100}%`, 
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 1.5 + 1}s`,
                    opacity: Math.random() * 0.2
                }}></div>
            ))}

            <div className='container mx-auto px-6 relative z-20 max-w-4xl'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='bg-white/[0.03] backdrop-blur-[60px] p-12 md:p-16 rounded-[3.5rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]'
                >
                    <div className="mb-12 text-center">
                        <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Terms & Conditions</span>
                        <h1 className='text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white font-lobster'>Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Service</span></h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>
                    </div>

                    <div className='space-y-10 text-gray-400 font-Barlow text-lg leading-relaxed'>
                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>1. Use of Content</h2>
                            <p>The code, designs, and interactive elements within this "Universe" are original works. Unauthorized reproduction or commercial distribution of my digital creations is restricted.</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>2. Collaboration & Projects</h2>
                            <p>Agreement to collaborate or hire is subject to separate contractual conditions. This portfolio serves as a showcase of my capabilities and past work only.</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>3. Respectful Interaction</h2>
                            <p>Visitors are expected to use the contact form respectfully. Spamming, malicious inquiry, or attempt to compromise the site's security is strictly prohibited.</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>4. Governing Law</h2>
                            <p>Any disputes related to this site or my services will be governed by international digital asset laws and local regulations applicable to my professional base.</p>
                        </section>
                    </div>

                    <div className="mt-16 text-center">
                        <a href="/" className='inline-flex items-center justify-center px-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-green-400 hover:text-black transition-all duration-500 font-black uppercase text-[10px] tracking-widest'>Back to Universe</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Terms
