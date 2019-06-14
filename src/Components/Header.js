import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="mr-4 text-warning header-link" to="/">First Project</Link>
                                <Link className="mr-4 text-warning header-link" to="/secondproject">Second Project</Link>
                                <Link className="mr-4 text-warning header-link" to="/thirdproject">Third Project</Link>
                                <Link className="mr-4 text-warning header-link" to="/fourthproject">Fourth Project</Link>
                                <Link className="mr-4 text-warning header-link" to="/fifthproject">Fifth Project</Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
           
        )
    }
}

export default Header
