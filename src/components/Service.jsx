import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDraftingCompass, FaTerminal, FaLayerGroup, FaGamepad, FaChartLine } from 'react-icons/fa'

const serviceData = [
  {
    id: "01",
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs with modern tools and clean aesthetics.",
    icon: <FaDraftingCompass />,
  },
  {
    id: "02",
    title: "Graphic Design",
    description: "Creative graphic and poster design tailored for your brand identity and market impact.",
    icon: <FaCode />,
  },
  {
    id: "03",
    title: "Ethical Hacking",
    description: "Safeguarding digital ecosystems through penetration testing and advanced network security.",
    icon: <FaTerminal />,
  },
  {
    id: "04",
    title: "Full-stack Dev",
    description: "End-to-end development using Python, Django, and modern frontend grid technologies.",
    icon: <FaLayerGroup />,
  },
  {
    id: "05",
    title: "Game Art",
    description: "3D modeling and immersive animation in Unreal Engine and high-end Autodesk Maya.",
    icon: <FaGamepad />,
  },
  {
    id: "06",
    title: "Digital Marketing",
    description: "Scaling your business reach across global social media platforms effectively and securely.",
    icon: <FaChartLine />,
  }
]

const Service = () => {
  return (
    <section className='relative bg-[#0a0a0c] py-32 overflow-hidden' id='service'>
      {/* Background Animations (Unified Universe) */}
      <div className="glow-sphere w-64 h-64 bg-green-500/10 bottom-10 right-10"></div>
      <div className="glow-sphere w-96 h-96 bg-blue-500/10 top-10 left-10" style={{ animationDelay: '5s' }}></div>

      {/* Floating Butterflies */}
      <motion.div animate={{ x: [0, -600], y: [0, 400, -50, 200] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="butterfly bottom-1/4 right-0">
        <div className="wing wing-left" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
        <div className="wing wing-right" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
      </motion.div>

      {/* Falling Snowflakes */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="snowflake" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${Math.random() * 9 + 5}s`,
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
      <div className="spark-hunter" style={{ animationDelay: '4s' }}></div>

      <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-20'>
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Innovation</span>
          <h2 className='text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white'>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
          {serviceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                opacity: { duration: 0.5 }
              }}
              className='relative bg-white/[0.08] backdrop-blur-[40px] px-8 py-10 md:px-10 md:py-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 hover:border-green-400/40 transition-all duration-700 hover:shadow-[0_40px_120px_rgba(34,197,94,0.1)] group overflow-hidden'
            >
              {/* Cloud-Glass Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] ease-in-out pointer-events-none z-10"></div>

              {/* Background ID number */}
              <div className='absolute top-6 right-8 md:top-8 md:right-10 text-5xl md:text-6xl font-black text-white/5 select-none pointer-events-none group-hover:text-green-400/20 transition-all duration-700 font-Barlow'>
                {item.id}
              </div>

              {/* Icon */}
              <div className="relative z-20 text-4xl md:text-5xl text-green-400 mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-green-400/20">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className='relative z-20 text-xl md:text-2xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight font-Barlow group-hover:text-green-400 transition-colors'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='relative z-20 text-gray-400 text-sm md:text-lg leading-relaxed font-Barlow mb-8 line-clamp-3'>
                {item.description}
              </p>

              {/* Action Button */}
              <a
                href="#"
                className='relative z-20 inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-green-400 group-hover:text-black transition-all duration-500 gap-3 font-black uppercase text-[9px] md:text-[10px] tracking-widest'
              >
                Read More <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
