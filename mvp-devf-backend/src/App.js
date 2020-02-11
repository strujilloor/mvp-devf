//React imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Local imports
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { BoardContainer } from './containers/BoardContainer/BoardContainer';
import { AuthContainer } from './containers/AuthContainer/AuthContainer';
import { NotFoundContainer } from './containers/NotFoundContainer/NotFoundContainer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav /> 
                <Switch>
                    <Route exact path="/" />
                    <Route  path="/auth/:auth" component={AuthContainer}/>                
                    <Route  path="/dashBoard" component={BoardContainer}/>
                    <Route  path="/notFound/:endPoint" component={NotFoundContainer}/>
                </Switch>                
            </BrowserRouter> 
        </div>
    );
}

export default App;
