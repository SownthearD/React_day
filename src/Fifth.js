import React from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import './style.css'
import a from './img/team/team-1.jpg'
import b from './img/team/team-2.jpg'
import c from './img/team/team-3.jpg'
import twitter from './img/twitter.svg'
import fb from './img/face.svg'
import insta from './img/insta.svg'
import link from './img/link.svg'

function Fifth() {
  return (<div>
    <div className='space'>
      <Container>
        <Row>
          <Col className='bg'>
            <h2>Team</h2>
            <p style={{fontSize: "20px"}}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </Col>
        </Row>

        <Row>
          <Col md="3">
              <Card style={{ width: '30rem' }} >
              <Card.Img variant="top" src={a} style={{borderRadius: "50%"}} />
              <Card.Body>
                <Card.Title>Walter White</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chief Executive Officer</Card.Subtitle>
                <Card.Text className='cardtxt'>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </Card.Text>
                <span /><img src={twitter} alt='Logo' width={25} height={25}  />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={fb} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={insta} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={link} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
          </Col>
           <Col md="1"></Col>    
          <Col md="3">
              <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src={b} style={{borderRadius: "50%"}} />
              <Card.Body>
                <Card.Title>Sarah Jhinson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Product Manager</Card.Subtitle>
                <Card.Text className='cardtxt'>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </Card.Text>
                <span /><img src={twitter} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={fb} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={insta} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={link} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
          </Col>
          <Col md="1"></Col>
          <Col md="3">
              <Card style={{ width: '30rem' }}>
              <Card.Img variant="top" src={c} style={{borderRadius: "50%"}} />
              <Card.Body>
                <Card.Title>William Anderson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CTO</Card.Subtitle>
                <Card.Text className='cardtxt'>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </Card.Text>
                
                <span /><img src={twitter} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={fb} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={insta} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                <span /><img src={link} alt='Logo' width={25} height={25} />&nbsp;&nbsp;&nbsp;&nbsp;
                
              </Card.Body>
            </Card>
            <br /><br />
          </Col>
        </Row>
      </Container>
    </div>
  </div>);
}

export default Fifth;
