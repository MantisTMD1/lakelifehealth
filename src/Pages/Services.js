import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css";
import { AiFillHome, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import React, { Fragment } from 'react';
import '../styles/Services.css';
import LakelifeLogo from '../images/lake-life.png';
import { Link } from "react-router-dom";

export default function Contactform() {
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
              <Nav.Link href="/AboutUs"><MdOutlineWavingHand id="home-icon" />About</Nav.Link>
              <Nav.Link href="/Contactform"> <MdContactPage id="home-icon" />Contact</Nav.Link>
              <NavDropdown title="Social" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="https://www.youtube.com" target="_blank" rel="noreferrer"> <BsYoutube id="social-icons" />Youtube</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <FaFacebookSquare id="social-icons" />Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/" target="_blank" rel="noreferrer">  <AiFillInstagram id="social-icons" />Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mailto:doctortanae@gmail.com?Subject=Leave%20your%20name%20and%20number%20and%20tell%20me%20why%20you%20are%20reaching%20out.%20Thanks!">
                  <MdEmail id="social-icons" />Email
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>



      <div id="services">
      <img src={LakelifeLogo} width="394"
          height="124" alt="Logo" className="responsive" />
        <h1 >Services</h1>
    

        <div className="wrapper">
          <h4>Chiropractic & Kinesiology</h4>
          <p>
            When assessing one’s health, spinal balance is critical to optimal
            wellness. A spine that is aligned will allow the nervous system to send
            proper signals to our organs and muscles. Muscle balance and movement is
            also critical for a healthy nervous system and body. At Lakelife, we
            blend the best of both worlds. We focus on creating a healthy nervous
            system and spinal balance through chiropractic adjustments. We reinforce
            spinal balance through muscle balance. You may be asked to do very
            specific exercises, as well as incorporating a regular exercise routine
            as part of your treatment plan. Doing this will help you achieve lasting
            change and increased quality of life.
          </p>
        </div>




        <br></br>

        <div className="wrapper">

          <h4 id="funtional-medicine">Functional Medicine and Laboratory Testing</h4>
          <p id="funtional-medicine">
            Functional Medicine is looking at the root cause of disease, and
            applying natural therapies and lifestyle solutions tofix health
            challenges long term. When receiving traditional treatment, patients
            often feel better temporarily, but the problem is still underlying.
            Functional Medicine is a preventative and systems based approach. When
            looking at body systems and how they are intertwined, cause and effect
            can be addressed, and lasting change can be achieved. Functional
            Medicine can be utilized by anyone, whether you are critically ill or an
            elite athlete. Our bodies are dynamic and we either feed disease or
            health every single day. It’s time to be intentional about our health
            and be the best versions of ourselves!
          </p>


        </div>
        <br></br>

        <div className="wrapper">
          <h4>Acupuncture</h4>
          <p>
            Acupuncture is a safe and effective way to reduce stress and pain. Very
            small needles are inserted superficially into the skin to help
            facilitate healing. There are numerous conditions that acupuncture can
            help. Dry needling and cupping can also be incorporated for certain
            musculoskeletal concerns.
          </p>
        </div>
        <p id ="services-footer">If you have any questions about my services please reach out <a href="tel:+715-205-5560"><AiFillPhone id="phone" size={25} /> 715-205-5560</a> Or fill out my short form <Link to="/Contactform">here</Link>. </p>
      </div>
    </Fragment>
  );
}