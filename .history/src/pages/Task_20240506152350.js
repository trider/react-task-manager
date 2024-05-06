import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ModalComponent from '../components/Modal';
import userTasks from '../data/_Tasks';
import tableCols from '../data/_Cols';
import NavbarComponent from '../components/Navigation';
import Button from 'react-bootstrap/Button';



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
            <td>
            <Button  variant="secondary roundedPill" size='sm' className='rounded-pill'>
              Edit
            </Button>
            <Button  variant="danger roundedPill" size='sm' className='rounded-pill'>
            Delete
          </Button>


            </td>
          </tr>
        ))}
         
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tableCols.length}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <ModalComponent />
           </div>
          </td>
        </tr>
      </tfoot>
    </Table>
      


  
    </div>
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