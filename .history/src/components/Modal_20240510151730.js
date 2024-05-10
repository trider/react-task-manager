import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';






const ModalComponent = (props) => {

  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [dateAdded, setDateAdded] = useState(new Date().toISOString());
  const [dateUpdated, setDateUpdated] = useState(new Date().toISOString());
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
        <Form onSubmit={(e) => {
        setDateAdded(new Date().toISOString());
        setDateUpdated(new Date().toISOString());

        if(props.title === 'Add'){
    
    
          props.onAddTask({
            name: taskName,
            description: taskDescription,
            user: 'jonnygold',
            status: 'do',
            taskId: props.tasks.length + 1,
            added: dateAdded,
            updated: dateUpdated,
            isActive: true,
            isEdit: false
          });
        }
        else if(props.title === 'Edit'){
          props.onEditTask({
            name: taskName,
            description: taskDescription
            setShow(false);

          });
        }
      setShow(false);



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
          



        </Modal.Body>
     
      </Modal>
    </div>
  );
}

export default ModalComponent;