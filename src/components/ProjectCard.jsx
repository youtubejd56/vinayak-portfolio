import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length)
      }, 4500)
      return () => clearInterval(timer)
    }
  }, [project.images.length])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='group relative bg-[#1c1d21] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 hover:shadow-[0_45px_100px_rgba(0,0,0,0.8)] flex flex-col'
    >
      {/* Top Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImage}
            src={project.images[currentImage]} 
            alt={project.name} 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]' 
          />
        </AnimatePresence>
        
        {/* Gallery Badge (Shots) */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-black uppercase text-white/80 tracking-widest z-20">
            {project.images.length} Shots
        </div>

        {/* Gallery Dots */}
        <div className="absolute top-5 right-5 md:top-7 md:right-8 flex gap-1.5 md:gap-2 z-20">
            {project.images.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentImage === idx ? 'bg-green-400' : 'bg-white/20'}`}></div>
            ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="p-8 md:p-10 flex flex-col items-start bg-gradient-to-b from-[#1c1d21] to-[#121316] flex-grow">
        <span className="inline-block px-4 py-1 md:py-1.5 rounded-full bg-green-400/5 text-green-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] border border-green-400/20 mb-4 md:mb-6">
            {project.category}
        </span>
        
        <h3 className='text-3xl md:text-4xl font-black text-white font-Barlow mb-3 md:mb-4 uppercase leading-[1.1]'>{project.name}</h3>
        
        <p className='text-gray-500 text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-10 max-w-sm'>
            {project.description}
        </p>

        <div className="w-full h-px bg-white/5 mb-6 md:mb-8"></div>

        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
            {project.tech.map(t => (
                <span key={t} className="text-[9px] md:text-[10px] font-black text-gray-500 border border-white/10 px-3 py-1 md:px-4 md:py-1.5 rounded-xl uppercase tracking-widest group-hover:border-white/20 transition-colors">
                    {t}
                </span>
            ))}
        </div>
        
        <a 
            href={project.github} 
            target='_blank' 
            rel='noopener noreferrer'
            className='inline-flex items-center gap-4 px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white font-black text-[11px] md:text-[13px] tracking-widest uppercase transition-all duration-500'
        >
            Live Project <span>→</span>
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
