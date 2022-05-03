import React from "react";
import { FcWorkflow } from "react-icons/fc";

const Card = ({ card }) => {
  return (
    <div
      data-aos="fade-up"
      className=" cursor-pointer flex flex-col items-center m-4 w-80 bg-white p-6 shadow-xl duration-300 hover:shadow-2xl rounded-md"
    >
      <div data-aos="fade-up" className="my-4">
        <FcWorkflow className="text-3xl" />
      </div>
      <div
        className="text-center font-bold text-3xl mb-4 font-body"
        data-aos="fade-up"
      >
        {card.workTitle}
      </div>
      <div
        className="text-center mb-4 text-gray-500 text-xl font-body"
        data-aos="fade-up"
      >
        {card.description}
      </div>
    </div>
  );
};

export default Card;
