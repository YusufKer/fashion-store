import React from "react"
import "./footer.css"

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-links">
                <ul>
                    <li>About us</li>
                    <li>Customer services</li>
                </ul>
                <ul>
                    <li>Privacy and Cookie Policy</li>
                    <li>Search Terms</li>
                    <li>Contact Us</li>
                    <li>Orders and Returns</li>
                    <li>Advanced Search</li>
                </ul>
            </div>
            <div className="input-email">
                <input type="email" placeholder="email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer