import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserToken from '../../hook/useUserToken';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useUserToken(user || googleUser);
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passRef = useRef('');

    if (loading || googleLoading || sending) {
        return <Loading></Loading>
    }

    if (error || googleError || passResetError) {
        toast.error(`${error ? error.message : ""} ${googleError ? googleError.message : ""} ${passResetError ? passResetError.message : ""}`)
    }
    if (token) {
        navigate(from, { replace: true });
    }

    const handelCreateUser = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await signInWithEmailAndPassword(email, pass)
        event.target.reset();
    }

    const handelPassReset = async event => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent Email');
        }
        else{
            toast.error('input tour email address');
        }
    }


    return (
        <div className='login mx-auto my-5'>
            <Form onSubmit={handelCreateUser}>
                <h2>Login</h2>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <p onClick={handelPassReset} className='text-link'>Forget Password ?</p>
                <Button className='w-100' variant="dark" type="submit">
                    Login
                </Button>
                <p onClick={() => navigate('/signup')} className='text-center my-4'>New to bd motors ? <span className='text-link'>Please Sign UP</span> </p>
            </Form>
            <hr />
            <div className='mt-4'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;