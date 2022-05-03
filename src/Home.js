import { useState, useEffect } from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/FrontPage";
import Work from "./components/Work/Work";
// import Eachdata from "./components/Showcase/Eachdata";
// import Showcase from "./components/Showcase/Showcase";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import useFetch from "./CustomHooks/useFetch";
import Gallery from "./components/gallery/Gallery";

const Home = () => {
  //   different states to fetch data from server
  const [profileDetails, setProfileDetails] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [aboutDetails, setAboutDetails] = useState();
  const [reviewInfo, setReviewInfo] = useState();
  const [workDetails, setWorkDetails] = useState();

  const fetchHandler = async (url) => {
    const dataRaw = await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}${url}`
    );
    const data = await dataRaw.json();
    return data;
  };

  useEffect(async () => {
    const data = await fetchHandler("/getprofildetail");
    setProfileDetails(data.profileDetail[0]);
    const data1 = await fetchHandler("/getabout");
    setAboutDetails(data1.aboutDetail[0]);
    const data2 = await fetchHandler("/getcontactinfo");
    setContactInfo(data2.contactInfo[0]);
    const data3 = await fetchHandler("/getreview");
    setReviewInfo(data3.allReview);
    const data4 = await fetchHandler("/getwork");
    setWorkDetails(data4.allWork);
  }, []);

  return (
    <div>
      {profileDetails ? (
        <div>
          {profileDetails && <Navbar profileDetails={profileDetails} />}
          {aboutDetails && <About aboutDetails={aboutDetails} />}
          {workDetails && <Work workDetails={workDetails} />}
          {/* <Showcase /> */}
          {/* {reviewInfo && <Carousel reviewInfo={reviewInfo} />} */}
          <Map />
          <Gallery />
          {contactInfo && <Contact contactInfo={contactInfo} />}
          <Footer />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center text-4xl text-bold font-oxygen">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Home;
