import * as React from 'react';

// import { useReducer } from 'react';

import Container from 'react-bootstrap/Container';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import userTasks from '../_data/_Tasks';


import {TasksProvider } from './_tasksContext';
// import tasksReducer from '../_Reducers/tasksReducer';
import TaskTable from './_taskTable';




const TaskList = () => {

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
  <div>
   <NavbarComponent />
   <Container style={{ padding: "2%" }}>
    <TasksProvider>
      <TaskTable />

    </TasksProvider>
    {/* <TasksContext.Provider value={tasks}>
     <TasksDispatchContext.Provider value={dispatch}>


      <TaskTable
       tasks={tasks}
       onAddTask={addTask}
       onEditTask={updateTask}
       onDeleteTask={deleteTask}

      />



     </TasksDispatchContext.Provider>
    </TasksContext.Provider> */}
   </Container>
   <Container style={{ paddingTop: '5%' }} >
   <Footer />
  </Container>

  </div>

 );
}

export default TaskList;