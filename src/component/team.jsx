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
import Rishav from '../images/firstyear/Rishav.jpg';  
import Rajeev from '../images/firstyear/RAJEEV.png';  
import Dyuti from '../images/firstyear/Dyuti_.jpg';  
import Debashis from '../images/firstyear/Debashis.jpg';  
import Aditya from '../images/firstyear/Adityanew.jpeg'; 
import Vineet from '../images/firstyear/Vineet.jpeg'; 
import Sobhag from '../images/firstyear/Sobhag.jpeg'; 
import Somapatrao from '../images/firstyear/Somapatrao.jpeg'; 
  
import Anshika from '../images/firstyear/Anshika.jpg';  
import Arnab from '../images/firstyear/Arnab Banerjee.jpg';  
import Kirthika from '../images/firstyear/Kirthika.jpg';  
import Mohammed_Asif from '../images/firstyear/Mohammed Asif.jpg';  
import PRANESH from '../images/firstyear/PRANESH.jpg';  
import ParthibSen from '../images/firstyear/ParthibSen.jpg';  
import Raj from '../images/firstyear/Raj.jpg';  
import Rupali from '../images/firstyear/Rupali.jpg';  
import SAISAHIL from '../images/firstyear/SAI SAHIL.JPG';  
import Sarmistha from '../images/firstyear/Sarmistha.jpg';  
import cherry from '../images/firstyear/cherry.jpeg';  
import jayant from '../images/firstyear/jayant.jpg'; 
import karthik from '../images/firstyear/karthik.jpg'; 
import ramya from '../images/firstyear/ramya.jpg'; 
import sreyashi from '../images/firstyear/sreyashi.jpg'; 

// import sonali from '../images/members/sonali.jpg';
// import ayush from '../images/members/ayush.jpg';
// import aditya from '../images/members/aditya.jpg';
// import aditi from '../images/members/aditi.jpg';
// import ayushsingh from '../images/members/Ayush Singh.jpg';
// import pragya from '../images/members/pragya.jpg';

