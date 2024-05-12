import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {

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
  <div>
   <NavbarComponent />
    <Container style={{ padding: "2%" }}>
     <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>


       <TaskTable
        tasks={tasks}
        onAddTask={addTask}
        onEditTask={updateTask}
        onDeleteTask={deleteTask}

       />



      </TasksDispatchContext.Provider>
     </TasksContext.Provider>
    </Container>
    <Container style={{ paddingTop: '5%' }} >
    <Footer />
  </Container>

  </div>

 );



};

export default TasksProvider;