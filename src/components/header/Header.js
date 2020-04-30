import React from "react"
import "./header.css"

import search from "./search.png"
import cart from "./cart.png"

function Header(){
    return(
        <div className="Header">
            <img id="logo" alt="company-logo"/>
            <div>
                <input type="text" placeholder="Search"/>
                <button><img width="12px" src={search}/></button>
                <button><img width="12px" src={cart}/></button>
            </div>
        </div>
    )
}

export default Header