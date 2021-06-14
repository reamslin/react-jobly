import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
    return (
        <div>
            <Navbar className="navbar navbar-light bg-light navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                </NavLink>

                    <Nav className="mr-auto nabar-nav" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/companies">Companies</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;