import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
// import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import "../styles/abouttanae.css";
import Headshot from "../assets/headshot.jpg";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import LakelifeLogo from "../assets/lake-life.png";
import { Link } from "react-router-dom";




export default function AboutTanae() {
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
              <Nav.Link href="/"  id="nav-link">
                <AiFillHome id="home-icon" />
                Home
              </Nav.Link>
              <Link to="/Services" id="nav-link">
                {" "}
                <FaHeart id="home-icon" />
                Services
              </Link>
              <Link to="/AboutUs" id="nav-link">
                {" "}
                <MdOutlineWavingHand id="home-icon" />
                About
              </Link>
              <Link to="/Contactform" id="nav-link">
                <MdContactPage id="home-icon" />
                Contact
              </Link>
              <NavDropdown title="Social" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href=" https://www.youtube.com/channel/UC3_TpJyqKqBHUZHeRREsezw"
                  target="_blank"
                  rel="noreferrer"
                >
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

      <div className="container-1">
        <img id = "logo02"
          src={LakelifeLogo}
          width="394"
          height="124"
          alt="Logo"
          class="responsive"
        />
      </div>
      <div className="container-2">
        <h1>Hi, I'm Dr. Berg!</h1>
        <img src={Headshot} alt="Profesional headshot" class="responsive" />
        <p>
          I have had a lifelong passion for health and wellness. I grew up going
          to a chiropractor who practiced Applied Kinesiology and Functional
          Medicine. After a life changing event, I decided that I wanted to help
          people in this way too. I received my Bachelor’s of Human Biology and
          Doctorate of Chiropractic from Northwestern Health Sciences University
          in 2014. Wanting to further my knowledge and skills, I ventured to
          Texas to work alongside a world renowned practitioner for 6 years. I
          worked with Olympic and professional athletes including track
          athletes, basketball players, and boxers. I also saw critically ill
          patients with chronic, complex diseases. With continued interest in
          Functional Medicine and complex cases, I became a certified Functional
          Medicine Practitioner. I also received postdoctoral training and board
          certification in Acupuncture. I currently help teach Applied
          Kinesiology at Northwestern Health Sciences University. I love to give
          back to my profession and help create great practitioners so more
          people can get well in all areas of life. My roots are in the Midwest
          and in my free time I love to spend time with my husband, family, and
          friends. You can find me relaxing by a lake or river, hiking, or
          taking in a beautiful sunset. I also love to read, cook, and workout.
          I believe in slowing down and enjoying all seasons of life, as well as
          making physical, chemical, and emotional health a top priority for
          myself and others that cross my path. I look forward to helping you on
          your health journey! Feel free to reach out to me by filling out my short form
          <span id="form-link"><Link to="/Contactform"> here</Link></span>!
        </p>
      </div>
    </Fragment>
  );
}
