import React from 'react'
import '../bajacss/sponsor.css'
import tvs from '../../../images/sponsors/tvs_logo.png'
import maruti from '../../../images/sponsors/maruti_logo.png'
import sbi from '../../../images/sponsors/sbi_logo.png'
import indianoil from '../../../images/sponsors/indianoil_logo.png'
import time from '../../../images/sponsors/time_logo.png'
import sponsor1 from '../../../images/sponsors/sponsor1_logo.png'
import sponsor2 from '../../../images/sponsors/sponsor2_logo.png'
import sponsor3 from '../../../images/sponsors/sponsor3_logo.png'
import sponsor4 from '../../../images/sponsors/sponsor4_logo.png'
import skoda from '../../../images/sponsors/skoda_logo.png'
import solidworks from '../../../images/sponsors/solidworks_logo.png'
import mathworks from '../../../images/sponsors/mathworks_logo.png'

const Sponsors = () => {
    return (
        <>
            <div className="py-5">
                <h1 className="text-center mt-5">Our Sponsors</h1>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-6 my-3" >
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={tvs} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={maruti} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={sbi} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={indianoil} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3" >
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={time} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={sponsor1} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={sponsor2} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={sponsor3} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={sponsor4} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3 sponsor-logo">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={skoda} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3 sponsor-logo">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={solidworks} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3 sponsor-logo">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={mathworks} alt="..." /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsors
