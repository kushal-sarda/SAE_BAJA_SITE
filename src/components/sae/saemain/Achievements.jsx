import React from 'react'
import Slide from 'react-reveal/Slide'
import CountUp from 'react-countup';
import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi"
import { MdEventAvailable } from "react-icons/md"
import { FaSchool } from "react-icons/fa"
import { useState, useEffect, useRef } from 'react'
import BIRDS from '../../../../node_modules/vanta/dist/vanta.dots.min'
import VisibilitySensor from "react-visibility-sensor";
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
                color: 0xff2020,
                color2: 0xff2020
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={myRef}>
            <Slide to bottom>
                <section className="event p-4">
                    <div className="heading text-center p-4" style={{ color: "wheat" }}><h1>Our Achievements</h1></div>
                    <div className="container-fluid justify-content-center">
                        <div className="row justify-content-center align-items-center mx-auto">
                            <div className="col-lg-3 col-md-6 text-center">
                                <FaSchool color="red" size={64} />
                                <h5 className="text-light">Fests</h5>
                                <VisibilitySensor partialVisibility offset={{ top: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="text-muted">
                                            {isVisible ? <h5><CountUp start={0} end={100} duration={5} /></h5> : 100}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                            <div className="col-lg-3 text-center">
                                <MdEventAvailable color="red" size={64} />
                                <h5 className="text-light">Events</h5>
                                <VisibilitySensor partialVisibility offset={{ top: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="text-muted">
                                            {isVisible ? <h5><CountUp start={0} end={100} duration={5} />+</h5> : 100}
                                        </div>
                                    )}
                                </VisibilitySensor>

                            </div>
                            <div className="col-lg-3 col-md-6 text-center ">
                                <FiInstagram color="red" size={64} />
                                <h5 className="text-light">Social Media</h5>
                                <div className="row">
                                    <div className="col text-right">

                                        <VisibilitySensor partialVisibility offset={{ top: 200 }}>
                                            {({ isVisible }) => (
                                                <div className="text-muted">
                                                    {isVisible ? <h5><FiFacebook color="red" size={20} /><CountUp start={0} end={100} duration={5} />K</h5> : 100}
                                                </div>
                                            )}
                                        </VisibilitySensor>

                                    </div>
                                    <div className="col text-left">
                                        <VisibilitySensor partialVisibility offset={{ top: 200 }}>
                                            {({ isVisible }) => (
                                                <div className="text-muted">
                                                    {isVisible ? <h5><FiInstagram color="red" size={20} /> <CountUp start={0} end={100} duration={5} />K</h5> : 100}
                                                </div>
                                            )}
                                        </VisibilitySensor>


                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <FiYoutube color="red" size={64} />
                                <h5 className="text-light">Youtube Videos</h5>
                                <VisibilitySensor partialVisibility offset={{ top: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="text-muted">
                                            {isVisible ? <h5><CountUp start={0} end={100} duration={5} />+views</h5> : 100}
                                        </div>
                                    )}
                                </VisibilitySensor>

                            </div>
                        </div>




                    </div>

                </section>
            </Slide>
        </div>
    )
}

export default Achievements
