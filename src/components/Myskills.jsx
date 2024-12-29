import React from 'react'

const Myskills = () => {
  return (
    <div className='bg-gray-800 text-white ' id='my skill'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 pb-16'>
        <h2 className='text-4xl font-bold text-center mb-12 py-10'>My Skills</h2>
        <div className='flex flex-col md:flex-row '>
        </div>
        <div className='flex items-center justify-evenly w-full flex-wrap gap-5'>
          <div className='bg-slate-300 px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
            <img className="py-2" src="./src/assets/html-1.svg" alt="" />
          </div>
          {/*- second sections-*/}
          
            <div className='bg-slate-300 px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img src="./src/assets/css-3.svg" className='py-2' alt="" />
            </div>
            {/*- 3rd sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img src="./src/assets/javascript-1.svg" className='py-2' alt="" />
            </div>
            {/*- 4th sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src="./src/assets/react.svg" alt="" />
            </div>
            {/*- 5th sections-*/}

            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src="./src/assets/django.svg" alt="" />
            </div>
            {/*- 6th sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src="./src/assets/python-4.svg" alt="" />
            </div>
             {/*- 7th sections-*/}
             <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src="./src/assets/mysql-logo-svgrepo-com.svg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Myskills