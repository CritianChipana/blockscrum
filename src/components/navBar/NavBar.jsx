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
                to="/Block-Scrum"
            >
                Block SCRUM
            </Link>

            <div>
                <div className ="aa" >
                    <Link
                        className="nav-link  nav-list-option link-transicion"
                        to="/Block-Scrum/inicio"
                    >
                        INICIO
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/Block-Scrum/sprint1"
                    >
                        SPRINT I
                    </Link>
                    
                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/Block-Scrum/sprint2"
                    >
                        SPRINT II
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion "
                        to="/Block-Scrum/sprint3"
                    >
                        SPRINT III
                    </Link>

                    <Link
                        className="nav-link nav-list-option link-transicion"
                        to="/Block-Scrum/sprint4"
                    >
                        SPRINT IV
                    </Link>

                </div>
            </div>

        </nav>
        
    )
}
