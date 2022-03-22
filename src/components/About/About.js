import React from 'react'
import about from "./About.json"
import { animate, animationControls, motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const About = () => {


    return (
        <div className='flex justify-center ' id='ABOUT'>
            <div className='w-4/5 block lg:flex lg:justify-center '>
                <motion.div  className=' flex-1 p-4 mt-16'>
                    <div className=' text-4xl font-sans font-bold leading-10 mb-3'>{about.topic}</div>
                    <div className=' text-gray-500 tracking-wide mb-8'>{about.job}</div>
                    <div className='text-gray-500 tracking-wide'>{about.description}</div>

                    <button class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans ">
                        Download CV
                    </button>
                </motion.div>
                <motion.div  className=' flex justify-center'>
                    <img

                        src="http://john.wethemez.com/static/media/apporoach_man_img.0f15c002.png" alt="random image" srcSet="" />
                </motion.div>
            </div>
        </div>
    )
}

export default About


// <motion.div
//   animate={{
//     x: 0,
//     backgroundColor: "#000",
//     boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
//     position: "fixed",
//     transitionEnd: {
//       display: "none",
//     },
//   }}
// />