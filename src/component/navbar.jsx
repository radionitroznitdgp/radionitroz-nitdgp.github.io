import React, { useState } from 'react';
import logo from '../images/logo/rnlogowhite.png'
import { Link } from "react-scroll";


const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [display, setdisplay] = useState()

    let count = 0;
    window.addEventListener('resize', () => {
        // console.log(window.innerWidth)
        setWidth(window.innerWidth)
        if (window.innerWidth > 1100) {
            // document.querySelector('.menubox').style.display = "block";
            setdisplay("block")
            document.querySelector('.nav').style.height = '58px'
            document.querySelector('.nav').style.display = 'flex';
        } if (window.innerWidth <= 1100) {
            // document.querySelector('.menubox').style.display = "none";
            setdisplay("none");
            document.querySelector('.nav').style.height = '58px';
            document.querySelector('.nav').style.display = 'block';
        }
    })

    document.addEventListener('load', () => {
        console.log(window.innerWidth, "navbar")
        if (width < 1100) {
            document.querySelector('.menubosx').style.display = "none";
            // console.log(window.innerWidth,"none")
            document.querySelector('.nav').style.display = 'block';

        } if (width > 1100) {
            document.querySelector('.menubox').style.display = "block";
            // console.log(window.innerWidth,"block")

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
                <div className="menubox" style={{ display: display }}>
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


// //Default active on home
// document.querySelector('#s1').classList.add("active");


// /*
// Smooth scrolling
// */
// document.querySelector("#s1").click(function() {
//      document.querySelector('html, body').animate({
//          scrollTop:        document.querySelector("#1").offset().top-65
//      }, 1000);
//   return false;
//  });

// document.querySelector("#s2").click(function() {
//      document.querySelector('html, body').animate({
//          scrollTop:        document.querySelector("#2").offset().top-100
//      }, 1000);
//   return false;
//  });

// document.querySelector("#s3").click(function() {
//      document.querySelector('html, body').animate({
//          scrollTop:        document.querySelector("#3").offset().top-100
//      }, 1000);
//   return false;
//  });

// document.querySelector("#s4").click(function() {
//   document.querySelector(this).classList.add("active");
//      document.querySelector('html, body').animate({
//          scrollTop:        document.querySelector("#4").offset().top-100
//      }, 1000);
//   return false;
//  });

// document.querySelector("#toTop").click(function() {
//      document.querySelector('html, body').animate({
//          scrollTop:        document.querySelector("#1").offset().top-65
//      }, 1000);
//   return false;
//  });
// /*document.querySelector('#2').waypoint(function(event, direction) {

//   document.querySelector(".nav-container ul li").children().removeClass("active");
//   document.querySelector("#s2").classList.add("active");

//   if (direction === 'down') {
//     offset = 90;
//   } 
//   else {
//     offset = 20;
//   }
// });*/


// /*
// Using jquery waypoints to change active on scroll
// */
// document.querySelector('#2').waypoint(function() {

//   document.querySelector(".nav-container ul li").children().removeClass("active");
//   document.querySelector("#s2").classList.add("active");

// }, { offset: 101 });


// document.querySelector('#3').waypoint(function() {
//   document.querySelector(".nav-container ul li").children().removeClass("active");
//   document.querySelector("#s3").classList.add("active");
// }, { offset: 101 });

// document.querySelector('#4').waypoint(function() {
//   document.querySelector(".nav-container ul li").children().removeClass("active");
//   document.querySelector("#s4").classList.add("active");
// }, { offset: 101 });

// document.querySelector('#1').waypoint(function() {
//   document.querySelector(".nav-container ul li").children().removeClass("active");
//   document.querySelector("#s1").classList.add("active");
// }, { offset: 0 });

// document.querySelector('#2').waypoint(function() {
//   document.querySelector(".to-top").classList.add("visible");
// }, { offset: 100 });

// document.querySelector('#1').waypoint(function(event, direction) {
//   document.querySelector(".to-top").removeClass("visible");
// }, { offset: 30 });