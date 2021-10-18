import React from 'react';
import './Headar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>

            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                <Container >
                    <Navbar.Brand href="#home">Dental</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <Nav.Link className="navbar" href="#home">Home</Nav.Link>
                            <Nav.Link className="navbar" href="#features">Features</Nav.Link>
                            <Nav.Link className="navbar" href="#pricing">Pricing</Nav.Link>
                            <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>    
                </Container>
            </Navbar>
        </>
            );
};

            export default Header;