import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
np
const Header = () => {
    return (
        <header>
            <div>
                {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Apollo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">All Comments</Nav.Link>
                        <Nav.Link href="#pricing">Social</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar> */}

                <header className="title">Apollo </header>            
                <div className="links">
                    <Link to="/comments" style={{ color: "#466d86"}}>All Comments</Link> 
                </div>            
            </div>
        </header>
    );
}

export default Header;
