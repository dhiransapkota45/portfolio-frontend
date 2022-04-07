import React, { useEffect, useState } from 'react'

//, fetchMethod, fetchHeaders, fetchBody
const useFetch = (url) => {
    const baseUrl = `http://localhost:3002`

    const [data, setData] = useState(null)

    useEffect( async()=>{
        const fetchRaw = await fetch(`${baseUrl}${url}`) 
        const fetchData = await fetchRaw.json()
        setData(fetchData)
    }, [])
    return data
}

export default useFetch