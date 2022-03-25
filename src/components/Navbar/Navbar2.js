import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import {useLocation} from "react-router-dom"

const Navbar2 = () => {

  //used while changing the background color of navbar in different pathname 
  const location = useLocation()
  
  //logic for changing the color of navbar while scrolling the page
      const [headerShown, setHeaderShown] = useState(false);
      const handleScroll = (event) => {
        const scrollY = event.currentTarget.scrollY;
        setHeaderShown(scrollY > 80);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  //state to handle to show/hide the navbar in mobile view
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICE", link: "#service" },
    { name: "LOCATION", link: "#location" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div
        className={`md:flex items-center justify-between duration-500 ${location.pathname=="/" ? (headerShown &&
          "bg-white"):(!headerShown && "bg-black")} py-4 md:px-10 px-7`}
      >
        <div className={`w-16 rounded-full overflow-hidden cursor-pointer bg-white`}>
          <a href="#">
          <img
            src="https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/78583987_2911973955488791_6890974357246443520_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=sw7OC1GhSn4AX_Xub24&_nc_ht=scontent.fsif1-1.fna&oh=00_AT-42ik806Km1ZY2n11CulOYIq1XYJ6Z00ktDJOgbAMl-Q&oe=6263DBE6"
            alt="profile"
            srcSet=""
            className=" "
          />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden ${
            headerShown ? "text-gray-900" : "text-white"
          }`}
        >
          {!open ? <GiHamburgerMenu /> : <AiFillCloseCircle />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => {
            return (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  className={`${
                    headerShown ? "md:text-gray-800" : "md:text-white"
                  }  hover:text-gray-400 duration-500 cursor-pointer`}
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
