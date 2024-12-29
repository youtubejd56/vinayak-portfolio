import React from 'react'


const service = [
{
  id: 1,
  title: "Web Design",
  description: "creating visually appealing and user-friendly web design.",
},
{
  id: 2,
  title: "Graphic Design",
  description: "creative and graphic design and poster design .",
},
{
  id: 3,
  title: "Ethical Hacking",
  description: "iam an ethical hacker with a passion for safeguarding digital ecosystems and my skill are penetration test,sql injection,social engineering attack,password cracking Reverse engineering Network Security",
},
{
  id: 4,
  title: "Full-stack Development",
  description: "Combining both frontend and backend using python & Django development skills",
},
{
  id: 5,
  title: "game art",
  description: "im game developer unreal engine and maya 3D modeling Animation"
},
{
  id: 6,
  title: "Digtal Marketing",
  description: "promote your business with our digital marketing social media platforms"
}]
const Service = () => {
  return (
    <div className='bg-gray-950 py-10 text-white ' id='service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12 py-10'>Service</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {service.map(service => (

            <div key={service.id} className='bg-gray-800  px-6 pb-6  rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-green-600 to-blue-400'>
             
              {service.id}

            </div>
            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
         
              {service.title}

            </h3>
            <p className='mt-2 text-gray-300'>{service.description}</p>
            <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read more</a>
            </div>

          ))}
          
        </div>
    </div>
    </div>
  )
}

export default Service
