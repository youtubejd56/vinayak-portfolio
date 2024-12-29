import React from 'react'
import htmlLogo from "./src/assets/html-1.svg"
import cssLogo from "./src/assets/css-3.svg"
import jslogo from "./src/assets/javascript-1.svg"
import tailwindlogo from "./src/assets/react.svg"
import djangoLogo from "./src/assets/django.svg"
import pythonlogo from "./src/assets/python-4.svg"
import mysqlLogo from "./src/assets/mysql-logo-svgrepo-com.svg"

const Myskills = () => {
  return (
    <div className='bg-gray-800 text-white ' id='my skill'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 pb-16'>
        <h2 className='text-4xl font-bold text-center mb-12 py-10'>My Skills</h2>
        <div className='flex flex-col md:flex-row '>
        </div>
        <div className='flex items-center justify-evenly w-full flex-wrap gap-5'>
          <div className='bg-slate-300 px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
            <img className="py-2" src={htmlLogo} alt="" />
          </div>
          {/*- second sections-*/}
          
            <div className='bg-slate-300 px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img src={cssLogo} className='py-2' alt="" />
            </div>
            {/*- 3rd sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img src={jslogo} className='py-2' alt="" />
            </div>
            {/*- 4th sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src={tailwindlogo} alt="" />
            </div>
            {/*- 5th sections-*/}

            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src={djangoLogo} alt="" />
            </div>
            {/*- 6th sections-*/}
            <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src={pythonlogo} alt="" />
            </div>
             {/*- 7th sections-*/}
             <div className='bg-slate-300  px-2 pb-2 rounded-lg hover:shadow-lg transform transition-transform duration-0 hover:scale-105'>
              <img className='py-2' src={mysqlLogo} alt="" />
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Myskills