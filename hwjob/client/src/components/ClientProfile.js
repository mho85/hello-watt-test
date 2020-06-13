import React from 'react';
import { Helmet } from 'react-helmet';

import ClientDetails from './ClientDetails';
import ClientConsumption from './ClientConsumption';


const ClientProfile = (props) => {

    const id = Number(props.match.params.id);

    return (
        <div>
            <Helmet>
                <title>Client profile | Hello Watt</title>
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