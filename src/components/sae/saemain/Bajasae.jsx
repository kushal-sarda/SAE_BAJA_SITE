import React from 'react'
import img from "../../../images/baja.png"
import img_baja from "../../../images/img_baja.jpg"
import { NavLink } from 'react-router-dom'
import "../saecss/bajasae.css"
const bajasae = () => {
    return (
        <>
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row">
                    <h1 className="text-center" style={{ color: "red", marginBottom:"20px" }}>SAE BAJA</h1>
                    <div className="col lg-col-6 md-col-6  text-center">
                        <img src={img_baja} style={{ justifyContent: "center" }} alt="baja" style={{ height: "300px", width:"350px" ,borderRadius: "20px" }}></img>

                    </div>
                    <div className="col lg-col-6 md-col-6" style={{}}>
                        <p><strong>Team NDORS</strong> ( NIT Durgapur Off-Road Sports ) is the official SAE BAJA team of NIT Durgapur representing the institute in BAJA SAE INDIA. The team involves a group of 25 auto-enthusiasts across different streams who share a common passion towards automobile engineering and racing. The team designs, fabricates and competes against other All-Terrain Vehicles at an event popularly called as BAJA SAE which is held annually every year at Pithampur, Indore.</p>
                        <NavLink to="/baja" href=""><button className="btn text-center justify-content-center" style={{ color: "white", background: "red" , marginBottom:"auto"}}>read more</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bajasae
