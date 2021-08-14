import React from 'react';
import link1 from '../images/sponsor/logiczap.jpeg'
import link2 from '../images/sponsor/wildstone.jpeg'
import link3 from '../images/sponsor/pizza.jpeg'
import link4 from '../images/sponsor/redFm.jpeg'
import link5 from '../images/sponsor/gg.jpeg'



const Sponsor = () => {
    return (
        <>
            <div id="sponsor" className="sponsor eventcont">
                <div className="heading">
                    <h2>SPONSORS</h2>
                </div>
                <div className="body">
                    <div className="items">
                        <a href="https://www.logiczaptech.com/">
                            <div className="link">
                                <img src={link1} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="items">
                        <a href="https://www.wildstone.in/">

                            <div className="link">
                                <img src={link2} alt="" />

                            </div>
                        </a>
                    </div>
                    <div className="items">
                        <a href="https://www.pizzahut.co.in/">

                            <div className="link">
                                <img src={link3} alt="" />

                            </div>
                        </a>
                    </div>
                    <div className="items">
                        <a href="https://www.redfmindia.in/">

                            <div className="link">
                                <img src={link4} alt="" />

                            </div>
                        </a>
                    </div>
                    <div className="items">
                        <a href="https://www.geeksforgeeks.org/">

                            <div className="link">
                                <img src={link5} alt="" />
                            </div>

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor