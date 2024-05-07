import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import ModalComponent from '../components/Modal';
import userTasks from '../data/_Tasks';
import tableCols from '../data/_Cols';
import NavbarComponent from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react';




const TaskTable = () => {

  const [tasks, setTasks] = useState(userTasks);
  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  const [taskStatus, setTaskStatus] = useState("do");
  const [isAdd, setIsAdd] = useState(false);


  const addTask = (task) => {
    setDateAdded(new Date().toISOString());
    setDateUpdated(new Date().toISOString());
    setTaskStatus('do');
    setIsAdd(false);
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  }

  const editTask = (task) => {

    setIsAdd(false);
    setTasks(tasks.map((t) => {
      if (tasks.filter((t) => t.isEdit === true).length < 1) {
        if (t.taskId === task.taskId) t.isEdit = !t.isEdit;
      }

      return t
    }));


  }

  const getButton = (task) => {

    if (task.isEdit) {
      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => updateTask(task)}>
        Update
      </Button>
    }
    else {
      return <Button variant="primary rounded-pill" size='sm' onClick={(e) => editTask(task)}>
        Edit
      </Button>
    }

  }

  const updateTask = (task) => {






    setTasks(tasks.map((t) => {
      setTaskName(t.name);
      setTaskDescription(t.description);
      if (t.taskId === task.taskId) {
        t.isEdit = !t.isEdit;
        t.name = taskName;
        t.description = taskDescription;
        t.updated = new Date().toISOString();
        t.status = taskStatus;
      }
      return t;
    }));
    setIsAdd(false);



  }

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.taskId !== task.taskId));
  }

  const getTask = (task, col) => {
    if (task.isEdit) {
      if (col === 'name') {
        return <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      }
      else if (col === 'description') {
        return <Form.Control
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      }
      else if (col === 'status') {
        return <Form.Control
          type="text"
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        />
      }
      else {
        return task[col]
      }


    }
    else {
      return task[col]
    }


  }

  const showAddTask = () => {
    
    if (isAdd) {
      
      return <tfoot>
         <tr>
          <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white",height:'50px' }}></td>
        </tr>
        <tr>
          <td>
            {tasks.length + 1}
          </td>
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

              <Button variant="primary rounded-pill" size='sm' onClick={(e) => addTask({
                name: taskName,
                description: taskDescription,
                user: 'jonnygold',
                status: 'do',
                taskId: tasks.length + 1,
                added: new Date().toISOString(),
                updated: new Date().toISOString(),
                isActive: true,
                isEdit: false
              })}>
                Add
              </Button>
            </div>
          </td>
        </tr>



      </tfoot>



    }
    else {
      return <tfoot>
          <tr>
          <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white",height:'50px' }}></td>
        </tr>
        <tr>

          <td colSpan={tableCols.length} style={{ backgroundColor: "white" }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <Button variant="primary rounded-pill" size='sm' onClick={(e) => setIsAdd(!isAdd)}>
                Add Task
              </Button>
            </div>
          </td>
        </tr>
      </tfoot>

    }
  }



  return (
    <div >
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            {tableCols.map((col) => (
              <th key={col}>{col}</th>
            ))}
            <th>Details</th>
            <th colSpan={"2"}></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {tableCols.map((col) => (
                <td key={col}>

                  {getTask(task, col)}

                </td>
              ))}

              <td>
                {getButton(task)}





                {/* <ModalComponent title={'Edit Task'} size={'sm'} /> */}
              </td>
              <td>
                <Button variant="danger rounded-pill" size='sm' onClick={(e) => deleteTask(task)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}



        </tbody>
        {showAddTask()}

      </Table>




    </div>
  );
}


const TaskList = () => {
  return (
    <div>

      <NavbarComponent />
      <Container style={{ marginTop: "50px" }}>

        <div style={{ marginTop: "50px" }}>
          <TaskTable />
        </div>

      </Container>
    </div>
  );
}

export default TaskList;