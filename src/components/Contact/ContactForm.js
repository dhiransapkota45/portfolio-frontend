import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <div className='text-black font-bold text-5xl my-8 font-sans'>
                Contact Form
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col lg:flex-row mb-4'>
                    <input type="text" placeholder='Your Name*' className=' p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0' />
                    <input type="text" placeholder='Your Email*' className='p-3 border focus:outline-none' />
                </div>
                <div className='flex flex-col lg:flex-row mb-4'>
                    <input type="text" placeholder='Subject*' className='p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0 ' />
                    <input type="text" placeholder='Phone*' className='p-3 border focus:outline-none' />
                </div>
                <textarea cols="30" rows="10" className="p-3 h-28 border focus:outline-none resize-none" placeholder='Your Message...'></textarea>
            </div>
            <button class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans ">
                Send Message
            </button>
        </div>
    )
}

export default ContactForm