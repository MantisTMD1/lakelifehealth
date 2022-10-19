import '../styles/Location.css';
import { GrMapLocation } from "react-icons/gr";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";

const LocationComponant = () => {
    return (

        <div className="locations">
            <h1>Our Locations</h1>
            <div className="button-layout">
                <Button id="maps-button" href="https://www.google.com/maps/place/2357+County+Hwy+SS,+Rice+Lake,+WI+54868/@45.5457343,-91.7517122,17z/data=!3m1!4b1!4m5!3m4!1s0x52acf900bb82268f:0x2e8f7c53e0323134!8m2!3d45.5457306!4d-91.7495182" target="_blank">       <GrMapLocation color="white" size={40} id="maps-icon" /></Button>
                <span>2357 County Highway SS
                    Rice Lake, WI 54868</span>
            </div>
            <div className="button-layout">
                <Button id="maps-button" href="https://www.google.com/maps/place/WI-70,+Wisconsin/@45.8727705,-90.5615665,13z/data=!3m1!4b1!4m5!3m4!1s0x52aa49a1031edd5f:0xfead922c5bd6c305!8m2!3d45.8727161!4d-90.5264613" target="_blank">     <GrMapLocation color="white" size={40} id="maps-icon" /></Button>
                <span>N5862 WI-70
                    Stone Lake, WI 54876</span>
            </div>
            <p>If you have any questions about scheduling or location hours please reach out <a href="tel:+715-205-5560"><AiFillPhone id="phone" size={25} /> 715-205-5560</a> Or fill out this short form <Link to="/Contactform">here</Link>. </p>

        </div>
    )






}
export default LocationComponant;