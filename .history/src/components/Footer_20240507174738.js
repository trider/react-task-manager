import * as React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => { 
  return (
    <footer style={{paddingTop:'10%'}} className='class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">'>
      <Container >
        <div>&copy; 2024</div>
        <div class="nav col-md-4 justify-content-end">
         Version 1.0
        </div>
      </Container>
    </footer>
  );
}

export default Footer;