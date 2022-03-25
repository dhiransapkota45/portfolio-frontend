import React, { useEffect, useState } from 'react'

const useFetch = (url, fetchMethod, fetchHeaders, fetchBody) => {
    // const baseUrl = `http://localhost:3002`

    const [data, setData] = useState(null)

    useEffect( async()=>{
        const fetchRaw = await fetch(`${url}`, {
            method:fetchMethod,
            headers:fetchHeaders,
            body:fetchBody
        }) 
        const fetchData = await fetchRaw.json()
        setData(fetchData)
    }, [])
    return data
}

export default useFetch