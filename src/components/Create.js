import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";
import { mycontext } from "../context.js"

const initialState = {
  username: "",
  email: "",
 
}

function Create() {

  const [user, setUser] = useState([initialState]);

  let history = useHistory();

  const { setUserData, userData } = useContext(mycontext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
    console.log("Inside handleChange", user);
  }

  console.log("outside handleChange", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      id: Math.floor(Math.random() * 1000),
      username: user.username,
      email: user.email,
    }
    console.log("This is user",user);
    console.log("This is myData",myData);
    setUserData([...userData, myData])
    setUser({
      username: "",
      email: "",
    })
    history.push("/read");
    console.log("Inside Handle Submit",user,myData,userData);
  }

  console.log("Prop Data", userData);

  return (
    <div className="Apple">
      <div className="container">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
            <h3>
              CRUD Form
            </h3>
            <br />
            <br />
            <hr />
            <br />

            <Col sm={4}>
              <Form.Label column sm="2">Username</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="text" value={userData.username} name="username" placeholder="Enter your Name" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Col sm={4}>
              <Form.Label column sm="2">Email ID</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="email" value={userData.email} name="email" placeholder="abc@gmail.com" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <br />
          <Row>
            <Col>
              <Button className="but" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export { Create };
