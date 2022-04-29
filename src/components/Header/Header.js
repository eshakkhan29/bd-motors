import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">BD MOTORS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            {
                                user &&
                                <>
                                    <button className='logOut-btn' onClick={() => signOut(auth)}>Sign Out</button>
                                    <h3 className='text-white fs-5'>{user?.displayName}</h3>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;