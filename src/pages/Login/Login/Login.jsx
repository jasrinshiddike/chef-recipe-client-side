import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [user, setUser] = useState(null);
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();

    const from = location.state?.from?.pathname || '/chef'

    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
            setSuccess('User login successfully');
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true })
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true })
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto mt-5 bg-light rounded p-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter email" required />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <div className='mt-4 d-grid gap-2 d-md-flex align-items-center'>
                    <Button onClick={handleGoogleSignIn} variant="secondary" type="submit"><FaGoogle /> Login With Google </Button>
                    <Button onClick={handleGithubSignIn} variant="secondary" type="submit"><FaGithub /> Github With Login</Button>
                </div>
                
            </Form>
        </Container>
    );
};

export default Login;