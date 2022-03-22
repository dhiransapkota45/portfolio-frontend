import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"
import navbar from "./Navbar.json"
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa"
import { motion, useAnimation } from "framer-motion"

const Navbar = () => {
    const [hamBurger, setHamBurger] = useState(false)
    const [headerShown, setHeaderShown] = useState(false)
    const animation = useAnimation()

    const handleScroll = (event) => {
        const scrollY = event.currentTarget.scrollY;
        setHeaderShown(scrollY > 120);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hamburgerHandler = () => {
        setHamBurger(!hamBurger)

        animation.start({
            y: 288,
            // opacity: 1,
            transition: { duration: 0.5 }
        })

    }
    const hamburgerCloseHandler = () => {
        animation.start({
            y: -40,
            // opacity: 0,
            transition: {
                duration: 0.5
            }
        }

        )
        setHamBurger(!hamBurger)
    }

    return (
        <>

            <div className={` duration-1000 flex justify-center w-full fixed ${headerShown ? `bg-white` : ""}`}>
                <div className='flex justify-between w-4/5'>
                    <div className="cursor-pointer ">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/84250946_1078088395885134_8368286886224986112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=hA_iV8_uAKcAX_Kryzv&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_8yxgW7ztfpRUOpy8I4rzqWurYV8WiYttWYI8t8pqtVA&oe=62596F1A" alt="profile" srcSet="" className=' w-16 rounded-full my-8 border-4 border-gray-500' />
                    </div>
                    <div className={`flex items-center text-4xl ${headerShown ? `text-gray-900` : "text-white"}`}>
                        {hamBurger ? <AiFillCloseCircle className='cursor-pointer ' onClick={hamburgerCloseHandler} /> : <GiHamburgerMenu className='cursor-pointer ' onClick={hamburgerHandler} />}

                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center fixed top-32 h-72 overflow-hidden'>
                <motion.div animate={animation} className='w-full h-72 absolute bottom-full  bg-white '>
                    <div className=' w-4/5'>
                        {
                            // hamBurger &&
                            navbar.navitems.map((navitem, index) => {
                                return (
                                    <ul className=''>
                                        <li key={index} className=" font-sans font-semibold my-3 cursor-pointer"><a href={`#${navitem}`}>{navitem}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </div>

            <div style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2021/08/27/12/18/forest-6578551_1280.jpg)" }} className="h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
                <div className='flex flex-col  items-center '>
                    <motion.div className='font-sans text-white tracking-widest text-2xl opacity-20' animate={{ y: -10, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} >HELLO</motion.div>
                    <motion.div className=' text-3xl font-bold text-white my-4 opacity-20' animate={{ y: -10, opacity: 1 }} transition={{ duration: 1 }}>I am Dhiran Sapkota</motion.div>
                    <motion.div className='text-white text-2xl tracking-wider text-center mb-6 opacity-20' animate={{ y: -10, opacity: 1 }} transition={{ duration: 1 }}>Visual designer and Software developer</motion.div>
                    <div className='flex mb-8'>
                        <div className='mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>
                            <FaFacebookF />
                        </div>
                        <div className='mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>

                            <FaTwitter />
                        </div>
                        <div className='mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2'>
                            <FaInstagramSquare />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar

//https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_1280.jpg