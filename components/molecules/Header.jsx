import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from './../../utils/constants'
import useOnlineStatus from '../../utils/useOnlineStatus'
import './Header.css'

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
        <div className="header">
            <div className="img-container">
                <img src={LOGO_URL} />
            </div>
            <ul className="navItem">
                <li>Status: {onlineStatus?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button onClick={handleLogin}>{logoutText}</button>
            </ul>
        </div>
    )
}

export default Header