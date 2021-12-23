import React from 'react'
import Slide from 'react-reveal/Slide';
import "../saecss/about.css"
const About = () => {
    return (
        <>
            <section className="about pb-4 pt-5" style={{marginTop: "100px"}}>
                <div className="container-fluid">
                    <div className="row mx-3">
                        <Slide to left>
                            <div className="col-lg-6 text-white md-col-6">
                                <div className="heading  border-bottom border-dark border-1 w-50 text-left" style={{ color: "red" }}><h3>About Us</h3></div>
                                <br></br>
                                <p className="text-dark text-left">
                               <strong className='text-danger bold'> SAEINDIA </strong> is a strategic alliance partner of <strong className='text-danger bold'> SAE International</strong> registered in India as an Indian nonprofit engineering and scientific society dedicated to the advancement of the mobility industry in India.
                               <strong className='text-danger bold'> SAE India Collegiate Club of NIT Durgapur</strong> was conceived in 2007 with an idea to integrate the students of the college into the international fabric of automobile engineering, adhering to the core principles laid down by SAE International. We are a student body composed of enthusiastic individuals, who are always at a constant strife to learn. This strife is the fuel that propels us to ideate, execute, and consequently deliver a dynamic gamut of events, which receive an extensive participation from various institutes.The outputs of our efforts could be appreciated in a better way by discussing various aspects of our club.
                               <strong className='text-danger bold'> Autopia </strong> is the official Automotive Magazine of the club. The magazine comprises articles in the domains of robotics, automobile and technology, and provides a thorough analysis about the latest innovations which are on the verge of propelling mankind forward! Over 1k+ copies are circulated each year amongst students, teachers and industrialists! 
                               <strong className='text-danger bold'> BAJA </strong> organised by SAEINDIA is an off-road racing competition in which  <strong className='text-danger bold'> Team NDORS</strong>, the official racing team of NITD, bagged the position of 42nd this year.
                                </p>
                            </div>
                        </Slide>
                        <Slide to right>
                            <div className="col-lg-6 mt-0  " >
                                
                            <div className="loading-wrapper" id="loading-wrapper">
  <div className="outer" id="outer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="inner-6" id="inner-6">
    
  </div>
  <div className="inner-5" id="inner-5">
    <span></span>
  </div>
  <div className="inner-4" id="inner-4">
    <span></span>
    <span></span>
  </div>
  <div className="inner-3" id="inner-3">
    <span></span>
  </div>
  <div className="inner-2" id="inner-2">
    <span></span>
  </div>
  <div className="inner-1" id="inner-1">
    
  </div>
</div>

                                
                            </div>
                        </Slide>


                    </div>
                    <div className="row mx-3 bg-light" style={{padding: "20px", paddingBottom: "20px", borderRadius:"20px"}}>
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
