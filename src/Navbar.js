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
            
                <a href="#about"><i className="fa-solid fa-user navitem"></i></a>
                <a  href="#projects"><i className="fa-solid fa-diagram-project navitem"></i></a>
                <a  href="#contact"><i className="fa-solid fa-envelope navitem"></i></a>
                {/* <i className="fa-solid fa-bars navicon-burger" onClick={showNav}></i> */}
                <button className='darkmode' id='darkButton' onClick={DarkMode}>
                    {
                        !isDark?<i className="fa-regular fa-moon"></i>:<i className="fa-regular fa-sun"></i>
                    }
                    
                    </button>
            </nav>
        </div>
    )
}

export default Navbar;