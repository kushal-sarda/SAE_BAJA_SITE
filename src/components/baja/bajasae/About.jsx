import React from 'react'
import "../bajacss/about.css"

import powertrain from "../../../images/powertrain.png"
import steering from "../../../images/steering.png"
import brakes from "../../../images/brakes2.png"
import rollcage from "../../../images/rollcage.png"
import suspension from "../../../images/suspension.png"

const Aboutb = () => {
    return (
        <>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase"></h2>
                        <h3 className="section-subheading text-muted" style={{color:"#000000"}}> </h3>
                    </div>
                    <div className="text-center">
                    <h2 className="section-heading text-uppercase">Sailent Features of Vehicles</h2></div>
                    {/* <ul classNameName="timeline">
                        <li>
                            <div classNameName="timeline-image"><img classNameName="" src="/images/2.jpg" alt="..." /></div>
                            <div classNameName="timeline-panel">
                                <div classNameName="timeline-heading">
                                    <h4> Powertrain</h4>
                                    <h4 classNameName="subheading"></h4>
                                </div>
                                <div classNameName="timeline-body">
                                <p classNameName="text-muted">

                                Extensive use of topology optimisation yielded lightweight parts

                                
                                Incorporation of transfer case to switch between 4WD and 2WD on the fly

                                
                                Use of standardized spline profiles for ease of manufacturability
                                Fast acceleration and higher top speed using optimized CVT ratio map

                                <br/>
                                </p></div>
                            </div>
                        </li>
                        <li classNameName="timeline-inverted">
                            <div classNameName="timeline-image"><img classNameName="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div classNameName="timeline-panel">
                                <div classNameName="timeline-heading">
                                    <h4> Suspension</h4>
                                    <h4 classNameName="subheading"></h4>
                                </div>
                                <div classNameName="timeline-body"><p classNameName="text-muted">The front suspension is a short & long A-arm wishbone arrangement.  H-arm with single upper link suspension was chosen for better capability to adjust to various parameters in rear suspension.Fox Float 3 shock absorbers were used for the front suspension and were mounted on the upper arm. AFCO eliminator 3895 Series Spring Coil over shocks were used in the rear mounted on H-arm. Because of the uneven distribution of weights, the stiffness of the rear absorbers is kept high
</p></div>
                            </div>
                        </li>
                        <li>
                            <div classNameName="timeline-image"><img classNameName="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div classNameName="timeline-panel">
                                <div classNameName="timeline-heading">
                                    <h4>Steering</h4>
                                    <h4 classNameName="subheading"></h4>
                                </div>
                                <div classNameName="timeline-body"><p classNameName="text-muted">We chose fast ratio rack and pinion which travels from one end to other end turn of pinion. With effective design and analysis we present here our steering system.
                                </p></div>
                            </div>
                        </li>
                        <li classNameName="timeline-inverted">
                            <div classNameName="timeline-image"><img classNameName="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div classNameName="timeline-panel">
                                <div classNameName="timeline-heading">
                                    <h4>Braking</h4>
                                    <h4 classNameName="subheading"></h4>
                                </div>
                                <div classNameName="timeline-body"><p classNameName="text-muted">The main objective is to design a light, compact, effective  and reliable braking system which can lock all the four 
                                wheels of the buggy at the same time in almost all type of terrain. Our target design parameters are a sub-7.5m 40-0kmph and a deceleration of more than 8m/s2. Based on these parameters, the required brake rotors needed to have a diameter of 155mm at front and 130mm at the rear.</p></div>
                            </div>
                        </li>
                        <li>
                            <div classNameName="timeline-image"><img classNameName="rounded-circle img-fluid" src="images/2.jpg" alt="..." /></div>
                            <div classNameName="timeline-panel">
                                <div classNameName="timeline-heading">
                                    <h4>Roll Cage</h4>
                                    <h4 classNameName="subheading"></h4>
                                </div>
                                <div classNameName="timeline-body"><p classNameName="text-muted">The roll cage is the exoskeleton of an ATV whose main job is to provide safety, without compromising ergonomics and provides aesthetics. It provides a support body for all the components in an ATV. The design has been oriented towards an optimized factor of safety to avoid overdesigning, with regards to the competition and completion of the endurance challenges. Our design is mainly based on definite rules of SAE BAJA to accommodate maximum safety to the driver and better stability of vehicle. The main design focuses on the lighter, more rigid, and aesthetic oriented frame
                                </p></div>
                            </div>
                        </li>
                        
                        <li classNameName="timeline-inverted">
                            <div classNameName="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul> */}

                    <section id="timeline">
	<h1></h1>
	<p className="leader"></p>
	<div className="demo-card-wrapper">
		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span></span>
				</div>
				<h2 style={{color: "black" }}><span className="small"></span>Powertrain </h2>
			</div>
			<div className="body">
				<p> Extensive use of topology optimisation yielded lightweight parts
                    Incorporation of transfer case to switch between 4WD and 2WD on the fly
                    Use of standardized spline profiles for ease of manufacturability
                    Fast acceleration and higher top speed using optimized CVT ratio map</p>
				<img src={powertrain} alt="Powertrain"/>
			</div>
		</div>

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span></span>
				</div>
				<h2 style={{color: "black" }}><span className="small"></span> Suspension</h2>
			</div>
			<div className="body">
				<p>The front suspension is a short & long A-arm wishbone arrangement.  H-arm with single upper link suspension was chosen for better capability to adjust to various parameters in rear suspension.Fox Float 3 shock absorbers were used for the front suspension and were mounted on the upper arm. AFCO eliminator 3895 Series Spring Coil over shocks were used in the rear mounted on H-arm. Because of the uneven distribution of weights, the stiffness of the rear absorbers is kept high</p>
				<img src={suspension} alt="Suspension"/>
			</div>
		</div>

		<div className="demo-card demo-card--step3">
			<div className="head">
				<div className="number-box">
					<span></span>
				</div>
				<h2 style={{color: "black" }}><span className="small"></span> Steering</h2>
			</div>
			<div className="body">
				<p>We chose fast ratio rack and pinion which travels from one end to other end turn of pinion. With effective design and analysis we present here our steering system.</p>
				<img src={steering} alt="Steering"/>
			</div>
		</div>

		<div className="demo-card demo-card--step4">
			<div className="head">
				<div className="number-box">
					<span></span>
				</div>
				<h2 style={{color: "black" }}><span className="small"></span> Braking</h2>
			</div>
			<div className="body">
				<p>The main objective is to design a light, compact, effective  and reliable braking system which can lock all the four 
                                wheels of the buggy at the same time in almost all type of terrain. Our target design parameters are a sub-7.5m 40-0kmph and a deceleration of more than 8m/s2. Based on these parameters, the required brake rotors needed to have a diameter of 155mm at front and 130mm at the rear.</p>
				<img src={brakes} alt="Braking"/>
			</div>
		</div>

		<div className="demo-card demo-card--step5">
			<div className="head">
				<div className="number-box">
					<span></span>
				</div>
				<h2 style={{color: "black" }}><span className="small"></span> Roll Cage</h2>
			</div>
			<div className="body">
				<p>The roll cage is the exoskeleton of an ATV whose main job is to provide safety, without compromising ergonomics and provides aesthetics. It provides a support body for all the components in an ATV. The design has been oriented towards an optimized factor of safety to avoid overdesigning, with regards to the competition and completion of the endurance challenges. Our design is mainly based on definite rules of SAE BAJA to accommodate maximum safety to the driver and better stability of vehicle. The main design focuses on the lighter, more rigid, and aesthetic oriented frame.</p>
				<img src={rollcage} alt="Rollcage"/>
			</div>
		</div>
    
	</div>
</section>
                </div>
            </section>
        </>
    )
}

export default Aboutb
