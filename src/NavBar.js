import React from 'react';
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import twitter from './img/twitter.svg'
import fb from './img/face.svg'
import insta from './img/insta.svg'
import link from './img/link.svg'
import './style.css'
import Home from './Home';
import Price from './Price';
import Team from './Team'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (<div>
      <Router>
      <div className='head'>
      <Container>
          <Row>
              <Col md ="5">
                  <span><img src={mail} alt='Logo' width={25} height={25} /> info@example.com </span>&nbsp;&nbsp;
                  <span><img src={phone} alt='Logo' width={25} height={25} /> +1 5589 55488 55</span>
              </Col>
              <Col md ="5"></Col>
              <Col md ="2">
                <span /><img src={twitter} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={fb} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={insta} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={link} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
              </Col>
          </Row>
      </Container>
      </div>

      <div className='sticky'>
          <Container>
              <Row>
              <Col md="7">
                  <h1>DAY</h1>
              </Col>
              <Col md="5">
              <Navbar  expand="lg" >
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                        <Nav.Link href="#action1" className='navi' as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link href="#action2" className='navi' to="/about">About</Nav.Link>
                        <Nav.Link href="#action3" className='navi' to="">Service</Nav.Link>
                        <Nav.Link href="#action4" className='navi'>Portfolio</Nav.Link>
                        <Nav.Link href="#action5" className='navi' as={Link} to={"/Price"}>Pricing</Nav.Link>
                        <Nav.Link href="#action6" className='navi' as={Link} to={"/Team"}>Team</Nav.Link>
                        <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4" >Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                             Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action7"  className='navi'>Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
              </Col>
              
              </Row>
          </Container>
          <div>
              <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Price" element={<Price />} />
                    <Route exact path="/Team" element={<Team />} />
              </Routes>
          </div>
    </div>
    </Router>
 </div>);
}

export default NavBar;
