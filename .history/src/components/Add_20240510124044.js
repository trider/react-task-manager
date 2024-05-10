import * as React from 'react';

// import { useState } from 'react';
// import { useReducer } from 'react';

import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



// import userTasks from '../_data/_Tasks';
import tableCols from '../_data/_Cols';
// import tasksReducer from '../_Reducers/tasksReducer';

// const states = ['do', 'doing', 'done'];







const TaskAdd = () => {
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
       <tbody></tbody>       

      </Table>
    </div>
  );
}

export default TaskAdd;