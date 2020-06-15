import React from 'react';
import { Helmet } from 'react-helmet';
import PersonIcon from '@material-ui/icons/Person';

import ClientDetails from './ClientDetails';
import ClientConsumption from './ClientConsumption';


const ClientProfile = (props) => {

    const id = Number(props.match.params.id);

    return (
        <div>
            <Helmet>
                <title>Client profile | Hello Watt</title>
            </Helmet>
            <div className="title">
                <PersonIcon />
                <h3>Client Profile</h3>
            </div>
            <ClientDetails id={id} />
            <ClientConsumption id={id} />
        </div>
    );
};


export default ClientProfile;