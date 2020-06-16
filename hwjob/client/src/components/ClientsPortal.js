// MODULES
import React from 'react';
import { Helmet } from 'react-helmet';

// COMPONENTS
import SearchClient from './SearchClient';
import ClientList from './ClientList';

// STYLESHEETS
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

/**
 * ClientPortal Component displays :
 * - A searchbar for the user
 * - The list of results (i.e. clients)
 */
const ClientPortal = () => {

    // console.log("ClientPortal - Props: ", this.props)
    return (
        <div>
            <Helmet>
                <title>Clients | Hello Watt</title>
            </Helmet>
            <div className="title">
                <PeopleAltIcon />
                <h3>Client Portal</h3>
            </div>
            <div className="main-content">
                <SearchClient />
                <ClientList />
            </div>
        </div>
    );
};


export default ClientPortal;