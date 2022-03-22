import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoIosCall } from "react-icons/io"
import { AiOutlineMail } from "react-icons/ai"
import { SiWeblate } from "react-icons/si"


const ContactInfo = () => {
    return (

        <div className='flex flex-col  w-72'>
            <div className='text-black font-bold text-5xl my-8 font-sans'>
                Contact Info
            </div>
            <div className='flex mb-4'>
                <HiOutlineLocationMarker className='text-4xl mr-6' />
                <span className='text-gray-500'>
                    Address: Z105 - Tan Thinh, Thai Nguyen - Viet Nam</span>
            </div>
            <div className='flex mb-4'>
                <IoIosCall className='mr-6 text-3xl' />
                <span className='text-gray-500'>
                    Phone: +1.900.3456.789
                </span>
            </div>
            <div className='flex mb-4'>
                <AiOutlineMail className='mr-6 text-3xl' />
                <span className='text-gray-500'>

                    Email: yourname@somemail.com</span>
            </div>
            <div className='flex mb-4'>
                <SiWeblate className='mr-6 text-3xl' />
                <span className='text-gray-500'>

                    Website: http://example.com</span>
            </div>
        </div>

    )
}

export default ContactInfo