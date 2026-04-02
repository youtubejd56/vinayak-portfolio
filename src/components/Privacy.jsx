import React from 'react'
import { motion } from 'framer-motion'

const Privacy = () => {
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
                        <span className="text-green-500 font-black  tracking-[0.4em] text-[10px] mb-4 block">Security & Trust</span>
                        <h1 className='text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white font-lobster'>Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Policy</span></h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>
                    </div>

                    <div className='space-y-10 text-gray-400 font-Barlow text-lg leading-relaxed'>
                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>1. Information Collection</h2>
                            <p>We respect your privacy. This portfolio does not actively collect personal data from visitors, except for information you voluntarily provide via the contact form (Name, Email, Message).</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>2. How We Use Information</h2>
                            <p>Any information shared through this site is used solely to respond to your inquiries and facilitate professional collaboration. We do not share or sell your details to third parties.</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>3. Cookies & Analytics</h2>
                            <p>This site may use minor functional cookies to enhance your browsing experience. No intrusive tracking or advertising pixels are used within this "Universe" experience.</p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-black text-white mb-4 uppercase tracking-tight'>4. Security</h2>
                            <p>As a professional with experience in Ethical Hacking, I prioritize the security of my digital assets. Communication through this site is handled with standard encryption protocols.</p>
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

export default Privacy
