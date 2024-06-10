import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RestItem from '../atoms/RestItem'
import Shimmer from '../atoms/Shimmer'
// import './Body.css'
import { REST_DATA } from '../../utils/constants'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Body = () => {
    const [pageData, setPageData] = useState([])
    const [filteredPageData, setFilteredPageData] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const onlineStatus = useOnlineStatus()

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
        setPageData(pageData.filter(rest=>rest.info.avgRating>=4.5))
    }

    const handleChange = (e) => {
        setSearchVal(e.target.value)
    }

    const handleSearch = () => {
        const filteredVal = pageData.filter((item)=>item.info.name.toLowerCase().includes(searchVal.toLowerCase()))
        setFilteredPageData(filteredVal)
    }

    console.log(!onlineStatus)
    if(!onlineStatus){
        return (<h1>Oops, no internet connection!!!</h1>)
    }

    if(pageData.length===0){
        return <Shimmer />
    }
    return(
        <div>
            <div className='buttonContainer'>
                <button onClick={()=>handleClick()}>Top-Rated</button>
            </div>
            <div className="searchcontainer">
                <input type="text" value={searchVal} onChange={(e)=>handleChange(e)}></input>
                <button onClick={()=>handleSearch()}>Search</button>
            </div>
            <div className="restList">
                {filteredPageData && filteredPageData.map((item)=>{
                    return <Link to={"/restaurants/"+item.info.id}  key= {item.info.id}><RestItem restData={item}/></Link>
                    })
                }
            </div>  
        </div>      
    )
}

export default Body