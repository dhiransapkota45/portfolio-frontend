import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ profileDetails }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/Untitled.jpeg)",
        }}
        className="h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      >
        <div className="flex flex-col  items-center">
          <div
            className=" font-montserrat text-white tracking-widest text-2xl opacity-20"
            data-aos="fade-up"

          >
            {profileDetails.title1}
          </div>
          <div
            data-aos="fade-up"
            className=" font-montserrat text-3xl font-bold text-white my-4 opacity-20"
          >
            {profileDetails.title2}
          </div>
          <div
            data-aos="fade-up"
            className="text-white font-montserrat  text-2xl tracking-wider text-center mb-6 opacity-20"
          >
            {profileDetails.title3}
          </div>
          <div data-aos="fade-up" className="flex mb-8">
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
