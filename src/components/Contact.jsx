import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "53577808-1849-4d61-92ec-e7515c032b82");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            alert("Form Submitted Successfully");
            event.target.reset();
        } else {
            alert("Form is not submitted...");
            setResult(data.message);
        }
    };

    return (
        <section className='relative bg-[#0a0a0c] text-white py-32 overflow-hidden' id='contactme'>
            {/* Background Animations (Unified Universe) */}
            <div className="glow-sphere w-80 h-80 bg-green-500/5 bottom-20 left-1/4"></div>
            <div className="glow-sphere w-96 h-96 bg-purple-500/5 top-20 right-1/4" style={{ animationDelay: '4s' }}></div>

            {/* Floating Butterflies */}
            <motion.div animate={{ x: [200, 400, 100], y: [100, 500, 100] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="butterfly top-1/2 left-1/3">
                <div className="wing wing-left" style={{ opacity: 0.4, background: 'rgba(168, 85, 247, 0.5)' }}></div>
                <div className="wing wing-right" style={{ opacity: 0.4, background: 'rgba(168, 85, 247, 0.5)' }}></div>
            </motion.div>

            {/* Falling Snowflakes */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="snowflake" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 8 + 5}s`,
                    opacity: Math.random() * 0.3
                }}></div>
            ))}
            {[...Array(8)].map((_, i) => (
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
            <div className="spark-hunter" style={{ animationDelay: '10s' }}></div>

            <div className='container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-20'>
                <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
                    <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Connection</span>
                    <h2 className='text-3xl md:text-5xl font-black mb-6 uppercase text-white tracking-tighter'>Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                </div>

                <div className='flex flex-col lg:flex-row items-stretch lg:space-x-12 gap-8 md:gap-12'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='flex-1 lg:max-w-md bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/10'
                    >
                        <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-tight">Let's <span className="text-green-400">Talk</span></h3>
                        <p className="text-gray-400 text-base md:text-lg font-Barlow mb-10 leading-relaxed">
                            Open for new projects and collaborations. Feel free to reach out anytime!
                        </p>

                        <div className='space-y-4 md:space-y-6'>
                            <div className='group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-400/20 transition-all'>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 text-lg md:text-xl group-hover:scale-110 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[8px] md:text-[10px] font-black uppercase text-gray-500 tracking-widest leading-none mb-1">Email Me</p>
                                    <a href="mailto:kkvinayak718@gmail.com" className='text-white hover:text-green-400 transition-colors font-bold text-sm md:text-base break-words'>kkvinayak718@gmail.com</a>
                                </div>
                            </div>

                            <div className='group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-400/20 transition-all'>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 text-lg md:text-xl group-hover:scale-110 transition-transform">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] font-black uppercase text-gray-500 tracking-widest leading-none mb-1">Call Me</p>
                                    <span className='text-white font-bold text-sm md:text-base'>+91 8075631073</span>
                                </div>
                            </div>

                            <div className='group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-400/20 transition-all'>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 text-lg md:text-xl group-hover:scale-110 transition-transform">
                                    <FaMapMarkedAlt />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] font-black uppercase text-gray-500 tracking-widest leading-none mb-1">Location</p>
                                    <span className='text-white font-bold text-sm md:text-base'>Kerala, Kottayam Pala</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='flex-1 w-full bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/10'
                    >
                        <form className='space-y-5 md:space-y-6' action="/submit" method="POST" onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                <div className="space-y-2">
                                    <label className='text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400'>Full Name</label>
                                    <input type="text" name='Name' className='w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-green-400 focus:outline-none transition-all placeholder:text-gray-600 text-sm md:text-base' placeholder='Your Name' required />
                                </div>
                                <div className="space-y-2">
                                    <label className='text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400'>Email Address</label>
                                    <input type="email" name='email' className='w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-green-400 focus:outline-none transition-all placeholder:text-gray-600 text-sm md:text-base' placeholder='Email' required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className='text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400'>Subject</label>
                                <input type="text" name='subject' className='w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-green-400 focus:outline-none transition-all placeholder:text-gray-600 text-sm md:text-base' placeholder='Subject' required />
                            </div>
                            <div className="space-y-2">
                                <label className='text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400'>Your Message</label>
                                <textarea name='message' rows='4' className='w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-green-400 focus:outline-none transition-all placeholder:text-gray-600 text-sm md:text-base' placeholder='Tell me about your project...' required />
                            </div>
                            <button className='w-full bg-gradient-to-r from-green-400 to-blue-500 text-black py-4 rounded-2x font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-green-400/20'>
                                Send Message <span>→</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;