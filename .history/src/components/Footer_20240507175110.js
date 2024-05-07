import * as React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => { 
  return (
    <footer style={{paddingTop:'10%'}} className='class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">'>
      <Container >
        <p>&copy; 202 - {new Date()} Tasks App</p>
      </Container>
    </footer>
  );
}

export default Footer;