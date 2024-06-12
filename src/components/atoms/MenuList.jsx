import { REST_IMG } from './../../utils/constants'
const MenuList = ({list}) => {

    return(
        <div>
            {list?.card?.card?.itemCards?.map(item=>
                <div className="border-b-2 p-2" key={item.card.info.id}>
                    <div>
                        <img className="w-20 items-end" src={REST_IMG+item.card.info.imageId}/>
                        <div className='text-left'>
                            <div className="text-sm">{item.card.info.name}</div>
                            <div className="text-sm">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                        </div>
                        
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                </div>
            )}
        </div>
    )
}

export default MenuList