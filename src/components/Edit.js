import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { mycontext } from "../context.js";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialState = {
    username: "",
    email: ""
}

export function Edit() {
    const [user, setUser] = useState(initialState);
    const {id} = useParams();
    console.log("This is the id:",id);

    const history = useHistory();
    const { setUserData, userData } = useContext(mycontext);

    useEffect(() => {
        const findData = userData.find((data) => +data.id == id);
        // console.log("string id",data.id);
        console.log("Inside useEffect",findData);
        setUser({
            username: findData.username,
            email: findData.email
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const newData = userData.map((data) => {
            if(+data.id == id) {
                return { ...data, username: user.username, email: user.email}
            }
            return data;
        });
        setUserData(newData);
        history.push("/read");
    }

    return(
        <div className="Apple">
      <Container fluid>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
            <h3>
              Form
            </h3>
            <br />
            <br />
            <hr />
            <br />

            <Col sm={4}>
              <Form.Label column sm="2">Username</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="text" value={user.username} name="username" placeholder="Enter your Name" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Col sm={4}>
              <Form.Label column sm="2">Email ID</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="email" value={user.email} name="email" placeholder="abc@gmail.com" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <br />
          <Row>
            <Col>
              <Button className="but" variant="primary" onClick={handleUpdate}>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
    )
}