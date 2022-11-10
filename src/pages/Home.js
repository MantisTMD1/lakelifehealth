// Navbar imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";

// Header imports
import "../styles/header.css";
import LakelifeLogo from "../images/white-logo.png";
import Backgroundvideo from "../videos/background.mp4";
import { Fragment } from "react";

// Carousel imports
import Carousel from "nuka-carousel";
import "../styles/carousel.css";
import Acupuncture from "../slider-images/acupuncture-pain-relief.jpeg";
import Canoe from "../slider-images/canoe.jpeg";
import Backcrack from "../slider-images/chiro.jpg";
import Medicine from "../slider-images/functional-medicine.jpg";

// Bullet points
import '../styles/bulletpoints.css';

// schedule imports
import Table from "react-bootstrap/Table";
import "../styles/schedule.css";

// location imports
import "../styles/location.css";
import { GrMapLocation } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";

// footer imports
import "../styles/footer.css";

export default function Home() {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
                <Container>
                    <Navbar.Brand id="logo" href="/">
                        Lakelife
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto " id="navbuttons">
                            <Nav.Link href="/">
                                <AiFillHome id="home-icon" />
                                Home
                            </Nav.Link>
                            <Nav.Link href="/Services">
                                {" "}
                                <FaHeart id="home-icon" />
                                Services
                            </Nav.Link>
                            <Nav.Link href="/AboutUs">
                                <MdOutlineWavingHand id="home-icon" />
                                About
                            </Nav.Link>
                            <Nav.Link href="/Contactform">
                                {" "}
                                <MdContactPage id="home-icon" />
                                Contact
                            </Nav.Link>
                            <NavDropdown title="Social" id="collasible-nav-dropdown">
                                <NavDropdown.Item
                                    href=" https://www.youtube.com/channel/UC3_TpJyqKqBHUZHeRREsezw"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <BsYoutube id="social-icons" />
                                    Youtube
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="https://www.facebook.com/tanaebergdc"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaFacebookSquare id="social-icons" />
                                    Facebook
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="https://www.instagram.com/lakelife.integrativehealth/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <AiFillInstagram id="social-icons" />
                                    Instagram
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="mailto:doctortanae@gmail.com?Subject=Leave%20your%20name%20and%20number%20and%20tell%20me%20why%20you%20are%20reaching%20out.%20Thanks!">
                                    <MdEmail id="social-icons" />
                                    Email
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="background">
                <video
                    src={Backgroundvideo}
                    autoplay="autoplay"
                    loop="loop"
                    muted
                    defaultMuted
                    playsinline
                />
                <div className="content">
                    <img src={LakelifeLogo} alt="Logo" class="responsive" />
                    <h4 className="paragraph">
                        "Adding community and nature to your wellness"
                    </h4>

                    <a href="tel:715-205-5560">Call today</a>
                </div>
            </div>

            <div className="silder-component">
                <Carousel
                    heightMode="max"
                    animation="zoom"
                    autoplay="true"
                    pauseOnHover="true"
                // adaptiveHeight='true'
                >
                    <img src={Canoe} alt="chiro" id="slider-image" />

                    <img src={Backcrack} alt="chiro" id="slider-image" />
                    <img src={Acupuncture} alt="chiro" id="slider-image" />
                    <img src={Medicine} alt="chiro" id="slider-image" />
                </Carousel>
            </div>

            <div className="bulleted-list">
                <h1>Chiropractic care may help if you have:</h1>
                <ul>
                    <li>Neck pain</li>
                    <li>Headaches</li>
                    <li>TMJ Dysfunction</li>
                    <li>Hip pain</li>
                    <li>Sciatica</li>
                    <li>Knee pain</li>
                    <li>Sinus pressure</li>
                    <li>Abdominal pain</li>
                    <li>Vertigo</li>
                    <li>Plantar Fasciitis/Foot pain</li>
                </ul>
                <ul>
                    <li>Shoulder Tension</li>
                    <li>ennis/Golfer's elbow</li>
                    <li>Carpal Tunnel</li>
                    <li>Shoulder pain</li>
                    <li>Numbness/tingling</li>
                    <li>Poor posture</li>
                    <li>Tight muscles</li>
                    
                </ul>

                <ul>  
                <li>And so much more!</li>
                </ul>
    
                         </div>

            <div className="storehours">
                <h1 id="hours">
                    Hours of Operation: <span>Monday-Friday 7am-5pm </span>
                </h1>
                <Table striped="columns" id="table-font">
                    <thead>
                        <tr>
                            <th id="days">Day</th>
                            <th id="days">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td> Stone Lake</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td> Stone Lake</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td> Stone Lake</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td> Stone Lake</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>Rice Lake</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </Table>
                <p id= "virtual-hours">Want to get started but don't live in Stone Lake? No problem!</p>
          <p id= "virtual-hours">Virtual Consultations Available!!</p>
            </div>

            <div className="locations">
                <h1>Locations</h1>
                <div className="button-layout">
                    <Button
                        id="maps-button"
                        href="https://www.google.com/maps/place/2357+County+Hwy+SS,+Rice+Lake,+WI+54868/@45.5457343,-91.7517122,17z/data=!3m1!4b1!4m5!3m4!1s0x52acf900bb82268f:0x2e8f7c53e0323134!8m2!3d45.5457306!4d-91.7495182"
                        target="_blank"
                    >
                        {" "}
                        <GrMapLocation color="white" size={40} />
                    </Button>
                    <span>2357 County Highway SS Rice Lake, WI 54868</span>
                </div>
                <div className="button-layout">
                    <Button
                        id="maps-button"
                        href="https://www.google.com/maps/place/WI-70,+Wisconsin/@45.8727705,-90.5615665,13z/data=!3m1!4b1!4m5!3m4!1s0x52aa49a1031edd5f:0xfead922c5bd6c305!8m2!3d45.8727161!4d-90.5264613"
                        target="_blank"
                    >
                        {" "}
                        <GrMapLocation size={40} id="maps-icon" />
                    </Button>
                    <span>N5862 WI-70 Stone Lake, WI 54876</span>
                </div>
                <p>
                    If you have any questions about scheduling or location hours please
                    reach out{" "}
                    <a href="tel:+715-205-5560">
                        <AiFillPhone id="phone" size={25} /> 715-205-5560
                    </a>{" "}
                    Or fill out this short form <Link to="/Contactform">here</Link>.{" "}
                </p>
            </div>

            <div className="footer">
                <p className="about-website">
                    All Rights Reserved | Website by{" "}
                    <a
                        href="https://webdevev.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WebDevEv
                    </a>{" "}
                    |{/* updates year for me */}
                    {new Date().getFullYear()}&nbsp;
                </p>
            </div>
        </Fragment>
    );
}
