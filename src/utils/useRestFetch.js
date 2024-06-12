import { useState, useEffect } from "react"
import {  REST_URL } from "./constants"

const useRestFetch = (id) => {
    const [responseData, setResponseData] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const resData = await fetch(REST_URL+id)
        const responseData = await resData.json()
        // console.log(responseData?.data?.cards)
        setResponseData(responseData?.data?.cards)
    }

    return responseData
}

export default useRestFetch