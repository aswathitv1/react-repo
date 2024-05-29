import { useState } from 'react'
import { LOGO_URL } from './../../utils/constants'
import './Header.css'

const Header = () => {
    const [logoutText, setlogoutText] = useState(false)

    const handleLogin = () => {
        setlogoutText(true)
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
                <button onClick={handleLogin}>{logoutText?'Logout':'Login'}</button>
            </ul>
        </div>
    )
}

export default Header