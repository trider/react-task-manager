import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';





const FormBody = (props) => {


  const [taskName, setTaskName] = useState("A Task");
  const [taskDescription, setTaskDescription] = useState("Task Description");
  const [task, setTask] = useState({taskName, taskDescription});
  // const [show, setShow] = useState(false);




const ModalComponent = (props) => {
  

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
          <div></div>
          



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