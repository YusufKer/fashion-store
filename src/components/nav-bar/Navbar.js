import React from "react"
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar(){
    const link_style={  textDecoration: 'none', color: "black"}
    return(
        <div className="Navbar">
            <ul className="navbar-links">
                <Link style={link_style} to="/women">Women</Link>
                <Link style={link_style} to="/men">Men</Link>
                <Link style={link_style} to="/outdoor">Outdoor</Link>
                <Link style={link_style} to="/training">Training</Link>
                <Link style={link_style} to="/sale">Sale</Link>
            </ul>
        </div>
    )
}

export default Navbar