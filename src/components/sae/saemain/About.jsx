import React from 'react'
import Slide from 'react-reveal/Slide';
const About = () => {
    return (
        <>
            <section className="about pb-4 pt-5">
                <div className="container-fluid">
                    <div className="row mx-3">
                        <Slide to left>
                            <div className="col-lg-6 text-white md-col-6">
                                <div className="heading  border-bottom border-dark border-1 w-50 text-left" style={{ color: "red" }}><h3>About Us</h3></div>
                                <br></br>
                                <p className="text-dark text-left"><strong className="text-danger">SAEINDIA</strong> is India's leading resource for mobility technology. It is a strategic alliance partner of SAE International registered in India as an Indian nonprofit engineering and scientific society dedicated to the advancement of mobility industry in India.
                                    <strong className="text-danger"> SAE India collegiate chapter of NIT Durgapur</strong> was conceived in 2007 with an idea to integrate the students of the college into international fabric of automobile engineering.
                                    Presently 200 students are enjoying the benefits of SAE India membership.
                                    We organize a number of innovative events, workshops and lectures round the year and a competitive place where the sharpest minds battle in the quest to achieve disctinction.
                                    SAE along with  Team Aavishkar organises <strong className="text-danger">AArohan</strong> which is the official technical fest of NIT Durgapur.
                                    SAE NIT Durgapur also publishes its annual magazine called <strong className="text-danger">Autopia</strong> for automobile enthusiasts to know about latest technologies at one place.
                                    <strong className="text-danger"> BAJA SAE </strong>is a part of SAE NIT Durgapur which takes part in BAJA competition organised by SAE India. They represent NIT Durgapur at this national level competition under the team name NDORS.</p>
                            </div>
                        </Slide>
                        <Slide to right>
                            <div className="col-lg-6 mt-5 ">
                                {/* <div className="heading  border-bottom border-light border-5 w-50 " style={{ color: "red" }}><h3>SAE INDIA Membership</h3></div>
                                <br></br>
                                <p className="text-dark"><strong className="text-danger">SAEINDIA </strong>is one of the few professional engineering societies whose membership represents practically every engineering and scientific discipline. Its members combine their specialized abilities to further advance the research, development, design, manufacture and utilization of vehicles which operate on land and water and in air and space. Be a part of the SAE family by becoming a member and enjoy the following benefits:</p>
                                <ul className="text-dark">
                                    <li>Members receive free registration at SAEINDIA's lecture meetings and exhibits. This unique benefit puts the members in touch with other professional engineers and suppliers who determine the future of the expanding mobility industry worldwide.</li>
                                    <li>Members can purchase SAEINDIA and SAE International technical papers and publications at member discount prices.</li>
                                    <li>Access vital high-tech mobility information through renewal registration fee for attending SAEINDIA National and International Congress.</li>
                                </ul> */}
                                <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                                    </ol>

                                    <div class="carousel-inner" role="listbox">

                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                                                alt="First slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide </h5>
                                                <p>label
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                                alt="Second slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>second slide </h5>
                                                <p>label
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                                alt="Third slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Third slide </h5>
                                                <p>label
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>

                                </div>
                            </div>
                        </Slide>


                    </div>
                    <div className="row mx-3 bg-light">
                        <div className="col-lg-12 mt-5 ">
                            <div className="heading  text-center border-bottom border-dark border-1 w-100 " style={{ color: "red" }}><h3 className="text-center">SAE INDIA Membership</h3></div>
                            <br></br>
                            <p className="text-dark"><strong className="text-danger">SAEINDIA </strong>is one of the few professional engineering societies whose membership represents practically every engineering and scientific discipline. Its members combine their specialized abilities to further advance the research, development, design, manufacture and utilization of vehicles which operate on land and water and in air and space. Be a part of the SAE family by becoming a member and enjoy the following benefits:</p>
                            <ul className="text-dark text-left">
                                <li>Members receive free registration at SAEINDIA's lecture meetings and exhibits. This unique benefit puts the members in touch with other professional engineers and suppliers who determine the future of the expanding mobility industry worldwide.</li>
                                <li>Members can purchase SAEINDIA and SAE International technical papers and publications at member discount prices.</li>
                                <li>Access vital high-tech mobility information through renewal registration fee for attending SAEINDIA National and International Congress.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About
