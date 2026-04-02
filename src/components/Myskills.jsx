import React from 'react'
import { motion } from 'framer-motion'
import htmlLogo from "../assets/html-1.svg"
import cssLogo from "../assets/css-3.svg"
import jslogo from "../assets/javascript-1.svg"
import tailwindlogo from "../assets/react.svg"
import djangoLogo from "../assets/django.svg"
import pythonlogo from "../assets/python-4.svg"
import mysqlLogo from "../assets/mysql-logo-svgrepo-com.svg"

const Myskills = () => {
  const skills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JS', logo: jslogo },
    { name: 'React', logo: tailwindlogo },
    { name: 'Django', logo: djangoLogo },
    { name: 'Python', logo: pythonlogo },
    { name: 'MySQL', logo: mysqlLogo }
  ]

  return (
    <section className='relative bg-[#0a0a0c] text-white py-32 overflow-hidden' id='my skill'>
      {/* Background Animations (Unified Universe) */}
      <div className="glow-sphere w-64 h-64 bg-green-500/10 top-1/4 left-1/4"></div>
      <div className="glow-sphere w-96 h-96 bg-blue-500/5 bottom-1/4 right-1/4" style={{ animationDelay: '2s' }}></div>

      {/* Floating Butterflies */}
      <motion.div animate={{ x: [0, 800], y: [0, 200, -100, 300] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="butterfly top-1/2 left-0">
        <div className="wing wing-left" style={{ opacity: 0.5, background: 'rgba(74, 222, 128, 0.4)' }}></div>
        <div className="wing wing-right" style={{ opacity: 0.5, background: 'rgba(74, 222, 128, 0.4)' }}></div>
      </motion.div>

      {/* Falling Snowflakes */}
      {[...Array(12)].map((_, i) => (
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
      <div className="spark-hunter" style={{ animationDelay: '8s' }}></div>

      <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-20'>
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Expertise</span>
          <h2 className='text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white'>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>

        <div className='flex items-center justify-center flex-wrap gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                opacity: { duration: 0.5 }
              }}
              className='group relative bg-white/[0.05] backdrop-blur-[40px] p-8 rounded-[2.5rem] border border-white/10 hover:border-green-400/50 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)] flex flex-col items-center gap-4'
            >
              {/* Soft Glow Behind Icon */}
              <div className="absolute inset-0 bg-green-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <img src={skill.logo} alt={skill.name} className='w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500' />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 relative z-10">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Myskills