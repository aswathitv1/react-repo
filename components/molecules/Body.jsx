import { useEffect, useState } from 'react'
import RestItem from '../atoms/RestItem'
import {data} from './../../utils/mockData'
import './Body.css'
import Shimmer from '../atoms/Shimmer'

const Body = () => {
    const [pageData, setPageData] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const resData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
        const resJson = await resData.json()
        console.log(resJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setPageData(resJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    const handleClick = () => {
        setPageData(pageData.filter(rest=>rest.info.avgRating>=4.5))
    }
    if(pageData.length===0){
        return <Shimmer />
    }
    return(
        <div>
            <div className='buttonContainer'>
                <button onClick={()=>handleClick()}>Top-Rated</button>
            </div>
            <div className="restList">
                {pageData && pageData.map((item)=>{
                    return <RestItem key= {item.info.id} restData={item}/>
                    })
                }
            </div>  
        </div>      
    )
}

export default Body