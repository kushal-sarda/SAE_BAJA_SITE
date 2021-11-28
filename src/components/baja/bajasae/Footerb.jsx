import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <div class="container-fluid pb-0 mb-0 justify-content-center text-light bg-dark ">
                <footer>
                    <div class="row my-5 justify-content-center py-5">
                        <div class="col-11">
                            <div class="row ">
                                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <h3 class="text-muted mb-md-0 mb-5 bold-text">SAE Baja</h3>
                                </div>
                                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 class="mb-3 mb-lg-4 bold-text  text-muted"><b>MENU</b></h6>
                                    <ul class="list-unstyled">
                                        <li><NavLink className=" text-decoration-none text-white" to="/">Home</NavLink></li>
                                        <li ><NavLink className=" text-decoration-none text-white" to="/about">About</NavLink></li>
                                        <li ><NavLink className=" text-decoration-none text-white" to="/team">team</NavLink></li>
                                        <li ><NavLink className=" text-decoration-none text-white" to="/sponsors">Sponsors</NavLink></li>
                                        <li ><NavLink className=" text-decoration-none text-white" to="/work">Work</NavLink></li>
                                    </ul>
                                </div>
                                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                    <p class="mb-1">605, RATAN ICON BUILDING</p>
                                    <p>SEAWOODS SECTOR</p>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> SAEBaja All Rights Reserved.</small>
                                </div>
                                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                    <h6 class="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small>
                                </div>
                                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                    <h6 class="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start">Copyright &copy; SAE 2021</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillFacebook /></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillInstagram /></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillLinkedin /></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><AiFillTwitterSquare /></a>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
