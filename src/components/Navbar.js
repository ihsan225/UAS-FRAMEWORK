import "../styles/Lpnav.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import { Nav } from "react-bootstrap";
const logout = async () => {
    
    sessionStorage.clear();
    window.location.href = '/';
    
    // window.location.href = '/';
}
const LpNav = () => {

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

return (
    <div className={color ? "header header-bg" : "header"}>
            <Link to="/" className="logo"><h1>SKYLIGHT BOOK</h1></Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
        <Nav className="justify-content-end">
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff"}} />) : (<FaBars size={20} style={{ color: "#fff"}} />)}
        </div>
    </div>
)
}

export default LpNav