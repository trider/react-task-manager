import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalComponent from '../components/Modal';
import tableCols from '../_data/_Cols';




const TaskTable = ({
 tasks,
 onAddTask,
 onEditTask,
 onDeleteTask
}) => { 

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

    <tbody>
     {tasks.map((task) => (
      <tr key={task.id}>
       {tableCols.map((col) => (
        <td key={col}>

         {task[col]}

        </td>

       ))}
       <td>
        <ModalComponent
         title='Edit'
         size='sm'
         task={task}
         onAddTask={onAddTask}
         onEditTask={onEditTask} />
       </td>


       <td>
        <Button variant="danger rounded-pill" size='sm' onClick={(e) => onDeleteTask(task)}>
         Delete
        </Button>
       </td>
      </tr>
     ))}



     <tr style={{ height: "40px" }}>

      <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
       <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <ModalComponent
         title='Add'
         task={{
          name: 'New Task',
          description: 'Task Description',
          user: 'jonnygold',
          status: 'do',
          taskId: tasks.length + 1,
          added: new Date().toISOString(),
          updated: new Date().toISOString(),
          isActive: true,
          isEdit: false
         }}
         onAddTask={onAddTask}
         onEditTask={onEditTask} />
       </div>



      </td>
     </tr>
    </tbody>

   </Table>





  </div>
 );
}




export default TaskTable;