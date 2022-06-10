import { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/http-utils/user-requests";

export function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        login(user).then(() => {
            navigate('/users-list');
        }).catch(error => setError(error.message))
    }

    return (
        <Form onSubmit={onFormSubmit}>
                { error && <span className="text-danger">{error}</span> }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={onInputChange}  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={onInputChange}  required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    )
}