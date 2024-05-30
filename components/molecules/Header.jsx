import { useState } from 'react'
import { LOGO_URL } from './../../utils/constants'
import './Header.css'

const Header = () => {
    const [logoutText, setlogoutText] = useState("Login")

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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={handleLogin}>{logoutText}</button>
            </ul>
        </div>
    )
}

export default Header