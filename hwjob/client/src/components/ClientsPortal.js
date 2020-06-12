import React from 'react';
import { Helmet } from 'react-helmet';

import SearchClient from './SearchClient';
import AddClient from './AddClient';
import ClientList from './ClientList';

const ClientPortal = () => {
    return (
        <div>
            <Helmet>
                <title>Clients | Hello Watt</title>
            </Helmet>
            -ClientPortal
            <SearchClient />
            <AddClient />
            <ClientList />
        </div>
    );
}

export default ClientPortal;