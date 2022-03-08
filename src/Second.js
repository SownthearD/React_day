import React from 'react';
import './style.css'
import correct from './img/correct.svg'
import abt from './img/about.jpg'
import c1 from "./img/Client/client-1.png"
import c2 from "./img/Client/client-2.png"
import c3 from "./img/Client/client-3.png"
import c4 from "./img/Client/client-4.png"
import c5 from "./img/Client/client-5.png"
import c6 from "./img/Client/client-6.png"
import { Container,Row,Col,Button} from 'react-bootstrap';

function Second() {
  return (<div>
      <div className='home'>
          <Container fluid>
              <Row>
                  <Col md="1"></Col>
                  <Col>
                    <p className='tile'>WELCOME TO DAY</p>
                    <p className='cont'>We are team of talented designers making websites with Bootstrap</p>
                    <Button variant="outline-light" className='but'>GET STARTED</Button>{' '}
                  </Col>
              </Row>
          </Container>
      </div>

      <div className='about'>
        <Container >
          <Row>
            <Col md="6">
                <p className='title'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
                <p className='abt-cont1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span className='abt-cont'><img src={correct} alt='Logo' width={25} height={25} />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br />
                <span className='abt-cont'><img src={correct} alt='Logo' width={25} height={25} />Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
                <span className='abt-cont'><img src={correct} alt='Logo' width={25} height={25} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span><br /><br />
                <p className='abt-cont'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Col>
            <Col md="6">
                <img src={abt} alt='Logo' width={650} height={500} />
            </Col>
          </Row>
          <Row className='abt'>
          <Col md="4" className='over'>
              <p className='abt-num'>01</p>
              <p className='abt-hd'>Lorem Ipsum</p>
              <p className='abt-con'>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </Col>
          <Col md="4" className='over'>
              <p className='abt-num'>02</p>
              <p className='abt-hd'>Repellat Nihil</p>
              <p className='abt-con'>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
          </Col>
          <Col md="4" className='over'>
              <p style={{color: "red", fontSize: "30px",fontWeight: "bold"}}>03</p>
              <p className='abt-hd'>Ad ad velit qui</p>
              <p className='abt-con'>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
          </Col>
          </Row>
        </Container>

        <Container className='client'>
          <Row>
            <Col xs="2">
                <img src={c1} alt='Logo' width={100} height={75} />
            </Col>
            <Col xs="2">
                <img src={c2} alt='Logo' width={100} height={75} />
            </Col>
            <Col xs="2">
                <img src={c3} alt='Logo' width={100} height={75} />
            </Col>
            <Col xs="2">
                <img src={c4} alt='Logo' width={100} height={75} />
            </Col>
            <Col xs="2">
                <img src={c5} alt='Logo' width={100} height={75} />
            </Col>
            <Col xs="2">
                <img src={c6} alt='Logo' width={100} height={75} />
            </Col>
          </Row>
        </Container>
      </div>
  </div>);
}

export default Second;
