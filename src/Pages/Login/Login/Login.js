import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pasword = passwordRef.current.value;

    }

    const navigateRegister = event => {
        navigate('/register')

    }
        




    return (
        <div className='container w-50 mx-auto padding'>
            <div>
                <h2 className=' text-info text-center mt-2'>Please login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to Rideriot ?<Link  to='/register' className='text-primary text-decoration-none'onClick={navigateRegister} >Please Register</Link> </p>

                <p>Forgate password ?<button className='btn btn-link text-primary text-decoration-none'>Reset password</button> </p>
            </div>



        </div>

    );
};

export default Login;