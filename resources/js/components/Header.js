import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    let history = useHistory();
    function Logout() {
        localStorage.clear();
        history.push("register");
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-Com</Navbar.Brand>
                <Nav className="mr-auto navlink">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Product List</Link>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                                <Link to="/search">Search Product</Link>

                            </>
                            :
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }


                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={Logout}>
                                Logout
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }

            </Navbar>
        </div>
    );
}

export default Header;