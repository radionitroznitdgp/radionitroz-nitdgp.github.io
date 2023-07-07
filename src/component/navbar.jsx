import React, { useState } from 'react';
import logo from '../images/logo/rnlogowhite.png'
import { Link } from "react-scroll";


const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth)

    let count = 0;
    window.addEventListener('resize', () => {
        // console.log(window.innerWidth)
        setWidth(window.innerWidth)
        if (window.innerWidth > 1100) {
            document.querySelector('.menubox').style.display = "block";
            document.querySelector('.nav').style.height = '58px'
            document.querySelector('.nav').style.display = 'flex';
        } if (window.innerWidth <= 1100) {
            document.querySelector('.menubox').style.display = "none";
            document.querySelector('.nav').style.height = '58px';
            document.querySelector('.nav').style.display = 'block';
        }
    })

    document.addEventListener('load', () => {
        console.log(window.innerWidth, "navbar")
        if (width < 1100) {
            document.querySelector('.menubox').style.display = "none";
            // console.log(window.innerWidth,"none")
            document.querySelector('.nav').style.display = 'block';

        } if (width > 1100) {
            document.querySelector('.menubox').style.display = "block";
            // console.log(window.innerWidth,"block")

        }
    })

    document.addEventListener('scroll',()=>{
        // console.log("scroll kiya ")
        if (width < 1100) {
        document.querySelector('.menubox').style.display = "none";
        document.querySelector('.nav').style.height = '58px';
        document.querySelector('.nav').style.display = 'block';
        }
        if (width > 1100) {
            document.querySelector('.menubox').style.display = "block";
            document.querySelector('.nav').style.height = '58px'
            document.querySelector('.nav').style.display = 'flex';
        }
    })

    const showMenu = (e) => {
        // console.log(document.querySelector('body'), window.innerWidth)
        if (window.innerWidth <= width) {
            if (count % 2 === 0) {
                setTimeout(() => {
                    document.querySelector('.menubox').style.display = 'block';
                }, 400);

                document.querySelector('.nav').style.height = '23.5rem';
                // setdisplay("block")  
            } else {
                document.querySelector('.menubox').style.display = 'none';
                document.querySelector('.nav').style.height = '58px'
                // setdisplay("none");
            }
            count++;
        } else {
            document.querySelector('.menubox').style.display = "block";
        }

        // e.target.classList.toggle('hide')
        // document.querySelector('.menubox').classList.toggle('hide')
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const click = () => {
        // console.log('click')
        if (window.innerWidth <= 1100) {
            document.querySelector('.nav').style.height = '58px';
            document.querySelector('.menubox').style.display = 'none';
        }

    }

    return (
        <>
            <div className="nav" >
                <div className="navlogo">
                    <img src={logo} alt="logo" style={{ width: "60px" }} />
                </div>
                <div onClick={(e) => showMenu(e)} className="menubutton">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="menubox">
                    <div className="navmenu left">
                        <ul className="navbars">
                            <li className="nav-item" >
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="aboutus"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>ABOUT US</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="eventcont"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>EVENTS</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="video"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>VIDEO AND SERIES</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>TEAM RN</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navmenu right">
                        <ul className="navbars">

                            <li className="nav-item">
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="alumni"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>OUR ALUMNI</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="gallery"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="sponsor"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>SPONSORS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="a"
                                    onClick={click}
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>CONTACT US
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;