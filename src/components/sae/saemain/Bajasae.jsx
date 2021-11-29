import React from 'react'
import img from "../../../images/baja.png"
import { NavLink } from 'react-router-dom'
import "../saecss/bajasae.css"
const bajasae = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <h1 className="text-center" style={{ color: "red" }}>SAE BAJA</h1>
                    <div className="col lg-col-6 md-col-6  text-center">
                        <img src={img} style={{ justifyContent: "center" }} alt="baja" style={{ height: "300px" }}></img>

                    </div>
                    <div className="col lg-col-6 md-col-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur</p>
                        <NavLink to="/baja" href=""><button className="btn text-center justify-content-center" style={{ color: "white", background: "red" }}>read more</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bajasae
