import * as React from 'react';

import { useState } from 'react';



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';











const TaskAdd = ({onAddTask, tasks}) => {


 const [taskName, setTaskName] = useState("A Task");
 const [taskDescription, setTaskDescription] = useState("Task Description");
 const [dateAdded, setDateAdded] = useState(new Date().toISOString());
 const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
 const [taskStatus, setTaskStatus] = useState("do");

 setDateAdded(new Date().toISOString());
 setDateUpdated(new Date().toISOString());
 setTaskStatus('do');

 
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
     {dateAdded}
   </td>
   <td>
     {dateUpdated}
   </td>
   <td>
     {taskStatus}
   </td>

   <td colSpan='2'>
     <div className="d-grid gap-2 d-md-flex justify-content-md-center">

       <Button variant="primary rounded-pill" size='sm' onClick={()=>{
     
         onAddTask({
          name: taskName,
          description: taskDescription,
          user: 'jonnygold',
          status: 'do',
          taskId: tasks.length + 1,
          added: dateAdded,
          updated:dateUpdated,
          isActive: true,
          isEdit: false
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