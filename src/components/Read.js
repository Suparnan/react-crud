import { useContext } from "react";
import { mycontext } from "../context.js";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { Link, useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function Read (){

    const {userData, setUserData} = useContext(mycontext);

    let history = useHistory();

    const onRemove = ((id) => {
      const userDel = userData.filter((data) => data.id !== id);
      setUserData(userDel);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/");
    }
    

    console.log("you are in Read()");
    return(
        <div className="Apple">
            <div className="container">
            <h3 className="justify-content-center">Users/Contentenders</h3>
            <hr />
            <Table striped bordered hover className="justify-content-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
        
                    {userData.map((data) => {
                        const { id, username, email } = data
                        return(
                            <tr>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>
                                <Link to={`/edit/${data.id}`}>
                                    <BsPencil />
                                </Link>
                            </td>
                            <td>
                                <BsFillTrashFill onClick={() => onRemove(id)} />
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Col>
              <Button className="but" variant="primary" onClick={handleSubmit}>
                Back
              </Button>
            </Col>
            </div>
        </div>
    )
}

export { Read };