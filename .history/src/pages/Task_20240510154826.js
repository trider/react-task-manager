import * as React from 'react';

import { useState } from 'react';
import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import ModalComponent from '../components/Modal';

import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
import tasksReducer from '../_Reducers/tasksReducer';

const states = ['do', 'doing', 'done'];




const TaskTable = () => {

  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");






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


    // setIsAdd(false);



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
        return <Form.Select onChange={(e) => setTaskStatus(e.target.value)}>
          {states.map((state) => (<option key={state} value={state}>{state}</option>))}
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
            {/* {getButton(task)} */}
            <ModalComponent
              title='Edit'
              size='sm'
              task={task}
              onAddTask={addTask}
              onEditTask={updateTask} />
          </td>

        
          <td>
            <Button variant="danger rounded-pill" size='sm' onClick={(e) => deleteTask(task)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}



      <tr style={{ height: "40px" }}>

        <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <ModalComponent
              title='Add'
              task={{
                name: 'New Task',
                description: taskDescription,
                user: 'jonnygold',
                status: 'do',
                taskId: tasks.length + 1,
                added: new Date().toISOString(),
                updated: new Date().toISOString(),
                isActive: true,
                isEdit: false
              }}
              onAddTask={addTask}
              onEditTask={updateTask} />
          </div>



        </td>
      </tr>
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