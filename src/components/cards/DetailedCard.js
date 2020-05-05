import React from "react"
import "./detailedCard.css"
//importing placeholder images
import MR_1 from "../../images/products/MR-1.jpg"
import MR_2 from "../../images/products/MR-2.jpg"
import MR_3 from "../../images/products/MR-3.jpg"

function DetailedCard(){
    return(
        <div className="DetailedCard">
            <div className="detailed-card-images">
                <img className="first" src={MR_1}></img>
                <img src={MR_1}></img>
                <img src={MR_2}></img>
                <img src={MR_3}></img>
            </div>
            <div className="placeholder">
                placeholder test
            </div>
        </div>
    )
}

export default DetailedCard