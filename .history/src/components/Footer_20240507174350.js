import * as React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
 return (
  <footer>
   <Container style={{ marginTop: '15%' }} >
    <p>&copy; 2021 - Tasks App</p>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
     <p className="col-md-4 mb-0 text-muted">&copy;  2023 - {{ currentYear | date : 'yyyy'}} MVDS</p>

     <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
     </a>

     <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Task App: Version {{ appVersion }} </a></li>

     </ul>
    </footer>
   </Container>
  </footer>
 );
}

export default Footer;