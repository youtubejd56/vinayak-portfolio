import React from 'react'
import HeroImages from '../assets/hero-images.png'
import { motion } from "framer-motion";
import resumeURL from "../assets/Vinayak.pdf"

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 sm:py-5 sm:h-screen' id='#home'>
      <img className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src={HeroImages} alt="" />
      <h1 className='text-4xl font-bold'>
        Im {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 inline-block my-3'>Vinayak N V</span>
      </h1>
      <div className='flex justify-center'>
        <motion.h2
          className='text-4xl sm:text-5xl font-bold'
          style={{ overflow: "hidden", whiteSpace: "nowrap", textAlign: 'center' }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          Full-Stack Developer
        </motion.h2>
      </div>
      <div>
        <p className='mt-4 text-lg text-gray-300'>
          I Specialize in building  modern and responsive Web applications.
        </p>
        <p>Graphic design and certified Ethical hacker</p>
      </div>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r font-semibold from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibole'><a href="#contactme">Contact With Me</a></button>
        <button className='bg-gradient-to-r font-semibold from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibole'><a href={resumeURL} download="resume.pdf">Resume</a></button>
      </div>
    </div>
  )
}

export default Hero