import React from 'react'
import Slide from 'react-reveal/Slide';
import { useState, useEffect, useRef } from 'react'
import BIRDS from '../../../../node_modules/vanta/dist/vanta.net.min'

const Home = () => {
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
                color: 0xff0000,
                backgroundColor: 0x000000
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={myRef}>
            <section className="home ">
                <div className="container-fluid justify-content-center align-items-center">
                    <div className="row  vh-100  justify-content-center align-items-center text-start" >
                        <Slide to left>
                            <div className="col-lg-6 mx-2" style={{ marginTop: "-40px" }}>
                                <h1 className="text-light text-start" style={{
                                    textShadow: "1px 1px 0px #f5deb3, 2px 2px 0px #f5deb3,3px 3px 0px black", fontSize: "3em"
                                }}>SAE NITD</h1>
                                <h4 className=" fst-italic" style={{ color: "wheat" }}> Society Of Automotive Engineering, NIT Durgapur </h4>

                            </div>
                        </Slide>
                        <Slide to right>
                            <div className="col-lg-5 order-0 mt-5" style={{ marginTop: "0px" }}>


                                <p className="down" style={{ color: "wheat", fontStyle: "italic" }}>SAEINDIA is India's leading resource for mobility technology. It is a strategic alliance partner of SAE International registered in India as an Indian nonprofit engineering and scientific society dedicated to the advancement of mobility industry in India.</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
