import React from 'react'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <div className='flex justify-center bg-white items-center'>
    <div className='grid grid-cols-2 p-4 w-[70%]'>
        <div className='p-20'>
            
            <h1 className='mb-6 font-bold text-2xl'>Our Office</h1>
            <div className='flex flex-col gap-4'>
            <p> info@imaginex.com</p>
            <p>+91 7702256449</p>
            <p>Contact Us</p>
            <p></p>
            </div>
            
        </div>
        <div>
            <ContactForm/>
        </div>

    </div>
    </div>
  )
}

export default ContactUs