import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
import React, { Fragment } from 'react';
import '../styles/AboutTanae.css';
import Headshot from '../images/headshot.jpg';
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import LakelifeLogo from '../images/lake-life.png';
export default function AboutTanae() {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
                <Container>
                    <Navbar.Brand id="logo" href="/">Lakelife</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="navbuttons">
                            <Nav.Link href="/"><AiFillHome id="home-icon" />Home</Nav.Link>
                            <Nav.Link href="/Services"> <FaHeart id="home-icon" />Services</Nav.Link>
                            <Nav.Link href="/AboutUs"> <MdOutlineWavingHand id="home-icon" />About</Nav.Link>
                            <Nav.Link href="/Contactform"><MdContactPage id="home-icon" />Contact</Nav.Link>
                            <NavDropdown title="Social" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://www.youtube.com" target="_blank" rel="noreferrer"><BsYoutube id="social-icons" />Youtube</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <FaFacebookSquare id="social-icons" />Facebook
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.instagram.com/" target="_blank" rel="noreferrer"><AiFillInstagram id="social-icons" />Instagram</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="mailto:doctortanae@gmail.com?Subject=Tell%20us%20why%20you%20are%20reaching%20out.%20Thanks!">
                                    <MdEmail id="social-icons" />Email
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container-1">
                <img src={LakelifeLogo} width="394"
                    height="124" alt="Logo" class="responsive" />
                <h1>About Me</h1>

            </div>
            <div className="container-2" data-aos="fade-right" data-aos-duration="1800">
                <h1>Meet Doctor Tanae</h1>
                <img src={Headshot} alt="Profesional headshot" class="responsive" />
                <p>
                    Dr. Tanae was born and raised in Rice Lake, WI. She has had a lifelong
                    passion for health and wellness. She grew up going to a chiropractor who
                    practiced Applied Kinesiology and Functional Medicine. After a life
                    changing event, she decided that she wanted to help people in this way
                    too. Dr. Tanae received her Bachelor’s of Human Biology and Doctorate of
                    Chiropractic from Northwestern Health Sciences University in 2014.
                    Wanting to further her knowledge and skills, she ventured to Texas to
                    work alongside a world renowned practitioner for 6 years. She worked
                    with Olympic and professional athletes including track athletes,
                    basketball players, and boxers. With continued interest in Functional
                    Medicine and complex cases, she became a certified Functional Medicine
                    Practitioner. She also received postdoctoral training and board
                    certification in Acupuncture. Although Dr. Tanae’s opportunity in
                    Houston was amazing, her heart was in the Midwest, and she decided to
                    move back to the Twin Cities in 2020. She joined an integrative health
                    clinic working alongside chiropractors, a nurse practitioner, registered
                    nurses, a nutritionist, and a health coach. During this time she got to
                    experience a functional health care model that blended alternative and
                    conventional medicine. In 2021, Dr. Tanae met her husband. It was at
                    this time that she decided to create her Lakelife dream that was
                    envisioned 2 years prior, and start an integrative health clinic in
                    Wisconsin. Dr. Tanae currently helps teach Applied Kinesiology at
                    Northwestern Health Sciences University. She loves to give back to her
                    profession and help create great practitioners so more people can get
                    well in all areas of life. In her free time, Dr. Tanae loves to spend
                    time with her husband, family, and friends. You can find her relaxing by
                    a lake or river, hiking, or taking in a beautiful sunset. She also loves
                    to read, cook, and workout. She believes in slowing down and enjoying
                    all seasons of life, as well as making physical, chemical, and emotional
                    health a top priority for her and others that cross her path.
                </p>

            </div>


        </Fragment>










    );
}

