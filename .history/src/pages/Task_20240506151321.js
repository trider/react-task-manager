import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Example from '../components/Modal';
import userTasks from '../data/_Tasks';
import tableCols from '../data/_Cols';






const TaskTable = () => {
  return (
    <div>
      <Table striped bordered hover size="lg">
      <thead>
        <tr>
          {tableCols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userTasks.map((task) => (
          <tr key={task.id}>
            {tableCols.map((col) => (
              <td key={col}>{task[col]}</td>
            ))}
          </tr>
        ))}
         
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tableCols.length}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Example />
           </div>
          </td>
        </tr>
      </tfoot>
    </Table>
      


  
    </div>
  );
}

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tasks App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          </Nav>
          <Nav>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const TaskList = () => {
  return (
    <div>

    <NavbarComponent />
    <Container style={{marginTop:"50px"}}>
      <TaskTable />
    </Container>
    </div>
  );
}

export default TaskList;