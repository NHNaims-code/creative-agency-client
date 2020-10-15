import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
import {UserContext} from '../../../../App'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [adminData, setAdminData] = useState(false);
    if(loggedInUser.email){
        fetch('https://nameless-crag-78686.herokuapp.com/checkAdmin/'+loggedInUser.email)
        .then(response => response.json())
        .then(result => {
            if(result.email){
                setAdminData(true)
            }
            else{
                setAdminData(false)
            }
        })
    }
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
                    
                        {
                            adminData && loggedInUser.email && <Link to="/admin"><button className="btn landing-dark-btn px-4">Admin</button></Link>
                        }
                        {
                            !adminData && !loggedInUser.email &&<Link to="/login"><button className="btn landing-dark-btn px-4">Login</button></Link>
                        }                       
                        {

                            !adminData && loggedInUser.email && <Link to="/place-order"><img src={loggedInUser.photoURL} style={{borderRadius: '50px', height: '50px'}} alt=""/></Link>
                        }
                            

                      
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;