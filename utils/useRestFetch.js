import { useState, useEffect } from "react"
import {  REST_URL } from "../utils/constants"

const useRestFetch = (id) => {
    const [responseData, setResponseData] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const resData = await fetch(REST_URL+id)
        const responseData = await resData.json()
        setResponseData(responseData?.data?.cards[2]?.card.card.info)
    }

    return responseData
}

export default useRestFetch