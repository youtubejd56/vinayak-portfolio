import React, { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 md:block'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-xl md:text-2xl font-bold  md:inline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-lobster'>Jd mega creations</div>
        <ul className='space-x-6  hidden md:block'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
          <a href="#service" className='hover:text-gray-400'>Service</a>
          <a href="#project" className='hover:text-gray-400'>projects</a>
          <a href="#my skill" className='hover:text-gray-400'>My Skills</a>
          <a href="#contactme" className='hover:text-gray-400'>Contact</a>
        </ul>
        <button id='contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibold hidden'><a href="#contactme">Contact Me</a></button>
        <button className='md:hidden' id='mobile-menu' onClick={() => setOpenMenu(!openMenu)}>
          <svg className='w-10 h-10 justify-end ' fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M7 29v5l50 1v-7L7 29zM7 11v6h50v-6H7zM7 46v7l50-1v-5L7 46z" /></svg>
        </button>
      </div>
      {/*mobile views sections*/}
      {openMenu && <div className='bg-gradient-to-r from-green-400 to-blue-500 px-8 py-12 absolute top-0 right-0 h-screen w-1/2 z-10 md:hidden blur-none' id="mobile-menu-list relative">
        <svg width="40" height="40" className='absolute top-5 right-10 hover:cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setOpenMenu(!openMenu)}>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
        </svg>
        <ul className='my-10 flex items-center justify-center flex-col gap-y-6'>
          <li><a href="#home" className='hover:text-black font-semibold flex justify-center text-xl'>Home</a></li>
          <li><a href="#about" className='hover:text-black font-semibold flex justify-center  text-xl'>About</a></li>
          <li><a href="#service" className='hover:text-black font-semibold flex justify-center  text-xl'>Service</a></li>
          <li><a href="#project" className='hover:text-black font-semibold flex justify-center text-xl'>projects</a></li>
          <li><a href="#my skill" className='hover:text-black font-semibold flex justify-center  text-xl'>My Skills</a></li>
          <li><a href="#contactme" className='hover:text-black font-semibold flex justify-center  text-xl'>Contact</a></li>

        </ul>
       <div className='flex justify-center'>
       <button id='contact' className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-90 px-4 py-2 rounded-full font-semibold mt-2'><a href="#contactme">Contact Me</a></button>
       </div>



      </div>}
    </nav>





  )
}

export default Navbar