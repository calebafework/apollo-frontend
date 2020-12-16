import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    return (
        <header>
            <div>
                <header className="title">Apollo </header>            
                <div className="links">
                    <ul>
                        <li>All Comments</li>
                    </ul>
                </div>            
            </div>
        </header>
    );
}

export default Header;
