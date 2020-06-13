import React from 'react';
import { Helmet } from 'react-helmet';

import ClientDetails from './ClientDetails';
import ClientConsumption from './ClientConsumption';


const ClientProfile = (props) => {

    const username = "John Doe";
    const id = Number(props.match.params.id);

    return (
        <div>
            <Helmet>
                <title>{username}'s profile | Hello watt</title>
            </Helmet>
                -ClientProfile
            <hr />
            <ClientDetails id={id} />
            <hr />
            <ClientConsumption id={id} />
        </div>
    );
};


export default ClientProfile;