import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {

        navigate(from, { replace: true });

    }




    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pasword = passwordRef.current.value;

        signInWithEmailAndPassword(email, pasword);




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
                <p>New to Rideriot ?<Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister} >Please Register</Link> </p>

                <p>Forgate password ?<button className='btn btn-link text-primary text-decoration-none'>Reset password</button> </p>
                <SocialLogin></SocialLogin>
            </div>



        </div>

    );
};

export default Login;