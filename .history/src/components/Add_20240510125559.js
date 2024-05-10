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
 const [taskName, setTaskName] = useState("A Task");
 const [taskDescription, setTaskDescription] = useState("Task Description");
 const [dateAdded, setDateAdded] = useState(new Date().toISOString());
 const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
 const [taskStatus, setTaskStatus] = useState("do");
 const [isAdd, setIsAdd] = useState(false);
  return (
    <div>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
            <th colSpan={"2"}></th>
          </tr>
        </thead>
       <tbody>
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
            do
          </td>

          <td colSpan='2'>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">

              <Button variant="primary rounded-pill" size='sm' onClick={()=>{
                onAddTask({
                  taskName: taskName,
                  taskDescription: taskDescription,
                  dateAdded: dateAdded,
                  dateUpdated: dateUpdated,
                  taskStatus: taskStatus

                });
                
              }}>
              
                Add
              </Button>
            </div>
          </td>
        </tr>
        
        
        </tbody>       

      </Table>
    </div>
  );
}

export default TaskAdd;