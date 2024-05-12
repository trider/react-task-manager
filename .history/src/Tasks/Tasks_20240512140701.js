import * as React from 'react';

import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import { TasksProvider } from './_tasksContext';
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
   <Container style={{ paddingBottom: '5%' }} >
   <Footer />
  </Container>

  </div>

 );
}

export default TaskList;