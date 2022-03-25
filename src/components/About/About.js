import React from 'react'
import about from "./About.json"

const About = () => {
    return (
        <div className='flex justify-center ' id='about'>
            <div className='w-4/5 block lg:flex lg:justify-center '>
                <div  className=' flex-1 p-4 mt-16'>
                    <div className=' text-4xl font-sans font-bold leading-10 mb-3'>{about.topic}</div>
                    <div className=' text-gray-500 tracking-wide mb-8'>{about.job}</div>
                    <div className='text-gray-500 tracking-wide'>{about.description}</div>

                    <button class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans ">
                        Download CV
                    </button>
                </div>
                <div  className=' flex justify-center'>
                    <img

                        src="http://john.wethemez.com/static/media/apporoach_man_img.0f15c002.png" alt="random image" srcSet="" />
                </div>
            </div>
        </div>
    )
}

export default About

