import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { BlockScreen } from '../components/block/BlockScreen';
import { InicioScreen } from '../components/block/InicioScreen';
import { Sprint1 } from '../components/block/Sprint1';
import { Sprint2 } from '../components/block/Sprint2';
import { Sprint3 } from '../components/block/Sprint3';
import { Sprint4 } from '../components/block/Sprint4';
import { NavBar } from './../components/navBar/NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div>

                <Switch>
                    <Route exact path="/Block-Scrum" component={ BlockScreen } />
                    <Route exact path="/Block-Scrum/inicio" component={ InicioScreen } />
                    <Route exact path="/Block-Scrum/sprint1" component={ Sprint1 } />
                    <Route exact path="/Block-Scrum/sprint2" component={ Sprint2 } />
                    <Route exact path="/Block-Scrum/sprint3" component={ Sprint3 } />
                    <Route exact path="/Block-Scrum/sprint4" component={ Sprint4 } />
                    <Redirect  to="/Block-Scrum"/>
                </Switch>
            </div>
        </Router>
    )
}

