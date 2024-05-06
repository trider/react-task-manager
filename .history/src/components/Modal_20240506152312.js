import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Title = "Add Task";
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className='rounded-pill'>
        {Title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
          <div className='bg-primary text-light text-center' style={{ marginTop: '10px'}}>
          <Button  variant="primary" onClick={handleClose} size='sm' className='rounded-pill'>
            Submit
          </Button>


          </div>
          
          
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