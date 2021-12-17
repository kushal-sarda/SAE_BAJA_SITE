import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from "react";
import axios from 'axios';
import "../saecss/member.css"
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"


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
            <section class="page-section bg-light-gray" id="team">
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red" }}>Fourth Year</h1>
                    </div>
                    <div class="row bg-light">
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2022) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={item.image} alt="..." />
                                        <h4>{item.name}</h4>
                                        <p class="text-muted">{item.post}</p>
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<></>
                                        }
                                        {
                                             (item.facebook)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.facebook}><AiFillFacebook /></a>:<></>
                                        }
                                        {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<></>
                                        }
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                  
                </div>
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red" }} style={{ marginTop: "-400px", color: "red" }}>Third Year</h1>
                    </div>
                    <div class="row">
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2023) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={item.image} alt="..." />
                                        <h4>{item.name}</h4>
                                        {/* <p class="text-muted">{item.post}</p> */}
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<></>
                                        }
                                        {
                                             (item.facebook)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.facebook}><AiFillFacebook /></a>:<></>
                                        }
                                        {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<></>
                                        }
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                    
                </div>
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red" }} style={{ marginTop: "-200px", color: "red" }}>Second Year</h1>
                    </div>
                    <div class="row"  style={{ marginTop: "-350px" }}>
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2024) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={item.image} alt="..." />
                                        <h4>{item.name}</h4>
                                        {/* <p class="text-muted">{item.post}</p> */}
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<></>
                                        }
                                        {
                                             (item.facebook)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.facebook}><AiFillFacebook /></a>:<></>
                                        }
                                        {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<></>
                                        }
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                    
                </div>
            </section>
            
           
            


        </>
    )
}

export default Members
