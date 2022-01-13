import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import arjya from '../images/members/arjya.jpg';
import ankita from '../images/members/ankita.jpg';
import gourab from '../images/members/gourab.jpg';
import maity from '../images/members/maity.jpg';
import kiran from '../images/members/kiran.jpg';
import pavan from '../images/members/pavan.jpg';

import sonali from '../images/members/sonali.jpg';
import ayush from '../images/members/ayush.jpg';
import aditya from '../images/members/aditya.jpg';
import aditi from '../images/members/aditi.jpg';
import ayushsingh from '../images/members/Ayush Singh.jpg';
import pragya from '../images/members/pragya.jpg';

import debapriya from '../images/members/Debapriya Saha.jpg';
import akshay from '../images/members/Akshay A Baiju.png';
import pushpal from '../images/members/Pushpal Ghodaskar.jpg';
import sankalp from '../images/members/sankalp.jpg';
import sai from '../images/members/sai.jpg';
import priyanshu from '../images/members/priyanshu.jpg';
import arindam from '../images/members/arindam.jpg';
import subham from '../images/members/Shubham paul.jpg';
import rajhrit from '../images/members/Rajhrit Banerjee.jpg';
import drishita from '../images/members/Drishita Nag.jpg';
import dhiraj from '../images/members/Dhiraj Kumar.jpg';
import ruchitha from '../images/members/peddinti ruchitha.jpg';
import amool from '../images/members/Amool.jpg';
import kalyan from '../images/members/Kalyan chaubey.jpg';
import riya from '../images/members/Riya Chowdhury.jpg';
import shivanshu from '../images/members/Shivanshu.jpg';
import ashish from '../images/members/Ashish Raj.jpg';

import saravanan from '../images/saravanan.jpg'


