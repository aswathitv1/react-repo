import { useDispatch } from 'react-redux'
import { REST_IMG } from './../../utils/constants'
import { addItem } from '../../utils/cartSlice'
const MenuList = ({list}) => {

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(addItem(item))
    }

    return(
        <div>
            {list?.map(item=>
                <div className="border-b-2 p-2" key={item.card.info.id}>
                    <div>
                        <img className="w-20 items-end" src={REST_IMG+item.card.info.imageId}/>
                        <div className='text-left pt-2'>
                            <div className="text-sm font-bold">{item.card.info.name}</div>
                            <div className="text-sm">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                        </div>
                        <button className='bg-black text-white rounded-md p-1' onClick={()=>handleClick(item)}>Add</button>
                    </div>
                    <p className="text-sm py-2">{item.card.info.description}</p>
                </div>
            )}
        </div>
    )
}

export default MenuList