import React from 'react'
import AboutImage from '../assets/aboutme-image.png'

const About = () => {
  return (
    <div className='bg-gray-950 text-white ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 py-10'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img className='w-72 h-80 rounded object-cover mb-8 md:mb-0' src={AboutImage} alt="" />
                <div className='flex-1'><p className='text-lg mb-8'>
                    Iam a passionate full-stack developer with a focus on building skill and modern and responsive web application with a strong foundation in both frontend and backend graphic design techologies, I strive to create seamless and efficient user experiences. </p>
                    <div className='space-y-4'>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                              </div>
                            </div>
                            <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'></label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                              </div>
                            </div>
                        </div>
                        </div>
                        <div className='flex items-center py-4'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Tailwind & Bootstrap</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                              </div>
                            </div>
                        </div>

                    </div><div className='flex items-center py-4'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Python & Django</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">

                              </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                             
                             <div>
                                 <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                                     3+
                                 </h3>
                                 <p>Month Experience</p>
                             </div>
                             <div>
                                 <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                                     20+
                                 </h3>
                                 <p>Project Completed</p>
                             </div>
                             <div>
                                 <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500'>
                                     Graphic Design
                                 </h3>
                                 <p>Happy Clients</p>
                             </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About