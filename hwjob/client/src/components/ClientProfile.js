// MODULES
import React from 'react';
import { Helmet } from 'react-helmet';

// COMPONENTS
import ClientDetails from './ClientDetails';
import ClientConsumption from './ClientConsumption';

// STYLESHEETS
import PersonIcon from '@material-ui/icons/Person';

/**
 * ClientProfile displays:
 * - The client details
 * - The client consumption during the previous year
 * @param {*} props 
 */
const ClientProfile = (props) => {

    const id = Number(props.match.params.id);

    return (
        <div>
            <Helmet>
                <title>Client Profile | Hello Watt</title>
            </Helmet>
            <div className="title">
                <PersonIcon />
                <h3>Client Profile</h3>
            </div>
            <div className="main-content">
                <ClientDetails id={id} />
                <ClientConsumption id={id} />
            </div>
        </div>
    );
};


export default ClientProfile;