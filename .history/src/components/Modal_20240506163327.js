import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const FormBody = () => {


  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [task, setTask] = useState({ name: taskName, description: taskDescription });
  
  

  return (
    <div>
      <Form  onSubmit={(e) => {
          alert(`Task Name: ${taskName} Task Description: ${taskDescription}`);        
          // task = setTask({ name: taskName, description: taskDescription });
     


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
    </div>
  );

}

const ModalComponent = (props) => {
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
          <FormBody task={props.task} />
          {/* Woohoo, you are reading this text in a modal!
          <div className='bg-primary text-light text-center' style={{ marginTop: '10px'}}>
          <Button  variant="primary rounded-pill" onClick={handleClose} size={props.size} >
            Submit
          </Button> */}


          {/* </div> */}
          
          
          </Modal.Body>
        <Modal.Footer>
          
          {JSON.stringify(task)}
       
          <Button  variant="primary" onClick={handleClose}>
            Close
          </Button>
     
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;