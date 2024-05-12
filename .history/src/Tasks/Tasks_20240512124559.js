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

const TaskTable = ({
 tasks,
 onAddTask, 
 onEditTask, 
 onDeleteTask}
) => {

 // const [tasks, dispatch] = useReducer(tasksReducer, userTasks);

 // const addTask = (task) => {


 //  dispatch({
 //   type: 'added',
 //   task: task,
 //  });
 // }

 // const updateTask = (task) => {

 //  dispatch({
 //   type: 'changed',
 //   task: task,
 //  });

 // }

 // const deleteTask = (task) => {
 //  dispatch({
 //   type: 'deleted',
 //   task: task,
 //  });
 // }

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
  <TasksContext.Provider value={ tasks}>
   <TasksDispatchContext.Provider value={dispatch}>
    <div>

     <NavbarComponent />
     <Container style={{ marginTop: "50px" }}>

      <TaskTable 
         tasks={tasks}
         onAddTask={addTask}
         onEditTask={updateTask} 
         onDeleteTask={deleteTask}
         
        />
     </Container>
     <Container style={{ paddingTop: '20%' }} >
      <Footer />
     </Container>

    </div>


   </TasksDispatchContext.Provider>
  </TasksContext.Provider>

 );
}

export default TaskList;