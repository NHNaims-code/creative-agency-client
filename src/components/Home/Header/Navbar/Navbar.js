import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container mx-auto">
        <a class="navbar-brand" href="#">
            <Link to="/">
                <img height="50px" src={logo} alt=""/>
            </Link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item mr-5 active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Our Portfolio</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Our Team</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item mr-5">
                    <Link to="/place-order">
                        <button className="btn landing-dark-bg px-4">Login</button>
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;