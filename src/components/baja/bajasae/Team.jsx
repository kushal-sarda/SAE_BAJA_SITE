import { useState, React } from 'react'
import axios from "axios"
import { useEffect, usesState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
import "../bajacss/team.css"
const Team = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://api.saenitd.com/api/baja/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country)
    return (
        <>

            <section class="page-section bg-light" id="team">
                <div class="container mt-4">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        {
                            country.map((item) =>
                                <div class="col-lg-4">
                                    <div class="team-member">
                                        <img class="mx-auto rounded-circle" src={item.image} alt="..." />
                                        <h4>{item.name}</h4>
                                        <p class="text-muted">{item.post}</p>
                                        <a class="btn btn-dark btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>
                                        <a class="btn btn-dark btn-social mx-2" href={item.facebook}><AiFillFacebook /></a>
                                        <a class="btn btn-dark btn-social mx-2" href={item.insta}><AiFillInstagram /></a>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team
