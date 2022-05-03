import React from "react";
import ImageGallery from "react-image-gallery";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FcStackOfPhotos } from "react-icons/fc";

const images = [
  {
    original: "/image1.jpg",
    thumbnail: "/image1.jpg",
    description:"with family in Holland",
    
  },
  {
    original: "/image5.jpg",
    thumbnail: "/image5.jpg",
    description:"meeting with Rishi Dhamala"
  },
  {
    original: "/image3.jpg",
    thumbnail: "/image3.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <div id="gallery" className=" scroll-mt-40 flex flex-col items-center my-16 bg-gray-100">
        <FcStackOfPhotos className="text-8xl mt-16 mb-4" />
        <div className="text-6xl font-montserrat font-bold ">
          Gallery
        </div>
        <div className="flex my-4 ">
          <RiDoubleQuotesL />
          <span className="text-gray-500 italic font-body font-semibold text-lg sm:text-2xl mb-8 text-center">
            Dare to live the life you've always wanted .
          </span>
          <RiDoubleQuotesR />
        </div>
        <div className="mb-10">
          <ImageGallery
            showFullscreenButton={false}
            autoplay={true}
            items={images}
            autoPlay={true}
            showNav={false}
            showBullets={true}
            slideDuration={1000}
            slideInterval={5000}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

// {
//   original: "https://picsum.photos/id/1019/1000/600/",
//   thumbnail: "https://picsum.photos/id/1019/250/150/",
// },
