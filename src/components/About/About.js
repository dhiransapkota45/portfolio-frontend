import React, { useEffect } from "react";

const About = ({ aboutDetails }) => {
  return (
    <div className="mt-8 flex justify-center scroll-mt-48" id="about">
      <div className="w-4/5 block lg:flex lg:justify-around ">
        <div data-aos="fade-up" className=" flex-1 p-4 mt-16 ">
          <div className=" text-4xl font-montserrat font-bold leading-10 mb-3">
            About Me
          </div>
          <div className=" text-gray-500 font-montserrat tracking-wide mb-8">
            {aboutDetails.aboutRole}
          </div>
          <div className="text-gray-500 font-montserrat text-xl">
            {aboutDetails.description}
          </div>

          <button class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans ">
            <a href="#contact">Contact Me</a> 
          </button>
        </div>
        <div data-aos="fade-up" className=" flex items-end ">
     
          <img src="/tejemamabackground-removebg-preview (1).png" alt="random image" srcSet="" className=""/>
        
        </div>
      </div>
    </div>
  );
};

export default About;
