import React from 'react'
import {FcWorkflow} from "react-icons/fc"

const Card = ({card}) => {
    return (

        <div className='flex flex-col items-center m-4 w-80 bg-white p-6 shadow-xl duration-300 hover:shadow-2xl rounded-md'>
            <div className='my-4'><FcWorkflow className='text-3xl'/></div>
            <div className='font-sans font-semibold text-xl mb-4'>{card.workTitle}</div>
            <div className='text-center mb-4 text-gray-500'>{card.description}</div>
        </div>
    )
}

export default Card

//{card.workImage}