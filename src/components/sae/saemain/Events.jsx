import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';

const Events = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://api.saenitd.com/api/event/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country[0])
    return (
        <>

            <div>
                <div className="text-center my-5">

                    <h1 style={{ color: "red" }}>Our Events</h1>



                </div>
            </div>
            <div class="container">
                <div class="row">


                        {/* <div class="col-sm-4">
                            <div class="card my-3" style={{ width: "18rem;" }} >
                                <img class="card-img-top" src={item.poster} alt="Card image cap" style={{ height: "300px" }} />
                                <div class="card-body text-center">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{`${item.Writeup.substring(0, 200)}...`}</p>
                                    <div className="text-center btn w-25 " style={{ background: "red", color: "white" }}>More</div>
                                </div>
                            </div>
                        </div> */}

                    {country.map((item) =>
                        <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={item.poster} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">{item.name}</div>
                                    <div class="portfolio-caption-subheading text-muted">{`${item.Writeup.substring(0, 200)}...`}</div>
                                </div>
                        </div>
                    )
                    }


                </div>
            </div>



        </>
    )

}




export default Events
