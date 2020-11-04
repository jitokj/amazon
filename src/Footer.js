import React from 'react';
import "./Footer.css";
import amazon from "./images/amazon.png";

const Footer = () => {
    return (
        <div className="footer">
            <a href="#top">
                <div className="footer__backtoTop">
                    <span className="footer__backtoTopText">Back to Top</span>
                </div>
            </a>
            <div className="footer__link">
                <span>
                    <img src={amazon} alt=""/>
                </span>
                <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
            </div>
           
        </div>
    );
};

export default Footer;