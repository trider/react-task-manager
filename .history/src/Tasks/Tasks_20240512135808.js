import * as React from 'react';

// import { useReducer } from 'react';

import Container from 'react-bootstrap/Container';

import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
// import userTasks from '../_data/_Tasks';


import { TasksProvider } from './_tasksContext';
// import tasksReducer from '../_Reducers/tasksReducer';
import TaskTable from './_taskTable';




const TaskList = () => {





 return (
  <div>
   <NavbarComponent />
   <Container style={{ padding: "2%" }}>
    <TasksProvider>
      <TaskTable />

    </TasksProvider>

   </Container>
   <Container style={{ paddingTop: '5%' }} >
   <Footer />
  </Container>

  </div>

 );
}

export default TaskList;