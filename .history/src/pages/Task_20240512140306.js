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
// import tasksReducer from '../_Reducers/tasksReducer';


const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          ...action.task,
          done: false,
        },
      ];
    }
    case 'edit': {
     return tasks.map((t) => {
       if (tasks.filter((t) => t.isEdit === true).length < 1) {
             if (t.taskId === action.task.taskId) t = !t.isEdit;  
           }
      return t;
     });
   }
    case 'changed': {
 
     
 
      return tasks.map((t) => {
       if (t.taskId === action.task.taskId) return action.task
       
  
       return t;
 
      })
 
 
       
   
      
 
    }
    case 'deleted': {
      return tasks.filter((t) => t.taskId !== action.task.taskId);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
 }

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

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col) => (
                <td key={col}>

                  {task[col]}

                </td>

              ))}
              <td>
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
                    description: 'Task Description',
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

      </Table>





    </div>
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