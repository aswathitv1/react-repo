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
        <div className="flex justify-between bg-teal-800">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex px-7">
                    <li  className="flex px-3 text-cyan-50">Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li  className="flex px-3 text-cyan-50"><Link to="/">Home</Link></li>
                    <li  className="flex px-3 text-cyan-50"><Link to="/about">About Us</Link></li>
                    <li  className="flex px-3 text-cyan-50"><Link to="/contact">Contact</Link></li>
                    <li  className="flex px-3 text-cyan-50"><Link to="/grocery">Grocery</Link></li>
                    <li  className="flex px-3 text-cyan-50">Cart</li>
                    <button className="flex px-3 text-cyan-50" onClick={handleLogin}>{logoutText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header