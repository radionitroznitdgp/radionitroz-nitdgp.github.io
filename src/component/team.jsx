import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import Rounak from '../images/firstyear/Rounak.jpeg'; 
import Basab from '../images/firstyear/Basab.jpeg';  
import Priyal from '../images/firstyear/Priyal.jpg';  
import Aniket from '../images/firstyear/Aniket_.jpg';  
import Nabina from '../images/firstyear/Nabina.jpg';  
import Shubham from '../images/firstyear/Shubham.jpg';  
import Dharma from '../images/firstyear/Dharma.jpg';  
import Saptarshi from '../images/firstyear/Saptarshi.jpg';  
import Sumit from '../images/firstyear/Sumit.jpg';  
import Venkateshwarlu from '../images/firstyear/Venkateshwarlu.jpeg';  
import Sankhajit from '../images/firstyear/Sankhajit_.jpg';  
import Rishav from '../images/firstyear/Rishav.jpg';  
import Rajeev from '../images/firstyear/RAJEEV.png';  
import Dyuti from '../images/firstyear/Dyuti_.jpg';  
import Debashis from '../images/firstyear/Debashis.jpg';  
import Abhijit from '../images/firstyear/Abhijit.jpg';  

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
            name: 'Priyanshu Burman',
            post: 'Treasurer',
            img: priyanshu,
            phone: 'tel:7339778852',
            mail: 'mailto:priyanshuburman1234@gmail.com'
        },
        {
            name: 'Pushpal Ghodaskar',
            post: 'Sponsorship Head',
            img: pushpal,
            phone: 'tel:8055628645',
            mail: 'mailto:pushpalghodaskar@gmail.com'
        },
        {
            name: 'Sankalp Mishra',
            post: 'Logistics Head',
            img: sankalp,
            phone: 'tel:7439122419',
            mail: 'mailto:sm.20u10580@btech.nitdgp.ac.in'
        },
        {
            name: 'Debapriya Saha',
            post: 'Creative Head',
            img: debapriya,
            phone: 'tel:9432062074',
            mail: 'mailto:sahadebapriya14@gmail.com'
        },
        {
            name: 'Akshay A Baiju',
            post: 'Publicity Head',
            img: akshay,
            phone: 'tel:9475738842',
            mail: 'mailto:akshaydgp2015@gmail.com'
        },
        {
            name: 'Sai Akshitha Yenamandra',
            post: 'Jr. Event Head',
            img: sai,
            phone: 'tel:6301969879',
            mail: 'mailto:mailto:ysa.20u10654@btech.nitdgp.ac.in'
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
            post: 'Content Head',
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
            post: 'Tech Head',
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
            post: 'Web D Head',
            img: amool,
            phone: 'tel:9352095586',
            mail: 'mailto:amoolkumar10@gmail.com'
        },
        {
            name: 'Kalyan Kumar Choubey',
            post: 'Jr. Event Head',
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
            name: 'Ashish Raj',
            post: 'Design Head',
            img: ashish,
            phone: 'tel:74884 31604',
            mail: 'mailto:'
        }
    ]

    const Firstyear = [
        {
            name: 'Rounak Kumar Jha ',
            post: 'Web D',
            img: Rounak,
            phone: 'tel:6289953196',
            mail: 'mailto:developer.dextrix@gmail.com'
        },
        {
            name: 'Basab Lekri',
            post: 'Web D',
            img: Basab,
            phone: 'tel:9382747295',
            mail: 'mailto:bumbalekri08@gmail.com'
        },
        {
            name: 'Priyal Bhalerao ',
            post: 'Graphic Design',
            img: Priyal,
            phone: 'tel:8767747389',
            mail: 'mailto:priyalbhalerao13@gmail.com'
        },
        {
            name: 'Aniket Kamble ',
            post: 'Graphic Design',
            img: Aniket,
            phone: 'tel:9325244725',
            mail: 'mailto:aniketkamble9192@gmail.com'
        },
        {
            name: 'Nabina Layek',
            post: 'RJ Or VJ',
            img: Nabina,
            phone: 'tel:7363864294',
            mail: 'mailto:layeknabina@gmail.com'
        },
        {
            name: 'Shubham Ghosh',
            post: 'Graphic design',
            img: Shubham,
            phone: 'tel:9153042605',
            mail: 'mailto:ghoshshubham930@gmail.com'
        },
        {
            name: 'Chowdhari Dharma Teja',
            post: 'Event Management',
            img: Dharma,
            phone: 'tel:8919428507',
            mail: 'mailto:dharmateja3232@gmail.com'
        },
        {
            name: 'Saptarshi Ghosh',
            post: 'RJ&VJ',
            img: Saptarshi,
            phone: 'tel:7384470959',
            mail: 'mailto:saptarshi123sg@gmail.com'
        },
        {
            name: 'Sumit Rastogi',
            post: 'RJ&VJ',
            img: Sumit,
            phone: 'tel:9142794435',
            mail: 'mailto:sumitrastogi2003@gmail.com'
        },
        {
            name: 'K.E.N.S Venkateshwarlu ',
            post: 'Video Editor',
            img: Venkateshwarlu,
            phone: 'tel:9032795418',
            mail: 'mailto:venlyndl2001@gmail.com'
        },
        {
            name: 'Sankhajit Ghosh',
            post: 'Event Manager',
            img: Sankhajit,
            phone: 'tel:9382771723',
            mail: 'mailto:sankhajit2002@gmail.com'
        },
        {
            name: 'Rishav Mondal',
            post: 'Video Editor',
            img: Rishav,
            phone: 'tel:9126398839',
            mail: 'mailto:mrishav512@gmail.com '
        },
        {
            name: 'Rajeev Kumar Yadav ',
            post: 'Graphic Design',
            img: Rajeev,
            phone: 'tel:7380984141',
            mail: 'mailto:yadavrajeev1587@gmail.com'
        },
        {
            name: 'Dyuti Biswas',
            post: 'Photographer',
            img: Dyuti,
            phone: 'tel:8388856057',
            mail: 'mailto:dyutibiswas1@gmail.com '
        }, {
            name: 'Debashis Panigrahi ',
            post: 'Event Management',
            img: Debashis,
            phone: 'tel:9938769662',
            mail: 'mailto:debashis2003panigrahi@gmail.com'
        },
        {
            name: 'Abhijit Nag ',
            post: 'Web D',
            img: Abhijit,
            phone: 'tel:8250401029',
            mail: 'mailto:abhijitnag1000@gmail.com'
        }
    ]

    console.log(Firstyear.length)

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
        }
         else if (e.target.innerHTML === 'FIRST YEAR') {
            e.target.classList.add('active')
            document.querySelector('#first').classList.remove('hide')
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
                            {/* <li>
                                <a href="#second" className="yearlink" onClick={showmembers}>SECOND YEAR</a>
                            </li> */}
                            <li>
                                <a href="#first" className="yearlink" onClick={showmembers}>FIRST YEAR</a>
                            </li>
                        </div>
                        <div className="teamdata">

                            <div id="final" className="yearlist">

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
                                        <h4><b>Sonali Sah</b> <span>President</span></h4>
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
                                        <h4><b>Aditya Gupta</b> <span>Vice President</span></h4>
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
                                        <h4><b>Ayush Chaudhary</b> <span>General Secretary</span></h4>
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
                                            <span>Convenor</span>
                                        </h4>
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
                                            <span>Event Head</span>
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
                                            <span>Fest Head</span>
                                        </h4>
                                    </div>
                                </div>

                            </div>

                            <div id="third" className="yearlist hide">
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

                            <div id="first" className="yearlist hide">
                                {Firstyear.map((item, i) => (
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