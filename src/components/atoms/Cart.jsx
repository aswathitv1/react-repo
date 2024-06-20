import { useDispatch, useSelector } from "react-redux"
import MenuList from "./MenuList"
import { clearCart } from "../../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items)

    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch(clearCart())
    }

    return(
        <div className="m-auto w-6/12 p-4">
            <div className="text-center">
                <div className="font-bold pb-5">Cart</div>
                <button className='bg-black text-white rounded-md p-1' onClick={handleClear}>Clear Cart</button>
            </div>
            <MenuList list = {cartItems}/>
        </div>
    )
}

export default Cart