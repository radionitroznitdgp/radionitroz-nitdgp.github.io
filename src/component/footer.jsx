import React from 'react';

const footer = ()=> {
    return(
        <>
        <div className="footer">
            <div className="footercont">
                <p>© Copyright 2021 Radio Nitroz NITDGP</p>
                <span>Made with by <button onClick={()=>console.log('click')}>Web-Team</button></span>
                <span>© All Rights Reserved</span>
            </div>
        </div>
        </>
    )
}

export default footer;