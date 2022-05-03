import React from "react";

import Card from "./Card";

const Work = ({ workDetails }) => {
  return (
    <div className="flex justify-center bg-gray-100" id="service">
      <div className=" mb-16 w-4/5 flex flex-col items-center mt-12">
        <div
          data-aos="fade-up"
          className=" text-4xl font-montserrat font-bold leading-10  "
        >
          What I'm doing
        </div>
        <div
          data-aos="fade-up"
          className="text-gray-500 tracking-wide mt-4 text-xl font-montserrat text-center"
        >
          I love what I do. I take great pride in what I do.
        </div>
        <div
          data-aos="fade-up"
          className="w-40 h-1 bg-gray-500 rounded-sm my-4"
        ></div>

        <div  className="flex flex-wrap justify-center">
          {workDetails.map((card, index) => {
            return <Card data-aos-delay={"200"} key={index} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
