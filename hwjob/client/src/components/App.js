import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientPortal from './ClientsPortal';
import ClientProfile from './ClientProfile';
import NavBar from './NavBar';

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