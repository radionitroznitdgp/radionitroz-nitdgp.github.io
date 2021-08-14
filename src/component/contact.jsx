import React from 'react';

const contact = () => {
    return (
        <>
            <div id="contact" className="eventcont">
                <div className="heading">
                    <h2>CONTACT US</h2>
                </div>
                <div className="body">
                    <div className="contact">
                        <div className="contactField">
                            <div>
                                <input type="text" name="name" placeholder="YOUR NAME" autocomplete="off"/>
                                <input type="email" name="email" placeholder="YOUR EMAIL" autocomplete="off"/>
                                <input type="text" name="subject" placeholder="YOUR SUBJECT OF MAIL" autocomplete="off"/>
                            </div>
                            <div>
                                <textarea name="msg" cols="80" rows="9" placeholder="YOUR MESSAGE" autocomplete="off"></textarea>
                            </div>
                        </div>
                        <div className="btn">
                            <button className="sendbtn">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact;