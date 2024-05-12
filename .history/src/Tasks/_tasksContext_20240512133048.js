import { createContext, useReducer } from 'react';

// export const TasksContext = createContext(null);
// export const TasksDispatchContext = createContext(null);

import userTasks from '../_data/_Tasks';

import tasksReducer from '../_Reducers/tasksReducer';
// import TaskTable from './_taskTable';
// import TasksProvider from './_tasksContext'; 




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