import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ModalComponent from '../components/Modal';
import userTasks from '../data/_Tasks';
import tableCols from '../data/_Cols';
import NavbarComponent from '../components/Navigation';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react';




const TaskTable = () => {

  const [tasks, setTasks] = useState(userTasks);

  const addTask = (task) => {

    setTasks([...tasks, { id: tasks.length + 1, ...task }]);

  }
  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div >
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
            <th colSpan={"2"}></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col) => (
                <td key={col}>{task[col]}</td>
              ))}
              <td >


                <ModalComponent title={'Edit Task'} size={'sm'} />
              </td>
              <td>
                <Button variant="danger rounded-pill" size='sm' onClick={(e) => deleteTask(task)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
        <tfoot>
          <tr>

            <td colSpan={tableCols.length} style={{ backgroundColor: "white" }}>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
               
                  <Button variant="primary rounded-pill" onClick={(e) => addTask({
                    name: 'New Task', 
                    despripion: 'description',
                    user:'jonnygold',
                    status:'do',
                    added: new Date().toISOString(),
                    updated: new Date().toISOString(),
                    isActive: true,
                  })}>
                    Add Tasks
                  </Button>
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
      <Container style={{ marginTop: "50px" }}>

        <div style={{ marginTop: "50px" }}>
          <TaskTable />
        </div>

      </Container>
    </div>
  );
}

export default TaskList;