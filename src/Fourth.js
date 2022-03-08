import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import './style.css'
import d from './img/dollar.svg'

function Fourth() {
  return (<div>
    <div className='space'>
      <Container>
        <Row>
          <Col md="12" className='bg'>
            <h2>Pricing</h2>
            <p style={{fontSize: "20px"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </Col>
        </Row>

        <Row>
          <Col md="3" className='bg1'>
            <p style={{fontWeight: "bold", fontSize: "25px"}}>FREE</p>
            <span /><img src={d} alt='Logo' width={30} height={30} />
            <span style={{fontSize: "70px",color: "red"}}>0</span><span>/ Month</span>
            <p>Aida dere</p>
            <p>Nec feugiat nisl</p>
            <p>Nulla at volutpat dola</p>
            <p>Pharetra massa</p>
            <p>Massa ultricies mi</p>
            <Button variant="danger" size="lg" active>
               Buy Now
            </Button>{' '}
          </Col>

          <Col md="1"></Col>
          
          <Col md="4" className='bg2'>
            <p style={{fontWeight: "bold", fontSize: "25px"}}>BUSINESS</p>
            <span /><img src={d} alt='Logo' width={30} height={30} />
            <span style={{fontSize: "70px",color: "white"}}>19</span><span>/ Month</span>
            <p>Aida dere</p>
            <p>Nec feugiat nisl</p>
            <p>Nulla at volutpat dola</p>
            <p>Pharetra massa</p>
            <p>Massa ultricies mi</p>
            <Button variant="danger" size="lg" active>
               Buy Now
            </Button>{' '}
          </Col>
          
          <Col md="1"></Col>
          
          <Col md="3" className='bg1'>
            <p style={{fontWeight: "bold", fontSize: "25px"}}>DEVP</p>
            <span /><img src={d} alt='Logo' width={30} height={30} />
            <span style={{fontSize: "70px",color: "red"}}>29</span><span>/ Month</span>
            <p>Aida dere</p>
            <p>Nec feugiat nisl</p>
            <p>Nulla at volutpat dola</p>
            <p>Pharetra massa</p>
            <p>Massa ultricies mi</p>
            <Button variant="danger" size="lg" active>
               Buy Now
            </Button>{' '}
            <p></p>
          </Col>
          <p></p>
          <p></p>
        </Row>
      </Container>
      </div>
  </div>);
}

export default Fourth;
