import React, { useState, useEffect } from 'react'
import review from "./Review.json"
import { BsFillCircleFill } from "react-icons/bs"
// import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

const Review = () => {
    const { reviews } = review
    const [reviewStateIndex, setReviewStateIndex] = useState(0)

    // setInterval(() => {
    //     setReviewStateIndex((reviewStateIndex+1)%reviews.length)
    // }, 3000);

    useEffect(() => {
        const interval = setInterval(() => {
            setReviewStateIndex((reviewStateIndex+1)%reviews.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [reviewStateIndex]);
    // const gotoNext = () => {
    //     if (reviewStateIndex === reviews.length - 1) {
    //         setReviewStateIndex(0)
    //     } else {
    //         setReviewStateIndex(reviewStateIndex + 1)
    //     }
    // }

    // const gotoPrevious = () => {
    //     setReviewStateIndex(Math.min(reviewStateIndex-1, reviews.length))
    //     if (reviewStateIndex === 0) {
    //         setReviewStateIndex(reviews.length - 1)
    //     } else {
    //         setReviewStateIndex(reviewStateIndex - 1)
    //     }
    // }

    return (
        <>
            <div className='h-full w-4/5 md:w-3/5  flex flex-col items-center justify-center'>
                <img src={reviews[reviewStateIndex].image} className=" w-28 h-28 border-2 rounded-full border-white" />
                <div className='text-white font-sans font-bold text-xl'>{reviews[reviewStateIndex].name}</div>
                <div className='text-gray-300 font-semibold'>{reviews[reviewStateIndex].role}</div>
                <div className=" text-center text-white font-sans font-semibold text-md">{reviews[reviewStateIndex].description}</div>
            </div>

            <div className='flex mb-4'>{reviews.map((_, index) => {
                return (
                    <BsFillCircleFill key={`review_dot_${index}`} onClick={() => {
                        setReviewStateIndex(index)
                    }} className='mx-1 duration-500 cursor-pointer text-white hover:text-black' />
                )
            })}</div>

            {/* <div className='flex text-3xl text-white'>
                    <AiFillCaretLeft className=' cursor-pointer' onClick={gotoPrevious} />
                    <AiFillCaretRight className='cursor-pointer' onClick={gotoNext} />
                </div> */}

        </>
    )
}

export default Review
// import React from "react";
// import ReviewFile from "./Review.json";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";

// const Review = () => {
//     console.log(ReviewFile.reviews);
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   console.log(ReviewFile.reviews[0])
//   return (

//       <Slider {...settings}>
//         {/* {ReviewFile.reviews.map((review) => {
//           <div className="h-full w-4/5 md:w-3/5  flex flex-col items-center justify-center">
//             <img
//               src={review.image}
//               className=" w-28 h-28 border-2 rounded-full border-white"
//             />
//             <div className="text-white font-sans font-bold text-xl">
//               {review.name}
//             </div>
//             <div className="text-gray-300 font-semibold">{review.role}</div>
//             <div className=" text-center text-white font-sans font-semibold text-md">
//               {review.description}
//             </div>
//           </div>;
//         })} */}
//         <div className="h-full w-4/5 md:w-3/5  flex flex-col items-center justify-center">
//             <img
//               src={ReviewFile.reviews[0].image}
//               className=" w-28 h-28 border-2 rounded-full border-white"
//             />
//             <div className="text-white font-sans font-bold text-xl">
//               {ReviewFile.reviews[0].name}
//             </div>
//             <div className="text-gray-300 font-semibold">{ReviewFile.reviews[0].role}</div>
//             <div className=" text-center text-white font-sans font-semibold text-md">
//               {ReviewFile.reviews[0].description}
//             </div>
//           </div>;

//       </Slider>

//   );
// };

// export default Review;

// import React, { Component } from "react";
// import Slider from "react-slick";

// const Review = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <>
//       <div className="bg-black text-white">
//         <h2> Single Item</h2>
//         <Slider  {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// };
// export default Review