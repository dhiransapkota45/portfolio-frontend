import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa"
const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-slate-900 text-white'>
             <img
            src="profile.jpg"
            srcSet=""
            className="w-16 rounded-full my-8 "
          />

            <div className='flex mb-8'>
                <div className='mx-4 text-3xl cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>
                    <FaFacebookF />
                </div>
                <div className='mx-4 text-3xl cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>

                    <FaTwitter />
                </div>
                <div className='mx-4 text-3xl cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>
                    <FaInstagramSquare />
                </div>
            </div>

            <div className='align-center font-mono mb-8 text-center'>© 2022 TEJENDRA KANDEL - ALL RIGHTS RESERVED</div>
        </div>
    )
}

export default Footer

//https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/84250946_1078088395885134_8368286886224986112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=hA_iV8_uAKcAX_Kryzv&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_8yxgW7ztfpRUOpy8I4rzqWurYV8WiYttWYI8t8pqtVA&oe=62596F1A 