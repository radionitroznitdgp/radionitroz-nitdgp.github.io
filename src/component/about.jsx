import React from 'react';

const About = () => {

    const readMore = () => {
        console.log(document.querySelector('#aboutus .body p .readcontent'));
        document.querySelector('#aboutus .body p .readcontent').style.display = 'inline';
        document.querySelector('.readmore').style.display = 'none';
    }

    const readLess = () => {
        document.querySelector('#aboutus .body p .readcontent').style.display = 'none';
        document.querySelector('.readmore').style.display = 'inline';
    }

    return (
        <>
            <div id="aboutus">
                <div className="heading">
                    <h2>About us</h2>
                </div>
                <div className="body">
                    <p style={{ fontSize: "18px" }}> <span> We, the People of Radio NITroz of NIT Durgapur, strive to make a difference in the hectic life of college by bringing fun events and help people learn better with a calm mind because “Life is to live”. Radio NITroz was formed in the year 2006 by our brilliant seniors and it is the 3rd successful LAN/Internet based Radio among all IITs and NITs. It is a matter of proud for us. We work on the motto to make life a bit easy and fun. We have been very popular for our Podcasts and the Live Dedication. There was a time when everyone used to tune into Radio NITroz using VLC and tell us whom they want to dedicate songs and messages if any. It was amazing to be loved by everyone. For this, we carry out different events throughout the year, enthralling people with Joie de vivre.
                        <button className="readmore" onClick={readMore} type="button"><strong>Read More...</strong></button>
                    </span>
                        <span className="readcontent">
                            We work on the motto to make life a bit easy and fun, so we comes up with innovative ideas of fun events like <strong>'Meme-RaN-Tine'</strong> where participants can show off their sence of humor, <strong>'Movie Mystics'</strong> with its exciting and interesting riddles. Everybody is talented because everyone has something to express, with this objective we projected <strong>'College Ke Tashanbaaz'</strong> which can earn them some fame. Then <strong>'Voice It Out'</strong>  was a live poem recitation event which provided a striking rostrum to everyone. To reduce the burden of onea hearts we organised <strong>'Khol-E-Dil'</strong>. We also arranged several events based on our cultural values like <strong>'Matki Fod'</strong> on the auspicious occasion of Janmashtami and <strong>'Shaam-E-Noor'</strong> for special diwali vibes. Then we also did <strong>'Funtastic'</strong> for our freshers as a fun and T-shirt painting event. Our <strong>'Jukebox'</strong> event arena during Aarohan (Techno - Management Fest of NIT Durgapur) is so attractive among students. We also have a lot of events during Recstacy (Now Nityamini) which is the Cultural Fest of NIT Durgapur.

                            We work as a team to make sure that every event is a milestone. Our Social outreach has grown a lot for a variety of exciting events. The basic intention of the formation of this club or better say family is to communicate with the "Aam Janta" of NIT Durgapur, be a college media and fill the campus with our Bakar and Fun.
                            <button className="readless" onClick={readLess} type="button"><strong>Read Less...</strong></button>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;