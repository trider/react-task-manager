import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const FormBody = () => {





  return (
    <div>
      <Form>
     
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={"A Task"}
          
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={"Task Description"}
          
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
    <div>
      <Button variant="primary" onClick={handleShow} className='rounded-pill' size={props.size}>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormBody />
          {/* Woohoo, you are reading this text in a modal!
          <div className='bg-primary text-light text-center' style={{ marginTop: '10px'}}>
          <Button  variant="primary rounded-pill" onClick={handleClose} size={props.size} >
            Submit
          </Button> */}


          {/* </div> */}
          
          
          </Modal.Body>
        {/* <Modal.Footer>
          
        
        <div className='bg-primary text-light text-center' >
          <Button  variant="primary" onClick={handleClose}>
            Submit
          </Button>
          </div>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default ModalComponent;