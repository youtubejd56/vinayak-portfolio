import React from 'react';
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "53577808-1849-4d61-92ec-e7515c032b82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Form is not submited...");
      setResult(data.message);
    }
  };
  return (
     <div className='bg-gray-950 text-white' id='contactme'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24' >
                <h2 className='text-4xl font-bold text-center mb-12 py-10'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 pb-16'>
                  <div className='flex-1'>
                    <h3>let's Talk</h3>
                    <p>I'm open to discussing web development .</p>
                    <div className='mb-4 mt-4'>
                        <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                        <a href="mailto:youremail@example.com" className='hover:underline'>
                            kkvinayak718@gmail.com
                        </a>
                    </div>
                    <div className='mb-4'>
                        <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                        <span>+8075631073</span>
                    </div>
                    <div className='mb-4'>
                        <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                        <span>kerala, kottayam pala</span>
                    </div>
                    </div>
                    <div className='flex-1 w-full'>
    {/*-this form sections-*/}
                   
                   <form  className='space-y-4'   action="/submit" method="POST" onSubmit={onSubmit}>
                      <div>
                        <label htmlFor="name" className='block mb-2'>Your Name</label>
                        <input type="text" name='Name' className='w-full p-2 rounnded bg-gray-800 border boeder-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your Name' required />
                      </div>
                      <div>
                        <label htmlFor="Email"  className='block mb-2'>Email</label>
                        <input type="Email" name='email' className='w-full p-2 rounnded bg-gray-800 border boeder-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your Email' required />
                      </div>
                      <div>
                        <label htmlFor="Subject"  className='block mb-2'>Subject</label>
                        <input type="text" name='subject' className='w-full p-2 rounnded bg-gray-800 border boeder-gray-600 focus:outline-none focus:border-green-400' placeholder='Subject' required />
                      </div>
                      <div>
                        <label htmlFor="Message"  className='block mb-2'>Message</label>
                        <textarea type="text" name='message' className='w-full p-2 rounnded bg-gray-800 border boeder-gray-600 focus:outline-none focus:border-green-400'rows='5' placeholder='Enter your Messages' required />
                      </div>
                      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 pb-2 mb-4 py-2  mt-4 rounded-full font-semibold'>
                       submit
                      </button>
                   </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact