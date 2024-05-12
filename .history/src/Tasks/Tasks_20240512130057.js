import * as React from 'react';

import { useReducer } from 'react';

import Container from 'react-bootstrap/Container';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import userTasks from '../_data/_Tasks';


import { TasksContext, TasksDispatchContext } from './_tasksContext';
import tasksReducer from '../_Reducers/tasksReducer';
import TaskTable from './_taskTable';




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