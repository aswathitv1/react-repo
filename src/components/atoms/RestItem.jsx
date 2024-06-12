// import './restItem.css'
import { REST_IMG } from '../../utils/constants'

const RestItem = ({restData}) => {
    console.log(restData)
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = restData.info

    return(
        <div className="p-5 m-4 h-auto w-[300] hover:bg-teal-600 rounded-md hover:text-white">
            <img className="w-52 h-60 rounded-md mb-2" src={REST_IMG+cloudinaryImageId} />
            <h2 className='font-medium pb-2'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} star</h3>
            <h3>{sla.slaString} mins</h3>
        </div>  
    )
}

export const promotedRestitem = (restItem) => {
    return((props)=>{
        return(
            <div>
                <label className='bg-black text-white p-1 rounded-md absolute'>{props.restData.info.locality}</label>
                <RestItem {...props} />
            </div>
        )
    })
}

export default RestItem