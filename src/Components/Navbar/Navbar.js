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
                <nav className={active ? 'navbar':'closed'}>
                    <ul>
                        <div className='closed'>
                            <Icon className='close' icon="bi:x-lg" width="100" height="100" onClick={DisplayMenu} />

                        </div>

                        <li>
                            WHAT'S ON
                        </li>
                       
                        <li>
                            BIG SCREEN EVENTS
                        </li>
                        <li>
                             INSIDE VUE
                        </li>

                            
                        <li>
                            OFFERS
                            
                        </li>
                      
                        <li>
                            GIFT CARDS
                        </li>

                        <li>
                            Login
                        </li>

                        <li>
                            Join
                        </li>
                    </ul>
                </nav>

            <div className="menubar">
                <Icon icon="charm:menu-hamburger" className="menu" onClick={DisplayMenu} width="50" height="50"/>

            </div>
        </div>
        

    )
}
export default Navbar