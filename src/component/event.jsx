import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../images/event/jukebox.jpg';
import img2 from '../images/event/EVENTS IN RECSTACY.jpg';
import img3 from '../images/event/funtastic.jpg';
import kholedil from '../images/event/kholedil.jpg'
import matkifod from '../images/event/matkifod.jpg'
import memerantine from '../images/event/memerantine.jpg';
import moviemystics from '../images/event/moviemystics.jpg';
import redfmcollab from '../images/event/redfmcollab.jpg';
import shaamenoor from '../images/event/shaamenoor.jpg';
import TASHAANBAAZ7 from '../images/event/TASHAANBAAZ7.jpg';
import voice_it_out from '../images/event/voice_it_out.jpg';

const Event = () => {
    return (
        <>
            <div id="eventcont" className="eventcont">
                <div className="heading">
                    <h2>Events</h2>
                </div>
                <div className="body">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>RN JUKEBOX</h3>
                                <p>
                                    RN JUKEBOX is offline platform for fun activities in AAROHAN where people participate in huge numbers with extravagant enthusiasm. We have in store for participants The Spinning Wheel, Paper Dance, Open Mic, Tug of War and many more. Students always look up to RADIO NITroz in college fests, for their fun events.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>EVENTS IN RECSTACY</h3>
                                <p>Recstacy is the annual cultural festival of NIT Durgapur with a lots of amazing events. In Recstacy - one of the biggest fests of Eastern India, Radio NITroz - The Official Radio Club of NIT Durgapur also has some funfilled events full of ecstacy and extravaganza to make the college days more memorable.
The different events arranged by Radio NITroz in the Recstacy are DILEMMAS, DARE YOU, PAPER DANCE- Dance like no ones is watching, HUNAR - Unleash the X factor within you, MR AND MRS NITDGP which are filled with a lot of fun and enjoyment.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>FUNTASTIC</h3>
                                <p>It was a fun and t-shirt painting event especially for the freshers where they have to paint their favourite one's t-shirts. This event was very successful with 100+ participants.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={kholedil}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>KHOL-E-DIL</h3>
                                <p>
                                    KHOL-E-DIL gives everyone a platform where they can confess any feelings that was untold due to this stupid pandemic, any unsaid goodbyes, any unsaid sorry if they by chance hurt someone, just anything they want that person to know. This event is still going on our Official Facebook page of Radio NITroz with 450+ entries!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={matkifod}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>MATKI FOD</h3>
                                <p>
                                    MATKI FOD was a fun and interactive event conducted on the auspicious occasion of the festival of Janmashtami with a thought to relive the famous ‘matki fod’ event held nationwide in the college campus on Janmashtami with participation of around 300+ college students.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={memerantine}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>MEME-RAN-TINE</h3>
                                <p>

                                    Memes are one of our most vital survival tools during this quarantine as they are hilarious and savage at the same time so Radio NITroz conduct an event MEME-RAN-TINE, where participants had a chance to showoff their awesome sense of humor by making memes on given list of places in the college. The event was very successful with 80+ participation.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={moviemystics}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>MOVIE MYSTICS</h3>
                                <p>

                                    MOVIE MYSTICS is one of the fun events of NIT Durgapur which is held by our club where participants hunt for the correct film Or web series by solving the exciting and interesting challenging riddles as well as figuring out the connection between picture puzzles. It's an online event, which goes on for consecutive 2 days on our Facebook page and it's got a huge success with a marvelous entry of 100+ participants</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={redfmcollab}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>RED FM COLLAB</h3>
                                <p>
                                    RADIO NITroz in collaboration with RED FM 93.5 had organised "College Ke Tashanbaaz", an offline event where the students were allowed to showcase their talents in any field of interest like dancing, singing, comedy, poetry, etc. The event was very successful with a huge participation.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={shaamenoor}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>SHAAM-E-NOOR</h3>
                                <p>
                                    Light is a symbol of unity, hope and power. This year’s SHAAM-E-NOOR was on different hues of Diwali celebration. Flowers and rangolis, diyas and fairylights, crackers and fireworks, celebration and happiness all around. The festival of deepam is here and we can't resist ourselves from filling our souls with the brightness hovered upon. Pictures, selfies, posts and uploading stories becomes an integral part around the each decorated corners during Diwali so we posted participant’s entries on our Instagram and FB page. SHAAM-E-NOOR is well received by the participants. A total of 130 Entries across 58 Institutions were made for 2nd edition of SHAAM-E-NOOR.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={TASHAANBAAZ7}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>COLLEGE KE TASHANBAAZ SEASON-6</h3>
                                <p>
                                    Everybody is talented because everyone has something to express. COLLEGE KE TASHANBAAZ SEASON-6 one of the craziest and peerless events of NIT Durgapur proffers students an eminent platform to showcase their veiled flairs and where they can flaunt their dexterity and virtuosity of either innate talent or a cultivated skill cause talents are meant to be shared.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={voice_it_out}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>VOICE IT OUT</h3>
                                <p>

                                    Human race is filled with passion. VOICE IT OUT is a live poem recitation event which provides a striking rostrum to everyone where they can showcase their talents by recitating poems, shayaries, short stories penned solely.This is a call to all the budding poets, shayars out there who have never got an opportunity to showcase their aptitude. The poem becomes another part of the vocabulary with which we can encounter and process our experiences in the world. We are in search for the poet or poetess that lives trapped in your heart.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                </div>
            </div>
        </>
    )
}


export default Event;