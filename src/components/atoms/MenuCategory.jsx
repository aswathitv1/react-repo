import {useState} from 'react'
import MenuList from "./MenuList"

const MenuCategory = ({menuData}) => {
    const [showList, setShowList] = useState(false)

    // const filteredCategory = menuData?.filter(item=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    const handleClick = () => {
        setShowList(!showList)
    }

    return(
        <div className="">
            {/* {filteredCategory.map(category=> */}
                <div className="bg-gray-100 p-5 my-5 rounded-lg shadow-md" key={menuData?.card?.card?.title}>
                    <div className="font-bold flex justify-between cursor-pointer" onClick={handleClick}>
                        <span className="pb-2">{menuData?.card?.card?.title}</span>
                        <span>⬇️</span>
                    </div>
                    {showList&&<MenuList list={menuData}/>}
                </div>
            {/* )} */}
        </div>
    )
}

export default MenuCategory