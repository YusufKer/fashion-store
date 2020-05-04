import React from "react"
import "./navbar.css"

function Navbar(){
    return(
        <div className="Navbar">
            <ul className="navbar-links">
                <li>Women</li>
                <li>Men</li>
                <li>Outdoor</li>
                <li>Training</li>
                <li>Sale</li>
            </ul>
        </div>
    )
}

export default Navbar