import * as React from 'react';

import { useState } from 'react';
import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
import tasksReducer from '../_Reducers/tasksReducer';

const states = ['do', 'doing', 'done'];




const TaskTable = () => {

  const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  const [taskStatus, setTaskStatus] = useState("do");
  const [isAdd, setIsAdd] = useState(false);




  const TableBody = (onAddTask) => {









  return (
    <div >
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
            <th colSpan={"2"}></th>
          </tr>
        </thead>
        <TableBody />

       

      </Table>




    </div>
  );
}


const TaskAdd = (onAddTask) => {
  return (
    <div>
      {/* <TaskTable onAddTask={onAddTask}/> */}
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
            <th colSpan={"2"}></th>
          </tr>
        </thead>

        {showTableBody()}

      </Table>
    </div>
  );
}

export default TaskAdd;