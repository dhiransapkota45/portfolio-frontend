import {FaYoutube, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ profileDetails }) => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(/Untitled.jpeg)",
        }}
        className="h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      >
        <div className="flex flex-col  items-center">
          <motion.div
            className="font-sans text-white tracking-widest text-2xl opacity-20"
            animate={{ y: -10, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            {profileDetails.title1}
          </motion.div>
          <motion.div
            className=" text-3xl font-mono font-bold text-white my-4 opacity-20"
            animate={{ y: -10, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {profileDetails.title2}
          </motion.div>
          <motion.div
            className="text-white font-mono text-2xl tracking-wider text-center mb-6 opacity-20"
            animate={{ y: -10, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {profileDetails.title3}
          </motion.div>
          <div className="flex mb-8">
            <div className="mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2">
              <a target="_blank" href={profileDetails.facebookUrl}>
                <FaFacebookF />
              </a>
            </div>
            <div className="mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2">
              <a target="_blank" href={profileDetails.twitterUrl}>
                <FaTwitter />
              </a>
            </div>
            <div className="mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2">
              <a target="_blank" href={profileDetails.instagramUrl}>
                <FaInstagramSquare />
              </a>
            </div>
            <div className="mx-4 text-3xl cursor-pointer border-2 text-white bg-gray-900 border-white rounded-full hover:bg-white hover:text-black duration-300 p-2">
              <a target="_blank" href={profileDetails.youtubeUrl}>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//https://cdn.pixabay.com/photo/2021/08/27/12/18/forest-6578551_1280.jpg
//https://cdn.pixabay.com/photo/2021/08/27/12/18/forest-6578551_1280.jpg