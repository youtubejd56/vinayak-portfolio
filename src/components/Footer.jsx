import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer className='relative bg-[#0a0a0c] text-white py-16 overflow-hidden' id='footer'>
            {/* Background Animations (Unified Universe) */}
            <div className="glow-sphere w-64 h-64 bg-green-500/5 top-0 left-0"></div>
            <div className="glow-sphere w-96 h-96 bg-blue-500/5 bottom-0 right-0" style={{ animationDelay: '2s' }}></div>

            {/* Falling Snowflakes */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="snowflake" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 8 + 4}s`,
                    opacity: Math.random() * 0.2
                }}></div>
            ))}

            <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-20'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-12 py-10 bg-white/[0.03] backdrop-blur-[40px] p-10 rounded-[3rem] border border-white/10'>
                    <div className='flex-1 mb-8 md:mb-0'>
                        <h3 className='text-3xl font-black mb-4 font-lobster cursor-pointer text-white tracking-tight'>Jd mega creations</h3>
                        <p className='text-gray-400 font-Barlow text-lg leading-relaxed max-w-md'>
                            Full-Stack Developer Specializing in Web & Graphic Design and Ethical Hacking. Let's create something extraordinary.
                        </p>
                    </div>
                    <div className='flex-1 w-full'>
                        <div className='flex flex-col space-y-4'>
                            <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-2">Stay Connected</p>
                            <form className='flex items-center gap-2'>
                                <input type="email" placeholder='Enter Email' className='flex-1 px-6 py-3 rounded-2xl bg-white/[0.05] border border-white/10 focus:outline-none focus:border-green-400 text-sm transition-all' />
                                <button type='submit' className='bg-white text-black px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-green-400 transition-colors shadow-xl'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8'>
                    <p className='text-[10px] font-black uppercase tracking-[0.2em] text-gray-500'>
                        &copy; {new Date().getFullYear()} Jd creations. All rights reserved.
                    </p>

                    <div className='flex items-center gap-6'>
                        {[
                            { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1Dqkp4YKt4/' },
                            { icon: <FaInstagram />, url: 'https://www.instagram.com/youtube_jd_/' },
                            { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ct-vinayak-4271092ba' },
                            { icon: <FaYoutube />, url: 'https://www.youtube.com/channel/UCVNzlfNFVyuGdEO3r-O_4uQ' },
                            { icon: <FaGithub />, url: 'https://github.com/youtubejd56' }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.url}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className='text-xl text-gray-500 hover:text-green-400 transition-colors shadow-green-400/20'
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className='flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]'>
                        <button 
                            onClick={onOpenPrivacy}
                            className='text-gray-500 hover:text-green-400 transition-colors'
                        >
                            Privacy
                        </button>
                        <button 
                            onClick={onOpenTerms}
                            className='text-gray-500 hover:text-white transition-colors'
                        >
                            Terms
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer