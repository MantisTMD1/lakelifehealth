import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../images/lake-life.png';
import '../styles/Contactform.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contactform() {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        alert("Thank you for reaching out!");
      }, (error) => {
        console.log(error.text);
      });
  };
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
                <NavDropdown.Item href="mailto:doctortanae@gmail.com?Subject=Tell%20us%20why%20you%20are%20reaching%20out.%20Thanks!">
                  <MdEmail id="social-icons" />Email
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className='container'>


        <div className='contact-form-title'>
          <h1>Please fill out the form and I will get back to you soon!</h1>
          <img src={logo} width="394"
            height="124" alt="lakelifelogo" class="responsive" />


        </div>


        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control input type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control input type="tel" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label >Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Tell us why you're reaching out..."  id ="text-area"/>
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
          {/* <Form.Group className="mb-4">
            <Form.Label>Preferred Contact Method </Form.Label>
            <Form.Select>
              <option>Phone Call</option>
              <option>Email</option>
            </Form.Select> */}
          {/* </Form.Group> */}
          <div className='submit-button'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>

      </div>






    </Fragment>
  );
}



