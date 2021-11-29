import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from "react";
import axios from 'axios';
import "../saecss/member.css"
import image from "../../../images/sae_logo.png"
import pic1 from "../../../images/niloptal.jpeg"


const Members = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://api.saenitd.com/api/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country);
    // const img = document.querySelector("img");
    // const icons = document.querySelector(".icons");
    // img.onclick = function () {
    //     this.classList.toggle("active");
    //     icons.classList.toggle("active");
    // }
    return (
        <>



            <h1 className=" p-4 text-center" style={{ color: "red" }}>Members</h1>
            <section className="2022">
                <div className="row">
                    {




                        <div div className="col-lg-4">

                            <div className="card1">
                                <div className="img-container">
                                    <div className="skewed">
                                        <div id="img"></div>
                                    </div>
                                </div>
                                <div className="content1">
                                    <h3>Name</h3>
                                    <h5>Web developer</h5>
                                    <div className="links">
                                        <a href="#"><FaFacebookSquare /></a>
                                        <a href="#"><FaInstagramSquare /></a>
                                        <a href="#"><FaLinkedin /></a>

                                    </div>
                                </div>
                            </div>


                        </div>



                    }


                </div>





            </section>



        </>
    )
}

export default Members
