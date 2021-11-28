import React from 'react'
import "../bajacss/home.css"
const Homeb = () => {
    return (
        <div>
            <main class="flex">
                <article class="landing-page">
                    <div class="darkener">
                        <div class="wrapper flex-column">
                            <p class="top-logo text-center"></p>
                            <h1 class="landing-page-title text-center">Learn how to make <strong>the best BBQ ribs</strong> in town</h1>
                            <h2 class="page-subtitle">Joins us for this live webinar</h2>
                        </div>
                    </div>
                </article>

                <article class="contact-form bg-dark text-light">
                    <div class="wrapper flex-column">
                        <h2 class="contact-form-title ">Become a BBQ master!</h2>
                        <h2 class="page-subtitle">Register today</h2>
                        <p>BBQ isn't just standing in front of your grill qith it on full blast and hoping for the best. It's an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>



                        <p class="disclaimer">We'll never share your information without your permission</p>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Homeb
