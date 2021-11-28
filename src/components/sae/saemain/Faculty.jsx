import React from 'react'
import pic1 from "../../../images/niloptal.jpeg"
import pic2 from "../../../images/apurva.jpeg"
import pic3 from "../../../images/tapas.jpeg"
import Slide from 'react-reveal/Slide'
const Faculty = () => {
    return (
        <>
            <Slide to left>
                <h1 className="text-center pb-4   mb-5 " style={{ color: "red" }}>Our Faculty Advisors</h1>
            </Slide>

            <div class="row row-cols-1 row-cols-md-3 g-4 px-5">

                <div className="col text-center">
                    <img src={pic1} class="rounded-circle" alt="Cinque Terre" style={{ width: "13em", height: "13em" }} />
                    {/* <img src={pic1} class="card-img-top border-bottom-1" style={{ width: "", height: "", borderRadius: "50%" }} alt="..." /> */}
                    <div class="card-body  mt-4">
                        <h5 class="card-title  " style={{ color: "red" }}>PROF(DR.) APURBA LAYEK</h5>
                        <p class="card-text  text-dark">Department of Mechanical Engineering</p>
                    </div>
                </div>


                <div class="col text-center">

                    {/* <div class="card h-75 bg-dark justify-content-center align-items-center  " style={{ height: "75%", width: "90%" }}> */}

                    <img src={pic2} class="rounded-circle" alt="Cinque Terre" style={{ width: "13em", height: "13em" }} />
                    {/* <img src={pic2} class="card-img-top border-bottom-1" style={{ width: "400px", height: "400px", borderRadius: "50%" }} alt="..." /> */}
                    <div class="card-body  mt-4">
                        <h5 class="card-title  " style={{ color: "red" }}>PROF(DR.) NILOPTAL BANERJEE</h5>
                        <p class="card-text  text-dark">Department of Mechanical Engineering</p>
                    </div>
                    {/* </div> */}
                </div>


                <div class="col text-center">

                    {/* <div class="card h-75 bg-dark justify-content-center align-items-center  " style={{ height: "75%", width: "90%" }}> */}
                    <img src={pic3} class="rounded-circle" alt="Cinque Terre" style={{ width: "13em", height: "13em" }} />

                    {/* <img src={pic3} class="card-img-top border-bottom-1" style={{ width: "400px", height: "400px", borderRadius: "50%" }} alt="..." /> */}
                    <div class="card-body  mt-4">
                        <h5 class="card-title  " style={{ color: "red" }}>PROF(DR.) TAPAS KUMAR SAHA</h5>
                        <p class="card-text  text-dark">Department of Electrical Engineering</p>
                    </div>
                    {/* </div> */}
                </div>

            </div>

        </>
    )
}

export default Faculty
