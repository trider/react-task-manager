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
          <th colSpan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userTasks.map((task) => (
          <tr key={task.id}>
            {tableCols.map((col) => (
              <td key={col}>{task[col]}</td>
            ))}
            <td>
  
            
            <ModalComponent title={'Edit Task'} size={'sm'} />
            </td>
            <td>
            <Button  variant="danger rounded-pill" size='sm' >
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
            <ModalComponent title={'Add Task'} size={'lg'}/>
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