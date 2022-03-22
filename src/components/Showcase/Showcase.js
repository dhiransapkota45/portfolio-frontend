
import React from 'react'
import data from "./data.json"


const Showcase = () => {
    console.log(data.dataArray);
    return (
        <div className='flex flex-wrap bg-gray-100'>
            {
                data.dataArray.map((data) => {
                    return(
                    <div>
                        <div>{data.number}</div>
                        <div>{data.text}</div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Showcase