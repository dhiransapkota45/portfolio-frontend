import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoIosCall } from "react-icons/io"
import { AiOutlineMail } from "react-icons/ai"
import { SiWeblate } from "react-icons/si"


const ContactInfo = ({contactInfo}) => {
    return (

        <div className='flex flex-col font-montserrat  w-72'>
            <div className='text-black font-bold text-4xl my-8 '>
                Contact Info
            </div>
            <div className='flex mb-4'>
                <HiOutlineLocationMarker className='text-4xl mr-6' />
                <span className='text-gray-500'>
                    {contactInfo.address}</span>
            </div>
            <div className='flex mb-4'>
                <IoIosCall className='mr-6 text-3xl' />
                <span className='text-gray-500'>
                {contactInfo.phone}
                </span>
            </div>
            <div className='flex mb-4'>
                <AiOutlineMail className='mr-6 text-3xl' />
                <span className='text-gray-500'>

                    Email: {contactInfo.email}</span>
            </div>
            <div className='flex mb-4'>
                <SiWeblate className='mr-6 text-3xl' />
                <span className='text-gray-500'>

                    Website: {contactInfo.website}</span>
            </div>
        </div>

    )
}

export default ContactInfo