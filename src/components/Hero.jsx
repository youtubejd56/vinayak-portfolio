import React from 'react'
import HeroImages from '../assets/hero-images.png'
import { motion } from "framer-motion"
import resumeURL from "../assets/Vinayak.pdf"

const Hero = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:py-0 dynamic-bg overflow-hidden' id='home'>
      {/* Dynamic Glow Circles */}
      <div className="glow-sphere w-64 h-64 bg-green-500/10 top-10 left-10"></div>
      <div className="glow-sphere w-96 h-96 bg-blue-500/10 bottom-10 right-10" style={{ animationDelay: '2s' }}></div>
      <div className="glow-sphere w-80 h-80 bg-purple-500/5 top-1/2 left-1/4" style={{ animationDelay: '4s' }}></div>

      {/* Magical Butterflies */}
      <motion.div animate={{ x: [0, 800], y: [0, -100, 50, -300], rotateX: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="butterfly top-1/4 left-0">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
      </motion.div>
      <motion.div animate={{ x: [0, -600], y: [0, 200, -50, 400] }} transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }} className="butterfly bottom-1/4 right-0">
        <div className="wing wing-left" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
        <div className="wing wing-right" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
      </motion.div>

      {/* Multi-Layered Snow Mix */}
      {[...Array(12)].map((_, i) => (
        <div key={`s1-${i}`} className="snowflake" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          opacity: Math.random() * 0.5
        }}></div>
      ))}
      {[...Array(8)].map((_, i) => (
        <div key={`s2-${i}`} className="snowflake snowflake-slow" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 12}s`,
          animationDuration: `${Math.random() * 8 + 10}s`,
          opacity: Math.random() * 0.3
        }}></div>
      ))}

      {/* Rain Drops */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 1.5 + 1}s`,
            opacity: Math.random() * 0.4
          }}
        ></div>
      ))}
      <div className="spark-hunter"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Profile Image Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <img
            className='mx-auto w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white/5 object-cover shadow-[0_0_50px_rgba(34,197,94,0.1)] transform hover:scale-105 transition-transform duration-500'
            src={HeroImages}
            alt="Vinayak N V"
          />
        </motion.div>

        {/* Introduction */}
        <h1 className='text-3xl font-bold mb-4'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-Barlow font-extrabold text-4xl sm:text-5xl md:text-7xl'>Vinayak N V</span>
        </h1>

        {/* Dynamic Typing Role */}
        <div className='flex justify-center mb-6 md:mb-10'>
          <motion.h2
            className='text-2xl sm:text-5xl md:text-7xl font-extrabold text-white font-Barlow uppercase tracking-tighter'
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Full-Stack Developer
          </motion.h2>
        </div>

        {/* Centered Bio */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4 px-4 sm:px-0">
          <p className='text-base md:text-xl text-gray-400 font-Barlow leading-relaxed'>
            I Specialize in building modern and responsive Web applications
            that deliver seamless user experiences.
          </p>
          <p className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.3em]'>
            Graphic Design <span className="text-green-500">•</span> Certified Ethical Hacker
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 px-10 sm:px-0'>
          <button className='group relative bg-gradient-to-r from-green-400 to-blue-500 text-black font-black px-10 py-3.5 rounded-full hover:shadow-[0_10px_20px_rgba(74,222,128,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto uppercase text-xs tracking-widest'>
            <a href="#contactme">Contact With Me</a>
          </button>
          <button className='group relative bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-black px-10 py-3.5 rounded-full hover:shadow-[0_10px_20px_rgba(236,72,153,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto uppercase text-xs tracking-widest'>
            <a href={resumeURL} download="resume.pdf">Resume</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero