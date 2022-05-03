import React from "react";
import { FcMindMap } from "react-icons/fc";

const Map = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <FcMindMap className=" text-6xl my-4" />
        </div>

        <div className="flex justify-center">
          <div className=" font-body font-bold text-6xl mb-8 ">Location</div>
        </div>

        <div id="location" className="  flex justify-center">
          <div className="w-full md:w-4/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1207349.8409018104!2d5.0103939041355385!3d51.13318837862579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc75a0ed39b08c138!2sKandel%20Tejendra!5e0!3m2!1sen!2snp!4v1648833100123!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
