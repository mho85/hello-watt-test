import React from 'react';
import { Helmet } from 'react-helmet';

import SearchClient from './SearchClient';
import ClientList from './ClientList';

const ClientPortal = () => {


    // console.log("ClientPortal - Props: ", this.props)
    return (
        <div>
            <Helmet>
                <title>Clients | Hello Watt</title>
            </Helmet>
            <h3>Client Portal</h3>
            <SearchClient />
            <ClientList />
        </div>
    );
};


export default ClientPortal;