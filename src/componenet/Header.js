import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './../style.css';
import logo from './../images.jpg';

function NavbarHeader() {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand='lg'
                bg='dark'
                variant='dark'
                sticky='top'
            >
                <Container>
                    <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link className='link' href='#features'>
                                Features
                            </Nav.Link>
                            <Nav.Link className='link' href='#pricing'>
                                Pricing
                            </Nav.Link>
                            <NavDropdown
                                title='Dropdown'
                                id='collasible-nav-dropdown'
                            >
                                <NavDropdown.Item href='#action/3.1'>
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.2'>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.3'>
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action/3.4'>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#deets' className='link'>
                                More deets
                            </Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                href='#memes'
                                className='link'
                            >
                                <img src={logo} width='100px' height='35px' />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1> Hi Mian sab how are you</h1>
            <br />
            <Link id='link' to='/Home'>
                Go to Home
            </Link>
            <br />
            <Link id='link' to='/footer'>
                Go to About
            </Link>
        </>
    );
}

export { NavbarHeader };
