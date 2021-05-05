import React from 'react';
import {
    Link
} from "react-router-dom";


import './navBar.css';

export const NavBar = () => {
    return (
        <nav className="nav-conteiner">
            <Link
                className="nav-link  nav-title"
                to="/blockscrum"
            >
                Block SCRUM
            </Link>

            <div>
                <div className ="aa" >
                    <Link
                        className="nav-link  nav-list-option link-transicion"
                        to="/blockscrum/inicio"
                    >
                        INICIO
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/blockscrum/sprint1"
                    >
                        SPRINT I
                    </Link>
                    
                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/blockscrum/sprint2"
                    >
                        SPRINT II
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion "
                        to="/blockscrum/sprint3"
                    >
                        SPRINT III
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/blockscrum/sprint4"
                    >
                        SPRINT IV
                    </Link>

                </div>
            </div>

        </nav>
        
    )
}
