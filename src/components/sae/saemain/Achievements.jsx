import React from 'react'
import Slide from 'react-reveal/Slide'
import CountUp from 'react-countup';
import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi"
import { MdEventAvailable } from "react-icons/md"
import { FaSchool } from "react-icons/fa"
import { useState, useEffect, useRef } from 'react'
import BIRDS from '../../../../node_modules/vanta/dist/vanta.waves.min'
import VisibilitySensor from "react-visibility-sensor";
// import "../saecss/achievements"
const Achievements = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x000,
                color2: 0xff2020
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={myRef} className='m-4'>
            <Slide to bottom>
               
            <section class="page-section text-light p-4" id="about">
                <div class="container-fluid mt-4">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase p-4" style={{color:"red"}} >Our Achievements</h2>
                        {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                    </div>
                    <ul class="timeline m-4">
                        <li>
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="/images/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">
                                    <h4>Fests</h4>
                                    <h4 class="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">
                                    <h4>Events</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">
                                    <h4>Social Media</h4>
                                    <h4 class="subheading">Transition to Full Service</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">
                                    <h4>Youtube</h4>
                                    <h4 class="subheading">Phase Two Expansion</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted mb-5">
                            <div class="timeline-image mb-4" style={{backgroundColor:"black"}}>
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            </Slide>
        </div>
    )
}

export default Achievements
