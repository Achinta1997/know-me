import React, { useState } from 'react'
import './Navbar.css'


const Navbar=(props)=>{

    
    const [isDark,setDark]=useState(false);

    const DarkMode=()=>{
        props.checkDark(isDark);
        setDark(!isDark);
        
    }

    return (
        <div className='navbar'>
            
            <nav className='navbar-nav'>
            
                <a href="#"><i className="fa-solid fa-user"></i></a>
                <a  href="#"><i className="fa-solid fa-diagram-project"></i></a>
                <a  href="#"><i className="fa-solid fa-envelope"></i></a>
                {/* <i className="fa-solid fa-bars navicon-burger" onClick={showNav}></i> */}
                <a  href="#" className='darkmode' id='darkButton' onClick={DarkMode}>
                    {
                        !isDark?<i className="fa-regular fa-moon"></i>:<i className="fa-regular fa-sun"></i>
                    }
                    
                    </a>
            </nav>
        </div>
    )
}

export default Navbar;