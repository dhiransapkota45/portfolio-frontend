import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa"
const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-slate-900 text-white'>
             <img
            src="https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/78583987_2911973955488791_6890974357246443520_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=sw7OC1GhSn4AX_Xub24&_nc_ht=scontent.fsif1-1.fna&oh=00_AT-42ik806Km1ZY2n11CulOYIq1XYJ6Z00ktDJOgbAMl-Q&oe=6263DBE6"
            alt="profile"
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

            <div className='align-center font-mono mb-8'>© 2019 DHIRAN SAPKOTA - ALL RIGHTS RESERVED</div>
        </div>
    )
}

export default Footer

//https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/84250946_1078088395885134_8368286886224986112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=hA_iV8_uAKcAX_Kryzv&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_8yxgW7ztfpRUOpy8I4rzqWurYV8WiYttWYI8t8pqtVA&oe=62596F1A 