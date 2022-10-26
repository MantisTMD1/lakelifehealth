import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css";
import { AiFillHome, AiFillInstagram} from "react-icons/ai";
import { FaHeart, FaFacebookSquare } from "react-icons/fa";
import { MdContactPage, MdEmail, MdOutlineWavingHand } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";


const  NavbarComponant= () => {
  return (
    <Navbar collapseOnSelect  expand="lg"  bg="dark" variant="dark" id= "navbar">
      <Container>
        <Navbar.Brand id= "logo" href="/">Lakelife</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto " id= "navbuttons">
          <Nav.Link href="/"><AiFillHome id = "home-icon"/>Home</Nav.Link>
            <Nav.Link href="/Services"> <FaHeart id = "home-icon"/>Services</Nav.Link>
            <Nav.Link href="/AboutUs"><MdOutlineWavingHand id = "home-icon"/>About</Nav.Link>
            <Nav.Link href="/Contactform"> <MdContactPage id = "home-icon"/>Contact</Nav.Link>
            <NavDropdown  title="Social" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="https://www.youtube.com" target="_blank" rel="noreferrer"> <BsYoutube id ="social-icons"/>Youtube</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookSquare id ="social-icons"/>Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/" target="_blank" rel="noreferrer">  <AiFillInstagram id ="social-icons"/>Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto:doctortanae@gmail.com?Subject=Leave%20your%20name%20and%20number%20and%20tell%20me%20why%20you%20are%20reaching%20out.%20Thanks!">
              <MdEmail id ="social-icons"/>Email
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponant;