import React from "react"
import "./basicCard.css"
//importing icons
import heart_icon from "../../icons-global/love-and-romance.svg"

function BasicCard(){
    return(
        <div className="Basic-Card">
            <img src="" alt="product"/>
            <h1>Name</h1>
            <p>Price</p>
            <div>
                <button className="add-to-cart-button">Add to cart</button>
                <img className="like-icon" src={heart_icon} alt="like-icon"/>
            </div>
        </div>
    )
}

export default BasicCard