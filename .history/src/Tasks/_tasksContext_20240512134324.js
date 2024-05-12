import { createContext, useReducer } from 'react';
import userTasks from '../_data/_Tasks';

import tasksReducer from '../_Reducers/tasksReducer';






const TasksProvider = ({ children }) => {

 const [tasks, dispatch] = useReducer(tasksReducer, userTasks);



 return (

  <TasksContext.Provider value={tasks}>
   <TasksDispatchContext.Provider value={dispatch}>
    {children}

   </TasksDispatchContext.Provider>
  </TasksContext.Provider>
 );



};

export default TasksProvider;
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);