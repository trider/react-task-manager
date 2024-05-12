import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

import userTasks from '../_data/_Tasks';

import tasksReducer from '../_Reducers/tasksReducer';
import TaskTable from './_taskTable';
import TasksProvider from './_tasksContext'; 




const TasksProvider = () => {

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
 );



};

export default TasksProvider;