import * as React from 'react';

import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import ModalComponent from '../components/Modal';

import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
import tasksReducer from '../_Reducers/tasksReducer';

const TaskTable = () => {

  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);

  const addTask = (task) => {


    dispatch({
      type: 'added',
      task: task,
    });
  }





  const updateTask = (task) => {

    dispatch({
      type: 'changed',
      task: task,
    });





  }

  const deleteTask = (task) => {
    dispatch({
      type: 'deleted',
      task: task,
    });
  }



  return (
    <div >
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
            <th colSpan={"2"}></th>
          </tr>
        </thead>

        {showTableBody()}

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
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>

    </div>
  );
}

export default TaskList;