import * as React from 'react';

import { useState } from 'react';
// import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



// import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
// import tasksReducer from '../_Reducers/tasksReducer';

// const states = ['do', 'doing', 'done'];







const TaskAdd = ({onAddTask}) => {
 // const [tasks, setTasks] = useState(userTasks);
 const [task, setText] = useState();
 const [taskName, setTaskName] = useState("A Task");
 const [taskDescription, setTaskDescription] = useState("Task Description");
 // const [dateAdded, setDateAdded] = useState(new Date().toISOString());
 // const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
 // const [taskStatus, setTaskStatus] = useState("do");
 // const [isAdd, setIsAdd] = useState(false);
  return (
   <tr>
   <td>
     <Form.Control
       type="text"
       value={taskName}
       onChange={(e) => setTaskName(e.target.value)}
     />
   </td>
   <td>
     <Form.Control
       type="text"
       value={taskDescription}
       onChange={(e) => setTaskDescription(e.target.value)}

     />
   </td>
   <td>
     {/* {dateAdded} */}
   </td>
   <td>
     {/* {dateUpdated} */}
   </td>
   <td>
     do
   </td>

   <td colSpan='2'>
     <div className="d-grid gap-2 d-md-flex justify-content-md-center">

       <Button variant="primary rounded-pill" size='sm' onClick={()=>{
         setTask({
          name: taskName,
          description: taskDescription,
          // user: 'jonnygold',
          // status: 'do',
          // taskId: tasks.length + 1,
          // added: new Date().toISOString(),
          // updated: new Date().toISOString(),
          // isActive: true,
          // isEdit: false
        })})
         onAddTask({
           taskName: taskName,
           taskDescription: taskDescription,
           // dateAdded: dateAdded,
           // dateUpdated: dateUpdated,
           // taskStatus: taskStatus
         });
    
       }}>
       
         Add
       </Button>
     </div>
   </td>
 </tr>
  );
}

export default TaskAdd;