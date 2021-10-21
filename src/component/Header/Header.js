import React from 'react';
import './Headar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import deant1 from '../../images/dental-checkup.png'


const Header = () => {
    return (
        <>

            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                <Container >
                    <img
                        src={deant1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Brand to="/home">Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <NavLink className="navbar" to ="/home">Home</NavLink>
                        <NavLink className="navbar" to ="/services">Services</NavLink>
                        <NavLink className="navbar" to="/contact">Contact</NavLink>
                        <NavLink className="navbar" to="/about">About</NavLink>
                        <Navbar.Text>
                         <NavLink className="navbar-login" to="/login">Login</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;