import React from "react";
import '../styles/Header.css';
import LakelifeLogo from '../images/white-logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HeaderComponant = () => {
    return (
        <div className="background">
            <Container>

                <Row >
                    <Col>
                  
                        <img src={LakelifeLogo} alt="Logo" class="responsive" />
                        <h4 className="paragraph">
                            Adding community and nature to your wellness
                        </h4>
                        <div className="container">
                            <a href="tel:715-205-5560">Call today</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderComponant;
