import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css' 

const Header = () => {
    return (
        
        <div className="headerContainer">
            <div className="headerChild">
                <header id="title">Apollo </header>
            </div>  
            <div className="headerChild">
                <div id="links">
                    <Link to="/comment" style={{ color: "#466d86"}}>All Comments</Link> 
                </div>
            </div>            
        </div>
        
    );
}

export default Header;
