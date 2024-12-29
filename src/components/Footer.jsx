import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'



const footer = () => {
  return (
    <footer className='bg-black text-white  py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 md-4 md:mb-0 '>
               <h3 className='text-2xl font-bold mb-2 font-lobster'>Jd mega creations</h3>
               <p className='text-gray-400'>Full-Stack Developer based in the Html and css tailwind  Specializing in web and graphic Design Ethical hacking</p>
            </div>
            <div className='flex-1 w-full'> 
                <form className='flex items-center justify-center'>
                    <input type="Email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' />
                    <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
            </div>
            </div>

              <div className='border-t border-gray-600 pt-4 flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400 flex justify-center md:justify-start'>
                    &copy; {new Date().getFullYear}2024 Your Website. All right reserved
                </p>
                <div className='flex justify-center space-x-4 my-4 md:my-0'>
                    <a href="#" className='text-gray-400 hover:text-white'>
                       <FaFacebook />
                    </a>
                    <a href=""className='text-gray-400 hover:text-white' >
                       <FaInstagram />
                    </a>
                    <a href=""className='text-gray-400 hover:text-white'>
                       <FaLinkedin />
                     </a>
                     <a href='youtube.com/channel/UCVNzlfNFVyuGdEO3r-O_4uQ'className='text-gray-400 hover:text-white'>
                       <FaYoutube />
                    </a>
                     <a href="https://github.com/youtubejd56?tab=repositories"className='text-gray-400 hover:text-white'>
                       <FaGithub />
                    </a>
                </div>
                <div className='flex justify-center space-x-4  md:justify-end'>
                  <a href="" className='text-gray-400 hover:text-white'>
                    Privacy
                  </a>
                  <a href="" className='text-gray-400 hover:text-white'>
                    Terms of Services
                  </a>
                </div>
              </div>

        </div>
    </footer>
  )
}

export default footer