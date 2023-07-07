import React from 'react';
// import BackgroundImage from '../images/logo/rn.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';

const Home = () => {
    return (
        <>
            <div className="homecont">
                <div className="sociallogo">
                    <li><a href="https://www.facebook.com/radio.nitroz.nitdgp"><FacebookIcon /></a></li>
                    <li><a href="https://instagram.com/radionitroz_nitdgp?igshid=1pu6b8o84z66h"><InstagramIcon /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCSENXkh5yNkcGiQez7y1OwA"><YouTubeIcon /></a></li>
                    <li><a href="mailto:radionitroz.nitdgp@gmail.com"><MailIcon/></a></li>
                </div>
            </div>
        </>
    )
}

export default Home;