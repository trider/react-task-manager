import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => { 
  return (
    <footer style={{paddingTop:'10%'}} className='class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">'>
      <Container >
      <Row>
        <Col>&copy; 2024 MVDS</Col>
        <Col>Version 0.1.2</Col>
      </Row>
      </Container>
    </footer>
  );
}

export default Footer;