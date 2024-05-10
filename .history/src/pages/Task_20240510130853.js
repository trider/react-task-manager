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
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  const [taskStatus, setTaskStatus] = useState("do");
  const [isAdd, setIsAdd] = useState(false);





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

    if (isAdd) {

      return <tbody>

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
            do
          </td>

          <td colSpan='2'>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">

              <Button variant="primary rounded-pill" size='sm' onClick={(e) => addTask({
                name: taskName,
                description: taskDescription,
                user: 'jonnygold',
                status: 'do',
                taskId: tasks.length + 1,
                added: new Date().toISOString(),
                updated: new Date().toISOString(),
                isActive: true,
                isEdit: false
              })}>
                Add
              </Button>
            </div>
          </td>
        </tr>



      </tbody>



    }
    else {
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



        <tr>

          <td colSpan={tableCols.length+2} style={{ backgroundColor: "white" }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <Button variant="primary rounded-pill" size='sm' onClick={(e) => setIsAdd(!isAdd)}>
                Add Task
              </Button>
              {/* <ModalComponent title='Add'/> */}
    
            </div>
          </td>
          <td>
   
          </td>
        </tr>
      </tbody>

    }


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
  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
  const handleAddTask = (task) =>  dispatch({
    type: 'added',
    task: task,
  });


  return (
    <div>

      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>

        <div style={{ marginTop: "50px" }}>
          <TaskTable />
          <TaskAdd onAddTask={handleAddTask} task={userTasks}/>
        </div>

      </Container>
      <Container style={{ paddingTop: '20%' }} >
        <Footer />
      </Container>

    </div>
  );
}

export default TaskList;