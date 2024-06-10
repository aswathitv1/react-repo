// import './restItem.css'
import { REST_IMG } from '../../utils/constants'

const RestItem = ({restData}) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = restData.info

    return(
        <div className="restItem">
            <img className="imgItem" src={REST_IMG+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} star</h3>
            <h3>{sla.slaString} mins</h3>
        </div>  
    )
}

export default RestItem