import React from 'react'
import './compthree.css'
import mainimage2 from './Images/mainimage2.png'

export default function CompThree() {
    return (
        <>
             <section className="hero is-large is-light">
            <div className="hero-body">
            <nav class="navbar" role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item is-gray">
                        Overview
                    </a>
                    <a class="navbar-item is-gray">
                        Tech Specs
                    </a>
                    <a class="navbar-item is-gray">
                        Features
                    </a>
                    <a class="navbar-item is-gray">
                        Outputs
                    </a>
                    <a class="navbar-item is-gray">
                        Playloads
                    </a>
                    <a class="navbar-item is-gray">
                        GCS
                    </a>
                    <a class="navbar-item is-gray">
                        Applications
                    </a>
                    <a class="navbar-item is-gray">
                        FAQs
                    </a>
                    <a class="navbar-item is-gray">
                        Downloads
                    </a>
                  

                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="compthree-overview-head">Overview</h1>
                <p className="compthree-overview-para">
                Trendius &reg; CMX is an advanced wireless condition monitor designed for high performance with precision in harsh indusrtial environment. It detects equipment anomalies and incipient failures preventing unplanned downtime, reducing maintenance costs and improving productivity

                </p>
                <img src={mainimage2} alt="" srcset="" />
            </div>



            </div>
            </section>
        </>
    )
}
