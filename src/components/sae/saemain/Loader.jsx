import React from 'react'
import "../saecss/loader.css"
const Loader = () => {
    return (
        <>
            <div>
                <div id="loader-wrapper">
                    <div class="loader">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="subline"></div>
                        <div class="subline"></div>
                        <div class="subline"></div>
                        <div class="subline"></div>
                        <div class="subline"></div>
                        <div class="loader-circle-1"><div class="loader-circle-2"></div></div>
                        <div class="needle"></div>
                        <div class="loading text-dark">Loading</div>
                    </div>
                    <div className=" loading fw-bold text-center  fst-italic" style={{ color: "red" }}><h1 >SAE <span className="text-dark">NIT Durgapur</span></h1></div>

                </div>
            </div>
        </>
    )
}

export default Loader
