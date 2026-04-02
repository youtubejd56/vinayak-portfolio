import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

// Card 1 Images
import p1_1 from "../assets/project.1.png"
import p1_2 from "../assets/project1-img2.png"
import p1_3 from "../assets/project1-img3.png"

// Card 2 Images
import p2_main from "../assets/project2.png"
import p2_2 from "../assets/project2-img2.png"
import p2_3 from "../assets/project2-img3.png"
import p2_4 from "../assets/project2-img4.png"

// Card 3 Images
import p3_main from "../assets/project3.png"
import p3_2 from "../assets/project3-img2.png"

const projectsData = [
  {
    id: 1,
    name: "Jahani Mart",
    category: "E-Commerce",
    description: "A high-fidelity premium shopping platform with seamless checkout and product tracking.",
    images: [p1_1, p1_2, p1_3],
    github: "https://jahani-mart.onrender.com/",
    tech: ["React", "Express", "Node", "MongoDB"]
  },
  {
    id: 2,
    name: "Cyber Training Hub",
    category: "Cyber Security",
    description: "HackTheBox style interactive platform for learning advanced penetration testing and security auditing.",
    images: [p2_main, p2_2, p2_3, p2_4],
    github: "https://cyber-frontend-new.onrender.com/",
    tech: ["Python", "Django", "GSAP", "SQL"]
  },
  {
    id: 3,
    name: "THS Portal",
    category: "Corporate View",
    description: "Ultra-fast optimized portal experience with immersive scroll-triggered animations and secure responsive grid.",
    images: [p3_main, p3_2],
    github: "https://ths-frontend-p8v4.onrender.com/",
    tech: ["GSAP", "TailwindCSS", "Vite"]
  }
]

const Project = () => {
  return (
    <section className='relative bg-[#0a0a0c] py-32 px-6 md:px-12 overflow-hidden' id='project'>
      {/* Background Animations (Unified with Hero) */}
      <div className="glow-sphere w-64 h-64 bg-green-500/10 top-10 left-10"></div>
      <div className="glow-sphere w-96 h-96 bg-blue-500/10 bottom-10 right-10" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Butterflies */}
      <motion.div animate={{ x: [0, 800], y: [0, -100, 50, -300], rotateX: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="butterfly top-1/4 left-0">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
      </motion.div>
      <motion.div animate={{ x: [0, -600], y: [0, 200, -50, 400] }} transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }} className="butterfly bottom-1/4 right-0">
        <div className="wing wing-left" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
        <div className="wing wing-right" style={{ opacity: 0.6, background: 'rgba(56, 189, 248, 0.5)' }}></div>
      </motion.div>

      {/* Falling Snowflakes */}
      {[...Array(15)].map((_, i) => (
        <div key={i} className="snowflake" style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 8 + 5}s`,
            opacity: Math.random() * 0.4
          }}></div>
      ))}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="rain-drop" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 1.5 + 1}s`,
            opacity: Math.random() * 0.3
          }}
        ></div>
      ))}
      <div className="spark-hunter" style={{ animationDelay: '6s' }}></div>

      <div className='container mx-auto max-w-7xl relative z-20'>
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Masterpieces</span>
          <h2 className='text-4xl md:text-5xl font-black mb-6 uppercase text-white'>Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Project</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
