import { useParams } from 'react-router-dom'
import { REST_IMG } from "../../utils/constants"
import useRestFetch from '../../utils/useRestFetch'
import Shimmer from './Shimmer'

const RestCard = () => {
    const resId = useParams()

    const restaurant = useRestFetch(resId.id)
    console.log(restaurant)

    if(restaurant===null){
        return <Shimmer />
    }

    return(
        <div className="rest-container">
            <img className= "rest-image" src={REST_IMG+restaurant?.cloudinaryImageId} />
            <h1>{restaurant?.name}</h1>
            <h2>{restaurant?.avgRating} - {restaurant?.costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default RestCard