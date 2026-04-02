import React from 'react'
import { motion } from 'framer-motion'
import AboutImage from '../assets/aboutme-image.png'

const About = () => {
    return (
        <section className='relative bg-[#0a0a0c] text-white py-32 overflow-hidden' id='about'>
            {/* Background Animations (Unified Universe) */}
            <div className="glow-sphere w-64 h-64 bg-green-500/10 top-10 right-10"></div>
            <div className="glow-sphere w-96 h-96 bg-blue-500/10 bottom-10 left-10" style={{ animationDelay: '3s' }}></div>

            {/* Floating Butterflies */}
            <motion.div animate={{ x: [0, 600], y: [0, -200, 100, -400] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="butterfly top-1/3 right-0">
                <div className="wing wing-left" style={{ background: 'rgba(168, 85, 247, 0.4)' }}></div>
                <div className="wing wing-right" style={{ background: 'rgba(168, 85, 247, 0.4)' }}></div>
            </motion.div>

            {/* Falling Snowflakes */}
            {[...Array(12)].map((_, i) => (
                <div key={i} className="snowflake" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 8 + 6}s`,
                    opacity: Math.random() * 0.3
                }}></div>
            ))}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="rain-drop"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 1.5 + 1}s`,
                        opacity: Math.random() * 0.2
                    }}
                ></div>
            ))}
            <div className="spark-hunter" style={{ animationDelay: '2s' }}></div>

            <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-20'>
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
                    <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Discovery</span>
                    <h2 className='text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white'>About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                </div>

                <div className='flex flex-col lg:flex-row items-center lg:space-x-20'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group mb-16 lg:mb-0"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <img className='w-64 h-80 sm:w-80 sm:h-[30rem] rounded-[2.5rem] md:rounded-[3rem] object-cover relative z-10 border border-white/10 shadow-2xl mx-auto' src={AboutImage} alt="About Me" />
                    </motion.div>

                    <div className='flex-1 w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                        >
                            <p className='text-lg md:text-2xl font-Barlow mb-10 leading-relaxed text-gray-300'>
                                I am a passionate <span className="text-white font-bold">Full-Stack Developer</span> with a focus on building modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
                            </p>

                            <div className='space-y-6 md:space-y-8'>
                                {[
                                    { label: 'HTML & CSS', width: '90%' },
                                    { label: 'Tailwind & React', width: '85%' },
                                    { label: 'Python & Django', width: '80%' }
                                ].map((skill, index) => (
                                    <div key={index} className='space-y-2'>
                                        <div className="flex justify-between items-end">
                                            <label className='font-black uppercase tracking-widest text-[9px] md:text-[10px] text-gray-400'>{skill.label}</label>
                                            <span className="text-[10px] font-black text-green-400">{skill.width}</span>
                                        </div>
                                        <div className='grow bg-white/5 rounded-full h-1 md:h-1.5 overflow-hidden border border-white/5'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.width }}
                                                transition={{ duration: 1.5, ease: "circOut" }}
                                                className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6'>
                                {[
                                    { val: '3+', label: 'Experience' },
                                    { val: '20+', label: 'Projects' },
                                    { val: 'Pro', label: 'Graphic Design' }
                                ].map((stat, i) => (
                                    <div key={i} className={`text-center p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-400/20 transition-colors ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                                        <h3 className='text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-1'>
                                            {stat.val}
                                        </h3>
                                        <p className='text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-500'>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About