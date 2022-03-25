import React from 'react'
import About from "./components/About/About"
import Navbar from './components/Navbar/Navbar';
import Work from "./components/Work/Work";
// import Eachdata from "./components/Showcase/Eachdata";
import Showcase from "./components/Showcase/Showcase";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";


const Home = () => {
    return (
        <div> 
            <Navbar />
            <About />
            <Work />
            {/* <Showcase /> */}
            <Carousel />
            <Map />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home