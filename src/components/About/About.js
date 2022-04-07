import React from 'react'
import about from "./About.json"
import Fade from "react-reveal/Fade"

const About = ({aboutDetails}) => {
    return (
        <div className='mt-8 flex justify-center ' id='about'>
            <div className='w-4/5 block lg:flex lg:justify-center '>
                <div  className=' flex-1 p-4 mt-16'>
                    <div className=' text-4xl font-sans font-bold leading-10 mb-3'>About Me</div>
                    <div className=' text-gray-500 tracking-wide mb-8'>{aboutDetails.aboutRole}</div>
                    <div className='text-gray-500 tracking-wide'>{aboutDetails.description}</div>

                    <button class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans ">
                        Download CV
                    </button>
                </div>
                <div  className=' flex justify-center'>
                
                    <img
                        
                        src="/tejumama.png" alt="random image" srcSet="" />
                </div>
            </div>
        </div>
    )
}

export default About

