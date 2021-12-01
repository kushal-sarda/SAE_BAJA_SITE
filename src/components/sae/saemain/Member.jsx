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
                <h1 className=" p-4 text-center" style={{ color: "red" }}>Final Years</h1>
                <div className="row">
                    {




                        country.map((item) => {
                            var x = item.batch;
                            console.log(x);
                            return (


                                (x === 2022) ? <div className="col-lg-3  col-md-6">

                                    <div className="card1 m-4">
                                        <div className="img-container">
                                            <div className="skewed">
                                                <div id="img"> <img className="imgs" src={item.image} alt="memberiamge"></img> </div>
                                            </div>
                                        </div>
                                        <div className="content1">
                                            <h3>{item.first_name} {item.last_name}</h3>
                                            <h5>{item.post}</h5>
                                            <div className="links">
                                                <a href={item.facebook}><FaFacebookSquare /></a>
                                                <a href={item.insta}><FaInstagramSquare /></a>
                                                <a href={item.linkedin}><FaLinkedin /></a>

                                            </div>
                                        </div>
                                    </div>


                                </div> : <h1></h1>


                            )
                        })
                    }
                </div>
            </section>
            <section>
                <h1 className=" p-4 text-center" style={{ color: "red" }} style={{ marginTop: "-400px", color: "red" }}>Third Years</h1>
                <div className="row" style={{ marginTop: "-100px" }}>

                    {
                        country.map((item) => {
                            var x = item.batch;
                            console.log(x);
                            return (


                                (x === 2023) ? <div className="col-lg-3  col-md-6">

                                    <div className="card1 m-4">
                                        <div className="img-container">
                                            <div className="skewed">
                                                <div id="img"> <img className="imgs" src={item.image} alt="memberiamge"></img> </div>
                                            </div>
                                        </div>
                                        <div className="content1">
                                            <h3>{item.first_name} {item.last_name}</h3>
                                            <h5></h5>
                                            <div className="links">
                                                <a href={item.facebook}><FaFacebookSquare /></a>
                                                <a href={item.insta}><FaInstagramSquare /></a>
                                                <a href={item.linkedin}><FaLinkedin /></a>

                                            </div>
                                        </div>
                                    </div>


                                </div> : <h1></h1>


                            )
                        })
                    }
                </div>
            </section>
            <section>
                <h1 className=" p-4 text-center" style={{ color: "red" }} style={{ marginTop: "-200px", color: "red" }}>Second Years</h1>
                <div className="row" style={{ marginTop: "-350px" }}>
                    {
                        country.map((item) => {
                            var x = item.batch;
                            console.log(x);
                            return (


                                (x === 2024) ? <div className="col-lg-3 col-md-6">

                                    <div className="card1 m-4">
                                        <div className="img-container">
                                            <div className="skewed">
                                                <div id="img"> <img className="imgs" src={item.image} alt="memberiamge"></img> </div>
                                            </div>
                                        </div>
                                        <div className="content1">
                                            <h3>{item.first_name} {item.last_name}</h3>
                                            <h5></h5>
                                            <div className="links">
                                                <a href={item.facebook}><FaFacebookSquare /></a>
                                                <a href={item.insta}><FaInstagramSquare /></a>
                                                <a href={item.linkedin}><FaLinkedin /></a>

                                            </div>
                                        </div>
                                    </div>


                                </div> : <h1></h1>


                            )
                        })


                    }


                </div>





            </section>



        </>
    )
}

export default Members
