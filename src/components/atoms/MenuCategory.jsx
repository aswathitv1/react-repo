import {useContext} from 'react'
import MenuList from "./MenuList"
import UserContext from '../../utils/UserContext'

const MenuCategory = ({menuData, showList, setShowItem}) => {
    const {user} = useContext(UserContext)

    // const filteredCategory = menuData?.filter(item=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    const handleClick = () => {
        setShowItem()
    }

    return(
        <div className="">
            <label>{user}</label>
            <div className="bg-gray-100 p-5 my-5 rounded-lg shadow-md" key={menuData?.card?.card?.title}>
                <div className="font-bold flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="pb-2">{menuData?.card?.card?.title}</span>
                    <span>⬇️</span>
                </div>
                {showList&&<MenuList list={menuData}/>}
            </div>
        </div>
    )
}

export default MenuCategory