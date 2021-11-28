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


                    {country.map((item) =>
                        <div class="col-sm-4">
                            <div class="card my-3" style={{ width: "18rem;" }} >
                                <img class="card-img-top" src={item.poster} alt="Card image cap" style={{ height: "300px" }} />
                                <div class="card-body text-center">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{`${item.Writeup.substring(0, 200)}...`}</p>
                                    <div className="text-center btn w-25 " style={{ background: "red", color: "white" }}>More</div>
                                </div>
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
