import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ModalComponent from '../components/Modal';
import userTasks from '../data/_Tasks';
import tableCols from '../data/_Cols';
import NavbarComponent from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react';




const TaskTable = () => {

  const [tasks, setTasks] = useState(userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  const [taskStatus, setTaskStatus] = useState("do");

  const addTask = (task) => {
    setDateAdded(new Date().toISOString());
    setDateUpdated(new Date().toISOString());
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
          <tr style={{height:'50px'}}>
            <td colSpan={tableCols.length+2}></td>

          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}

              />
            </td>
            <td>
              {dateAdded}
            </td>
            <td>
              {dateUpdated}
            </td>
            <td>
              {taskStatus}
            </td>

            <td colSpan='2'>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">

                <Button variant="primary rounded-pill" size='sm' onClick={(e) => addTask({
                  name: 'New Task',
                  description: 'description',
                  user: 'jonnygold',
                  status: 'do',
                  taskId: tasks.length + 1,
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