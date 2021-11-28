import React from 'react'
import axios from "axios"
import { useEffect, usesState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
import "../bajacss/team.css"
const Team = () => {
    // const [country, setcountry] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://api.saenitd.com/api/baja/`)
    //         .then(res => {
    //             const persons = res.data;
    //             setcountry(persons);
    //         })
    // }, []);
    // console.log(country)
    return (
        <>
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="https://source.unsplash.com/user/erondu/1600x900" alt="..." />
                                <h4>Parveen Anand</h4>
                                <p class="text-muted">Lead Designer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillLinkedin /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillFacebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillInstagram /></a>
                            </div>
                        </div>

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
