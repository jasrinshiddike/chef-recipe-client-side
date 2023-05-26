import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/login'

    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        //const form = event.target;
        const name = event.target.name.value;
        const photoURL = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, photoURL, email, password)

        //validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase ');
            return;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('Please add at least one lowercase ');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least two numbers ');
            return;
        }
        else if(!/(?=.*[!@#$%^&*()\-__+.])/.test(password)){
            setError('Please add at least one special character ');
            return;
        }
        else if(password.length<8){
            setError('Please add at least 8 characters in your password');
            return;
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            navigate(from, { replace: true })
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }


    return (
        <Container className='w-25 mx-auto mt-5 p-4 bg-light rounded'>
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Photo URL</Form.Label>
                      <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="danger" type="submit">
                      Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-success">
                        {success}
                    </Form.Text>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
            </Container>
    );
};

export default Register;