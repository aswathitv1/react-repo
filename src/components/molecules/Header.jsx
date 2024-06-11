import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../utils/constants'
import useOnlineStatus from '../../utils/useOnlineStatus'
// import './Header.css'

const Header = () => {
    const [logoutText, setlogoutText] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const handleLogin = () => {
        if(logoutText==='Login')
            setlogoutText("LogOut")
        else
            setlogoutText('Login')
    }

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-70" src={LOGO_URL} />
            </div>
            <div className="flex px-4">
                <ul>
                    <li>Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={handleLogin}>{logoutText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header