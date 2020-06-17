// MODULES
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import ClientPortal from './ClientsPortal';
import ClientProfile from './ClientProfile';
import NavBar from './NavBar';

// STYLESHEETS
import '../styles/scss/App.scss';

/**
 * App Component defines the entire web application.
 */
const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={ClientPortal} />
                <Route path='/clients/:id' component={ClientProfile} />
            </Switch>
        </div>
    );
}

export default App;