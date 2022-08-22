import React, { useState } from 'react'
import { Link } from "react-scroll";
import './Navbar.scss';
import { Icon } from '@iconify/react';
import Logo from "../../Assets/images/VueLogo.png"


function Navbar() { 
     const [active,setActive] = useState(false);

    //Navbar icon function 
    const DisplayMenu = () => {
        setActive(!active)
    }


    return (
        <div className='header'>
            <div className='navlogo'>
                <Link to="/" className="logo">
                    <img className="logo-image" src={Logo} alt="Logo" />
                </Link>
            </div>
            <nav className={active ? 'navbar' : 'closed'}>
                <ul className='Nav-links'>
                    <div className='closed'>
                        <Icon className='close' icon="bi:x-lg" width="100" height="100" onClick={DisplayMenu} />
                    
                    </div>
                    <li className='Nav-links'>
                        WHAT'S ON
                    </li>
                    
                    <li className='Nav-links'>
                        BIG SCREEN EVENTS
                    </li>

                    <li className='Nav-links'>
                        INSIDE VUE
                    </li>
                    <li className='Nav-links'>
                        OFFERS
                    </li>
                    <li className='Nav-links'>
                        GIFT CARDS
                        </li>
                    
                </ul>
            </nav>
            <nav className='login-navTag'>
                <ul className='nav-login' >
                    <li className='nav-login'>
                            Login
                    </li>

                    <li className='nav-login'>
                            Join
                    </li>
                </ul>

            </nav>
            
            
            <div className="menubar">
                <Icon icon="charm:menu-hamburger" className="menu" onClick={DisplayMenu} width="50" height="50" />
            </div>
        </div>
        

    )
}
export default Navbar