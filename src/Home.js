import { useState, useEffect } from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
// import Eachdata from "./components/Showcase/Eachdata";
// import Showcase from "./components/Showcase/Showcase";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import useFetch from "./CustomHooks/useFetch";

const Home = () => {
  const baseUrl = `http://localhost:3002`;

  //   different states to fetch data from server
  const [profileDetails, setProfileDetails] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [aboutDetails, setAboutDetails] = useState();
  const [reviewInfo, setReviewInfo] = useState();
  const [workDetails, setWorkDetails] = useState();

  const fetchHandler = async (url) => {
    const dataRaw = await fetch(`${baseUrl}${url}`);
    const data = await dataRaw.json();
    // setProfileDetails(data);
    return data;
  };

  //   const profileData = useFetch("/getprofildetail");
  //   console.log(profileData);
  //   const aboutData = useFetch("/getabout");
  //   console.log(aboutData);

  //   const contactInfo = useFetch("/getcontactinfo");
  //   console.log(contactInfo);
  //   const reviewInfo = useFetch("/getreview");
  //   console.log(reviewInfo);
  //   const workDetails = useFetch("/getwork");
  //   console.log(workDetails);

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

  console.log(
    profileDetails,
    contactInfo,
    aboutDetails,
    reviewInfo,
    workDetails
  );

  return (
    <div>
      {profileDetails && <Navbar profileDetails={profileDetails} />}
      {aboutDetails && <About aboutDetails={aboutDetails} />}
      {workDetails && <Work workDetails={workDetails} />}
      {/* <Showcase /> */}
      <Carousel reviewInfo={reviewInfo} />
      <Map />
      {contactInfo && <Contact contactInfo={contactInfo} />}
      <Footer />
    </div>
  );
};

export default Home;
