import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientPortal from './ClientsPortal';
import ClientProfile from './ClientProfile';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ClientPortal} />
                <Route path='/clients/:id' component={ClientProfile} />
            </Switch>
        </div>
    );
}

export default App;