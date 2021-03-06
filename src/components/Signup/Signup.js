import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Signup.css'
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import auth from '../Login/firebase.init';
import useUserToken from '../../hook/useUserToken';

const Signup = () => {
    const [errorConfirmPass, setErrorConfirmPass] = useState('');
    const [cheek, setCheek] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useUserToken(user || googleUser);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmPassRef = useRef('');

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (error || googleError || updateError) {
        toast.error(`${error ? error.message : ""} ${googleError ? googleError.message : ""} ${updateError ? updateError.message : ""}`);
    }
    if (token) {
        toast.success('Sign Up success , Please verify your email')
        navigate('/login')
    }

    const isCheeked = event =>{
        setCheek(event.target.checked)
    }

    const handelCreateUser = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass = confirmPassRef.current.value;
        if (pass !== confirmPass) {
            return setErrorConfirmPass(`Your password dose't match`);
        }
        if (cheek) {
            await createUserWithEmailAndPassword(email, pass)
            await updateProfile({ displayName: name })
            setErrorConfirmPass('');
            event.target.reset();
        }
        else{
            toast.error('pleas cheek trams and condition')
        }
    }
    return (
        <div>
            <div className='signup mx-auto my-5'>
                <Form onSubmit={handelCreateUser}>
                    <h2>Sign Up</h2>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control required ref={nameRef} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control required ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control required ref={confirmPassRef} type="password" placeholder="Retype Password" />
                        {errorConfirmPass &&
                            <Form.Text className="text-muted">
                                {errorConfirmPass}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={event => isCheeked(event)} type="checkbox" label="Agree trams and condition to BD MOTORS" />
                    </Form.Group>
                    <Button  className='w-100' variant="dark" type="submit">
                        Sign Up
                    </Button>
                    <p onClick={() => navigate('/login')} className='text-center my-4'>already have an account ? <span className='text-link'>Please Login</span> </p>
                </Form>
                <hr />
                <div className='mt-4'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;