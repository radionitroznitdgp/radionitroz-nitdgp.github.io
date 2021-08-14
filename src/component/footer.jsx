import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import vedang from '../images/members/vp.jpg';
import amool from '../images/members/Amool.jpg';

const footer = () => {

    const modal = ()=>{
        document.querySelector(".webTeam").classList.toggle('hide')
        console.log(document.querySelector(".webTeam"))
    }

    return (
        <>
            <div className="footer">
                <div className="footercont">
                    <p>© Copyright 2021 Radio Nitroz NITDGP</p>
                    <span>Made with by <button onClick={() => modal()}>Web-Team</button></span>
                    <span>© All Rights Reserved</span>
                </div>
            </div>
            <div className="webTeam hide" onClick={()=> modal()}>
                <div className="teamcont">
                    <h1>WEB TEAM</h1>
                    <div className="teamcard">
                        <div className="datacard">
                            <img src={vedang} alt="Vedang Pancholi" />
                            <div className="social-link">
                                <a className="social" href="mailto:vp.19u10233@btech.nitdgp.ac.in">
                                    <MailIcon />
                                </a>
                                <a className="social" href="tel:9831417775">
                                    <PhoneIcon />
                                </a>
                            </div>
                            <div className="member-detail">
                                <h4><b>Vedang Pancholi</b> <span>Web Developer Head</span></h4>
                            </div>
                        </div>

                        <div className="datacard">
                            <img src={amool} alt="Amool Kuldiya" />
                            <div className="social-link">
                                <a className="social" href="amoolkumar10@gmail.com">
                                    <MailIcon />
                                </a>
                                <a className="social" href="tel:9352095586">
                                    <PhoneIcon />
                                </a>
                            </div>
                            <div className="member-detail ">
                                <h4><b>Amool Kuldiya</b> <span>Web Developer</span></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default footer;