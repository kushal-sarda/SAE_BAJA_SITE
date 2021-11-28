import React from 'react'
import { NavLink } from "react-router-dom"
import "../saecss/error.css"


const Error = () => {
    return (
        <div className="mt-5 text-center" >
            <h1 style={{ color: "red" }}>Page Not Found</h1>
            {/* <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p */}
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <NavLink target="_blank" to="/" class="more-link">Home</NavLink>
            </div>
        </div>
    )
}

export default Error
