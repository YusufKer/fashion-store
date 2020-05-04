import React,{useState} from "react"
import "./basicCard.css"
//importing icons
import heart_icon_liked from "../../icons-global/001-heart.png"
import heart_icon from "../../icons-global/002-heart-1.png"
//importing placeholder image
import MR_1 from "../../images/products/MR-1.jpg"

function BasicCard(){
    const [liked, setLiked] = useState(false)
    return(
        <div className="Basic-Card">
            <img className="product-image" src={MR_1} alt="product"/>
            <h1>Name</h1>
            <p>Price</p>
            <div className="inter-act">
                <button  className="add-to-cart-button">Add to cart</button>
                <img 
                    onClick={()=>setLiked(!liked)} 
                    className="like-icon" 
                    src={liked?heart_icon_liked:heart_icon} 
                    alt="like-icon"
                />
            </div>
        </div>
    )
}

export default BasicCard