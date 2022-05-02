import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">BD MOTORS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {user &&
                                <>
                                    <Nav.Link as={Link} to="/manageInventories">Manage Inventories</Nav.Link>
                                    <Nav.Link as={Link} to="/addproduct">Add new product</Nav.Link>
                                    <Nav.Link as={Link} to="/myitelm">My items</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                !user &&
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                            {
                                user &&
                                <div className='d-flex align-items-center'>
                                    <button className='logOut-btn' onClick={() => signOut(auth)}>Sign Out</button>
                                    <img className='rounded-circle mx-3' src={user?.photoURL} height={40} width={40} alt="" />
                                    <h3 className='text-white fs-5'>{user?.displayName}</h3>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;