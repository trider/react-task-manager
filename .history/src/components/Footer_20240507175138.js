import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => { 
  return (
    <footer style={{paddingTop:'10%'}} className='class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">'>
      <Container >
        <p>&copy; 2024</p>
      </Container>
    </footer>
  );
}

export default Footer;