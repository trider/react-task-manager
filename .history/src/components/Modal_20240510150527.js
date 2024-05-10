import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




const FormBody = (tasks, onAddTask) => {


  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
  // const [taskStatus, setTaskStatus] = useState("do");




  return (
    <div>
      <Form onSubmit={(e) => {
        // alert(`Task Name: ${taskName} Task Description: ${taskDescription}`);
        // setTask({ name: taskName, description: taskDescription });
        setDateAdded(new Date().toISOString());
        setDateUpdated(new Date().toISOString());
    
     
         onAddTask({
          name: taskName,
          description: taskDescription,
          user: 'jonnygold',
          status: 'do',
          taskId: tasks.length + 1,
          added: dateAdded,
          updated: dateUpdated,
          isActive: true,
          isEdit: false
        });



      }}>

        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}


          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}

          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" >Submit</Button>
        </div>
      </Form>
      {/* <div className='text-center'>{JSON.stringify(task)}</div> */}
    </div>
  );

}

const ModalComponent = (props,tasks, {onAddTask}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
      <Button variant="primary" onClick={handleShow} className='rounded-pill' size={props.size}>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormBody  props={props} tasks={tasks} onAddTask={onAddTask}  />



        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid gap-2">



            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;