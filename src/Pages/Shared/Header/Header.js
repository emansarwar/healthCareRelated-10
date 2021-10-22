
import React from 'react';
import { Button, Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        
    <>
        <Navbar  bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand><span className="medi">MEDI-CARE</span></Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                {user?.email ?
                <Button onClick={logOut} variant="light">Logout</Button>:
                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                <Navbar.Text>
                <span className="medi">Signed in as:</span><a href="#login">{user?.displayName} </a>
                </Navbar.Text>
            </Navbar.Collapse>
          
          </Container>
        </Navbar>
  
    </>
        
    );
};

export default Header;