// import debapriya from '../images/members/Debapriya Saha.jpg';
import akshay from '../images/members/Akshay A Baiju.png';
// import pushpal from '../images/members/Pushpal Ghodaskar.jpg';
import sankalp from '../images/members/sankalp.jpg';
// import sai from '../images/members/sai.jpg';
import priyanshu from '../images/members/priyanshu.jpg';
// import arindam from '../images/members/arindam.jpg';
// import subham from '../images/members/Shubham paul.jpg';
// import rajhrit from '../images/members/Rajhrit Banerjee.jpg';
// import drishita from '../images/members/Drishita Nag.jpg';
import dhiraj from '../images/members/Dhiraj Kumar.jpg';
// import ruchitha from '../images/members/peddinti ruchitha.jpg';
import amool from '../images/members/Amool.jpg';
import kalyan from '../images/members/Kalyan chaubey.jpg';
// import riya from '../images/members/Riya Chowdhury.jpg';
import ashish from '../images/members/Ashish Raj.jpg';
import SumitSah from '../images/members/SumitSah.jpeg';
import Tusharkanti from '../images/TusharKanti.jpeg'


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
            name: 'Aditya Chavhan ',
            post: 'Web D',
            img: Aditya,
            phone: 'tel:9473917738',
            mail: 'mailto:'
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
            post: 'Content Writer',
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
            post: 'Content Writer',
            img: Saptarshi,
            phone: 'tel:7384470959',
            mail: 'mailto:saptarshi123sg@gmail.com'
        },
        {
            name: 'Sumit Rastogi',
            post: 'Event Management',
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
            name: 'Vineet Jeengar ',
            post: 'Graphic Design',
            img: Vineet,
            phone: 'tel:9352686123',
            mail: 'mailto:'
        },
        {
            name: 'Sobhag Bairwa',
            post: 'Video Editing',
            img: Sobhag,
            phone: 'tel:9352765077',
            mail: 'mailto:'
        },
        {
            name: 'Somaptro Manohar',
            post: 'Content Writing',
            img: Somapatrao,
            phone: 'tel:7396614372',
            mail: 'mailto:'
        }
    ]

    const Firstyear = [
        {
            name: 'Jayant Mandal ',
            post: 'Video Editor and Event Management',
            img: jayant,
            phone: 'tel:8102179107',
            mail: 'mailto:jayantroot3@gmail.com'
        },
        {
            name: 'S KIRTHIKA',
            post: 'Event Management',
            img: Kirthika,
            phone: 'tel:9476051610',
            mail: 'mailto:skirthika2409@gmail.com'
        },
        {
            name: 'Mohammed Asif ',
            post: 'Graphic Design',
            img: Mohammed_Asif,
            phone: 'tel:8967290251',
            mail: 'mailto:mdasif28049@gmail.com'
        },
        {
            name: 'Ramya Akalankam ',
            post: 'Event Management',
            img: ramya,
            phone: 'tel:9059167355',
            mail: 'mailto:akalankamramya84@gmail.com'
        },
        {
            name: 'karthikeya',
            post: 'Video Editing ',
            img: karthik,
            phone: 'tel:8977025556',
            mail: 'mailto: karthikeya4@gmail.com'
        },
        {
            name: 'K PRANESH RAO',
            post: 'Event Management',
            img: PRANESH,
            phone: 'tel:9679508518',
            mail: 'mailto:praneshrao6936@gmail.com'
        },
        {
            name: 'Rupali Kumari',
            post: 'Content Writer',
            img: Rupali,
            phone: 'tel:9153265972',
            mail: 'mailto:rkumarirupali3489@gmail.com'
        },
        {
            name: 'Arnab Banerjee',
            post: 'Content Writer',
            img: Arnab,
            phone: 'tel:9064592539',
            mail: 'mailto:arnabbanerjee2003@gmail.com'
        },
        {
            name: 'Anshika Goswami',
            post: 'Event Management',
            img: Anshika,
            phone: 'tel:8009591725',
            mail: 'mailto:anshika4607@gmail.com'
        },
        {
            name: 'D.V.prasanna Kumar ',
            post: 'Video Editor',
            img: cherry,
            phone: 'tel:9182391382',
            mail: 'mailto:cherry00@gmail.com'
        },
        {
            name: 'D.Sai Sahil',
            post: 'Web Development and Graphic Design',
            img: SAISAHIL,
            phone: 'tel: 8328078950',
            mail: 'mailto:saisahilduvvuu1@gmail.com'
        },
        {
            name: 'Shreyasi Roy',
            post: 'Graphic Design',
            img: sreyashi,
            phone: 'tel: 8116196534',
            mail: 'mailto:shreyasi6653roy@gmail.com'
        },
        {
            name: 'Sarmistha Naskar',
            post: 'Content Writting ',
            img: Sarmistha,
            phone: 'tel:6289762949',
            mail: 'mailto:Sarmisthan2003@gmail.com '
        }, {
            name: 'Parthib Sen',
            post: 'Event Management',
            img: ParthibSen,
            phone: 'tel:8670172003',
            mail: 'mailto:senparthib123@gmail.com'
        }, {
            name: 'Sk Raj Ali',
            post: 'Web Development',
            img: Raj,
            phone: 'tel:9635637725',
            mail: 'mailto:skrajali062003@gmail.com'
        },
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
         else if (e.target.innerHTML === 'SECOND YEAR') {
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
                            <img src={Tusharkanti} alt="" />
                            <div className="carddetail">
                                <h4>
                                    <b>Dr. Tushar Kanti Bera</b>
                                    <span style={{ display: 'block' }}>
                                        Associate Professor,<br />
                                        EE Department,<br /> NIT Durgapur.
                                    </span>
                                </h4>
                                <div className="social-link">
                                    <a className="social" href="mailto:tusharkanti.bera@ee.nitdgp.ac.in">
                                        <MailIcon />
                                    </a>
                                    <a className="social" href="tel:9448853303">
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
                                <a href="#first" className="yearlink" onClick={showmembers}>SECOND YEAR</a>
                            </li>
                        </div>
                        <div className="teamdata">

                            <div id="final" className="yearlist">

                                <div className="datacard">
                                    <img src={dhiraj} alt="Dhiraj Kumar" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:dheer222002@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9007269001">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Dhiraj Kumar</b> <span>President</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={akshay} alt="Akshay A Baiju" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:akshaydgp2015@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9475738842">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Akshay A Baiju</b> <span>Vice President & Sponser Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={priyanshu} alt="Priyanshu Burman" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:priyanshuburman1234@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7339778852">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Priyanshu Burman</b> <span>General Secretary & Design Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={kalyan} alt="Kalyan Choubey" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9733653994">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4><b>Kalyan Choubey</b> <span>Treasurer & Publicity Head</span></h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={ashish} alt="Ashish Raj" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:Ashishrajsingh631@gmail.com">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7488431604">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Ashish Raj</b>
                                            <span>Convenor</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={amool} alt="Amool Khudia" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:9352095586">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Amool Khudia</b>
                                            <span>Tech Head</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="datacard">
                                    <img src={SumitSah} alt="Sumit Kumar Sah" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Sumit Kumar Sah</b>
                                            <span>Event & Logistics Head</span>
                                        </h4>
                                    </div>
                                </div>

                                <div className="datacard">
                                    <img src={sankalp} alt="Sankalp Mishra" />
                                    <div className="social-link">
                                        <a className="social" href="mailto:sm.20u10580@btech.nitdgp.ac.in">
                                            <MailIcon />
                                        </a>
                                        <a className="social" href="tel:7439122419">
                                            <PhoneIcon />
                                        </a>
                                    </div>
                                    <div className="member-detail">
                                        <h4>
                                            <b>Sankalp Mishra</b>
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