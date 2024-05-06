
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Navigate } from "react-router-dom";
import { useState } from 'react';


const Users = [
  {
    id: "6630a7516e723ac1ea6dce75",
    email: "jonnygold@gmail.com",
    name: "Jonathan Gold",
    password: "1234",
    userName: "jonnygold",
    isActive: true,
    userId: 1,
    created: "2024-05-01T08:57:20.123Z",
    updated: "2024-05-01T08:57:20.123Z"

  },
  {
    id: "663203f0062b854f9356c434",
    email: "jongold@gmail.com",
    name: "Jon Gold",
    password: "1234",
    userName: "jongold",
    userId: 2,
    created: "2024-05-01T09:08:55.211Z",
    updated: "2024-05-01T09:08:55.211Z",
    isActive: true
  }
]

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



const LoginForm = () => {
  return (
    <div>
      <Container fluid className='container-lg' style={{ marginTop: '100px', width: '40%' }}>
        <Card className='card-sm'>
          <Card.Header className='bg-primary text-light text-center' >
            <h2>Login</h2>
          </Card.Header>
          <Card.Body>
            <FormBody />

          </Card.Body>
        </Card>

      </Container>
    </div>





  );
}

export default LoginForm;