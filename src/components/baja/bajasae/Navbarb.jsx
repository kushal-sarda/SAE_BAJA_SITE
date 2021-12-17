import React from 'react'
import { NavLink } from 'react-router-dom'
import "../bajacss/navbar.css"
const Navbarb = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark  fixed-top" style={{ background: "rgba(0,0,0)" }} id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src="/images/logo.jpeg" alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item navb"><NavLink className="nav-link" to="/baja">Home</NavLink></li>
                            {/* <li className="nav-item navb"><NavLink className="nav-link" to="/baja/about">About</NavLink></li> */}
                            <li className="nav-item navb"><NavLink className="nav-link" to="/baja/team">team</NavLink></li>
                            <li className="nav-item navb"><NavLink className="nav-link" to="/baja/sponsor">Sponsors</NavLink></li>
                            <li className="nav-item navb"><NavLink className="nav-link" to="/baja/work">Work</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarb