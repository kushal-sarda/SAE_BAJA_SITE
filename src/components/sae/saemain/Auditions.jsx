import car_bg from "../../../images/car_bg.jpg"
import "../saecss/Auditions.css"
const Auditions = () => {
    return (
        <div>


            <div class="bg-image" style={{ backgroundImage: `url(${car_bg})` }}>
                <div class="row total">
                    <div class="col-md-6 saeaudition">
                        <p>
                            Welcome to SAE Auditions

                        </p>
                        <p class="note1">
                            We are on the lookout for individuals with a zeal to learn and ideate, and assist the club in pulling off feats of great magnitude. With a number of domains to contribute in, you will be showered with a multitude of opportunities to hone and enhance your skills. Furthermore, you will get to work on fascinating projects, which incorporate a diverse range of concepts.
                        </p>
                        <a href="" class="audition_button">

                            SAE
                        </a>
                    </div>
                    <div class="col-md-6 bajaaudition">
                        <p>
                            Welcome to SAE BAJA Auditions
                        </p>
                        <p class="note2">
                            Team NDORS (NIT Durgapur Off-Road Sports) is the official BAJA SAE team of NIT Durgapur representing the institute in BAJA SAEINDIA. The team involves a group of 25 auto-enthusiasts across different streams who share a common passion towards automobile engineering and racing.
                            We await you in our Team NDORS Auditios
                        </p>

                        <a href="" class="audition_button">

                            BAJA
                        </a>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Auditions