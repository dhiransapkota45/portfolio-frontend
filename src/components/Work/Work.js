import React from 'react'
import work from "./Work.json"
import Card from './Card'

const Work = ({workDetails}) => {
    return (
        <div  className='flex justify-center bg-gray-100' id='service'>
            <div className=' mb-16 w-4/5 flex flex-col items-center mt-12'>
                <div className=' font-sans font-bold text-3xl'>
                    What I'm doing
                </div>
                <div className='text-gray-500 tracking-wide mt-4 text-md text-center'>
                    I love what I do. I take great pride in what I do.
                </div>
                <div className='w-20 border-2 border-gray-400 my-4'></div>

                <div className='flex flex-wrap justify-center'>
                    {
                        workDetails.map((card, index) => {
                            return (
                                <Card key={index} card={card} />
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Work