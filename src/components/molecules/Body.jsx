import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RestItem, { promotedRestitem } from '../atoms/RestItem'
import Shimmer from '../atoms/Shimmer'
import { REST_DATA } from '../../utils/constants'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Body = () => {
    const [pageData, setPageData] = useState([])
    const [filteredPageData, setFilteredPageData] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const onlineStatus = useOnlineStatus()
    const RestItemPromoted = promotedRestitem(<RestItem/>)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const resData = await fetch(REST_DATA)
        const resJson = await resData.json()
        setPageData(resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredPageData(resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleClick = () => {
        setFilteredPageData(pageData.filter(rest=>rest.info.avgRating>=4.5))
    }

    const handleChange = (e) => {
        setSearchVal(e.target.value)
    }

    const handleSearch = () => {
        const filteredVal = pageData.filter((item)=>item.info.name.toLowerCase().includes(searchVal.toLowerCase()))
        setFilteredPageData(filteredVal)
    }

    if(!onlineStatus){
        return (<h1>Oops, no internet connection!!!</h1>)
    }

    if(filteredPageData?.length===0){
        return <Shimmer />
    }
    return(
        <div className='m-4'>
            <div className="flex justify-between mb-4">               
            <div className="searchcontainer">
                    <input className='border border-teal-800 mr-2' type="text" value={searchVal} onChange={(e)=>handleChange(e)}></input>
                <button onClick={()=>handleSearch()}>Search</button>
                </div>
                <div className='border-spacing-1'>
                    <button className='bg-teal-800 p-2 rounded-md text-white hover:bg-teal-600' onClick={()=>handleClick()}>Top-Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap m-5">
                {filteredPageData && filteredPageData.map((item)=>{
                    return(
                        <Link to={"/restaurants/"+item.info.id}  key= {item.info.id}>
                            {item.info.locality==='Koramangala'?<RestItemPromoted restData={item}/>:<RestItem restData={item}/>}
                        </Link>
                        )
                    })
                }
            </div>  
        </div>      
    )
}

export default Body