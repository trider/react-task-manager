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

import { TasksContext, TasksDispatchContext } from './_tasksContext';
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
   <TasksContext.Provider value={{ tasks }}>
    <TasksDispatchContext.Provider value={{ dispatch}}>
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

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.added}</td>
                <td>{task.updated}</td>
                <td>{task.status}</td>
                <td>
                  <ModalComponent title="Edit" task={task} onEditTask={updateTask} />
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteTask(task)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ModalComponent title="Add" onAddTask={addTask} />
      </div>
     </TasksDispatchContext.Provider>
    </TasksContext.Provider>


  );
}


const TaskList = () => {



  return (
    <div>

      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>

        <TaskTable />
      </Container>
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>

    </div>
  );
}

export default TaskList;