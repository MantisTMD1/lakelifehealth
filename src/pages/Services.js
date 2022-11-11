import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
import { AiFillHome, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import React, { Fragment } from "react";
import "../styles/services.css";
import LakelifeLogo from "../assets/lake-life.png";
import { Link } from "react-router-dom";

export default function Contactform() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand id="logo" href="/">
            Lakelife
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" id="navbuttons">
              <Nav.Link href="/" id="nav-link">
                <AiFillHome id="home-icon" />
                Home
              </Nav.Link>
              <Link to="/Services" id="nav-link">
                {" "}
                <FaHeart id="home-icon" />
                Services
              </Link>
              <Link to="/AboutUs" id="nav-link">
                <MdOutlineWavingHand id="home-icon" />
                About
              </Link>
              <Link to="/Contactform" id="nav-link">
                {" "}
                <MdContactPage id="home-icon" />
                Contact
              </Link>
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

      <div id="services">
        <img
          src={LakelifeLogo}
          width="394"
          height="124"
          alt="Logo"
          className="responsive"
        />
        <h1>My Services</h1>

        <div className="wrapper">
          <h4>Chiropractic & Kinesiology</h4>
          <p>
            Chiropractic helps create optimal spinal balance for a healthy
            nervous system. We specialize in Applied Kinesiology, which is
            focusing on proper biochemical and muscular balance. Without proper
            muscle balance, pain and symptoms will often reoccur. When the spine
            and muscles are balanced, pain can go away quickly and stay away for
            good! We believe in treating the whole body for optimal health,
            longevity, and quality of life.
          </p>
        </div>

        <br></br>

        <div className="wrapper">
          <h4 id="funtional-medicine">
            Functional Medicine and Lab Testing
          </h4>
          <p id="funtional-medicine">
            Functional Medicine is root cause medicine. We utilize specialized
            laboratory testing, along with a thorough history, to identify
            underlying imbalances and dysfunction before they turn into disease.
            These imbalances are corrected through nutritional and lifestyle
            recommendations. Many diseases can be traced back to a physiological
            and nutritional imbalance. Functional Medicine can also be great for
            people who feel good, but just want to improve their overall health!
          </p>
          <p id="lower-p-tag">Want to get started but don't live in Stone Lake? No problem!</p>
          <p id="lower-p-tag">Virtual Consultations Available!!</p>
        </div>
        <br></br>

        <div className="wrapper">
          <h4>Acupuncture</h4>
          <p>
            Acupuncture is utilized to treat a variety of different pains, and
            reduce stress throughout the nervous system and body. Healing can be
            accelerated when acupuncture is incorporated into your treatment. We
            also offer dry needling which is targeting trigger points in your
            body. When trigger points are targeted, blood flow to the area
            increases, along with oxygen and nutrients. This creates an
            environment for optimal healing.
          </p>
        </div>
        <p id="services-footer">
          If you have any questions about my services please reach out{" "}
          <a href="tel:+715-205-5560">
            <AiFillPhone id="phone" size={25} /> 715-205-5560
          </a>{" "}
          Or fill out my short form <Link to="/Contactform">here</Link>.{" "}
        </p>
      </div>
    </Fragment>
  );
}
