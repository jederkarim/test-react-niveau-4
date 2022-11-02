import React from 'react'
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link AddTodo" to="/AddTodo">Add Todo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ListTodo" to="/ListTodo">List of Todo</NavLink>
                        </li>                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar