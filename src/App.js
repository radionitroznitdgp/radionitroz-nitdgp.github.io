import './App.css';
import "react-multi-carousel/lib/styles.css";
import React, { Fragment, useEffect, useState } from "react";
import UAParser from "ua-parser-js";

import Navbar from './component/navbar';
import Home from './component/home'
import About from './component/about'
import Event from './component/event'
import VideoandSeries from './component/videoAndseries';
import Team from './component/team'
import Alumni from './component/alumni'
import GALLERY from './component/gallery'
import SPONSOR from './component/sponsors'
import CONTACT from './component/contact'
import Footer from './component/footer';
import Space from './component/whitespace';
import Preloader from './component/preloader';


const App = ({ deviceType }) => {

  const [load, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('loading', load)
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    })
  })

  return (
    <>
      {load ? (
        <Preloader />
      ) : (
        <Fragment >
          <Navbar />
          <Home />
          <Space />
          <About />
          <Space />
          <Event />
          <Space />
          <VideoandSeries />
          <Space />
          <Team />
          <Space />
          <Alumni deviceType={deviceType} />
          <Space />
          <GALLERY />
          <Space />
          <SPONSOR />
          <Space />
          <CONTACT />
          <Space />
          <Footer />
        </Fragment >
      )}
      {/* <Preloader /> */}
    </>
  );
}


App.getInitialProps = (req) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  let deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
}


export default App;