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
                <div class="row">
                    {




                        <div div className="col-lg-4">
                            <div className="container member">
                                <div className="wrapper">
                                    <a href="#">
                                        <img className="image" src={image} alt="image" />
                                    </a>
                                    <div className="title text-center">
                                        Andrew Neil
                                    </div>
                                    <div className="place text-center">
                                        Surkhet, Nepal
                                    </div>
                                </div>
                                <div className="icons">
                                    <li><a href="#"><FaFacebookSquare size={32} /></a></li>
                                    <li><a href="#"><FaLinkedin size={32} /></a></li>
                                    <li><a href="#"><FaInstagramSquare size={32} /></a></li>
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
