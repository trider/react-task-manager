import * as React from 'react';

import { useState } from 'react';
import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import TaskAdd from '../components/Add';
// import ModalComponent from '../components/Modal';

import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
import tasksReducer from '../_Reducers/tasksReducer';

const states = ['do', 'doing', 'done'];




const TaskTable = () => {

  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [taskStatus, setTaskStatus] = useState("do");






  const addTask = (task) => {
    setDateAdded(new Date().toISOString());
    setDateUpdated(new Date().toISOString());
    setTaskStatus('do');
    setIsAdd(false);
    dispatch({
      type: 'added',
      task: task,
    });
  }

  const editTask = (task) => {
    task.isEdit = true;
    setIsAdd(false);
    dispatch({
      type: 'edit',
      task: task,
    });
    setIsAdd(false);


  }

  const getButton = (task) => {

    if (task.isEdit) {
      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => updateTask(task)}>
        Update
      </Button>
    }
    else {
      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => editTask(task)}>
        Edit
      </Button>
    }

  }

  const updateTask = (task) => {

    task.isEdit = false;
    task.name = taskName;
    tasks.description = taskDescription
    task.status = taskStatus
    task.updated = new Date().toISOString();

  
   
    dispatch({
      type: 'changed',
      task: task,
    });

 
    setIsAdd(false);



  }

  const deleteTask = (task) => {
    dispatch({
      type: 'deleted',
      task: task,
    });
  }

  const getTask = (task, col) => {
    if (task.isEdit) {
      if (col === 'name') {
        return <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      }
      else if (col === 'description') {
        return <Form.Control
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      }
      else if (col === 'status') {
        return <Form.Select  onChange={(e) => setTaskStatus(e.target.value)}>
          {states.map((state) => (  <option key={state} value={state}>{state}</option>))}
        </Form.Select>
      }
      else {
        return task[col]
      }


    }
    else {
      return task[col]
    }


  }



  const showTableBody = () => {

   
      return <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            {tableCols.map((col) => (
              <td key={col}>

                {getTask(task, col)}

              </td>
            ))}

            <td>
              {getButton(task)}
            </td>
            <td>
              <Button variant="danger rounded-pill" size='sm' onClick={(e) => deleteTask(task)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}



        <tr style={{height:"40px"}}>

          <td colSpan={tableCols.length+2} style={{ backgroundColor: "white" }}>
          
            
   
          </td>
        </tr>
        <TaskAdd onAddTask={addTask} tasks={tasks} />
      </tbody>

    


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