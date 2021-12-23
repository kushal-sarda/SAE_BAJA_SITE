import React from 'react'
import "../bajacss/home.css"
import fullvehicle from "../../../images/fullvehicle.png"

const Homeb = () => {
    return (
        <div>
            <main className="flex">
                <article className="landing-page">
                    <div className="darkener bg-dark">
                        <div className="wrapper flex-column">
                        <div className="mainimg"><img className="landing-page fullvehicle-img" src={fullvehicle} ></img></div>
                            <p className="top-logo text-center"></p>
                            
                            <h2 className="page-subtitle"></h2>
                        </div>
                    </div>
                </article>

                <article className="contact-form bg-dark text-light">
                    <div className="wrapper flex-column">
                    <h1 className="landing-page-title text-center"><strong> “IF MUD AIN’T FLYIN<br></br>
		YOU AIN’T TRYIN”</strong> </h1>
                        <h1 className="contact-form-title ">ABOUT</h1>
                        <h2 className="page-subtitle"><b>Team NDORS (NIT Durgapur Off-Road Sports)</b> is the official <b> BAJA SAE</b> team of <b>NIT Durgapur</b> representing the institute in <b>BAJA SAEINDIA</b>. The team involves a group of 25 auto-enthusiasts across different streams who share a common passion towards automobile engineering and racing. The team designs, fabricates and competes against other All-Terrain Vehicles at an event popularly called as <b>BAJA SAE</b> which is held annually every year at Pithampur, Indore.</h2>
                        <p> </p>



                        <p className="disclaimer"></p>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Homeb
