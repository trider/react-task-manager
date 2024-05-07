import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Title = "Add Task";
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {Title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <Button  variant="primary" onClick={handleClose}>
            Submit
          </Button>
           </div>
        
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;