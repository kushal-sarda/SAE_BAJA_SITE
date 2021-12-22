import React from 'react'
import YouTube from 'react-youtube';
import "../saecss/cryptech.css"
const Cryptech = () => {

    return (
        <>
            <section className="cryptech container  text-center mt-4">
                <div class="container ">

                    <h1 style={{ color: "red" }}>Cryptech</h1>
                    <div class='Flexible-container mt-5' style={{borderRadius:"20px"}}>
                        <iframe width="1000" height="500"  src="https://www.youtube.com/embed/yXN0HLjVojg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius:"20px"}}></iframe>
                    </div>
                    <button className="btn w-25 mt-3 text-white" style={{ backgroundColor: "red" }}><a  href="https://www.youtube.com/channel/UC9H4onmkThYbMHrce2PceQg/videos"  target="_blank" style={{fontWeight:"bold", color:"white", textDecoration: "none"}}>More</a></button>

                </div>
            </section>
        </>
    )
}

export default Cryptech
