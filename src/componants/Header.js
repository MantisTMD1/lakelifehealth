import React from "react";
import '../styles/Header.css';
import LakelifeLogo from '../images/white-logo.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Backgroundvideo from '../videos/background.mp4';


const HeaderComponant = () => {
    return (
        <div className="background">

            <video src={Backgroundvideo} autoplay="autoplay" loop="loop" muted defaultMuted playsinline />
            <div className="content">
                <img src={LakelifeLogo} alt="Logo" class="responsive" />
                <h4 className="paragraph">
                    Adding community and nature to your wellness
                </h4>

                <a href="tel:715-205-5560">Call today</a>

            </div>

        </div >
    );
}

export default HeaderComponant;
