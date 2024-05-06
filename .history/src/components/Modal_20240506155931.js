import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const FormBody = () => {

  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, setUser] = useState();



  return (
    <div>
      {user && (
        <Navigate to="/tasks" replace={true} />
      )}

      <Form onSubmit={(e) => {
        const currUser = Users.filter((user) => user.email === email && user.password === password)[0];
        setUser(currUser);



      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            set
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}


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
          Woohoo, you are reading this text in a modal!
          <div className='bg-primary text-light text-center' style={{ marginTop: '10px'}}>
          <Button  variant="primary rounded-pill" onClick={handleClose} size={props.size} >
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