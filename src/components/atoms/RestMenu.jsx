import { useParams } from 'react-router-dom'
import useRestFetch from '../../utils/useRestFetch'
import Shimmer from './Shimmer'
import MenuCategory from './MenuCategory'

const RestMenu = () => {
    const resId = useParams()

    const restaurant = useRestFetch(resId.id)

    if(restaurant===null){
        return <Shimmer />
    }

    const filteredCategory = restaurant?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    const { name, avgRating, costForTwoMessage, cuisines} = restaurant?.[2]?.card?.card?.info

    return(
        <div className="my-10 mx-auto w-[700]">
            <h1 className='font-bold'>{name}</h1>
            <div className='bg-gray-100 p-5 my-5 rounded-lg shadow-md'>
                <h2>⭐ {avgRating}</h2>
                <h2>{costForTwoMessage}</h2>
                <h2>{cuisines.join(',')}</h2>
            </div>
            {filteredCategory.map(category=>
                <MenuCategory menuData={category}/>
            )}
        </div>
    )
}

export default RestMenu