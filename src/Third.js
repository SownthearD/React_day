import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import './style.css'

function Third() {
  return (<div>
    <div className='space'>
      <Container>
        <Row>
          <Col md="12" className='bg'>
            <h2 style={{fontWeight: "bold"}}>Services</h2>
            <p style={{fontSize: "20px"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </Col>
        </Row>
      <br/><br/>
          <Row className="justify-content-md-center">
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-basketball icn" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Lorem Ipsum</h2>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </Col>
          <Col md="1"></Col>
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-file-pdf" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Sed ut perspiciatis</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </Col>
          <Col md="1"></Col>
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-gauge" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Magni Dolores</h2>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </Col>
        </Row>
<br/><br/>
        <Row className="justify-content-md-center">
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-globe" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Nemo Enim</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </Col>
          <Col md="1"></Col>
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-tv" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Dele cardo</h2>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
          </Col>
          <Col md="1"></Col>
          <Col md="3" className='round-icon'>
              <i class="fa-solid fa-torii-gate" style={{fontSize: "40px"}}></i><br/><br/>
              <h2>Divera don</h2>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </Col>
        </Row>
      </Container>

      <div className='space1 img'>
        <Container>
          <Row>
            <Col md="12">
              <h2 style={{fontWeight: "bold"}}>Call To Action</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button variant="outline-light" className='but'>GET STARTED</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>);
}

export default Third;
