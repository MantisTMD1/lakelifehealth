import React from 'react';
import Carousel from 'nuka-carousel';

import "../styles/Carousel.css";
import Acupuncture from '../slider-images/acupuncture-pain-relief.jpeg';
import Canoe from '../slider-images/canoe.jpeg';
import Backcrack from '../slider-images/chiro.jpg';
import Medicine from '../slider-images/functional-medicine.jpg';


export default class Slider extends React.Component {
    render() {
        return (
            <div className="silder-component">
                <Carousel
                    heightMode="max"
                    animation='zoom'
                    autoplay='true'
                    pauseOnHover='true'
                // adaptiveHeight='true'
                >
                    <img src={Canoe} alt="chiro" id="slider-image" />
                    <img src={Backcrack} alt="chiro" id="slider-image" />
                    <img src={Acupuncture} alt="chiro" id="slider-image" />
                    <img src={Medicine} alt="chiro" id="slider-image" />
                </Carousel>
            </div>
        );
    }
}