import React from 'react';
import { Helmet } from 'react-helmet';

import ClientDetails from './ClientDetails';
import ClientConsumption from './ClientConsumption';

const ClientProfile = () => {
    const username = "John Doe"

    return (
        <div>
            <Helmet>
                <title>{username}'s profile | Hello watt</title>
            </Helmet>
            -ClientProfile
            <ClientDetails />
            <ClientConsumption />
        </div>
    );
}

export default ClientProfile;