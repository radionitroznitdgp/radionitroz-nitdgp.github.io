import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import dil_ki_ek_diary_se from '../images/video_and_series/dil_ki_ek_diary_se.jpeg';
import freshers from '../images/video_and_series/freshers.jpeg';
import freshers_intro from '../images/video_and_series/freshers_intro.jpeg';
import karthick from '../images/video_and_series/karthick&hemanika.jpeg';
import kasauti from '../images/video_and_series/kasauti jhanduon ki.jpeg';
import Nit_durgapur_special from '../images/video_and_series/Nit_durgapur_special.jpeg';
import prank from '../images/video_and_series/prank.jpeg';
import success_stories from '../images/video_and_series/success_stories.jpeg';
import the_rn_pod from '../images/video_and_series/the_rn_pod.jpeg';
import Tnt from '../images/video_and_series/Tnt.jpeg';
import video_kahinka from '../images/video_and_series/video_kahinka.jpeg';


const VideoandSeries = () => {
    const data = [
        {
            img: freshers_intro,
            LINK: 'https://www.youtube.com/watch?v=b_s3xM1IM8Y&list=PLHUzfuu4Xg5r7Mvz68TolEivcOoDaXMIP',
            heading: "FRESHERS' INTRODUCTION"
        },
        {
            img: Nit_durgapur_special,
            LINK: 'https://www.youtube.com/watch?v=hu1Mz8Voi00&list=PLHUzfuu4Xg5qXBy8xZ7rxWjXn1IFZgVKZ',
            heading: 'NIT DURGAPUR SPECIAL'
        },
        {
            img: karthick,
            LINK: 'https://www.youtube.com/watch?v=lYi-Os7gaek&list=PLHUzfuu4Xg5ohI8huQ6HdmGqCaaTYxCz9',
            heading: 'KARTHICK AND HEMANIKA'
        },
        {
            img: freshers,
            LINK: 'https://www.youtube.com/watch?v=7xkiF0Zzvh8&list=PLHUzfuu4Xg5qi7u-X_QYwwOywI3UW6Scn',
            heading: "FRESHERS' ORIENTATION"
        },
        {
            img: dil_ki_ek_diary_se,
            LINK: 'https://www.youtube.com/watch?v=i9yNwbVnlhY&list=PLHUzfuu4Xg5p02yoZMD3ukHgUtoa1H9IV',
            heading: 'DIL KI EK DIARY SE'
        },     
        {
            img: the_rn_pod,
            LINK: 'https://www.youtube.com/watch?v=Uale6Dc6R5E&list=PLHUzfuu4Xg5pclz0H1TQ38KTncfSKIJVd',
            heading: 'THE RN POD'
        },  
        {
            img: Tnt,
            LINK: 'https://www.youtube.com/watch?v=H1DznFtfXmo&list=PLHUzfuu4Xg5pBr6va79fBd3j6YtAgcJ96',
            heading: 'TERRRIBLY NITROZ TALES'
        }, 
        {
            img: kasauti,
            LINK: 'https://www.youtube.com/watch?v=Z5CLaHfR0S4&list=PLHUzfuu4Xg5oxNkOnqsm85RnqLPiPSaAC',
            heading: 'KASAUTI JHANDUON KI'
        },
        {
            img: prank,
            LINK: 'https://www.youtube.com/watch?v=KsnrHBIxQCU&list=PLHUzfuu4Xg5qaYtfjYhev4DjIMDXapFw4',
            heading: 'PRANK VIDEOS'
        },
        {
            img: success_stories,
            LINK: 'https://www.youtube.com/watch?v=dQSc2Cdqrog&list=PLHUzfuu4Xg5qLZtKBeL0KbD8ZVQNqYb4J',
            heading: 'SUCCESS STORIES'
        },
        {
            img: video_kahinka,
            LINK: 'https://www.youtube.com/watch?v=8eBReP83jmQ&list=PLHUzfuu4Xg5oDvMr0Hhj_1VTS2qOPMeEY',
            heading: 'VIDEO KAHINKA'
        },
    ]
    return (
        <>
            <div id="video" className="eventcont">
                <div className="heading">
                    <h2>Video And Series</h2>
                </div>
                <div className="body">
                    <Carousel>

                        {data.map((item, i) => (

                            <Carousel.Item interval={5000} key={i}>
                                <a href={item.LINK}>
                                    <img
                                        className="d-block w-100"
                                        src={item.img}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.heading}</h3>
                                        <p>{item.body}</p>
                                    </Carousel.Caption>
                                </a>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default VideoandSeries