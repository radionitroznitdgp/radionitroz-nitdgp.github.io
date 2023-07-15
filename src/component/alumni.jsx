import React from 'react';
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};


const dataalumni = [
    {
        year: '2019-2023',
        name: ['Sonali Sah',
            'Aditya Gupta',
            'Ayush Chaudhary',
            'Ayush Singh',
            'Aditi Gedam',
            'Pragya Kumari',
        ]
    },
    {
        year: '2018-2022',
        name: ['Arjya Singh Roy',
            'Ankita Singha',
            'Gourab Mondal',
            'Sayantan Maity',
            'Kiran P Abraham',
            'Pavan Preetham',
        ]
    },
    {
        year: '2017-2021',
        name: ['Kuldeep Suthar',
            'Pooja Yadav',
            'Pratik Biswas',
            'Gourav Dogra',
            'Kritika Gora',
            'Sourav Das',
            'Amit Dalai',
            'Ashish Kumar']
    },
    {
        year: '2016-2020',
        name: ['Anshu Kumari',
            'Kunal D. Dekate',
            ' S. Hariharan',
            ' Aryaman Panda',
            'Sanhita Pal',
            ' Sayoni Shah',
            ' Nitika Mondal',
            ' Sachin K Yadav']
    },
    {
        year: '2015-2019',
        name: ['R. Nancy',
            'Rahul Singh',
            ' Sarwani Kumari',
            'Hema Maurya',
            'Swarnendu Mondal',
            ' Chandan Tyagi',]
    },
    {
        year: '2014-2018',
        name: ['Mahesh Nayak',
            'Pooja Maurya',
            'Nitin Thomas',
            'Jyoti Singh',
            'Ujas B. Nandasana',
            'Chetender Chauhan',]
    },
    {
        year: '2013-2017',
        name: [
            'Ahmed Meeran',
            'Kavisha Agarwal',
            ' Rishabh Pankaj',
            'Vivek Kumar Singh',
            ' Gaurav Agarwal',
            'Diksha Dubey',
            'B.Harika',
            'Rahul Ranjan ',]
    },
    {
        year: '2012-2016',
        name: ['Pallavi Chaurasia',
            'Anupam Anand',
            'Himanshu',
            'R Sanish',
            'Aman Kumar',
            'Shivang',
            'M Ramsudharsan',
            'Abhijith T',
            'S.H.Nilofer Maideen',
            'Swati Mehta',]
    },
    {
        year: '2011-2015',
        name: ['Shivang Singh',
            'Jitendra Kushram']
    },
    {
        year: '2010-2014',
        name: ['Keshav Gupta',
            'Harshit Arya',
            'Anjali Mathur',]
    },
    {
        year: '2008-2012',
        name: ['Sandhya',
            'Varsha Gupta',
            'Vasu Irneni',
            'Ria Baki Lalu',
            'Tapash',]
    },
    {
        year: '2007-2011',
        name: ['Shankaransh Srivastava',
            'Anubhav Mehta',
            'Swati Gorade',
            'Sanghamitra Das',
            'Arpita Banerjee',]
    },
    {
        year: '2005-2009',
        name: ['Samrat Chakravorty',
            'Deepu',
            'Anil Nagpal']
    },
    {
        year: '2004-2008',
        name: ['Arjun Mehra',
            'Arun Krishnamoorthy',
            ' Piyush Chitkara',
            'Santhosh',
            'Sangeet Somakumar',]
    },
]

const Alumni = ({ deviceType }) => {


    return (
        <>
            <div id="alumni">
                <div className="heading">
                    <h2>OUR ALUMNI</h2>
                </div>
                <div className="body">
                    <Carousel
                        ssr
                        partialVisbile
                        deviceType={deviceType}
                        itemClass="image-item"
                        responsive={responsive}>
                        {
                            dataalumni.map((item, i) => {
                                return (
                                    <div className="alumnicard" key={i} >
                                        <p><b>{item.year}</b></p>
                                        <ul>
                                            {item.name.map((list, j) => (
                                                <li key={j}>{list}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Alumni;
