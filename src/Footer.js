import React from 'react';
import { Container,Row,Col,Button,Form,} from 'react-bootstrap';
import a from './img/location.svg'
import b from './img/mail1.svg'
import c from './img/phone.svg'
import ct from './img/correct.svg'
import twitter from './img/twitter.svg'
import fb from './img/face.svg'
import insta from './img/insta.svg'
import link from './img/link.svg'


function Footer() {
  return (<div>
      <div className='space'>
      <Container>
        <Row>
          <Col md="12" className='bg'>
            <h2>Contact</h2>
            <p style={{fontSize: "20px"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </Col>
        </Row>
        <Row>
            <Col md="6" className='box1'>
              <img src={a} alt='Logo' width={50} height={50} /><br/><br/>
              <h2>Our Address</h2>
              <p>A108 Adam Street, New York, NY 535022</p>
            </Col>
            <Col md="1"></Col>
            <Col md="2" className='box1'>
              <img src={b} alt='Logo' width={50} height={50} /><br/><br/>
              <h2>Email Us</h2>
              <p>contact@example.com</p>
            </Col>
            <Col md="1"></Col>
            <Col md="2" className='box1'>
              <img src={c} alt='Logo' width={50} height={50} /><br/><br/>
              <h2>Call Us</h2>
              <p>+1 5589 55488 55</p>
            </Col>
        </Row>
        <br/><br/><br/><br/>
        <Row>
            <Col md="6">
            
            </Col>
            <Col md="6">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" /><br/>
                    <Form.Control type="text" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Button variant="danger" size="lg" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>
        </Container>
        <br/>

        <div className='last'>
        <Container>
            <Row>
                <Col md="3" className='last1'>
                    <h1>Day</h1><br/>
                    <p>A108 Adam Street</p>
                    <p>NY 535022, USA</p><br/>
                    <p>Phone: +1 5589 55488 55</p>
                    <p>Email: info@example.com</p>
                    <span /><img src={twitter} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={fb} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={insta} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={link} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <p></p>
                </Col>

                <Col md="2" className='last2'>
                    <h4>Useful Links</h4>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Home </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> About Us </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Services </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Terms of Services </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Privacy Policy </span><br/>
                </Col>

                <Col md="2" className='last2'>
                    <h4>Our Services</h4>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Web Design </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Web Development </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Product Managment </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Marketing </span><br/>
                    <span><img src={ct} alt='ct' width={25} height={25} /> Graphics Design </span><br/>
                </Col>

                <Col md="5" className='last2'>
                    <h4>Our NewesLetter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form>
                        <span><Form.Control type="email" placeholder="" /><br/>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button></span>
                    </form>
                </Col>
            </Row>
        </Container>
        <br/>
        <Container>
            <Row>
                <Col className='bottom'>
                    <span >&copy; Copyright Day. All Rights Reserved</span>
                    <p>Designed By <a href="https://bootstrapmade.com">BootstrapMade</a></p>
                </Col>
            </Row>
        </Container>
        </div>
        
        </div>
  </div>);
}

export default Footer;