const team = () => {
    const navlink = document.querySelectorAll('.yearlink')
    const fade = document.querySelectorAll('.yearlist')
    for (let i = 0; i < navlink.length; i++) {
        const element = navlink[i];
        const element2 = fade[i]
        element.addEventListener('click', () => {
            const card = element2.children
            console.log(card)
            for (let j = 0; j < card.length; j++) {
                const cards = card[j];
                cards.classList.add('galleryImg')
                setTimeout(() => {
                    cards.classList.remove('galleryImg')
                }, 1200);
            }
        })
    }
    // .tab-pane .galleryImg {
    //     animation: zoominoutsinglefeatured 1s 1;
    // }
    const datafirst = [
        {
            name: 'Debapriya Saha',
            post: 'Content Writer',
            img: debapriya,
            phone: 'tel:9432062074',
            mail: 'mailto:sahadebapriya14@gmail.com'
        },
        {
            name: 'Akshay A Baiju',
            post: 'Event Manager',
            img: akshay,
            phone: 'tel:9475738842',
            mail: 'mailto:akshaydgp2015@gmail.com'
        },
        {
            name: 'Pushpal Ghodaskar',
            post: 'RJ/VJ',
            img: pushpal,
            phone: 'tel:8055628645',
            mail: 'mailto:pushpalghodaskar@gmail.com'
        },
        {
            name: 'Sankalp Mishra',
            post: 'Event Manager',
            img: sankalp,
            phone: 'tel:7439122419',
            mail: 'mailto:sm.20u10580@btech.nitdgp.ac.in'
        },
        {
            name: 'Sai Akshitha Yenamandra',
            post: 'RJ/VJ',
            img: sai,
            phone: 'tel:6301969879',
            mail: 'mailto:mailto:ysa.20u10654@btech.nitdgp.ac.in'
        },
        {
            name: 'Priyanshu Burman',
            post: 'Graphic Designer',
            img: priyanshu,
            phone: 'tel:7339778852',
            mail: 'mailto:priyanshuburman1234@gmail.com'
        },
        {
            name: 'Arindam Mandal',
            post: 'Photographer',
            img: arindam,
            phone: 'tel:7477776326',
            mail: 'mailto:arindam.140102@gmail.com'
        },
        {
            name: 'Subham Paul',
            post: 'Graphic Designer',
            img: subham,
            phone: 'tel:8942831136',
            mail: 'mailto:sp.20u10050@btech.nitdgp.ac.in'
        },
        {
            name: 'Rajhrit Banerjee',
            post: 'Content Writer',
            img: rajhrit,
            phone: 'tel:6291371804',
            mail: 'mailto:rajhritbanerjee@gmail.com'
        },
        {
            name: 'Drishita Nag',
            post: 'Event Manager',
            img: drishita,
            phone: 'tel:7797061920',
            mail: 'mailto:dri9434539665@gmail.comd'
        },
        {
            name: 'Dhiraj kumar',
            post: 'Video Editor',
            img: dhiraj,
            phone: 'tel:9007269001',
            mail: 'mailto:dheer222002@gmail.com'
        },
        {
            name: 'Ruchitha Peddinti',
            post: 'Content Writer',
            img: ruchitha,
            phone: 'tel:9981599111',
            mail: 'mailto:pr.20u10266@btech.nitdgp.ac.in'
        },
        {
            name: 'Amool Kuldiya',
            post: 'Web Developer',
            img: amool,
            phone: 'tel:9352095586',
            mail: 'mailto:amoolkumar10@gmail.com'
        },
        {
            name: 'Kalyan Kumar Choubey',
            post: 'Content Writer',
            img: kalyan,
            phone: 'tel:9733653994',
            mail: 'mailto:kalyanchoubey98@gmail.com'
        },
        {
            name: 'Riya Chowdhury',
            post: 'Video Editor',
            img: riya,
            phone: 'tel:9836081267',
            mail: 'mailto:riya.chow21@gmail.com'
        },
        {
            name: 'Shivanshu Basu Mallick',
            post: 'RJ/VJ',
            img: shivanshu,
            phone: 'tel:8618571654',
            mail: 'mailto:shivanshubm@gmail.com'
        },
        {
            name: 'Ashish Raj',
            post: 'Content Writer',
            img: ashish,
            phone: 'tel:74884 31604',
            mail: 'mailto:'
        }
    ]

    const showmembers = (e) => {
        document.querySelectorAll('.yearlink').forEach(element => {
            element.classList.remove('active');
        });
        document.querySelectorAll('.yearlist').forEach(element => {
            element.classList.add('hide');
        })
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
        setTimeout(() => {
            window.onscroll = function () { };
        }, 1);

        if (e.target.innerHTML === 'FINAL YEAR') {
            e.target.classList.add('active')
            document.querySelector('#final').classList.remove('hide')
        } else if (e.target.innerHTML === 'THIRD YEAR') {
            e.target.classList.add('active')
            document.querySelector('#third').classList.remove('hide')
        } else if (e.target.innerHTML === 'SECOND YEAR') {
            e.target.classList.add('active')
            document.querySelector('#second').classList.remove('hide')
        }
    }

    return (
        <>
            <div id="team">
                <div className="heading">
                    <h2>Team RN</h2>
                </div>
                <div className="body">
                    <div className="faculty">
                        <h3>FACULTY ADVISOR</h3>

                        <div className="facultycard">
                            <img src={saravanan} alt="" />
                            <div className="carddetail">
                                <h4>
                                    <b>Dr. Saravanan Chandran</b>
                                    <span style={{ display: 'block' }}>
                                        Associate Professor,<br />
                                        CSE Department,<br /> NIT Durgapur.
                                    </span>
                                </h4>
                                <div className="social-link">
                                    <a className="social" href="mailto:cs@cse.nitdgp.ac.in">
                                        <MailIcon />
                                    </a>
                                    <a className="social" href="tel:9434788036">
                                        <PhoneIcon />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="member">
                        <div className="teamyear">
                            <li>
                                <a href="#final" className="yearlink active" onClick={showmembers}>FINAL YEAR</a>
                            </li>
                            <li>
                                <a href="#third" className="yearlink" onClick={showmembers}>THIRD YEAR</a>
                            </li>
                            <li>
                                <a href="#second" className="yearlink" onClick={showmembers}>SECOND YEAR</a>
                            </li>
                        </div>
                        <div className="teamdata">

                            <div id="final" className="yearlist">

                                <div className="datacard">
                                    <img src={arjya} alt="Arjya Singh Roy" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:py.17u10057@btech.nitdgp.ac.in">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7501400869">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Arjya Singh Roy</b> <span>President</span></h4>
                                    </div>
                                </div>

                                <div className="datacard">
                                    <img src={ankita} alt="Ankita Singha" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:as18u10106@btech.nitdgp.ac.in">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9635466301">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Ankita Singha</b> <span>Vice President</span></h4>
                                    </div>
                                </div>

                                <div className="datacard">
                                    <img src={gourab} alt="Gourab Mondal" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:gm18u10509@btech.nitdgp.ac.in">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7439505641">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Gourab Mondal</b> <span>General Secretary</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={maity} alt="Sayantan Maity" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:arjya24022001@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7501400869">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Sayantan Maity</b> <span>Tech Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={kiran} alt="Kiran P Abraham" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:kiranrox2000@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7402282019">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Kiran P Abraham</b> <span>Event Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={pavan} alt="Pavan Preetham" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:pp.pavanpreetham@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9381439311">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Pavan Preetham</b> <span>Design Head</span></h4>
                                    </div>
                                </div>

                            </div>

                            <div id="third" className="yearlist hide">
                                <div className="datacard">
                                    <img src={sonali} alt="Sonali Sah" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:sonalisah1408@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9883494410">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Sonali Sah</b> <span>Treasurer</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={ayush} alt="Ayush Chaudhary" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:nikkuayush@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:6397754301">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Ayush Chaudhary</b> <span>Sponsorship Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={aditya} alt="Aditya Gupta" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:adgupta594@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:6289546144">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Aditya Gupta</b> <span>Logistics Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={aditi} alt="Aditi Gedam" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:10aditigedam10@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:6260378221">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Aditi Gedam</b>
                                            <span>Creative Head</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={ayushsingh} alt="Ayush Singh" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:ayushbhu17singh@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:8765615845">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Ayush Singh</b>
                                            <span>Creative Head</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={pragya} alt="Pragya Kumari" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:pragyak987@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7685839138">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Pragya Kumari</b>
                                            <span>Publicity Head</span>
                                        </h4>
                                    </div>
                                </div>

                            </div>

                            <div id="second" className="yearlist hide">
                                {datafirst.map((item, i) => (
                                    <div className="datacard" key={i}>
                                        <img src={item.img} alt={item.name} />
                                        <div className="social-link">
                                            <a className="social" href={item.mail}>
                                                <MailIcon />
                                            </a>
                                            <a className="social" href={item.phone}>
                                                <PhoneIcon />
                                            </a>
                                        </div>
                                        <div className="member-detail">
                                            <h4><b>{item.name}</b> <span>{item.post}</span></h4>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default team;

// rgba(77, 168, 218, 0.4)!important