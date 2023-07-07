import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import img1 from '../images/gallery/im1.jpeg';
// import img2 from '../images/gallery/im2.jpeg';
// import img3 from '../images/gallery/im3.jpeg';
// import img4 from '../images/gallery/im4.jpeg';
// import img5 from '../images/gallery/im5.jpeg';
import img6 from '../images/gallery/im6.jpeg';
import img7 from '../images/gallery/im7.jpeg';
import img8 from '../images/gallery/im8.jpeg';
import img9 from '../images/gallery/im9.jpeg';
import img10 from '../images/gallery/im10.jpeg';
import img11 from '../images/gallery/im11.jpeg';
import img12 from '../images/gallery/im12.jpeg';
import img13 from '../images/gallery/im13.jpeg';
import img14 from '../images/gallery/im14.jpeg';


const datagallery = [
    // {
    //     img: img1
    // },
    // {
    //     img: img2
    // },
    // {
    //     img: img3
    // },
    // {
    //     img: img4
    // },
    // {
    //     img: img5
    // },
    {
        img: img6
    },
    {
        img: img7
    },
    {
        img: img8
    },
    {
        img: img9
    },
    {
        img: img10
    },
    {
        img: img11
    },
    {
        img: img12
    },
    {
        img: img13
    },
    {
        img: img14
    }
]

const gallery = () => {


    return (
        <>
            <div id="gallery" className="eventcont">
                <div className="heading">
                    <h2>GALLERY</h2>
                </div>
                <div className="body">
                    <Carousel>
                        {datagallery.map((item, i) => (
                            <Carousel.Item interval={5000} key={i}>
                                <img
                                    className="d-block w-100"
                                    src={item.img}
                                    alt={i}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default gallery;