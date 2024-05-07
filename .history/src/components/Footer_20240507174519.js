import * as React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => { 
  return (
    <footer style={{paddingTop:'10%'}}>
      <Container >
        <p>&copy; 2021 - Tasks App</p>
      </Container>
    </footer>
  );
}

export default Footer;