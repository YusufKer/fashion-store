import React from "react"
import "./homepage.css"
//importing components
import BasicCard from "../cards/BasicCard"
//importing images...
import banner from "../../images/banner.jpg"
import mens_fashion from "../../images/mens-fashion.jpg"
import womens_fashion from "../../images/womens-fashion.jpg"
import sports_wear from "../../images/sports-wear.jpg"
import barbeque from "../../images/barbeque.jpg"
import knife from "../../images/knife.jpg"

function Homepage(){
    //takes in imported image as argument and creates a div with that image set as a background... [A]
    const image = (url,hei) =>{
        return <div 
            style={{
                background:`url(${url}) no-repeat center center`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width:"auto", 
                height:hei
            }} 
        ></div>
    }
    const one_width = Math.round(((window.screen.width - 30 - 16)/3)-15)
    
    const addBanner = {backgroundImage:`url(${banner})`}
    return(
        <>
            <div style={addBanner} className="top-banner">
                <div className="banner-info-box">
                    <h1>Missing the outside?</h1>
                    <p>
                        We don’t inherit the earth from our ancestors, we borrow it from our children. 
                        Native American proverb
                    </p>
                    <button>Check Out Our Outdoor Selection</button>
                </div>
            </div>
            <div className="picture-grid">
                <div className="grid-item long">
                    {image(barbeque,one_width*2+18)} {/*     example of [A]     */}
                </div>
                <div className="grid-item wide">
                    {image(womens_fashion,one_width)}
                </div>
                <div className="grid-item">
                    {image(sports_wear,one_width)}    
                </div>
                <div className="grid-item long">
                    {image(mens_fashion,one_width*2+18)}    
                </div>
                <div className="grid-item wide">
                {image(knife,one_width)}
                </div>
            </div>
            <BasicCard/>
        </>
    )
}

export default Homepage